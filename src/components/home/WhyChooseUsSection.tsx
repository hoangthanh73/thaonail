import styles from '../../styles/WhyChooseUsSection.module.scss';
import { REASONS } from '../../constants/index';

const WhyChooseUsSection = () => {
    return (
        <section className={`${styles.sectionWrapper} section-wrapper`}>
            <div className="container text-center">
                <h2 className='section-title'>Vì Sao Chọn Chúng Tôi</h2>

                <div className="row g-4 justify-content-center mt-2">
                    {REASONS.map((reason) => (
                        <div key={reason.id} className="col-12 col-md-6 col-lg-3">
                            <div className={styles.reasonCard}>
                                <div className={styles.iconCheck}>
                                    <i className="bi-check"></i>
                                </div>
                                <p className={styles.text}>{reason.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;