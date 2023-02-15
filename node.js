var body = document.body;
var container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.marginTop = '2vh';

var div1 = document.createElement('div');
div1.style.width = '29%';
div1.style.margin = '0 2% 1vh 2%'
var img1 = document.createElement('img');
img1.src = 'images-people/adaLovelace.png';
img1.style.width = '100%';
img1.style.height = '40vh';
img1.style.border = '1px solid black';
var p1 = document.createElement('p');
p1.style.width = '40%';
p1.style.margin = '0 30% 0 30%'
p1.style.textAlign = 'center'
var text1 = document.createTextNode('Ada Lovelace');
p1.appendChild(text1);
div1.appendChild(img1);
div1.appendChild(p1);

var div2 = document.createElement('div');
div2.style.width = '29%';
div2.style.margin = '0 2% 1vh 2%'
var img2 = document.createElement('img');
img2.src = 'images-people/alanTuring.png';
img2.style.width = '100%';
img2.style.height = '40vh';
img2.style.border = '1px solid black';
var p2 = document.createElement('p');
p2.style.width = '40%';
p2.style.margin = '0 30% 0 30%'
p2.style.textAlign = 'center'
var text2 = document.createTextNode('Alan Turing');
p2.appendChild(text2);
div2.appendChild(img2);
div2.appendChild(p2);

var div3 = document.createElement('div');
div3.style.width = '29%';
div3.style.margin = '0 2% 1vh 2%'
var img3 = document.createElement('img');
img3.src = 'images-people/charlesBabbage.png';
img3.style.width = '100%';
img3.style.height = '40vh';
img3.style.border = '1px solid black';
var p3 = document.createElement('p');
p3.style.width = '40%';
p3.style.margin = '0 30% 0 30%'
p3.style.textAlign = 'center'
var text3 = document.createTextNode('Charles Babbage');
p3.appendChild(text3);
div3.appendChild(img3);
div3.appendChild(p3);

var div4 = document.createElement('div');
div4.style.width = '29%';
div4.style.margin = '0 2% 1vh 2%'
var img4 = document.createElement('img');
img4.src = 'images-people/steveJobs.png';
img4.style.width = '100%';
img4.style.height = '40vh';
img4.style.border = '1px solid black';
var p4 = document.createElement('p');
p4.style.width = '40%';
p4.style.margin = '0 30% 0 30%'
p4.style.textAlign = 'center'
var text4 = document.createTextNode('Steve Jobs');
p4.appendChild(text4);
div4.appendChild(img4);
div4.appendChild(p4);

var div5 = document.createElement('div');
div5.style.width = '29%';
div5.style.margin = '0 2% 1vh 2%'
var img5 = document.createElement('img');
img5.src = 'images-people/billGates.png';
img5.style.width = '100%';
img5.style.height = '40vh';
img5.style.border = '1px solid black';
var p5 = document.createElement('p');
p5.style.width = '40%';
p5.style.margin = '0 30% 0 30%'
p5.style.textAlign = 'center'
var text5 = document.createTextNode('Bill Gates');
p5.appendChild(text5);
div5.appendChild(img5);
div5.appendChild(p5);

var div6 = document.createElement('div');
div6.style.width = '29%';
div6.style.margin = '0 2% 1vh 2%'
var img6 = document.createElement('img');
img6.src = 'images-people/elonMusk.png';
img6.style.width = '100%';
img6.style.height = '40vh';
img6.style.border = '1px solid black';
var p6 = document.createElement('p');
p6.style.width = '40%';
p6.style.margin = '0 30% 0 30%'
p6.style.textAlign = 'center'
var text6 = document.createTextNode('Elon Musk');
p6.appendChild(text6);
div6.appendChild(img6);
div6.appendChild(p6);

container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
container.appendChild(div4);
container.appendChild(div5);
container.appendChild(div6);
body.appendChild(container);
