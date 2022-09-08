import { createAsyncThunk } from '@reduxjs/toolkit';
import { io } from 'socket.io-client';
import { setTickers } from './priceTickersSlice';
import store from './store';

const socket = io('ws://localhost:4000');

export const fetchTickers = createAsyncThunk(
	'tickers/fetchTickers',
	async (intervalTime) => {
		try {
			socket.disconnect();
			socket.connect();
			socket.emit('start', intervalTime);
			socket.on('ticker', (data) => {
				store.dispatch(setTickers(data));
			});
		} catch (err) {
			err.message();
		}
	}
);
