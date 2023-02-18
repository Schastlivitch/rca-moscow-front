import clsx from "clsx";
import { ReactNode } from "react";
import Spinner from "../Spinner";
import styles from "./Layout.module.css";

interface IProps {
	title: string;
	isLoading: boolean;
	children: ReactNode;
	headerRightElement?: ReactNode;
	className?: string;
}

function Layout({
	children,
	headerRightElement,
	title,
	className,
	isLoading,
}: IProps) {
	return (
		<div className={clsx(styles["root"], className)}>
			<section className={styles["header"]}>
				<div className={styles["left_container"]}>
					<h2 className={styles["title"]}>{title}</h2>
					{isLoading && <Spinner />}
				</div>

				<div className={styles["right_container"]}>{headerRightElement}</div>
			</section>
			<section className={styles["content"]}>{children}</section>
		</div>
	);
}

export default Layout;
