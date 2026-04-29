import { useContext } from 'react';
import { Icon } from '@iconify/react';
import Pill from '../Pill';
import { CartContext } from '../../context/CartContext';

/**
 * Cartwidget
 *
 * MEJORA: Se usa la función `getTotalItems` del context en lugar de
 * recalcular la suma manualmente aquí. Esto centraliza la lógica.
 *
 * CORRECCIÓN: Se eliminó el import de React (no necesario en React 17+
 * con el nuevo JSX transform que Vite configura automáticamente).
 */
const Cartwidget = () => {
    const { getTotalItems } = useContext(CartContext);
    const quantity = getTotalItems();

    return (
        <div className='car-widget'>
            <Pill quantity={quantity} />
            <Icon className='car-widget__cart' icon="mdi:cart" />
        </div>
    );
};

export default Cartwidget;
