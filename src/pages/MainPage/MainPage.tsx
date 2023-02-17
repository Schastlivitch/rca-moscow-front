// Components
import Layout from "../../components/Layout";
import Legend from "./partials/Legend";

// Styles
import styles from "./MainPage.module.css";
import CardOneExhauster from "../../components/CardOneExhauster";
import ItemsList from "../../components/Accordion/partials/ItemsList";

function MainPage() {
  return (
    <Layout title="Главная страница" headerRightElement={<Legend />}>
      <CardOneExhauster />
      <ItemsList />
    </Layout>
  );
}

export default MainPage;
