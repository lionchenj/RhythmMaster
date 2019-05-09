export default class bg extends Laya.Sprite {
    constructor() {
        super()
        this.initBg()
    }
    
    initBg():void {
        
        var bgContainer = new Laya.Animation();
        bgContainer.loadAnimation("ani/bg.ani");
        bgContainer.width = 1008;
        bgContainer.height = 640;
        bgContainer.pivot(0,0)
        bgContainer.pos(504,Laya.stage.height/2);
        bgContainer.play(1,true);
        this.addChild(bgContainer);
        setTimeout(() => {
        }, 50);
    }
}