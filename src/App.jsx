import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Fireworks as FireworksCanvas } from "@fireworks-js/react";
import {
  BookOpen,
  Shield,
  Sparkles,
  ScrollText,
  GraduationCap,
  Star,
  Users,
} from "lucide-react";

const guards = [
  {
    key: "truong",
    label: "Trường",
    // vàng đất trầm
    theme: "from-amber-700/90 to-amber-900/90",
    tagline: "Biểu tượng của kháng chiến trường kỳ, bền bỉ",
    people: [
      {
        name: "Võ Trường",
        realName: "Võ Chương",
        years: "~1919 – 1949",
        ethnicity: "Kinh",
        origin: "Thanh Hóa – Hà Nội",
        role: "Một trong những cận vệ đầu tiên, bảo vệ Bác từ những ngày đầu Toàn quốc Kháng chiến.",
        highlights: [
          "Giáo viên, tham gia Thanh niên cứu quốc Hoàng Diệu, có kinh nghiệm hoạt động bí mật tại Hà Nội.",
          "Được tuyển vào đội cận vệ tháng 10/1945, trực tiếp bảo vệ Bác lên Chiến khu Việt Bắc cuối năm 1946.",
          "Là người đầu tiên được Bác đặt tên \"Trường\" trong vòng tròn cận vệ sáng 4/3/1947 tại Việt Bắc.",
        ],
        later:
          "Do lâm bệnh nặng, ông chuyển công tác và mất năm 1949, khi mới khoảng 30 tuổi – cuộc đời ngắn ngủi nhưng đầy hy sinh.",
      },
      {
        name: "Hồ Văn Trường",
        realName: "Hoàng Văn Phức",
        years: "? – 1994",
        ethnicity: "Tày",
        origin: "Cao Bằng",
        role: "Cận vệ gắn bó lâu dài với Bác từ Tân Trào 1945 cho đến sau 1969.",
        highlights: [
          "Ban đầu mang tên \"Nhất\" khi bảo vệ Bác ở Tân Trào; sau thay vị trí \"Trường\" nên được Bác gọi là Hồ Văn Trường.",
          "Thiện xạ, đi rừng giỏi, từng là lính dõng nhưng mang vũ khí theo cách mạng, gia nhập Giải phóng quân.",
          "Sau này công tác tại Ngân hàng Nhà nước và Bảo tàng Hồ Chí Minh, tiếp tục gìn giữ di sản về Bác.",
        ],
        later:
          "Ông qua đời năm 1994, để lại hình ảnh người cận vệ dân tộc thiểu số trung kiên, sống giản dị bên cạnh Bác.",
      },
      {
        name: "Trường (lái xe)",
        realName: "Phạm Văn Nền",
        years: "? – 1996",
        ethnicity: "Kinh",
        origin: "Hà Nội",
        role: "Lái xe và cận vệ, tham gia bảo vệ Bác trong các chuyến đi quan trọng, trong đó có Hội nghị Geneva 1954.",
        highlights: [
          "Từ Sở Hải quan Hà Nội được điều đi lái xe mồi nhử ban ngày để đánh lạc hướng gián điệp, ban đêm chở Bác bí mật.",
          "Sau 1954, lái xe cho Đoàn đại biểu Việt Nam tại Geneva; rồi là lái xe riêng cho Bác đến năm 1969.",
          "Thực hiện cả nhiệm vụ liên lạc, vận chuyển tài liệu mật giữa Bác và các cơ quan Trung ương.",
        ],
        later:
          "Là người thứ ba và cuối cùng mang tên \"Trường\", phục vụ Bác lâu dài trong vai trò lái xe và cận vệ.",
      },
    ],
  },
  {
    key: "ky",
    label: "Kỳ",
    // xanh rêu trầm
    theme: "from-emerald-700/90 to-emerald-900/90",
    tagline: "Bền bỉ, kiên trì như chính cuộc đời người thư ký",
    people: [
      {
        name: "Vũ Kỳ",
        realName: "Vũ Long Chuẩn (Nguyễn Cần)",
        years: "1921 – 2005",
        ethnicity: "Kinh",
        origin: "Vĩnh Phúc – Hà Nội",
        role: "Thư ký riêng tận tụy của Bác trong 24 năm, đồng thời là cận vệ và người chép lại từng ngày hoạt động của Bác.",
        highlights: [
          "Giác ngộ cách mạng từ 1940, từng bị tù Hỏa Lò, vượt ngục năm 1945 cùng Trần Đăng Ninh.",
          "Được Bác chọn làm thư ký tối 27/8/1945 tại 48 Hàng Ngang; tham gia chuẩn bị Tuyên ngôn Độc lập và lễ 2/9.",
          "Quản lý bản Di chúc tuyệt mật từ 1965; sau này là Giám đốc đầu tiên Bảo tàng Hồ Chí Minh.",
        ],
        later:
          "Ông dành cả đời để kể chuyện, nghiên cứu và gìn giữ di sản Hồ Chí Minh; được tặng Huân chương Hồ Chí Minh và nhiều phần thưởng cao quý.",
      },
    ],
  },
  {
    key: "khang",
    label: "Kháng",
    // đỏ trầm
    theme: "from-red-800/90 to-red-950/90",
    tagline: "Kiên cường, mưu trí trong công tác cảnh vệ",
    people: [
      {
        name: "Hoàng Hữu Kháng",
        realName: "Nguyễn Văn Cao (Nguyễn Văn Lý)",
        years: "1912 – 1993",
        ethnicity: "Kinh",
        origin: "Kiến Xương, Thái Bình",
        role: "Cận vệ trung kiên của Bác gần 3 thập kỷ, sau là lãnh đạo Cục Cảnh vệ, Anh hùng Lực lượng vũ trang.",
        highlights: [
          "Tham gia phong trào công nhân từ thập niên 1930, nhiều lần bị bắt, tù đày nhưng vẫn hoạt động trong chi bộ nhà tù.",
          "Vượt ngục, về Tân Trào, tham gia Cứu quốc quân, rồi được chọn bảo vệ Bác từ 1945.",
          "Là Phó Cục trưởng rồi Cục trưởng Cục Cảnh vệ, xây dựng nền móng nghiệp vụ bảo vệ lãnh tụ của Công an nhân dân.",
        ],
        later:
          "Ông coi khẩu súng carbine Bác giao như báu vật và cuối đời trao cho Bảo tàng CAND, như một thông điệp về truyền thống cảnh vệ tuyệt đối trung thành.",
      },
    ],
  },
  {
    key: "chien",
    label: "Chiến",
    theme: "from-orange-700/90 to-orange-900/90",
    tagline: "Tinh thần chiến đấu bền bỉ và sáng tạo",
    people: [
      {
        name: "Tạ Quang Chiến",
        realName: "Nguyễn Hữu Văn",
        years: "1925 – 2022",
        ethnicity: "Kinh",
        origin: "Hải Dương – Hà Nội",
        role: "Cận vệ của Bác giai đoạn 1945–1957, sau là nhà lãnh đạo Đoàn TNCS Hồ Chí Minh và ngành Thể dục Thể thao.",
        highlights: [
          "Thành viên Đội Tự vệ Chiến đấu Hoàng Diệu, được Nguyễn Lương Bằng tuyển vào tổ giúp việc cho Bác từ 1945.",
          "Chia sẻ mọi gian khổ với Bác ở Việt Bắc: chăm sóc, chuẩn bị bữa ăn, bảo vệ sức khỏe Bác giữa rừng núi.",
          "Sau này học Liên Xô, làm Bí thư Trung ương Đoàn, Tổng cục trưởng Tổng cục TDTT, đại biểu Quốc hội, nhà nghiên cứu tư tưởng Hồ Chí Minh.",
        ],
        later:
          "Di nguyện của ông là dành toàn bộ tiền phúng viếng cho công tác phòng chống dịch – một minh chứng cho tinh thần chí công vô tư học từ Bác.",
      },
    ],
  },
  {
    key: "nhat",
    label: "Nhất",
    theme: "from-sky-800/90 to-blue-950/90",
    tagline: "Những chiến sĩ dân tộc thiểu số gan dạ, dẫn đường cho cách mạng",
    people: [
      {
        name: "Hoàng Văn Phúc",
        realName: "Văn Lâm, Hồ Văn Nhất",
        years: "? – 1994",
        ethnicity: "Tày",
        origin: "Nước Hai, Cao Bằng",
        role: "Một trong những cận vệ vùng cao đầu tiên, thiện xạ, am hiểu địa hình, bảo vệ Bác tại Tân Trào và Việt Bắc.",
        highlights: [
          "Được Phùng Chí Kiên tuyển vào Ban Công tác Đội bảo vệ Bác ở Tân Trào năm 1945.",
          "Thường phụ trách trông coi cơ quan, dẫn đường, bảo vệ kho tài sản bí mật của Chính phủ tại lâm sào Tuyên Quang.",
          "Xuất hiện trong ảnh lịch sử bên Bác khi Người quan sát trận Đông Khê năm 1950.",
        ],
        later:
          "Sau 1954 tiếp tục công tác bảo vệ rồi làm ở Bảo tàng Hồ Chí Minh, giữ nhiều kỷ vật và ký ức về Bác.",
      },
      {
        name: "Nông Văn Long",
        realName: "Long Văn Nhất (Nhất Tiên Phong)",
        years: "? – ~1967",
        ethnicity: "Tày",
        origin: "Ba Bể, Bắc Kạn",
        role: "Cận vệ trẻ, từng bảo vệ Đại tướng Võ Nguyên Giáp trước khi được Bác đặt tên \"Nhất\" để kế tục vị trí.",
        highlights: [
          "Từ 18 tuổi đã làm vệ sĩ cho Đại tướng Võ Nguyên Giáp, sau được điều sang bảo vệ Bác năm 1948.",
          "Giỏi đi rừng, săn bắn, thường đi tiên phong dẫn đường và cải thiện bữa ăn cho Bác ở Việt Bắc.",
          "Năm 1958 tháp tùng Bác trong chuyến thăm 9 nước XHCN – một vinh dự lớn dành cho cận vệ trẻ.",
        ],
        later:
          "Vì hoàn cảnh gia đình, ông xin về địa phương; một số tài liệu ghi ông mất trong thời kỳ chống Pháp, khoảng năm 1967.",
      },
    ],
  },
  {
    key: "dinh",
    label: "Định",
    theme: "from-emerald-700/90 to-teal-900/90",
    tagline: 'Người đi tiền trạm "không bao giờ lạc đường"',
    people: [
      {
        name: "Võ Viết Định",
        realName: "Chu Phương Vương",
        years: "1919 – ?",
        ethnicity: "Tày",
        origin: "Hưng Đạo, Hòa An, Cao Bằng",
        role: "Cận vệ chuyên tiền trạm, khảo sát đường đi và nơi trú ẩn an toàn cho Bác và Trung ương.",
        highlights: [
          "Chiến sĩ vũ trang tại Tân Trào, được Trần Đăng Ninh chọn vào tổ bảo vệ Bác từ tháng 7/1945.",
          "Luôn đi trước, kiểm tra lối mòn, tránh phục kích, dẫn Bác vượt rừng núi, thác suối an toàn.",
          "Có mặt bên Bác trên đồi quan sát trận Đông Khê trong Chiến dịch Biên giới 1950.",
        ],
        later:
          "Cuối 1952 xin về địa phương vì gia đình khó khăn, làm Phó Chủ nhiệm Công ty Xây lắp Cơ khí tại Thái Nguyên, tiếp tục cống hiến ở mặt trận kinh tế.",
      },
    ],
  },
  {
    key: "thang",
    label: "Thắng",
    theme: "from-rose-800/90 to-rose-950/90",
    tagline: 'Hiện thân của niềm tin "nhất định thắng lợi"',
    people: [
      {
        name: "Nguyễn Quang Chí",
        realName: "Nguyễn Văn Huy",
        years: "? – ?",
        ethnicity: "Kinh",
        origin: "Tuyên Quang",
        role: "Cận vệ trẻ, bảo vệ Bác tại Sơn Dương – Phú Thọ trong giai đoạn chiến sự căng thẳng.",
        highlights: [
          "Được Đàm Quang Trung giới thiệu vào đội cận vệ năm 1947, sau khi một số đồng chí chuyển công tác.",
          "Tham gia bảo vệ vòng ngoài, theo dõi địch, đảm bảo an toàn các tuyến di chuyển.",
        ],
        later:
          "Thời gian phục vụ không dài; sau đó ông được điều sang nhiệm vụ mới, tư liệu hiện còn khá ít.",
      },
      {
        name: "Triệu Văn Cắt",
        realName: "Triệu Hồng Thắng",
        years: "? – ?",
        ethnicity: "Dao",
        origin: "Định Hóa, Thái Nguyên",
        role: "Cận vệ người Dao, giỏi đi rừng, dẫn đường và làm hậu cần cho Bác ở Việt Bắc.",
        highlights: [
          "Tham gia lực lượng cứu quốc quân từ năm 1940, gắn bó với căn cứ Việt Bắc.",
          "Được Bác đặt tên \"Thắng\" khi vào đội cận vệ thay Nguyễn Quang Chí, phụ trách giao liên, quản lý quân nhu.",
          "Thường chọn đường vòng, lối mòn để tránh địch, nhiều lần cùng Bác vượt qua những chặng rừng núi hiểm trở.",
        ],
        later:
          "Sau 1954, ông làm Phó Chủ tịch Ủy ban Hành chính Khu tự trị Việt Bắc – tấm gương chiến sĩ dân tộc thiểu số trưởng thành từ cách mạng.",
      },
    ],
  },
  {
    key: "loi",
    label: "Lợi",
    theme: "from-lime-700/90 to-emerald-900/90",
    tagline: "Người cận vệ từ những ngày đầu Pác Bó",
    people: [
      {
        name: "Trần Lợi",
        realName: "Trần Đình",
        years: "? – ?",
        ethnicity: "Nùng",
        origin: "Cao Bằng",
        role: "Cận vệ và giao liên của Bác tại Pác Bó, một trong những người bảo vệ Bác sớm nhất khi Người trở về Tổ quốc.",
        highlights: [
          "Tham gia đội vũ trang của Đàm Minh Viễn trước năm 1941, rồi vào Ban Công tác Đội bảo vệ Bác tại Pác Bó.",
          "Dẫn đường, vận chuyển tài liệu và lương thực giữa các làng đồng bào và căn cứ của Bác.",
          "Trên đường chuyển căn cứ về Việt Bắc sau 1946, tiếp tục đi cùng đoàn một quãng dài trong giai đoạn hiểm nghèo.",
        ],
        later:
          "Vì hoàn cảnh gia đình rất khó khăn, ông xin phép Bác trở về gần quê nhà; nhiều tài liệu cho rằng ông mất hoặc hy sinh trong kháng chiến chống Pháp.",
      },
    ],
  },
];

const rubric = [
  {
    id: 1,
    title: "Chiều sâu học thuật & Liên kết lý thuyết",
    points: 3,
    icon: BookOpen,
    color: "border-amber-600/60 bg-amber-50/60",
    description:
      "Sản phẩm phải vận dụng đúng lý thuyết, phân tích logic, gắn chặt với các LO của học phần.",
    bullets: [
      "Dẫn chiếu rõ khung lý thuyết, khái niệm, mô hình sử dụng.",
      "Giải thích bằng lời của nhóm, không sao chép máy móc.",
      "Kết nối giữa lý thuyết và câu chuyện về 8 cận vệ, minh họa bằng ví dụ cụ thể.",
    ],
  },
  {
    id: 2,
    title: "Sáng tạo, Hình thức & Tính trình bày",
    points: 2,
    icon: Sparkles,
    color: "border-orange-500/60 bg-orange-50/70",
    description:
      "Sản phẩm sinh động (web, video, poster, kịch...), có ý tưởng sáng tạo rõ ràng. Website phải là trung tâm buổi trình bày, không chỉ là file đính kèm.",
    bullets: [
      "Bố cục UI/UX rõ ràng, dễ dùng, tối ưu trải nghiệm người xem.",
      "Trình bày bắt mắt nhưng vẫn trang trọng, phù hợp chủ đề lịch sử – học thuật.",
      "Tận dụng hiệu ứng chuyển động để kể câu chuyện một cách hấp dẫn, không lạm dụng gây rối mắt.",
    ],
  },
  {
    id: 3,
    title: "Tính tương tác",
    points: 2,
    icon: Users,
    color: "border-sky-500/60 bg-sky-50/70",
    description:
      "Sản phẩm phải thu hút người xem tham gia: click, khám phá, đặt câu hỏi, bình luận...",
    bullets: [
      "Cho phép người xem chọn từng tên Trường – Kỳ – Kháng – Chiến – Nhất – Định – Thắng – Lợi để xem chi tiết.",
      "Có gợi ý câu hỏi thảo luận hoặc mini-quiz trong khi trình bày.",
      "Giảng viên có thể yêu cầu số lượng người tham gia tối thiểu để tính điểm tối đa.",
    ],
  },
  {
    id: 4,
    title: "Ứng dụng AI có trách nhiệm – minh bạch – liêm chính",
    points: 2,
    icon: GraduationCap,
    color: "border-emerald-600/60 bg-emerald-50/70",
    description:
      "Trình bày rõ cách sử dụng AI, kiểm chứng thông tin và đảm bảo liêm chính học thuật.",
    bullets: [
      "Có slide/phụ lục \"AI Usage\" liệt kê công cụ, mục đích, prompt chính và phần nhóm tự chỉnh sửa.",
      "Mọi thông tin lịch sử phải được kiểm chứng lại bằng sách, tài liệu hoặc bảo tàng/nguồn chính thống.",
      "Không để AI viết thay toàn bộ, có đánh dấu phần AI gợi ý và phần nhóm tự biên soạn.",
    ],
  },
  {
    id: 5,
    title: "Tính cập nhật & Gắn kết thực tiễn",
    points: 1,
    icon: ScrollText,
    color: "border-lime-600/60 bg-lime-50/70",
    description:
      "Liên hệ bối cảnh xã hội – kinh tế – chính trị hiện nay, cho thấy ý nghĩa hiện thời của khẩu hiệu \"Trường kỳ kháng chiến nhất định thắng lợi\".",
    bullets: [
      "Liên hệ với bài học về đoàn kết dân tộc, bảo vệ Tổ quốc, gìn giữ hòa bình.",
      "Kết nối với tinh thần nỗ lực lâu dài trong học tập, nghiên cứu, chuyển đổi số.",
      "Đưa ví dụ thời sự, chính sách hoặc câu chuyện cộng đồng truyền cảm hứng.",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const Badge = ({ children, className = "" }) => (
  <span
    className={
      "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium " +
      className
    }
  >
    {children}
  </span>
);

const PillButton = ({ active, children, ...rest }) => (
  <button
    {...rest}
    className={
      "rounded-full px-4 h-9 text-xs font-medium border transition-all " +
      (active
        ? "bg-amber-600 text-white border-amber-500 shadow-lg shadow-amber-500/30"
        : "bg-white/80 border-stone-400 text-stone-800 hover:border-amber-500 hover:text-amber-700")
    }
  >
    {children}
  </button>
);

function Earth() {
  const earthTexture = useTexture("/textures/earth.jpg");

  return (
    <mesh rotation={[0.4, 0.7, 0]}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        map={earthTexture}
        metalness={0.35}        // tăng chút độ kim loại cho phản xạ
        roughness={0.45}        // bề mặt bớt nhám -> sáng hơn
        emissive="#1a1a3a"      // màu tự phát sáng rất nhẹ
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}


function RotatingGlobe() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 3] }}
    >
      {/* Ánh sáng nhẹ, tone ấm hoài cổ nhưng sáng hơn */}
      <ambientLight intensity={0.85} />
      <directionalLight
        position={[4, 4, 4]}
        intensity={1.4}
        color="#ffe7c2"   // ánh sáng ấm một chút
      />
      {/* Một nguồn sáng phụ dịu từ phía sau để viền sáng hơn */}
      <directionalLight
        position={[-3, -2, 1]}
        intensity={0.6}
        color="#d0e6ff"
      />

      <Earth />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </Canvas>
  );
}

function FallingFlags() {
  const flags = React.useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100, // vị trí ngang ngẫu nhiên
        delay: Math.random() * 5, // trễ ngẫu nhiên
        duration: 10 + Math.random() * 8, // tốc độ rơi khác nhau
        size: 18 + Math.random() * 12, // kích thước emoji
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {flags.map((flag) => (
        <motion.div
          key={flag.id}
          initial={{ y: -60, opacity: 0, x: 0, rotateZ: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0],
            x: [-10, 0, 10, 0],
            rotateZ: [-8, 6, -4, 10],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: flag.duration,
            delay: flag.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${flag.left}%`,
            fontSize: flag.size,
          }}
        >
          <span role="img" aria-label="Vietnam flag">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/250px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png"
              alt="Cờ Việt Nam"
              style={{
                width: `${flag.size}px`,
                height: "auto",
              }}
            />
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function FireworksOverlay() {
  const [visible, setVisible] = React.useState(true);

  // Tự tắt sau 3 giây cho nhẹ
  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <FireworksCanvas
      options={{
        // chỉ nổ vùng giữa màn hình cho đỡ rối
        rocketsPoint: { min: 40, max: 60 }, // % chiều ngang
        intensity: 25,
        opacity: 0.6,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 6,
        brightness: { min: 60, max: 90 },
      }}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 30,
      }}
    />
  );
}



function App() {
  const [selectedGuardKey, setSelectedGuardKey] = React.useState("truong");
  const [activeTab, setActiveTab] = React.useState("overview");

  const selectedGuard =
    guards.find((g) => g.key === selectedGuardKey) ?? guards[0];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    // nền để trong suốt cho trống đồng phía sau + chữ mặc định nâu đậm
    <div className="min-h-screen bg-transparent text-stone-900">
      <FallingFlags />
      <FireworksOverlay />
      <div className="max-w-6xl mx-auto px-4 pb">
        {/* Header / Hero */}
        <header className="pt-10 pb-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-xl bg-white/65 shadow-sm rounded-2xl p-4 backdrop-blur-sm"
          >
            <Badge className="bg-amber-100 text-amber-800 border-amber-300 px-3 py-1 uppercase tracking-wide">
              Dự án lịch sử & ứng dụng AI có trách nhiệm
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-stone-900">
              Trường Kỳ Kháng Chiến
              <span className="block text-amber-700 mt-1">
                Nhất Định Thắng Lợi
              </span>
            </h1>
            <p className="text-sm md:text-base text-stone-800 leading-relaxed">
              Website giới thiệu tám cận vệ của Chủ tịch Hồ Chí Minh – những con
              người mang tên khẩu hiệu sống
              {" “Trường – Kỳ – Kháng – Chiến – Nhất – Định – Thắng – Lợi” – "}
              đồng thời gợi ý cách thiết kế sản phẩm thuyết trình đạt tối đa
              theo rubric môn học về chiều sâu học thuật, sáng tạo, tương tác và
              ứng dụng AI có trách nhiệm.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleScrollTo("guards")}
                className="rounded-full px-5 h-10 bg-amber-600 hover:bg-amber-500 text-sm font-medium flex items-center gap-2 text-white shadow"
              >
                <Shield className="w-4 h-4" />
                Khám phá 8 cận vệ
              </button>
              <button
                onClick={() => handleScrollTo("rubric")}
                className="rounded-full px-5 h-10 border border-stone-400 bg-white/85 text-sm font-medium flex items-center gap-2 text-stone-800 hover:border-amber-500 hover:text-amber-700"
              >
                <Star className="w-4 h-4 text-amber-600" />
                Xem tiêu chí chấm điểm
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative hidden md:block md:w-[420px] md:h-[400px] rounded-2xl overflow-hidden bg-white/50 shadow-lg backdrop-blur-sm"
          >
            <RotatingGlobe />
            {/* Thanh mô tả nhỏ phía dưới quả cầu */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent text-[11px] text-center text-stone-700 px-3 pt-4 pb-3">
              Địa cầu 3D gợi nhắc tầm vóc quốc tế của cuộc kháng chiến
              và thông điệp “Trường kỳ kháng chiến, nhất định thắng lợi”.
            </div>
          </motion.div>
        </header>

        {/* Section: Guards */}
        <section id="guards" className="space-y-6 mt-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex items-center gap-3 bg-white/70 rounded-2xl px-4 py-3 backdrop-blur"
          >
            <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-400 flex items-center justify-center">
              <Shield className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-stone-900">
                Tám cận vệ – khẩu hiệu sống của kháng chiến
              </h2>
              <p className="text-xs md:text-sm text-stone-700 mt-1 max-w-2xl">
                Bốn chiến sĩ người Kinh (Trường – Kỳ – Kháng – Chiến) và bốn
                chiến sĩ dân tộc thiểu số (Nhất – Định – Thắng – Lợi) tạo thành
                vòng tròn bảo vệ Bác, đồng thời nhắc nhở toàn quân về tinh thần
                kháng chiến trường kỳ, đoàn kết toàn dân tộc.
              </p>
            </div>
          </motion.div>

          <div className="mt-2 grid gap-5 md:grid-cols-[minmax(0,1.35fr)_minmax(0,2fr)]">
            {/* Left: list of guards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-3"
            >
              {guards.map((g) => (
                <motion.button
                  key={g.key}
                  variants={fadeInUp}
                  onClick={() => setSelectedGuardKey(g.key)}
                  className={
                    "w-full flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all bg-white/80 backdrop-blur " +
                    (selectedGuardKey === g.key
                      ? "border-amber-500/80 shadow-md shadow-amber-400/30"
                      : "border-stone-300 hover:border-amber-500/70")
                  }
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold tracking-wide uppercase text-[11px] text-stone-800">
                      {g.label}
                    </span>
                    <span className="text-[11px] text-stone-600 line-clamp-2">
                      {g.tagline}
                    </span>
                  </div>
                  <Badge className="border-amber-500/70 text-amber-800 bg-amber-50">
                    {g.people.length} nhân vật
                  </Badge>
                </motion.button>
              ))}
            </motion.div>

            {/* Right: detail card */}
            <motion.div
              key={selectedGuard.key}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-2xl border border-stone-300 bg-white/90 overflow-hidden flex flex-col backdrop-blur">
                <div
                  className={
                    "px-5 py-4 border-b border-stone-200 bg-gradient-to-r text-white " +
                    selectedGuard.theme
                  }
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="space-y-1">
                      <p className="text-[11px] uppercase tracking-wide font-medium flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        {selectedGuard.label}
                      </p>
                      <p className="text-xs opacity-90">
                        {selectedGuard.tagline}
                      </p>
                    </div>
                    <div className="text-right text-[11px] opacity-90">
                      <p>Bốn Kinh & bốn dân tộc thiểu số</p>
                      <p className="opacity-80">Một vòng tròn bảo vệ Bác</p>
                    </div>
                  </div>
                </div>
                <div className="p-0 flex-1 flex flex-col">
                  <div className="max-h-[485px] overflow-y-auto">
                    <div className="p-4 space-y-4 text-xs md:text-sm text-stone-800">
                      {selectedGuard.people.map((p, idx) => (
                        <div
                          key={p.name}
                          className={
                            "relative rounded-xl border border-stone-200 bg-stone-50 p-4 " +
                            (idx === 0 ? "" : "mt-1")
                          }
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div>
                              <h3 className="font-semibold text-sm flex items-center gap-2 text-stone-900">
                                {p.name}
                                <span className="text-[11px] font-normal text-stone-500">
                                  ({p.realName})
                                </span>
                              </h3>
                              <p className="text-[11px] text-stone-600 mt-0.5">
                                {p.years} • {p.ethnicity} • {p.origin}
                              </p>
                            </div>
                            <Badge className="bg-white border-stone-300 text-stone-800 flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-amber-600" />
                              Cận vệ của Bác
                            </Badge>
                          </div>
                          <p className="text-[12px] text-amber-800 mb-2 leading-relaxed">
                            {p.role}
                          </p>
                          <ul className="space-y-1.5 text-[12px] text-stone-800 list-disc list-inside">
                            {p.highlights.map((h) => (
                              <li key={h}>{h}</li>
                            ))}
                          </ul>
                          <p className="mt-2 text-[12px] text-stone-700 leading-relaxed">
                            {p.later}
                          </p>
                        </div>
                      ))}
                      <p className="text-[11px] text-stone-600 pt-1">
                        Gợi ý trình bày: Khi thuyết trình, mỗi thành viên trong
                        nhóm có thể đảm nhiệm kể về một nhân vật, kết hợp hiển
                        thị đoạn tiểu sử và phân tích bài học rút ra (tinh thần
                        trường kỳ, đoàn kết dân tộc, liêm chính, chí công vô
                        tư...).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: Rubric */}
        <section id="rubric" className="mt-10 space-y-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex items-center gap-3 bg-white/70 rounded-2xl px-4 py-3 backdrop-blur"
          >
            <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-400 flex items-center justify-center">
              <Star className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-stone-900">
                Rubric chấm điểm sản phẩm & thuyết trình
              </h2>
              <p className="text-xs md:text-sm text-stone-700 mt-1 max-w-2xl">
                Phần này tóm tắt 5 tiêu chí chấm điểm (3–2–2–2–1) và gợi ý cách
                tối ưu website cùng bài trình bày để đạt điểm cao nhất, đồng
                thời vẫn minh bạch trong việc sử dụng AI.
              </p>
            </div>
          </motion.div>

          <div className="mt-1">
            <div className="inline-flex items-center gap-2 bg-white/80 border border-stone-300 rounded-full px-1 py-1 text-xs backdrop-blur">
              <PillButton
                active={activeTab === "overview"}
                onClick={() => setActiveTab("overview")}
              >
                Tổng quan 5 tiêu chí
              </PillButton>
              <PillButton
                active={activeTab === "ai"}
                onClick={() => setActiveTab("ai")}
              >
                Minh bạch AI Usage
              </PillButton>
            </div>

            {activeTab === "overview" && (
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {rubric.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      <div
                        className={
                          "h-full rounded-2xl border bg-white/90 backdrop-blur " +
                          item.color
                        }
                      >
                        <div className="pb-2 pt-3 px-4 flex flex-row items-center justify-between gap-2">
                          <div className="space-y-1">
                            <div className="text-sm flex items-center gap-2 font-semibold text-stone-900">
                              <span className="inline-flex w-6 h-6 rounded-full bg-white items-center justify-center border border-stone-300 text-[11px]">
                                {item.id}
                              </span>
                              {item.title}
                            </div>
                            <p className="text-[11px] text-stone-800 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <Icon className="w-5 h-5 text-amber-700" />
                            <p className="text-[11px] text-amber-800 font-medium">
                              {item.points} điểm
                            </p>
                          </div>
                        </div>
                        <div className="pt-1 pb-3 px-4 text-[12px] text-stone-800">
                          <ul className="space-y-1.5 list-disc list-inside">
                            {item.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {activeTab === "ai" && (
              <div className="mt-4">
                <div className="rounded-2xl border border-emerald-400 bg-emerald-50/90 backdrop-blur">
                  <div className="pb-2 pt-3 px-4 flex flex-row items-start justify-between gap-3">
                    <div>
                      <div className="text-sm flex items-center gap-2 font-semibold text-stone-900">
                        <GraduationCap className="w-4 h-4 text-emerald-700" />
                        Thiết kế phần "AI Usage" cho bài của bạn
                      </div>
                      <p className="text-[11px] text-stone-800 mt-1 max-w-2xl">
                        Đây là gợi ý cấu trúc để minh bạch hóa việc dùng AI
                        trong dự án, đúng tinh thần liêm chính học thuật: AI chỉ
                        hỗ trợ một phần, nội dung cuối cùng do nhóm chịu trách
                        nhiệm.
                      </p>
                    </div>
                  </div>
                  <div className="pt-1 pb-3 px-4 text-[12px] text-stone-900 space-y-1.5">
                    <p>
                      • Mục 1: Công cụ đã dùng (ví dụ: ChatGPT, công cụ tìm
                      kiếm, dịch thuật...).
                    </p>
                    <p>
                      • Mục 2: Mục đích sử dụng (gợi ý dàn ý, kiểm tra lỗi ngữ
                      pháp, so sánh nguồn...).
                    </p>
                    <p>
                      • Mục 3: Ví dụ prompt chính & phiên bản AI trả lời, kèm
                      bản nhóm đã biên tập lại.
                    </p>
                    <p>
                      • Mục 4: Bảng kiểm chứng thông tin lịch sử (cột: Nội dung
                      – Nguồn AI – Nguồn kiểm tra – Ghi chú).
                    </p>
                    <p>
                      • Mục 5: Cam kết liêm chính học thuật – khẳng định không
                      để AI làm thay toàn bộ sản phẩm, có đối chiếu nguồn chính
                      thống.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-stone-600 text-lg space-y-1 bg-white/60 rounded-2xl px-4 py-10 backdrop-blur-sm">
          <p>
            © {new Date().getFullYear()} – Trình bày dựa trên tư liệu lịch sử về
            tám cận vệ của Chủ tịch Hồ Chí Minh
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
