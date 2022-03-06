import {useState} from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import {v4 as uuidv4} from 'uuid';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map((product) => {
        return (
          <div key={uuidv4()}>
            <Product key={uuidv4()} id={product.id} name={product.name} title={product.title} colors={product.colors} sizes={product.sizes} basePrice={product.basePrice} />
          </div>
        );
      })}
    </section>
  );
};

export default Products;
