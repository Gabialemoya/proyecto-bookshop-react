import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import {setPokemon} from '../store/pokemon'

export default function List(){
    const pokemon = useSelector(state => state.pokemon)
    const dispatch = useDispatch()
    const [input, setInput] = useState({});
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => dispatch(setPokemon(res.data)))
    },[]);
    //console.log(pokemon)
        return (
            <div>
                <Input/>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites['front_shiny']}/>
            </div>
            
        )
}

