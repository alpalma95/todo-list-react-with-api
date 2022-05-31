import React from "react";

const ItemsCounter = ({ counter }) => {
	return (
		<div className="items-counter">
			<small>
				{counter} {`${counter === 1 ? `item` : `items`}`} left
			</small>
		</div>
	);
};

export default ItemsCounter;
