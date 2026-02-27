import Image from "next/image";
import styles from "../../styles/HeroSection.module.scss";
import Link from "next/link";

import { SHOP_INFO } from "@/src/constants";

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection} section-wrapper`}>
      <div className="container">
        <div className="row align-items-center">

          {/* Image */}
          <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
            <div>
              <Image
                src="/images/image-hero.png"
                alt="Dịch vụ nail chuyên nghiệp tại Nail Spa"
                width={500}
                height={600}
                className={`rounded-5 ${styles.imgBanner}`}
                priority
                sizes="(max-width: 768px) 100vw, 500px" // Thêm dòng này để Next.js tối ưu theo màn hình
                style={{ width: '100%', height: 'auto' }} // Đảm bảo ảnh không quá to trên mobile
              />
            </div>
          </div>

          {/* Content */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h1 className='section-title'>
              Tiệm Nail Đẹp & Chuyên Nghiệp Tại Tân Phú
            </h1>

            <p className='section-desc'>
              Thảo Nail chuyên dịch vụ làm nail đẹp, sơn gel, đắp bột, vẽ móng nghệ thuật
              và chăm sóc móng chuyên nghiệp. Không gian thư giãn, kỹ thuật viên tay nghề cao,
              cập nhật xu hướng nail mới nhất.

            </p>
            <div className="mt-4 d-flex gap-3 flex-wrap align-items-center">
              <Link href="/booking" className='btn-ct-primary btn-mobile-full'>
                Đặt lịch ngay
              </Link>
              <a
                href={`tel: ${SHOP_INFO.phone}`}
                className="btn-ct-outline btn-mobile-full"
              >
                <i className="bi bi-telephone me-3"></i>
                <span>Gọi Tư Vấn</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}