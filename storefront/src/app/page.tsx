import Link from "next/link";
import styles from "./page.module.scss";

export default function LandingPage() {
    return (
        <main className={styles.container}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Castera's Creator Store</h1>
                <p className={styles.description}>
                    Handcrafted Digital Assets & Merch for Builders.
                    <br />
                    ユニークなアイテムをあなたに。
                </p>

                <Link href="/store" className={styles.button}>
                    Enter Store
                </Link>
            </div>

            <footer className={styles.footer}>
            </footer>
        </main>
    );
}
