import Sprite = Laya.Sprite;
import Event = Laya.Event;
import Handler = Laya.Handler;
import TimeLine = Laya.TimeLine;
import Texture = Laya.Texture;
import Text = Laya.Text;
import Tween = Laya.Tween;
import Sound321 = Laya.SoundManager;
import Animation = Laya.Animation;
var thats;
export default class tips extends Laya.Sprite {

    private perfectTip:Laya.Sprite;
    private greatTip:Laya.Sprite;
    private rightTip:Laya.Sprite;
    private missTip:Laya.Sprite;
    private badTip:Laya.Sprite;
    private syrup:Laya.Sprite;
    private chippy:Laya.Sprite;

    private timeTip:Laya.Sprite;
    private stopTip:Laya.Sprite;
    private restartTip:Laya.Sprite;
    private lawnTip:Laya.Sprite;
    private topBanTip:Laya.Sprite;
    private titleTxt:Laya.Text;
    private startGoTip:Laya.Sprite;
    private startGoTxt:Laya.Text;
    private jumpbtn:Laya.Sprite;
    

    private ready1Tip:Laya.Sprite;
    private ready2Tip:Laya.Sprite;
    private ready3Tip:Laya.Sprite;
    private readyTip:Laya.Sprite;
    private readyGoTip:Laya.Sprite;
    private countDownTxt:Laya.Text;//倒计时文本

    private lastTip;
    private slastTip;
    private clastTip;
    private texture1 = "res/imgs/lawn.png";
    private texture2 = "res/imgs/lawnON.png";
    private jump1 = "res/imgs/jumpbtn.png";
    private jump2 = "res/imgs/jumpbtnON.png";
    private comboCount = 0;
    private countDown = 60;
    private music321;//321音乐实例

    private scoreObj = {
        fantastic: 0,
        perfect: 0,
        good: 0,
        miss: 0,
        bad: 0,
        comboMax: 0,
        totalScore: 0
    };
    constructor(m) {
        super()
        this.initTips()
        thats = m;
    }

    initTips () :void {
        
        this.perfectTip = new Sprite();
        this.perfectTip.loadImage("res/imgs/perfect.png");
        this.perfectTip.alpha = 0;
        this.perfectTip.width = 437;
        this.perfectTip.height = 188;
        this.perfectTip.pos(304, 149);
        this.addChild(this.perfectTip);

        this.greatTip = new Sprite();
        this.greatTip.loadImage("res/imgs/great.png");
        this.greatTip.alpha = 0;
        this.greatTip.width =  267;
        this.greatTip.height = 83;
        // this.greatTip.pos((Laya.stage.width) / 2, (Laya.stage.height) / 2-100);
        this.greatTip.pos(Laya.stage.width / 2 - 133, 149);
        this.addChild(this.greatTip);

        this.rightTip = new Sprite();
        this.rightTip.loadImage("res/imgs/right.png");
        this.rightTip.alpha = 0;
        this.rightTip.width =  267;
        this.rightTip.height = 83;
        this.rightTip.pos(Laya.stage.width / 2 - 133, 149);
        this.addChild(this.rightTip);

        this.badTip = new Sprite();
        this.badTip.loadImage("res/imgs/bad.png");
        this.badTip.alpha = 0;
        this.badTip.width = 160;
        this.badTip.height = 83;
        this.badTip.pos(434,211);
        this.addChild(this.badTip);

        this.missTip = new Sprite();
        this.missTip.loadImage("res/imgs/miss.png");
        this.missTip.alpha = 0;
        this.missTip.width = 200;
        this.missTip.height = 83;
        this.missTip.pos((Laya.stage.width) / 2 - 100, 149);
        this.addChild(this.missTip);

        this.chippy = new Sprite();
        this.chippy.loadImage("res/imgs/1.png");
        this.chippy.alpha = 0;
        this.chippy.width = 107;
        this.chippy.height = 151;
        this.chippy.pos(780,333);
        this.addChild(this.chippy);

        this.syrup = new Sprite();
        this.syrup.loadImage("res/imgs/syrup.png");
        this.syrup.alpha = 0;
        this.syrup.width = 181;
        this.syrup.height = 181;
        this.syrup.pos(681,113);
        this.addChild(this.syrup);

        this.timeTip = new Sprite();
        this.timeTip.loadImage("res/imgs/time.png");
        this.timeTip.width = 246;
        this.timeTip.height = 60;
        this.timeTip.alpha = 0;
        this.timeTip.pos(623, 23);
        this.addChild(this.timeTip);

        // this.playTip = new Sprite();
        // this.playTip.loadImage("res/imgs/play.png");
        // this.playTip.alpha = 0;        
        // this.playTip.pos(850, 200);
        // this.addChild(this.playTip);
        // this.playTip.on(Event.MOUSE_DOWN, this, this.play)

        // this.stopTip = new Sprite();
        // this.stopTip.loadImage("res/imgs/stop.png");
        // this.stopTip.alpha = 0;
        // this.stopTip.pos(850, 200);
        // this.addChild(this.stopTip);
        // this.stopTip.on(Event.MOUSE_DOWN, this, this.stop)

        this.restartTip = new Sprite();
        this.restartTip.loadImage("res/imgs/restart.png");
        this.restartTip.alpha = 0;
        this.restartTip.width = 61;
        this.restartTip.height = 61;
        this.restartTip.pos(926, 29);
        this.addChild(this.restartTip);
        this.restartTip.on(Event.MOUSE_DOWN, this, this.restart)

        this.topBanTip = new Sprite();
        this.topBanTip.loadImage("res/imgs/topBan.png");
        this.topBanTip.pos(354, 0);
        this.addChild(this.topBanTip);
        this.topBanTip.width = 321;
        this.topBanTip.height = 114;

        this.titleTxt = new Text();
        this.titleTxt.font = "Impact";
        this.titleTxt.fontSize = 34;
        this.titleTxt.color = "#FFFFFF";
        this.titleTxt.pos(447, 60)
        this.titleTxt.text = "掌握节奏";
        this.addChild(this.titleTxt);

        this.startGoTip = new Sprite();
        this.startGoTip.loadImage("res/imgs/buttonStart.png");
        this.startGoTip.pos(393, 300);
        this.startGoTip.width = 242;
        this.startGoTip.height = 80;
        this.addChild(this.startGoTip);
        this.startGoTip.on(Event.MOUSE_DOWN, this, this.startGo)
        this.startGoTxt = new Text();
        this.startGoTxt.font = "Impact";
        this.startGoTxt.fontSize = 30;
        this.startGoTxt.color = "#000000";
        this.startGoTxt.pos(459, 322)
        this.startGoTxt.width = 109;
        this.startGoTxt.height = 38;
        this.startGoTxt.text = "开始游戏";
        this.addChild(this.startGoTxt);

        this.lawnTip = new Sprite();
        this.addChild(this.lawnTip);
        this.lawnTip.pos(550,424)
        this.lawnTip.width = 209;
        this.lawnTip.height = 81;

        this.jumpbtn = new Sprite();
        this.jumpbtn.width = 193;
        this.jumpbtn.height = 64;
        this.jumpbtn.pos(405, 542);
        this.addChild(this.jumpbtn);
        this.jumpbtn.on(Laya.Event.MOUSE_DOWN, this, (e)=>{
                thats.onClickDown(e)
            })
        var gestrue = new Sprite();
        gestrue.loadImage("res/imgs/gesture.png");        
        gestrue.pos(165, 18);
        gestrue.width = 31;
        gestrue.height = 40;
        this.jumpbtn.addChild(gestrue);
        var jumpbtnTxt = new Text();
        jumpbtnTxt.fontSize = 30;
        jumpbtnTxt.color = "#000000";
        jumpbtnTxt.pos(27,22)
        jumpbtnTxt.width = 105;
        jumpbtnTxt.height= 30;
        jumpbtnTxt.text = "点击跳跃";
        this.jumpbtn.addChild(jumpbtnTxt);


        this.ready3Tip = new Sprite();
        this.ready3Tip.loadImage("res/imgs/CountDown3.png");
        this.ready3Tip.alpha = 0;
        this.ready3Tip.height = 135;
        this.ready3Tip.pos(Laya.stage.width/2-50, Laya.stage.height/2-120);
        this.addChild(this.ready3Tip);
        this.ready2Tip = new Sprite();
        this.ready2Tip.loadImage("res/imgs/CountDown2.png");
        this.ready2Tip.alpha = 0;
        this.ready2Tip.height = 135;
        this.ready2Tip.pos(Laya.stage.width/2-50, Laya.stage.height/2-120);
        this.addChild(this.ready2Tip);
        this.ready1Tip = new Sprite();
        this.ready1Tip.loadImage("res/imgs/CountDown1.png");
        this.ready1Tip.alpha = 0;
        this.ready1Tip.height = 135;
        this.ready1Tip.pos(Laya.stage.width/2-40, Laya.stage.height/2-120);
        this.addChild(this.ready1Tip);

        // this.ready1Tip = new Sprite();
        // this.ready1Tip.loadImage("res/imgs/CountDown3.png");
        // this.ready1Tip.alpha = 0;
        // this.ready1Tip.width = 68;
        // this.ready1Tip.height = 114;
        // this.ready1Tip.pos(475,203);
        // this.addChild(this.ready1Tip);
        // this.ready2Tip = new Sprite();
        // this.ready2Tip.loadImage("res/imgs/CountDown2.png");
        // this.ready2Tip.alpha = 0;
        // this.ready2Tip.width = 68;
        // this.ready2Tip.height = 114;
        // this.ready2Tip.pos(475,203);
        // this.addChild(this.ready2Tip);
        // this.ready3Tip = new Sprite();
        // this.ready3Tip.loadImage("res/imgs/CountDown1.png");
        // this.ready3Tip.alpha = 0;
        // this.ready3Tip.width = 68;
        // this.ready3Tip.height = 114;
        // this.ready3Tip.pos(475,203);
        // this.addChild(this.ready3Tip);
        this.readyTip = new Sprite();
        this.readyTip.loadImage("res/imgs/ready.png");
        this.readyTip.alpha = 0;
        this.readyTip.width = 300;
        this.readyTip.pos(Laya.stage.width/2-150,211);
        this.addChild(this.readyTip);
        this.readyGoTip = new Sprite();
        this.readyGoTip.loadImage("res/imgs/GO.png");
        this.readyGoTip.alpha = 0;
        this.readyGoTip.width = 160;
        this.readyGoTip.pos(Laya.stage.width/2-80, 211);
        this.addChild(this.readyGoTip);


        this.countDownTxt = new Text();
        this.countDownTxt.fontSize = 22;
        this.countDownTxt.color = "#FFFFFF";
        this.countDownTxt.alpha = 0;
        this.countDownTxt.x = 725;
        this.countDownTxt.y = 47;
        this.countDownTxt.width = 50;
        let count = parseInt((this.countDown/60%60).toString())
        let time = "00:"+"0"+(count==0?"0":count)+":"+(this.countDown-60<0?(this.countDown<10?"0"+this.countDown:this.countDown):(this.countDown-60<10?"0"+(this.countDown-60):(this.countDown-60)))
        this.countDownTxt.text = time;
        this.addChild(this.countDownTxt);


        // test animation
        // var a_container = new s

        // this.scoreObj.totalScore = 0;
        // this.scoreTxt = new Text();
        // this.scoreTxt.font = "Impact";
        // this.scoreTxt.fontSize = 50;
        // this.scoreTxt.color = "#21D4A1";
        // this.scoreTxt.x = 794;
        // this.scoreTxt.y = 10;
        // this.scoreTxt.width = 80;
        // this.scoreTxt.align = 'center';
        // this.scoreTxt.text = this.scoreObj.totalScore.toString();
        // this.addChild(this.scoreTxt);
    }

    setCountDown () :void {
        Laya.timer.loop(1000, this, countDownHandler);

        function countDownHandler() {
            this.countDown--;
            let count = parseInt((this.countDown/60%60).toString())
            let time = "00:"+"0"+(count==0?"0":count)+":"+(this.countDown-60<0?(this.countDown<10?"0"+this.countDown:this.countDown):(this.countDown-60<10?"0"+(this.countDown-60):(this.countDown-60)))
            this.countDownTxt.text = time;
            if (this.countDown == 0) {
                Laya.timer.clear(this, countDownHandler);
                this.event("End_Game_Event");
            }
        }
    }

    jump (flag):void{
        var textureUrl: string = flag ? this.texture1 : this.texture2;
        this.lawnTip.graphics.clear();
        console.log('=============this.lawnTip=============')
        console.log(this.lawnTip)
        var texture: Texture = Laya.loader.getRes(textureUrl);
        this.lawnTip.width = 209;
        this.lawnTip.height = 81;
        this.lawnTip.graphics.drawTexture(texture, 0, 0);
        

        var textureUrl2: string = flag ? this.jump1 : this.jump2;
        this.jumpbtn.graphics.clear();
        var texture2: Texture = Laya.loader.getRes(textureUrl2);
        this.jumpbtn.graphics.drawTexture(texture2, 0, 0);
    }
    stop (e: Event):void{
        e.stopPropagation();
        this.event("Stop_Game_Event");
    }
    restart (e: Event):void{
        e.stopPropagation();
        window.location.reload();
    }
    setScore (addScore) :void {
        this.scoreObj.totalScore += addScore;
        // this.scoreTxt.text = this.scoreObj.totalScore.toString();
    }
    
    getScore () :any {
        return this.scoreObj;
    }

    countComboTotalScore () :void{
        if(this.scoreObj.comboMax > 0) {
            this.scoreObj.comboMax--;
        }
        this.scoreObj.totalScore += this.scoreObj.comboMax * 10;
        // this.scoreTxt.text = this.scoreObj.totalScore.toString();
    }

    showPlayTip (addScore):void {
        if (addScore == 20) {
            this.scoreObj.fantastic++;
            this.showTip(this.perfectTip);
            this.jumpChippyTest(this.chippy);
            // this.jumpChippy(this.chippy);
        } else if (addScore == 10) {
            this.scoreObj.perfect++;
            this.showTip(this.greatTip);
            this.jumpChippyTest(this.chippy);
            // this.jumpChippy(this.chippy);
        } else if (addScore == 5) {
            this.scoreObj.good++;
            this.showTip(this.rightTip);
            this.jumpChippyTest(this.chippy);
            // this.jumpChippy(this.chippy);
        } else if (addScore == 0) {
            this.scoreObj.miss++;
            this.comboCount = 0;
            this.showTip(this.missTip);
        } else if (addScore == -1) {
            this.scoreObj.bad++;
            this.comboCount = 0;
            this.showTip(this.badTip);
            this.getShotTest(this.syrup)
            // this.getShot(this.syrup)
        }
        this.setScore(addScore == -1 ? 0:addScore);
    }

    showTip (newTip):void {

        if (this.lastTip) {
            Tween.clearAll(this.lastTip)
            this.lastTip.alpha = 0;
            this.lastTip.scaleX = 0.4;
            this.lastTip.scaleY = 0.4;
        }

        var handler = new Handler(this.lastTip, function () {
            Tween.to(newTip, {alpha: 0, y: 790}, 100, null, null, 250);
        });

        newTip.scaleX = 0.4;
        newTip.scaleY = 0.4;
        newTip.y = (Laya.stage.height) / 2-150;
        newTip.alpha = 0;
        Tween.to(newTip, {alpha: 1, scaleX: 1, scaleY: 1}, 100, null, handler);
        this.lastTip = newTip;

    }
    getShot (newTip):void {
        if (this.slastTip) {
            Tween.clearAll(this.slastTip)
            this.slastTip.alpha = 0;
            this.slastTip.scaleX = 0.4;
            this.slastTip.scaleY = 0.4;
        }
        var handler = new Handler(this.slastTip, function () {
            Tween.to(newTip, {alpha: 0}, 100, null, null, 250);
        });
        newTip.scaleX = 0.4;
        newTip.scaleY = 0.4;
        // newTip.y = (Laya.stage.height) / 2-200;
        newTip.alpha = 0;
        // Tween.to(newTip, {alpha: 1, scaleX: 1, scaleY: 1}, 100, null, handler);
        this.slastTip = newTip;

       

    }
    getShotTest(newTip):void{

        if (this.slastTip) {
            Tween.clearAll(this.slastTip)
            this.slastTip.alpha = 0;
            this.slastTip.scaleX = 0.4;
            this.slastTip.scaleY = 0.4;
        }
        var handler = new Handler(this.slastTip, function () {
            Tween.to(newTip, {alpha: 0}, 100, null, null, 250);
        });
        newTip.scaleX = 0.4;
        newTip.scaleY = 0.4;
        newTip.alpha = 0;
        this.slastTip = newTip;

        var snail_An = new Animation();
        snail_An.x = 0;
        snail_An.y = 0;
        snail_An.loadAnimation("jump/snail.ani");
        snail_An.play(1, true);        
        this.addChild(snail_An);
        setTimeout(() => {
            snail_An.removeSelf()
        }, 540);
    }
    jumpChippyTest(newTip): void{
        if (this.clastTip) {
            Tween.clearAll(this.clastTip)
            this.clastTip.alpha = 0;
            this.clastTip.scaleX = 0.4;
            this.clastTip.scaleY = 0.4;
        }
        var handler = new Handler(this.clastTip, function () {
            Tween.to(newTip, {alpha: 0, x: 1190}, 100, null, null, 250);
        });
        newTip.scaleX = 0.4;
        newTip.scaleY = 0.4;
        newTip.alpha = 0;
        this.clastTip = newTip;

        var squirrel_An = new Animation();
        squirrel_An.x = 0;
        squirrel_An.y = 0;
        squirrel_An.loadAnimation("jump/squirrel.ani");
        squirrel_An.play(1, true);        
        this.addChild(squirrel_An);
        setTimeout(() => {
            squirrel_An.removeSelf()
        }, 640);
    }
    jumpChippy (newTip): void {
        if (this.clastTip) {
            Tween.clearAll(this.clastTip)
            this.clastTip.alpha = 0;
            this.clastTip.scaleX = 0.4;
            this.clastTip.scaleY = 0.4;
        }
        var handler = new Handler(this.clastTip, function () {
            Tween.to(newTip, {alpha: 0, x: 1190}, 100, null, null, 250);
        });
        newTip.scaleX = 0.4;
        newTip.scaleY = 0.4;
        newTip.alpha = 0;
        newTip.pos(780,195);
        Tween.to(newTip, {alpha: 1, scaleX: 1, scaleY: 1}, 100, null, handler);
        this.clastTip = newTip;
    }
    startGo (e:Event): void {
        e.stopPropagation();        
        this.topBanTip.alpha = 0;
        this.titleTxt.alpha = 0;
        this.startGoTip.alpha = 0;
        this.startGoTxt.alpha = 0;
        this.topBanTip.y = 1000;
        this.startGoTip.y = 1000;
        this.timeTip.alpha = 1;
        this.restartTip.alpha = 1;
        // this.stopTip.alpha = 1;
        this.countDownTxt.alpha = 1;        
        this.readyGO();
    }
    readyGO ():void {
        var timeLine = new TimeLine();
        Sound321.autoStopMusic = true;
        Sound321.soundVolume = 3;
        Sound321.playMusic("sound/321.mp3", 1)
        // this.music321 = Sound321.playMusic("sound/321readyGO.mp3", 1)
        timeLine.addLabel("ready3", 0).to(this.ready3Tip, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
                .addLabel("ready3", 0).to(this.ready3Tip, {alpha: 0}, 500, null, 0)
                .addLabel("ready2", 0).to(this.ready2Tip, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
                .addLabel("ready2", 0).to(this.ready2Tip, {alpha: 0}, 500, null, 0)
                .addLabel("ready1", 0).to(this.ready1Tip, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
                .addLabel("ready1", 0).to(this.ready1Tip, {alpha: 0}, 500, null, 0)
                .addLabel("ready", 0).to(this.readyTip, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
                .addLabel("ready", 0).to(this.readyTip, {alpha: 0}, 500, null, 0)
                .addLabel("readyGO", 0).to(this.readyGoTip, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
                .addLabel("readyGO", 0).to(this.readyGoTip, {alpha: 0}, 500, null, 0)
        // timeLine
        //     .addLabel("ready3", 0).to(this.ready3Tip, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
        //     .addLabel("ready3", 0).to(this.ready3Tip, {alpha: 0}, 500, null, 0)
        //     .addLabel("ready2", 0).to(this.ready2Tip, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
        //     .addLabel("ready2", 0).to(this.ready2Tip, {alpha: 0}, 500, null, 0)
        //     .addLabel("ready1", 0).to(this.ready1Tip, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
        //     .addLabel("ready1", 0).to(this.ready1Tip, {alpha: 0}, 500, null, 0)
        //     .addLabel("ready", 0).to(this.readyTip, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
        //     .addLabel("ready", 0).to(this.readyTip, {alpha: 0}, 500, null, 0)
        //     .addLabel("readyGO", 0).to(this.readyGoTip, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
        //     .addLabel("readyGO", 0).to(this.readyGoTip, {alpha: 0}, 500, null, 0)
        timeLine.play(0, false);
        timeLine.on(Event.LABEL, this, onLabel);
        timeLine.on(Event.COMPLETE, this, onComplete);

        function onLabel(label) {
            if (label == "readyOut") {
                timeLine.pause();
                setTimeout(function () {
                    timeLine.resume();
                }, 500);
            }
        }

        function onComplete() {
            timeLine.destroy();
            this.setCountDown();
            this.event("Start_Game_Event");
        }
    }
}