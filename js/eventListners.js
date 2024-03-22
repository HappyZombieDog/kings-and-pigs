window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'ArrowUp':
			if (player.velocity.y === 0) player.velocity.y = -15;
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