export default class car extends Laya.Sprite {
    constructor() {
        super()
        this.initBg()
    }
    
    initBg():void {
        var car = new Laya.Sprite();
        car.x = 750;
        car.y = 30;
        car.loadImage("res/imgs/car.png");
        this.addChild(car);
    }
}