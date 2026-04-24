'use client';
import Link from 'next/link';

export default function Header({ store }) {
  return (
    <header className="header header-1 theme-bg-heading-primary sticky-header" id="header-sticky">
        <div className="container">
            <div className="d-flex align-items-center justify-content-between py-3">
                <Link href="/">
                    <img src="/images/dukaan-setu-logo.png" alt="Logo" style={{maxHeight: '50px'}} />
                </Link>
                <nav>
                    <ul className="d-flex align-items-center mb-0 gap-4" style={{listStyle: 'none'}}>
                        <li><Link href="/" className="color-white fw-bold">Home</Link></li>
                        <li><Link href="/#about" className="color-white fw-bold">About</Link></li>
                        <li><Link href="/shops" className="color-white">Shops</Link></li>
                        <li><Link href="/contact" className="color-white fw-bold">Contact</Link></li>
                        <li><Link href="/login" className="btn btn-sm btn-outline-light rounded-pill px-3 ms-4">Login</Link></li>
                        <li><Link href="/register" className="btn btn-sm text-white rounded-pill px-3" style={{backgroundColor: '#2E7D32'}}>Register</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  );
}
