// Components
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Calendar from "../../components/Calendar";
import { CalendarType } from "../../components/Calendar/types";
import Layout from "../../components/Layout";
import useSelector from "../../hooks/useSelector";
import Chart from "./partials/Chart";
import Filter from "./partials/Filter";

// Styles
import styles from "./TrendsPage.module.css";

function TrendsPage() {

	const [dates, setDates] = useState<Date[]>([]);
	const [currentParam, setCurrentParam] = useState<string>("oil_level");

	const isLoading = useSelector((state) => state.trends.isLoading);

	const currentParamHandler = useCallback((param: string) => {
		setCurrentParam(param);
	}, []);

	const dateSelectHandler = useCallback((dates: Date[]) => {
		setDates(dates);
	}, []);

	return (
		<Layout title="Тренды" className={styles["root"]} isLoading={isLoading}>
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
