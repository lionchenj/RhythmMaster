export default class bg extends Laya.Sprite {
    constructor() {
        super();
        this.initBg()
    }
    
    initBg():void {
        var bgContainer = new Laya.Sprite();
        bgContainer.x = 0;
        bgContainer.y = 0;
        // bgContainer.width = 1028;
        bgContainer.height = 640; 
        bgContainer.loadImage("res/imgs/bg.png");
        // var bgContainer = new Laya.Animation();
        // bgContainer.x = 0;
        // bgContainer.y = 0;
        // bgContainer.loadAnimation("ani/bg.ani");
        // bgContainer.play(1,true);
        this.addChild(bgContainer);
    }
}