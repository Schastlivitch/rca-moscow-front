import { Route, Routes } from "react-router-dom";

// Components
import Header from "../Header";

// Pages
import ControlPage from "../../pages/ControlPage";
import MainPage from "../../pages/MainPage";
import TrendsPage from "../../pages/TrendsPage";
import NotFoundPage from "../../pages/NotFoundPage";

// Styles
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles["root"]}>
			<Header />
			<section className={styles["layout"]}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="trends" element={<NotFoundPage />} />
					<Route path="trends/:exhausterId" element={<TrendsPage />} />
					<Route path="control" element={<NotFoundPage />} />
					<Route path="control/:exhausterId" element={<ControlPage />} />
				</Routes>
			</section>
		</div>
	);
}

export default App;
