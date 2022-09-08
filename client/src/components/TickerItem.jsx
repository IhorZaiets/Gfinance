import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { tickersCompanies } from '../helpers/tickersCompanies';
import {
	pauseTicker,
	removeTicker,
	resumeTicker,
} from '../store/priceTickersSlice';
import { useDispatch } from 'react-redux';

import styles from '../styles/TickerItem.module.css';

const TickerItem = ({ ticker }) => {
	const dispatch = useDispatch();

	const randomizer = Math.round(Math.random());
	const arrow = randomizer ? '↓' : '↑';

	const handleRemoveClick = () => {
		dispatch(removeTicker(ticker.ticker));
	};

	const onPauseClick = () => {
		dispatch(pauseTicker({ ...ticker, isPaused: true }));
	};

	const onResumeClick = () => {
		dispatch(resumeTicker(ticker.ticker));
	};

	return (
		<ListGroup.Item data-testid='tableItem'>
			<Row fluid='true'>
				<Col>
					<Badge>{ticker.ticker}</Badge>
				</Col>
				<Col>{tickersCompanies[ticker.ticker]}</Col>
				<Col>{ticker.price} $</Col>
				<Col>{ticker.yield} $</Col>
				<Col>
					<Badge bg={randomizer ? 'success' : 'danger'}>
						{arrow} {ticker.change_percent} %
					</Badge>
				</Col>
				<Col className={styles['button-group']}>
					{ticker.isPaused ? (
						<Button variant='success' onClick={onResumeClick}>
							Resume
						</Button>
					) : (
						<Button variant='warning' onClick={onPauseClick}>
							Pause
						</Button>
					)}
					<Button
						variant='danger'
						onClick={handleRemoveClick}
						data-testid='removeBtn'
					>
						Remove
					</Button>
				</Col>
			</Row>
		</ListGroup.Item>
	);
};

export default TickerItem;
