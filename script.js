document.addEventListener('DOMContentLoaded', () => {

    // Функция для поиска нужной кнопки в HTML
    // Это самая сложная часть, т.к. кнопки в HTML 
    // идентифицируются по-разному (класс или текст)
    function findKeyElement(eventCode) {
        // Проверяем специальные клавиши по их классам
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
            case 'MetaLeft':    return document.querySelectorAll('.win')[0]; // Meta - это Win/Cmd
            case 'MetaRight':   return document.querySelectorAll('.win')[1];
            case 'ContextMenu': return document.querySelector('.menu');
            case 'Space':       return document.querySelector('.space');
            
            // F-клавиши (для примера)
            case 'Escape':      return document.querySelector('.key:not([class*=" "])'); // Esc - первая .key без других классов
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
            // ... и т.д. для F-клавиш
        }

        // Карта для "текстовых" клавиш
        // (event.code): (Текст на кнопке)
        const textKeyMap = {
            'Backquote':    '` ~',
            'Digit1':       '1 !',
            'Digit2':       '2 @',
            'Digit3':       '3 #',
            'Digit4':       '4 $',
            'Digit5':       '5 %',
            'Digit6':       '6 ^',
            'Digit7':       '7 &',
            'Digit8':       '8 *',
            'Digit9':       '9 (',
            'Digit0':       '0 )',
            'Minus':        '- _',
            'Equal':        '= +',
            'KeyQ':         'Q',
            'KeyW':         'W',
            'KeyE':         'E',
            'KeyR':         'R',
            'KeyT':         'T',
            'KeyY':         'Y',
            'KeyU':         'U',
            'KeyI':         'I',
            'KeyO':         'O',
            'KeyP':         'P',
            'BracketLeft':  '[{',
            'BracketRight': ']}',
            'Backslash':    '\\ |',
            'KeyA':         'A',
            'KeyS':         'S',
            'KeyD':         'D',
            'KeyF':         'F',
            'KeyG':         'G',
            'KeyH':         'H',
            'KeyJ':         'J',
            'KeyK':         'K',
            'KeyL':         'L',
            'Semicolon':    '; :',
            'Quote':        '\' "',
            'KeyZ':         'Z',
            'KeyX':         'X',
            'KeyC':         'C',
            'KeyV':         'V',
            'KeyB':         'B',
            'KeyN':         'N',
            'KeyM':         'M',
            'Comma':        ', <',
            'Period':       '. >',
            'Slash':        '/ ?'
        };

        const targetText = textKeyMap[eventCode];
        if (targetText) {
            // Ищем кнопку по ее текстовому содержимому
            const allKeys = document.querySelectorAll('.main-keys .key');
            // Array.from преобразует NodeList в массив, чтобы мы могли использовать .find()
            return Array.from(allKeys).find(key => key.textContent.trim() === targetText);
        }
        
        return null; // Клавиша не найдена (например, Numpad)
    }

    // --- Обработчик нажатия (keydown) ---
    window.addEventListener('keydown', (e) => {
        // e.preventDefault(); // Раскомментируйте, если не хотите, чтобы клавиши (Tab, F5) выполняли свое действие
        
        const keyElement = findKeyElement(e.code);
        
        if (keyElement) {
            keyElement.classList.add('pressed');
        }
    });

    // --- Обработчик отпускания (keyup) ---
    window.addEventListener('keyup', (e) => {
        const keyElement = findKeyElement(e.code);
        
        if (keyElement) {
            keyElement.classList.remove('pressed');
        }
    });
});