import './styles.css';
import {Button} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div >
                <img src={'./gregory_logo.png'} alt='logo' width={'200px'} />

            </div>

            <div>
                <ul className='list-container'>
                    <li> <button>Ropa </button> </li>
                    <li> <button>Pisos </button> </li>
                    <li><button> Limpieza </button> </li>                    
                </ul>
                <CartWidget />
            </div >
        </div >
    );
};
export default Navbar;