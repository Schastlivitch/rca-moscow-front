import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import CalendarPane from "./CalendarPane";
import { IconCalendar } from "./Icons";
import { CalendarProps, CalendarType } from "./types";
import { formatDateByType, saveDate } from "./utils";

import styles from "./Calendar.module.css";

function Calendar({
	usedTypes = [
		CalendarType.Day,
		CalendarType.DayTime,
		CalendarType.Month,
		CalendarType.Year,
		CalendarType.Period,
		CalendarType.PeriodWithTime,
	],
	className,
	style,
	onSelect = () => {},
	type = CalendarType.Day,
	dates,
	min,
	max,
	onTypeChange,
	renderBottomPaneSection,
}: CalendarProps) {
	const [selectedType, setSelectedType] = useState(type);
	const [isPaneOpen, setIsPaneOpen] = useState(false);
	const paneRef = useRef<HTMLDivElement>(null);
	const safetyDates = saveDate(dates);

	const changeCalendarType = (calendarType: CalendarType) => {
		if (typeof onTypeChange === "function") {
			onTypeChange(calendarType);
			return;
		}
		setSelectedType(calendarType);
	};

	useEffect(() => {
		if (typeof onTypeChange === "function") {
			setSelectedType(type);
		}
	}, [type, setSelectedType, onTypeChange]);

	const togglePane = () => {
		setIsPaneOpen(!isPaneOpen);
	};

	const changeDate = (period: Date[]) => {
		togglePane();
		onSelect && onSelect(period);
	};

	const outsideClick = (e: Event) => {
		if (paneRef && paneRef.current?.contains(e.target as Node)) return;
		isPaneOpen && setIsPaneOpen(false);
	};

	useEffect(() => {
		document.addEventListener("mouseup", outsideClick);
		return () => document.removeEventListener("mouseup", outsideClick);
	});

	return (
		<div className={clsx("kit_calendar", styles.root, className)} style={style}>
			<div className={styles.open_pane_group} ref={paneRef}>
				<button
					type="button"
					className={styles.open_pane_button}
					onClick={togglePane}
				>
					<span>{formatDateByType(safetyDates, selectedType)}</span>
					<div className={styles.vertical_divider} />
					<IconCalendar />
				</button>
				{isPaneOpen && (
					<CalendarPane
						onSelect={changeDate}
						type={selectedType}
						dates={safetyDates}
						min={min}
						max={max}
						className={styles.pane_float}
						renderBottomPaneSection={renderBottomPaneSection}
					/>
				)}
			</div>
		</div>
	);
}

export default Calendar;
