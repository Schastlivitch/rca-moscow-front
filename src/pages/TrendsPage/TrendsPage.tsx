// Components
import { useCallback, useState } from "react";
import Calendar from "../../components/Calendar";
import { CalendarType } from "../../components/Calendar/types";
import Layout from "../../components/Layout";
import Chart from "./partials/Chart";
import Filter from "./partials/Filter";
import Legend from "./partials/Legend";

// Styles
import styles from "./TrendsPage.module.css";

function TrendsPage() {
	const [calendarType, setCalendarType] = useState<CalendarType>(
		CalendarType.DayTime
	);
	const [dates, setDates] = useState<Date[]>([]);

	const dateSelectHandler = useCallback((dates: Date[]) => {
		setDates(dates);
	}, []);

	const dateTypeHandler = useCallback((type: CalendarType) => {
		setCalendarType(type);
	}, []);

	return (
		<Layout
			title="Тренды"
			headerRightElement={<Legend />}
			className={styles["root"]}
		>
			<section className={styles["control"]}>
				<Calendar
					dates={dates}
					onSelect={dateSelectHandler}
					type={calendarType}
					onTypeChange={dateTypeHandler}
					usedTypes={[CalendarType.DayTime, CalendarType.PeriodWithTime]}
				/>
			</section>
			<div className={styles["container"]}>
				<Filter />
				<Chart />
			</div>
		</Layout>
	);
}

export default TrendsPage;
