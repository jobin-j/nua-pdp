import { useParams, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useProduct } from '../hooks/useProduct';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import { useCartContext } from '../context/CartContext';
import ProductTabs from '../components/ProductTabs/ProductTabs';

import styles from './ProductDetail.module.scss';

const ProductDetail = () => {
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const { product, loading, error } = useProduct(id);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCartContext();

    useEffect(() => {
        if (!product) return;
        
        const urlColour = searchParams.get('colour');
        const urlSize = searchParams.get('size');
        
        const validColour = product?.variants?.colours?.includes(urlColour)
            ? urlColour
            : product?.variants?.colours?.[0];
        
        const validSize = product?.variants?.sizes?.find(s => s.label === urlSize)
            ? urlSize
            : null;

        const params = {};
        if (validColour) params.colour = validColour;
        if (validSize) params.size = validSize;

        setSearchParams(params, { replace: true });
    }, [product]);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!product) return <div>Product not found</div>;

    const selectedColour = product?.variants?.colours?.includes(searchParams.get('colour'))
    ? searchParams.get('colour')
    : product?.variants?.colours?.[0] || null;

    const selectedSize = product?.variants?.sizes?.find(s => s.label === searchParams.get('size'))
        ? searchParams.get('size')
        : null;
    
    const updateVariant = (colour, size) => {
        const params = { colour };
        if (size) params.size = size;
        setSearchParams(params);
        setQuantity(1);
    };

    const onAddToCart = () => addToCart({
        id: product.id,
        title: product.title,
        price: product.variants?.salePrice || product.price,
        image: product.image,
        colour: selectedColour,
        size: selectedSize,
        quantity
    })

    const selectedSizeData = product?.variants?.sizes?.find(s => s.label === selectedSize);

    return (
        <div className={styles.page}>
            <div className={styles.layout}>
                <ImageGallery 
                    images={product?.variants?.images || [product.image]} 
                    title={product.title} 
                />
                <ProductInfo 
                    product={product}
                    selectedColour={selectedColour}
                    selectedSize={selectedSize}
                    selectedSizeData={selectedSizeData}
                    quantity={quantity}
                    onColourChange={(colour) => updateVariant(colour, selectedSize)}
                    onSizeChange={(size) => updateVariant(selectedColour, size)}
                    onQuantityChange={setQuantity}
                    onAddToCart={onAddToCart}
                />
            </div>
            
            <div className={styles.below}>
                <ProductTabs product={product} />
            </div>
        </div>
    );
}

export default ProductDetail;