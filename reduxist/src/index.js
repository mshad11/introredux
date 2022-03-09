import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// store => global store..let us import it
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
const store = createStore(allReducers)


//This comment part is just for understanding follow the seperate files path as shown i this project

// //Action
//  const incNumber = () =>{
//   return{
//     type: 'INCREMENT'
//   }
// }

//   const decNumber = () =>{
//   return{
//     type: 'DECREMENT'
//   }
// }
// //Reducer
// const counter = (state = 0 , action) =>{
//   switch(action.type){
//     case 'INCREMENT':
//     return state + 1;
//     case 'DECREMENT':
//       return state - 1;
      
//   }  
  
// }
// //store
// let store = createStore(counter) 

// //display it into the console
// store.subscribe(() =>console.log(store.getState()))

// //Dispatch
// store.dispatch(incNumber());
// store.dispatch(incNumber());
// store.dispatch(incNumber());
// store.dispatch(decNumber())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
