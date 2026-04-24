'use client';
import Link from 'next/link';

export default function Offcanvas({ store }) {
    return (
        <>
        <div className="fix">
            <div className="offcanvas__area">
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__content">
                        <div className="offcanvas__top d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo">
                                <h3 style={{color: 'white', fontWeight: 'bold'}}>{store.name}</h3>
                            </div>
                            <div className="offcanvas__close">
                                <button className="offcanvas-close-icon animation--flip" onClick={() => document.body.classList.remove('offcanvas-opened')}>
                                        <span className="offcanvas-m-lines">
                                      <span className="offcanvas-m-line line--1"></span><span className="offcanvas-m-line line--2"></span><span className="offcanvas-m-line line--3"></span>
                                        </span>
                                </button>
                            </div>
                        </div>
                        <div className="mobile-menu fix">
                            <nav>
                                <ul style={{listStyle: 'none', padding: '20px 0'}}>
                                    <li className="mb-15"><Link href="/" className="color-white fw-bold">Home</Link></li>
                                    <li className="mb-15"><Link href="/#about" className="color-white fw-bold">About</Link></li>
                                    <li className="mb-15"><Link href="/shops" className="color-white fw-bold" style={{color: '#2E7D32'}}>Shops</Link></li>
                                    <li className="mb-15"><Link href="/contact" className="color-white fw-bold">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="offcanvas__social">
                            <h4 className="offcanvas__title mb-20">Welcome to {store.name}</h4>
                            <p className="mb-30">Your favorite local shop for fresh groceries and daily essentials. Now available online with Dukkan Setu.</p>
                            <ul className="header-top-socail-menu d-flex">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                            </ul>
                        </div>
                        <div className="offcanvas__btn">
                            <div className="header__btn-wrap">
                                <Link href="/register" className="rr-btn__header d-sm-none mb-10 w-100">
                                    <span class="btn-wrap">
                                        <span class="text-one">Create Your Store</span>
                                        <span class="text-two">Create Your Store</span>
                                    </span>
                                </Link>
                                <Link href="/login" className="rr-btn__header w-100">
                                    <span class="btn-wrap">
                                        <span class="text-one">Merchant Login</span>
                                        <span class="text-two">Merchant Login</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="offcanvas__overlay" onClick={() => document.body.classList.remove('offcanvas-opened')}></div>
        <div className="offcanvas__overlay-white"></div>
        </>
    );
}
