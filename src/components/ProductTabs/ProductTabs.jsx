import { useState } from 'react';
import styles from './ProductTabs.module.scss';

const ProductTabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <div className={styles.productTabs}>
            <div className={styles.tabButtons}>
                <button 
                    className={activeTab === 'description' ? styles.active : ''} 
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </button>
                <button 
                    className={activeTab === 'specifications' ? styles.active : ''} 
                    onClick={() => setActiveTab('specifications')}
                >
                    Specifications
                </button>
                <button 
                    className={activeTab === 'reviews' ? styles.active : ''} 
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews
                </button>
                
            </div>
            <div className={styles.tabContent}>
                {activeTab === 'description' && (
                    <div className={styles.tabPanel}>
                        <p>{product.description}</p>
                    </div>
                )}
                {activeTab === 'specifications' && (
                    <div className={styles.tabPanel}>
                        <table className={styles.specsTable}>
                            <tbody>
                                <tr><td>Category</td><td>{product.category}</td></tr>
                                <tr><td>Rating</td><td>{product.rating?.rate} / 5</td></tr>
                                <tr><td>Reviews</td><td>{product.rating?.count}</td></tr>
                                <tr><td>Price</td><td>${product.price}</td></tr>
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === 'reviews' && (
                    <div className={styles.tabPanel}>
                        <div className={styles.reviewCard}>
                            <p className={styles.reviewerName}>Sarah M.</p>
                            <p className={styles.reviewRating}>★★★★★</p>
                            <p className={styles.reviewText}>Absolutely love this product. Great quality and fast delivery!</p>
                        </div>
                        <div className={styles.reviewCard}>
                            <p className={styles.reviewerName}>James K.</p>
                            <p className={styles.reviewRating}>★★★★☆</p>
                            <p className={styles.reviewText}>Good value for money. Fits well and looks exactly like the photos.</p>
                        </div>
                        <div className={styles.reviewCard}>
                            <p className={styles.reviewerName}>Priya R.</p>
                            <p className={styles.reviewRating}>★★★★★</p>
                            <p className={styles.reviewText}>Very happy with my purchase. Would definitely recommend.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductTabs;