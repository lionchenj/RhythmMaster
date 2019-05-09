import GameConfig from "./GameConfig";
import Ease = Laya.Ease;
import Handler = Laya.Handler;
import SoundManager = Laya.SoundManager;
import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import Tween = Laya.Tween;
import LoadingDialog from "./LoadingDialog";
import Constants from "./Constants";
import Bg from "./bg";
import Tips from "./tips";
import Ship from "./ship";
import End from "./end";
import Thing from "./thing";

let _this,gamePanel,
    iIndex = 0,
    mouseR = 0,
    thingList = [],
    isPause = false,
    shipRoad = 100,
    shipWidth = 200,
    roads = 0,
    percent,Beats0,Beats1,Beats2,
    bgx;
    
import {fourRoadPosition} from "./Road";

class Main {
    private loadingDialog: LoadingDialog;
	private bgManager;//游戏主背景
    private endManager;//结束容器
    private shipContainer;//船移动容器
    private buttonwidth;
    private gamePanel;//游戏区容器
    private thingRoad;//漂流物容器
    private tipsManager;//提示容器（层级最高）
    private roadArr = [];//四条路数组
	private wordsArr = Beats0;//单词数组
    private letterTotal = 0;
    private letterObjArr = [];
    private currLetter = {letter:''};//当前字母
    private screenLetterBoxArr = [];//在屏幕中的字母数组
    private letterV = 3000;//全程时间
    private console: Laya.Text;
    private gouziLength;
    private http;
    private data;
    private x;
    private bg;
    private typeLVL = 'type1';
    private heightAll;
    private start321 = "sound/321.mp3"
    private end = "sound/end.mp3"
    
	constructor() {
        _this = this;
        window.onload = function () {
            window.parent.postMessage({name:'fetchQuestions',data:{}},'*')
            window.addEventListener('message',_this.post,false);
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
                setTimeout(() => {
                    if (window.orientation === 180 || window.orientation === 0) { 
                        // if(window.innerHeight>700||window.innerWidth>700 && window.innerWidth>window.innerHeight){

                        // }else{
                        // Laya.stage.width = 1008;
                        // if(_this.endManager) _this.endManager.pos(Laya.stage.width/2,0);
                        // if(gamePanel) gamePanel.x = Laya.stage.width/2;
                        // Laya.stage.screenMode = GameConfig.screenMode;
                        // }
                        Laya.stage.scaleMode = 'exactfit';
                    } 
                    if (window.orientation === 90 || window.orientation === -90 ){
                        // Laya.stage.width = 1380;
                        // if(_this.endManager) _this.endManager.pos(Laya.stage.width/2,0);
                        // if(gamePanel) gamePanel.x = Laya.stage.width/2;
                        // Laya.stage.screenMode = GameConfig.screenMode;
                        Laya.stage.scaleMode = 'showall';
                    } 
                },500)
            }, false);
        };
        //根据IDE设置初始化引擎	
        
		Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = '';
		Laya.stage.scaleMode = GameConfig.scaleMode;
        Laya.stage.screenMode = GameConfig.screenMode;
        Laya.stage.alignH = GameConfig.alignH;
        Laya.stage.alignV = GameConfig.alignV;
        Laya.stage.width = window.innerHeight>700||window.innerWidth>700 && window.innerWidth>window.innerHeight?1380:1008;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
        Laya.alertGlobalError = true;
		Laya.stage.bgColor = "white"
		UIConfig.popupBgAlpha = 1
		UIConfig.closeDialogOnSide = false
        UIConfig.popupBgColor = "#ffffff"

        SoundManager.setSoundVolume(0);
        SoundManager.playSound(this.end, 1);
        SoundManager.playSound(this.start321, 1);
        //预加载
		this.loadProgessAssets()
		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	onVersionLoaded(): void {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}
    loadProgessAssets(): void {
		Laya.loader.load(["res/atlas/load.atlas","load/bg.png"], Laya.Handler.create(this, this.onProgressAssetsLoaded))
	}
	onConfigLoaded(): void {
		//加载IDE指定的场景
		GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
    }
    //预加载
	loadOtherAssets(): void {
        let that = this;
        const assets: Array<any> = []
        for(let i=0;i<532;i++){
			assets.push({
                url: that.data.musicUrl,
                type: Laya.Loader.SOUND
            })
		}
        assets.push({
			url: that.data.musicUrl,
			type: Laya.Loader.SOUND
        })
        assets.push({
			url: that.data.explainAudioUrl,
			type: Laya.Loader.SOUND
        })
        assets.push({
			url: Constants.type1_1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type1_2,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type1_bg,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type1_m1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type1_m2,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type1_m3,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type1_m4,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type2_1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type2_2,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type2_bg,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type2_m1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type2_m2,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type2_m3,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type2_m4,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type3_1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type3_2,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type3_bg,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type3_m1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type3_m2,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type3_m3,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type3_m4,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type4_1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type4_2,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type4_bg,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type4_m1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type4_m2,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type4_m3,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.type4_m4,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.CountDown1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.sound0,
			type: Laya.Loader.SOUND
        })
        assets.push({
			url: Constants.sound1,
			type: Laya.Loader.SOUND
        })
        assets.push({
			url: Constants.sound2,
			type: Laya.Loader.SOUND
        })
        assets.push({
			url: Constants.sound3,
			type: Laya.Loader.SOUND
        })
        assets.push({
			url: Constants.sound4,
			type: Laya.Loader.SOUND
        })
        assets.push({
			url: Constants.test,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.CountDown1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.CountDown2,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.CountDown3,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.ready,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.go,
			type: Laya.Loader.IMAGE
        })
		assets.push({
            url: Constants.perfect,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bad,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.buttonAgain,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.buttonNext,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.buttonStart,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.energy,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.miss,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.obstacle,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.restart,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.sg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.badbul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.badgre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.badred,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.badyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.gobul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.gogre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.gored,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.goyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.okbul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.okgre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.okred,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.okyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.shopbul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.shopgre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.shopred,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.shopyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.starOFF,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.starON,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.time,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.topBan,
            type: Laya.Loader.IMAGE
        });
        assets.push({
			url: "res/atlas/ship/bad/bul.atlas",
			type: Laya.Loader.ATLAS
        });
        assets.push({
			url: "res/atlas/ship/bad/gre.atlas",
			type: Laya.Loader.ATLAS
        });
        assets.push({
			url: "res/atlas/ship/bad/red.atlas",
			type: Laya.Loader.ATLAS
        });
        assets.push({
			url: "res/atlas/ship/bad/yel.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/go/bul.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/go/gre.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/go/red.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/go/yel.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/ok/bul.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/ok/gre.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/ok/red.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/ok/yel.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/shop/bul.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/shop/gre.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/shop/red.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/shop/yel.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship.atlas",
			type: Laya.Loader.ATLAS
        });
        assets.push({
            url: Constants.bg1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg5,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg6,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg7,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg8,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg9,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg10,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg11,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg12,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg13,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg14,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg15,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg16,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg17,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg18,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg19,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg20,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg21,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg22,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg23,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg24,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg25,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg26,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg27,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg28,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg29,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg30,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg31,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg32,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg33,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg34,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg35,
            type: Laya.Loader.IMAGE
        });
        assets.push({
			url: Constants.long,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.load,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.loadbg,
			type: Laya.Loader.IMAGE
        })
		assets.push({
			url: "res/atlas/load.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/long/longSWF.atlas",
			type: Laya.Loader.ATLAS
        });
        assets.push({
			url: Constants.longSWF,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.longSWF1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.longSWF2,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.longSWF3,
			type: Laya.Loader.IMAGE
        })
		assets.push({
			url: "res/atlas/end/0.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/end/1.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/end/2.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/end/3.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/end/00.atlas",
			type: Laya.Loader.ATLAS
        });
        assets.push({
			url: Constants.end0,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.end001,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.end002,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.end1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.end2,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.end3,
			type: Laya.Loader.IMAGE
        })
        
        // 预加载资源
		Laya.loader.load(assets, Laya.Handler.create(this, this.onAssetsLoaded), Laya.Handler.create(this, this.onAssetsLoading, null, false));
		Laya.loader.on(Laya.Event.ERROR, this, this.onError)
	}
    // 必需先加载进度条资源才能显示进度条
	onProgressAssetsLoaded(): void {
        // 显示进度条
        // 显示进度条
        this.loadingDialog = new LoadingDialog();
        // this.loadingDialog.width = 640;
        // this.loadingDialog.height = 640;
		// this.loadingDialog.popup(true, false);
		setTimeout(() => {
			this.loadOtherAssets();
		}, 500);
	}
    onAssetsLoading(progress: number): void {
        // this.loadingDialog.changeProgressValue(progress);
    }
    onAssetsLoaded(): void { 
        window.parent.postMessage({name:'fetchQuestions',data:{}},'*')
        this.GameManager()
    }
	onError(err: string): void {
		console.log("加载失败: " + err);
		// this.loadingDialog.updateTip("加载失败: " + err)
	}



	GameManager(): void {
        setTimeout(() => {
            LoadingDialog.closeAll();
            Laya.stage.scaleMode = window.innerWidth>window.innerHeight?'showall':'exactfit';
            this.heightAll = 690;
            Laya.stage.removeChild(this.bgManager);
            Laya.stage.removeChild(gamePanel);
            Laya.stage.removeChild(this.buttonwidth);
            Laya.stage.removeChild(this.tipsManager);
            Laya.stage.removeChild(this.endManager);
            this.letterTotal = 0;
            this.letterObjArr = [];
            this.currLetter = {letter:''};//当前字母
            iIndex = 0;
            thingList = [];
            this.wordsArr = [];
            this.screenLetterBoxArr = [];
            this.letterV = 3000;//全程时间
            this.gouziLength = '';
            this.bg = new Sprite();
            this.bg.width = 1380;
            this.bg.height = 640;
            this.bg.pivot(Laya.stage.width/2,0);
            this.bg.x = this.heightAll;
            this.bg.loadImage('res/imgs/'+this.typeLVL+'/wbg.png');
            Laya.stage.addChild(this.bg);
            

            gamePanel = new Sprite();
            gamePanel.width = 1008;
            gamePanel.height = 640;
            gamePanel.pivot(504,0);
            gamePanel.x = Laya.stage.width/2;
            Laya.stage.addChild(gamePanel);
            if(this.typeLVL == 'type1'){
                this.bgManager = new Bg();
                gamePanel.addChild(this.bgManager);
            }

            this.thingRoad = new Sprite();
            this.thingRoad.while = 1008;
            this.thingRoad.height = 640;
            this.thingRoad.pivot(504,0);
            this.thingRoad.x = 300;            
            gamePanel.addChild(this.thingRoad);
            
            this.buttonwidth = new Sprite();
            this.buttonwidth.while = 1008;
            this.buttonwidth.height = 152;
            this.buttonwidth.pivot(504,488);
            this.buttonwidth.x = 504;            
            this.buttonwidth.loadImage("res/imgs/buttonWidth.png");
            gamePanel.addChild(this.buttonwidth);

            this.shipContainer = new Ship(this);
            this.shipContainer.height = 178;
            this.shipContainer.width = 1008;
            this.shipContainer.y = 600
            gamePanel.addChild(this.shipContainer);   

            this.tipsManager = new Tips(this,gamePanel);
            this.tipsManager.width = 1008;
            this.tipsManager.pivot(504,0);
            this.tipsManager.x = 504;
            gamePanel.addChild(this.tipsManager);
            this.wordsArr = Beats0;
            this.gouziLength = this.wordsArr.filter(item => {
                return item.thing == '1';
            }).length;
            this.initLetterObjArr();
            this.initGame();
        }, 2000);  
    }
    //鼠标移动事件
	// onMouseMove(): void {
	// 	// console.log("onMouseMove(Y：", Laya.stage.mouseY, ";  x：", Laya.stage.mouseX, '）');
	// 	// console.log("Laya", Laya.stage);
	// }
    initLetterObjArr (): void {
        for (var i = 0; i < this.wordsArr.length; i++) {
            var linArr = [];
            var line = this.wordsArr[i].thing;
            var time = this.wordsArr[i].time;
            for (var j = 0; j < line.length; j++) {
                linArr.push({letter: line[j], status: 0, position: [i, j],isShow:false,time:this.letterV,times:time,next:0});
                if(line[j] != ' ') {
                    this.letterTotal++;
                }
            }
            this.letterObjArr.push(linArr);
        }
    }

    initGame (): void {
        this.tipsManager.on("Start_Game_Event", this, this.startGame);
        this.tipsManager.on("End_Game_Event", this, this.endGame);
    }
    startGame (): void {
        window.parent.postMessage({name:'startGame',data:{}},'*');
        
        this.playMusic();
        this.startWordArr();
        if(this.typeLVL == 'type1'){
            this.shipContainer.goship();
        }
    }

    endGame (): void {
        this.endManager = new End(this,LoadingDialog);  
        this.endManager.width = 1380;
        this.endManager.height = 640;  
        this.endManager.pivot(690,0);
        this.endManager.pos(Laya.stage.width/2,0);
        window.parent.postMessage({name:'finishGame',data:{}},'*');
    	Laya.stage.addChild(this.endManager);
        var obj = this.tipsManager.getScore();
        this.endManager.showEndPanel(obj, this.letterTotal);
    }

    playMusic (): void {
        SoundManager.autoStopMusic = false;
        SoundManager.playMusic(this.data.musicUrl, 1);
        SoundManager.setSoundVolume(1);        
    }

    startWordArr (): void {
        this.roadArr = [];
        for (var i = 0; i < 4; i++) {
            var oneRoadSprite = new Sprite();
            oneRoadSprite.width = 200;
            oneRoadSprite.height = 640;
            oneRoadSprite.name = 'road' + i;
            this.roadArr.push(oneRoadSprite);
            this.thingRoad.addChild(oneRoadSprite);
        }
        this.letterObjArr.map(data=>{
            let thisRoad = 0
            do {
                thisRoad = parseInt(Math.random()*4+"");
            } while (roads == thisRoad)
            roads = thisRoad;
            data[0]['road'] = roads
        })
        iIndex = 0;
        this.nextTimeout();
    }
    nextTimeout() {
        let _this = this;
        do {
            if (_this.letterObjArr[iIndex]) {
                _this.currLetter = _this.letterObjArr[iIndex][0];
                _this.letterObjArr[iIndex][0].next = 2;
                _this.letterObjArr[iIndex+1]?_this.letterObjArr[iIndex+1][0].next = 1:'';
            } else {
                var lastLine = _this.letterObjArr[_this.letterObjArr.length - 1];
                _this.currLetter = lastLine[lastLine.length - 1];
                Laya.timer.clearAll(this)
                // clearInterval(timeoutId);
                return;
            }
        } while (!_this.currLetter || _this.currLetter.letter == " ");

        var letterBox = new Thing(_this,_this.currLetter);
        letterBox.name = 'x' + _this.getRandomColor();
        thingList.push(letterBox)
        _this.appendOneLetter(letterBox);
        Laya.timer.loop( _this.letterObjArr[iIndex][0].times,this,this.nextTimeout);
        iIndex++;                                    
    }
    getRandomColor ():any {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
	//设置速度
    appendOneLetter (letterBox) {
        let _this = this;

        this.screenLetterBoxArr.push(letterBox);
        var randomIndex = letterBox.wordObj.road;
		letterBox.guidao = randomIndex;
		if(letterBox.wordObj.isShow){
            letterBox.x = letterBox.wordObj.start.x+(this.heightAll);
            letterBox.y = letterBox.wordObj.start.y;
            letterBox.scaleX = letterBox.wordObj.start.scaleX;
            letterBox.scaleY = letterBox.wordObj.start.scaleY;
        } else {
            letterBox.x = fourRoadPosition[randomIndex].start.x+(this.heightAll);
            letterBox.y = fourRoadPosition[randomIndex].start.y;
            letterBox.scaleX = fourRoadPosition[randomIndex].start.scaleX;
            letterBox.scaleY = fourRoadPosition[randomIndex].start.scaleY;
        }
        this.roadArr[randomIndex].addChild(letterBox);
        var handler = new Handler(letterBox, function () {
            if(!isPause){
                this.setStatus(-1);
                if(this.wordObj.letter != '2'){
                    _this.tipsManager.showPlayTip(0);
                }
            }
            _this.removeLetter(this);
        });
        var moveUpdateHandler = new Handler(letterBox, function () {
            var oneRoad = _this.roadArr[this.guidao];
            for (var i = 0; i < oneRoad.numChildren; i++) {
                var letter = oneRoad.getChildAt(i);
                if (letter instanceof Thing && letter.isOver == false) {
                    if(letter.y != 640 && !isPause){
                        this.setStart(
                            {
                                x: letter.x,
                                y: letter.y,
                                scaleX: letter.scaleX,
                                scaleY: letter.scaleY,
                            }
                        )
                        percent = letter.y/640;
                        percent = (100 - Math.floor(percent * 100)) / 100
                        this.setTime(percent);
                        this.setPercent(percent);
                        this.setShow();
                    }
                }
            }
        });

        letterBox.moveTween = Tween.to(letterBox, {x:(fourRoadPosition[randomIndex].end.x+(this.heightAll)),y:640}, letterBox.wordObj.time, Ease.linearNone, handler);
        letterBox.moveTween.update = moveUpdateHandler;
        letterBox.moveTweenUpdate = moveUpdateHandler;//因为最后会给letter做Tween.clearAll(); 所以需要预留句柄做最后清除轨道痕迹回调

        letterBox.alphaTween = Tween.to(letterBox, {alpha: 1}, letterBox.wordObj.time * 0.2);
        
        letterBox.on('UILetterBox_Remove_Event', this, this.removeLetter);
    }
    
    removeLetter = function (letter) {
        var letterBox = this.screenLetterBoxArr.splice(this.screenLetterBoxArr.indexOf(letter), 1)[0];
        // letterBox.destroyMe();
        letterBox.removeSelf();
        letterBox.destroy(true);
    }

    onClickDown = function (index) {
        var letter;
        let isCollision = false;
        for (var i = 0; i < this.screenLetterBoxArr.length; i++) {
            letter = this.screenLetterBoxArr[i];
            if (letter.isOver == false && letter.guidao == index) {
                if (letter.y < 480) {
                    break;
                } else if (letter.y >= 480 && letter.y < 600) {
                    if(letter.wordObj.letter == '2'){
                        this.onKeyDownLetter(letter, true, -1);
                    } else {
                        this.onKeyDownLetter(letter, true, 20);
                    }
                    break;
                }
                break;
            } else {
            }
        }
    }

    onKeyDownLetter = function (letter, isPipei, score) {
        if (isPipei) {
            if(score == -1){
                if(this.typeLVL == 'type1'){
                    this.shipContainer.bandship(letter.guidao);
                }             
            }else{
                if(this.typeLVL == 'type1'){
                    this.shipContainer.okship(letter.guidao);
                }
            }
            this.tipsManager.showPlayTip(score);
            letter.pipei(score);
            letter.moveTweenUpdate.run();
        } else {
            if(letter.wordObj.letter != '2'){
                this.tipsManager.showPlayTip(0);
                letter.bupipei();
            }
        }
    }
    post(event) {
        let data = event.data;
        if(data.data!=undefined && data.data.length>0){
            data = event.data;
        }else{
            data = { "name": "castQuestions", "data": [
                               {questionId: 2101,
            title: "跟随节奏",
            payload: {
              explainAudioUrl: "https://muses-online.fbcontent.cn/muses-lesson/music/audio/%E6%B8%B8%E6%88%8F%E9%9F%B3%E9%A2%91/%E8%8A%B1%E6%A0%97%E9%BC%A0%E6%B8%B8%E6%88%8F%E9%9F%B3%E9%A2%91/%E8%8A%B1%E6%A0%97%E9%BC%A0%E6%B8%B8%E6%88%8F2%E8%A7%A3%E8%AF%B4.mp3",
              musicUrl: "https://muses-online.fbcontent.cn/muses-lesson/music/audio/%E6%B8%B8%E6%88%8F%E9%9F%B3%E9%A2%91/%E8%8A%B1%E6%A0%97%E9%BC%A0%E6%B8%B8%E6%88%8F%E9%9F%B3%E9%A2%91/%E8%8A%B1%E6%A0%97%E9%BC%A0%E5%88%9D%E7%BA%A7%E9%9F%B3%E9%A2%91.mp3",
              musicDuration: 532930,
              skinType: 1,
              objects: [
                { size: 1, startTime: 6500, endTime: 7500, obstacle: false },
                { size: 1, startTime: 7500, endTime: 8500, obstacle: false },
                { size: 1, startTime: 8600, endTime: 9600, obstacle: false },
                { size: 1, startTime: 9600, endTime: 10600, obstacle: false },
                { size: 1, startTime: 10700, endTime: 11700, obstacle: false },
                { size: 1, startTime: 11800, endTime: 12800, obstacle: false },
                { size: 1, startTime: 12900, endTime: 13900, obstacle: false },
                { size: 1, startTime: 14000, endTime: 15000, obstacle: false },
                { size: 1, startTime: 15100, endTime: 16100, obstacle: false },
                { size: 1, startTime: 16200, endTime: 17200, obstacle: false },
                { size: 1, startTime: 17200, endTime: 18200, obstacle: false },
                { size: 1, startTime: 18300, endTime: 19300, obstacle: false },
                { size: 1, startTime: 19400, endTime: 20400, obstacle: false },
                { size: 1, startTime: 20400, endTime: 21400, obstacle: false },
                { size: 1, startTime: 21500, endTime: 22500, obstacle: false },
                { size: 1, startTime: 22500, endTime: 23500, obstacle: false },
                { size: 1, startTime: 23600, endTime: 24600, obstacle: false },
                { size: 1, startTime: 24700, endTime: 25700, obstacle: false },
                { size: 1, startTime: 25700, endTime: 26700, obstacle: false },
                { size: 1, startTime: 26800, endTime: 27800, obstacle: false },
                { size: 1, startTime: 27800, endTime: 28800, obstacle: false },
                { size: 1, startTime: 28800, endTime: 29800, obstacle: false },
                { size: 1, startTime: 29900, endTime: 30900, obstacle: false },
                { size: 1, startTime: 31000, endTime: 32000, obstacle: false },
                { size: 1, startTime: 32100, endTime: 33100, obstacle: false },
                { size: 1, startTime: 33100, endTime: 34100, obstacle: false },
                { size: 1, startTime: 34200, endTime: 35200, obstacle: false },
                { size: 1, startTime: 35300, endTime: 36300, obstacle: false },
                { size: 1, startTime: 36400, endTime: 37400, obstacle: false },
                { size: 1, startTime: 37500, endTime: 38500, obstacle: false },
                { size: 1, startTime: 38600, endTime: 39600, obstacle: false },
                { size: 1, startTime: 39600, endTime: 40600, obstacle: false },
                { size: 1, startTime: 40800, endTime: 41800, obstacle: false },
                { size: 1, startTime: 41800, endTime: 42800, obstacle: false },
                { size: 1, startTime: 42900, endTime: 43900, obstacle: false },
                { size: 1, startTime: 44000, endTime: 45000, obstacle: false },
                { size: 1, startTime: 45100, endTime: 46100, obstacle: false },
                { size: 1, startTime: 46100, endTime: 47100, obstacle: false },
                { size: 1, startTime: 47100, endTime: 48100, obstacle: false },
                { size: 1, startTime: 13200, endTime: 14200, obstacle: true },
                { size: 1, startTime: 24000, endTime: 25000, obstacle: true },
                { size: 1, startTime: 30000, endTime: 31000, obstacle: true },
                { size: 1, startTime: 38900, endTime: 39900, obstacle: true },
                { size: 1, startTime: 43000, endTime: 44000, obstacle: true }
              ],
              type: 107102
            },
            type: 107102
          }
                        ] 
                    }
        }
        this.typeLVL = 'type'+data.data[0].payload.skinType;
        let change,datas = data.data[0].payload.objects;
        for(let i=datas.length-1;i>=0;i--){
            for(let j=0;j<i;j++){
                if(datas[j+1].startTime<datas[j].startTime){
                    change=datas[j+1];
                    datas[j+1]=datas[j];
                    datas[j]=change
                }
            }
        };
        _this.data = data.data[0].payload;
        let list = datas;
        this.letterV = list[0].endTime - list[0].startTime;
        let Beats = [{ time: list[0].startTime, thing: list[0].obstacle?'2':'1' }];
        for(var i = 0;i < list.length;i++){
            if(list[i+1]){
                let time = list[i+1].startTime - list[i].startTime;
                Beats.push({ time: time, thing: list[i+1].obstacle?'2':'1' })
            }
        }
        Beats0 = Beats;
    }
}
//激活启动类
new Main();
