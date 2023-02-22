document.getElementById('btn-rectangle').addEventListener('click', function() {
    
    // Get input field
    const rawWidth = getElementRawValueById('rectangle-width');
    const rawLength = getElementRawValueById('rectangle-length');

    // Validation check
    if(rawWidth == '' || rawLength == '') {
        alert("Please insert your value first!");
    }
    else if (isNaN(rawWidth) || isNaN(rawLength)) {
        alert("Please avoid string value!");
    }
    else if (rawWidth < 0 || rawLength < 0) {
        alert("Negative value not allowed!");
    }
    else {

        // We know rectangle area = (width * lenght)
        const width = getElementFloatValueById('rectangle-width');
        const length = getElementFloatValueById('rectangle-length');
        const calc = width * length;
        const area = calc.toFixed(2);

        const data = '<span class="mr-5">Rectangle</span><span>'+area+'</span><span class="mr-5">cm<sup>2</sup></span><button class="text-xs bg-blue-400 text-white p-2 rounded font-bold">Convert to m<sup>2</sup></button>';
        const outputBox = document.getElementById('output-box');

        const li = document.createElement('li');
        li.innerHTML = data;

        outputBox.appendChild(li);
    }
});