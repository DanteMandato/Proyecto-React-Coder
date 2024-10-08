import React, { useState } from "react";
import Spinner from "../../components/Spinner"; 

const Talleres = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSuccessMessage("¡Tu inscripción fue enviada correctamente!");
            setFormData({ name: "", email: "", message: "" });
        }, 2000);
    };

    return (
        <main className="talleres-page">
            <h1>Talleres de Cosmética Natural</h1>
            <p>Aprende a crear tus propios productos de cosmética natural con ingredientes saludables y sostenibles. Nuestros talleres son perfectos para quienes desean conocer más sobre el proceso de elaboración de productos como jabones, cremas, aceites esenciales y mucho más.</p>

            <section className="featured-image">
                <img src="../../public/Taller/taller.jpg" alt="imagen principal" />
            </section>

            <section className="taller-info">
                <h2>¿Qué aprenderás en nuestros talleres?</h2>
                <ul>
                    <li>Elaboración de jabones artesanales con ingredientes naturales.</li>
                    <li>Creación de cremas y bálsamos hidratantes.</li>
                    <li>Uso de aceites esenciales para productos de bienestar.</li>
                    <li>Conservación y envasado de productos cosméticos.</li>
                </ul>
            </section>

            <section className="secondary-image">
                <img src="../../public/Taller/muestra-taller.webp" alt="Ejemplo de producto creado en el taller" />
            </section>

            <section className="taller-signup">
                <h2>Inscríbete en un taller</h2>
                <p>Completa el formulario para inscribirte en nuestros talleres y cuéntanos por qué te gustaría participar.</p>
                
                {loading ? (
                    <Spinner />
                ) : (
                    <form onSubmit={handleSubmit} className="signup-form">
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
                            <label htmlFor="message">¿Por qué te gustaría participar?</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Enviar Inscripción</button>
                    </form>
                )}

                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </section>
        </main>
    );
};

export default Talleres;
