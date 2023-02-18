import { Route, Routes } from "react-router-dom";
import Echo from "laravel-echo";
import io from "socket.io-client";

// Components
import Header from "../Header";

// Pages
import SchemaPage from "../../pages/SchemaPage";
import MainPage from "../../pages/MainPage";
import TrendsPage from "../../pages/TrendsPage";
import NotFoundPage from "../../pages/NotFoundPage";

// Styles
import styles from "./App.module.css";
import { useEffect } from "react";

declare global {
	interface Window {
		echo: Echo;
		io: typeof io;
	}
}

function App() {
	useEffect(() => {
		// window.io = io;
		// window.echo = new Echo({
		// 	broadcaster: "socket.io",
		// 	host: "http://socket-url.com",
		// 	transport: ["websocket", "polling", "flashsocket"],
		// });
	}, []);

	return (
		<div className={styles["root"]}>
			<Header />
			<section className={styles["layout"]}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="trends" element={<NotFoundPage />} />
					<Route path="trends/:exhausterId" element={<TrendsPage />} />
					<Route path="schema" element={<NotFoundPage />} />
					<Route path="schema/:exhausterId" element={<SchemaPage />} />
				</Routes>
			</section>
		</div>
	);
}

export default App;
