/* src/app/page.tsx */
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import Gallery from '../components/home/GallerySection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import FeedbackSection from '../components/home/FeedbackSection';
import CTASection from '../components/home/CTASection';

export const metadata = {
  title: 'Thảo Nail | Tiệm Nail Đẹp & Uy Tín Quận Tân Phú, HCM',
  description: 'Chuyên dịch vụ sơn gel, đính đá, chăm sóc móng chuyên nghiệp. Đặt lịch ngay tại Thảo Nail để nhận ưu đãi hấp dẫn.',
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Gallery />
      <WhyChooseUsSection />
      <FeedbackSection />
      <CTASection />
    </main>
  );
}