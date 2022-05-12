import './footer.css';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer(){
    return(
        <footer>
            <span className='iconContainer'>
                <a target={'_blank'} href='https://www.linkedin.com/in/progthiago/'>
                    <FaLinkedin/>
                </a>
                <a target={'_blank'} href='https://github.com/thiago-albuquerque'>
                    <FaGithub/>
                </a>
                <a target={'_blank'} href='https://www.instagram.com/garotoqprograma/'>
                    <FaInstagram/>
                </a>
            </span>
        </footer>
    )
}