var Handler = Laya.Handler;
var Sprite = Laya.Sprite;
var Tween = Laya.Tween;
var that;
export default class thing extends Laya.Sprite {
    private wordObj;
    public isOver;
    private zimuCon;
    
    constructor(thats,wordObj) {
        super();
        that = thats;
        this.wordObj = wordObj;
        this.isOver = false;//是否已经排除
        this.zimuCon = new Sprite();
        this.addChild(this.zimuCon);
        this.addenergyImg();
    }

    addenergyImg ():void {
        var imgSprite = new Sprite();
        imgSprite.loadImage('res/imgs/'+that.typeLVL+'/'+this.wordObj.letter.toLowerCase()+'.png');
        imgSprite.scaleX = 0.45;
        imgSprite.scaleY = 0.45;
        if(that.typeLVL == 'type1'){
            imgSprite.pivot(57,94);
        }
        if(that.typeLVL == 'type2'){
            imgSprite.pivot(62,124);
        }
        if(that.typeLVL == 'type3'){
            imgSprite.pivot(58,126);
        }
        if(that.typeLVL == 'type4'){
            imgSprite.pivot(70,68);
        }
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





















