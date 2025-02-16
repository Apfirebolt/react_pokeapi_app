import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './features/pokemon/pokemonSlice'
import moveReducer from './features/move/moveSlice'
import itemReducer from './features/item/itemSlice'
import locationReducer from './features/location/locationSlice'
import machineReducer from './features/machine/machineSlice'

export const store = configureStore({
  reducer: {
    pokemonData: pokemonReducer,
    moveData: moveReducer,
    itemData: itemReducer,
    locationData: locationReducer,
    machineData: machineReducer,
  },
})