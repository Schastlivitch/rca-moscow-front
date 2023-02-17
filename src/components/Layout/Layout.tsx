import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./Layout.module.css";

interface IProps {
	title: string;
	children: ReactNode;
	headerRightElement?: ReactNode;
	className?: string;
}

function Layout({ children, headerRightElement, title, className }: IProps) {
	return (
		<div className={clsx(styles["root"], className)}>
			<section className={styles["header"]}>
				<h2 className={styles["title"]}>{title}</h2>
				<div className={styles["right_container"]}>{headerRightElement}</div>
			</section>
			<section className={styles["content"]}>{children}</section>
		</div>
	);
}

export default Layout;
