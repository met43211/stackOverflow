import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Loader.module.scss";

function Loader() {
  return (
    <div className={styles["loading"]}>
      <CircularProgress />
    </div>
  );
}

export default Loader;
