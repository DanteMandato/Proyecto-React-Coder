import { Link } from 'react-router-dom';

const LinkButton = ({ className, label, href = '#' }) => {
    return (
        <Link className={`link-button ${className}__link-button`} to={href}>
            {label}
        </Link>
    );
};

export default LinkButton;
