import React, { useContext } from 'react';
import { Icon } from '@iconify/react'
import Pill from '../Pill';
import { CartContext } from '../../context/CartContext'; 

const Cardwidget = () => {
    
    const { cart } = useContext(CartContext);

    const quantity = cart.length > 0
    ? cart.map(item => item.quantity).reduce((acc, ant) => ant + acc)
    : 0;
    return (
    <div className='car-widget'>
        <Pill quantity={quantity} />
        <Icon className='car-widget__cart' icon="mdi:cart" />
    </div>
    );
};

export default Cardwidget;