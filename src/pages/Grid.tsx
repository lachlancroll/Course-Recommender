import Head from 'next/head';
import styles from '@/styles/Grid.module.css';

export default function GridPage() {
  return (
    <>
      <Head>
        <title>Grid Page</title>
        <meta name="description" content="A simple grid page" />
      </Head>
      <div className={styles.grid}>
        {Array.from({ length: 9 }).map((_, idx) => (
          <div key={idx} className={styles.gridItem}>
            Item {idx + 1}
          </div>
        ))}
      </div>
    </>
  )
}
