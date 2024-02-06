import styles from './Menu.module.css';
import ItemMenu from '../../components/ItemMenu/ItemMenu.tsx';
import TitlePage from '../../components/TitlePage/TitlePage.tsx';
import {InputSearch} from '../../components/SearchInput/InputSearch.tsx';

function Menu() {
	return (
		<>
			<header className={styles['header']}>
				<TitlePage>Меню</TitlePage>
				<InputSearch/>
			</header>
			<div className={styles['items']}>
				<ItemMenu/>
				<ItemMenu/>
				<ItemMenu/>
				<ItemMenu/>
				<ItemMenu/>
				<ItemMenu/>
			</div>
		</>
	);
}

export default Menu;