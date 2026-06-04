import styles from './SizeSelector.module.scss';

const SizeSelector = ({ sizes, selectedSize, onSizeChange }) => {
    return (
        <div className={styles.sizeSelector}>
            <h3>Select Size:</h3>
            <div className={styles.sizeOptions}>
                {sizes.map(size => (
                    <div
                        key={size.label} 
                    >
                        <button 
                            disabled={size.stock === 0} 
                            onClick={() => onSizeChange(size.label)}
                            className={`${styles.button} ${selectedSize === size.label ? styles.active : ''} ${size.stock === 0 ? styles.soldOut : ''}`}
                        >
                            {size.label}
                        </button>
                        {size.stock <= 2 && size.stock > 0 && (
                            <span className={styles.lowStock}>Only {size.stock} left</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SizeSelector;