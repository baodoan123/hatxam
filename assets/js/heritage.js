// assets/js/heritage.js

// Dữ liệu chi tiết Sổ tay Di Sản — gồm nhạc cụ chính + nhạc cụ phụ + nghệ nhân
const heritageData = [
  {
    id: 1,
    title: 'Đàn Nhị',
    author: 'Ngọc',
    image: 'assets/img/dannhi.jpg',
    summary: 'Nhạc cụ chính, linh hồn của hát Xẩm với 2 dây đàn và âm sắc réo rắt đặc trưng',
    category: 'nhac-cu-chinh',
    description: `<b>Đàn Nhị – Linh hồn của Xẩm</b>

Nhạc cụ quan trọng nhất trong hát Xẩm, quyết định màu sắc giai điệu đặc trưng.

<b>Cấu tạo:</b>
- Thuộc bộ dây có cung vĩ, gồm 2 dây (nhị = 二)
- Bầu cộng hưởng bằng gỗ cứng, bịt da rắn/kỳ đà
- Cung vĩ căng lông đuôi ngựa, tạo cách kéo đặc trưng

<b>Âm sắc:</b>
Da diết, réo rắt, hơi nghẹn - phù hợp kể về kiếp người lầm lũi, gian truân trong Xẩm.

<b>Kỹ thuật:</b>
Luyến, láy, vuốt, nhấn, rền... tạo sự "nức nở" đặc trưng.

<b>Vai trò:</b>
- Giữ giai điệu chính, làm nền cho giọng hát
- Dẫn dắt tiết tấu, ra hiệu chuyển đoạn
- Tạo "không khí đường phố" của Xẩm rong

<b>Liên hệ văn hóa:</b>
Ninh Bình là cái nôi hát Xẩm của xứ Bắc, gắn với mù Xẩm Hà Thị Cầu. Nghệ nhân Ninh Bình tự tay làm bát nhị bằng gỗ địa phương.`,
    origin: 'Việt Nam (Ninh Bình liên hệ)',
    hash: '0xA12F9CDE45'
  },

  {
    id: 2,
    title: 'Đàn Gáo (Đàn Hồ)',
    author: 'Ngọc',
    image: 'assets/img/dangao.jpg',
    summary: 'Nhạc cụ phát triển từ đàn nhị, kích thước lớn hơn, tạo âm thanh trầm – ấm – sâu',
    category: 'nhac-cu-chinh',
    description: `<b>Đàn Gáo (Đàn Hồ) – Tiếng nói trầm buồn của Xẩm</b>

Phát triển từ đàn nhị, tạo âm trầm chắc cho Xẩm.

<b>Cấu tạo:</b>
- 2 dây chính, cần dài hơn đàn nhị
- Bầu đàn lớn bằng gáo dừa hoặc gỗ khoét
- Da mặt dày hơn đàn nhị để tạo âm trầm chắc

<b>Âm sắc:</b>
Âm trầm, ấm, đục nhẹ, vang sâu. Thích hợp đệm cho giọng nam trung, nam trầm và nữ trung ("giọng thổ").

<b>Vai trò:</b>
- Tạo lớp âm trầm làm nền cho đàn nhị
- Giúp dàn Xẩm dày và cân bằng hơn
- Xuất hiện nhiều trong Xẩm hội và Xẩm sân khấu phục dựng`,
    origin: 'Việt Nam',
    hash: '0xB34E7D223'
  },

  {
    id: 3,
    title: 'Sênh (Sênh sứa / Sênh tiền)',
    author: 'Ngọc',
    image: 'assets/img/senh.jpg',
    summary: 'Nhạc cụ gõ chủ đạo, tạo nhịp và điểm phách cho bài Xẩm',
    category: 'nhac-cu-chinh',
    description: `<b>Sênh – Tiếng phách của đường phố</b>

Nhạc cụ gõ chủ đạo, nghệ nhân Xẩm gần như luôn cầm sênh khi hát.

<b>Các loại:</b>
- <b>Sênh sứa (cặp kè):</b> Loại cơ bản, hai thanh gỗ kẹp lại, phát ra tiếng cắc – cắc
- <b>Sênh tiền:</b> Gắn cọc tiền kim loại, tạo tiếng lách cách vui tai

<b>Cấu tạo chi tiết:</b>
- Hai thanh gỗ (trên – dưới), gắn tổng cộng 3 cọc tiền
- Tay phải cầm "Con Dao" quẹt vào răng cưa
- Tay trái rập mở hai thanh tạo tiếng phách

<b>Vai trò:</b>
- Quyết định nhịp điệu, giữ "hơi" cho nghệ nhân
- Tạo sự rộn ràng, mộc mạc – đúng tinh thần hát rong`,
    origin: 'Việt Nam',
    hash: '0xC55D11AA'
  },

  {
    id: 4,
    title: 'Trống Mảnh',
    author: 'Ngọc',
    image: 'assets/img/trongmanh.jpg',
    summary: 'Trống một mặt nhỏ, tạo nhịp gõ điểm xuyết cho Xẩm',
    category: 'nhac-cu-chinh',
    description: `<b>Trống Mảnh – Nhịp gõ điểm xuyết</b>

Trống một mặt, tang nhỏ, màng da căng trên mặt trống.

<b>Đặc điểm:</b>
- Đường kính ~10 cm, đáy trống rộng hơn (~15 cm) không bịt da
- Dùi trống bằng gỗ cứng dài ~20 cm

<b>Âm sắc:</b>
Tiếng đục, ngắn, không vang - phù hợp làm tiết tấu điểm.

<b>Vai trò:</b>
- Giữ nhịp, điểm các đoạn chuyển
- Làm nền cho đàn nhị và sênh
- Xuất hiện trong các dàn tiểu nhạc phục vụ Xẩm chợ, Xẩm hội

<b>Liên hệ văn hóa:</b>
Nhiều gánh Xẩm cổ vùng Hoa Lư, Yên Mô, Gia Viễn (Ninh Bình) dùng trống mảnh khi biểu diễn ở đình – đền – chợ – bến đò.`,
    origin: 'Việt Nam (Ninh Bình liên hệ)',
    hash: '0xD22B77F0'
  },

  // Nhóm nhạc cụ phụ / bổ trợ
  {
    id: 10,
    title: 'Đàn đáy',
    author: 'Tổng hợp',
    image: 'assets/img/danday.jpg',
    summary: 'Nhạc cụ dây dài, 3 dây, âm trầm đặc trưng',
    category: 'nhac-cu-phu',
    description: `<b>Đàn đáy</b>

Nhạc cụ dây dài, 3 dây, âm trầm đặc trưng. Thường dùng trong ca trù nhưng đôi khi đưa vào Xẩm để tăng chiều sâu âm thanh.

<b>Ứng dụng:</b>
Kết hợp tốt khi biểu diễn Xẩm phục dựng trên sân khấu lớn.`,
    origin: 'Việt Nam',
    hash: '0xE001AA11'
  },

  {
    id: 11,
    title: 'Trống cơm',
    author: 'Tổng hợp',
    image: 'assets/img/trongcom.jpg',
    summary: 'Trống dài hai mặt, âm sắc mềm',
    category: 'nhac-cu-phu',
    description: `<b>Trống cơm</b>

Trống dài, hai mặt. Âm sắc mềm, "ê a", thường dùng trong chèo – tuồng – ca Huế nhưng có thể lồng trong Xẩm hội.

<b>Ứng dụng:</b>
Tạo sự vui nhộn trong các bài Xẩm có tiết tấu nhanh.`,
    origin: 'Việt Nam',
    hash: '0xE002BB22'
  },

  {
    id: 12,
    title: 'Sáo / Sáo ngang',
    author: 'Tổng hợp',
    image: 'https://nhaccudantoc.com.vn/wp-content/uploads/2022/02/Sao-truc-ngang-dep.jpg',
    summary: 'Tạo âm thanh mềm mại, bay bổng',
    category: 'nhac-cu-phu',
    description: `<b>Sáo – sáo ngang</b>

Tạo âm thanh mềm mại, bay bổng. Dùng để tạo màu nền hoặc đoạn dạo đầu cho Xẩm sân khấu.

<b>Lưu ý:</b>
Không thuộc hệ thống nhạc cụ Xẩm truyền thống nhưng hữu ích khi mở rộng dàn nhạc.`,
    origin: 'Việt Nam',
    hash: '0xE003CC33'
  },

  {
    id: 13,
    title: 'Thanh la',
    author: 'Tổng hợp',
    image: 'assets/img/thanhla.jpg',
    summary: 'Nhạc cụ kim loại, tạo điểm nhấn',
    category: 'nhac-cu-phu',
    description: `<b>Thanh la</b>

Nhạc cụ kim loại, đánh để tạo điểm nhấn. Hay dùng khi Xẩm được biểu diễn dưới dạng dàn nhạc dân tộc mở rộng.`,
    origin: 'Việt Nam',
    hash: '0xE004DD44'
  },

  {
    id: 14,
    title: 'Một số nhạc cụ khác',
    author: 'Tổng hợp',
    image: 'assets/img/others.jpg',
    summary: 'Phách gỗ, mõ, đàn bầu, đàn nguyệt...',
    category: 'nhac-cu-phu',
    description: `<b>Một số nhạc cụ khác</b>

Phách gỗ, mõ, đàn bầu, đàn nguyệt (rất hiếm).

<b>Ứng dụng:</b>
Xuất hiện khi nghệ nhân muốn tạo màu sắc mới hoặc trong biểu diễn giao lưu văn hóa.`,
    origin: 'Việt Nam',
    hash: '0xE005EE55'
  },

  // Nghệ nhân
  {
    id: 20,
    title: 'Mai Tuyết Hoa',
    author: 'Tập hợp',
    image: 'assets/img/maituyethoa.jpg',
    summary: 'Học trò trực tiếp của Hà Thị Cầu, phát hành album Xẩm năm 2019',
    category: 'nghe-nhan',
    description: `<b>Mai Tuyết Hoa - Nghệ nhân</b>

Mai Tuyết Hoa là học trò trực tiếp của Hà Thị Cầu.

<b>Thành tựu:</b>
- Năm 2019, cô và nhóm của mình phát hành album đầu tiên chuyên về Xẩm
- Nỗ lực "thổi lại hơi thở" Xẩm cổ trong đời sống hiện đại

<b>Quan điểm:</b>
Theo cô, Xẩm không chỉ là "hát để sống" như xưa, mà cần được nhìn như di sản văn hóa, nghệ thuật dân gian cần bảo tồn.`,
    origin: 'Việt Nam',
    hash: '0xARTISTMAI001'
  },

  {
    id: 21,
    title: 'Hà Thị Cầu',
    author: 'Tổng hợp',
    image: 'assets/img/hathicau.jpg',
    summary: '"Báu vật nhân văn sống" của Xẩm (1928-2013)',
    category: 'nghe-nhan',
    description: `<b>Hà Thị Cầu — "Báu vật nhân văn sống" của Xẩm</b>

Bà sinh năm 1928 tại huyện Ý Yên, Nam Định, trong gia đình có ba đời theo nghề hát Xẩm.

<b>Thân thế:</b>
- Tên thật: Hà Thị Năm
- Từ nhỏ theo mẹ lang bạt khắp các chợ quê, thị trấn hát rong
- Sau này chuyển về sinh sống tại Ninh Bình

<b>Đóng góp:</b>
- "Người hát Xẩm cuối cùng của thế kỷ XX" ở Việt Nam
- Ghi nhớ hàng trăm bài Xẩm, trở thành kho "tài sản sống"
- Vừa hát vừa chơi nhiều nhạc cụ cùng lúc
- Đóng vai trò truyền dạy cho nhiều thế hệ học trò

<b>Danh hiệu:</b>
- 2004: Nghệ nhân dân gian Việt Nam, Nghệ sĩ Ưu tú
- 2008: Giải thưởng Đào Tấn

<b>Ý nghĩa:</b>
Bà mất ngày 3/3/2013, hưởng thọ 85 tuổi, để lại di sản Xẩm quý báu cho hậu thế.`,
    origin: 'Nam Định / Ninh Bình',
    hash: '0xHATHICAU2013'
  },

  {
    id: 22,
    title: 'Nguyễn Quang Long',
    author: 'Tổng hợp',
    image: 'assets/img/nguyenquanglong.jpg',
    summary: 'Nhạc sĩ và nhà nghiên cứu, "nhà khảo cổ Xẩm"',
    category: 'nghe-nhan',
    description: `<b>Nguyễn Quang Long - Nhạc sĩ & nhà nghiên cứu</b>

Được xem là "nhạc sĩ – nhà nghiên cứu" tích cực trong việc khôi phục và lưu giữ Xẩm.

<b>Biệt danh:</b>
"Nhà khảo cổ Xẩm" vì tìm lại nhiều làn điệu cổ tưởng đã mất.

<b>Hoạt động:</b>
- Kết hợp Xẩm với giai điệu mới
- Sáng tác các bản Xẩm mang hơi hướng đương đại
- Thực hiện các dự án, MV Xẩm
- Tham gia giảng dạy, biểu diễn

<b>Ý nghĩa:</b>
Đóng vai trò quan trọng trong việc "giữ lửa" Xẩm cho tương lai, giúp Xẩm dễ tiếp cận lớp khán giả trẻ hơn.`,
    origin: 'Việt Nam',
    hash: '0xNQLONG0001'
  }
];

// Categories với thông tin tổng quan
const categories = {
  'nhac-cu-chinh': {
    title: 'Nhạc cụ chính trong hát Xẩm',
    description: 'Các nhạc cụ giữ vai trò tạo bản sắc âm thanh, hầu như không thể thiếu trong mọi buổi hát Xẩm',
    items: [1, 2, 3, 4]
  },
  'nhac-cu-phu': {
    title: 'Nhạc cụ phụ/bổ trợ trong hát Xẩm',
    description: 'Các nhạc cụ hỗ trợ, tạo màu sắc âm thanh phong phú cho Xẩm hiện đại',
    items: [10, 11, 12, 13, 14]
  },
  'nghe-nhan': {
    title: 'Nghệ nhân hát Xẩm',
    description: 'Những cá nhân đóng góp quan trọng trong việc bảo tồn và phát triển hát Xẩm',
    items: [20, 21, 22]
  }
};

// Functions để render giao diện
function renderCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;
  
  container.innerHTML = '';
  Object.entries(categories).forEach(([categoryId, categoryInfo]) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'mb-8';
    categoryDiv.innerHTML = `
      <h3 class="text-xl font-semibold text-[#6e2f1a] mb-2">${categoryInfo.title}</h3>
      <p class="text-gray-600 mb-4">${categoryInfo.description}</p>
      <div class="grid gap-3" id="category-${categoryId}">
      </div>
    `;
    container.appendChild(categoryDiv);
    
    // Render items trong category này
    renderCategoryItems(categoryId);
  });
}

function renderCategoryItems(categoryId) {
  const categoryContainer = document.getElementById(`category-${categoryId}`);
  if (!categoryContainer) return;
  
  const categoryItems = categories[categoryId].items;
  categoryItems.forEach(itemId => {
    const item = heritageData.find(i => i.id === itemId);
    if (!item) return;
    
    const itemDiv = document.createElement('div');
    itemDiv.className = 'p-3 bg-white rounded-lg shadow-sm flex justify-between items-center cursor-pointer hover:shadow-md transition-shadow';
    itemDiv.innerHTML = `
      <div class="flex-1">
        <div class="font-semibold text-[#6e2f1a]">${item.title}</div>
        <div class="text-sm text-gray-500 mt-1">${item.summary}</div>
        <div class="text-xs text-gray-400 mt-1">${item.author}</div>
      </div>
      <div class="text-gray-400 ml-3">›</div>
    `;
    itemDiv.onclick = () => showDetail(item.id);
    categoryContainer.appendChild(itemDiv);
  });
}

function showDetail(id) {
  const item = heritageData.find(i => i.id === id);
  const detail = document.getElementById('detail');
  if (!detail) return;
  
  if (!item) {
    detail.innerHTML = '<div class="text-gray-500">Không tìm thấy mục.</div>';
    return;
  }
  
  detail.innerHTML = `
    <div class="flex gap-6">
      <div class="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
        <img src="${item.image}" alt="${item.title}" class="w-48 h-48 object-cover rounded-lg" />
      </div>
      <div class="flex-1">
        <h3 class="text-xl font-semibold text-[#6e2f1a]">${item.title}</h3>
        <div class="text-sm text-gray-600 mb-3">${item.author} — ${item.origin}</div>
        <div class="text-gray-700 whitespace-pre-line">${item.description}</div>
        <div class="mt-4">
          <div class="text-xs text-gray-500">Hash blockchain:</div>
          <div class="font-mono bg-[#fff5df] p-2 rounded-md inline-block mt-1">${item.hash}</div>
        </div>
      </div>
    </div>
  `;
}

// Khởi tạo khi load trang
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
});