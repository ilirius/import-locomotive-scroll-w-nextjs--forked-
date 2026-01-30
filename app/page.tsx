import LocomotiveScrollWrapper from "@/components/LocomotiveScrollWrapper";
import styles from "./page.module.css";

export default function Home() {
  return (
    <LocomotiveScrollWrapper>
      <h1 className={styles.title}>Basic Usage</h1>
      <div className={styles.wrapper}>
        <div className={styles.box} data-scroll data-scroll-speed="-0.2"></div>
        <div className={styles.box} data-scroll data-scroll-speed="0.3"></div>
      </div>
      <div style={{ height: "100vh" }}></div>
    </LocomotiveScrollWrapper>
  );
}
