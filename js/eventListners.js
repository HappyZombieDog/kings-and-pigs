window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'ArrowUp':
		for (let i = 0; i < doors.length; i++) {
			const door = doors[i]

			if (
				player.hitbox.position.x <= door.position.x + door.width &&
				player.hitbox.position.x + player.hitbox.width >= door.position.x &&
				player.hitbox.position.y + player.hitbox.height >= door.position.y &&
				player.hitbox.position.y <= door.position.y + door.height
				) {
				console.log('you presed up on door');
				}
			}
			if (player.velocity.y === 0) player.velocity.y = -14;

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