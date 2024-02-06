import styles from './Layout.module.css';
import User from '../../components/User/User.tsx';
import {Outlet} from 'react-router-dom';
import cn from 'classnames';

function Layout() {
	return (
		<div className={cn(styles['layout'])}>
			<User/>
			<div className={cn(styles['layout__children'])}>
				<Outlet/>
			</div>
		</div>
	);
}

export default Layout;