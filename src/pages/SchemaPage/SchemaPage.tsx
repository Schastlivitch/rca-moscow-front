// Components
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import MnemoSheme from "../../components/SvgComponents/MnemoSheme/MnemoSheme";
import { getSchemaAction } from "../../store/schema";
import Legend from "./partials/Legend";

// Styles
import styles from "./SchemaPage.module.css";

function ControlPage() {
  const id = "1";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSchemaAction(id));
  }, [dispatch]);
  return (
    <Layout title="Эксгаустер" headerRightElement={<Legend />}>
      <div className={styles["root"]}>
        {/* <MnemoSheme /> */}
      </div>
    </Layout>
  );
}

export default ControlPage;
