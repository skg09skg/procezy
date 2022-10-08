import React from 'react';
import './index.scss';
import logo from '../../../assets/images/logo.png';
import { useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    const history = useHistory();

    const handleClickScroll = () => {
        history.push('/')
        window.scrollTo(0, 0);
    };

    const handleAboutUs = () => {
        history.push('/about-us')
        window.location.reload();
    };

    return (
        <div>
            <div className='footer'>
                <div className='footer__container'>
                    <div className='footer__section'>
                        <div className='footer__left'>
                            <div className='footer__image'>
                                <img src={logo} alt='' />
                            </div>
                        </div>
                        <div className='footer__right'>
                            <div className='footer__right1'>
                                <ul>
                                    <li onClick={handleAboutUs} style={{ cursor: 'pointer' }}><a>FAQ</a></li>
                                    <li><HashLink smooth to='#contact-us' onClick={handleClickScroll} style={{ cursor: 'pointer' }}>Contact Us</HashLink></li>
                                    <li><a>Podcast</a></li>
                                    <li><a>Linkedin</a></li>
                                </ul>
                            </div>
                            <div className='footer__right2'>
                                <ul>
                                    <li><a>Sign up</a></li>
                                    <li><a>Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h6>&#169; ProcEzy Technologies Private Limited</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;