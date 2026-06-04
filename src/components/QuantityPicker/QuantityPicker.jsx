import styles from './QuantityPicker.module.scss';

const QuantityPicker = ({ quantity, maxStock, onQuantityChange }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor="quantity">Quantity:</label>
            <div className={styles.controls}>
                <button className={styles.button} onClick={() => onQuantityChange(Math.max(1, quantity - 1))} disabled={quantity <= 1}>-</button>
                <span className={styles.quantity}>{quantity}</span>
                <button className={styles.button} onClick={() => onQuantityChange(Math.min(maxStock, quantity + 1))} disabled={quantity >= maxStock}>+</button>
            </div>
        </div>
    );
}

export default QuantityPicker;