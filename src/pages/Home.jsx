import React from 'react';
import { Categories, SortPopup } from '../components';
import PizzaBlock from '../components/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { PizzaLoadingBlock } from '../components';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = [
 'Мясные',
 'Вегетарианская',
 'Гриль',
 'Острые',
 'Закрытые',
];

const sortItem = [
 { name: 'популярности', type: 'popular', order: 'desc' },
 { name: 'цене', type: 'price', order: 'desc' },
 { name: 'названию', type: 'name', order: 'asc' },
];

function Home() {
 const dispatch = useDispatch();
 const items = useSelector(({ pizzas }) => pizzas.items);
 const cartItems = useSelector(({ cart }) => cart.items);
 const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
 const { category, sortBy } = useSelector(({ filters }) => filters);

 React.useEffect(() => {
  dispatch(fetchPizzas(sortBy, category));
 }, [category, sortBy]);

 const onSelectItem = React.useCallback((type) => {
  dispatch(setCategory(type));
 }, []);

 const onSelectSortType = React.useCallback((index) => {
  dispatch(setSortBy(index));
 }, []);

 const handleAddPizzaToCart = (obj) => {
  dispatch(addPizzaToCart(obj));
 };

 return (
  <div className="container">
   <div className="content__top">
    <Categories
     activeItem={category}
     onClickItem={onSelectItem}
     items={categoryNames}
    />
    <SortPopup
     activeSortType={sortBy.type}
     items={sortItem}
     onClickSortType={onSelectSortType}
    />
   </div>
   <h2 className="content__title">Все пиццы</h2>
   <div className="content__items">
    {isLoaded
     ? items.map((item) => (
        <PizzaBlock
         onClickAddPizza={handleAddPizzaToCart}
         key={item.id}
         addedCount={cartItems[item.id] && cartItems[item.id].items.length}
         {...item}
        />
       ))
     : Array(10)
        .fill(0)
        .map((_, index) => <PizzaLoadingBlock key={index} />)}
   </div>
  </div>
 );
}

export default Home;
