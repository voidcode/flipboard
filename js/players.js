var bold = {
	color: 'red',
	x: 0,
	y: 0,
	width: 3,
	heigth: 3,
	speed: 4,
	dir: 90,
	offset: false,
	draw: function(){
		var _gw = gw - this.width;
		var _gh = gh - this.heigth;
		if(this.x >= 0 && this.x <= _gw && this.y >= 0 && this.y <= _gh){
			this.offset = false;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.heigth);
		}
		else
		{
			this.offset = true;
			ctx.fillStyle = this.color;
			if(this.x < 0){
				this.x = 0;
				ctx.fillRect(this.x, this.y, this.width, this.heigth);
			}
			if(this.x > _gw){
				if(this.dir == 180)
					this.dir = 90;	
				else
					this.x = 0;
				ctx.fillRect(this.x, this.y, this.width, this.heigth);
			}
			if(this.y < 0){
				this.y = 0;
				ctx.fillRect(this.x, this.y, this.width, this.heigth);
			}
			if(this.y > _gh){
				if(!this.dir == 90)
					this.dir = 180;
				else
					this.y = 0;
				ctx.fillRect(this.x, this.y, this.width, this.heigth);
			}
		}
	}
};