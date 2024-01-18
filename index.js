const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;
// video adds Player class here starting at ~19:20
const player = new Player(); // works if Player class included in this same file, otherwise ref needed?

function animate() {
	window.requestAnimationFrame(animate);
	c.fillStyle = 'white';
	c.fillRect(0, 0, canvas.width, canvas.height);

	player.draw();
	player.update();
}

animate();


window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'ArrowUp':
			if (player.velocity.y === 0) player.velocity.y = -20;
			break;
		case 'ArrowLeft':
			//move player to the left
			player.velocity.x = -4;
			break;
		case 'ArrowRight':
			//move player to he right
			player.velocity.x = 4;
			break;	
	}
})