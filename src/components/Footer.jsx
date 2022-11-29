import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin} from 'react-icons/fa'
import { FaFacebook} from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

 const Footer = () => {
   return (
     <footer>
         <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt='footer Logo'/>
                </Link>

                <div className='footer__socials'>
                    <a href='https://linkedin.com/' target="_blank" rel='noreferrer noopner'>
                        <FaLinkedin/>
                    </a>
                    <a href='https://facebook.com/' target="_blank" rel='noreferrer noopner'>
                        <FaFacebook/>
                    </a>
                    <a href='https://twitter.com/' target="_blank" rel='noreferrer noopner'>
                        <AiOutlineTwitter/>
                    </a>
                    <a href='https://instagram.com/' target="_blank" rel='noreferrer noopner'>
                        <AiFillInstagram/>
                    </a>
                </div>
            </article>
            {/* <article>
                <h4> Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/services'>About</Link>
                <Link to='/plans'>About</Link>
                <Link to='/contact'>About</Link>
            </article>
            <article>
                <h4> Insights</h4>
                <Link to='/about'>About</Link>
                <Link to='/services'>About</Link>
                <Link to='/plans'>About</Link>
                <Link to='/contact'>About</Link>
            </article>
            <article>
                <h4> Get in touch</h4>
                <Link to='/about'>About</Link>
                <Link to='/services'>About</Link>
                <Link to='/plans'>About</Link>
                <Link to='/contact'>About</Link>
            </article> */}
         </div>
    </footer>
   )
 }
 
 export default Footer