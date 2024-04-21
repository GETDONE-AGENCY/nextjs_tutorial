import styles from './singlePost.module.css';
import Link from 'next/link';

const SinglePodcastPage = () => {
  return (
  <div className={styles.container}>
    <img src='https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' className={styles.image} />
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Title</h1>
      <p className={styles.desc}>AN DFJA KFAKFKAADKDFKA L AF ALBFJHA BCLA</p>
      <Link className={styles.link} href='/podcasts/post'>LISTEN HERE</Link>
    </div>
  </div>
  );
};

export default SinglePodcastPage;