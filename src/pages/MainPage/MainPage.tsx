// Components
import Layout from "../../components/Layout";
import Legend from "../../components/Legend/Legend";

// Styles
import styles from "./MainPage.module.css";
import ListSinteringMachines from "../../components/ListSinteringMachines/ListSinteringMachines";

function MainPage() {
  return (
    <Layout title="Главный экран">
      <Legend />
      <ListSinteringMachines />
    </Layout>
  );
}

export default MainPage;
