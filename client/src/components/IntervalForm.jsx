import { useState } from 'react';

import styles from '../styles/IntervalForm.module.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const IntervalForm = ({ onIntervalSubmit }) => {
	const [time, setTime] = useState(0);

	const onHandleSubmit = (event) => {
		event.preventDefault();
		onIntervalSubmit(time);
	};

	return (
		<Form
			onSubmit={onHandleSubmit}
			className={styles.intervalForm}
			data-testid='intervalForm'
		>
			<Form.Label htmlFor='input'>Enter interval time in seconds</Form.Label>
			<div className={styles.controls}>
				<Form.Control
					type='number'
					id='input'
					value={time}
					onChange={(event) => {
						setTime(event.target.value);
					}}
				/>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</div>
		</Form>
	);
};

export default IntervalForm;
