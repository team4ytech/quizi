 const questionsLSD = [ 
  {
    id: 1,
    question: "Thực dân Pháp nổ súng tấn công xâm lược Việt Nam vào thời gian nào?",
    options: ["A. 1/9/1857", "B. 9/1/1858", "C. 1/9/1858", "D. 5/6/1862"],
    answer: "C. 1/9/1858"
  },
  {
    id: 2,
    question: "Hiệp ước nào đánh dấu việc thực dân Pháp hoàn thành quá trình xâm lược Việt Nam và nước ta đã trở thành thuộc địa?",
    options: ["A. Hòa ước Nhâm Tuất (5/6/1862)", "B. Hiệp ước Giáp Tuất (15/3/1874)", "C. Hiệp ước Quý Mùi (25/08/1883)", "D. Hiệp ước Pa-tơ-nốt (6/6/1884)"],
    answer: "D. Hiệp ước Pa-tơ-nốt (6/6/1884)"
  },
  {
    id: 3,
    question: "Vào đầu thế kỷ XX, xã hội Việt Nam có sự phân hóa gồm những giai cấp, tầng lớp nào?",
    options: ["A. Địa chủ, nông dân, công nhân, tư sản", "B. Địa chủ, nông dân, công nhân, tư sản, tiểu tư sản", "C. Địa chủ, nông dân, công nhân, sĩ phu, tư sản", "D. Địa chủ phong kiến và nông dân"],
    answer: "B. Địa chủ, nông dân, công nhân, tư sản, tiểu tư sản"
  },
  {
    id: 4,
    question: "Đặc điểm ra đời của giai cấp công nhân Việt Nam như thế nào?",
    options: ["A. Ra đời trước giai cấp tư sản", "B. Phần lớn xuất thân từ nông dân", "C. Chịu sự áp bức và bóc lột nặng nề", "D. Cả A, B và C"],
    answer: "D. Cả A, B và C"
  },
  {
    id: 5,
    question: "Mâu thuẫn gay gắt cần được giải quyết trước hết trong xã hội Việt Nam đầu thế kỷ XX là mâu thuẫn nào?",
    options: ["A. Nông dân vs địa chủ phong kiến", "B. Dân tộc Việt Nam vs đế quốc xâm lược và tay sai", "C. Công nhân và nông dân vs đế quốc và phong kiến", "D. Công nhân vs tư sản"],
    answer: "B. Dân tộc Việt Nam vs đế quốc xâm lược và tay sai"
  },
  {
    id: 6,
    question: "Khi nào phong trào công nhân Việt Nam bước đầu chuyển từ đấu tranh tự phát sang tự giác?",
    options: ["A. Công hội Sài Gòn thành lập năm 1920", "B. Cuộc bãi công Ba Son năm 1925", "C. Ba tổ chức cộng sản ra đời năm 1929", "D. Đảng Cộng sản Việt Nam ra đời năm 1930"],
    answer: "B. Cuộc bãi công Ba Son năm 1925"
  },
  {
    id: 7,
    question: "Tại sao năm 1925, Nguyễn Ái Quốc không thành lập ngay một Đảng Cộng sản mà lại thành lập Hội Việt Nam Cách mạng thanh niên?",
    options: ["A. Điều kiện thành lập Đảng chưa chín muồi", "B. Chủ nghĩa Mác-Lênin chưa được truyền bá sâu rộng", "C. Phong trào yêu nước còn theo khuynh hướng dân chủ tư sản", "D. Phong trào công nhân vẫn tự phát"],
    answer: "A. Điều kiện thành lập Đảng chưa chín muồi"
  },
  {
    id: 8,
    question: "Tác phẩm đầu tiên vạch ra các vấn đề về chiến lược và sách lược của cách mạng Việt Nam là tác phẩm nào?",
    options: ["A. Bản án chế độ thực dân Pháp", "B. Đường Kách mệnh", "C. Kháng chiến nhất định thắng lợi", "D. Vấn đề dân cày"],
    answer: "B. Đường Kách mệnh"
  },
  {
    id: 9,
    question: "Trong tác phẩm Đường Kách mệnh, Nguyễn Ái Quốc khẳng định: 'Đảng muốn vững thì phải có ... làm cốt'. Điền từ còn thiếu?",
    options: ["A. Đường lối", "B. Chủ nghĩa", "C. Tư tưởng", "D. Lý luận"],
    answer: "B. Chủ nghĩa"
  },
  {
    id: 10,
    question: "Hội Việt Nam Cách mạng thanh niên được coi là tổ chức tiền thân của Đảng Cộng sản Việt Nam vì?",
    options: ["A. Chuẩn bị chính trị, tư tưởng, tổ chức cho sự ra đời của Đảng", "B. Làm cho khuynh hướng vô sản thắng thế", "C. Truyền bá Chủ nghĩa Mác-Lênin vào Việt Nam", "D. Thúc đẩy phong trào công nhân từ tự phát sang tự giác"],
    answer: "A. Chuẩn bị chính trị, tư tưởng, tổ chức cho sự ra đời của Đảng"
  },
  {
  id: 11,
  question: "Hội nghị thành lập Đảng đầu năm 1930 được tổ chức vì:",
  options: ["A. Được sự uỷ nhiệm của Quốc tế Cộng sản", "B. Nguyễn Ái Quốc nhận được Chỉ thị của Quốc tế Cộng sản", "C. Yêu cầu thống nhất của cách mạng Việt Nam và sự chủ động của Nguyễn Ái Quốc", "D. Các tổ chức cộng sản trong nước đề nghị"],
  answer: "C. Yêu cầu thống nhất của cách mạng Việt Nam và sự chủ động của Nguyễn Ái Quốc"
},
{
  id: 12,
  question: "Hội nghị thành lập Đảng Cộng sản Việt Nam diễn ra vào thời gian nào?",
  options: ["A. 6/1/1930 – 7/2/1930", "B. 3/2/1930 – 7/2/1930", "C. 6/1/1930 – 3/2/1930", "D. 16/1/1930 – 7/2/1930"],
  answer: "B. 3/2/1930 – 7/2/1930"
},
{
  id: 13,
  question: "Hội nghị thành lập Đảng Cộng sản Việt Nam (1930) đã thông qua các văn kiện nào?",
  options: ["A. Chánh cương vắn tắt", "B. Sách lược vắn tắt", "C. Điều lệ vắn tắt và Chương trình tóm tắt", "D. Cả A, B và C"],
  answer: "D. Cả A, B và C"
},
{
  id: 14,
  question: "Đâu KHÔNG PHẢI là nội dung Hội nghị thành lập Đảng?",
  options: ["A. Các đại biểu đồng ý hợp nhất các tổ chức cộng sản", "B. Ngày 24/2/1930, Đông Dương Cộng sản Liên đoàn gia nhập Đảng", "C. Thông qua các văn kiện do Nguyễn Ái Quốc soạn thảo", "D. Hội nghị định ra kế hoạch thống nhất trong nước"],
  answer: "D. Hội nghị định ra kế hoạch thống nhất trong nước"
},
{
  id: 15,
  question: "Sự kiện Đảng Cộng sản Việt Nam ra đời thể hiện bước phát triển biện chứng từ ... đến ... đến ...?",
  options: ["A. Đảng CSVN / Hội VN cách mạng thanh niên / 3 tổ chức cộng sản", "B. 3 tổ chức cộng sản / Hội VN cách mạng thanh niên / Đảng CSVN", "C. Tân Việt cách mạng đảng / 3 tổ chức cộng sản / Đảng CSVN", "D. Hội VN cách mạng thanh niên / 3 tổ chức cộng sản / Đảng CSVN"],
  answer: "D. Hội VN cách mạng thanh niên / 3 tổ chức cộng sản / Đảng CSVN"
},
{
  id: 16,
  question: "Cương lĩnh chính trị đầu tiên của Đảng đã xác định phương hướng chiến lược của cách mạng Việt Nam là gì?",
  options: ["A. Đánh đổ đế quốc và phong kiến", "B. Tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản", "C. Làm cách mạng tư sản dân quyền có tính chất thổ địa và phản đế", "D. Cả A và B"],
  answer: "D. Cả A và B"
},
{
  id: 17,
  question: "Văn kiện nào của Đảng đặt nhiệm vụ chống đế quốc lên hàng đầu?",
  options: ["A. Cương lĩnh chính trị đầu tiên (1930)", "B. Luận cương chính trị (10-1930)", "C. Thư của Trung ương gửi các cấp (12-1930)", "D. Nghị quyết Đại hội I (3-1935)"],
  answer: "A. Cương lĩnh chính trị đầu tiên (1930)"
},
{
  id: 18,
  question: "Điểm khác nhau giữa Cương lĩnh chính trị đầu tiên và Luận cương chính trị tháng 10/1930 là:",
  options: ["A. Chủ trương tập hợp lực lượng cách mạng", "B. Phương hướng chiến lược của cách mạng", "C. Giai cấp lãnh đạo cách mạng", "D. Quan hệ quốc tế"],
  answer: "C. Giai cấp lãnh đạo cách mạng"
},
{
  id: 19,
  question: "Nhiệm vụ cách mạng được Đảng xác định trong giai đoạn 1936-1939 là gì?",
  options: ["A. Tịch thu ruộng đất của địa chủ chia cho dân cày", "B. Đánh đuổi thực dân Pháp, giành độc lập", "C. Chống phát xít, chống chiến tranh, đòi tự do dân chủ, cơm áo, hòa bình", "D. Cả A, B, C đều đúng"],
  answer: "C. Chống phát xít, chống chiến tranh, đòi tự do dân chủ, cơm áo, hòa bình"
},
{
  id: 20,
  question: "Dưới sự lãnh đạo của Đảng, hình thức tổ chức và đấu tranh của cách mạng Việt Nam trong giai đoạn 1936-1939 là gì?",
  options: ["A. Công khai, hợp pháp", "B. Nửa công khai, nửa hợp pháp", "C. Bí mật, bất hợp pháp", "D. Tất cả các hình thức trên"],
  answer: "A. Công khai, hợp pháp"
},
{
  id: 21,
  question: "Lá cờ đỏ sao vàng lần đầu tiên xuất hiện trong cuộc khởi nghĩa nào?",
  options: ["A. Khởi nghĩa Bắc Sơn (1940)", "B. Khởi nghĩa Nam Kì (1940)", "C. Binh biến Đô Lương (1941)", "D. Khởi nghĩa Ba Tơ (1945)"],
  answer: "B. Khởi nghĩa Nam Kì (1940)"
},
{
  id: 22,
  question: "Chủ trương nào thể hiện rõ nhất sự chuyển hướng chỉ đạo chiến lược cách mạng của Đảng trong những năm 1939 - 1941?",
  options: ["A. Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu", "B. Giải quyết vấn đề dân tộc trong khuôn khổ từng nước Đông Dương", "C. Quyết định xúc tiến ngay công tác khởi nghĩa vũ trang", "D. Phát động cao trào kháng Nhật, cứu nước"],
  answer: "A. Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu"
},
{
  id: 23,
  question: "Việt Minh là tên gọi tắt của mặt trận nào?",
  options: ["A. Mặt trận Liên minh Việt Nam", "B. Mặt trận Liên Việt đồng minh", "C. Mặt trận Việt Nam đồng minh", "D. Mặt trận Việt Nam độc lập đồng minh"],
  answer: "D. Mặt trận Việt Nam độc lập đồng minh"
},
{
  id: 24,
  question: "Việc thành lập Mặt trận Việt Minh (1941) là sự chuẩn bị của Đảng về:",
  options: ["A. Lực lượng chính trị", "B. Lực lượng vũ trang", "C. Nhân sự cho Ban Chấp hành Trung ương mới", "D. Cả A, B, C đều sai"],
  answer: "A. Lực lượng chính trị"
},
{
  id: 25,
  question: "Đội Việt Nam tuyên truyền giải phóng quân được thành lập vào thời gian nào?",
  options: ["A. 22/12/1944", "B. 24/12/1944", "C. 13/8/1945", "D. 16/8/1945"],
  answer: "A. 22/12/1944"
},
{
  id: 26,
  question: "Ai là người được giao nhiệm vụ thành lập Đội Việt Nam tuyên truyền giải phóng quân?",
  options: ["A. Văn Tiến Dũng", "B. Phạm Văn Đồng", "C. Võ Nguyên Giáp", "D. Trường Chinh"],
  answer: "C. Võ Nguyên Giáp"
},
{
  id: 27,
  question: "Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta' ra đời khi nào?",
  options: ["A. 10/3/1944", "B. 12/3/1945", "C. 12/5/1945", "D. 22/12/1946"],
  answer: "B. 12/3/1945"
},
{
  id: 28,
  question: "Khẩu hiệu của cách mạng Việt Nam từ tháng 3/1945 đến tháng 8/1945 là gì?",
  options: ["A. Đánh đuổi Nhật - Pháp", "B. Đánh đuổi phát xít Nhật", "C. Đánh đổ địa chủ, chia ruộng đất cho dân cày", "D. Kháng chiến, kiến quốc"],
  answer: "B. Đánh đuổi phát xít Nhật"
},
{
  id: 29,
  question: "Trong Chỉ thị 'Nhật – Pháp bắn nhau và hành động của chúng ta', Đảng chủ trương phát động cao trào cách mạng gì?",
  options: ["A. Cao trào dân chủ", "B. Cao trào phá kho thóc, giải quyết nạn đói", "C. Cao trào Tổng khởi nghĩa", "D. Cao trào kháng Nhật cứu nước"],
  answer: "D. Cao trào kháng Nhật cứu nước"
},
{
  id: 30,
  question: "Ngày 04/6/1945, Khu giải phóng Việt Bắc được thành lập gồm một phần những tỉnh nào?",
  options: ["A. Cao Bằng, Bắc Cạn, Hà Tây, Tuyên Quang, Thái Nguyên", "B. Cao Bằng, Bắc Cạn, Lạng Sơn, Hà Giang, Tuyên Quang, Thái Nguyên", "C. Hưng Yên, Bắc Cạn, Lạng Sơn, Hà Giang, Tuyên Quang, Thái Nguyên", "D. Cao Bằng, Bắc Cạn, Lạng Sơn, Hà Giang, Tuyên Quang, Yên Bái"],
  answer: "B. Cao Bằng, Bắc Cạn, Lạng Sơn, Hà Giang, Tuyên Quang, Thái Nguyên"
},
{
  id: 31,
  question: "Ngày 13/8/1945, Trung ương Đảng và Tổng bộ Việt Minh đã thông qua quyết định nào?",
  options: ["A. Quyết định khởi nghĩa ở Hà Nội", "B. Phát động cao trào kháng Nhật", "C. Thống nhất lực lượng vũ trang Việt Nam", "D. Phát lệnh Tổng khởi nghĩa trên cả nước"],
  answer: "D. Phát lệnh Tổng khởi nghĩa trên cả nước"
},
{
  id: 32,
  question: "Đảng quyết định phát động Tổng khởi nghĩa giành chính quyền trước khi quân Đồng minh vào Đông Dương vì:",
  options: ["A. Lúc so sánh lực lượng có lợi nhất", "B. Kẻ thù cũ đã ngã gục, kẻ thù mới chưa đến", "C. Quân Đồng Minh có thể dựng chính quyền trái ý dân ta", "D. Tất cả các lý do trên"],
  answer: "D. Tất cả các lý do trên"
},
{
  id: 33,
  question: "Cuộc Tổng khởi nghĩa giành chính quyền của nhân dân Việt Nam diễn ra thời gian nào?",
  options: ["A. 13/8 – 16/8/1945", "B. 13/8 – 19/8/1945", "C. 14/8 – 28/8/1945", "D. 14/8 – 30/8/1945"],
  answer: "B. 13/8 – 19/8/1945"
},
{
  id: 34,
  question: "Phát biểu nào sau đây là ĐÚNG:",
  options: ["A. Giành chính quyền từ tay Pháp trước khi quân Đồng minh vào", "B. Giành chính quyền từ tay Nhật trước khi quân Đồng minh vào", "C. Giành chính quyền từ tay Pháp sau khi quân Đồng minh vào", "D. Giành chính quyền từ tay Nhật sau khi quân Đồng minh vào"],
  answer: "B. Giành chính quyền từ tay Nhật trước khi quân Đồng minh vào"
},
{
  id: 35,
  question: "Một trong những nguyên nhân khách quan quan trọng dẫn tới thắng lợi của Cách mạng tháng Tám (1945) là gì?",
  options: ["A. Sự viện trợ của Liên Xô, Trung Quốc", "B. Sự chuẩn bị của Đảng trong 15 năm", "C. Thắng lợi của phe Đồng minh trong Chiến tranh thế giới thứ 2", "D. Truyền thống yêu nước của dân tộc"],
  answer: "C. Thắng lợi của phe Đồng minh trong Chiến tranh thế giới thứ 2"
},
{
  id: 36,
  question: "Ý nghĩa quốc tế của Cách mạng tháng Tám là gì?",
  options: ["A. Lật đổ ách thống trị thực dân, phong kiến", "B. Cơ sở cho sự ra đời của nhà nước Việt Nam Dân chủ Cộng hòa", "C. Chọc thủng một khâu quan trọng trong hệ thống thuộc địa của chủ nghĩa đế quốc", "D. Cả A, B và C"],
  answer: "D. Cả A, B và C"
},
{
  id: 37,
  question: "Những khó khăn, thách thức đối với Việt Nam sau Cách mạng tháng Tám năm 1945 là:",
  options: ["A. Chính quyền Nhà nước non trẻ", "B. Kinh tế kiệt quệ, nạn đói, thiên tai", "C. Các thế lực thù địch bao vây, chống phá", "D. Tất cả các đáp án trên"],
  answer: "D. Tất cả các đáp án trên"
},
{
  id: 38,
  question: "Đâu là câu nói của Chủ tịch Hồ Chí Minh về hoàn cảnh nước ta sau Cách mạng tháng Tám?",
  options: ["A. Chính quyền ra đời không tiền, không đồng minh, hầu như không vũ khí", "B. Vận mệnh dân tộc như ngàn cân treo sợi tóc", "C. A và B đều đúng", "D. A và B đều sai"],
  answer: "C. A và B đều đúng"
},
{
  id: 39,
  question: "Thực dân Pháp đã nổ súng tấn công Sài Gòn, chính thức xâm lược nước ta lần thứ hai vào ngày nào?",
  options: ["A. 28/8/1945", "B. 2/9/1945", "C. 23/9/1945", "D. 25/11/1945"],
  answer: "C. 23/9/1945"
},
{
  id: 40,
  question: "Chủ trương và sách lược của Đảng trong việc đối phó với các lực lượng đế quốc sau Cách mạng tháng Tám là:",
  options: ["A. Thêm bạn, bớt thù", "B. Hoa-Việt thân thiện", "C. Độc lập chính trị, nhân nhượng kinh tế với Pháp", "D. Tất cả các đáp án trên"],
  answer: "D. Tất cả các đáp án trên"
},
{
  id: 41,
  question: "Trong văn kiện 'Kháng chiến kiến quốc', Đảng xác định kẻ thù chính của nhân dân ta sau Cách mạng tháng Tám là:",
  options: ["A. Phát xít Nhật", "B. Quân đội Tưởng Giới Thạch", "C. Thực dân Pháp", "D. Thực dân Anh"],
  answer: "C. Thực dân Pháp"
},
{
  id: 42,
  question: "Câu 'Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ' được viết trong tác phẩm nào?",
  options: ["A. Chỉ thị 'Toàn dân kháng chiến'", "B. 'Lời kêu gọi toàn quốc kháng chiến' của Hồ Chí Minh", "C. 'Kháng chiến nhất định thắng lợi' của Trường Chinh", "D. 'Lời kêu gọi chống Mỹ' của Hồ Chí Minh"],
  answer: "B. 'Lời kêu gọi toàn quốc kháng chiến' của Hồ Chí Minh"
},
{
  id: 43,
  question: "Cuối tháng 12/1946, Trung ương Đảng và Chủ tịch Hồ Chí Minh phát động cuộc kháng chiến toàn quốc vì:",
  options: ["A. Có sự ủng hộ của nhân dân Pháp", "B. Nhân dân Việt Nam đã có sự chuẩn bị", "C. Chính phủ Việt Nam không muốn hòa với Pháp", "D. Trước lập trường ngoan cố của Pháp, nhân dân chỉ có con đường kháng chiến"],
  answer: "D. Trước lập trường ngoan cố của Pháp, nhân dân chỉ có con đường kháng chiến"
},
{
  id: 44,
  question: "Phương châm kháng chiến chống thực dân Pháp xâm lược được Đảng xác định là gì?",
  options: ["A. Tiến hành chiến tranh du kích", "B. Tiến công kiên quyết và chủ động", "C. Chiến tranh nhân dân, toàn dân, toàn diện, lâu dài, dựa vào sức mình", "D. Dựa vào lực lượng vũ trang 3 thứ quân"],
  answer: "C. Chiến tranh nhân dân, toàn dân, toàn diện, lâu dài, dựa vào sức mình"
},
{
  id: 45,
  question: "Quốc hội đầu tiên của nước Việt Nam Dân chủ Cộng hòa được bầu vào thời gian nào?",
  options: ["A. 04/01/1946", "B. 05/01/1946", "C. 06/01/1946", "D. 07/01/1946"],
  answer: "C. 06/01/1946"
},
{
  id: 46,
  question: "Đảng xác định nhiệm vụ hàng đầu của quân dân ta trong kháng chiến chống Pháp là:",
  options: ["A. Đánh đuổi đế quốc, giành độc lập và thống nhất", "B. Xoá bỏ di tích phong kiến", "C. Phát triển chế độ dân chủ nhân dân", "D. Tiến hành cách mạng xã hội chủ nghĩa"],
  answer: "A. Đánh đuổi đế quốc, giành độc lập và thống nhất"
},
{
  id: 47,
  question: "Đâu được coi là căn cứ địa cách mạng của cả nước trong kháng chiến chống Pháp?",
  options: ["A. Tây Bắc", "B. Việt Bắc", "C. Hà Nội", "D. Điện Biên Phủ"],
  answer: "B. Việt Bắc"
},
{
  id: 48,
  question: "Đại hội II của Đảng đã quyết định đưa Đảng ra hoạt động công khai và lấy tên là:",
  options: ["A. Đảng Cộng sản Việt Nam", "B. Đảng Cộng sản Đông Dương", "C. Đảng Lao động Việt Nam", "D. Đảng Nhân dân lao động Việt Nam"],
  answer: "C. Đảng Lao động Việt Nam"
},
{
  id: 49,
  question: "Tại Đại hội II (1951), Đảng xác định cách mạng Việt Nam trong giai đoạn hiện tại là:",
  options: ["A. Cách mạng giải phóng dân tộc", "B. Cách mạng dân chủ tư sản", "C. Cách mạng dân tộc dân chủ nhân dân", "D. Cách mạng xã hội chủ nghĩa"],
  answer: "C. Cách mạng dân tộc dân chủ nhân dân"
},
{
  id: 50,
  question: "Thắng lợi của quân và dân ta trong chiến dịch nào mở ra thời kỳ đấu tranh mới chống Pháp?",
  options: ["A. Chiến dịch Việt Bắc (1947)", "B. Chiến dịch Biên giới (1950)", "C. Chiến dịch Trung du (1950–1951)", "D. Chiến dịch Điện Biên Phủ (1954)"],
  answer: "B. Chiến dịch Biên giới (1950)"
},
{
  id: 51,
  question: "Chiến dịch lịch sử Điện Biên Phủ kết thúc với thắng lợi thuộc về nhân dân Việt Nam vào ngày nào?",
  options: ["A. 06/05/1954", "B. 07/05/1954", "C. 08/05/1954", "D. 09/05/1954"],
  answer: "B. 07/05/1954"
},
{
  id: 52,
  question: "Hiệp định Giơnevơ về chấm dứt chiến tranh, lập lại hoà bình ở Đông Dương đã quy định:",
  options: ["A. Tôn trọng độc lập, chủ quyền, toàn vẹn lãnh thổ của Việt Nam, Lào, Campuchia", "B. Pháp rút quân khỏi Đông Dương, vĩ tuyến 17 là giới tuyến quân sự tạm thời", "C. Cấm đưa quân đội, vũ khí nước ngoài vào Đông Dương", "D. Tất cả các đáp án trên"],
  answer: "D. Tất cả các đáp án trên"
},
{
  id: 53,
  question: "Đảng lãnh đạo đồng thời hai chiến lược cách mạng ở hai miền đất nước trong giai đoạn nào?",
  options: ["A. 1930 – 1945", "B. 1945 – 1954", "C. 1954 – 1975", "D. 1975 – 1986"],
  answer: "C. 1954 – 1975"
},
{
  id: 54,
  question: "Vĩ tuyến 17, ranh giới phân chia 2 miền Nam - Bắc nước ta sau Hiệp định Giơnevơ nằm ở đâu?",
  options: ["A. Sông Nhật Lệ – Quảng Bình", "B. Sông Gianh – Quảng Bình", "C. Sông Bến Hải – Quảng Trị", "D. Sông Thạch Hãn – Quảng Trị"],
  answer: "C. Sông Bến Hải – Quảng Trị"
},
{
  id: 55,
  question: "Ai đứng đầu chính quyền tay sai đầu tiên mà đế quốc Mỹ dựng lên ở miền Nam?",
  options: ["A. Ngô Đình Diệm", "B. Nguyễn Khánh", "C. Nguyễn Văn Thiệu", "D. Dương Văn Minh"],
  answer: "A. Ngô Đình Diệm"
},
{
  id: 56,
  question: "Nghị quyết đầu tiên của Đảng về đường lối cách mạng miền Nam được thông qua tại?",
  options: ["A. Đại hội II (1951)", "B. Hội nghị Trung ương 13 (12/1957)", "C. Hội nghị Trung ương 15 (01/1959)", "D. Đại hội III (09/1960)"],
  answer: "C. Hội nghị Trung ương 15 (01/1959)"
},
{
  id: 57,
  question: "Nghị quyết Hội nghị Trung ương 15 có ý nghĩa như thế nào?",
  options: ["A. Mở đường cho cách mạng miền Nam tiến lên", "B. Thể hiện bản lĩnh độc lập sáng tạo của Đảng", "C. Dẫn tới thắng lợi phong trào Đồng khởi 1960", "D. Tất cả các đáp án trên"],
  answer: "D. Tất cả các đáp án trên"
},
{
  id: 58,
  question: "Đại hội nào là 'Đại hội xây dựng CNXH ở miền Bắc và đấu tranh hòa bình thống nhất nước nhà'?",
  options: ["A. Đại hội II (1951)", "B. Đại hội III (1960)", "C. Đại hội IV (1976)", "D. Đại hội V (1982)"],
  answer: "B. Đại hội III (1960)"
},
{
  id: 59,
  question: "Thắng lợi nào là bước nhảy vọt chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công?",
  options: ["A. Phong trào Đồng khởi (1960)", "B. Chiến thắng Ấp Bắc (1963)", "C. Chiến thắng Bình Giã (1964)", "D. Chiến thắng Vạn Tường (1965)"],
  answer: "A. Phong trào Đồng khởi (1960)"
},
{
  id: 60,
  question: "Đại hội III của Đảng (9/1960) xác định chiến lược cách mạng nào giữ vai trò quyết định nhất?",
  options: ["A. Cách mạng XHCN ở miền Bắc", "B. Cách mạng dân tộc dân chủ ở miền Nam", "C. Cách mạng dân tộc dân chủ ở miền Bắc", "D. Cách mạng XHCN ở miền Nam"],
  answer: "A. Cách mạng XHCN ở miền Bắc"
},
{
  id: 61,
  question: "Câu nói: 'Miền Nam là máu của máu Việt Nam, là thịt của thịt Việt Nam. Sông có thể cạn, núi có thể mòn song chân lý đó không bao giờ thay đổi' là của ai?",
  options: ["A. Chủ tịch Hồ Chí Minh", "B. Tổng Bí thư Trường Chinh", "C. Tổng Bí thư Lê Duẩn", "D. Thủ tướng Phạm Văn Đồng"],
  answer: "C. Tổng Bí thư Lê Duẩn"
},
{
  id: 62,
  question: "Quân dân miền Nam đã đánh bại chiến lược chiến tranh nào của Mỹ và tay sai giai đoạn 1965 - 1968?",
  options: ["A. Chiến tranh đơn phương", "B. Chiến tranh đặc biệt", "C. Chiến tranh cục bộ", "D. Việt Nam hóa chiến tranh"],
  answer: "C. Chiến tranh cục bộ"
},
{
  id: 63,
  question: "Ý nghĩa quan trọng nhất của chiến thắng 'Điện Biên Phủ trên không' cuối năm 1972 là gì?",
  options: ["A. Thể hiện sức mạnh quân dân miền Bắc", "B. Khẳng định ý chí quyết thắng", "C. Đè bẹp ý chí xâm lược của Mỹ", "D. Buộc Mỹ phải ký Hiệp định Paris"],
  answer: "D. Buộc Mỹ phải ký Hiệp định Paris"
},
{
  id: 64,
  question: "Hội nghị Paris – cuộc đấu trí ngoại giao giữa Việt Nam và Hoa Kỳ kéo dài bao lâu?",
  options: ["A. 5/1968 – 1/1973", "B. 1/1969 – 1/1973", "C. 5/1968 – 4/1975", "D. 1/1969 – 4/1975"],
  answer: "A. 5/1968 – 1/1973"
},
{
  id: 65,
  question: "Phương châm tác chiến mà Bộ Chính trị đề ra trong kế hoạch giải phóng miền Nam năm 1975 là gì?",
  options: ["A. Đánh nhanh, thắng nhanh", "B. Đánh chắc, tiến chắc", "C. Tích cực, chủ động, cơ động, linh hoạt", "D. Thần tốc, táo bạo, bất ngờ, chắc thắng"],
  answer: "D. Thần tốc, táo bạo, bất ngờ, chắc thắng"
},
{
  id: 66,
  question: "Đại thắng mùa Xuân năm 1975 đã mở ra kỷ nguyên gì cho đất nước ta?",
  options: ["A. Kỷ nguyên độc lập, thống nhất, đi lên CNXH", "B. Kỷ nguyên hội nhập quốc tế", "C. Kỷ nguyên phát triển vươn mình", "D. Kỷ nguyên số"],
  answer: "A. Kỷ nguyên độc lập, thống nhất, đi lên CNXH"
},
{
  id: 67,
  question: "Nhiệm vụ bức thiết nhất ngay sau ngày giải phóng hoàn toàn miền Nam 30/4/1975 là gì?",
  options: ["A. Khôi phục kinh tế", "B. Thống nhất đất nước về mặt nhà nước", "C. Cải cách giáo dục", "D. Bảo vệ chủ quyền lãnh thổ"],
  answer: "B. Thống nhất đất nước về mặt nhà nước"
},
{
  id: 68,
  question: "Tại Đại hội IV (12/1976), Đảng Lao động Việt Nam được đổi tên thành:",
  options: ["A. Đảng Cộng sản Đông Dương", "B. Đảng Dân chủ xã hội", "C. Đảng Nhân dân Cách mạng", "D. Đảng Cộng sản Việt Nam"],
  answer: "D. Đảng Cộng sản Việt Nam"
},
{
  id: 69,
  question: "Chủ trương khắc phục khuyết điểm trong quản lý kinh tế, phá bỏ rào cản để 'sản xuất bung ra' được nêu ở Hội nghị nào?",
  options: ["A. Hội nghị lần thứ năm (12/1978)", "B. Hội nghị lần thứ sáu (8/1979)", "C. Hội nghị lần thứ bảy (3/1980)", "D. Hội nghị lần thứ tám (9/1980)"],
  answer: "A. Hội nghị lần thứ năm (12/1978)"
},
{
  id: 70,
  question: "Chỉ thị 100 CT/TW của Ban Bí thư giúp cởi trói cho nông nghiệp được ban hành năm nào?",
  options: ["A. 1980", "B. 1981", "C. 1988", "D. 1989"],
  answer: "B. 1981"
},
{
  id: 71,
  question: "Chỉ thị 100 CT/TW của Ban Bí thư Trung ương Đảng đề ra chủ trương nào?",
  options: ["A. Phát huy quyền sản xuất kinh doanh của xí nghiệp quốc doanh", "B. Mở rộng hình thức trả lương khoán", "C. Khoán sản phẩm đến nhóm và người lao động trong HTX nông nghiệp", "D. Cải tiến công tác phân phối lưu thông"],
  answer: "C. Khoán sản phẩm đến nhóm và người lao động trong HTX nông nghiệp"
},
{
  id: 72,
  question: "Đại hội nào của Đảng đã chủ trương coi nông nghiệp là mặt trận hàng đầu?",
  options: ["A. Đại hội III (1960)", "B. Đại hội IV (1976)", "C. Đại hội V (1982)", "D. B và C đều đúng"],
  answer: "D. B và C đều đúng"
},
{
  id: 73,
  question: "Đại hội Đảng lần thứ V (3/1982) xác định hai nhiệm vụ chiến lược của cách mạng Việt Nam là:",
  options: ["A. Xây dựng CNXH và bảo vệ Tổ quốc XHCN", "B. Đẩy mạnh công nghiệp hóa, hiện đại hóa", "C. Cải thiện đời sống nhân dân", "D. Cả A, B, C đều sai"],
  answer: "A. Xây dựng CNXH và bảo vệ Tổ quốc XHCN"
},
{
  id: 74,
  question: "Vì sao Hội nghị lần thứ tám (6-1985) của BCH Trung ương Đảng khoá V được coi là bước đột phá lần thứ 2 về đổi mới kinh tế?",
  options: ["A. Quyết định xoá bỏ cơ chế tập trung quan liêu bao cấp", "B. Thay đổi cơ cấu thành phần kinh tế", "C. Chủ trương phá bỏ rào cản để sản xuất bung ra", "D. Chủ trương ba chương trình kinh tế lớn"],
  answer: "A. Quyết định xoá bỏ cơ chế tập trung quan liêu bao cấp"
},
{
  id: 75,
  question: "Hội nghị nào được coi như bước quyết định cho sự ra đời đường lối đổi mới của Đảng?",
  options: ["A. Hội nghị lần thứ sáu (8/1979)", "B. Hội nghị lần thứ tám (6/1985)", "C. Hội nghị lần thứ chín (12/1985)", "D. Hội nghị Bộ Chính trị (8/1986)"],
  answer: "B. Hội nghị lần thứ tám (6/1985)"
},
{
  id: 76,
  question: "Chủ trương xây dựng và tổ chức thực hiện ba chương trình kinh tế lớn về lương thực, hàng tiêu dùng, hàng xuất khẩu được Đảng đề ra tại Đại hội nào?",
  options: ["A. Đại hội IV", "B. Đại hội V", "C. Đại hội VI", "D. Đại hội VII"],
  answer: "B. Đại hội V"
},
{
  id: 77,
  question: "Đại hội VI của Đảng (12/1986) rút ra bài học kinh nghiệm quý báu nào?",
  options: ["A. Nắm vững quan điểm bạo lực cách mạng", "B. Xuất phát từ thực tế, tôn trọng quy luật khách quan", "C. Giương cao ngọn cờ độc lập dân tộc và CNXH", "D. Cả A, B và C"],
  answer: "D. Cả A, B và C"
},
{
  id: 78,
  question: "Đại hội VI năm 1986 được khẳng định là Đại hội đổi mới vì đã:",
  options: ["A. Quyết định đưa cả nước quá độ lên CNXH", "B. Quyết tâm đưa đất nước ra khỏi khủng hoảng", "C. Đề ra đường lối đổi mới toàn diện", "D. Hoàn chỉnh đường lối đổi mới toàn diện"],
  answer: "C. Đề ra đường lối đổi mới toàn diện"
},
{
  id: 79,
  question: "Điền từ hợp lý nhất: 'Đại hội VI của Đảng chính là Đại hội .... đường lối đổi mới toàn diện đất nước'?",
  options: ["A. Khởi xướng", "B. Tiếp tục", "C. Phát triển", "D. Kế thừa"],
  answer: "A. Khởi xướng"
},
{
  id: 80,
  question: "Đại hội VI của Đảng (12/1986) ...",
  options: ["A. Đưa cả nước quá độ lên CNXH", "B. Đề ra đường lối đổi mới toàn diện", "C. Hoàn chỉnh đường lối đổi mới", "D. Khẳng định quyết tâm đổi mới"],
  answer: "B. Đề ra đường lối đổi mới toàn diện"
},
{
  id: 81,
  question: "Sau Đại hội VI, Đảng tập trung đổi mới lĩnh vực nào trước tiên?",
  options: ["A. Chính trị", "B. Kinh tế", "C. Văn hóa", "D. Giáo dục"],
  answer: "B. Kinh tế"
},
{
  id: 82,
  question: "Đổi mới kinh tế ở Việt Nam sau 1986 chủ yếu theo hướng nào?",
  options: ["A. Tập trung quan liêu bao cấp", "B. Kinh tế thị trường định hướng XHCN", "C. Kinh tế tư bản chủ nghĩa", "D. Kinh tế tự cung tự cấp"],
  answer: "B. Kinh tế thị trường định hướng XHCN"
},
{
  id: 83,
  question: "Đại hội VII của Đảng (1991) thông qua văn kiện nào quan trọng?",
  options: ["A. Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH", "B. Hiến pháp 1992", "C. Nghị quyết đổi mới giáo dục", "D. Chiến lược phát triển kinh tế"],
  answer: "A. Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH"
},
{
  id: 84,
  question: "Đại hội VIII của Đảng (1996) xác định nhiệm vụ trọng tâm là gì?",
  options: ["A. Công nghiệp hóa, hiện đại hóa đất nước", "B. Đổi mới chính trị", "C. Phát triển văn hóa", "D. Hội nhập quốc tế"],
  answer: "A. Công nghiệp hóa, hiện đại hóa đất nước"
},
{
  id: 85,
  question: "Đại hội IX của Đảng (2001) thông qua Chiến lược phát triển kinh tế - xã hội đến năm nào?",
  options: ["A. 2010", "B. 2020", "C. 2030", "D. 2050"],
  answer: "B. 2020"
},
{
  id: 86,
  question: "Đại hội X của Đảng (2006) nhấn mạnh nhiệm vụ gì?",
  options: ["A. Đẩy mạnh CNH-HĐH gắn với phát triển kinh tế tri thức", "B. Đổi mới chính trị", "C. Phát triển văn hóa", "D. Hội nhập quốc tế"],
  answer: "A. Đẩy mạnh CNH-HĐH gắn với phát triển kinh tế tri thức"
},
{
  id: 87,
  question: "Đại hội XI của Đảng (2011) thông qua Chiến lược phát triển kinh tế - xã hội đến năm nào?",
  options: ["A. 2020", "B. 2030", "C. 2040", "D. 2050"],
  answer: "A. 2020"
},
{
  id: 88,
  question: "Đại hội XII của Đảng (2016) xác định nhiệm vụ trọng tâm là gì?",
  options: ["A. Xây dựng Đảng trong sạch vững mạnh", "B. Đẩy mạnh CNH-HĐH", "C. Phát triển văn hóa", "D. Hội nhập quốc tế"],
  answer: "A. Xây dựng Đảng trong sạch vững mạnh"
},
{
  id: 89,
  question: "Đại hội XIII của Đảng (2021) thông qua Chiến lược phát triển kinh tế - xã hội đến năm nào?",
  options: ["A. 2030", "B. 2045", "C. 2050", "D. 2060"],
  answer: "B. 2045"
},
{
  id: 90,
  question: "Đại hội XIII của Đảng (2021) đặt mục tiêu đến năm 2030 là gì?",
  options: ["A. Việt Nam trở thành nước đang phát triển có công nghiệp hiện đại", "B. Việt Nam trở thành nước phát triển", "C. Việt Nam trở thành nước XHCN hoàn chỉnh", "D. Việt Nam trở thành trung tâm khu vực"],
  answer: "A. Việt Nam trở thành nước đang phát triển có công nghiệp hiện đại"
},
{
  id: 91,
  question: "Đại hội XIII của Đảng (2021) đặt mục tiêu đến năm 2045 là gì?",
  options: ["A. Việt Nam trở thành nước phát triển, thu nhập cao", "B. Việt Nam trở thành nước công nghiệp hiện đại", "C. Việt Nam trở thành trung tâm khu vực", "D. Việt Nam trở thành quốc gia XHCN hoàn chỉnh"],
  answer: "A. Việt Nam trở thành nước phát triển, thu nhập cao"
},
{
  id: 92,
  question: "Đại hội XIII của Đảng (2021) xác định bao nhiêu nhiệm vụ trọng tâm?",
  options: ["A. 2", "B. 3", "C. 4", "D. 5"],
  answer: "C. 4"
},
{
  id: 93,
  question: "Một trong những nhiệm vụ trọng tâm của Đại hội XIII là gì?",
  options: ["A. Xây dựng Đảng trong sạch vững mạnh", "B. Đẩy mạnh CNH-HĐH", "C. Phát triển văn hóa", "D. Hội nhập quốc tế"],
  answer: "A. Xây dựng Đảng trong sạch vững mạnh"
},
{
  id: 94,
  question: "Đại hội XIII của Đảng (2021) thông qua Chiến lược phát triển kinh tế - xã hội giai đoạn nào?",
  options: ["A. 2021–2030", "B. 2021–2045", "C. 2021–2050", "D. 2021–2060"],
  answer: "A. 2021–2030"
},
{
  id: 95,
  question: "Đại hội XIII của Đảng (2021) thông qua Tầm nhìn phát triển đất nước đến năm nào?",
  options: ["A. 2030", "B. 2045", "C. 2050", "D. 2060"],
  answer: "B. 2045"
},
{
  id: 96,
  question: "Đại hội XIII của Đảng (2021) xác định bao nhiêu định hướng phát triển đất nước?",
  options: ["A. 5", "B. 6", "C. 7", "D. 8"],
  answer: "D. 8"
},
{
  id: 97,
  question: "Một trong những định hướng phát triển đất nước tại Đại hội XIII là gì?",
  options: ["A. Phát triển nhanh và bền vững dựa trên khoa học công nghệ", "B. Tăng trưởng kinh tế dựa vào khai thác tài nguyên", "C. Phát triển theo mô hình tự cung tự cấp", "D. Tập trung vào nông nghiệp truyền thống"],
  answer: "A. Phát triển nhanh và bền vững dựa trên khoa học công nghệ"
},
{
  id: 98,
  question: "Đại hội XIII của Đảng (2021) nhấn mạnh yêu cầu gì đối với công tác xây dựng Đảng?",
  options: ["A. Xây dựng Đảng trong sạch vững mạnh toàn diện", "B. Xây dựng Đảng theo mô hình tập trung quan liêu", "C. Xây dựng Đảng theo mô hình tư bản chủ nghĩa", "D. Xây dựng Đảng theo mô hình tự quản"],
  answer: "A. Xây dựng Đảng trong sạch vững mạnh toàn diện"
},
{
  id: 99,
  question: "Đại hội XIII của Đảng (2021) đặt mục tiêu phát triển kinh tế - xã hội đến năm 2025 là gì?",
  options: ["A. Việt Nam trở thành nước đang phát triển có công nghiệp theo hướng hiện đại", "B. Việt Nam trở thành nước phát triển", "C. Việt Nam trở thành trung tâm khu vực", "D. Việt Nam trở thành quốc gia XHCN hoàn chỉnh"],
  answer: "A. Việt Nam trở thành nước đang phát triển có công nghiệp theo hướng hiện đại"
},
{
  id: 100,
  question: "Đại hội XIII của Đảng (2021) đặt mục tiêu đến năm 2030 là gì?",
  options: ["A. Việt Nam trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao", "B. Việt Nam trở thành nước phát triển", "C. Việt Nam trở thành trung tâm khu vực", "D. Việt Nam trở thành quốc gia XHCN hoàn chỉnh"],
  answer: "A. Việt Nam trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao"
}

];

