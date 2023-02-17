import clsx from 'clsx';
import { addMonths, addYears, format, subMonths, subYears } from 'date-fns';
import { ru } from 'date-fns/locale';

import { IconChevronDown, IconChevronLeft, IconChevronRight } from './Icons';
import {
	CalculateFunctions,
	CalendarType,
	CalendarViewSelectorProps,
} from './types';
import { getHeaderControl, toUpperFirstChar } from './utils';

import styles from './Calendar.module.css';

const calculateFunctions: CalculateFunctions = {
	[CalendarType.Day]: [subMonths, addMonths],
	[CalendarType.DayTime]: [subMonths, addMonths],
	[CalendarType.Period]: [subMonths, addMonths],
	[CalendarType.Month]: [subYears, addYears],
	[CalendarType.Year]: [subYears, addYears],
	[CalendarType.PeriodWithTime]: [subMonths, addMonths],
};

function CalendarViewSelector({
	className,
	style,
	onChangeType,
	onChangeDate,
	selectedDate,
	selectedCalendarType,
}: CalendarViewSelectorProps) {
	const { raiseYearType, setNextDate, setPreviousDate } = getHeaderControl(
		calculateFunctions,
		selectedDate,
		selectedCalendarType,
		onChangeType,
		onChangeDate,
	);
	const raiseMonthType = () => onChangeType && onChangeType(CalendarType.Month);

	return (
		<div
			className={clsx(styles.calendar_view_selector, className)}
			style={style}
		>
			<div className={styles.period_control_buttons}>
				<button
					type="button"
					onClick={raiseYearType}
					className={clsx(
						styles.type_select_button,
						selectedCalendarType === CalendarType.Year && styles.type_selected,
					)}
				>
					{format(selectedDate, 'yyyy')}
					<IconChevronDown />
				</button>
				<button
					type="button"
					onClick={raiseMonthType}
					className={clsx(
						styles.type_select_button,
						selectedCalendarType === CalendarType.Month && styles.type_selected,
					)}
					disabled={selectedCalendarType === CalendarType.Year}
				>
					{toUpperFirstChar(format(selectedDate, 'LLLL', { locale: ru }))}
					<IconChevronDown />
				</button>
			</div>
			<div className={styles.period_control_buttons}>
				<button
					type="button"
					className={styles.change_date_button}
					onClick={setPreviousDate}
				>
					<IconChevronLeft />
				</button>
				<button
					type="button"
					className={styles.change_date_button}
					onClick={setNextDate}
				>
					<IconChevronRight />
				</button>
			</div>
		</div>
	);
}

export default CalendarViewSelector;
