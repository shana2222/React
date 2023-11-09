import './styles.css';
import {Button} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div >
                <img src={'./gregory_logo.png'} alt='logo' width={'200px'} />

            </div>

            <nav>
                <ul className='list-container'>
                    <li> 
                        <link to={'/category/ropa'}className='navbar-button'>Ropa 
                        </link> 
                    </li>
                    <li> 
                        <link to={'/category/pisos'}className='navbar-button'>Pisos 
                        </link> 
                    </li> 
                    <li> 
                        <link to={'/category/limpieza'}className='navbar-button'>Limpieza 
                        </link> 
                    </li>             
                </ul>
                <CartWidget />
            </nav >
        </div >
    );
};
export default Navbar;