import LinkButton from "../LinkButton";

const Menu = ({ links, className, children }) => {
    return (
        <menu className={`${className}`}>
            {links.map((link, index) => (
                <li key={index} className={`navbar__item`}>
                    <LinkButton className={className} href={link.href} label={link.label} />
                </li>
            ))}
            {children}
        </menu>
    );
};

export default Menu;
