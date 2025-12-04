import React from "react";
import { motion } from "framer-motion";
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
    theme: "from-emerald-500/90 to-emerald-700/90",
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
    theme: "from-cyan-500/90 to-sky-600/90",
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
    theme: "from-red-500/90 to-red-700/90",
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
    theme: "from-amber-500/90 to-orange-600/90",
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
    theme: "from-sky-500/90 to-blue-700/90",
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
    theme: "from-emerald-500/90 to-teal-700/90",
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
    theme: "from-orange-500/90 to-rose-600/90",
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
    theme: "from-lime-500/90 to-emerald-700/90",
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
    color: "border-amber-500/60 bg-amber-500/5",
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
    color: "border-pink-500/60 bg-pink-500/5",
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
    color: "border-sky-500/60 bg-sky-500/5",
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
    color: "border-emerald-500/60 bg-emerald-500/5",
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
    color: "border-lime-500/60 bg-lime-500/5",
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
        ? "bg-emerald-500 text-black border-emerald-400 shadow-lg shadow-emerald-500/30"
        : "bg-zinc-900 border-zinc-700 text-zinc-200 hover:border-emerald-500 hover:text-emerald-200")
    }
  >
    {children}
  </button>
);

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
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      <div className="max-w-6xl mx-auto px-4 pb-24">
        {/* Header / Hero */}
        <header className="pt-10 pb-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-xl"
          >
            <Badge className="bg-emerald-500/10 text-emerald-300 border-emerald-500/40 px-3 py-1 uppercase tracking-wide">
              Dự án lịch sử & ứng dụng AI có trách nhiệm
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Trường Kỳ Kháng Chiến
              <span className="block text-emerald-400 mt-1">
                Nhất Định Thắng Lợi
              </span>
            </h1>
            <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
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
                className="rounded-full px-5 h-10 bg-emerald-500 hover:bg-emerald-400 text-sm font-medium flex items-center gap-2"
              >
                <Shield className="w-4 h-4" />
                Khám phá 8 cận vệ
              </button>
              <button
                onClick={() => handleScrollTo("rubric")}
                className="rounded-full px-5 h-10 border border-zinc-600 bg-zinc-900/60 text-sm font-medium flex items-center gap-2"
              >
                <Star className="w-4 h-4" />
                Xem tiêu chí chấm điểm
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:w-72"
          >
          </motion.div>
        </header>

        {/* Section: Guards */}
        <section id="guards" className="space-y-6 mt-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-emerald-500/15 border border-emerald-500/50 flex items-center justify-center">
              <Shield className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Tám cận vệ – khẩu hiệu sống của kháng chiến
              </h2>
              <p className="text-xs md:text-sm text-zinc-300 mt-1 max-w-2xl">
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
                    "w-full flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all " +
                    (selectedGuardKey === g.key
                      ? "border-emerald-400/70 bg-emerald-500/10 shadow-md shadow-emerald-500/20"
                      : "border-zinc-700/80 bg-zinc-900/60 hover:border-emerald-500/60 hover:bg-zinc-900")
                  }
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold tracking-wide uppercase text-[11px] text-zinc-300">
                      {g.label}
                    </span>
                    <span className="text-[11px] text-zinc-400 line-clamp-2">
                      {g.tagline}
                    </span>
                  </div>
                  <Badge className="border-emerald-500/60 text-emerald-300 bg-emerald-500/10">
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
              <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/70 overflow-hidden flex flex-col">
                <div
                  className={
                    "px-5 py-4 border-b border-zinc-800/80 bg-gradient-to-r " +
                    selectedGuard.theme
                  }
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="space-y-1">
                      <p className="text-[11px] uppercase tracking-wide text-emerald-50/80 font-medium flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        {selectedGuard.label}
                      </p>
                      <p className="text-xs text-zinc-100/90">
                        {selectedGuard.tagline}
                      </p>
                    </div>
                    <div className="text-right text-[11px] text-emerald-50/80">
                      <p>Bốn Kinh & bốn dân tộc thiểu số</p>
                      <p className="opacity-80">Một vòng tròn bảo vệ Bác</p>
                    </div>
                  </div>
                </div>
                <div className="p-0 flex-1 flex flex-col">
                  <div className="max-h-[485px] overflow-y-auto">
                    <div className="p-4 space-y-4 text-xs md:text-sm text-zinc-200">
                      {selectedGuard.people.map((p, idx) => (
                        <div
                          key={p.name}
                          className={
                            "relative rounded-xl border border-zinc-700/70 bg-zinc-900/70 p-4 " +
                            (idx === 0 ? "" : "mt-1")
                          }
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div>
                              <h3 className="font-semibold text-sm flex items-center gap-2">
                                {p.name}
                                <span className="text-[11px] font-normal text-zinc-400">
                                  ({p.realName})
                                </span>
                              </h3>
                              <p className="text-[11px] text-zinc-400 mt-0.5">
                                {p.years} • {p.ethnicity} • {p.origin}
                              </p>
                            </div>
                            <Badge className="bg-zinc-800/80 border-zinc-600/80 text-zinc-200 flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              Cận vệ của Bác
                            </Badge>
                          </div>
                          <p className="text-[12px] text-emerald-200 mb-2 leading-relaxed">
                            {p.role}
                          </p>
                          <ul className="space-y-1.5 text-[12px] text-zinc-300 list-disc list-inside">
                            {p.highlights.map((h) => (
                              <li key={h}>{h}</li>
                            ))}
                          </ul>
                          <p className="mt-2 text-[12px] text-zinc-400 leading-relaxed">
                            {p.later}
                          </p>
                        </div>
                      ))}
                      <p className="text-[11px] text-zinc-500 pt-1">
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
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-amber-500/15 border border-amber-500/50 flex items-center justify-center">
              <Star className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Rubric chấm điểm sản phẩm & thuyết trình
              </h2>
              <p className="text-xs md:text-sm text-zinc-300 mt-1 max-w-2xl">
                Phần này tóm tắt 5 tiêu chí chấm điểm (3–2–2–2–1) và gợi ý cách
                tối ưu website cùng bài trình bày để đạt điểm cao nhất, đồng
                thời vẫn minh bạch trong việc sử dụng AI.
              </p>
            </div>
          </motion.div>

          {/* Tabs custom */}
          <div className="mt-1">
            <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-700/80 rounded-full px-1 py-1 text-xs">
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
                          "h-full rounded-2xl border border-zinc-700/80 " +
                          item.color
                        }
                      >
                        <div className="pb-2 pt-3 px-4 flex flex-row items-center justify-between gap-2">
                          <div className="space-y-1">
                            <div className="text-sm flex items-center gap-2 font-semibold">
                              <span className="inline-flex w-6 h-6 rounded-full bg-zinc-900/80 items-center justify-center border border-zinc-700/80 text-[11px]">
                                {item.id}
                              </span>
                              {item.title}
                            </div>
                            <p className="text-[11px] text-zinc-300 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <Icon className="w-5 h-5 text-emerald-300" />
                            <p className="text-[11px] text-emerald-200 font-medium">
                              {item.points} điểm
                            </p>
                          </div>
                        </div>
                        <div className="pt-1 pb-3 px-4 text-[12px] text-zinc-200">
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
                <div className="rounded-2xl border border-emerald-500/60 bg-emerald-500/5">
                  <div className="pb-2 pt-3 px-4 flex flex-row items-start justify-between gap-3">
                    <div>
                      <div className="text-sm flex items-center gap-2 font-semibold">
                        <GraduationCap className="w-4 h-4 text-emerald-300" />
                        Thiết kế phần "AI Usage" cho bài của bạn
                      </div>
                      <p className="text-[11px] text-emerald-100/90 mt-1 max-w-2xl">
                        Đây là gợi ý cấu trúc để minh bạch hóa việc dùng AI
                        trong dự án, đúng tinh thần liêm chính học thuật: AI chỉ
                        hỗ trợ một phần, nội dung cuối cùng do nhóm chịu trách
                        nhiệm.
                      </p>
                    </div>
                  </div>
                  <div className="pt-1 pb-3 px-4 text-[12px] text-emerald-50/90 space-y-1.5">
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

            {activeTab === "tips" && (
              <div className="mt-4">
                <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/80">
                  <div className="pb-2 pt-3 px-4 flex flex-row items-start gap-3">
                    <div>
                      <div className="text-sm flex items-center gap-2 font-semibold">
                        <ScrollText className="w-4 h-4 text-amber-300" />
                        Gợi ý sử dụng website trong buổi thuyết trình
                      </div>
                      <p className="text-[11px] text-zinc-300 mt-1">
                        Một số cách để buổi trình bày vừa sinh động vừa bám sát
                        rubric.
                      </p>
                    </div>
                  </div>
                  <div className="pt-1 pb-3 px-4 text-[12px] text-zinc-200 space-y-1.5">
                    <p>
                      1. <span className="font-semibold">Mở đầu (2–3 phút):</span>{" "}
                      dùng phần hero giới thiệu nhanh khẩu hiệu “Trường kỳ
                      kháng chiến nhất định thắng lợi” và ý tưởng website; gắn
                      với lý thuyết mà môn học yêu cầu.
                    </p>
                    <p>
                      2.{" "}
                      <span className="font-semibold">
                        Thân bài (10–15 phút):
                      </span>{" "}
                      lần lượt cho khán giả chọn từng tên trong danh sách bên
                      trái; mỗi thành viên nhóm kể câu chuyện một cận vệ và rút
                      ra bài học.
                    </p>
                    <p>
                      3. <span className="font-semibold">Tương tác:</span> mời
                      khán giả đoán xem ai là người Kinh, ai là dân tộc thiểu
                      số; đặt câu hỏi: “Nếu bạn là cận vệ trong bối cảnh hiện
                      nay, bạn sẽ cần phẩm chất gì?”.
                    </p>
                    <p>
                      4. <span className="font-semibold">Kết thúc:</span> chuyển
                      sang phần Rubric & AI Usage, cho giảng viên thấy nhóm đã
                      chủ động thiết kế sản phẩm bám sát tiêu chí, minh bạch về
                      phần AI hỗ trợ.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 pt-6 border-t border-zinc-800/80 text-[11px] text-zinc-400 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>
            © {new Date().getFullYear()} – Trình bày dựa trên tư liệu lịch sử về
            tám cận vệ của Chủ tịch Hồ Chí Minh và rubric đánh giá sản phẩm học
            phần.
          </p>
          <p className="text-zinc-500">
            Gợi ý: bạn có thể tùy biến thêm màu sắc, font và nội dung để phù
            hợp với nhóm và môn học cụ thể.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
