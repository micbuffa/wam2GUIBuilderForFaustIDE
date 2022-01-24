import { AbstractComponent } from './AbstractComponent.js';
import { hBarGraphDefaultValues } from './config/DefaultValues.js';

export class Hbargraph extends AbstractComponent {        

    constructor(labelText, address) {
        super(labelText, "canvas", address);
        this.type = 'hbargraph';    
        
        this.audio = new Audio('../../../audio/test.mp3');

        //TODO: replace timeout by father notification
        setTimeout(() => {
            var context = new AudioContext();
            var src = context.createMediaElementSource(this.audio);
            this.analyser = context.createAnalyser();
        
            this.canvas = document.getElementById(labelText);
            this.canvas.width = hBarGraphDefaultValues.WIDTH;
            this.canvas.height = hBarGraphDefaultValues.HEIGHT;            
            this.ctx = this.canvas.getContext("2d");
        
            src.connect(this.analyser);
            this.analyser.connect(context.destination);
        
            this.analyser.fftSize = 2048;
    
            this.bufferLength = this.analyser.frequencyBinCount;            
            this.dataArray = new Uint8Array(this.bufferLength);
        
            this.WIDTH = hBarGraphDefaultValues.WIDTH;
            this.HEIGHT = hBarGraphDefaultValues.HEIGHT;

            this.draw(); 

            this.audio.volume = 0.1;                  
        }, 200);
        
    } 

    changeHeight(height) {
        this.canvas.height = height;
        this.HEIGHT = height;
    }

    changeWidth(width) {
        this.canvas.width = width;
        this.WIDTH = width;
    }
    
    draw() {                       

        this.analyser.getByteTimeDomainData(this.dataArray);
        var x = 0;
          
        this.ctx.clearRect(0, 0, this.width, this.height);
  
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = 'rgb(255, 255, 0)'; 
        this.ctx.beginPath();

        var largeurSegment = this.WIDTH * 1.0 / this.bufferLength;
        var x = 0;

        for(var i = 0; i < this.bufferLength; i++) {
   
            var v = this.dataArray[i] / 128.0;
            var y = v * this.HEIGHT/2;
    
            if(i === 0) {
              this.ctx.moveTo(x, y);
            } else {
              this.ctx.lineTo(x, y);
            }
    
            x += largeurSegment;
        }

        this.ctx.lineTo(this.canvas.width, this.canvas.height/2);
        this.ctx.stroke();
  

        setTimeout(() => {
            this.draw();
        }, 10);
    }
}