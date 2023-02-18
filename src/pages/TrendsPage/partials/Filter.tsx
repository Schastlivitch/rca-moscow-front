// Components
import FilterBearings from "./FilterBearings";
import FilterOil from "./FilterOil";
import FilterTransmission from "./FilterTransmission";
import FilterCooler from "./FilterCooler";
import FilterGasManifold from "./FilterGasManifold";

// Config
import filterConfig from "../filterConfig";

// Styles
import styles from "../TrendsPage.module.css";

interface IProps {
	currentParam: string;
	currentParamHandler: (param: string) => void;
}

function Filter({ currentParam, currentParamHandler }: IProps) {
	return (
		<div className={styles["filter"]}>
			<section className={styles["filter_header"]}>
				<div className={styles["header_item"]}>Показать тренды для параметра:</div>
				{/* <div className={styles["header_item"]}>Значение</div> */}
			</section>
			<section className={styles["filter_body"]}>
				<FilterBearings
					items={filterConfig.bearings}
					currentParam={currentParam}
					currentParamHandler={currentParamHandler}
				/>
				<FilterOil
					item={filterConfig.oilSystem}
					currentParam={currentParam}
					currentParamHandler={currentParamHandler}
				/>
				<FilterTransmission
					item={filterConfig.transmission}
					currentParam={currentParam}
					currentParamHandler={currentParamHandler}
				/>
				<FilterCooler
					item={filterConfig.cooler}
					currentParam={currentParam}
					currentParamHandler={currentParamHandler}
				/>
				<FilterGasManifold
					item={filterConfig.gasManifold}
					currentParam={currentParam}
					currentParamHandler={currentParamHandler}
				/>
			</section>
		</div>
	);
}

export default Filter;
