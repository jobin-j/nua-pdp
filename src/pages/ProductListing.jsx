import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch product listing data here
        fetch(`https://fakestoreapi.com/products?limit=3`)
            .then(response => response.json())
            .then(data => {
                console.log('Fetched products:', data);
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!products.length) return <div>No products found</div>;

    return (
        <div>
            <h1>Product Listing Page</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>   
        </div>
    )
}

export default ProductListing;