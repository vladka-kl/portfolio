import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Layout from "../../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Layout />
      </div>
    </main>
  );
}
