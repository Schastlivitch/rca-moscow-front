import clsx from 'clsx';
import {
	eachMonthOfInterval,
	endOfMonth,
	endOfYear,
	format,
	formatISO,
	isSameMonth,
	startOfMonth,
	startOfYear,
} from 'date-fns';
import { ru } from 'date-fns/locale';

import { CalendarPaneProps } from './types';
import { CalendarContext } from './utils';

import styles from './Calendar.module.css';

function CalendarMonth({ className, style }: CalendarPaneProps) {
	return (
		<CalendarContext.Consumer>
			{({ onSelect, dates = [new Date()], displayDate, onChangeDate }) => {
				const [currentDate = new Date()] = dates;
				const startYear = startOfYear(displayDate || currentDate);
				const endYear = endOfYear(displayDate || currentDate);
				return (
					<div className={clsx(styles.calendar_month, className)} style={style}>
						{eachMonthOfInterval({ start: startYear, end: endYear }).map(
							(month) => (
								<div
									key={formatISO(month)}
									className={clsx(
										styles.cell,
										isSameMonth(month, new Date()) && styles.current_day,
									)}
								>
									<button
										type="button"
										className={clsx(
											styles.button,
											isSameMonth(month, currentDate) && styles.selected,
										)}
										onClick={() =>
											!onChangeDate
												? onSelect([startOfMonth(month), endOfMonth(month)])
												: onChangeDate(month)
										}
									>
										{format(month, 'LLL', { locale: ru })}
									</button>
								</div>
							),
						)}
					</div>
				);
			}}
		</CalendarContext.Consumer>
	);
}

export default CalendarMonth;
