import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "fieldManageSlice",
  version: 1,
  storage,
  blacklist: [],
};

const initialState = {
  toolboxmeetingfield: [],
  observationfield: [],
  siteinspectionfield: [],
  lmrfield: [],
  scafoldingfield: [],
  journeyplannerfield: [],
  safetydocumentfield: [],
};

export const fieldManageSlice = createSlice({
  name: "toolboxField",
  initialState,
  reducers: {
    gettoolBoxFieldManage: (state, payload) => {
      state.toolboxmeetingfield = payload.payload
    },
    getObservationField: (state, payload) => {
      state.observationfield = payload.payload
    },
    getSiteInspectionField: (state, payload) => {
      state.siteinspectionfield = payload.payload
    },
    getLmrField: (state, payload) => {
      state.lmrfield = payload.payload
    },
    getScafoldingField: (state, payload) => {
      state.scafoldingfield = payload.payload
    },
    getjourneyplannerField: (state, payload) => {
      state.journeyplannerfield = payload.payload
    },
    getSafetyDocumentField: (state, payload) => {
      state.safetydocumentfield = payload.payload
    },

  }
});

export const { gettoolBoxFieldManage,
  getObservationField, getSiteInspectionField,
  getLmrField, getScafoldingField,
  getjourneyplannerField, getSafetyDocumentField } = fieldManageSlice.actions;
export default persistReducer(persistConfig, fieldManageSlice.reducer);