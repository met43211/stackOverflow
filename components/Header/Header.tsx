import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["logo"]}>
        <Link href={"/"}>
          <h1>StackOverflow Поиск</h1>
        </Link>
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;
