// Components
import { useCallback, useState } from "react";
import Calendar from "../../components/Calendar";
import { CalendarType } from "../../components/Calendar/types";
import Layout from "../../components/Layout";
import Chart from "./partials/Chart";
import Filter from "./partials/Filter";

// Styles
import styles from "./TrendsPage.module.css";

function TrendsPage() {
	const [dates, setDates] = useState<Date[]>([]);
	const [currentParam, setCurrentParam] = useState<string>("oil_level");

	const currentParamHandler = useCallback((param: string) => {
		setCurrentParam(param);
	}, []);

	const dateSelectHandler = useCallback((dates: Date[]) => {
		setDates(dates);
	}, []);

	return (
		<Layout title="Тренды" className={styles["root"]}>
			<section className={styles["control"]}>
				<Calendar
					dates={dates}
					onSelect={dateSelectHandler}
					type={CalendarType.PeriodWithTime}
					usedTypes={[CalendarType.PeriodWithTime]}
				/>
			</section>
			<div className={styles["container"]}>
				<Filter
					currentParam={currentParam}
					currentParamHandler={currentParamHandler}
				/>
				<Chart currentParam={currentParam} dates={dates} />
			</div>
		</Layout>
	);
}

export default TrendsPage;
