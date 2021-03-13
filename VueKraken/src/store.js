import { createStore } from 'vuex'

// State is a place where our global variables goes.
const state = {
  cars: [],
  // We can have multiple variables here, though they need to be comma-separated.
}

// Mutations are functions that change or manipulate the state
// NOTE: do not ever make changes to state variables directly.
const mutations = {
  setCars(state, newCarsList){
    state.cars = newCarsList
  },
  removeCar(state, carToRemove){
    state.cars = state.cars.filter(car => car != carToRemove)
  },

  appendCar(state, carToAppend){
    state.cars.push(carToAppend)
  }
}

// Are the asyncronous functions 
const actions = {
  async initCars(store){
    // We grab all cars from our endpoint:
    let cars = await fetch('/rest/cars')
    cars = await cars.json()

    // We replace state.cars with the cars we grabbed.
    store.commit('setCars', cars)
  }
}


export default createStore({state, mutations, actions})
