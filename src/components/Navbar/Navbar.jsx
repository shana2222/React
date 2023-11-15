import './styles.css';
import {Button} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div >
                <img src={'./gregory_logo.png'} alt='logo' width={'200px'} />

            </div>

            <nav>
                <ul className='list-container'>
                    <li> 
                        <Link to={'/category/ropa'}className='navbar-button'>Ropa 
                        </Link> 
                    </li>
                    <li> 
                        <Link to={'/category/pisos'}className='navbar-button'>Pisos 
                        </Link> 
                    </li> 
                    <li> 
                        <Link to={'/category/limpieza'}className='navbar-button'>Limpieza 
                        </Link> 
                    </li>             
                </ul>
                <CartWidget />
            </nav >
        </div >
    );
};
export default Navbar;