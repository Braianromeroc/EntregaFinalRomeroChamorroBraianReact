import React, { useEffect, useState } from "react";


const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="counter text-center">
			<button className="btn rounded-start-pill" disabled={count <= 1} onClick={decrease}>
				-
			</button>
			<span className="p-1">{count}</span>
			<button className="btn rounded-end-circle" disabled={count >= stock} onClick={increase}>
				+
			</button>
			<div>
				<button className="btn btn-success pt-1" disabled={stock <= 0} onClick={() => onAdd(count)}>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;