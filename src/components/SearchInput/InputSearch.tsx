import styles from './InputSearch.module.css';
import cn from 'classnames';
import {InputSearchProps} from './InputSearch.props.ts';
import React from 'react';

export const InputSearch: React.FC<InputSearchProps> = () => {
	return (
		<div className={cn(styles['search'])}>
			<img src="../../../public/search-icon.svg" alt="search"/>
			<input className={cn(styles['search-input'])} type="text" placeholder={'Введите блюдо или состав'}/>
		</div>
	);
};
