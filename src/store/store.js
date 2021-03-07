import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon";
import logger from 'redux-logger'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer:{
        pokemon:pokemonReducer
    }
})

export default store