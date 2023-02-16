// Components
import Layout from "../../components/Layout";
import Legend from "./partials/Legend";

// Styles
import styles from "./MainPage.module.css";
import CardOneExhauster from "../../components/CardOneExhauster";

function MainPage() {
  return (
    <Layout title="Главная страница" headerRightElement={<Legend />}>
      <CardOneExhauster />
    </Layout>
  );
}

export default MainPage;
