import styles from './Cart.module.css';
import TitlePage from '../../components/TitlePage/TitlePage.tsx';

function Cart() {
	return (
		<>
			<header className={styles['header']}>
				<TitlePage>Корзина</TitlePage>
			</header>
		</>
	);
}

export default Cart;