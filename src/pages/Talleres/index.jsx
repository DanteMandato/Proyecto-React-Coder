import { useState } from "react";
import Spinner from "../../components/Spinner";

/**
 * Talleres
 *
 * CORRECCIÓN: Las rutas de las imágenes `../../public/Taller/...` son
 * relativas al archivo .jsx y solo funcionan en desarrollo con cierta
 * configuración. En Vite, los archivos dentro de `public/` se sirven
 * desde la raíz del servidor, por lo que la ruta correcta es
 * `/Taller/taller.jpg` (ruta absoluta desde el dominio).
 *
 * CORRECCIÓN: Se eliminó el import de React (no necesario con Vite +
 * React 17+, que usa el nuevo JSX transform automáticamente).
 */
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
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
            <p>Aprende a crear tus propios productos de cosmética natural con ingredientes saludables y sostenibles.</p>

            <section className="featured-image">
                {/* CORRECCIÓN: ruta absoluta desde public/ */}
                <img src="/Taller/taller.jpg" alt="imagen principal del taller" />
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
                {/* CORRECCIÓN: ruta absoluta desde public/ */}
                <img src="/Taller/muestra-taller.webp" alt="Ejemplo de producto creado en el taller" />
            </section>

            <section className="taller-signup">
                <h2>Inscríbete en un taller</h2>
                <p>Completá el formulario para inscribirte y contanos por qué te gustaría participar.</p>

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
                            />
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
