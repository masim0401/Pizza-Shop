import React from 'react';
import {ItemDescriptionProps} from './ItemDescription.props.ts';
import {useParams} from 'react-router-dom';

const ItemDescription: React.FC<ItemDescriptionProps> = () => {
	const { id } = useParams();
	return (
		<>
            descriptions -- {id}
		</>
	);

};

export default ItemDescription;