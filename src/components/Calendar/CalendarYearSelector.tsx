import clsx from 'clsx';
import {
	addYears,
	endOfDecade,
	format,
	startOfDecade,
	subYears,
} from 'date-fns';

import { IconChevronDown, IconChevronLeft, IconChevronRight } from './Icons';
import {
	CalculateFunctions,
	CalendarType,
	CalendarViewSelectorProps,
} from './types';
import { getHeaderControl } from './utils';

import styles from './Calendar.module.css';

const calculateFunctions: CalculateFunctions = {
	[CalendarType.Month]: [subYears, addYears],
	[CalendarType.Year]: [subYears, addYears],
};

function CalendarYearSelector({
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

	const typeButtonCaption: string =
		selectedCalendarType === CalendarType.Month
			? format(selectedDate, 'yyyy')
			: `${format(startOfDecade(selectedDate), 'yyyy')} – ${format(
					endOfDecade(selectedDate),
					'yyyy',
			  )}`;

	return (
		<div
			className={clsx(styles.calendar_view_selector, className)}
			style={style}
		>
			<button
				type="button"
				className={styles.change_date_button}
				onClick={setPreviousDate}
			>
				<IconChevronLeft />
			</button>
			<button
				type="button"
				onClick={raiseYearType}
				className={clsx(
					styles.type_select_button,
					selectedCalendarType === CalendarType.Year && styles.type_selected,
				)}
			>
				{typeButtonCaption}
				<IconChevronDown />
			</button>
			<button
				type="button"
				className={styles.change_date_button}
				onClick={setNextDate}
			>
				<IconChevronRight />
			</button>
		</div>
	);
}

export default CalendarYearSelector;
