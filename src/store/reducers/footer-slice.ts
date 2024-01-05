import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FooterButton {
    label: string;
    onClick: () => void;
}

export interface FooterState {
    buttons: FooterButton[];
}

export const initialState: FooterState = {
    buttons: [],
};

const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        setButtons: (state, action: PayloadAction<FooterButton[]>) => {
            state.buttons = action.payload;
        },
    },
});

export const { setButtons } = footerSlice.actions;

export default footerSlice.reducer;
