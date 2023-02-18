// Components
import { useState } from "react";
import Layout from "../../components/Layout";
import Legend from "../../components/Legend/Legend";
import ListSinteringMachines from "../../components/ListSinteringMachines/ListSinteringMachines";

// Styles
import styles from "./MainPage.module.css";

function MainPage() {
	const [isInactiveShown, setIsActiveShown] = useState<boolean>();

	return (
		<Layout title="Главный экран">
			<Legend />
			<ListSinteringMachines />
		</Layout>
	);
}

export default MainPage;
