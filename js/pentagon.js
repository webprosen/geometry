document.getElementById('btn-pentagon').addEventListener('click', function() {
    // Given p = 6cm, b = 10cm
    const p = 6;
    const b = 10;
    const calc = 0.5 * p * b;
    const area = calc.toFixed(2);

    // Make html for outpux box
    const data = '<span class="mr-5">Pentagon</span><span>'+area+'</span><span class="mr-5">cm<sup>2</sup></span><button class="text-xs bg-blue-400 text-white p-2 rounded font-bold">Convert to m<sup>2</sup></button>';
    const outputBox = document.getElementById('output-box');

    const li = document.createElement('li');
    li.innerHTML = data;

    outputBox.appendChild(li);
});