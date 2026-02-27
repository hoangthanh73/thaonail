// thông tin shop

import gelPolishImg from '../../public/images/services/gel-polish-1.jpg'
import acrylicNailsImg from '../../public/images/services/acrylic-nails-2.jpg';
import nailArtImg from '../../public/images/services/nail-art-3.jpg';
import nailCareImg from '../../public/images/services//nail-care-4.jpg';

import avt1 from '../../public/images/feedback/avt1.jpg';
import avt2 from '../../public/images/feedback/avt2.jpg';
import avt3 from '../../public/images/feedback/avt3.jpg';

export const SHOP_INFO = {
    address: "số 3 đường DC11, quận Tân Phú, HCM",
    phone: "0968 340 158"
};

export const NAV_LINKS = [
    { name: "Trang chủ", href: "/" },
    { name: "Về chúng tôi", href: "/about" },
    { name: "Dịch vụ", href: "/services" },
    { name: "Khuyến mãi", href: "/coupons" },
    { name: "Đặt lịch", href: "/booking" },
    { name: "Bộ sưu tập", href: "/gallery" },
    { name: "Liên hệ", href: "/contact" },
];

export const SERVICES = [
    {
        id: 1,
        title: 'Sơn Gel Cao Cấp',
        description: "Màu gel bền đẹp, cập nhật xu hướng mới nhất. Công nghệ sơn gel hiện đại giúp móng giữ độ bóng lâu dài, hạn chế trầy xước. Bộ sưu tập màu đa dạng từ nhẹ nhàng đến cá tính cho bạn thoải mái lựa chọn.",
        image: gelPolishImg,
        slug: 'gel-polish'
    },
    {
        id: 2,
        title: 'Đắp Bột - Đắp Gel',
        description: "Form móng chuẩn, bền chắc, không đau. Kỹ thuật viên giàu kinh nghiệm tạo dáng móng tự nhiên, phù hợp nhiều phong cách. Quy trình an toàn, không gây hại cho móng thật, mang lại sự tự tin và sang trọng.",
        image: acrylicNailsImg,
        slug: 'acrylic-nails'
    },
    {
        id: 3,
        title: 'Vẽ Nail Nghệ Thuật',
        description: "Thiết kế nail theo yêu cầu, phong cách riêng. Từ họa tiết đơn giản tinh tế đến nghệ thuật phức tạp đầy sáng tạo. Đa dạng màu sắc, kiểu vẽ bắt kịp xu hướng giúp bạn thể hiện cá tính độc đáo.",
        image: nailArtImg,
        slug: 'nail-art'
    },
    {
        id: 4,
        title: 'Chăm Sóc Móng',
        description: "Chăm sóc da tay, da chân, cắt khỏe móng. Liệu trình spa nhẹ nhàng giúp thư giãn, dưỡng ẩm và bảo vệ móng chắc khỏe. Mang lại cảm giác thoải mái cùng đôi tay, đôi chân mềm mại.",
        image: nailCareImg,
        slug: 'nail-care'

    }
]

export const REASONS = [
  { id: 1, text: 'Tay nghề cao' },
  { id: 2, text: 'Dụng cụ vô trùng' },
  { id: 3, text: 'Xu hướng mới' },
  { id: 4, text: 'Giá hợp lý' },
];

export const FEEDBACKS = [
  {
    id: 1,
    name: "Nguyễn Anh",
    role: "Khách hàng thân thiết",
    content: "Không gian ở Thảo Nail cực kỳ thư giãn. Nhân viên tay nghề cao, làm rất kỹ và tỉ mỉ. Mình rất hài lòng với mẫu nail đính đá lần này!",
    rating: 5,
    avatar: avt1
  },
  {
    id: 2,
    name: "Minh Thư",
    role: "Khách hàng",
    content: "Giá cả rất hợp lý so với chất lượng dịch vụ. Dụng cụ ở đây luôn được vô trùng sạch sẽ nên mình rất yên tâm khi làm đẹp.",
    rating: 5,
    avatar: avt2
  },
  {
    id: 3,
    name: "Bảo Ngọc",
    role: "Khách hàng",
    content: "Mẫu mã đa dạng, luôn cập nhật những xu hướng mới nhất. Nhân viên tư vấn rất nhiệt tình, phù hợp với phong cách của mình.",
    rating: 5,
    avatar: avt3
  }
];