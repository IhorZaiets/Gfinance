import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import TickerTable from './components/TickerTable';
import IntervalForm from './components/IntervalForm';

import { useState } from 'react';
import AddTicker from './components/AddTicker';

function App() {
	const [intervalTime, setIntervalTime] = useState(5000);
	// https://react-bootstrap.github.io/components/list-group/

	const onIntervalSubmit = (time) => {
		setIntervalTime(time * 1000);
	};

	return (
		<Container>
			<h1>Gfinance</h1>
			<AddTicker />
			<TickerTable intervalTime={intervalTime} />
			<IntervalForm onIntervalSubmit={onIntervalSubmit} />
		</Container>
	);
}

export default App;
