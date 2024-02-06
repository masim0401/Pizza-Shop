import styles from './User.module.css';
import { UserProps } from './User.props';
import cn from 'classnames';
import React from 'react';
import Button from '../Button/Button.tsx';
import {NavLink} from 'react-router-dom';

const User: React.FC<UserProps> = () => {
	return (
		<div className={cn(styles['wrapper'])}>
			<img  src="../../../public/avatar.svg" alt="user-avatar"/>
			<div className={cn(styles['user-login'])}>
				<h3>Anton Larichev</h3>
				<span>alarcode@ya.com</span>
			</div>
			<div className={cn(styles['menu-item'])}>
				<img src="../../../public/menu-icon.svg" alt="menu"/>
				<Button appearence='menu-item'><NavLink to='/' className={({ isActive }) => cn(styles['menu-link'], {
					[styles.active] : isActive
				})}>Меню</NavLink></Button>
			</div>
			<div className={cn(styles['menu-item'])}>
				<img src="../../../public/cart-icon.svg" alt="cart"/>
				<Button appearence='menu-item'><NavLink to='/cart' className={({ isActive }) => cn(styles['menu-link'], {
					[styles.active] : isActive
				})}>Корзина</NavLink></Button>
			</div>
			<Button className={cn(styles['button-menu'])} appearence='logout'>
				<img src="../../../public/logout-icon.svg" alt="logout"/>
				Выйти
			</Button>
		</div>
	);
};


export default User;