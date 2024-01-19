const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

const player = new Player();

const keys = {
	ArrowUp: {
		pressed: false,
	},
	ArrowLeft: {
		pressed: false,
	},
	ArrowRight: {
		pressed: false,
	}
}
function animate() {
	window.requestAnimationFrame(animate);
	c.fillStyle = 'white';
	c.fillRect(0, 0, canvas.width, canvas.height);

	player.velocity.x = 0;
	if (keys.ArrowRight.pressed) 
		player.velocity.x = 5;
	 else if (keys.ArrowLeft.pressed) 
		player.velocity.x = -5;
	
	player.draw();
	player.update();
}

animate();

