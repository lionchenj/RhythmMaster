import Sprite = Laya.Sprite;
import Event = Laya.Event;
import Handler = Laya.Handler;
import TimeLine = Laya.TimeLine;
import Text = Laya.Text;
import Tween = Laya.Tween;
import Sound321 = Laya.SoundManager;
var that;
export default class tips extends Laya.Sprite {


    private perfectTip:Laya.Sprite;
    private greatTip:Laya.Sprite;
    private rightTip:Laya.Sprite;
    private missTip:Laya.Sprite;
    private badTip:Laya.Sprite;

    private timeTip:Laya.Sprite;
    private restartTip:Laya.Sprite;
    private topBanTip:Laya.Sprite;
    private titleTxt:Laya.Text;
    private startGoTip:Laya.Sprite;
    private startGoTxt:Laya.Text;
    

    private ready1Tip:Laya.Sprite;
    private ready2Tip:Laya.Sprite;
    private ready3Tip:Laya.Sprite;
    private readyTip:Laya.Sprite;
    private readyGoTip:Laya.Sprite;
    private countDownTxt:Laya.Text;//倒计时文本

    private scoreTxt;

    private allScore = 0;

    private lastTip;

    private countDown = 60;
    private countDown2 = 60;

    private scoreObj = {
        perfect: 0,
        good: 0,
        right: 0,
        miss: 0,
        bad: 0,
        obstacle: 0,
        totalScore: 0
    };
    constructor(thats) {
        super()
        that = thats
        this.initTips()
    }

    initTips () :void {
        

        this.badTip = new Sprite();
        this.badTip.loadImage("res/imgs/bad.png");
        this.badTip.alpha = 0;
        this.badTip.width = 160;
        this.badTip.height = 83;
        this.badTip.pivot(80, 40);
        this.badTip.pos((Laya.stage.width) / 2, (Laya.stage.height) / 2-50);
        this.addChild(this.badTip);

        this.missTip = new Sprite();
        this.missTip.loadImage("res/imgs/miss.png");
        this.missTip.alpha = 0;
        this.missTip.pivot(65, 25);
        this.missTip.pos((Laya.stage.width) / 2, (Laya.stage.height) / 2-50);
        this.addChild(this.missTip);

        this.rightTip = new Sprite();
        this.rightTip.loadImage("res/imgs/right.png");
        this.rightTip.alpha = 0;
        this.rightTip.pivot(60, 30);
        this.rightTip.pos((Laya.stage.width) / 2, (Laya.stage.height) / 2-50);
        this.addChild(this.rightTip);

        this.greatTip = new Sprite();
        this.greatTip.loadImage("res/imgs/great.png");
        this.greatTip.alpha = 0;
        this.greatTip.pivot(70, 30);
        this.greatTip.pos((Laya.stage.width) / 2, (Laya.stage.height) / 2-50);
        this.addChild(this.greatTip);

        this.perfectTip = new Sprite();
        this.perfectTip.loadImage("res/imgs/perfect.png");
        this.perfectTip.alpha = 0;
        this.perfectTip.width = 435;
        this.perfectTip.height = 190;
        this.perfectTip.pivot(215, 95);
        this.perfectTip.pos((Laya.stage.width) / 2, (Laya.stage.height) / 2-50);
        this.addChild(this.perfectTip);

        this.timeTip = new Sprite();
        this.timeTip.loadImage("res/imgs/time.png");
        this.timeTip.width = 250;
        this.timeTip.height = 55;
        this.timeTip.alpha = 0;
        this.timeTip.pos(600, 45);
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
        this.restartTip.width = 60;
        this.restartTip.height = 60;
        this.restartTip.pos(880, 50);
        this.addChild(this.restartTip);
        this.restartTip.on(Event.MOUSE_DOWN, this, this.restart)

        this.topBanTip = new Sprite();
        this.topBanTip.loadImage("res/imgs/topBan.png");
        this.topBanTip.pos(330, 0);
        this.topBanTip.width = 320;
        this.topBanTip.height = 145;
        this.addChild(this.topBanTip);
        this.titleTxt = new Text();
        this.titleTxt.fontSize = 34;
        this.titleTxt.color = "#FFFFFF";
        this.titleTxt.pos(420, 85)
        this.titleTxt.width = 50;
        this.titleTxt.text = "跟随节奏";
        this.addChild(this.titleTxt);

        this.startGoTip = new Sprite();
        this.startGoTip.loadImage("res/imgs/buttonStart.png");
        this.startGoTip.pos(370, 280);
        this.startGoTip.width = 240;
        this.startGoTip.height = 80;
        this.addChild(this.startGoTip);
        this.startGoTip.on(Event.MOUSE_DOWN, this, this.startGo)
        this.startGoTxt = new Text();
        this.startGoTxt.fontSize = 27;
        this.startGoTxt.color = "#000000";
        this.startGoTxt.pos(430, 310)
        this.startGoTxt.width = 50;
        this.startGoTxt.text = "开始游戏";
        this.addChild(this.startGoTxt);

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
        this.readyTip = new Sprite();
        this.readyTip.loadImage("res/imgs/ready.png");
        this.readyTip.alpha = 0;
        this.readyTip.height = 135;
        this.readyTip.pos(Laya.stage.width/2-180, Laya.stage.height/2-120);
        this.addChild(this.readyTip);
        this.readyGoTip = new Sprite();
        this.readyGoTip.loadImage("res/imgs/GO.png");
        this.readyGoTip.alpha = 0;
        this.readyGoTip.height = 135;
        this.readyGoTip.pos(Laya.stage.width/2-150, Laya.stage.height/2-120);
        this.addChild(this.readyGoTip);

        this.countDownTxt = new Text();
        this.countDownTxt.fontSize = 22;
        this.countDownTxt.color = "#FFFFFF";
        this.countDownTxt.alpha = 0;
        this.countDownTxt.x = 690;
        this.countDownTxt.y = 65;
        this.countDownTxt.width = 50;
        let count = parseInt((this.countDown/60%60).toString())
        let time = "0"+(count==0?"0":count)+":"+(this.countDown-60<0?(this.countDown<10?"0"+this.countDown:this.countDown):(this.countDown-60<10?"0"+(this.countDown-60):(this.countDown-60)))+"/"+"0"+(count==0?"0":count)+":"+(this.countDown2-60<0?(this.countDown2<10?"0"+this.countDown2:this.countDown2):(this.countDown2-60<10?"0"+(this.countDown2-60):(this.countDown2-60)))
        this.countDownTxt.text = time;
        this.addChild(this.countDownTxt);

        this.scoreObj.totalScore = 0;
        this.scoreTxt = new Text();
        this.scoreTxt.font = "Impact";
        this.scoreTxt.fontSize = 50;
        this.scoreTxt.color = "#21D4A1";
        this.scoreTxt.x = 794;
        this.scoreTxt.y = 10;
        this.scoreTxt.width = 80;
        this.scoreTxt.align = 'center';
        this.scoreTxt.text = this.scoreObj.totalScore.toString();
        // this.scoreTxt.text = '67';
        this.addChild(this.scoreTxt);
    }

    setCountDown () :void {
        Laya.timer.loop(1000, this, countDownHandler);

        function countDownHandler() {
            this.countDown--;
            let count = parseInt((this.countDown/60%60).toString())
            let count2 = parseInt((this.countDown2/60%60).toString())
            let time = "0"+(count==0?"0":count)+":"+(this.countDown-60<0?(this.countDown<10?"0"+this.countDown:this.countDown):(this.countDown-60<10?"0"+(this.countDown-60):(this.countDown-60)))+"/"+"0"+(count2==0?"0":count2)+":"+(this.countDown2-60<0?(this.countDown2<10?"0"+this.countDown2:this.countDown2):(this.countDown2-60<10?"0"+(this.countDown2-60):(this.countDown2-60)))
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
            that.http.source.postMessage(JSON.stringify({name:'IngRestartGame',data:{}}),that.http.origin);
        window.localStorage.setItem('level','0')
        Laya.timer.clearAll(that);
        that.GameManager();
        // window.location.reload();
    }
    setScore (addScore) :void {
        this.scoreObj.totalScore += addScore;
        // this.scoreObj.totalScore = parseInt((this.scoreObj.totalScore).toFixed(1))
        this.scoreTxt.text = parseInt((this.scoreObj.totalScore).toFixed(1)).toString();
    }
    
    getScore () :any {
        return this.scoreObj;
    }

    // countComboTotalScore () :void{
    //     if(this.scoreObj.comboMax > 0) {
    //         this.scoreObj.comboMax--;
    //     }
    //     this.scoreObj.totalScore += this.scoreObj.comboMax * 10;
    // }

    showPlayTip (addScore):void {
        var dangeScore:number = 0;
        this.scoreObj.obstacle++;
        if (addScore == 20) {
            this.scoreObj.perfect++;
            dangeScore = parseFloat((100/that.gouziLength).toFixed(1))
            this.showTip(this.perfectTip);
        } else if (addScore == 10) {
            this.scoreObj.good++;
            dangeScore = parseFloat(((100/that.gouziLength)*0.8).toFixed(1))
            this.showTip(this.greatTip);
        } else if (addScore == 5) {
            this.scoreObj.right++;
            dangeScore = parseFloat(((100/that.gouziLength)*0.5).toFixed(1))
            // this.allScore += (thats.length/100)*0.5
            this.showTip(this.rightTip);
        } else if (addScore == 0) {
            this.scoreObj.miss++;
            this.showTip(this.missTip);
        } else if (addScore == -1) {
            this.scoreObj.bad++;
            this.showTip(this.badTip);
        }
        // this.setScore(addScore == -1 ? 0:addScore);
        this.setScore(dangeScore);
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
        Tween.to(newTip, {alpha: 1, scaleX: 1, scaleY: 1}, 400, null, handler);
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
        if(this.damo()){
            this.readyGO();
        }
    }
    damo ():boolean {
        if(window.localStorage.getItem('damo')){
            return true
        }
        window.localStorage.setItem('damo','1');
        Laya.stage.timer.once(3000,this,()=>{
            this.readyGO();
        })
    }
    readyGO ():void {
        var timeLine = new TimeLine();
        Sound321.autoStopMusic = true;
        Sound321.soundVolume = 3;
        Sound321.playMusic("sound/321.mp3", 1)
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
            setTimeout(() => {
                this.setCountDown();
            }, 500);
            this.event("Start_Game_Event");
        }
    }
}