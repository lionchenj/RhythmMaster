var Animation = Laya.Animation;
export default class ship extends Laya.Sprite {
    private shipBg;
    private ship = [new Animation(),new Animation(),new Animation(),new Animation()];



    constructor() {
        super()
        this.init()
    }

    init(): void {
        let shipW =200;
        this.ship[0] = new Animation();
        this.ship[0].x = shipW;
        this.ship[0].y = -50;
        this.ship[0].loadAnimation("ani/stopship0.ani");
        this.ship[0].play(1, true);        
        this.addChild(this.ship[0]);
        this.ship[1] = new Animation();
        this.ship[1].x = shipW*2;
        this.ship[1].y = -50;
        this.ship[1].loadAnimation("ani/stopship1.ani");
        this.ship[1].play(1, true);        
        this.addChild(this.ship[1]);
        this.ship[2] = new Animation();
        this.ship[2].x = shipW*3;
        this.ship[2].y = -50;
        this.ship[2].loadAnimation("ani/stopship2.ani");
        this.ship[2].play(1, true);        
        this.addChild(this.ship[2]);
        this.ship[3] = new Animation();
        this.ship[3].x = shipW*4;
        this.ship[3].y = -50;
        this.ship[3].loadAnimation("ani/stopship3.ani");
        this.ship[3].play(1, true);        
        this.addChild(this.ship[3]);
    }
    goship():void{      
        this.ship[0].loadAnimation("ani/goship0.ani");
        this.ship[1].loadAnimation("ani/goship1.ani");
        this.ship[2].loadAnimation("ani/goship2.ani");
        this.ship[3].loadAnimation("ani/goship3.ani");
    }

    okship(index):void{
        var ani = new Laya.Animation();
        ani.loadAnimation("ani/okship"+index+".ani");
        ani.y = -30;
        this.ship[index].addChild(ani);
        ani.play(1,false);
        setTimeout(() => {
            ani.removeSelf()
        }, 400);
    }
    bandship(index):void{
        var ani = new Laya.Animation();
        ani.loadAnimation("ani/bandship"+index+".ani");
        ani.scaleX= 1.1,
        ani.scaleY= 1.1,
        this.ship[index].addChild(ani);
        ani.play(1,false);
        setTimeout(() => {
            ani.removeSelf()
        }, 400);
    }
}