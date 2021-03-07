import { createAction, createReducer } from "@reduxjs/toolkit";

export const setPokemon = createAction('SET_POKEMON')
const pokemonReducer = createReducer([],{
    [setPokemon]:(state, action)=> action.payload
})

export default pokemonReducer