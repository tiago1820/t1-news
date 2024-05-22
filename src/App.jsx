import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { NewsBoard } from "./components/NewsBoard";
import styles from "./App.module.css";

export const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div className={styles.app}>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  )
};