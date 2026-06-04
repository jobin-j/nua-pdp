import { useEffect, useState } from 'react';

export const useCart = () => {
    const [cart, setCart] = useState(() => localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        const { id, colour, size } = item;
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === id && cartItem.colour === colour && cartItem.size === size);

        if (existingItemIndex !== -1) {
            const updatedCart = cart.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, item]);
        }
    }

    const removeFromCart = (item) => {
        const { id, colour, size } = item;
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === id && cartItem.colour === colour && cartItem.size === size);

        if (existingItemIndex !== -1) {
            const updatedCart = cart.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                }
                return cartItem;
            }).filter(cartItem => cartItem.quantity > 0);
            setCart(updatedCart);
        }
    }

    const updateQuantity = (item, quantity) => {
        const { id, colour, size } = item;
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === id && cartItem.colour === colour && cartItem.size === size);

        if (existingItemIndex !== -1) {
            const updatedCart = cart.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    return { ...cartItem, quantity };
                }
                return cartItem;
            });
            setCart(updatedCart);
        }
    }

    return { cart, addToCart, removeFromCart, updateQuantity };
}