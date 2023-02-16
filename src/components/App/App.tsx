import { Routes, Route } from "react-router-dom";

// Components
import Header from "../Header";

// Pages
import ControlPage from "../../pages/ControlPage";
import MainPage from "../../pages/MainPage";
import TrendsPage from "../../pages/TrendsPage";

// Styles
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["root"]}>
      <Header />
      <section className={styles["layout"]}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/trends/:exhausterId" element={<TrendsPage />} />
        </Routes>
        <Routes>
          <Route path="/control/:exhausterId" element={<ControlPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
