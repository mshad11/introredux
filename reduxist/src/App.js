
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import counterReducer from './reducers/counter';
import {increment,decrement} from './actions/index'

function App() {
  //pulling the data
  const counter = useSelector((state) => state.counter)
  const isLogged = useSelector((state)=>state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="app">
      <h1>The count is: {counter} </h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Some valuable info</h3> : <h3>Not logged</h3>}
    </div>
  );
}

export default App;
