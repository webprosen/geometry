document.getElementById('btn-triangle').addEventListener('click', function() {
    
    // Get input field
    const rawBase = getElementRawValueById('triangle-base');
    const rawHeight = getElementRawValueById('triangle-height');

    // Validation check
    if(rawBase == '' || rawHeight == '') {
        alert("Please insert your value first!");
    }
    else if (isNaN(rawBase) || isNaN(rawHeight)) {
        alert("Please avoid string value!");
    }
    else if (rawBase < 0 || rawHeight < 0) {
        alert("Negative value not allowed!");
    }
    else {
        // We know trinagle area = (0.5 * base * height)
        const base = getElementFloatValueById('triangle-base');
        const height = getElementFloatValueById('triangle-height');
        const calc = 0.5 * base * height;
        const area = calc.toFixed(2);

        const data = '<span class="mr-5">Triangle</span><span>'+area+'</span><span class="mr-5">cm<sup>2</sup></span><button class="text-xs bg-blue-400 text-white p-2 rounded font-bold">Convert to m<sup>2</sup></button>';
        const outputBox = document.getElementById('output-box');

        const li = document.createElement('li');
        li.innerHTML = data;

        outputBox.appendChild(li);
        
    }
});