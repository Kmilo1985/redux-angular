import {createReducer, on } from "@ngrx/store";
import { decrementar, dividir, incrementar, multiplicar, reset } from "./contador.actions";


export const initialState = 20;

const _contadorReducer = createReducer(initialState,
    on(incrementar, state => state + 1),
    on(decrementar, state => state - 1),
    // on(multiplicar,(state, props)=> state * props.numero), //opcional
    on(multiplicar,(state, {numero})=> state * numero), //destructuracion
    
    on(dividir,(state, {numero})=> state / numero), //destructuracion
    on(reset,(state, {numero})=> state = numero), //destructuracion



);

export function contadorReducer(state: any, action: any) {
    return _contadorReducer(state, action);
}