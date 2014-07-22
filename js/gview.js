			var FPS = 30;
			var gview = $('.gview')[0];
			var gw = gview.width;
			var gh = gview.height;
			var ctx = gview.getContext('2d');
			function draw() {
				ctx.clearRect(0, 0, gw, gh);
				if(bold.dir == 90){
					bold.y = bold.y + 1;
					bold.draw();
				}
				else if(bold.dir == 180){
					bold.x = bold.x + 1;
					bold.draw();
				};
			}
			
			//MAINLOOP********************************************************************
			function mainloop(){
				draw();
			}
			setInterval(mainloop, 1000/FPS);
			//***************************************************************************
			
			//KEY-EVENTS
			$(document).bind('keydown', function(event){
				console.log('keydown->event.key:'+event.key);
				console.log('bold.offset:'+bold.offset);
				console.log('bold.x:'+bold.x);
				console.log('bold.y:'+bold.y);
					
				switch(event.key)
				{
					case 'w':
						bold.dir = 180;
						if(!bold.offset)
							bold.y -= bold.speed;
						else
							bold.y = 0;
					break;
					case 's':
						bold.dir = 180;
						if(!bold.offset)
							bold.y += bold.speed;
						else
							bold.y = gh;
					break;
					case 'a':
						bold.dir = 90;
						if(!bold.offset)
							bold.x -= bold.speed;
						else
							bold.x = 0;
					break;
					case 'd':
						bold.dir = 90;
						if(!bold.offset)
							bold.x += bold.speed;
						else
							bold.x = gw;
					break;
				}
				draw();
			});
