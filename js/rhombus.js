document.getElementById('btn-rhombus').addEventListener('click', function() {
    // Given d1 = 16cm, d2 = 8cm
    const d1 = 16;
    const d2 = 8;
    const calc = 0.5 * d1 * d2;
    const area = calc.toFixed(2);

    // Make html for outpux box
    const data = '<span class="mr-5">Rhombus</span><span>'+area+'</span><span class="mr-5">cm<sup>2</sup></span><button class="text-xs bg-blue-400 text-white p-2 rounded font-bold">Convert to m<sup>2</sup></button>';
    const outputBox = document.getElementById('output-box');

    const li = document.createElement('li');
    li.innerHTML = data;

    outputBox.appendChild(li);
});