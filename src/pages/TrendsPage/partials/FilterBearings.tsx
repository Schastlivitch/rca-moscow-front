import clsx from "clsx";
import { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../../assets/arrow.svg";
import Checkbox from "../../../components/Checkbox";
import { BearingItemType } from "../../../store/schema/types";

// Styles
import styles from "../TrendsPage.module.css";

interface IProps {
	items: BearingItemType[];
	currentParam: string;
	currentParamHandler: (param: string) => void;
}

function FilterBearings({ items, currentParam, currentParamHandler }: IProps) {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const toggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className={styles["filter_group"]}>
			<section
				className={clsx(styles["group_header"], isOpen && styles["--open"])}
			>
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
									checked={currentParam === `${item.name}_temp`}
									onChange={() => currentParamHandler(`${item.name}_temp`)}
									name={`${item.name}_temp`}
									title="T, °С"
								/>
								{item.vibration && (
									<>
										<Checkbox
											checked={currentParam === `${item.name}_yVibration`}
											onChange={() =>
												currentParamHandler(`${item.name}_yVibration`)
											}
											name={`${item.name}_yVibration`}
											title="Верт, мм/с"
										/>
										<Checkbox
											checked={currentParam === `${item.name}_xVibration`}
											onChange={() =>
												currentParamHandler(`${item.name}_xVibration`)
											}
											name={`${item.name}_xVibration`}
											title="Гориз, мм/с"
										/>
										<Checkbox
											checked={currentParam === `${item.name}_axialVibration`}
											onChange={() =>
												currentParamHandler(`${item.name}_axialVibration`)
											}
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
