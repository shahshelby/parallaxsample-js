let text = document.getElementById('text');
let base1 = document.getElementById('base1');
let lleaf= document.getElementById('lleaf');
let rleaf = document.getElementById('rleaf');

let maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value <= maxScrollHeight) {
        let translateX = (value / maxScrollHeight) * 100;
        text.style.transform = `translateX(-${translateX}%)`;
        rleaf.style.transform = `translateX(${value * 0.3}px)`;
        lleaf.style.transform = `translateX(${value * -0.3}px)`;
        base1.style.transform = `translateY(${value * 0.5}px)`;
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

