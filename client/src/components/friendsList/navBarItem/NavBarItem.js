import './NavBarItem.css';
import {useTranslation} from "react-i18next";

function NavBarItem(props) {

  const [t, i18n] = useTranslation('common');
  const iconClassNames = `bi bi-${props.icon} mr-2`;

  return (
    <li className="navbar-item d-flex align-items-center mt-1 mr-1 p-1">
        <i className={iconClassNames}></i>
        <a className="flex-fill">
            {props.text}
        </a>
        { props.closeButton && <i className='bi bi-x '></i> }
    </li>
  );
}

NavBarItem.defaultProps = {
    closeButton: false
}

export default NavBarItem;
