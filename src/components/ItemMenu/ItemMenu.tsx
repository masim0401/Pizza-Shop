import styles from './ItemMenu.module.css';
import Button from '../Button/Button.tsx';
import {ItemMenuProps} from './ItemMenu.props.ts';
import {Link} from 'react-router-dom';
const ItemMenu: React.FC<ItemMenuProps> = (data) => {
	return (
		<Link to={`/product/${data.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['card_img']} style={{background: `url(${data.image})` }}>
					<div className={styles['price']}>{data.price}<span className={styles['price__orange']}>₴</span></div>
					<div className={styles['rating']}>{data.rating}<img src="../../../public/item-menu/star.svg" alt="star"/></div>
					<Button appearence='buy' className={styles['buy']}><img src="../../../public/item-menu/buy-icon.svg" alt="star"/></Button>
				</div>
				<div className={styles['card__text']}>
					<h1 className={styles['card__title']}>{data.title}</h1>
					<span className={styles['card__descr']}>{data.description}</span>
				</div>
			</div>
		</Link>
	);

};

export default ItemMenu;