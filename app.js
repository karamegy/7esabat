// تفعيل التبديل بين الشاشات
function switchTab(tabId, element) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active-tab');
    });
    document.getElementById(tabId).classList.add('active-tab');

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
}

// تعبئة جدول المنتجات ديناميكياً
const products = [
    {name: 'اسم المنتج', qty: '43,041', sales: '4,813,320'},
    {name: 'اسم المنتج', qty: '27,523', sales: '2,984,497'},
    {name: 'اسم المنتج', qty: '22,539', sales: '1,484,192'},
    {name: 'اسم المنتج', qty: '9,098', sales: '743,647'},
    {name: 'اسم المنتج', qty: '3,678', sales: '469,413'},
    {name: 'اسم المنتج', qty: '2,502', sales: '397,230'},
    {name: 'اسم المنتج', qty: '2,414', sales: '223,163'},
    {name: 'اسم المنتج', qty: '2,207', sales: '218,502'},
    {name: 'اسم المنتج', qty: '1,740', sales: '183,496'},
    {name: 'اسم المنتج', qty: '77,334', sales: '175,687'},
    {name: 'اسم المنتج', qty: '1,276', sales: '148,560'},
    {name: 'اسم المنتج', qty: '2,437', sales: '143,833'},
    {name: 'اسم المنتج', qty: '1,353', sales: '139,884'}
];

const tbody = document.getElementById('productTableBody');
if (tbody) {
    products.forEach(p => {
        let row = `<tr><td>${p.name}</td><td>${p.qty}</td><td>${p.sales}</td></tr>`;
        tbody.innerHTML += row;
    });
}

// إعداد الرسوم البيانية باستخدام Chart.js
window.onload = function() {
    // رسم T. Sales by Payment
    const ctxPayment = document.getElementById('paymentSalesChart');
    if (ctxPayment) {
        new Chart(ctxPayment.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Ninja', 'Mada', 'Hunger', 'KeeTa', 'The chefz', 'Jahez'],
                datasets: [{
                    label: 'المبيعات حسب المنصة',
                    data: [12000, 25000, 42000, 65000, 85000, 110000],
                    backgroundColor: '#216f64',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });
    }

    // رسم Peak Sales Hours
    const ctxPeak = document.getElementById('peakHoursChart');
    if (ctxPeak) {
        new Chart(ctxPeak.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['13', '14', '15', '16', '17', '18', '19', '20'],
                datasets: [{
                    data: [12, 19, 15, 17, 22, 28, 24, 30],
                    backgroundColor: '#1e6091'
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
    }

    // رسم Top 2 Hours
    const ctxTop = document.getElementById('topHoursChart');
    if (ctxTop) {
        new Chart(ctxTop.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['17', '18'],
                datasets: [{
                    data: [28, 30],
                    backgroundColor: '#1e6091'
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
    }

    // رسم الطلبات الشهرية (Line)
    const ctxLine = document.getElementById('monthlyLineChart');
    if (ctxLine) {
        new Chart(ctxLine.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [30, 28, 35, 25, 32, 33, 34, 26, 28, 15, 15, 15],
                    borderColor: '#1e6091',
                    backgroundColor: 'rgba(30,96,145,0.2)',
                    fill: true,
                    tension: 0.3
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
    }

    // رسم الطلبات الشهرية (Bar)
    const ctxBar = document.getElementById('monthlyBarChart');
    if (ctxBar) {
        new Chart(ctxBar.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    data: [30, 28, 35, 25, 32, 33, 34, 26, 28, 15, 15, 15],
                    backgroundColor: '#216f64'
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
    }
};
