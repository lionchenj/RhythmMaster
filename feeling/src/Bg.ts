export default class bg extends Laya.Sprite {
    constructor() {
        super()
        this.initBg()
    }
    
    initBg():void {
        var bgContainer = new Laya.Animation();
        bgContainer.loadAnimation("ani/bg.ani");
        bgContainer.play(1,true);
        this.addChild(bgContainer);
        setTimeout(() => {
        }, 50);
    }
}