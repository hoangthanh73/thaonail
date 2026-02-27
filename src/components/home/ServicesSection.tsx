'use client';

import { SERVICES } from "../../constants/index";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import styles from '../../styles/ServicesSection.module.scss'

export default function ServicesSection() {
  return (
    <section className={`${styles.services} section-wrapper`}>
      <div className="container">

        <div className="text-center mb-5">
          <h2 className='section-title'>
            Dịch Vụ Nổi Bật
          </h2>
          <p className="section-desc">
            Khám phá các dịch vụ làm nail chuyên nghiệp tại Thảo Nail, từ sơn gel bền màu,
            đắp bột chuẩn kỹ thuật cho đến vẽ móng nghệ thuật sáng tạo và chăm sóc móng chuyên sâu.
            Chúng tôi mang đến cho bạn trải nghiệm thư giãn và vẻ đẹp tinh tế trong từng chi tiết.
          </p>
        </div>

        <Swiper modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
          }}
          className="pb-5">
          {SERVICES.map(service => (
            <SwiperSlide key={service.id} className={`${styles.card} text-center`}>
              <div className={styles.imageWrapper}>
                <Image src={service.image} alt={service.title} />
              </div>

              <div className={`${styles.cardBody}`}>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className='btn-ct-outline btn-ct-full'
                >
                  Xem thêm →
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}