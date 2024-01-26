import './App.css';
// import Counter from './components/Counter';
// import { useContext } from 'react';
// import { CounterContext } from './context/Counter';
import Item from './components/item';
import Cart from './components/cart';

function App() {
  // const counterState = useContext(CounterContext);

  return (
    <div className="App">
      {/* <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter /> */}
      <Item name="MacBook Pro" price={100000}/>
      <Item name="Pendrive" price={1000}/>
      <Item name="Mobile" price={15000}/>
      <Cart />
    </div>
  );
}

export default App;
