import React from "react";

const DecorationBox = ({ classNumber }) => {
	return (
		<div className={`decoration-box decoration-box__${classNumber}`}></div>
	);
};

export default DecorationBox;
