//Скрипт для того, чтобы одну карточку показывать, а другую скрывать (display).
function showTeacher(teacher) {
    var kirill = document.getElementById('kirill');
    var kate = document.getElementById('kate');

    if (teacher === 'kirill') {
        kirill.style.display = 'flex';
        kate.style.display = 'none';
    } else {
        kirill.style.display = 'none';
        kate.style.display = 'flex';
    }
}