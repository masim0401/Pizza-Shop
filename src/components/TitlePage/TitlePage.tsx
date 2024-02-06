import styles from './TitlePage.module.css';
import cn from 'classnames';
import {TitlePageProps} from './TitlePage.props.ts';
import React from 'react';

const TitlePage: React.FC<TitlePageProps> = ({children}) => {
	return (
		<div className={cn(styles['title'])}>
			{children}
		</div>
	);
};

export default TitlePage;