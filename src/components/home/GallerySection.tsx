'use client';
import { useEffect, useState } from 'react';
import styles from '../../styles/GallerySection.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function GallerySection() {


  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setImages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);


  return (
    // <section className={`${styles.gallerySection} py-5`}>
    //   <div className="container">
    //     {/* Title */}
    //     <div className="text-center mb-4">
    //       <h2 className={styles.title}>
    //         Mẫu Nail Đẹp Tại Tân Phú
    //       </h2>

    //       <p className={styles.subtitle}>
    //         Khám phá bộ sưu tập mẫu nail mới nhất tại Thảo Nail với đa dạng phong cách
    //         từ nhẹ nhàng, sang trọng đến đính đá cao cấp. Chúng tôi luôn cập nhật xu hướng
    //         làm nail hot nhất để mang đến cho bạn vẻ đẹp tinh tế và nổi bật trong mọi dịp.
    //       </p>
    //     </div>

    //     {/* Grid */}
    //     {loading ? (
    //       <div className="text-center">Đang tải hình ảnh...</div>
    //     ) : (
    //       <div className="row g-3">
    //         {images.map((item) => (
    //           <div
    //             key={item.id}
    //             className="col-6 col-md-4 col-lg-3"
    //           >
    //             <div className={styles.imageCard}>
    //               <Image
    //                 src={item.url}
    //                 alt={item.alt}
    //                 width={600}
    //                 height={600}
    //                 className="img-fluid"
    //               />
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     )}

    //     {/* Button */}
    //     <div className="text-center mt-4">
    //       <Link href="/gallery" className={`btn ${styles.viewMoreBtn}`}>
    //         Xem thêm bộ sưu tập
    //       </Link>
    //     </div>

    //   </div>
    // </section>



    <section className={`${styles.gallerySection} section-wrapper`}>
      <div className="container text-center">
        <h2 className='section-title'>Mẫu Nail Đẹp Tại Tân Phú</h2>
        <p className="mx-auto mb-5 section-desc" style={{ maxWidth: '700px' }}>
          Mời bạn khám phá bộ sưu tập mẫu nail mới nhất tại Thảo Nail
          với những thiết kế sang trọng và tinh tế, phù hợp với mọi dịp.
        </p>
        {loading ? (
          <div className="text-center">Đang tải hình ảnh...</div>
        ) : (
          <div className="row g-3 g-md-4">
            {images.map((url, index) => (
              <div
                key={url}
                className="col-6 col-md-4 col-lg-3"
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={url}
                    alt={`Nail đẹp ${index}`}
                    width={600}
                    height={600}
                    className="img-fluid"
                  />
                </div>
              </div>
            )
            )}
          </div>
        )}
        <Link href='/gallery' className='btn-ct-primary btn-mobile-full mt-5'>Xem thêm →</Link>
      </div>
    </section >
  );
}
