let display = document.getElementById('display');

function Click(value) {
    if (value === '=') {
       
        display.value = eval(display.value);
    } else if (value === 'AC') {
        
        display.value = '';
    } else {
       
        display.value += value;
    }
}
