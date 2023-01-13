import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchBalances } from './balancesApi';

interface BalancesState {
  isLoading: boolean;
  allowances?: {
    [address: string]: string;
  }
  balances?: {
    [address: string]: string;
  }
}

const initialState: BalancesState = {
  isLoading: false,
};

const balancesSlice = createSlice({
  name: 'balances',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoading: action.payload,
    }),
  },
  extraReducers: builder => {
    builder.addCase(fetchBalances.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(fetchBalances.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      balances: action.payload,
    }));
  },
});

export const {
  setIsLoading,
} = balancesSlice.actions;

export default balancesSlice.reducer;
