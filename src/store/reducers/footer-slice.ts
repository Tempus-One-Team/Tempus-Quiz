import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FooterButton {
    label: string;
    onClick: () => void;
}

interface FooterState {
    buttons: FooterButton[];
}

const initialState: FooterState = {
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
