import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "clientSlice",
    version: 1,
    storage,
    blacklist: [],
  };
  
  const initialState = {
    clients:[],
    sites:[],
    projects:[]
  };

  export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
      getALlClients: (state, {payload}) => {
       state.clients=payload;
      },
      getALlSites: (state, {payload}) => {
       state.sites=payload;
      },
      getALlProject: (state, {payload}) => {
       state.projects=payload;
      },
    },
  });
  
  export const { getALlClients,getALlSites,getALlProject } = filterSlice.actions;
  
  export default persistReducer(persistConfig, filterSlice.reducer);