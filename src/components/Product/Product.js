import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import {useState} from 'react';
import ProductOptions from '../ProductOptions/ProductOptions';
import ProductImage from '../ProductImage/ProductImage';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = (currentSize) => {
    return props.basePrice + props.sizes.find((size) => size.name === currentSize).additionalPrice;
  };

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{getPrice(currentSize)}</span>
        </header>
        <ProductOptions {...props} currentColor={currentColor} setCurrentColor={setCurrentColor} currentSize={currentSize} setCurrentSize={setCurrentSize} getPrice={getPrice} />
      </div>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Product;
