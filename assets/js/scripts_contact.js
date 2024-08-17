//Вызывается при нажатии на кнопку submit записаться после заполнения анкеты.
//В качестве переменных выступают данные из анкеты. Данные вводятся пользователем.
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.querySelector('input[name="subject"]:checked').value;
    const classTypes = Array.from(document.querySelectorAll('input[name="class-type"]:checked')).map(el => el.value);
    const classForms = Array.from(document.querySelectorAll('input[name="class-form"]:checked')).map(el => el.value);

    const confirmationMessage = `
        ${name},
        Вы успешно записаны на занятия по направлению: ${subject}
        Тип занятий: ${classTypes.join(', ')}
        Форма занятий: ${classForms.join(', ')}
        Письмо с дальнейшей информацией отправлено на почту: ${email}
    `;

    document.getElementById('confirmation-message').innerText = confirmationMessage;
    document.getElementById('registration-form').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
});
