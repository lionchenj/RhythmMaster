export default class ship extends Laya.Sprite {
    // 定义黑人跑步主体
    private ship: Laya.Animation


    constructor() {
        super()
        this.init()
    }

    init(): void {
        this.ship = new Laya.Animation();
        this.ship.loadAnimation("ani/stopship.ani");
        this.ship.x = 520;
        this.ship.y = 600;
        this.ship.play(1, true);        
        this.addChild(this.ship);
    }
    goship():void{
        this.ship.loadAnimation("ani/goship.ani");
        this.ship.y = 540;
        this.addChild(this.ship);
    }

    onMove(x:number): void {
        let nowX = x<150?150:x>780?780:x;
        Laya.Tween.to(this.ship,{x:nowX},10)
    }
    show(): void {
        this.ship.visible = true

    }

    hide(): void {
        this.ship.visible = false
    }
    okship():void{
        var ani = new Laya.Animation();
        ani.loadAnimation("ani/okship.ani");
        ani.y = -30;
        this.ship.addChild(ani);
        ani.play(1,false);
        setTimeout(() => {
            ani.removeSelf()
        }, 400);
    }
    bandship():void{
        var ani = new Laya.Animation();
        ani.loadAnimation("ani/bandship.ani");
        ani.y = 30;
        ani.scaleX= 1.1,
        ani.scaleY= 1.1,
        this.ship.addChild(ani);
        ani.play(1,false);
        setTimeout(() => {
            ani.removeSelf()
        }, 400);
    }
}