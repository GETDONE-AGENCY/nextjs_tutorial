const { default: Link } = require("next/link")
import styles from './article.module.css';

const Article = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
                <div className={styles.ImageContainer}>
                    <img src='https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' fill className={styles.Image} />
                </div>
            </div>
			<div className={styles.bottom}>
				<h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Podcaster</p>
                <Link href="./podcasts/1">READ MORE</Link>
			</div>
		</div>
	);
};

export default Article;
