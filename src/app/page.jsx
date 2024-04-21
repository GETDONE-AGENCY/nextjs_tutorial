import styles from './home.module.css'
import Image from 'next/image'

const Home = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Cunnilingua</h1>
        <p className={styles.desc}>Inside Knowledge for All of Us.</p>
        <div className={styles.buttons}>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className={styles.button}>Learn More</button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className={styles.button}>Contact Us</button>
        </div>
      </div>
      {/* <div className={styles.imageContainer}>
        <Image src='/hero.png' alt='' fill className={styles.heroImage} />
      </div> */}
    </div>
  )
}

export default Home
