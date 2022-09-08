import { configureStore } from '@reduxjs/toolkit';
import priceTickersReducer from './priceTickersSlice';

export default configureStore({
	reducer: {
		priceTickers: priceTickersReducer,
	},
});
