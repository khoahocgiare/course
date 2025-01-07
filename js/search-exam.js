//xử lý tìm kiếm kỳ thi
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.custom-form');
    const searchResultsSection = document.getElementById('searchResults');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const keyword = document.getElementById('keyword').value.trim();

        // Perform search (replace with your own logic)
        const searchResults = performSearch(keyword);

        // Display search results
        displaySearchResults(searchResults);
    });
    
    function performSearch(keyword) {
        // Replace this with your actual search logic
        // This is just a placeholder
        const items = [
            { name: 'Lập Trình C 28tech', status: '40.000 Đồng',kind:'Nhận ngay' , img: 'images/28tech/c.png' },
            { name: 'Lập Trình C++ 28tech', status: '40.000 Đồng', kind: 'Nhận ngay', img: 'images/28tech/cpp.png' },
            { name: 'Khóa Học CTDL và GT 28tech', status: '40.000 Đồng', kind: 'Nhận ngay', img: 'images/28tech/dsa.png' },
            { name: 'Lập Trình Python 28tech', status: '40.000 Đồng', kind: 'Nhận ngay', img: 'images/28tech/python.jpg' },
            { name: 'Lập Trình Thi Đấu 28tech', status: '30.000 Đồng', kind: 'Nhận ngay', img: 'images/28tech/lttd.png' },
            { name: 'Lập Trình Frontend 28tech', status: '30.000 Đồng', kind: 'Nhận ngay', img: 'images/28tech/fe.jpg' },
            { name: 'Lập Trình Java SQL 28tech', status: '40.000 Đồng', kind: 'Nhận ngay', img: 'images/28tech/javasql.png' },
            { name: 'Lập Trình Backend NodeJs 28tech', status: '40.000 Đồng', kind: 'Nhận ngay', img: 'images/28tech/nodejs.png' },
            { name: 'Lập Trình Backend Java Spring 28tech', status: '40.000 Đồng', kind: 'Nhận ngay', img: 'images/28tech/bejava.png' },
            { name: 'Khóa Học Nhập môn SQL với MySQL', status: '40.000 Đồng', kind: 'Nhận ngay', img: 'images/udemy/sql.jpg' },
            { name: 'Lập trình Python từ cơ bản đến nâng cao thông qua các dự án học máy', status: '40.000 Đồng', kind: 'Nhận ngay', img: 'images/udemy/python.jpg' },
            { name: 'Viết ứng dụng với Java Springboot/API và Angular', status: '40.000 Đồng', kind: 'Nhận ngay', img: 'images/udemy/javashop.jpg' },
     
            { name: 'Làm chủ hệ điều hành Linux từ cơ bản đến nâng cao', status: '40.000 Đồng', kind: 'Nhận ngay', img: 'images/udemy/linux.jpg' },
            { name: 'Khóa Học Nhập Môn Lập Trình IOS Swift', status: '30.000 Đồng', kind: 'Nhận ngay', img: 'images/udemy/ios.jpg' },
            { name: "Khóa học C/C++ Vũ Nguyễn Coder", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/unica/vunguyencpp.jpg"},
            { name: "Lập Trình Hướng Đối Tượng C++ Vũ Nguyễn Coder", "status": "35.000 Đồng", "kind": "Nhận ngay", "img": "images/unica/vunguyenoop.jpg"},
            { name: "Khóa học C# Từ Cơ Bản Tới Nâng Cao", "status": "35.000 Đồng", "kind": "Nhận ngay", "img": "images/unica/cs.jpg"},
            { name: "Khóa học ASP.NET Core MVC", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/unica/aspdotnet.jpeg"},
            { name: "Khóa học lập trình cơ sở dữ liệu với Java", "status": "35.000 Đồng", "kind": "Nhận ngay", "img": "images/unica/java.png"},
            { name: "Khóa Học Lập trình Backend cho website bằng PHP/Mysql MVC", "status": "30.000 Đồng", "kind": "Nhận ngay", "img": "images/unica/php.jpg"},
            { name: "Khóa Học Docker Cơ Bản", "status": "30.000 Đồng", "kind": "Nhận ngay", "img": "images/unica/docker.jpg"},
            { name: "Khóa học Figma từ căn bản đến nâng cao", "status": "30.000 Đồng", "kind": "Nhận ngay", "img": "images/unica/figma.jpg"},
            { name: "Lập Trình Python Từ Cơ Bản Tới Nâng Cao", "status": "30.000 Đồng", "kind": "Nhận ngay", "img": "images/unica/python.jpg"},
            { name: "Khóa học lập trình Backend NodeJS", "status": "30.000 Đồng", "kind": "Nhận ngay", "img": "images/unica/nodejs.jpg"},
            { name: "Khóa học Lập trình Backend Java Chuyên Sâu (Cybersoft)", status: "40.000 Đồng", kind: "Nhận ngay", img: "images/cybersoft/bejava.png" },
            { name: "Combo 8 khóa: Backend - NodeJS Foundation - Viết API cho dự án thực tế (Cybersoft)", status: "40.000 Đồng", kind: "Nhận ngay", img: "images/cybersoft/nodejs.jpg" },
            { name: "Combo 6 khóa: Lập trình Front End VueJS (Cybersoft)", status: "40.000 Đồng", kind: "Nhận ngay", img: "images/cybersoft/vue.jpg" },
            { name: "Combo 10 khóa lập trình Front End Foundation Cybersoft", status: "40.000 Đồng", kind: "Nhận ngay", img: "images/cybersoft/frontend.png" },
            { name: "Combo 5 Khóa Lập Trình FrontEnd Master ReactJS (Cybersoft)", status: "40.000 Đồng", kind: "Nhận ngay", img: "images/cybersoft/react.jpg" },
            { name: "Lập Trình Hướng Đối Tượng Với Ngôn Ngữ Java (OOP Java)", status: "40.000 Đồng", kind: "Nhận ngay", img: "images/cybersoft/oop.jpg" },
            { name: "AI - Trí tuệ nhân tạo (Dũng Lại Lập Trình)", status: "40.000 Đồng", kind: "Nhận ngay", img: "images/dllt/ai.jpg" },
            { name: "Khóa học python từ cơ bản tới nâng cao (Dũng Lại Lập Trình)", status: "40.000 Đồng", kind: "Nhận ngay", img: "images/dllt/python.jpg" },
            { name: "Khóa Logic Math - Tư Duy Toán Cơ Bản (Dũng Lại Lập Trình)", status: "40.000 Đồng", kind: "Nhận ngay", img: "images/dllt/logicmath.jpeg" },
            { name: "Khóa học lập trình web cơ bản (Dũng Lại Lập Trình)", status: "40.000 Đồng", kind: "Nhận ngay", img: "images/dllt/web.png" },
            { name: "Khóa học Làm Game với Python (Dũng Lại Lập Trình)", status: "40.000 Đồng", kind: "Nhận ngay", img: "images/dllt/game.jpg" },
            { name: "Data Science cơ bản (Python) (Dũng Lại Lập Trình)", status: "Tặng kèm", kind: "Nhận ngay", img: "images/dllt/data.jpg" },
            { name: "Luyện Thi TOEIC Cô Vũ Mai Phương (Nghe - Đọc) cấp tốc mục tiêu 550-700+", status: "40.000 Đồng", kind: "Nhận ngay", img: "images/toeic/toeiccomp.png" },
            { name: "Luyện đề Toeic New Format NgoaiNgu24h", status: "25.000 Đồng", kind: "Nhận ngay", img: "images/toeic/luyende.jpg" },
            { name: "Ngữ Pháp Trọn Đời Toeic NgoaiNgu24h", status: "25.000 Đồng", kind: "Nhận ngay", img: "images/toeic/nguphap.png" },
            { name: "Xóa Mù Toeic Cô Mai Phương", status: "25.000 Đồng", kind: "Nhận ngay", img: "images/toeic/xoamu.png" },
            { name: "Toeic Writing + Speaking Cô Mai Phương", status: "Tặng kèm", kind: "Nhận ngay", img: "images/toeic/toeiccomp.png" },
            { name: "Toeic Prep nền tảng 0-300+", status: "30.000 Đồng", kind: "Nhận ngay", img: "images/toeic/prep300.jpg" },
            { name: "Toeic Prep trung cấp 300-600+", status: "30.000 Đồng", kind: "Nhận ngay", img: "images/toeic/prep600.jpg" },
            { name: "Toeic Prep nâng cao 600-800+", status: "30.000 Đồng", kind: "Nhận ngay", img: "images/toeic/prep800.jpg" },
            { name: "Combo Khóa Học Tiếng Nhật N5-N1", "status": "99.000 Đồng", "kind": "Nhận ngay", "img": "images/combo/dungmori.jpg" },
            { name: "Khóa Học Tiếng Nhật N5", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/toeic/N5.jpeg" },
            { name: "Khóa Học Tiếng Nhật N4", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/toeic/N4.jpeg" },
            { name: "Khóa Học Tiếng Nhật N3", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/toeic/N3.jpeg" },
            { name: "Khóa Học Tiếng Nhật N2", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/toeic/N2.jpeg" },
            { name: "Khóa Học Tiếng Nhật N1", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/toeic/N1.jpeg" },
            { name: "Combo 28tech", "status": "119.000 Đồng", "kind": "Nhận ngay", "img": "images/combo/28tech.jpg" },
            { name: "Combo Udemy", "status": "99.000 Đồng", "kind": "Nhận ngay", "img": "images/combo/udemy.png" },
            { name: "Combo Toeic Cô Mai Phương", "status": "50.000 Đồng", "kind": "Nhận ngay", "img": "images/combo/toeic.jpg" },
            { name: "Combo Toeic Prep", "status": "50.000 Đồng", "kind": "Nhận ngay", "img": "images/combo/prep.png" },
            { name: "Combo Cybersoft", "status": "99.000 Đồng", "kind": "Nhận ngay", "img": "images/combo/cybersoft.jpg" },
            { name: "Combo Hỏi Dân IT", "status": "119.000 Đồng", "kind": "Nhận ngay", "img": "images/combo/hoidanit.jpg" },
            { name: "Combo Dũng Lại Lập Trình", "status": "99.000 Đồng", "kind": "Nhận ngay", "img": "images/combo/dllt.jpg" },
            { name: "Java Spring RESTful APIs - Xây Dựng Backend với Spring Boot Hỏi Dân IT", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/hoidanit/springapi.jpg" },
            { name: "Java Spring MVC Ultimate for Beginners - Hỏi Dân IT", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/hoidanit/springmvc.jpg" },
            { name: "Ultimate Guide To Deploy ReactNode.JS - Hỏi Dân IT", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/hoidanit/deploy.png" },
            { name: "React.js Thực Chiến - Luyện Tập Bài Test Fresher React - Hỏi Dân IT", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/hoidanit/react_thucchien.jpg" },
            { name: "React Ultimate - React.JS Cơ Bản Từ Z Đến A Cho Beginners - Hỏi Dân IT", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/hoidanit/reactultimate.jpg" },
            { name: "React State Manager - Redux Toolkit, React Query, Redux Saga - Hỏi Dân IT", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/hoidanit/reactstate.jpg" },
            { name: "React Pro TypeScript - Thực Hành Dự Án Portfolio", "status - Hỏi Dân IT": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/hoidanit/reactpro.jpg" },
            { name: "React Pro Max với Next.JS - Làm Chủ React.JS Hiện Đại - Hỏi Dân IT", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/hoidanit/nextjspromax.jpg" },
            { name: "Backend RESTFul Server với Node.JS và Express (SQL/MongoDB) - Hỏi Dân IT", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/hoidanit/benodejs.jpg" },
            { name: "Hỏi Dân IT – React Native Ultimate: Phát Triển Ứng Dụng Mobile - Hỏi Dân IT", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/hoidanit/reactnativemobile.jpg" },
            { name: "Kỹ Thuật Debugs Với Lập Trình FullStack Website - Hỏi Dân IT", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/hoidanit/debug.jpg" },
            { name: "Nest.JS Zero - Xây Dựng Backend Node.JS Chuyên Nghiệp - Hỏi Dân IT", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/hoidanit/nestJs_Zero.jpg" },
            { name: "Combo Khóa học Data Analyst Bootcamp 200Lab", "status": "40.000 Đồng", "kind": "Nhận ngay", "img": "images/200lab/200lab.png" }
            

            


              
              
          
          
            
            
            // Add more items as needed
        ];

        // Filter items based on the keyword
        return items.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
    }
    //ấn vào outside item để ẩn item vừa tìm được
    document.addEventListener('click', function (event) {
        const isClickInsideSearchResults = searchResultsSection.contains(event.target);
        if (!isClickInsideSearchResults) {
            searchResultsSection.style.display = 'none';
        }
    });

    function displaySearchResults(results) {
        // Clear previous search results
        searchResultsSection.innerHTML = '';

        // Display new search results
        if (results.length > 0) {
            results.forEach(result => {
                const itemHtml = `
                <div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0"  style=" margin-top:30px;">
                <div class="custom-block bg-white shadow-lg">
                    <a href="#">
                        <div class="d-flex">
                            <div>
                                <h5 class="mb-2">${result.name}</h5>

                                <p class="mb-0"> <a href= "https://www.facebook.com/profile.php?id=100087824427150"  class="btn custom-btn mt-2 mt-lg-3">${result.kind}</a></p>
                            </div>
                           
                            <span class="badge bg-design rounded-pill ms-auto" style="width:100px; background-color:${result.status === '40.000 Đồng' ? 'green' : 'green'};">${result.status}</span>
                        </div>

                        <img src="${result.img}" class="custom-block-image img-fluid" alt="">
                    </a>
                </div>
            </div>
                
                `;
                searchResultsSection.innerHTML += itemHtml;
            });

            // Show the search results section
            searchResultsSection.style.display = 'flex';
        } else {
            // Hide the search results section if no results
            searchResultsSection.style.display = 'none';
        }
    }
});
