import { ReactNode, useState } from "react";
import clsx from "clsx";

import CalendarDay from "./CalendarDay";
import CalendarMonth from "./CalendarMonth";
import CalendarViewSelector from "./CalendarViewSelector";
import CalendarYears from "./CalendarYears";
import CalendarYearSelector from "./CalendarYearSelector";
import { CalendarPaneRootProps, CalendarType, RenderParts } from "./types";
import {
	CalendarContext,
	generateDefaultNavigationList,
	isAlternateHeader,
	useTransitionsStack,
} from "./utils";

import styles from "./Calendar.module.css";

const renderParts: RenderParts = {
	[CalendarType.Day]: <CalendarDay />,
	[CalendarType.DayTime]: <CalendarDay showTimeSelect />,
	[CalendarType.Period]: <CalendarDay period />,
	[CalendarType.Month]: <CalendarMonth />,
	[CalendarType.Year]: <CalendarYears />,
	[CalendarType.PeriodWithTime]: <CalendarDay period showTimeSelect />,
};

function CalendarPane({
	className,
	style,
	onSelect = () => {},
	type = CalendarType.Day,
	dates,
	min,
	max,
	renderBottomPaneSection,
}: CalendarPaneRootProps) {
	const { go, back, current } = useTransitionsStack(
		generateDefaultNavigationList(type)
	);
	const [defaultViewDate] = dates;
	const [currentViewDate, setCurrentDate] = useState<Date>(defaultViewDate);

	const [currentViewPeriod, setCurrentViewPeriod] = useState<Date[]>(dates);
	const [isStartPeriod, setIsStartPeriod] = useState<boolean>(false);

	const currentPaneType = current() || type;
	const pane: ReactNode = renderParts[currentPaneType];

	const changeViewDateAndBack = (newDate: Date) => {
		setCurrentDate(newDate);
		if (currentPaneType !== type) {
			back();
		}
	};

	const changeViewDate = (newDate: Date) => {
		setCurrentDate(newDate);
	};

	const changeViewPeriod = (period: Date[]) => {
		setCurrentViewPeriod(period);
	};

	const toggleStartPeriodFlag = (flag: boolean) => {
		setIsStartPeriod(flag);
	};

	const changePaneType = (paneType: CalendarType) => go(paneType);

	return (
		<CalendarContext.Provider
			value={{
				onSelect,
				dates,
				min,
				max,
				displayDate: currentViewDate,
				displayPeriod: currentViewPeriod,
				isStartPeriod,
				onChangeDate:
					currentPaneType !== type ? changeViewDateAndBack : undefined,
				onChangePeriod: changeViewPeriod,
				onTogglePeriodFlag: toggleStartPeriodFlag,
			}}
		>
			<div className={clsx(styles.calendar_pane, className)} style={style}>
				{!isAlternateHeader(type) ? (
					<CalendarViewSelector
						selectedCalendarType={currentPaneType}
						selectedDate={currentViewDate}
						onChangeDate={changeViewDate}
						onChangeType={changePaneType}
					/>
				) : (
					<CalendarYearSelector
						selectedCalendarType={currentPaneType}
						selectedDate={currentViewDate}
						onChangeDate={changeViewDate}
						onChangeType={changePaneType}
					/>
				)}
				{pane}
				{renderBottomPaneSection && (
					<div className={styles.calendar_pane_bottom}>
						{renderBottomPaneSection()}
					</div>
				)}
			</div>
		</CalendarContext.Provider>
	);
}

export default CalendarPane;
