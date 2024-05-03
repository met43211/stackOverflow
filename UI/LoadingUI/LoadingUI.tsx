import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Loading.module.scss";

function LoadingUI() {
  return (
    <div className={styles["loading"]}>
      <CircularProgress />
    </div>
  );
}

export default LoadingUI;
