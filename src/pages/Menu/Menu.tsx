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
				<ItemMenu
					id={1}
					title='Наслаждение'
					description={'Салями, руккола, помидоры, оливки'}
					rating={4.5}
					image={'../../../public/item-menu/card-1.svg'}
					price={300}
				/>
				{/*<ItemMenu/>*/}
				{/*<ItemMenu/>*/}
				{/*<ItemMenu/>*/}
				{/*<ItemMenu/>*/}
				{/*<ItemMenu/>*/}
			</div>
		</>
	);
}

export default Menu;