import styles from './ItemMenu.module.css';
import Button from '../Button/Button.tsx';
function ItemMenu() {
	return (
		<div className={styles['card']}>
			<div className={styles['card_img']}>
				<div className={styles['price']}>300<span className={styles['price__orange']}> ₴</span></div>
				<div className={styles['rating']}>4.5 <img src="../../../public/item-menu/star.svg" alt="star"/></div>
				<Button appearence='buy' className={styles['buy']}><img src="../../../public/item-menu/buy-icon.svg" alt="star"/></Button>
			</div>
			<div className={styles['card__text']}>
				<h1 className={styles['card__title']}>Наслаждение</h1>
				<span className={styles['card__descr']}>Салями, руккола, помидоры, оливки</span>
			</div>
		</div>
	);
}

export default ItemMenu;