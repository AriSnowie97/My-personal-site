document.addEventListener('DOMContentLoaded', () => {

    /* --- --- --- --- --- --- --- --- --- --- --- */
    /* --- 1. КОД ДЛЯ ПЕРЕМИКАННЯ ТЕМИ --- */
    /* --- --- --- --- --- --- --- --- --- --- --- */
    
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // <html>

    // 1. Функція для застосування теми
    function setTheme(theme) {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }

    // 2. Перевіряємо збережену тему в localStorage під час завантаження
    const savedTheme = localStorage.getItem('theme') || 'light'; // Світла за замовчуванням
    setTheme(savedTheme);

    // 3. Вішаємо обробник на кнопку
    if (themeToggle) { // Перевіряємо, що кнопка є на сторінці
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.hasAttribute('data-theme') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }


    /* --- --- --- --- --- --- --- --- --- --- --- --- */
    /* --- 2. ВАШ СТАРИЙ КОД ДЛЯ КЛАВІАТУРИ --- */
    /* --- (Знаходиться в тому ж 'DOMContentLoaded') --- */
    /* --- --- --- --- --- --- --- --- --- --- --- --- */

    // Функція для пошуку потрібної кнопки в HTML
    function findKeyElement(eventCode) {
        // (Цей код працює тільки на practice4.html, 
        // але не буде викликати помилок на інших сторінках)
        
        // Перевіряємо спеціальні клавіші за їх класами
        switch (eventCode) {
            case 'Tab':         return document.querySelector('.tab');
            case 'Backspace':   return document.querySelector('.backspace');
            case 'CapsLock':    return document.querySelector('.caps');
            case 'Enter':       return document.querySelector('.enter');
            case 'ShiftLeft':   return document.querySelector('.shift-left');
            case 'ShiftRight':  return document.querySelector('.shift-right');
            case 'ControlLeft': return document.querySelectorAll('.ctrl')[0];
            case 'ControlRight':return document.querySelectorAll('.ctrl')[1];
            case 'AltLeft':     return document.querySelectorAll('.alt')[0];
            case 'AltRight':    return document.querySelectorAll('.alt')[1];
            case 'MetaLeft':    return document.querySelectorAll('.win')[0]; // Meta - це Win/Cmd
            case 'MetaRight':   return document.querySelectorAll('.win')[1];
            case 'ContextMenu': return document.querySelector('.menu');
            case 'Space':       return document.querySelector('.space');
            
            // F-клавіші
            case 'Escape':      return document.querySelector('.key:not([class*=" "])'); // Esc
            case 'F1':          return document.querySelector('.f-row .key:nth-of-type(2)');
            case 'F2':          return document.querySelector('.f-row .key:nth-of-type(3)');
			case 'F3':          return document.querySelector('.f-row .key:nth-of-type(4)');
			case 'F4':          return document.querySelector('.f-row .key:nth-of-type(5)');
			case 'F5':          return document.querySelector('.f-row .key:nth-of-type(6)');
			case 'F6':          return document.querySelector('.f-row .key:nth-of-type(7)');
			case 'F7':          return document.querySelector('.f-row .key:nth-of-type(8)');
			case 'F8':          return document.querySelector('.f-row .key:nth-of-type(9)');
			case 'F9':          return document.querySelector('.f-row .key:nth-of-type(10)');
			case 'F10':          return document.querySelector('.f-row .key:nth-of-type(11)');
			case 'F11':          return document.querySelector('.f-row .key:nth-of-type(12)');
			case 'F12':          return document.querySelector('.f-row .key:nth-of-type(13)');
        }

        // Карта для "текстових" клавіш
        const textKeyMap = {
            'Backquote':    '` ~', 'Digit1':       '1 !', 'Digit2':       '2 @',
            'Digit3':       '3 #', 'Digit4':       '4 $', 'Digit5':       '5 %',
            'Digit6':       '6 ^', 'Digit7':       '7 &', 'Digit8':       '8 *',
            'Digit9':       '9 (', 'Digit0':       '0 )', 'Minus':        '- _',
            'Equal':        '= +', 'KeyQ':         'Q', 'KeyW':         'W',
            'KeyE':         'E', 'KeyR':         'R', 'KeyT':         'T',
            'KeyY':         'Y', 'KeyU':         'U', 'KeyI':         'I',
            'KeyO':         'O', 'KeyP':         'P', 'BracketLeft':  '[{',
            'BracketRight': ']}', 'Backslash':    '\\ |', 'KeyA':         'A',
            'KeyS':         'S', 'KeyD':         'D', 'KeyF':         'F',
            'KeyG':         'G', 'KeyH':         'H', 'KeyJ':         'J',
            'KeyK':         'K', 'KeyL':         'L', 'Semicolon':    '; :',
            'Quote':        '\' "', 'KeyZ':         'Z', 'KeyX':         'X',
            'KeyC':         'C', 'KeyV':         'V', 'KeyB':         'B',
            'KeyN':         'N', 'KeyM':         'M', 'Comma':        ', <',
            'Period':       '. >', 'Slash':        '/ ?'
        };

        const targetText = textKeyMap[eventCode];
        if (targetText) {
            const allKeys = document.querySelectorAll('.main-keys .key');
            // Перевіряємо, що allKeys не null
            if(allKeys) {
                return Array.from(allKeys).find(key => key.textContent.trim() === targetText);
            }
        }
        
        return null; // Клавішу не знайдено
    }

    // --- Обробник натискання (keydown) ---
    window.addEventListener('keydown', (e) => {
        const keyElement = findKeyElement(e.code);
        if (keyElement) {
            keyElement.classList.add('pressed');
        }
    });

    // --- Обробник відпускання (keyup) ---
    window.addEventListener('keyup', (e) => {
        const keyElement = findKeyElement(e.code);
        if (keyElement) {
            keyElement.classList.remove('pressed');
        }
    });

}); // --- КІНЕЦЬ 'DOMContentLoaded' ---