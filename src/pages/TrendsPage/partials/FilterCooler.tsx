import { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../../assets/arrow.svg";
import Checkbox from "../../../components/Checkbox";
import { CoolerType } from "../../../store/schema/types";

// Styles
import styles from "../TrendsPage.module.css";

interface IProps {
	item: CoolerType;
}

function FilterCooler({ item }: IProps) {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const toggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className={styles["filter_group"]}>
			<section className={styles["group_header"]}>
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
								checked={false}
								name="oil_level"
								title="T воды до, °С"
							/>
							<Checkbox
								checked={false}
								name="oil_pressure"
								title="T воды после, °С"
							/>
							<Checkbox
								checked={false}
								name="oil_pressure"
								title="T масла до, °С"
							/>
							<Checkbox
								checked={false}
								name="oil_pressure"
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
