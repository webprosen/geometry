document.getElementById('btn-parallelogram').addEventListener('click', function() {
        // Given base=10cm, height=12cm
        const base = 10;
        const height = 12;
        const calc = base * height;
        const area = calc;

        // Make html for outpux box
        const data = '<span class="mr-5">Parallelogram</span><span>'+area+'</span><span class="mr-5">cm<sup>2</sup></span><button class="text-xs bg-blue-400 text-white p-2 rounded font-bold">Convert to m<sup>2</sup></button>';
        const outputBox = document.getElementById('output-box');

        const li = document.createElement('li');
        li.innerHTML = data;

        outputBox.appendChild(li);
});