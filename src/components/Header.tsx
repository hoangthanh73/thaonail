'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Header.module.scss';
import { NAV_LINKS, SHOP_INFO } from '../constants';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    return (
        <header className={`${styles.header}`}>
            {/* --- TOP BAR: Ẩn trên Mobile (d-none), Hiện trên PC (d-md-block) --- */}
            <div className={`d-none d-md-block ${styles.topBar}`}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <i className="bi bi-geo-alt me-3"></i>
                        <span>{SHOP_INFO.address}</span>
                    </div>
                    <div className="d-md-none d-lg-block">
                        <p className='d-flex justify-content-between gap-3'>
                            <span>Thứ 2 - Thứ 7: </span>
                            <span>9h00 - 19h00</span>
                        </p>
                        <p className='d-flex justify-content-between gap-3'>
                            <span>Chủ Nhật: </span>
                            <span>9h00 - 17h00</span>
                        </p>
                    </div>
                    <div className="fw-bold">
                        <a
                            href={`tel: ${SHOP_INFO.phone}`}
                            className="btn-ct-primary btn-mobile-full"
                        >
                            <i className="bi bi-telephone me-3"></i>
                            <span>{SHOP_INFO.phone}</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* --- MAIN NAVBAR --- */}
            <nav className={`p-0 p-lg-4 bg-white ${styles.navbar}`}>
                <div className="container">
                    {/* Logo & Toggle cho Mobile */}
                    <div className="d-flex justify-content-between align-items-center d-lg-block">
                        <Link href="/">
                            <h1 className={styles.logo}>Thảo Nail</h1>
                        </Link>
                        {/* Nút Hamburger chỉ hiện trên Mobile */}
                        <button
                            className={`d-lg-none ${styles.mobileToggle}`}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation"
                        >
                            {isOpen ? '✕' : '☰'}
                        </button>
                    </div>

                    {/* Links: Map từ constants */}
                    <div className={`mt-3 ${isOpen ? 'd-block' : 'd-none'} d-lg-block`}>
                        <ul className="navbar-nav d-flex justify-content-center flex-column flex-lg-row list-unstyled gap-md-4 mt-4 pb-md-4">
                            {NAV_LINKS.map((link) => {
                                // Tính toán logic isActive
                                const isActive = pathName === link.href || (link.href !== '/' && pathName.startsWith(link.href));

                                return (
                                    <li key={link.href} className="nav-item">
                                        <Link
                                            href={link.href}
                                            className={`${styles.navLink} ${isActive ? styles.active : ''} p-2`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;