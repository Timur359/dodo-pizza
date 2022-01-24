import React from 'react';
import PropTypes from 'prop-types';

/*export class Categories extends React.Component {
 state = {
  activeItem: 0,
 };

 onSelectItem = (index) => {
  this.setState({
   activeItem: index,
  });
 };

 render() {
  const { items } = this.props;
  return (
   <div className="categories">
    <ul>
     {items.map((item, index) => (
      <li
       className={this.state.activeItem === index ? 'active' : ''}
       onClick={() => this.onSelectItem(index)}
       key={`${item}_${index}`}
      >
       {item}
      </li>
     ))}
    </ul>
   </div>
  );
 }
}*/

const Categories = React.memo(function Categories({
 activeItem,
 items,
 onClickItem,
}) {
 //const [activeItem, setActiveItem] = React.useState(null);

 /*const onSelectItem = (index) => {
  //setActiveItem(index);
  onClickItem(index);
 };*/

 return (
  <div className="categories">
   <ul>
    <li
     className={activeItem === null ? 'active' : ''}
     onClick={() => onClickItem(null)}
    >
     Все
    </li>
    {items &&
     items.map((item, index) => (
      <li
       className={activeItem === index ? 'active' : ''}
       onClick={() => onClickItem(index)}
       key={`${item}_${index}`}
      >
       {item}
      </li>
     ))}
   </ul>
  </div>
 );
});

Categories.propTypes = {
 //activeItem: PropTypes.oneOf([PropTypes.number, null]),
 items: PropTypes.arrayOf(PropTypes.string).isRequired,
 onClickItem: PropTypes.func,
};

Categories.defaultProps = {
 activeItem: null,
 items: [],
};

export default Categories;
