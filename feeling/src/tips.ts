import Sprite = Laya.Sprite;
import Event = Laya.Event;
import Handler = Laya.Handler;
import TimeLine = Laya.TimeLine;
import Text = Laya.Text;
import Tween = Laya.Tween;
import Sound321 = Laya.SoundManager;
export default class tips extends Laya.Sprite {

    private perfectTip:Laya.Sprite;
    private greatTip:Laya.Sprite;
    private rightTip:Laya.Sprite;
    private missTip:Laya.Sprite;
    private badTip:Laya.Sprite;

    private timeTip:Laya.Sprite;
    private stopTip:Laya.Sprite;
    private restartTip:Laya.Sprite;
    private playTip:Laya.Sprite;
    private topBanTip:Laya.Sprite;
    private titleTxt:Laya.Text;
    private startGoTip:Laya.Sprite;
    private startGoTxt:Laya.Text;
    

    private readyTxt3:Laya.Text;//连击文本
    private readyTxt2:Laya.Text;//连击文本
    private readyTxt1:Laya.Text;//连击文本
    private comboTxt:Laya.Text;//连击文本
    private countDownTxt:Laya.Text;//倒计时文本
    private scoreTxt:Laya.Text;//分数文本

    private lastTip;

    private comboCount = 0;
    private countDown = 30;
    private ready3 = 3;
    private ready2 = 2;
    private ready1 = 1;
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
    constructor() {
        super()
        this.initTips()
    }

    initTips () :void {
        
        this.perfectTip = new Sprite();
        this.perfectTip.loadImage("res/imgs/perfect.png");
        this.perfectTip.alpha = 0;
        this.perfectTip.pivot(221, 66);
        this.perfectTip.pos((Laya.stage.width) / 2, (Laya.stage.height) / 2);
        this.addChild(this.perfectTip);

        this.greatTip = new Sprite();
        this.greatTip.loadImage("res/imgs/great.png");
        this.greatTip.alpha = 0;
        this.greatTip.pivot(221, 66);
        this.greatTip.pos((Laya.stage.width) / 2, (Laya.stage.height) / 2);
        this.addChild(this.greatTip);

        this.rightTip = new Sprite();
        this.rightTip.loadImage("res/imgs/right.png");
        this.rightTip.alpha = 0;
        this.rightTip.pivot(221, 66);
        this.rightTip.pos((Laya.stage.width) / 2, (Laya.stage.height) / 2);
        this.addChild(this.rightTip);

        this.badTip = new Sprite();
        this.badTip.loadImage("res/imgs/bad.png");
        this.badTip.alpha = 0;
        this.badTip.pivot(172, 66);
        this.badTip.pos((Laya.stage.width) / 2, (Laya.stage.height) / 2);
        this.addChild(this.badTip);

        this.missTip = new Sprite();
        this.missTip.loadImage("res/imgs/miss.png");
        this.missTip.alpha = 0;
        this.missTip.pivot(163, 66);
        this.missTip.pos((Laya.stage.width) / 2, 820);
        this.addChild(this.missTip);

        this.timeTip = new Sprite();
        this.timeTip.loadImage("res/imgs/time.png");
        this.timeTip.alpha = 0;
        this.timeTip.pos(480, 30);
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
        this.restartTip.pos(850, 50);
        this.addChild(this.restartTip);
        this.restartTip.on(Event.MOUSE_DOWN, this, this.restart)

        this.topBanTip = new Sprite();
        this.topBanTip.loadImage("res/imgs/topBan.png");
        this.topBanTip.pos(330, 0);
        this.addChild(this.topBanTip);
        this.titleTxt = new Text();
        this.titleTxt.font = "Impact";
        this.titleTxt.fontSize = 40;
        this.titleTxt.color = "#FFFFFF";
        this.titleTxt.pos(440, 95)
        this.titleTxt.width = 50;
        this.titleTxt.text = "跟随节奏";
        this.addChild(this.titleTxt);

        this.startGoTip = new Sprite();
        this.startGoTip.loadImage("res/imgs/buttonStart.png");
        this.startGoTip.pos(370, 280);
        this.addChild(this.startGoTip);
        this.startGoTip.on(Event.MOUSE_DOWN, this, this.startGo)
        this.startGoTxt = new Text();
        this.startGoTxt.font = "Impact";
        this.startGoTxt.fontSize = 50;
        this.startGoTxt.color = "#000000";
        this.startGoTxt.pos(410, 305)
        this.startGoTxt.width = 50;
        this.startGoTxt.text = "开始游戏";
        this.addChild(this.startGoTxt);

        this.readyTxt3 = new Text();
        this.readyTxt3.font = "Impact";
        this.readyTxt3.fontSize = 50;
        this.readyTxt3.color = "#000000";
        this.readyTxt3.alpha = 0;
        this.readyTxt3.x = 500;
        this.readyTxt3.y = 300;
        this.readyTxt3.pivot(25,25);        
        this.readyTxt3.width = 50;
        this.readyTxt3.height = 50;
        this.readyTxt3.text = this.ready3.toString();
        this.addChild(this.readyTxt3);
        this.readyTxt2 = new Text();
        this.readyTxt2.font = "Impact";
        this.readyTxt2.fontSize = 50;
        this.readyTxt2.color = "#000000";
        this.readyTxt2.alpha = 0;
        this.readyTxt2.x = 500;
        this.readyTxt2.y = 300;
        this.readyTxt2.pivot(25,25);        
        this.readyTxt2.width = 50;
        this.readyTxt2.height = 50;
        this.readyTxt2.text = this.ready2.toString();
        this.addChild(this.readyTxt2);
        this.readyTxt1 = new Text();
        this.readyTxt1.font = "Impact";
        this.readyTxt1.fontSize = 50;
        this.readyTxt1.alpha = 0;
        this.readyTxt1.color = "#000000";
        this.readyTxt1.x = 500;
        this.readyTxt1.y = 300;
        this.readyTxt1.pivot(25,25);        
        this.readyTxt1.width = 50;
        this.readyTxt1.height = 50;
        this.readyTxt1.text = this.ready1.toString();
        this.addChild(this.readyTxt1);

        this.countDownTxt = new Text();
        this.countDownTxt.fontSize = 30;
        this.countDownTxt.color = "#FFFFFF";
        this.countDownTxt.alpha = 0;
        this.countDownTxt.x = 590;
        this.countDownTxt.y = 55;
        this.countDownTxt.width = 50;
        let count = parseInt((this.countDown/60%60).toString())
        let time = "00:"+"0"+(count==0?"0":count)+":"+(this.countDown-60<0?(this.countDown<10?"0"+this.countDown:this.countDown):(this.countDown-60<10?"0"+(this.countDown-60):(this.countDown-60)))
        this.countDownTxt.text = time;
        this.addChild(this.countDownTxt);

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

    play (e: Event):void{
        e.stopPropagation();
        this.event("Play_Game_Event"); 
        
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
        } else if (addScore == 10) {
            this.scoreObj.perfect++;
            this.showTip(this.greatTip);
        } else if (addScore == 5) {
            this.scoreObj.good++;
            this.showTip(this.rightTip);
        } else if (addScore == 0) {
            this.scoreObj.miss++;
            this.comboCount = 0;
            this.showTip(this.missTip);
        } else if (addScore == -1) {
            this.scoreObj.bad++;
            this.comboCount = 0;
            this.showTip(this.badTip);
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
        newTip.y = (Laya.stage.height) / 2;
        newTip.alpha = 0;
        Tween.to(newTip, {alpha: 1, scaleX: 1, scaleY: 1}, 100, null, handler);
        this.lastTip = newTip;

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
        this.music321 = Sound321.playMusic("sound/321.mp3", 1)
        timeLine.addLabel("ready3", 0).to(this.readyTxt3, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
            .addLabel("ready3", 0).to(this.readyTxt3, {scaleX: 3, scaleY: 3, alpha: 0}, 500, null, 0)
            .addLabel("ready2", 0).to(this.readyTxt2, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
            .addLabel("ready2", 0).to(this.readyTxt2, {scaleX: 3, scaleY: 3, alpha: 0}, 500, null, 0)
            .addLabel("ready1", 0).to(this.readyTxt1, {scaleX: 1, scaleY: 1, alpha: 1}, 500, null, 0)
            .addLabel("readyOut", 0).to(this.readyTxt1, {scaleX: 3, scaleY: 3, alpha: 0}, 500, null, 0)
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
            this.readyTxt1.alpha = 0;
            this.setCountDown();
            this.event("Start_Game_Event");
        }
    }
}