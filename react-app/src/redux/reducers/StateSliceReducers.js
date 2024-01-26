import { createSlice } from "@reduxjs/toolkit";

const SliceMain = createSlice({
    name: "mainSlice",
    initialState: {
        dataFetchProfilo: null,
        dataFetchEsperienze: null,
        dataFetchPaginaNotizie: null,
        dataFetchLavori: null,
        queryLavori: "",
        dataFetchGetCommenti: null,
    },

    reducers: {
        setDataFetchProfilo: (state, action) => {
            state.dataFetchProfilo = action.payload;
        },

        setDataFetchEsperienze: (state, action) => {
            state.dataFetchEsperienze = action.payload;
        },

        setDataFetchPaginaNotizie: (state, action) => {
            state.dataFetchPaginaNotizie = action.payload;
        },

        setDataFetchLavori: (state, action) => {
            state.dataFetchLavori = action.payload;
        },

        setQueryLavori: (state, action) => {
            state.queryLavori = action.payload;
        },

        setdataFetchGetCommenti: (state, action) => {
            state.dataFetchGetCommenti = action.payload;
        },
    },
});

export const {
    setDataFetchProfilo,
    setDataFetchEsperienze,
    setDataFetchPaginaNotizie,
    setDataFetchLavori,
    setQueryLavori,
    setdataFetchGetCommenti,
} = SliceMain.actions;
export default SliceMain.reducer;
