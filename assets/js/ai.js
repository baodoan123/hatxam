// Giao diện client-side để upload audio và gọi API
const analyzeBtn = document.getElementById('analyzeBtn');
const clearBtn = document.getElementById('clearBtn');
const audioInput = document.getElementById('audioInput');
const scoreCard = document.getElementById('scoreCard');
const scoreBody = document.getElementById('scoreBody');


analyzeBtn.addEventListener('click', async () => {
    const file = audioInput.files[0];
    if (!file) { alert('Vui lòng chọn file âm thanh (mp3/wav).'); return; }


    // Demo: bạn sẽ thay bằng API thật
    // const apiURL = 'https://your-ai-api.example.com/analyze';


    // Tạo form-data để gửi file
    // const fd = new FormData(); fd.append('file', file);
    // const res = await fetch(apiURL, { method: 'POST', body: fd });
    // const data = await res.json();
    // --- giả lập phản hồi ---
    const data = {
        overall: Math.floor(Math.random() * 31) + 60,
        rhythm: Math.floor(Math.random() * 31) + 60,
        expression: Math.floor(Math.random() * 31) + 60,
        notes: 'Kết quả demo — thay API để có điểm thật.'
    };


    // Hiển thị kết quả
    scoreBody.innerHTML = `
<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
<div class="p-3 bg-white rounded-lg shadow-sm text-center">
<div class="text-sm text-gray-500">Tổng điểm</div>
<div class="text-2xl font-bold text-[#6e2f1a]">${data.overall}</div>
</div>
<div class="p-3 bg-white rounded-lg shadow-sm text-center">
<div class="text-sm text-gray-500">Nhịp & Giai điệu</div>
<div class="text-xl font-semibold">${data.rhythm}</div>
</div>
<div class="p-3 bg-white rounded-lg shadow-sm text-center">
<div class="text-sm text-gray-500">Biểu cảm</div>
<div class="text-xl font-semibold">${data.expression}</div>
</div>
</div>
<div class="mt-3 text-sm text-gray-700">${data.notes}</div>
`;
    scoreCard.classList.remove('hidden');
});


clearBtn.addEventListener('click', () => {
    audioInput.value = null; scoreCard.classList.add('hidden'); scoreBody.innerHTML = '';
});