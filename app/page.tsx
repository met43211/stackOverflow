import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "./root.module.scss";
import MainInfo from "@/components/MainInfo/MainInfo";

export default function Home() {
  return (
    <div className={styles["main"]}>
      <MainInfo />
      <SearchBar />
    </div>
  );
}
