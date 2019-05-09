import Sprite = Laya.Sprite;
import Event = Laya.Event;
import Handler = Laya.Handler;
import TimeLine = Laya.TimeLine;
import Text = Laya.Text;
import Tween = Laya.Tween;
import Animation = Laya.Animation;
import Sound321 = Laya.SoundManager;
var that,timeLine,is321 = true,isclick = false;
export default class tips extends Laya.Sprite {


    private perfectTip:Laya.Sprite;
    private greatTip:Laya.Sprite;
    private rightTip:Laya.Sprite;
    private missTip:Laya.Sprite;
    private badTip:Laya.Sprite;
    private long:Laya.Animation;

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
    private gamePanel;
    private lastTip;

    private countDown = 0;
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
    constructor(thats,gamePanel) {
        super()
        this.gamePanel = gamePanel;
        that = thats
        this.countDown2 = parseInt((thats.data.musicDuration / 1000).toString());
        // this.countDown2 = 55;
        this.initTips();
    }

    initTips () :void {
        this.badTip = new Sprite();
        this.badTip.loadImage("res/imgs/bad.png");
        this.badTip.alpha = 0;
        this.badTip.width = 510;
        this.badTip.height = 222;
        this.badTip.pivot(255, 111);
        this.badTip.pos(504, Laya.stage.height/ 2-20);
        this.addChild(this.badTip);

        this.missTip = new Sprite();
        this.missTip.loadImage("res/imgs/miss.png");
        this.missTip.alpha = 0;
        this.missTip.width = 510;
        this.missTip.height = 222;
        this.missTip.pivot(255, 111);
        this.missTip.pos(504, Laya.stage.height/ 2-20);
        this.addChild(this.missTip);

        // this.rightTip = new Sprite();
        // this.rightTip.loadImage("res/imgs/right.png");
        // this.rightTip.alpha = 0;
        // this.rightTip.pivot(60, 30);
        // this.rightTip.pos(504, (Laya.stage.height) / 2);
        // this.addChild(this.rightTip);

        // this.greatTip = new Sprite();
        // this.greatTip.loadImage("res/imgs/great.png");
        // this.greatTip.alpha = 0;
        // this.greatTip.pivot(70, 30);
        // this.greatTip.pos(504, (Laya.stage.height) / 2);
        // this.addChild(this.greatTip);

        this.perfectTip = new Sprite();
        this.perfectTip.loadImage("res/imgs/perfect.png");
        this.perfectTip.alpha = 0;
        this.perfectTip.width = 510;
        this.perfectTip.height = 222;
        this.perfectTip.pivot(255, 111);
        this.perfectTip.pos(504, Laya.stage.height / 2-20);
        this.addChild(this.perfectTip);

        this.topBanTip = new Sprite();
        this.topBanTip.loadImage("res/imgs/topBan.png");
        this.topBanTip.width = 320;
        this.topBanTip.height = 145;
        this.topBanTip.pivot(160, 0); 
        this.topBanTip.pos(504, 0);
        this.addChild(this.topBanTip);
        this.titleTxt = new Text();
        this.titleTxt.fontSize = 34;
        this.titleTxt.color = "#FFFFFF";
        this.titleTxt.width = 320;
        this.titleTxt.y = 85;
        this.titleTxt.align = 'center';
        this.titleTxt.text = "跟随节奏";
        this.topBanTip.addChild(this.titleTxt);

        this.startGoTip = new Sprite();
        this.startGoTip.loadImage("res/imgs/buttonStart.png");
        this.startGoTip.width = 240;
        this.startGoTip.height = 80;
        this.startGoTip.pivot(120, 0); 
        this.startGoTip.pos(504, 280);
        this.addChild(this.startGoTip);
        this.startGoTip.on(Event.MOUSE_DOWN, this, this.startGo)
        // this.startGoTxt = new Text();
        // this.startGoTxt.fontSize = 27;
        // this.startGoTxt.color = "#000000";
        // this.startGoTxt.width = 240;
        // this.startGoTxt.y = 26;
        // this.startGoTxt.align = 'center';
        // this.startGoTxt.text = "开始游戏";
        // this.startGoTip.addChild(this.startGoTxt);

        this.ready3Tip = new Sprite();
        this.ready3Tip.loadImage("res/imgs/CountDown3.png");
        this.ready3Tip.alpha = 0;
        this.ready3Tip.pivot(45, 0); 
        this.ready3Tip.height = 135;
        this.ready3Tip.pos(504, Laya.stage.height/2-120);
        this.addChild(this.ready3Tip);
        this.ready2Tip = new Sprite();
        this.ready2Tip.loadImage("res/imgs/CountDown2.png");
        this.ready2Tip.alpha = 0;
        this.ready2Tip.pivot(46.5, 0); 
        this.ready2Tip.height = 135;
        this.ready2Tip.pos(504, Laya.stage.height/2-120);
        this.addChild(this.ready2Tip);
        this.ready1Tip = new Sprite();
        this.ready1Tip.loadImage("res/imgs/CountDown1.png");
        this.ready1Tip.alpha = 0;
        this.ready1Tip.pivot(33.5, 0); 
        this.ready1Tip.height = 135;
        this.ready1Tip.pos(504, Laya.stage.height/2-120);
        this.addChild(this.ready1Tip);
        this.readyTip = new Sprite();
        this.readyTip.loadImage("res/imgs/ready.png");
        this.readyTip.alpha = 0;
        this.readyTip.pivot(150, 0); 
        this.readyTip.height = 135;
        this.readyTip.pos(504, Laya.stage.height/2-120);
        this.addChild(this.readyTip);
        this.readyGoTip = new Sprite();
        this.readyGoTip.loadImage("res/imgs/GO.png");
        this.readyGoTip.alpha = 0;
        this.readyGoTip.pivot(150, 0); 
        this.readyGoTip.height = 135;
        this.readyGoTip.pos(504, Laya.stage.height/2-120);
        this.addChild(this.readyGoTip);


        
        // this.scoreTxt = new Text();
        // this.scoreTxt.font = "Impact";
        // this.scoreTxt.fontSize = 70;
        // this.scoreTxt.color = "#21D4A1";
        // this.scoreTxt.width = 1380;
        // this.scoreTxt.pivot(25, 0); 
        // this.scoreTxt.pos(504, 20);
        // this.scoreTxt.alpha = 0;
        // this.scoreTxt.text = this.scoreObj.totalScore.toString();
        // this.addChild(this.scoreTxt);
    }

    setCountDown () :void {
        Laya.timer.loop(1000, this, countDownHandler);

        function countDownHandler() {
            if(this.countDown == (this.countDown2-5)){
                this.restartTip.destroy();
            }
            this.countDown++;
            let count = parseInt((this.countDown/60%60).toString())
            let count2 = parseInt((this.countDown2/60%60).toString())
            let time = "0"+(count==0?"0":count)+":"+(this.countDown-count*60<0?(this.countDown<10?"0"+this.countDown:this.countDown):(this.countDown-count*60<10?"0"+(this.countDown-count*60):(this.countDown-count*60)))+"/"+"0"+(count2==0?"0":count2)+":"+(this.countDown2-count2*60<0?(this.countDown2<10?"0"+this.countDown2:this.countDown2):(this.countDown2-count2*60<10?"0"+(this.countDown2-count2*60):(this.countDown2-count2*60)))
            this.countDownTxt.text = time;
            if (this.countDown == this.countDown2) {
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
        if(isclick){
            return;
        }
        isclick = true;
        window.parent.postMessage({name:'ingRestartGame',data:{}},'*');
        Laya.timer.clearAll(this);
        if(timeLine&&is321){
            timeLine.off(Event.COMPLETE, this, ()=>{});
            timeLine.pause();
            timeLine.destroy();
        }
        is321 = true;        
        Laya.SoundManager.stopAll();
        for(let i of that.screenLetterBoxArr){
            i.moveTween.pause();
            i.destroy();
        }
        Laya.timer.clearAll(that);
        this.gamePanel.destroy();
        setTimeout(() => {
            that.GameManager();
        }, 500);
    }
    setScore (addScore) :void {
        this.scoreObj.totalScore += addScore;
        // this.scoreTxt.text = parseInt((this.scoreObj.totalScore).toFixed(1)).toString();
    }
    
    getScore () :any {
        return this.scoreObj;
    }

    showPlayTip (addScore):void {
        var dangeScore:number = 0;
        this.scoreObj.obstacle++;
        if (addScore == 20) {
            Laya.SoundManager.playSound("sound/beat.mp3", 1);
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
            this.showTip(this.rightTip);
        } else if (addScore == 0) {
            Laya.SoundManager.playSound("sound/button.mp3", 1);
            this.scoreObj.miss++;
            this.showTip(this.missTip);
        } else if (addScore == -1) {
            Laya.SoundManager.playSound("sound/bad.mp3", 1);
            this.scoreObj.bad++;
            this.showTip(this.badTip);
        }
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
            Tween.to(newTip, {alpha: 0,}, 100, null, null, 250);
        });

        newTip.scaleX = 0.4;
        newTip.scaleY = 0.4;
        newTip.y = (Laya.stage.height) / 2;
        newTip.alpha = 0;
        Tween.to(newTip, {alpha: 1, scaleX: 1, scaleY: 1}, 400, null, handler);
        this.lastTip = newTip;

    }
    startGo (e:Event): void {
        isclick = false;
        e.stopPropagation();        
        this.topBanTip.alpha = 0;
        this.titleTxt.alpha = 0;
        this.startGoTip.alpha = 0;
        this.topBanTip.y = 1000;
        this.startGoTip.y = 1000;
        let _that = this;
        this.long = new Animation();
        // this.long.loadAnimation("ani/"+that.typeLVL+".ani");
        this.long.loadAnimation("ani/type1.ani");
        this.long.width = 1008;
        this.long.height = 640;
        this.long.pivot(504, 0); 
        this.long.pos(504, 0);
        this.long.play(0, false);     
        setTimeout(() => {
            Laya.SoundManager.playMusic(that.data.explainAudioUrl, 1,handler)
            _that.long.loadAnimation("ani/type11.ani");
            _that.long.width = 1008;
            _that.long.height = 640;
            _that.long.pivot(504, 0); 
            _that.long.pos(504, 0);
            // _that.long.loadAnimation("ani/"+that.typeLVL+"1.ani");
            _that.long.play(0, true);  
        }, 3370);   
        this.addChild(this.long);
        var handler = new Handler(this, function () {
            _that.long.destroy();
            this.readyGO();
        });
    }
    readyGO ():void {
        this.timeTip = new Sprite();
        this.timeTip.loadImage("res/imgs/time.png");
        this.timeTip.width = 250;
        this.timeTip.height = 55;
        this.timeTip.pos(504+100, 32);
        this.addChild(this.timeTip);
        this.countDownTxt = new Text();
        this.countDownTxt.width = 250;
        this.countDownTxt.fontSize = 22;
        this.countDownTxt.color = "#FFFFFF";
        this.countDownTxt.alpha = 1;
        this.countDownTxt.y = 19;
        this.countDownTxt.x = 95;
        let count2 = parseInt((this.countDown2/60%60).toString())
        let time = "00:00/"+"0"+(count2==0?"0":count2)+":"+(this.countDown2-count2*60<0?(this.countDown2<10?"0"+this.countDown2:this.countDown2):(this.countDown2-count2*60<10?"0"+(this.countDown2-count2*60):(this.countDown2-count2*60)))
        this.countDownTxt.text = time;
        this.timeTip.addChild(this.countDownTxt);
        this.scoreObj.totalScore = 0;
        this.restartTip = new Sprite();
        this.restartTip.loadImage("res/imgs/restart.png");
        this.restartTip.alpha = 1;
        this.restartTip.width = 60;
        this.restartTip.height = 60;
        this.restartTip.pos(504+405, 34);
        this.addChild(this.restartTip);
        timeLine = new TimeLine();
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
            this.restartTip.on(Event.MOUSE_DOWN, this, this.restart)
                timeLine.destroy();
                is321 = false;
                this.setCountDown();
                this.event("Start_Game_Event");
            
        }
    }
}