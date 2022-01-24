import React from 'react';
//import store from './redux/store';
import { useDispatch } from 'react-redux';
//import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
 const dispatch = useDispatch();

 /*React.useEffect(() => {
  axios.get('http://localhost:3001/pizzas').then((res) => {
   console.log(res);
  });
 }, []);*/

 return (
  <div className="wrapper">
   <Header />
   <div className="content">
    <Routes>
     <Route path="/" element={<Home />} exact />
     <Route path="/cart" element={<Cart />} exact />
    </Routes>
   </div>
  </div>
 );
}

export default App;

/*function App() {
 //const [pizzas, setPizzas] = React.useState([]);

 React.useEffect(() => {
  /*axios.get('http://localhost:3000/db.json').then(({res}) => {
   setPizzas(res.pizzas);
  });
  fetch('http://localhost:3000/db.json').then((res) => {
   res.json().then((card) => setPizzas(card.pizzas));
  });
 }, []);*/

/*return (
  <div className="wrapper">
   <Header />
   <div className="content">
    <Routes>
     <Route path="/" element={<Home items={pizzas} />} exact />
     <Route path="/cart" element={<Cart />} exact />
    </Routes>
   </div>
  </div>
 );
}*/

/*class Appeen extends React.Component {
 componentDidMount() {
  fetch('http://localhost:3000/db.json').then((res) => {
   res.json().then((card) => this.props.setPizzas(card.pizzas));
  });
 }
 render() {
  return (
   <div className="wrapper">
    <Header />
    <div className="content">
     <Routes>
      <Route path="/" element={<Home items={this.props.items} />} exact />
      <Route path="/cart" element={<Cart />} exact />
     </Routes>
    </div>
   </div>
  );
 }
}

const mapStateToProps = (state) => {
 return {
  items: state.pizzas.items,
  filter: state.filter,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  setPizzas: (items) => dispatch(setPizzas(items)),
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);*/
