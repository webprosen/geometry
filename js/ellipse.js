document.getElementById('btn-ellipse').addEventListener('click', function() {
    // Given a = 10cm, b = 4cm
    const a = 10;
    const b = 4;
    const pi = 3.14;
    const calc = pi * a * b;
    const area = calc.toFixed(2);

    // Make html for outpux box
    const data = '<span class="mr-5">Ellipse</span><span>'+area+'</span><span class="mr-5">cm<sup>2</sup></span><button class="text-xs bg-blue-400 text-white p-2 rounded font-bold">Convert to m<sup>2</sup></button>';
    const outputBox = document.getElementById('output-box');

    const li = document.createElement('li');
    li.innerHTML = data;

    outputBox.appendChild(li);
});