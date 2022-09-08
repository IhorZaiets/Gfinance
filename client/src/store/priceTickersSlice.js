import { createSlice } from '@reduxjs/toolkit';

export const priceTickersSlice = createSlice({
	name: 'priceTickers',
	initialState: {
		tickers: [],
		removedTickers: [],
		pausedTickers: [],
	},
	reducers: {
		setTickers(state, action) {
			state.tickers = action.payload;
		},
		removeTicker(state, action) {
			state.removedTickers = [...state.removedTickers, action.payload];
		},
		addTicker(state, action) {
			state.removedTickers = state.removedTickers.filter(
				(removedTicker) => removedTicker !== action.payload
			);
		},
		pauseTicker(state, action) {
			state.pausedTickers = [...state.pausedTickers, action.payload];
		},
		resumeTicker(state, action) {
			state.pausedTickers = [
				state.pausedTickers.filter(
					(ticker) => ticker.ticker !== action.payload
				),
			];
		},
	},
});

export const {
	setTickers,
	removeTicker,
	addTicker,
	pauseTicker,
	resumeTicker,
} = priceTickersSlice.actions;

export default priceTickersSlice.reducer;
