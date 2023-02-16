// Components
import Layout from "../../components/Layout";
import Legend from "./partials/Legend";

// Styles
import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <Layout title="Главная страница" headerRightElement={<Legend />}>
      <div className={styles["root"]}>Содержимое страницы</div>
    </Layout>
  );
}

export default MainPage;
