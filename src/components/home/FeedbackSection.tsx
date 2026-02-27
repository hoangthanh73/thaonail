"use client"; // Cần thiết vì Swiper dùng hiệu ứng client-side

import styles from '../../styles/FeedbackSection.module.scss';
import { FEEDBACKS } from '../../constants/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import CSS của Swiper
import 'swiper/css';
import 'swiper/css/pagination';

const FeedbackSection = () => {
  console.log(FEEDBACKS);
  return (
    <section className={`${styles.feedbackSection} section-wrapper `}>
      <div className="container">
        <h2 className='section-title'>Khách Hàng Nói Gì</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-5"
        >
          {FEEDBACKS.map((item) => (
            <SwiperSlide key={item.id} >
              <div className={styles.reviewCard}>
                <div className={styles.quoteIcon}>
                  <i className="bi bi-quote"></i>
                </div>
                <div className={styles.stars}>
                  {/* Sao vàng */}
                  {[...Array(item.rating)].map((_, i) => (
                    <i key={`gold-${i}`} className="bi bi-star-fill text-warning"></i>
                  ))}

                  {/* Sao trắng (sao rỗng) */}
                  {[...Array(5 - item.rating)].map((_, i) => (
                    <i key={`white-${i}`} className="bi bi-star"></i>
                  ))}
                </div>
                <p className={styles.content}>"{item.content}"</p>

                <div className={styles.userInfo}>
                  <p className={styles.name}>{item.name}</p>
                  <span className={styles.role}>{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section >
  );
};

export default FeedbackSection;