import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}> We Are On a Mission </h2>
        <h1 className={styles.subtitle}>Knowledge at your Fingertips. </h1>
        <p className={styles.desc}>
          {' '}
          Find your favourite Podcast and get all you need, within seconds. Not
          only provide we accurate details on hot topics, but also direct links
          to the products & references you desire.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>70.000+</h1>
            <p>Podcast Summarized</p>
          </div>
          <div className={styles.box}>
            <h1>45 Mio</h1>
            <p>Satisfied Customers</p>
          </div>
          <div className={styles.box}>
            <h1>12 Mio</h1>
            <p>Active Users</p>
          </div>
        </div>
      </div>
      <div className={styles.ImageContainer}>
        <Image src='/about.png' alt='' fill className={styles.aboutImage} />
      </div>
    </div>
  )
}
export default AboutPage
