import clsx from "clsx";
import { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../../assets/arrow.svg";
import Checkbox from "../../../components/Checkbox";
import { OilSystemType } from "../../../store/schema/types";

// Styles
import styles from "../TrendsPage.module.css";

interface IProps {
	item: OilSystemType;
	currentParam: string;
	currentParamHandler: (param: string) => void;
}

function FilterOil({ item, currentParam, currentParamHandler }: IProps) {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const toggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className={styles["filter_group"]}>
			<section className={clsx(styles["group_header"], isOpen && styles["--open"])}>
				<button type="button" onClick={toggle}>
					<ArrowIcon />
				</button>
				<div className={styles["group_title"]}>Маслобак</div>
			</section>
			{isOpen && (
				<section className={styles["group_body"]}>
					<div className={styles["group_item"]}>
						<section className={styles["group_item_parameters"]}>
							<Checkbox
								checked={currentParam === "oil_level"}
								onChange={() => currentParamHandler("oil_level")}
								name="oil_level"
								title="Уровень масла, %"
							/>
							<Checkbox
								checked={currentParam === "oil_pressure"}
								onChange={() => currentParamHandler("oil_pressure")}
								name="oil_pressure"
								title="Давление масла, кг/см2"
							/>
						</section>
					</div>
				</section>
			)}
		</div>
	);
}
export default FilterOil;
