import Article from '@/components/article/article';
import styles from './podcasts.module.css';

const PodcastsPage = () => {
  return <div className={styles.container}>
    <div className={styles.article}>
      <Article />
    </div>
    <div className={styles.article}>
      <Article />
    </div>
    <div className={styles.article}>
      <Article />
    </div>
    <div className={styles.article}>
      <Article />
    </div>
    <div className={styles.article}>
      <Article />
    </div>
    <div className={styles.article}>
      <Article />
    </div>


  </div>;

};

export default PodcastsPage;