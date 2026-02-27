import Image from "next/image";
import styles from "../../styles/AboutSection.module.scss";
import Img1 from '../../../public/images/thao-nail-home-1.jpg';
import Link from "next/link";

export default function AboutSection() {
    return (
        <section className={`${styles.AboutSection} section-wrapper`}>

            <div className="container">
                <div className="row align-items-center">

                    {/* HÌNH */}
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        <div className={styles.imageWrapper}>
                            <Image
                                src={Img1}
                                alt="Dịch vụ làm nail"
                                width={600}
                                height={650}
                                className={styles.image}
                            />
                        </div>
                    </div>

                    {/* NỘI DUNG */}
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <div className={styles.content}>
                            <h2 className='section-title'>
                                Về Thảo Nail
                            </h2>

                            <p className='section-desc'>
                                Thảo Nail là tiệm nail uy tín tại Tân Phú, chuyên sơn gel, đắp bột và thiết kế
                                móng nghệ thuật. Với đội ngũ kỹ thuật viên tay nghề cao, tận tâm, cùng không gian
                                spa thư giãn, sang trọng, chúng tôi cam kết mang đến trải nghiệm làm đẹp khác biệt
                                và chuyên nghiệp.
                            </p>

                            <Link href='/about' className="btn-ct-primary">
                                Xem thêm về chúng tôi
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}