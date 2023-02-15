import { Routes, Route } from "react-router-dom";
import ExamplePage from "../../pages/ExamplePage";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["root"]}>
      <Routes>
        <Route path="/" element={<ExamplePage />} />
      </Routes>
    </div>
  );
}

export default App;
