export default class car extends Laya.Sprite {
    constructor() {
        super()
        this.initBg()
    }
    
    initBg():void {
        var car = new Laya.Sprite();
        car.width = 666;
        car.height = 394;
        car.x = 789;
        car.y = 113;
        car.loadImage("res/imgs/car.png");
        this.addChild(car);
    }
}