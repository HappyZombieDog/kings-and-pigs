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
	if (keys.ArrowRight.pressed) {
		player.velocity.x = 1;
	} else if (keys.ArrowLeft.pressed) {
		player.velocity.x = -1;
	}
	player.draw();
	player.update();
}

animate();

window.addEventListener('keydown', (event) => {
	console.log(event.key);
	switch (event.key) {
		case 'ArrowUp':
			if (player.velocity.y === 0) player.velocity.y = -20;
			break;
		case 'ArrowLeft':
			//move player to the left
			keys.ArrowLeft.pressed = true;
			break;
		case 'ArrowRight':
			//move player to the right
			keys.ArrowRight.pressed = true;
			break;	
	}
})
window.addEventListener('keyup', (event) => {
	switch (event.key) {
		case 'ArrowLeft':
			//move player to the left
			keys.ArrowLeft.pressed = false;
			break;
		case 'ArrowRight':
			//move player to the right
			keys.ArrowRight.pressed = false;
			break;
	}
})