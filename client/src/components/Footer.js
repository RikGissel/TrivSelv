import logo from '../assets/logo/logo_white.png';
import '../css/Footer.css';

function Footer() {
  return (
    
    <footer>
      <img src={logo} alt="Triv selv logo" />
        <ul>
          <li className='footer-aps'>Trivselv ApS</li>
          <li>Lykkesholms Allé 33, 8260 Viby J</li>
          <li>booster@trivselv.dk</li>
          <li>CVR. 00000000</li>
        </ul>
      <hr className='footer-line'></hr>
    </footer>

  );
}

export default Footer;
