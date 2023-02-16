import { ReactNode } from "react";
import styles from "./Layout.module.css";

interface IProps {
  title: string;
  headerRightElement?: ReactNode;
  children: ReactNode;
}

function Layout({ children, headerRightElement, title }: IProps) {
  return (
    <div className={styles["root"]}>
      <section className={styles["header"]}>
        <h2 className={styles["title"]}>{title}</h2>
        <div className={styles["right_container"]}>{headerRightElement}</div>
      </section>
      <section className={styles["content"]}>{children}</section>
    </div>
  );
}

export default Layout;
