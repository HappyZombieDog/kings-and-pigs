const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

// c.fillStyle = 'white';
// c.fillRect(0, 0, canvas.width, canvas.height);

let y = 100;
const height = 100;
let bottom = y + 100;

function animate() {
	window.requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);

	c.fillStyle = 'red';
	c.fillRect(100, y, 100, height);

	if (bottom <canvas.height) {
		y++;	
		bottom = y + 100;
	}	
}

animate();