const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.position = {
			x:100,
			y:100
		}

		this.width = 100;
		this.height = 100;
		this.sides = {
			bottom:this.position.y + this.height,
		}
	}

	draw() {
		c.fillStyle = 'red';
		c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update() {
		if (this.sides.bottom < canvas.height) {
			this.position.y++;	
			this.sides.bottom = this.position.y + this.height;
		}	
	}
}