"use client";

import styles from "./Button.module.scss";

interface ButtonI {
  children: React.ReactNode;
  doing?: (params: any) => void;
  type?: "button" | "submit" | "reset" | undefined;
}

function Button({ children, doing, type }: ButtonI) {
  return (
    <button className={styles["button"]} onClick={doing} type={type}>
      {children}
    </button>
  );
}

export default Button;
