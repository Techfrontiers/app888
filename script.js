// JavaScript to fetch random user data
document.getElementById('loadUserBtn').addEventListener('click', loadUserData);

function loadUserData() {
    // เรียก API เพื่อดึงข้อมูลผู้ใช้งาน
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userDataDiv = document.getElementById('userData');
            userDataDiv.innerHTML = `
                <p><strong>ชื่อ:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>อีเมล์:</strong> ${user.email}</p>
                <p><strong>ประเทศ:</strong> ${user.location.country}</p>
                <img src="${user.picture.medium}" alt="User Picture">
            `;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            document.getElementById('userData').innerHTML = 'ไม่สามารถโหลดข้อมูลผู้ใช้งานได้';
        });
}
