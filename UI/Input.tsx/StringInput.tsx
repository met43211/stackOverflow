import { HTMLInputTypeAttribute } from "react";
import styles from "./Input.module.scss";

interface StringInputI {
  type: HTMLInputTypeAttribute;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}

function StringInput({ type, value, setValue, placeholder }: StringInputI) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={styles["input"]}
    />
  );
}

export default StringInput;
