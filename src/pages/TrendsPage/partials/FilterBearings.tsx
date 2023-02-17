import { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../../assets/arrow.svg";
import Checkbox from "../../../components/Checkbox";
import { BearingItemType } from "../../../store/schema/types";

// Styles
import styles from "../TrendsPage.module.css";

interface IProps {
	items: BearingItemType[];
}

function FilterBearings({ items }: IProps) {
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
				<div className={styles["group_title"]}>Подшипники</div>
			</section>
			{isOpen && (
				<section className={styles["group_body"]}>
					{items.map((item) => (
						<div className={styles["group_item"]}>
							<section className={styles["group_item_name"]}>
								{item.displayName}
							</section>
							<section className={styles["group_item_parameters"]}>
								<Checkbox
									checked={false}
									name={`${item.name}_temp`}
									title="T, °С"
								/>
								{item.vibration && (
									<>
										<Checkbox
											checked={true}
											name={`${item.name}_yVibration`}
											title="Верт, мм/с"
										/>
										<Checkbox
											checked={true}
											name={`${item.name}_xVibration`}
											title="Гориз, мм/с"
										/>
										<Checkbox
											checked={true}
											name={`${item.name}_axialVibration`}
											title="Ось, мм/с"
										/>
									</>
								)}
							</section>
						</div>
					))}
				</section>
			)}
		</div>
	);
}
export default FilterBearings;
