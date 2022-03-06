// import styles from './OptionSize.module.scss';
import styles from '../ProductOptions/ProductOptions.module.scss';
import {v4 as uuidv4} from 'uuid';

const OptionSize = (props) => {
  //   console.log('OptionSize');
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size) => {
          return (
            <li key={uuidv4()}>
              <button onClick={() => props.setCurrentSize(size.name)} key={uuidv4()} type="button" className={props.currentSize === size.name ? styles.active : styles.nonActive}>
                {size.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OptionSize;
