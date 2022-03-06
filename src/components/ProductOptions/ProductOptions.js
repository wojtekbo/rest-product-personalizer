import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOptions = (props) => {
  const generateSummary = (e) => {
    e.preventDefault();
    console.log(`
          Summary:
          ==========
          Name: ${props.title}
          Price: ${props.getPrice(props.currentSize)}
          Size: ${props.currentSize}
          Color: ${props.currentColor}`);
  };

  return (
    <form
      onSubmit={(e) => {
        generateSummary(e);
      }}
    >
      <OptionSize {...props} />
      <OptionColor {...props} />

      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

export default ProductOptions;
