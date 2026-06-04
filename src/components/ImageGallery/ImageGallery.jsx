import { useState } from 'react';
import styles from './ImageGallery.module.scss';

const ImageGallery = ({ images, title }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className={styles['image-gallery']}>
            <div className={styles['main-image']}>
                <img src={images[selectedImage]} alt={title} />
            </div>
            <div className={styles['thumbnail-row']}>
                {images.map((img, index) => (
                    <img 
                        key={index}
                        src={img} 
                        alt={`${title} thumbnail ${index + 1}`}
                        className={styles['thumbnail'] + (index === selectedImage ? ' ' + styles['selected'] : '')}
                        onClick={() => setSelectedImage(index)}
                    />
                ))}
            </div>
            <div className={styles.dots}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === selectedImage ? styles.activeDot : ''}`}
                        onClick={() => setSelectedImage(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;