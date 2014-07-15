			var FPS = 30;
			var gameview = $('.gameview')[0];
			var gw = gameview.width;
			var gh = gameview.height;
			var ctx = gameview.getContext('2d');
			function draw() {
				ctx.clearRect(0, 0, gw, gh);
				bold.draw();
			}
			
			//init position
			bold.x = gw/2;
			bold.y = gh/2;
			bold.draw();
			
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
						if(!bold.offset)
							bold.y -= bold.speed;
						else
							bold.y = 0;
					break;
					case 's':
						if(!bold.offset)
							bold.y += bold.speed;
						else
							bold.y = gh;
					break;
					case 'a':
						if(!bold.offset)
							bold.x -= bold.speed;
						else
							bold.x = 0;
					break;
					case 'd':
						if(!bold.offset)
							bold.x += bold.speed;
						else
							bold.x = gw;
					break;
				}
				draw();
			});
