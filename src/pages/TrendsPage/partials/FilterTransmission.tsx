import { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../../assets/arrow.svg";
import Checkbox from "../../../components/Checkbox";
import { TransmissionType } from "../../../store/schema/types";

// Styles
import styles from "../TrendsPage.module.css";

interface IProps {
	item: TransmissionType;
}

function FilterTransmission({ item }: IProps) {
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
				<div className={styles["group_title"]}>Главный привод</div>
			</section>
			{isOpen && (
				<section className={styles["group_body"]}>
					<div className={styles["group_item"]}>
						<section className={styles["group_item_parameters"]}>
							<Checkbox checked={false} name="oil_level" title="Ток, А" />
							<Checkbox
								checked={false}
								name="oil_pressure"
								title="Ток двигателя, А"
							/>
							<Checkbox
								checked={false}
								name="oil_level"
								title="Напряжение ротера, кВт"
							/>
							<Checkbox
								checked={false}
								name="oil_pressure"
								title="Напряжение статера, кВт"
							/>
						</section>
					</div>
				</section>
			)}
		</div>
	);
}
export default FilterTransmission;
