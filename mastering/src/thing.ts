var Animation = Laya.Animation;
var Event = Laya.Event;
var Handler = Laya.Handler;
var Sprite = Laya.Sprite;
var Loader = Laya.Loader;
var Particle2D = Laya.Particle2D;
var Tween = Laya.Tween;
export default class thing extends Laya.Sprite {
    private wordObj;
    public isOver;
    private bgCon;
    private liziCon;
    private zimuCon;
    private moveTween;
    private sp;
    
    constructor(wordObj) {
        super();

        this.wordObj = wordObj;
        this.isOver = false;//是否已经排除

        this.bgCon = new Sprite();
        this.addChild(this.bgCon);
        this.liziCon = new Sprite();
        this.addChild(this.liziCon);
        this.zimuCon = new Sprite();
        this.addChild(this.zimuCon);
        this.addenergyImg();

        // this.addBgRect();

        this.moveTween = null;//移动缓动

        // Laya.loader.load("res/parts/lizi2.part", Handler.create(this, this.onAssetsLoaded), null, Loader.JSON);
    }

    // onAssetsLoaded(settings):void {
    //     settings.colorComponentInter = true;

    //     this.sp = new Particle2D(settings);
    //     this.sp.play();
    //     this.sp.emitter.start();
    //     this.sp.x = 130;
    //     this.sp.y = 50;
    //     this.liziCon.addChild(this.sp);
    // }

    addenergyImg ():void {
        var imgSprite = new Sprite();
        imgSprite.loadImage('res/imgs/'+this.wordObj.letter.toLowerCase()+'.png');
        
        if (this.wordObj.letter == 1){
            imgSprite.width = 107;
            imgSprite.height = 151;
            imgSprite.pivotX = 150;
        } else {
            imgSprite.width = 142;
            imgSprite.height = 140;
            imgSprite.pivotX = 142;
        }
        // imgSprite.scaleX = 0.45;
        // imgSprite.scaleY = 0.45;
        this.zimuCon.addChild(imgSprite);
    }

    destroyMe ():void {
        this.sp.stop();
        this.sp.destroy(true);
        this.sp = null;
        while (this.liziCon.numChildren) {
            this.liziCon.removeChildAt(0);
        }
        this.liziCon = null;
        while (this.zimuCon.numChildren) {
            this.zimuCon.removeChildAt(0);
        }
        this.zimuCon = null;
    }

    // addBgRect () {
    //     var bgSp = new Sprite();
    //     bgSp.loadImage('res/imgs/energyBg.png');
    //     bgSp.x = -80;
    //     bgSp.y = -250;
    //     this.zimuCon.addChild(bgSp);
    // }

    xiaoshi ():void {
        Tween.clearAll(this);
        this.isOver = true;
        Tween.to(this, {alpha: 0}, 20, null, new Handler(this, function () {
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
        // var ani = new Animation();
        // ani.loadAnimation("CupAni.ani")
        // this.addChild(ani);
        this.xiaoshi();
    }
}





















