import React from 'react';
import './index.scss';
import img1 from '../../../assets/images/1.png';
import img2 from '../../../assets/images/2.png';
import img3 from '../../../assets/images/3.png';
import img4 from '../../../assets/images/4.png';
import img5 from '../../../assets/images/5.png';
import img6 from '../../../assets/images/6.png';
import img7 from '../../../assets/images/7.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Home = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };



    return (
        <div>
            <div className='banner'>
                <div className='banner__container'>
                    <div className='banner__sections'>
                        <div className='banner__left'>
                            <h1>India's First Marketplace for <br /> <span>IT channel partner</span> ecosystem</h1>
                            <p>Connect with verified partners <br /> from across the country and do <br />business at zero commission</p>
                            <span>Launching soon</span>
                        </div>
                        <div className='banner__right'>
                            <div className='banner__form'>
                                <input required type='text' placeholder='Name'></input>
                                <input required type='text' placeholder='Email id'></input>
                                <input required type='text' placeholder='Contact no.'></input>
                                <select
                                    type='role'
                                    placeholder='Buyer/Seller'>
                                    <option value={0}>--Buyer/Seller--</option>
                                    <option value={1}>Buyer</option>
                                    <option value={2}>Seller</option>
                                </select>
                            </div>
                            <div className='banner__button'>
                                <button>Get in touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='accelerate'>
                <div className='accelerate__container'>
                    <div className='accelerate__sections'>
                        <div className='accelerate__left'>
                            <hr />
                            <h2>Accelerate your Channel business</h2>
                        </div>
                        <div className='accelerate__center'>
                            <h3>For Buyers</h3>
                            <hr />
                            <ul>
                                <a>&bull;  <li>Find latest products at best prices. </li></a>
                                <a>&bull; <li>Get Response to customized enquiries</li></a>
                                <a>&bull; <li>Negotiate with the verified sellers in real time. Accept, Reject or Ask for a revision and
                                    close purchases faster.</li></a>
                            </ul>
                        </div>
                        <div className='accelerate__right'>
                            <h3>For Sellers</h3>
                            <hr />
                            <ul>
                                <a>&bull;   <li>Register and get verified on the same day. </li></a>
                                <a>&bull; <li>Interact, negotiate &#38; close deals with verified buyers at one place.</li></a>
                                <a>&bull; <li>All the profit is yours, ProcEzy does not charge any commission from sellers </li></a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='accelerate__mb'>
                    <div className='accelerate__left'>
                        <h2>Accelerate your Channel business</h2>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        totalSlides={2}
                    >
                        <Slider>
                            <Slide index={0} className='slider' >
                                <div className='accelerate__center'>
                                    <h3>For Buyers</h3>
                                    <hr />
                                    <ul>
                                        <a>&bull;  <li>Find latest products at best prices. </li></a>
                                        <a>&bull; <li>Get Response to customized enquiries</li></a>
                                        <a>&bull; <li>Negotiate with the verified sellers in real time. Accept, Reject or Ask for a revision and
                                            close purchases faster.</li></a>
                                    </ul>
                                </div>
                            </Slide>
                            <Slide index={1} className='slider' >
                                <div className='accelerate__right'>
                                    <h3>For Sellers</h3>
                                    <hr />
                                    <ul>
                                        <a>&bull;   <li>Register and get verified on the same day. </li></a>
                                        <a>&bull; <li>Interact, negotiate &#38; close deals with verified buyers at one place.</li></a>
                                        <a>&bull; <li>All the profit is yours, ProcEzy does not charge any commission from sellers </li></a>
                                    </ul>
                                </div>
                            </Slide>
                        </Slider>
                        <ButtonBack className='back-button'><i className='fa fa-arrow-left' aria-hidden='true' /></ButtonBack>
                        <ButtonNext className='next-button'><i className='fa fa-arrow-right' aria-hidden='true' /></ButtonNext>
                    </CarouselProvider>
                </div>
            </div>
            <div className='key'>
                <div className='key__container'>
                    <div className='key__section'>
                        <h2>Key Features</h2>
                        <div className='key__content'>
                            <div className='key__left'>
                                <div className='key__left__image'>
                                    <img src={img1} alt='' />
                                </div>
                                <h3> Verified <br /> Seller &#38; Buyers</h3>
                                <p>All buyers &#38; sellers are KYC verified and vetted by us. Interact, negotiate &#38; transact
                                    with genuine partners.</p>
                            </div>
                            <div className='key__right'>
                                <div className='key__right__image'>
                                    <img src={img2} alt='' />
                                </div>
                                <h3> Real-time <br /> Negtiation</h3>
                                <p>Send enquiries, extend customized offers, request changes and track conversations all at one place.</p>
                            </div>
                        </div>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className='key__mb'>
                    <div className='key__section'>
                        <h1>Key Features</h1>
                        <CarouselProvider
                            naturalSlideWidth={100}
                            naturalSlideHeight={100}
                            totalSlides={2}
                        >
                            <Slider>
                                <Slide index={0} className='slider' >
                                    <div className='key__left'>
                                        <div className='key__left__image'>
                                            <img src={img1} alt='' />
                                        </div>
                                        <h1> Verified <br /> Seller &#38; Buyers</h1>
                                        <p>All buyers &#38; sellers are KYC verified and vetted by us. Interact, negotiate &#38; transact
                                            with genuine partners.</p>
                                    </div>
                                </Slide>
                                <Slide index={1} className='slider' >
                                    <div className='key__right'>
                                        <div className='key__right__image'>
                                            <img src={img2} alt='' />
                                        </div>
                                        <h1> Real-time <br /> Negtiation</h1>
                                        <p>Send enquiries, extend customized offers, request changes and track conversations all at one place.</p>
                                    </div>
                                </Slide>
                            </Slider>
                            <ButtonBack className='back-button'><i className='fa fa-arrow-left' aria-hidden='true' /></ButtonBack>
                            <ButtonNext className='next-button'><i className='fa fa-arrow-right' aria-hidden='true' /></ButtonNext>
                        </CarouselProvider>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='section__container'>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition='all .5'
                        transitionDuration={500}
                        containerClass='carousel-container'
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        dotListClass='custom-dot-list-style'
                        itemClass='carousel-item-padding-40-px'
                    >
                        <div className='seller'>
                            <div className='seller__container'>
                                <div className='seller__section'>
                                    <h2>Are you a Seller?</h2>
                                    <div className='seller__content'>
                                        <div className='seller__left'>
                                            <img src={img3} alt='' />
                                            <h3>Easy Product <br /> Listing</h3>
                                            <p>No more spending endless hours writing product details manually. Choose the product from
                                                ProcEazy market database, add selling price & quantity. That s it. </p>
                                        </div>
                                        <div className='seller__center'>
                                            <img src={img4} alt='' />
                                            <h3>Zero <br /> Commission</h3>
                                            <p>Keep all the revenue you earned. ProcEzy does not take any commission or cut from the sale
                                                you make. </p>
                                        </div>
                                        <div className='seller__right'>
                                            <img src={img6} alt='' />
                                            <h3>Sell more <br /> effectively</h3>
                                            <p>Improved product visibility to potential buyers from across the country. An opportunity to
                                                increase sales. Never loose track of enquiries.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='buyer'>
                            <div className='buyer__container'>
                                <div className='buyer__section'>
                                    <h2>Are you a Buyer?</h2>
                                    <div className='buyer__content'>
                                        <div className='buyer__left'>
                                            <img src={img7} alt='' />
                                            <h3>Complete clarity <br />  over chat</h3>
                                            <p>Intuitive chat interface to talk to sellers from across the country. Negotiate with seller in real
                                                time and get regular updates at one place. </p>
                                        </div>
                                        <div className='buyer__center'>
                                            <img src={img6} alt='' />
                                            <h3>Wide variety <br /> of products</h3>
                                            <p>No more spending endless hours calling vendors asking for quotes.
                                                Log into ProcEzy for real time prices & availability for products
                                                from across the country. </p>
                                        </div>
                                        <div className='buyer__right'>
                                            <img src={img5} alt='' />
                                            <h3>Procure more <br />  Effectively</h3>
                                            <p>Browse through products from sellers across the country.
                                                Share your required specs, check availability and get in touch with
                                                sellers from across the country.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>

            </div>
            <div className='seller__content-mb'>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide index={0} className='slider' >
                            <div className='seller__left'>
                                <h2>Are you a Seller?</h2>
                                <img src={img3} alt='' />
                                <h3>Easy Product Listing</h3>
                                <p>No more spending endless hours writing product details manually. Choose the product from
                                    ProcEazy market database, add selling price & quantity. That s it. </p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className='seller__center'>
                                <h2>Are you a Seller?</h2>
                                <img src={img4} alt='' />
                                <h3>Zero Commission</h3>
                                <p>Keep all the revenue you earned. ProcEzy does not take any commission or cut from the sale
                                    you make. </p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className='seller__right'>
                                <h2>Are you a Seller?</h2>
                                <img src={img6} alt='' />
                                <h3>Sell more effectively</h3>
                                <p>Improved product visibility to potential buyers from across the country. An opportunity to
                                    increase sales. Never loose track of enquiries.</p>
                            </div>
                        </Slide>
                    </Slider>
                    <ButtonBack className='back-button'><i className='fa fa-arrow-left' aria-hidden='true' /></ButtonBack>
                    <ButtonNext className='next-button'><i className='fa fa-arrow-right' aria-hidden='true' /></ButtonNext>
                </CarouselProvider>
            </div>
            <div className='seller__content-mb'>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className='buyer__left'>
                                <h2>Are you a Buyer?</h2>
                                <img src={img7} alt='' />
                                <h3>Complete clarity  over chat</h3>
                                <p>Intuitive chat interface to talk to sellers from across the country. Negotiate with seller in real
                                    time and get regular updates at one place. </p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className='buyer__center'>
                                <h2>Are you a Buyer?</h2>
                                <img src={img6} alt='' />
                                <h3>Wide variety of products</h3>
                                <p>No more spending endless hours calling vendors asking for quotes.
                                    Log into ProcEzy for real time prices & availability for products
                                    from across the country. </p>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className='buyer__right'>
                                <h2>Are you a Buyer?</h2>
                                <img src={img5} alt='' />
                                <h3>Procure more  Effectively</h3>
                                <p>Browse through products from sellers across the country.
                                    Share your required specs, check availability and get in touch with
                                    sellers from across the country.</p>
                            </div>
                        </Slide>
                    </Slider>
                    <ButtonBack className='back-button'><i className='fa fa-arrow-left' aria-hidden='true' /></ButtonBack>
                    <ButtonNext className='next-button'><i className='fa fa-arrow-right' aria-hidden='true' /></ButtonNext>
                </CarouselProvider>
            </div>
            <div className='join' id='contact-us'>
                <div className='join__container'>
                    <div className='join__sections'>
                        <div className='join__left'>
                            <h2>Join and accelerate  <br /> your IT channel business</h2>
                        </div>
                        <div className='join__right'>
                            <div className='join__form'>
                                <input required type='text' placeholder='Name'></input>
                                <input required type='text' placeholder='Email id'></input>
                                <input required type='text' placeholder='Contact no.'></input>
                                <select
                                    type='role'
                                    placeholder='Buyer/Seller'>
                                    <option value={0}>--Buyer/Seller--</option>
                                    <option value={1}>Buyer</option>
                                    <option value={2}>Seller</option>
                                </select>
                            </div>
                            <div className='join__button'>
                                <button>Get in touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home; 