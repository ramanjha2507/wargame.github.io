window.addEventListener('load', function(){
class Layer{
    constructor(game,image,speedModifier){
        this.game=game;
        this.image=image;
        this.speedModifier=speedModifier;
        this.width=1760;
        this.height=500;
        this.x=0;
        this.y=0;
    }
    update(){
        if(this.x<=-this.width) this.x=0;
        this.x -= this.game.speed*this.speedModifier;
    }
    draw(context){
        context.drawImage(this.image,this.x,this.y);
        context.drawImage(this.image,this.x+this.width,this.y);
    }

    }
    class Background{
     constructor(game){
           this.game=game;
           this.image1 =document.getElementById('box');

           this.layer1= new Layer(this.game,this.image1,0.7);


           this.layers=[this.layer1];
        }
        update(){
            this.layers.forEach(layer=>layer.update());
        }
        draw(context){
            this.layers.forEach(layer=>layer.draw(context));
        }
    }
});