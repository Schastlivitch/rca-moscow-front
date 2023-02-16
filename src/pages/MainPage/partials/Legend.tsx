// Styles
import { useNavigate } from "react-router-dom";
import styles from "../MainPage.module.css";

function Legend() {
	const navigate = useNavigate();
	return (
		<div className={styles["legend"]}>
			<div
				className={styles["legend_item"]}
				onClick={() => navigate("/control/123")}
			>
				Легенда 1
			</div>
			<div
				className={styles["legend_item"]}
				onClick={() => navigate("/trends/123")}
			>
				Легенда 2
			</div>
		</div>
	);
}

export default Legend;
