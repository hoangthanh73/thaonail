import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${styles.footer} pt-5`}>
      <div className="container">
        {/* Header của Footer */}
        <h2 className='section-title w-100 text-center'>Thảo Nail Tân Phú</h2>

        {/* 4 Cột thông tin */}
        <div className="row g-4">
          {/* Cột 1: Địa chỉ */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><i className="bi bi-geo-alt-fill"></i></div>
              <h4>Địa Chỉ</h4>
              <p>số 3 Đường DC 11, Quận Tân Phú,<br />TP. Hồ Chí Minh</p>
            </div>
          </div>

          {/* Cột 2: Giờ mở cửa */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><i className="bi bi-clock-fill"></i></div>
              <h4>Giờ Mở Cửa</h4>
              <p>Thứ 2 - CN: 09:00 - 20:00<br />(Kể cả ngày lễ)</p>
            </div>
          </div>

          {/* Cột 3: Chỉ đường */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <h4>Chỉ Đường</h4>
              <p className="mb-3">Tìm đường đến tiệm nhanh nhất</p>
              <a
                href="https://goo.gl/maps/your-link"
                target="_blank"
                rel="noreferrer"
                className="btn-ct-outline btn-mobile-full"
                style={{ padding: '8px 20px', fontSize: '13px' }}
              >
                Mở Google Maps
              </a>
            </div>
          </div>

          {/* Cột 4: Mạng xã hội */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><i className="bi bi-share-fill"></i></div>
              <h4>Mạng Xã Hội</h4>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon}><i className="bi bi-facebook"></i></a>
                <a href="#" className={styles.socialIcon}><i className="bi bi-instagram"></i></a>
                <a href="#" className={styles.socialIcon}><i className="bi bi-tiktok"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={styles.copyright}>
        <div className="container">
          <p>© 2024 Thảo Nail Tân Phú. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;