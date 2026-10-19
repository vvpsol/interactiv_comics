const b1_1 = document.getElementById('b1_1');
const b1_2 = document.getElementById('b1_2');
const b2_1 = document.getElementById('b2_1');
const b2_2 = document.getElementById('b2_2');
const b3_1 = document.getElementById('b3_1');
const b3_2 = document.getElementById('b3_2');

const p1_1 = document.getElementById('p1_1');
const p1_2 = document.getElementById('p1_2');
const p2_1 = document.getElementById('p2_1');
const p2_2 = document.getElementById('p2_2');
const p3_1 = document.getElementById('p3_1');
const p3_2 = document.getElementById('p3_2');

const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');


b1_1.addEventListener('click', function() {
	b2_1.removeAttribute('disabled');
	b2_2.removeAttribute('disabled');
	b1_1.style.opacity='1';
	p1_2.style.opacity='0';
	p2_1.style.opacity='1';
	p2_2.style.opacity='1';
	f2.style.opacity='1';
});

b1_2.addEventListener('click', function() {
	b3_1.removeAttribute('disabled');
	b3_2.removeAttribute('disabled');
	b1_2.style.opacity='1';
	p1_1.style.opacity='0';
	p3_1.style.opacity='1';
	p3_2.style.opacity='1';
	f3.style.opacity='1';
});
