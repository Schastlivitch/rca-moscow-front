import clsx from "clsx";
import {
	compareAsc,
	eachDayOfInterval,
	endOfDay,
	format,
	formatISO,
	isSameDay,
	isSameMonth,
	isToday,
	isWithinInterval,
	startOfDay,
} from "date-fns";

import CalendarTimeSelector from "./CalendarTimeSelector";
import { CalendarPaneProps } from "./types";
import {
	CalendarContext,
	getMonthGridDatesPeriod,
	isInOfMinMax,
} from "./utils";

import styles from "./Calendar.module.css";

function CalendarDay({
	className,
	style,
	period = false,
	showTimeSelect = false,
}: CalendarPaneProps) {
	return (
		<CalendarContext.Consumer>
			{({
				onSelect,
				dates = [new Date()],
				min,
				max,
				displayDate,
				displayPeriod,
				isStartPeriod,
				onChangePeriod,
				onTogglePeriodFlag,
			}) => {
				const [currentDate = new Date()] = dates;

				const [startDate, endDate] = getMonthGridDatesPeriod(
					displayDate || currentDate
				);
				const [startInterval, endInterval] =
					period && displayPeriod ? displayPeriod : dates;

				const startSetPeriod = (date: Date) => {
					onChangePeriod && onChangePeriod([startOfDay(date), endOfDay(date)]);
					onTogglePeriodFlag && onTogglePeriodFlag(true);
				};

				const endSetPeriod = (date: Date) => {
					if (displayPeriod == null) {
						onTogglePeriodFlag && onTogglePeriodFlag(false);
						return;
					}
					const period: Date[] = [displayPeriod[0], endOfDay(date)].sort(
						compareAsc
					);
					onChangePeriod && onChangePeriod(period);
					onTogglePeriodFlag && onTogglePeriodFlag(false);
					onSelect(period);
				};

				const setStartPeriodTime = (date: Date) => {
					if (displayPeriod == null) {
						return;
					}
					const period: Date[] = [date, displayPeriod[1]].sort(compareAsc);
					onSelect(period);
				};

				const setEndPeriodTime = (date: Date) => {
					if (displayPeriod == null) {
						return;
					}
					const period: Date[] = [displayPeriod[0], date].sort(compareAsc);
					onSelect(period);
				};

				const raiseSelectPeriod = (date: Date) => {
					if (period && !isStartPeriod) startSetPeriod(date);
					if (period && isStartPeriod) endSetPeriod(date);
					if (!period && !isStartPeriod)
						onSelect([startOfDay(date), endOfDay(date)]);
				};

				return (
					<>
						<div className={clsx(styles.calendar_day, className)} style={style}>
							<div className={styles.day_of_week}>Пн</div>
							<div className={styles.day_of_week}>Вт</div>
							<div className={styles.day_of_week}>Ср</div>
							<div className={styles.day_of_week}>Чт</div>
							<div className={styles.day_of_week}>Пт</div>
							<div className={styles.day_of_week}>Сб</div>
							<div className={styles.day_of_week}>Вс</div>
							{eachDayOfInterval({ start: startDate, end: endDate }).map(
								(day) => (
									<div
										key={formatISO(day)}
										className={clsx(
											styles.cells,
											!isSameMonth(day, displayDate || currentDate) &&
												styles.out_of_month,
											isToday(day) && styles.current_day
										)}
									>
										<button
											type="button"
											className={clsx(
												styles.button,
												isSameDay(day, currentDate) && styles.selected,
												isWithinInterval(day, {
													start: startInterval || startOfDay(currentDate),
													end: endInterval || endOfDay(currentDate),
												}) && styles.selected
											)}
											disabled={isInOfMinMax(day, min, max)}
											onClick={() => raiseSelectPeriod(day)}
										>
											{format(day, "d")}
										</button>
									</div>
								)
							)}
						</div>
						{showTimeSelect && (
							<>
								{period ? (
									<div className={styles.time_period}>
										Время от
										<CalendarTimeSelector
											date={startInterval}
											onTimeSelect={(date) => {
												setStartPeriodTime(date);
											}}
										/>
										до
										<CalendarTimeSelector
											date={endInterval}
											onTimeSelect={(date) => {
												setEndPeriodTime(date);
											}}
										/>
									</div>
								) : (
									<div className={styles.time_period}>
										Время
										<CalendarTimeSelector
											date={startInterval}
											onTimeSelect={(date) => {
												setStartPeriodTime(date);
											}}
										/>
									</div>
								)}
							</>
						)}
					</>
				);
			}}
		</CalendarContext.Consumer>
	);
}

export default CalendarDay;
