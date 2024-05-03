"use client";

import Button from "@/UI/Button.tsx/Button";
import styles from "./BackButton.module.scss";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className={styles["back-btn"]}>
      <Button doing={handleBack}>Назад</Button>
    </div>
  );
}

export default BackButton;
