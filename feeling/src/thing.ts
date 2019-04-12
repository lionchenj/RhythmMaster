var Handler = Laya.Handler;
var Sprite = Laya.Sprite;
var Tween = Laya.Tween;
export default class thing extends Laya.Sprite {
    private wordObj;
    public isOver;
    private zimuCon;
    
    constructor(wordObj) {
        super();
        this.wordObj = wordObj;
        this.isOver = false;//是否已经排除
        this.zimuCon = new Sprite();
        this.addChild(this.zimuCon);
        this.addenergyImg();
    }

    addenergyImg ():void {
        var imgSprite = new Sprite();
        imgSprite.loadImage('res/imgs/'+this.wordObj.letter.toLowerCase()+'.png');
        imgSprite.scaleX = 0.45;
        imgSprite.scaleY = 0.45;
        imgSprite.pivot(57,74);
        this.zimuCon.addChild(imgSprite);
    }

    xiaoshi ():void {
        Tween.clearAll(this);
        this.isOver = true;
        Tween.to(this, {alpha: 0}, 500, null, new Handler(this, function () {
            this.event('UIenergyBox_Remove_Event', [this]);
        }));
    }

    setStatus (status):void {
        this.wordObj.status = status;
    }
    setStart (start):void {
        this.wordObj.start = start;
    }
    setTime (time):void {
        this.wordObj.time = 3000*time;
    }
    setShow ():void {
        this.wordObj.isShow = true;
    }
    setPercent (percent):void {
        this.wordObj.percent = percent;
    }
    bupipei (score):void {
        this.wordObj.status = -1;
        this.xiaoshi();
    }

    pipei ():void {
        this.wordObj.status = 1;
        
        this.xiaoshi();
    }
    shitou ():void {
        this.wordObj.status = 1;
        this.xiaoshi();
    }
}





















