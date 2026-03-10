import Image from "next/image";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>TCB's PokeMMO Utilities</h1>
          <p>
            Starting project placeholder. Will update with more utilities as I
            create them. Feel free to reach out if you have any suggestions. DM
            me through discord <i>(theclosedbox)</i>.
          </p>
        </div>
      </main>
    </div>
  );
}
