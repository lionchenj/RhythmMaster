import Animation = Laya.Animation;
import Sprite = Laya.Sprite;
import Event = Laya.Event;
let shipW = 200,that,padding = 0;
export default class ship extends Laya.Sprite {
    private shipBg;
    // private ship = [new Animation(),new Animation(),new Animation(),new Animation()];
    private ship = [];
    private ship1;
    private ship2;
    private ship3;
    private ship4;


    constructor(thats) {
        super()
        that = thats
        this.ship = 
            that.typeLVL == 'type1'?
            [new Animation(),new Animation(),new Animation(),new Animation()]:
            [new Sprite(),new Sprite(),new Sprite(),new Sprite()];
        this.init()
    }

    init(): void {
        padding = 504;
        this.ship1 = new Sprite();
        this.ship2 = new Sprite();
        this.ship3 = new Sprite();
        this.ship4 = new Sprite();
        this.ship1.size(200, 200);
        this.ship2.size(200, 200);
        this.ship3.size(200, 200);
        this.ship4.size(200, 200);
        this.ship1.pivot(100, 100);
        this.ship2.pivot(100, 100);
        this.ship3.pivot(100, 100);
        this.ship4.pivot(100, 100);
        // this.ship1.graphics.drawRect(0, 0, 200, 200, '#fff');
        // this.ship2.graphics.drawRect(0, 0, 200, 200, '#000');
        // this.ship3.graphics.drawRect(0, 0, 200, 200, '#eee');
        // this.ship4.graphics.drawRect(0, 0, 200, 200, '#fff');
        
        if (that.typeLVL == 'type1') {
            this.ship1.pos(padding-300, -50);
            this.ship2.pos(padding-100, -50);
            this.ship3.pos(padding+100, -50);
            this.ship4.pos(padding+300, -50);
            this.ship[0] = new Animation();
            this.ship[0].x = 100;
            this.ship[0].y = 100;
            this.ship[0].loadAnimation("ani/stopship0.ani");
            this.ship[0].play(1, true); 
            this.ship[1] = new Animation();
            this.ship[1].x = 100;
            this.ship[1].y = 100;
            this.ship[1].loadAnimation("ani/stopship1.ani");
            this.ship[1].play(1, true);        
            this.ship[2] = new Animation();
            this.ship[2].x = 100;
            this.ship[2].y = 100;
            this.ship[2].loadAnimation("ani/stopship2.ani");
            this.ship[2].play(1, true); 
            this.ship[3] = new Animation();
            this.ship[3].x = 100;
            this.ship[3].y = 100;
            this.ship[3].loadAnimation("ani/stopship3.ani");
            this.ship[3].play(1, true);        
        }else{
            this.ship1.pos(padding-300, -15);
            this.ship2.pos(padding-100, -15);
            this.ship3.pos(padding+100, -15);
            this.ship4.pos(padding+300, -15);
            this.ship[0] = new Sprite();
            this.ship[0].pos(0,0);
            this.ship[0].loadImage('res/imgs/'+that.typeLVL+'/m1.png');
            this.ship[1] = new Sprite();
            this.ship[1].loadImage('res/imgs/'+that.typeLVL+'/m2.png');
            this.ship[2] = new Sprite();
            this.ship[2].loadImage('res/imgs/'+that.typeLVL+'/m3.png');
            this.ship[3] = new Sprite();
            this.ship[3].loadImage('res/imgs/'+that.typeLVL+'/m4.png');
        }
        this.ship1.addChild(this.ship[0]);
        this.ship2.addChild(this.ship[1]);
        this.ship3.addChild(this.ship[2]);
        this.ship4.addChild(this.ship[3]);

        this.ship1.on(Event.CLICK,this,function () {
            that.onClickDown(0);
            console.log('0')
        })
        this.ship2.on(Event.CLICK,this,function () {
            that.onClickDown(1);
            console.log('1')
        })
        this.ship3.on(Event.CLICK,this,function () {
            that.onClickDown(2);
            console.log('2')
        })
        this.ship4.on(Event.CLICK,this,function () {
            that.onClickDown(3);
            console.log('3')
        })
        this.addChild(this.ship1);
        this.addChild(this.ship2);
        this.addChild(this.ship3);
        this.addChild(this.ship4);

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