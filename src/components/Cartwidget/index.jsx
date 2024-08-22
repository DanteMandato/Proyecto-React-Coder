import { Icon } from '@iconify/react'
import Pill from '../Pill';
const Cardwidget = () => {
    
    return (
    <div className='car-widget'>
        <Pill quantity={0} />
    <Icon className='car-widget__cart' icon="mdi:cart" />
    </div>
    );
};

export default Cardwidget;