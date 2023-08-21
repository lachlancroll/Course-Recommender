import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simulate successful login
        router.push('/Grid');
      }

  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="User login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Login Page</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
          </div>

          <button type="submit" className={styles.submitButton}>Login</button>
        </form>
      </main>
    </>
  )
}
export default Login;