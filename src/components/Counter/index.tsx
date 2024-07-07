import { useState, useEffect } from 'react';

type CounterProps = {
	initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
	const [count, setCount] = useState(initialCount);

	useEffect(() => {
        const onCounterMount = new Event('onCounterMount');
        window.dispatchEvent(onCounterMount);
		console.log('Componente montado!');

		return () => {
            const onCounterUnmount = new Event('onCounterUnmount');
            window.dispatchEvent(onCounterUnmount);
			console.log('Componente desmontado!');
		};
	}, []);

	useEffect(() => {
        const onCounterUpdate = new CustomEvent('onCounterUpdate', { detail: count });
        window.dispatchEvent(onCounterUpdate);
		console.log('Componente atualizado!');
	});

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<h2>Contador: {count}</h2>
			<button onClick={handleIncrement}>Incrementar +</button>
		</div>
	);
};
