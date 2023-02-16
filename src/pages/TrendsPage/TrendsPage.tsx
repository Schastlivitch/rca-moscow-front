// Components
import Layout from "../../components/Layout";
import Legend from "./partials/Legend";

// Styles
import styles from "./TrendsPage.module.css";

function TrendsPage() {
  return (
    <Layout title="Тренды" headerRightElement={<Legend />}>
      <div className={styles["root"]}>Содержимое страницы</div>
    </Layout>
  );
}

export default TrendsPage;
