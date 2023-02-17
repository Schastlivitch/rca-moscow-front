// Components
import FilterBearings from "./FilterBearings";

// Styles
import styles from "../TrendsPage.module.css";

import filterConfig from "../filterConfig";
import FilterOil from "./FilterOil";
import FilterTransmission from "./FilterTransmission";
import FilterCooler from "./FilterCooler";
import FilterGasManifold from "./FilterGasManifold";

function Filter() {
	return (
		<div className={styles["filter"]}>
			<section className={styles["filter_header"]}>
				<div className={styles["header_item"]}>Агрегат</div>
				<div className={styles["header_item"]}>Значение</div>
			</section>
			<section className={styles["filter_body"]}>
				<FilterBearings items={filterConfig.bearings} />
				<FilterOil item={filterConfig.oilSystem} />
				<FilterTransmission item={filterConfig.transmission} />
				<FilterCooler item={filterConfig.cooler} />
				<FilterGasManifold item={filterConfig.gasManifold} />
			</section>
		</div>
	);
}

export default Filter;
