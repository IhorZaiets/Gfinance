import React from 'react';
import { Provider } from 'react-redux';

import { fireEvent, render, screen } from '@testing-library/react';

import TickerItem from '../components/TickerItem';

const props = {
	ticker: {
		change: '160.34',
		change_percent: '0.71',
		dividend: '0.03',
		exchange: 'NASDAQ',
		last_trade_time: '2022-09-06T15:34:58.000Z',
		price: '167.35',
		ticker: 'AAPL',
		yield: '1.95',
	},
};

const mockedStore = {
	subscribe: jest.fn(),
	useDispatch: jest.fn(),
	getState: jest.fn(),
	useSelector: jest.fn(),
	dispatch: jest.fn(),
};

describe('Ticker item component', () => {
	it('ticker item is displayed', () => {
		render(
			<Provider store={mockedStore}>
				<TickerItem {...props} />
			</Provider>
		);
		const title = screen.getByTestId('tableItem');
		expect(title).toBeInTheDocument();
	});

	it('remove button works', () => {
		const { getByTestId } = render(
			<Provider store={mockedStore}>
				<TickerItem {...props} />
			</Provider>
		);
		expect(getByTestId('removeBtn')).toBeTruthy();

		fireEvent.click(getByTestId('removeBtn'));
	});
});
