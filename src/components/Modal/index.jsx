import { useState } from 'react';

/**
 * Modal de pago
 *
 * CORRECCIÓN 1: El formulario ahora tiene un handler `onSubmit` que
 * previene el reload de la página (e.preventDefault) y llama a
 * `onConfirm` del padre para vaciar el carrito y redirigir.
 *
 * CORRECCIÓN 2: Se agrega validación básica de campos y se muestra un
 * mensaje de error si están incompletos.
 *
 * NOTA DE SEGURIDAD: En producción, NUNCA proceses datos de tarjeta en
 * el frontend. Usa una pasarela de pago como MercadoPago, Stripe, etc.
 *
 * @param {function} closeModal - Cierra el modal sin confirmar
 * @param {function} onConfirm  - Confirma la compra (vacía carrito + navega)
 */
const Modal = ({ closeModal, onConfirm }) => {
    const [formData, setFormData] = useState({
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita reload de página

        // Validación básica
        if (!formData.cardName || !formData.cardNumber || !formData.expiry || !formData.cvv) {
            setError('Por favor, completá todos los campos.');
            return;
        }

        // En un proyecto real, aquí llamarías a tu API de pagos
        if (onConfirm) onConfirm();
    };

    return (
        <div className="modal">
            <div className="modal__content">
                <h3>Datos de la Tarjeta</h3>
                {error && <p className="modal__error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre en la tarjeta:
                        <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            placeholder="Juan Pérez"
                        />
                    </label>
                    <label>
                        Número de tarjeta:
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                        />
                    </label>
                    <label>
                        Fecha de vencimiento:
                        <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            placeholder="MM/AA"
                            maxLength={5}
                        />
                    </label>
                    <label>
                        Código de seguridad:
                        <input
                            type="password"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            placeholder="123"
                            maxLength={4}
                        />
                    </label>
                    <button type="submit">Realizar Compra</button>
                </form>
                <button onClick={closeModal}>Cerrar</button>
            </div>
        </div>
    );
};

export default Modal;
