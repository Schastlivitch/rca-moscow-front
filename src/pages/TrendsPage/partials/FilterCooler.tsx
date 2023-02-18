import clsx from "clsx";
import { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../../assets/arrow.svg";
import Checkbox from "../../../components/Checkbox";
import { CoolerType } from "../../../store/schema/types";

// Styles
import styles from "../TrendsPage.module.css";

interface IProps {
	item: CoolerType;
	currentParam: string;
	currentParamHandler: (param: string) => void;
}

function FilterCooler({ item, currentParam, currentParamHandler }: IProps) {
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
				<div className={styles["group_title"]}>Охладитель</div>
			</section>
			{isOpen && (
				<section className={styles["group_body"]}>
					<div className={styles["group_item"]}>
						<section className={styles["group_item_parameters"]}>
							<Checkbox
								checked={currentParam === "water_t_before"}
								onChange={() => currentParamHandler("water_t_before")}
								name="water_t_before"
								title="T воды до, °С"
							/>
							<Checkbox
								checked={currentParam === "water_t_after"}
								onChange={() => currentParamHandler("water_t_after")}
								name="water_t_after"
								title="T воды после, °С"
							/>
							<Checkbox
								checked={currentParam === "oil_t_before"}
								onChange={() => currentParamHandler("oil_t_before")}
								name="oil_t_before"
								title="T масла до, °С"
							/>
							<Checkbox
								checked={currentParam === "oil_t_after"}
								onChange={() => currentParamHandler("oil_t_after")}
								name="oil_t_after"
								title="T масла после, °С"
							/>
						</section>
					</div>
				</section>
			)}
		</div>
	);
}
export default FilterCooler;
