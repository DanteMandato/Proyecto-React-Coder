
const Modal = ({ closeModal }) => {
    return (
        <div className="modal">
            <div className="modal__content">
                <h3>Datos de la Tarjeta</h3>
                <form>
                    <label>
                        Nombre en la tarjeta:
                        <input type="text" required />
                    </label>
                    <label>
                        Número de tarjeta:
                        <input type="text" required />
                    </label>
                    <label>
                        Fecha de vencimiento:
                        <input type="text" required />
                    </label>
                    <label>
                        Código de seguridad:
                        <input type="text" required />
                    </label>
                    <button type="submit">Realizar Compra</button>
                </form>
                <button onClick={closeModal}>Cerrar</button>
            </div>
        </div>
    );
};

export default Modal;
