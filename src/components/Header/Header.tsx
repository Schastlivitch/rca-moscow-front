import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { LocationItemType } from "../../types";

import styles from "./Header.module.css";

function Header() {
	const { pathname } = useLocation();
	const { exhausterId } = useParams() as { exhausterId: string };
	const navigate = useNavigate();

	const navigateTo = (url: string) => {
		return () => navigate(url);
	};

	const currentLocationTitle: LocationItemType[] = useMemo(() => {
		if (pathname.includes("/trends")) {
			return [
				{ url: "/", title: "Главная страница" },
				{ url: `/schema/${exhausterId}`, title: "Панель управления" },
				{ url: `/trends/${exhausterId}`, title: "Тренды", isCurrent: true },
			];
		}

		if (pathname.includes("/schema")) {
			return [
				{ url: "/", title: "Главная страница" },
				{ url: `/schema/${exhausterId}`, title: "Панель управления", isCurrent: true },
				{ url: `/trends/${exhausterId}`, title: "Тренды" },
			];
		}

		return [];
	}, [pathname]);

	return (
		<div className={styles["root"]}>
			<section className={styles["left_section"]}>
				<Logo />
				<h1 className={styles["title"]}>Прогнозная аналитика эксгаустеров</h1>
			</section>
			<section className={styles["right_section"]}>
				{currentLocationTitle.map((item) => (
					<button
						type="button"
						key={item.url}
						disabled={item.isCurrent}
						onClick={navigateTo(item.url)}
						className={styles["navigation_item"]}
					>
						{item.title}
					</button>
				))}
			</section>
		</div>
	);
}

export default Header;
