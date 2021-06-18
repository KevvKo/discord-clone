import './NavBarItem.css';
import {useTranslation} from "react-i18next";

function NavBarItem(props) {

  const [t, i18n] = useTranslation('common');
  const iconClassNames = `bi bi-${props.icon}`;

  return (
    <li className="navbar-item">
        <i className={iconClassNames}></i>
        <a>
            {props.text}
        </a>
        { props.closeButton && <i className='bi bi-x'></i> }
    </li>
  );
}

NavBarItem.defaultProps = {
    closeButton: false
}

export default NavBarItem;
