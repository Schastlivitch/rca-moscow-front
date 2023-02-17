import clsx from 'clsx';
import {
	eachYearOfInterval,
	endOfDecade,
	endOfYear,
	format,
	formatISO,
	isSameYear,
	startOfDecade,
	startOfYear,
} from 'date-fns';
import { ru } from 'date-fns/locale';

import { CalendarPaneProps } from './types';
import { CalendarContext } from './utils';

import styles from './Calendar.module.css';

function CalendarYears({ className, style }: CalendarPaneProps) {
	return (
		<CalendarContext.Consumer>
			{({ onSelect, dates = [new Date()], displayDate, onChangeDate }) => {
				const [currentDate = new Date()] = dates;
				const startYear = startOfDecade(displayDate || currentDate);
				const endYear = endOfDecade(displayDate || currentDate);
				return (
					<div className={clsx(styles.calendar_years, className)} style={style}>
						{eachYearOfInterval({ start: startYear, end: endYear }).map(
							(year) => (
								<div
									key={formatISO(year)}
									className={clsx(
										styles.cell,
										isSameYear(year, new Date()) && styles.current_day,
									)}
								>
									<button
										type="button"
										className={clsx(
											styles.button,
											isSameYear(year, currentDate) && styles.selected,
										)}
										onClick={() =>
											!onChangeDate
												? onSelect([startOfYear(year), endOfYear(year)])
												: onChangeDate(year)
										}
									>
										{format(year, 'yyyy', { locale: ru })}
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

export default CalendarYears;
