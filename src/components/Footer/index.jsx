import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__proposito">
                    <h4>Nuestro Proposito</h4>
                    <p>Nuestro propósito es ofrecer productos de cosmética natural, respetuosos con el medio ambiente y libres de químicos nocivos.
                    Creemos en el poder de los ingredientes naturales para cuidar y realzar la belleza, sin comprometer la salud o elplaneta.</p>
                </div>
                <div className="footer__section">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="/">Tienda</a></li>
                        <li><a href="/taller">Talleres</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer__section">
                    <h4>Siguenos</h4>
                    <div className="footer__social">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© 2024 Cosmética Natural</p>
            </div>
        </footer>
    );
}

export default Footer;
