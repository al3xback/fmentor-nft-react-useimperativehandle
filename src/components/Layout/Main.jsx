import { useRef, forwardRef, useImperativeHandle, useState } from 'react';

import './Main.scss';
import Card from '../Card/Card.jsx';

const Main = forwardRef(function Main(props, ref) {
	const [card, setCard] = useState(null);
	const main = useRef();

	useImperativeHandle(ref, () => {
		return {
			initCard(value) {
				setCard(value);
			},
		};
	});

	return (
		<main ref={main}>
			<div className="container">
				{!card && <p>No card data found!</p>}
				{card && <Card {...card} />}
			</div>
		</main>
	);
});

export default Main;
