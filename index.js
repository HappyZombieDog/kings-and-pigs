const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

class Sprite {
	constructor({position, imageSrc}){
		this.position= position;
		this.image= new Image()
		this.image.src = imageSrc
	}
	draw() {
		c.drawImage(this.image, this.position.x, this.position.y);
	}
}

const backgroundLevel1 = new Sprite({
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: './img/backgroundLevel1.png',
});

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
	
	backgroundLevel1.draw();

	player.velocity.x = 0;
	if (keys.ArrowRight.pressed) 
		player.velocity.x = 5;
	 else if (keys.ArrowLeft.pressed) 
		player.velocity.x = -5;
	
	player.draw();
	player.update();
}

animate();

