import ColourSwatches from '../ColourSwatches/ColourSwatches';
import SizeSelector from '../SizeSelector/SizeSelector';
import QuantityPicker from '../QuantityPicker/QuantityPicker';
import styles from './ProductInfo.module.scss';

const ProductInfo = ({ 
        product, 
        selectedColour, 
        selectedSize, 
        selectedSizeData, 
        quantity, 
        onColourChange, 
        onSizeChange, 
        onQuantityChange, 
        onAddToCart 
}) => {

    return (
        <div className={styles.wrapper}>
            {/* Brand */}
            <p className={styles.brand}>{product.category}</p>
            
            {/* Title */}
            <h1 className={styles.title}>{product.title}</h1>

            {/* Price block */}
            {product.variants?.salePrice ? (
                <div className={styles.priceBlock}>
                    <span className={styles.salePrice}>${product.variants.salePrice}</span>
                    <span className={styles.originalPrice}>${product.price}</span>
                </div>
            ) : (
                <p className={styles.price}>${product.price}</p>
            )}

            <ColourSwatches 
                colours={product?.variants?.colours || []} 
                selectedColour={selectedColour} 
                onColourChange={onColourChange} 
            />
            <SizeSelector 
                sizes={product?.variants?.sizes || []} 
                selectedSize={selectedSize} 
                onSizeChange={onSizeChange} 
            />
            <QuantityPicker
                quantity={quantity}
                maxStock={selectedSizeData?.stock || 1}
                onQuantityChange={onQuantityChange}
            />
            {/* Add to cart button */}
            <button className={styles.addToCart} onClick={onAddToCart} disabled={!selectedSize || (selectedSizeData?.stock || 0) === 0}>
                Add to Cart
            </button>

            {selectedSize && (
                <p className={styles.delivery}>
                    Estimated delivery: 3–5 business days
                </p>
            )}
        </div>
    );
}

export default ProductInfo;