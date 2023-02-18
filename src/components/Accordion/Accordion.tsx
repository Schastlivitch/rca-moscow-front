import { FC, useState, ReactNode } from "react";
import styles from "./Accordion.module.css";
import arrowIcon from "../../assets/images/arrow_selector.svg";
import Button from "../Button";
import joinClassNames from "../../Utils/joinClassNames";
import ArrowSelector from "../../assets/imagesTsx/ArrowSelector";

interface IAccordionProp {
	title?: string;
	className?: string;
	children?: ReactNode;
	isPreOpened?: boolean;
}
const Accordion: FC<IAccordionProp> = ({
	title,
	className,
	children,
	isPreOpened,
}) => {
	const [isOpen, setOpen] = useState<boolean>(Boolean(isPreOpened));

	return (
		<div className={joinClassNames([styles.body, className])}>
			<div className={styles.header}>
				<Button
					className={styles["header__btn"]}
					onClick={() => {
						setOpen(!isOpen);
					}}
				>
					<div
						className={joinClassNames([
							styles["arrow"],
							isOpen ? styles["arrow_down"] : styles["arrow_up"],
						])}
					>
						<div className={styles["arrow-icon"]}>
							<ArrowSelector />
						</div>
					</div>
					<h3 className={styles["header__title"]}>{title}</h3>
				</Button>
			</div>
			{isOpen && children}
		</div>
	);
};

export default Accordion;
