let canvas = document.getElementById('canvas');
const imageLoader = document.getElementById('uploader');
const number = document.getElementById('number');
const charName = document.getElementById('name');
const prof = document.getElementById('prof');
const from = document.getElementById('from');
const to = document.getElementById('to');
const acceptBtn = document.querySelector('.accept');
const saveBtn = document.querySelector('.save');
let ctx = canvas.getContext('2d');
canvas.width = $('img').width();
canvas.height = $('img').height();
ctx.drawImage($('img').get(0), 0, 0);

function handleImage(e) {
	let reader = new FileReader();
	reader.onload = function (event) {
		let newImg = new Image();
		newImg.onload = function () {
			ctx.drawImage(newImg, 14, 130, 135, 155);
		};
		newImg.src = event.target.result;
	};
	reader.readAsDataURL(e.target.files[0]);
}

imageLoader.addEventListener('change', handleImage, false);

acceptBtn.addEventListener('click', (e) => {
	console.log(number.value);
	e.preventDefault();
	ctx.fillStyle = 'black';
	ctx.font = 'bold 11pt Verdana';
	ctx.fillText(number.value, 260, 108.5);
	ctx.font = 'bold 11pt Verdana';
	ctx.fillText(charName.value, 171, 150);
	ctx.font = '9pt Verdana';
	ctx.fillText(prof.value, 171, 180);
	ctx.font = '8pt Verdana';
	ctx.fillText(from.value, 183, 254);
	ctx.fillText(to.value, 305, 254);
});

saveBtn.addEventListener('click', () => {
	let dataURL = canvas.toDataURL();
	let link = document.createElement('a');
	document.body.appendChild(link); // Firefox requires the link to be in the body :(
	link.href = dataURL;
	link.download = 'card.png';
	link.click();
	document.body.removeChild(link);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// $('button').click(function () {
// 	let dataURL = canvas.toDataURL('image/jpeg');
// 	let link = document.createElement('a');
// 	document.body.appendChild(link); // Firefox requires the link to be in the body :(
// 	link.href = dataURL;
// 	link.download = 'my-image-name.jpg';
// 	link.click();
// 	document.body.removeChild(link);
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
// });
