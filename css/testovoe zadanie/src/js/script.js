'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    function formatPhone(input) {
        let value = input.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
        if (value.length > 0) value = '+7 (' + value;
        if (value.length > 6) value = value.slice(0, 6) + ') ' + value.slice(6);
        if (value.length > 11) value = value.slice(0, 11) + '-' + value.slice(11);
        if (value.length > 14) value = value.slice(0, 14) + '-' + value.slice(14);
        input.value = value.slice(0, 18); // Обрезаем до максимальной длины
    }

});