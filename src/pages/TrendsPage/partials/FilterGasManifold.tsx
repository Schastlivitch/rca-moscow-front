import { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../../assets/arrow.svg";
import Checkbox from "../../../components/Checkbox";
import { GasManifoldType } from "../../../store/schema/types";

// Styles
import styles from "../TrendsPage.module.css";

interface IProps {
	item: GasManifoldType;
	currentParam: string;
	currentParamHandler: (param: string) => void;
}

function FilterGasManifold({ item, currentParam, currentParamHandler }: IProps) {
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
				<div className={styles["group_title"]}>Газовый коллектор</div>
			</section>
			{isOpen && (
				<section className={styles["group_body"]}>
					<div className={styles["group_item"]}>
						<section className={styles["group_item_parameters"]}>
							<Checkbox checked={false} name="oil_level" title="T газа, °С" />
							<Checkbox
								checked={currentParam === 'under_pressure'}
								onChange={() => currentParamHandler("under_pressure")}
								name="under_pressure"
								title="Разряжение, мм.в.ст"
							/>
						</section>
					</div>
				</section>
			)}
		</div>
	);
}
export default FilterGasManifold;
