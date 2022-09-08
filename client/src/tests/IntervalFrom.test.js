import React from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';

import IntervalForm from '../components/IntervalForm';

const props = {
	onIntervalSubmit: jest.fn(),
};

const mockedStore = {
	subscribe: jest.fn(),
	useDispatch: jest.fn(),
	getState: jest.fn(),
	useSelector: jest.fn(),
	dispatch: jest.fn(),
};
describe('Interval form component', () => {
	it('interval form is displayed', () => {
		const { getByTestId } = render(
			<Provider store={mockedStore}>
				<IntervalForm {...props} />
			</Provider>
		);
		expect(getByTestId('intervalForm')).toBeTruthy();
	});
});
