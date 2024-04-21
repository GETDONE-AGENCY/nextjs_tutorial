import styles from './contact.module.css'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
          src='/contact.png'
          alt=''
          height={400}
          width={400}
          className={styles.contactimage}
          />
        </div>
        <div className={styles.formContainer}>
          <form action='' className={styles.form}>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Subject' />
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Message'
            ></textarea>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button className={styles.button}>Send</button>
          </form>
        </div>
    </div>
    </div>
  );
};

export default ContactPage;