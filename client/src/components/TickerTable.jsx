import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListGroup from 'react-bootstrap/ListGroup';

import TickerItem from './TickerItem';

import { fetchTickers } from '../store/priceTickersApi';

const TickerTable = ({ intervalTime }) => {
	const dispatch = useDispatch();

	const { tickers, pausedTickers, removedTickers } = useSelector(
		(state) => state.priceTickers
	);

	const withPausedTickers = tickers.map((ticker) => {
		const findPausedTicker = pausedTickers.find(
			(pausedTicker) => pausedTicker.ticker === ticker.ticker
		);
		return findPausedTicker ? findPausedTicker : ticker;
	});

	const tickersToShow = withPausedTickers.filter(
		(ticker) =>
			!removedTickers.find((tickerName) => tickerName === ticker.ticker)
	);

	useEffect(() => {
		dispatch(fetchTickers(intervalTime));
	}, [dispatch, intervalTime]);

	return (
		<>
			<ListGroup variant='flush'>
				{tickersToShow.length > 0 ? (
					tickersToShow?.map((item) => (
						<TickerItem key={Math.random()} ticker={item} />
					))
				) : (
					<p>There is no tickers. Please, add some</p>
				)}
			</ListGroup>
		</>
	);
};

export default TickerTable;
