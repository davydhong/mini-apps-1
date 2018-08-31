import React from 'react';

var Col = ({ x, y, handlePlacerMouseEnter, handlePlacerMouseLeave, handlePlaceDisc, valueFromState }) => (
	<div className={`col ${valueFromState}`} x={x} y={y} onMouseEnter={handlePlacerMouseEnter} onMouseLeave={handlePlacerMouseLeave} onClick={handlePlaceDisc}>
		Col
	</div>
);
export default Col;
