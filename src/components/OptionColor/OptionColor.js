import styles from '../ProductOptions/ProductOptions.module.scss';
import {v4 as uuidv4} from 'uuid';
import clsx from 'clsx';

const OptionColor = (props) => {
  //   console.log('OptionColor');
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map((color) => {
          return (
            <li key={uuidv4()}>
              <button
                onClick={() => {
                  props.setCurrentColor(color);
                }}
                key={uuidv4()}
                type="button"
                className={clsx(styles['color' + color.charAt(0).toUpperCase() + color.slice(1)], props.currentColor === color && styles.active)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OptionColor;
