document.addEventListener('DOMContentLoaded', function() {
    let submitBtn = document.getElementById('submitBtn');
    let message = document.getElementById('message');
    let timer = document.getElementById('time');
    let score = 0;
    let totalTime = 60; // 1 minutes in seconds
    let timeLeft = totalTime;
    let timerInterval;

    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let remainderSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainderSeconds.toString().padStart(2, '0')}`;
    }

    function updateTimer() {
        timer.textContent = formatTime(timeLeft);
        if (timeLeft === 0) {
            

            let userAnswers = getUserAnswers();
            clearInterval(timerInterval);
            
            alert('Hết giờ, Bài đã được nộp!');
            submitBtn.disabled = true;
        
            // Tính điểm số
            let score = calculateScore(userAnswers);
            console.log(userAnswers);
        
            // Lưu kết quả và chuyển hướng sang trang result
            redirectToResultPage(score, userAnswers);
        }
        timeLeft--;
    }

    timerInterval = setInterval(updateTimer, 1000);

    let correctAnswers = ["Mô hình dữ liệu quan hệ", "Tất cả câu trên", "Bảng", "Tất cả đáp án trên", "Phần mềm dùng để tạo lập, cập nhật và khai thác CSDL quan hệ", "Miền của các thuộc tính khác nhau không nhất thiết phải khác nhau", "Quan hệ không có thuộc tính đa trị hay phức tạp", "Nên chọn khoá chính là khóa có ít thuộc tính nhất", "Trường SOBH là duy nhất, trong khi đó trường HOTEN không phải là duy nhất", "HoaDon"];
    let userAnswers = []; // Mảng lưu trữ các đáp án mà người dùng chọn

    let questionTitles = [
        "Mô hình phổ biến để xây dựng CSDL quan hệ là ?",
        "Các khái niệm dùng để mô tả các yếu tố nào sẽ tạo thành mô hình dữ liệu quan hệ?",
        "Trong mô hình quan hệ, về mặt cấu trúc thì dữ liệu được thể hiện trong các:",
        "Thao tác trên dữ liệu có thể là",
        "Phát biểu nào về hệ QTCSDL là đúng?",
        "Phát biểu nào sau đây là sai khi nói về miền?",
        "Đặc điểm nào sau đây không là đặc trưng của một quan hệ trong hệ CSDL quan hệ?",
        "Phát biểu nào sau đây là sai khi nói về khoá chính?",
        "Giả sử một bảng có 2 trường SOBH (số bảo hiểm) và HOTEN (họ tên) thì nên chọn trường SOBH làm khóa chính hơn vì",
        "Cho các bảng sau : DanhMuc Sach(MaSach, TenSach, MaLoai), LoaiSach(MaLoai, LoaiSach), HoaDon(MaSach, SoLuong, DonGia). Để biết giá của một quyển sách thì cần những bảng nào"
    ];
    let questionLabels = [
        ["Mô hình phân cấp", "Mô hình dữ liệu quan hệ", "Mô hình hướng đối tượng", "Mô hình cơ sở quan hệ"],
        ["Cấu trúc dữ liệu", "Các ràng buộc dữ liệu", "Các thao tác, phép toán dữ liệu", "Tất cả câu trên"],
        ["Cột", "Hàng", "Bảng", "Báo cáo"],
        ["Sửa bản ghi", "Thêm bản ghi", "Xoá bản ghi", "Tất cả đáp án trên"],
        ["Phần mềm dùng để xây dựng các CSDL quan hệ", "Phần mềm dùng để tạo lập, cập nhật và khai thác CSDL quan hệ", "Phần mềm Microsoft Access", "Phần mềm dùng để giải các bài toán quản lý có chứa các quan hệ giữa các dữ liệu"],
        ["Các miền của các thuộc tính khác nhau không nhất thiết phải khác nhau", "Mỗi thuộc tính có thể có hai miền trở lên", "Hai thuộc tính khác nhau có thể cùng miền", "Miền của thuộc tính họ tên thường là kiểu text"],
        ["Các bộ phân biệt và thứ tự các bộ không quan trọng", "Quan hệ không có thuộc tính đa trị hay phức tạp", "Mỗi thuộc tính có một tên phân biệt và thứ tự các thuộc tính là quan trọng", "Tên của các quan hệ có thể trùng nhau"],
        ["Một bảng có thể có nhiều khoá chính", "Mỗi bảng có ít nhất một khoá", "Xác định khoá phụ thuộc vào quan hệ logic của các dữ liệu chứ không phụ thuộc vào giá trị các dữ liệu", "Nên chọn khoá chính là khóa có ít thuộc tính nhất"],
        ["Trường SOBH là duy nhất, trong khi đó trường HOTEN không phải là duy nhất", "Trường SOBH là kiểu số, trong khi đó trường HOTEN không phải là kiểu số", "Trường SOBH đứng trước trường HOTEN", "Trường SOBH là trường ngắn hơn"],
        ["HoaDon", "DanhMucSach, HoaDon", "DanhMucSach, LoaiSach", "HoaDon, LoaiSach"]
    ];

    let questionContainer = document.getElementById('questionContainer'); // Lấy phần tử chứa câu hỏi từ DOM

    // Kiểm tra xem phần tử có tồn tại không
    if (questionContainer) {
        // Duyệt qua mảng questionTitles để tạo các phần tử câu hỏi
        questionTitles.forEach((title, index) => {
            // Tạo phần tử câu hỏi và gán nội dung từ mảng questionTitles
            let questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `<h3>Câu ${index + 1}: ${title}</h3>`;

            // Duyệt qua mảng questionLabels để tạo các phần tử đáp án cho câu hỏi
            let labelContainer = document.createElement('div');
            questionLabels[index].forEach((label, labelIndex) => {
                let labelElement = document.createElement('label');
                let inputElement = document.createElement('input');
                inputElement.setAttribute('type', 'radio');
                inputElement.setAttribute('name', `answer-${index}`);
                inputElement.setAttribute('value', label);
                labelElement.appendChild(inputElement);
                labelElement.appendChild(document.createTextNode(label));
                labelContainer.appendChild(labelElement);
            });

            questionElement.appendChild(labelContainer); // Thêm các phần tử đáp án vào câu hỏi

            questionContainer.appendChild(questionElement); // Thêm câu hỏi vào container
        });
    }
    
    function getUserAnswers() {
        let userAnswers = []; // Khởi tạo một mảng để lưu trữ các câu trả lời từ người dùng
    
        // Lặp qua tất cả các phần tử input có type là radio để kiểm tra xem người dùng đã chọn câu trả lời nào
        let inputElements = document.querySelectorAll('input[type="radio"]');
        let currentQuestionAnswers = [];
        let cnt = null;
        inputElements.forEach((input, index) => {
        if(input.checked) cnt = input.value;
        // Nếu đã kiểm tra xong 4 câu trả lời cho một câu hỏi, thêm vào mảng và reset
        if ((index + 1) % 4 === 0) {
            userAnswers.push(cnt);
            currentQuestionAnswers = [];
            cnt = null;
        }
    });
      
        return userAnswers; // Trả về mảng userAnswers với các câu trả lời từ người dùng
    }


    submitBtn.addEventListener('click', function() {
        // Lấy thông tin câu trả lời của người dùng
        let userAnswers = getUserAnswers();
        clearInterval(timerInterval);
        
        alert('Bài đã được nộp!');
        submitBtn.disabled = true;
    
        // Tính điểm số
        let score = calculateScore(userAnswers);
        console.log(userAnswers);
    
        // Lưu kết quả và chuyển hướng sang trang result
        redirectToResultPage(score, userAnswers);
    });

    function calculateScore(userAnswers) {
        let score = 0;
        for (let i = 0; i < correctAnswers.length; i++) {
            if (userAnswers[i] === correctAnswers[i]) {
                score++;
            }
        }
       
        return score;
    }

    function redirectToResultPage(score, userAnswers) {
        localStorage.setItem('score', score);
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        window.location.href = 'result.html';
    }
});
