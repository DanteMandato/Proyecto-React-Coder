import React, { useState } from "react";
import Spinner from "../../components/Spinner"; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSuccessMessage("¡Tu mensaje fue enviado correctamente!");
            setFormData({ name: "", email: "", message: "" });
        }, 2000);
    };

    return (
        <main className="contact-page">
            <h1>Contáctanos</h1>
            <p>Si tienes alguna consulta sobre nuestros productos de cosmética natural, por favor no dudes en escribirnos.</p>
            
            <section className="contact-form-section">
                {loading ? (
                    <Spinner />
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Enviar Mensaje</button>
                    </form>
                )}
                
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </section>

            <section className="contact-details">
                <h2>Información de Contacto</h2>
                <ul>
                    <li><strong>Email:</strong> info@cosmeticosnaturales.com</li>
                    <li><strong>Teléfono:</strong> +123 456 7890</li>
                    <li><strong>Dirección:</strong> Calle Falsa 123, Buenos Aires, Argentina</li>
                </ul>
            </section>

            <section className="map-section">
                <h2>Ubicación</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5854382.898458043!2d-58.385601477621115!3d-36.46592518088912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcb7595281d9%3A0x4ad309fcdcf0a144!2sProvincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1728306049978!5m2!1ses-419!2sar"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen 
                />
            </section>
        </main>
    );
};

export default Contact;
