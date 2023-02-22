function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

const items = document.querySelectorAll('.random-hover-color');

for(const item of items){
    item.addEventListener('mouseenter', function(event){
        this.style.backgroundColor = randomColor();
    });
    item.addEventListener('mouseleave', function(event){
        this.style.backgroundColor = '#fff';
    });
}