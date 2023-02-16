// Components
import Layout from "../../components/Layout";
import Legend from "./partials/Legend";

// Styles
import styles from "./SchemaPage.module.css";

function ControlPage() {
  return (
    <Layout title="Эксгаустер" headerRightElement={<Legend />}>
      <div className={styles["root"]}>Содержимое страницы</div>
    </Layout>
  );
}

export default ControlPage;
