const calculationButton = document.querySelectorAll('.calculation-button');

const equalButton = document.querySelector('.js-equal');
const viewBox = document.getElementById('js-view');
const resetButton = document.querySelector('.js-reset');
const deleteButton = document.querySelector('.js-del');

let calculationData = '';

calculationButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.innerText === '.') {
            const displayValue = viewBox.innerText;
            // const numValue = /[1-9]/;
            const operatorValue = '-=+*/';

            if (displayValue[(displayValue.length - 1)] === '0') {
                calculationData += ' 0' + button.innerText;

            } else if (operatorValue.includes(calculationData[calculationData.length - 1])) {
                calculationData += ' 0' + button.innerText;
            } else if (calculationData[calculationData.length - 1] !== '.' && calculationData[calculationData.length - 2] !== '.') {
                calculationData += button.innerText;
            }

        }   else if (Number(button.innerText) || button.innerText === '0') {
                const operatorValue = '-=+*/';

                if (operatorValue.includes(calculationData[calculationData.length - 1])) {
                    calculationData += ' ' + Number(button.innerText);
                } else {

                    if (button.innerText !== '0') {
                        calculationData += Number(button.innerText);
                    } else if (viewBox.innerText !== '0') {
                        calculationData += Number(button.innerText);
                    }
                }
        }   else {
                calculationData = String(calculationData);

                if (calculationData.includes('+') || calculationData.includes('-') || calculationData.includes('/') || calculationData.includes('*')) {
                    return;
                } else {
                    const {symbol} = button.dataset;


                    if (calculationData.length === 0) {
                        return;
                    } else {
                        calculationData = calculationData + ' ' + symbol;
                    }
                }
        }

        if (calculationData) {
            viewBox.innerText = calculationData;
        }
    });
});

equalButton.addEventListener('click', () => {
    try {
        if (calculationData) {
            const result = eval(calculationData);
    
            viewBox.innerText = result;
            calculationData = result;
        }
    } catch (error) {
        viewBox.innerText = 'error';
        calculationData = '';
    }
}); 

resetButton.addEventListener('click', () => {
    calculationData = '';
    viewBox.innerText = '0';
});

deleteButton.addEventListener('click', () => {

    if (viewBox.innerText) {
        if (viewBox.innerText === 'error') {
            viewBox.innerText = '0';
        } else {
            const value = viewBox.innerText;
            
            viewBox.innerText = value.slice(0, value.length - 1);
    
            calculationData = viewBox.innerText;
    
            if (viewBox.innerText.length === 0) {
                viewBox.innerText = '0';
                calculationData = '';
            }
        }
    }

});

const userName = 'uwem';

const middleName = userName.slice(1, userName.length - 1);

const modifiedName = userName.replace(middleName, '***');

console.log(modifiedName);

'secondtheme', 'thirdtheme'

const documentElement = document.documentElement;
const modeElement = document.querySelectorAll('.mode');

modeElement.forEach((mode) => {
    mode.addEventListener('click', () => {
        const {theme} = mode.dataset;

        if (theme === 'first') {
            documentElement.setAttribute('theme', '');
        } else if (theme === 'second') {
            documentElement.setAttribute('theme', 'second');
        } else {
            documentElement.setAttribute('theme', 'third');
        }

    });
});