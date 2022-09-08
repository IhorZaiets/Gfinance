import { useDispatch, useSelector } from 'react-redux';
import { addTicker } from '../store/priceTickersSlice';
import { tickersCompanies } from '../helpers/tickersCompanies';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const AddTicker = () => {
	const dispatch = useDispatch();
	const { removedTickers } = useSelector((state) => state.priceTickers);

	const handleSelect = (ticker) => {
		dispatch(addTicker(ticker));
	};

	return (
		<DropdownButton
			id='dropdown-basic-button'
			title='Add a ticker'
			style={{ marginBottom: '20px' }}
		>
			{removedTickers.length > 0 ? (
				removedTickers.map((ticker) => (
					<Dropdown.Item
						key={Math.random()}
						onClick={(event) => {
							event.preventDefault();
							handleSelect(ticker);
						}}
					>
						{tickersCompanies[ticker]}
					</Dropdown.Item>
				))
			) : (
				<Dropdown.Item disabled>There is no awailable tickers</Dropdown.Item>
			)}
		</DropdownButton>
	);
};

export default AddTicker;
