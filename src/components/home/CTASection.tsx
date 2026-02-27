import Link from 'next/link';
import styles from '../../styles/CTASection.module.scss';

const CTASection = () => {
    return (
        <section className={`${styles.ctaSection} section-wrapper `}>
      <div className="container">
        <h2 className='section-title'>
          Đặt Lịch Làm Nail Ngay Hôm Nay Để Nhận Ưu Đãi Hấp Dẫn
        </h2>
        
        <div className={styles.buttonGroup}>
          <Link href="/booking" className='btn-ct-primary btn-mobile-full'>
            ĐẶT LỊCH NGAY
          </Link>
          
          <a href="tel:0968340158" className='btn-ct-outline btn-mobile-full'>
            <i className="bi bi-telephone"></i> <span>Gọi Tư Vấn</span>
          </a>
        </div>
      </div>
    </section>
    );
};

export default CTASection;