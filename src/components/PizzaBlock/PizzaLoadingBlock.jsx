import ContentLoader from 'react-content-loader';

import React from 'react';

function PizzaLoadingBlock() {
 return (
  <ContentLoader
   className="pizza-block"
   speed={2}
   width={280}
   height={457}
   viewBox="0 0 280 457"
   backgroundColor="#f3f3f3"
   foregroundColor="#ecebeb"
  >
   <circle cx="130" cy="130" r="130" />
   <rect x="0" y="270" rx="3" ry="3" width="280" height="24" />
   <rect x="0" y="313" rx="6" ry="6" width="280" height="84" />
   <rect x="0" y="405" rx="0" ry="0" width="89" height="27" />
   <rect x="117" y="404" rx="22" ry="22" width="151" height="44" />
  </ContentLoader>
 );
}

export default PizzaLoadingBlock;
