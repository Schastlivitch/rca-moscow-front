// Components
import { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Legend from "../../components/Legend/Legend";
import ListSinteringMachines from "../../components/ListSinteringMachines/ListSinteringMachines";
import useSelector from "../../hooks/useSelector";
import Timer from "./partials/Timer";

// Styles
import styles from "./MainPage.module.css";

function MainPage() {
	const [isInactiveShown, setIsActiveShown] = useState<boolean>(true);

	const toggleActiveShown = useCallback(() => {
		setIsActiveShown((prev) => !prev);
	}, []);

	useEffect(() => {
		// window.echo.private("channel_name").listen("event_name", () => {
		// 	console.log("ping");
		// });

		// return () => {
		// 	window.echo.leave("channel_name");
		// };
	}, []);

	return (
		<Layout title="Главный экран" headerRightElement={<Timer />}>
			<Legend
				isInactiveShown={isInactiveShown}
				toggleActiveShown={toggleActiveShown}
			/>
			<ListSinteringMachines isInactiveShown={isInactiveShown} />
		</Layout>
	);
}

export default MainPage;
