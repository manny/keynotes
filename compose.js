var note = new notes();
var Canvas = require('./node-canvas/lib/canvas')
  , canvas = new Canvas(800, 350)
  , ctx = canvas.getContext('2d')
  , http = require('http');
drawStaff();
console.log("drawing staff");
var five = require("./johnny-five"),
    board,led, button;

board = new five.Board();
board.on("ready", function() {

  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  led = new five.Led(13);

  setInterval(function(){
	  led.on();
	  setTimeout(function(){
	  	led.off();
	  }, 250);
  }, 1000);
  button1 = new five.Button(3);
  button2 = new five.Button(4);
  button3 = new five.Button(5);
  button4 = new five.Button(6);
  button5 = new five.Button(7);
  clear = new five.Button(8);
  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
	button: button 
  });

  button1.on("down", function() {
    console.log("downC");
	note.draw('C');
  });
  button1.on("hold", function() {
    console.log("holdC");
  });
  button1.on("up", function() {
    //console.log("up1");
  });

  button2.on("down", function() {
    console.log("downD");
	note.draw('D');
  });
  button2.on("hold", function() {
    console.log("holdD");
  });
  button2.on("up", function() {
    //console.log("up2");
  });
  button3.on("down", function() {
    console.log("downE");
	note.draw('E');
  });
  button3.on("hold", function() {
    console.log("holdE");
  });
  button3.on("up", function() {
    //console.log("up2");
  });
  button4.on("down", function() {
    console.log("downF");
	note.draw('F');
  });
  button4.on("hold", function() {
    console.log("holdF");
  });
  button4.on("up", function() {
    //console.log("up2");
  });
  button5.on("down", function() {
    console.log("downG");
	note.draw('G');
  });
  button5.on("hold", function() {
    console.log("holdG");
  });
  button5.on("up", function() {
    //console.log("up2");
  });
  clear.on("down", function() {
	console.log("clear");  
	//drawStaff();
	/*
	ctx.clearRect(0, 0, 800, 350);       
	ctx.lineWidth=2;
	ctx.strokeStyle="black";
	ctx.beginPath();
	ctx.moveTo(60, 120);
	ctx.lineTo(740, 120);
	ctx.moveTo(60, 140);
	ctx.lineTo(740, 140);
	ctx.moveTo(60, 160);
	ctx.lineTo(740, 160);
	ctx.moveTo(60, 180);
	ctx.lineTo(740, 180);
	ctx.moveTo(60, 200);
	ctx.lineTo(740, 200);
	//vertical lines
	ctx.moveTo(60,120);
	ctx.lineTo(60, 200);
	ctx.moveTo(400, 120);
	ctx.lineTo(400, 200);
	ctx.moveTo(225, 120);
	ctx.lineTo(225, 200);
	ctx.moveTo(575, 120);
	ctx.lineTo(575, 200);
	ctx.moveTo(740, 120);
	ctx.lineTo(740, 200);

	ctx.stroke();

	ctx.font = "bold 20pt Arial";
	ctx.fillStyle = "black";
	ctx.fillText("Ardu-KeyNotes", 300, 60);
	note.i = 0;
	*/
  });
});
//console.log(music.length);
//console.log(music);
/*
var Canvas = require('./node-canvas/lib/canvas')
  , canvas = new Canvas(800, 350)
  , ctx = canvas.getContext('2d')
  , http = require('http');
*/
//var title = prompt("Enter Song Title");    
function drawStaff(){

	ctx.clearRect(0, 0, 800, 350);       
	ctx.lineWidth=2;
	ctx.strokeStyle="black";
	ctx.beginPath();
	ctx.moveTo(60, 120);
	ctx.lineTo(740, 120);
	ctx.moveTo(60, 140);
	ctx.lineTo(740, 140);
	ctx.moveTo(60, 160);
	ctx.lineTo(740, 160);
	ctx.moveTo(60, 180);
	ctx.lineTo(740, 180);
	ctx.moveTo(60, 200);
	ctx.lineTo(740, 200);
	//vertical lines
	ctx.moveTo(60,120);
	ctx.lineTo(60, 200);
	ctx.moveTo(400, 120);
	ctx.lineTo(400, 200);
	ctx.moveTo(225, 120);
	ctx.lineTo(225, 200);
	ctx.moveTo(575, 120);
	ctx.lineTo(575, 200);
	ctx.moveTo(740, 120);
	ctx.lineTo(740, 200);

	ctx.stroke();

	ctx.font = "bold 20pt Arial";
	ctx.fillStyle = "black";
	ctx.fillText("Ardu-KeyNotes", 300, 60);
	note.i = 0;
	console.log("end of method");
}


function notes(){
    this.canPressG=true;
    this.canPressH=true;
    this.canPressJ=true;
    this.canPressK=true;
    this.canPressL=true;
    var pos = [80, 120, 160, 200, 240, 280, 320, 360, 440, 480, 520, 560, 600, 640, 680, 720];
    this.i = 0;
	
    this.checkNote = function(){
 	
		board.on("ready", function(){
			//led = new five.Led(13);
			//led.strobe(100);
			board.repl.inject({
				button: button
			});

			button1.on("up", function(){
				//console.log("down2");
			});
			button1.on("down", function(){
				console.log("up2");
				note.draw('G');
			});
		});
			
		/*
	if(Key.isPressed(Key.G) && this.canPressG){
            console.log("pressed g");
            this.draw('G')
            this.canPressG = false;
        }
        if(!Key.isDown(Key.G)){
            this.canPressG = true;
        }
        if(Key.isPressed(Key.H) && this.canPressH){
            console.log("pressed h");
            this.draw('H');            
            this.canPressH = false;
        }
        if(!Key.isDown(Key.H)){
            this.canPressH = true;
        }
        if(Key.isPressed(Key.J) && this.canPressJ){
            console.log("pressed j");
            this.draw('J');
            this.canPressJ = false;
        }
        if(!Key.isDown(Key.J)){
            this.canPressJ = true;
        }
        if(Key.isPressed(Key.K) && this.canPressK){
            console.log("pressed k");
            this.draw('K');
            this.canPressK = false;
        }
        if(!Key.isDown(Key.K)){
            this.canPressK = true;
        }
        if(Key.isPressed(Key.L) && this.canPressL){
            console.log("pressed l");
            this.draw('L');
            this.canPressL = false;
        }
        if(!Key.isDown(Key.L)){
            this.canPressL = true;
        }
        if(Key.isPressed(Key.C)){
            ctx.clearRect(0, 0, 800, 350);       
            ctx.lineWidth=2;
            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.moveTo(60, 120);
            ctx.lineTo(740, 120);
            ctx.moveTo(60, 140);
            ctx.lineTo(740, 140);
            ctx.moveTo(60, 160);
            ctx.lineTo(740, 160);
            ctx.moveTo(60, 180);
            ctx.lineTo(740, 180);
            ctx.moveTo(60, 200);
            ctx.lineTo(740, 200);
            //vertical lines
            ctx.moveTo(60,120);
            ctx.lineTo(60, 200);
            ctx.moveTo(400, 120);
            ctx.lineTo(400, 200);
            ctx.moveTo(225, 120);
            ctx.lineTo(225, 200);
            ctx.moveTo(575, 120);
            ctx.lineTo(575, 200);
            ctx.moveTo(740, 120);
            ctx.lineTo(740, 200);

            ctx.stroke();

            ctx.font = "bold 20pt Arial";
            ctx.fillStyle = "black";
            ctx.fillText("song", 330, 60);
            this.i = 0;
        }
       */ 
    }

    this.draw = function(note){
        if(this.i<16){        
            ctx.fillStyle = "black"
            ctx.beginPath();
            var y;
			/*	
			board.on("ready", function(){
				//led = new five.Led(13);
				//led.strobe(100);
				button1 = new five.Button(9);
				board.repl.inject({
					button: button
				});

				button1.on("up", function(){
					//console.log("down2");
					y = g;
				});
				button1.on("down", function(){
					//console.log("up2");
					y=0;
				});


			});

			*/
            if(note =='C') y = 149; //c
            if(note =='D') y = 141; //d
            if(note =='E') y = 131; //e 
            if(note =='F') y = 121; // f
            if(note =='G') y = 110; //g
			
            ctx.arc(pos[this.i], y, 10, 0, Math.PI*2, true);
            ctx.fill();
            ctx.lineWidth=2;
            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.moveTo(pos[this.i]-10, y);
            ctx.lineTo(pos[this.i]-10, y+50);
            ctx.stroke();
            this.i++;
        }
    }
}/*
board = new five.Board();

board.on("ready", function(){
	//led = new five.Led(13);
	//led.strobe(100);
	button1 = new five.Button(9);
	board.repl.inject({
		button: button
	});

	button1.on("up", function(){
		console.log("down2");
	});
	button1.on("down", function(){
		console.log("up2");
	});


});
*/
//var note = new notes();
/*
setInterval(function(){
    //note.checkNote();
	//note.draw();    
	console.log("looping");
}, 1000);
*/
http.createServer(function (req, res) {
 // clock(ctx);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(''
    + '<meta http-equiv="refresh" content="1;" />'
    + '<img src="' + canvas.toDataURL() + '" />');
}).listen(3000);
console.log('Server started on port 3000');
