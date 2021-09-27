import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <Image src="/img.jpg" alt="profile" width={300} height={500} />
      <h1 className={styles['title-homepage']}>Welcome Antasofa</h1>
    </Layout>
  )
}

export default Home
