var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//预声明
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.perfect = "res/imgs/perfect.png";
    Constants.type1_bg = "res/imgs/type1/wbg.png";
    Constants.type1_1 = "res/imgs/type1/1.png";
    Constants.type1_2 = "res/imgs/type1/2.png";
    Constants.type1_m1 = "res/imgs/type1/m1.png";
    Constants.type1_m2 = "res/imgs/type1/m2.png";
    Constants.type1_m3 = "res/imgs/type1/m3.png";
    Constants.type1_m4 = "res/imgs/type1/m4.png";
    Constants.type2_bg = "res/imgs/type2/wbg.png";
    Constants.type2_1 = "res/imgs/type2/1.png";
    Constants.type2_2 = "res/imgs/type2/2.png";
    Constants.type2_m1 = "res/imgs/type2/m1.png";
    Constants.type2_m2 = "res/imgs/type2/m2.png";
    Constants.type2_m3 = "res/imgs/type2/m3.png";
    Constants.type2_m4 = "res/imgs/type2/m4.png";
    Constants.type3_bg = "res/imgs/type3/wbg.png";
    Constants.type3_1 = "res/imgs/type3/1.png";
    Constants.type3_2 = "res/imgs/type3/2.png";
    Constants.type3_m1 = "res/imgs/type3/m1.png";
    Constants.type3_m2 = "res/imgs/type3/m2.png";
    Constants.type3_m3 = "res/imgs/type3/m3.png";
    Constants.type3_m4 = "res/imgs/type3/m4.png";
    Constants.type4_bg = "res/imgs/type4/wbg.png";
    Constants.type4_1 = "res/imgs/type4/1.png";
    Constants.type4_2 = "res/imgs/type4/2.png";
    Constants.type4_m1 = "res/imgs/type4/m1.png";
    Constants.type4_m2 = "res/imgs/type4/m2.png";
    Constants.type4_m3 = "res/imgs/type4/m3.png";
    Constants.type4_m4 = "res/imgs/type4/m4.png";
    Constants.bad = "res/imgs/bad.png";
    Constants.bg1 = "bg/1.png";
    Constants.bg2 = "bg/2.png";
    Constants.bg3 = "bg/3.png";
    Constants.bg4 = "bg/4.png";
    Constants.bg5 = "bg/5.png";
    Constants.bg6 = "bg/6.png";
    Constants.bg7 = "bg/7.png";
    Constants.bg8 = "bg/8.png";
    Constants.bg9 = "bg/9.png";
    Constants.bg10 = "bg/10.png";
    Constants.bg11 = "bg/11.png";
    Constants.bg12 = "bg/12.png";
    Constants.bg13 = "bg/13.png";
    Constants.bg14 = "bg/14.png";
    Constants.bg15 = "bg/15.png";
    Constants.bg16 = "bg/16.png";
    Constants.bg17 = "bg/17.png";
    Constants.bg18 = "bg/18.png";
    Constants.bg19 = "bg/19.png";
    Constants.bg20 = "bg/20.png";
    Constants.bg21 = "bg/21.png";
    Constants.bg22 = "bg/22.png";
    Constants.bg23 = "bg/23.png";
    Constants.bg24 = "bg/24.png";
    Constants.bg25 = "bg/25.png";
    Constants.bg26 = "bg/26.png";
    Constants.bg27 = "bg/27.png";
    Constants.bg28 = "bg/28.png";
    Constants.bg29 = "bg/29.png";
    Constants.bg30 = "bg/30.png";
    Constants.bg31 = "bg/31.png";
    Constants.bg32 = "bg/32.png";
    Constants.bg33 = "bg/33.png";
    Constants.bg34 = "bg/34.png";
    Constants.bg35 = "bg/35.png";
    Constants.buttonAgain = "res/imgs/buttonAgain.png";
    Constants.buttonNext = "res/imgs/buttonNext.png";
    Constants.buttonStart = "res/imgs/buttonStart.png";
    Constants.energy = "res/imgs/type1/1.png";
    Constants.obstacle = "res/imgs/type1/2.png";
    Constants.miss = "res/imgs/miss.png";
    Constants.restart = "res/imgs/restart.png";
    Constants.sg = "res/imgs/sg.png";
    Constants.starOFF = "res/imgs/starOFF.png";
    Constants.starON = "res/imgs/starON.png";
    Constants.time = "res/imgs/time.png";
    Constants.topBan = "res/imgs/topBan.png";
    Constants.badbul = "res/atlas/ship/bad/bul.png";
    Constants.badgre = "res/atlas/ship/bad/gre.png";
    Constants.badred = "res/atlas/ship/bad/red.png";
    Constants.badyel = "res/atlas/ship/bad/yel.png";
    Constants.okbul = "res/atlas/ship/ok/bul.png";
    Constants.okgre = "res/atlas/ship/ok/gre.png";
    Constants.okred = "res/atlas/ship/ok/red.png";
    Constants.okyel = "res/atlas/ship/ok/yel.png";
    Constants.gobul = "res/atlas/ship/go/bul.png";
    Constants.gogre = "res/atlas/ship/go/gre.png";
    Constants.gored = "res/atlas/ship/go/red.png";
    Constants.goyel = "res/atlas/ship/go/yel.png";
    Constants.shopbul = "res/atlas/ship/shop/bul.png";
    Constants.shopgre = "res/atlas/ship/shop/gre.png";
    Constants.shopred = "res/atlas/ship/shop/red.png";
    Constants.shopyel = "res/atlas/ship/shop/yel.png";
    Constants.sound0 = "sound/321.mp3";
    Constants.sound1 = "sound/button.mp3";
    Constants.sound2 = "sound/beat.mp3";
    Constants.sound3 = "sound/end.mp3";
    Constants.sound4 = "sound/bad.mp3";
    Constants.CountDown1 = "res/imgs/CountDown1.png";
    Constants.CountDown2 = "res/imgs/CountDown2.png";
    Constants.CountDown3 = "res/imgs/CountDown3.png";
    Constants.ready = "res/imgs/ready.png";
    Constants.go = "res/imgs/GO.png";
    Constants.long = "res/atlas/long.png";
    Constants.longbg1 = "long/bg1.png";
    Constants.longbg2 = "long/bg2.png";
    Constants.longbg3 = "long/bg3.png";
    Constants.longbg4 = "long/bg4.png";
    Constants.loadbg = "load/bg.png";
    Constants.load = "res/atlas/load.png";
    Constants.load1 = "res/atlas/load1.png";
    Constants.test = "res/atlas/ship.png";
    Constants.longSWF = "res/atlas/long/longSWF.png";
    Constants.longSWF1 = "res/atlas/long/longSWF1.png";
    Constants.longSWF2 = "res/atlas/long/longSWF2.png";
    Constants.longSWF3 = "res/atlas/long/longSWF3.png";
    Constants.end0 = "res/atlas/end/0.png";
    Constants.end1 = "res/atlas/end/1.png";
    Constants.end2 = "res/atlas/end/2.png";
    Constants.end3 = "res/atlas/end/3.png";
    Constants.end001 = "res/atlas/end/00.png";
    Constants.end002 = "res/atlas/end/001.png";
    return Constants;
}());
exports.default = Constants;

},{}],2:[function(require,module,exports){
"use strict";
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
Object.defineProperty(exports, "__esModule", { value: true });
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
    };
    GameConfig.width = 1380;
    GameConfig.height = 640;
    GameConfig.scaleMode = "showall";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "dialog/LoadingDialog.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("./ui/layaMaxUI");
var LoadingDialog = /** @class */ (function (_super) {
    __extends(LoadingDialog, _super);
    // private progress = '0'
    function LoadingDialog() {
        var _this = _super.call(this) || this;
        // this.width = 1380;
        // this.height = 640;
        // this.autoDestroyAtClosed = true
        _this.isPopupCenter = true;
        return _this;
        // this.pos(0, 0)
    }
    LoadingDialog.prototype.onOpened = function () {
        // this.changeProgressValue(0)    
    };
    LoadingDialog.prototype.changeProgressValue = function (nber) {
        // if (!this.progress) {
        //     Laya.timer.once(200, this, this.changeProgressValue)
        //     return
        // }
        // const num = Math.ceil(nber * 100) + "%"
        // this.progress.text = num;
    };
    LoadingDialog.prototype.updateTip = function (tip) {
        // this.progress.text = tip
    };
    LoadingDialog.prototype.onClick = function () {
        this.close();
    };
    return LoadingDialog;
}(layaMaxUI_1.ui.dialog.LoadingDialogUI));
exports.default = LoadingDialog;

},{"./ui/layaMaxUI":11}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var Ease = Laya.Ease;
var Handler = Laya.Handler;
var SoundManager = Laya.SoundManager;
var Sprite = Laya.Sprite;
var Tween = Laya.Tween;
var LoadingDialog_1 = require("./LoadingDialog");
var Constants_1 = require("./Constants");
var bg_1 = require("./bg");
var tips_1 = require("./tips");
var ship_1 = require("./ship");
var end_1 = require("./end");
var thing_1 = require("./thing");
var _this, gamePanel, iIndex = 0, mouseR = 0, thingList = [], isPause = false, shipRoad = 100, shipWidth = 200, roads = 0, percent, Beats0, Beats1, Beats2, bgx;
var Road_1 = require("./Road");
var Main = /** @class */ (function () {
    function Main() {
        this.roadArr = []; //四条路数组
        this.wordsArr = Beats0; //单词数组
        this.letterTotal = 0;
        this.letterObjArr = [];
        this.currLetter = { letter: '' }; //当前字母
        this.screenLetterBoxArr = []; //在屏幕中的字母数组
        this.letterV = 3000; //全程时间
        this.typeLVL = 'type1';
        this.start321 = "sound/321.mp3";
        this.end = "sound/end.mp3";
        this.removeLetter = function (letter) {
            var letterBox = this.screenLetterBoxArr.splice(this.screenLetterBoxArr.indexOf(letter), 1)[0];
            // letterBox.destroyMe();
            letterBox.removeSelf();
            letterBox.destroy(true);
        };
        this.onClickDown = function (index) {
            var letter;
            var isCollision = false;
            for (var i = 0; i < this.screenLetterBoxArr.length; i++) {
                letter = this.screenLetterBoxArr[i];
                if (letter.isOver == false && letter.guidao == index) {
                    if (letter.y < 480) {
                        break;
                    }
                    else if (letter.y >= 480 && letter.y < 600) {
                        if (letter.wordObj.letter == '2') {
                            this.onKeyDownLetter(letter, true, -1);
                        }
                        else {
                            this.onKeyDownLetter(letter, true, 20);
                        }
                        break;
                    }
                    break;
                }
                else {
                }
            }
        };
        this.onKeyDownLetter = function (letter, isPipei, score) {
            if (isPipei) {
                if (score == -1) {
                    if (this.typeLVL == 'type1') {
                        this.shipContainer.bandship(letter.guidao);
                    }
                }
                else {
                    if (this.typeLVL == 'type1') {
                        this.shipContainer.okship(letter.guidao);
                    }
                }
                this.tipsManager.showPlayTip(score);
                letter.pipei(score);
                letter.moveTweenUpdate.run();
            }
            else {
                if (letter.wordObj.letter != '2') {
                    this.tipsManager.showPlayTip(0);
                    letter.bupipei();
                }
            }
        };
        _this = this;
        window.onload = function () {
            window.parent.postMessage({ name: 'fetchQuestions', data: {} }, '*');
            window.addEventListener('message', _this.post, false);
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
                setTimeout(function () {
                    if (window.orientation === 180 || window.orientation === 0) {
                        // Laya.stage.width = 1008;
                        // if(_this.endManager) _this.endManager.pos(Laya.stage.width/2,0);
                        // if(gamePanel) gamePanel.x = Laya.stage.width/2;
                        // Laya.stage.screenMode = GameConfig.screenMode;
                        Laya.stage.scaleMode = 'exactfit';
                    }
                    if (window.orientation === 90 || window.orientation === -90) {
                        // Laya.stage.width = 1380;
                        // if(_this.endManager) _this.endManager.pos(Laya.stage.width/2,0);
                        // if(gamePanel) gamePanel.x = Laya.stage.width/2;
                        // Laya.stage.screenMode = GameConfig.screenMode;
                        Laya.stage.scaleMode = 'showall';
                    }
                }, 500);
            }, false);
        };
        //根据IDE设置初始化引擎	
        Laya.init(GameConfig_1.default.width, GameConfig_1.default.height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = '';
        Laya.stage.scaleMode = GameConfig_1.default.scaleMode;
        Laya.stage.screenMode = GameConfig_1.default.screenMode;
        Laya.stage.alignH = GameConfig_1.default.alignH;
        Laya.stage.alignV = GameConfig_1.default.alignV;
        Laya.stage.width = window.innerHeight > 700 || window.innerWidth > 700 || window.innerWidth > window.innerHeight ? 1380 : 1008;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (GameConfig_1.default.debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (GameConfig_1.default.physicsDebug && Laya["PhysicsDebugDraw"])
            Laya["PhysicsDebugDraw"].enable();
        if (GameConfig_1.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError = true;
        Laya.stage.bgColor = "white";
        UIConfig.popupBgAlpha = 1;
        UIConfig.closeDialogOnSide = false;
        UIConfig.popupBgColor = "#ffffff";
        SoundManager.setSoundVolume(0);
        SoundManager.playSound(this.end, 1);
        SoundManager.playSound(this.start321, 1);
        //预加载
        this.loadProgessAssets();
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    Main.prototype.onVersionLoaded = function () {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    };
    Main.prototype.loadProgessAssets = function () {
        Laya.loader.load(["res/atlas/load.atlas", "load/bg.png"], Laya.Handler.create(this, this.onProgressAssetsLoaded));
    };
    Main.prototype.onConfigLoaded = function () {
        //加载IDE指定的场景
        GameConfig_1.default.startScene && Laya.Scene.open(GameConfig_1.default.startScene);
    };
    //预加载
    Main.prototype.loadOtherAssets = function () {
        var that = this;
        var assets = [];
        for (var i = 0; i < 532; i++) {
            assets.push({
                url: that.data.musicUrl,
                type: Laya.Loader.SOUND
            });
        }
        assets.push({
            url: that.data.musicUrl,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: that.data.explainAudioUrl,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.type1_1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type1_2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type1_bg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type1_m1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type1_m2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type1_m3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type1_m4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_bg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_m1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_m2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_m3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_m4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_bg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_m1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_m2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_m3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_m4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_bg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_m1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_m2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_m3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_m4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.CountDown1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.sound0,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.sound1,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.sound2,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.sound3,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.sound4,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.test,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.CountDown1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.CountDown2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.CountDown3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.ready,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.go,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.perfect,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bad,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.buttonAgain,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.buttonNext,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.buttonStart,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.energy,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.miss,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.obstacle,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.restart,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.sg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.badbul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.badgre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.badred,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.badyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.gobul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.gogre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.gored,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.goyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.okbul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.okgre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.okred,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.okyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.shopbul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.shopgre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.shopred,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.shopyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.starOFF,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.starON,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.time,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.topBan,
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
            url: Constants_1.default.bg1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg5,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg6,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg7,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg8,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg9,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg10,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg11,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg12,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg13,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg14,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg15,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg16,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg17,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg18,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg19,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg20,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg21,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg22,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg23,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg24,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg25,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg26,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg27,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg28,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg29,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg30,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg31,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg32,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg33,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg34,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg35,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.long,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.longbg1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.longbg2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.longbg3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.longbg4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.load,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.loadbg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: "res/atlas/load.atlas",
            type: Laya.Loader.ATLAS
        });
        assets.push({
            url: "res/atlas/long/longSWF.atlas",
            type: Laya.Loader.ATLAS
        });
        assets.push({
            url: Constants_1.default.longSWF,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.longSWF1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.longSWF2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.longSWF3,
            type: Laya.Loader.IMAGE
        });
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
            url: Constants_1.default.end0,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.end001,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.end002,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.end1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.end2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.end3,
            type: Laya.Loader.IMAGE
        });
        // 预加载资源
        Laya.loader.load(assets, Laya.Handler.create(this, this.onAssetsLoaded), Laya.Handler.create(this, this.onAssetsLoading, null, false));
        Laya.loader.on(Laya.Event.ERROR, this, this.onError);
    };
    // 必需先加载进度条资源才能显示进度条
    Main.prototype.onProgressAssetsLoaded = function () {
        var _this_1 = this;
        // 显示进度条
        // 显示进度条
        this.loadingDialog = new LoadingDialog_1.default();
        // this.loadingDialog.width = 640;
        // this.loadingDialog.height = 640;
        // this.loadingDialog.popup(true, false);
        setTimeout(function () {
            _this_1.loadOtherAssets();
        }, 500);
    };
    Main.prototype.onAssetsLoading = function (progress) {
        // this.loadingDialog.changeProgressValue(progress);
    };
    Main.prototype.onAssetsLoaded = function () {
        window.parent.postMessage({ name: 'fetchQuestions', data: {} }, '*');
        this.GameManager();
    };
    Main.prototype.onError = function (err) {
        console.log("加载失败: " + err);
        // this.loadingDialog.updateTip("加载失败: " + err)
    };
    Main.prototype.GameManager = function () {
        var _this_1 = this;
        setTimeout(function () {
            LoadingDialog_1.default.closeAll();
            Laya.stage.scaleMode = window.innerHeight > 700 || window.innerWidth > 700 || window.innerWidth > window.innerHeight ? 'showall' : 'exactfit';
            // this.typeLVL = laya.net.LocalStorage.getItem('typeLVL');
            // this.typeLVL?'':laya.net.LocalStorage.setItem('typeLVL','type1')
            console.log(Laya.stage.width, Laya.stage.height);
            _this_1.heightAll = 690;
            Laya.stage.removeChild(_this_1.bgManager);
            Laya.stage.removeChild(gamePanel);
            Laya.stage.removeChild(_this_1.buttonwidth);
            Laya.stage.removeChild(_this_1.tipsManager);
            Laya.stage.removeChild(_this_1.endManager);
            _this_1.letterTotal = 0;
            _this_1.letterObjArr = [];
            _this_1.currLetter = { letter: '' }; //当前字母
            iIndex = 0;
            thingList = [];
            _this_1.wordsArr = [];
            _this_1.screenLetterBoxArr = [];
            _this_1.letterV = 3000; //全程时间
            _this_1.gouziLength = '';
            _this_1.bg = new Sprite();
            _this_1.bg.width = 1380;
            _this_1.bg.height = 640;
            _this_1.bg.pivot(Laya.stage.width / 2, 0);
            _this_1.bg.x = _this_1.heightAll;
            _this_1.bg.loadImage('res/imgs/' + _this_1.typeLVL + '/wbg.png');
            Laya.stage.addChild(_this_1.bg);
            gamePanel = new Sprite();
            gamePanel.width = 1008;
            gamePanel.height = 640;
            gamePanel.pivot(504, 0);
            gamePanel.x = Laya.stage.width / 2;
            Laya.stage.addChild(gamePanel);
            if (_this_1.typeLVL == 'type1') {
                _this_1.bgManager = new bg_1.default();
                gamePanel.addChild(_this_1.bgManager);
            }
            _this_1.thingRoad = new Sprite();
            _this_1.thingRoad.while = 1008;
            _this_1.thingRoad.height = 640;
            _this_1.thingRoad.pivot(504, 0);
            _this_1.thingRoad.x = 300;
            gamePanel.addChild(_this_1.thingRoad);
            _this_1.buttonwidth = new Sprite();
            _this_1.buttonwidth.while = 1008;
            _this_1.buttonwidth.height = 152;
            _this_1.buttonwidth.pivot(504, 488);
            _this_1.buttonwidth.x = 504;
            _this_1.buttonwidth.loadImage("res/imgs/buttonWidth.png");
            gamePanel.addChild(_this_1.buttonwidth);
            _this_1.shipContainer = new ship_1.default(_this_1);
            _this_1.shipContainer.height = 178;
            _this_1.shipContainer.width = 1008;
            _this_1.shipContainer.y = 600;
            gamePanel.addChild(_this_1.shipContainer);
            _this_1.tipsManager = new tips_1.default(_this_1, gamePanel);
            _this_1.tipsManager.width = 1008;
            _this_1.tipsManager.pivot(504, 0);
            _this_1.tipsManager.x = 504;
            gamePanel.addChild(_this_1.tipsManager);
            _this_1.wordsArr = Beats0;
            _this_1.gouziLength = _this_1.wordsArr.filter(function (item) {
                return item.thing == '1';
            }).length;
            _this_1.initLetterObjArr();
            _this_1.initGame();
        }, 2000);
    };
    //鼠标移动事件
    // onMouseMove(): void {
    // 	// console.log("onMouseMove(Y：", Laya.stage.mouseY, ";  x：", Laya.stage.mouseX, '）');
    // 	// console.log("Laya", Laya.stage);
    // }
    Main.prototype.initLetterObjArr = function () {
        for (var i = 0; i < this.wordsArr.length; i++) {
            var linArr = [];
            var line = this.wordsArr[i].thing;
            var time = this.wordsArr[i].time;
            for (var j = 0; j < line.length; j++) {
                linArr.push({ letter: line[j], status: 0, position: [i, j], isShow: false, time: this.letterV, times: time, next: 0 });
                if (line[j] != ' ') {
                    this.letterTotal++;
                }
            }
            this.letterObjArr.push(linArr);
        }
    };
    Main.prototype.initGame = function () {
        this.tipsManager.on("Start_Game_Event", this, this.startGame);
        this.tipsManager.on("End_Game_Event", this, this.endGame);
    };
    Main.prototype.startGame = function () {
        window.parent.postMessage({ name: 'startGame', data: {} }, '*');
        this.playMusic();
        this.startWordArr();
        if (this.typeLVL == 'type1') {
            this.shipContainer.goship();
        }
    };
    Main.prototype.endGame = function () {
        this.endManager = new end_1.default(this, LoadingDialog_1.default);
        this.endManager.width = 1380;
        this.endManager.height = 640;
        this.endManager.pivot(690, 0);
        this.endManager.pos(Laya.stage.width / 2, 0);
        window.parent.postMessage({ name: 'finishGame', data: {} }, '*');
        Laya.stage.addChild(this.endManager);
        var obj = this.tipsManager.getScore();
        this.endManager.showEndPanel(obj, this.letterTotal);
    };
    Main.prototype.playMusic = function () {
        SoundManager.autoStopMusic = false;
        SoundManager.playMusic(this.data.musicUrl, 1);
        SoundManager.setSoundVolume(1);
    };
    Main.prototype.startWordArr = function () {
        this.roadArr = [];
        for (var i = 0; i < 4; i++) {
            var oneRoadSprite = new Sprite();
            oneRoadSprite.width = 200;
            oneRoadSprite.height = 640;
            oneRoadSprite.name = 'road' + i;
            this.roadArr.push(oneRoadSprite);
            this.thingRoad.addChild(oneRoadSprite);
        }
        this.letterObjArr.map(function (data) {
            var thisRoad = 0;
            do {
                thisRoad = parseInt(Math.random() * 4 + "");
            } while (roads == thisRoad);
            roads = thisRoad;
            data[0]['road'] = roads;
        });
        iIndex = 0;
        this.nextTimeout();
    };
    Main.prototype.nextTimeout = function () {
        var _this = this;
        do {
            if (_this.letterObjArr[iIndex]) {
                _this.currLetter = _this.letterObjArr[iIndex][0];
                _this.letterObjArr[iIndex][0].next = 2;
                _this.letterObjArr[iIndex + 1] ? _this.letterObjArr[iIndex + 1][0].next = 1 : '';
            }
            else {
                var lastLine = _this.letterObjArr[_this.letterObjArr.length - 1];
                _this.currLetter = lastLine[lastLine.length - 1];
                Laya.timer.clearAll(this);
                // clearInterval(timeoutId);
                return;
            }
        } while (!_this.currLetter || _this.currLetter.letter == " ");
        var letterBox = new thing_1.default(_this, _this.currLetter);
        letterBox.name = 'x' + _this.getRandomColor();
        thingList.push(letterBox);
        _this.appendOneLetter(letterBox);
        Laya.timer.loop(_this.letterObjArr[iIndex][0].times, this, this.nextTimeout);
        iIndex++;
    };
    Main.prototype.getRandomColor = function () {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };
    //设置速度
    Main.prototype.appendOneLetter = function (letterBox) {
        var _this = this;
        this.screenLetterBoxArr.push(letterBox);
        var randomIndex = letterBox.wordObj.road;
        letterBox.guidao = randomIndex;
        if (letterBox.wordObj.isShow) {
            letterBox.x = letterBox.wordObj.start.x + (this.heightAll);
            letterBox.y = letterBox.wordObj.start.y;
            letterBox.scaleX = letterBox.wordObj.start.scaleX;
            letterBox.scaleY = letterBox.wordObj.start.scaleY;
        }
        else {
            letterBox.x = Road_1.fourRoadPosition[randomIndex].start.x + (this.heightAll);
            letterBox.y = Road_1.fourRoadPosition[randomIndex].start.y;
            letterBox.scaleX = Road_1.fourRoadPosition[randomIndex].start.scaleX;
            letterBox.scaleY = Road_1.fourRoadPosition[randomIndex].start.scaleY;
        }
        this.roadArr[randomIndex].addChild(letterBox);
        var handler = new Handler(letterBox, function () {
            if (!isPause) {
                this.setStatus(-1);
                if (this.wordObj.letter != '2') {
                    _this.tipsManager.showPlayTip(0);
                }
            }
            _this.removeLetter(this);
        });
        var moveUpdateHandler = new Handler(letterBox, function () {
            var oneRoad = _this.roadArr[this.guidao];
            for (var i = 0; i < oneRoad.numChildren; i++) {
                var letter = oneRoad.getChildAt(i);
                if (letter instanceof thing_1.default && letter.isOver == false) {
                    if (letter.y != 640 && !isPause) {
                        this.setStart({
                            x: letter.x,
                            y: letter.y,
                            scaleX: letter.scaleX,
                            scaleY: letter.scaleY,
                        });
                        percent = letter.y / 640;
                        percent = (100 - Math.floor(percent * 100)) / 100;
                        this.setTime(percent);
                        this.setPercent(percent);
                        this.setShow();
                    }
                }
            }
        });
        letterBox.moveTween = Tween.to(letterBox, { x: (Road_1.fourRoadPosition[randomIndex].end.x + (this.heightAll)), y: 640 }, letterBox.wordObj.time, Ease.linearNone, handler);
        letterBox.moveTween.update = moveUpdateHandler;
        letterBox.moveTweenUpdate = moveUpdateHandler; //因为最后会给letter做Tween.clearAll(); 所以需要预留句柄做最后清除轨道痕迹回调
        letterBox.alphaTween = Tween.to(letterBox, { alpha: 1 }, letterBox.wordObj.time * 0.2);
        letterBox.on('UILetterBox_Remove_Event', this, this.removeLetter);
    };
    Main.prototype.post = function (event) {
        var data = event.data;
        if (data.data != undefined && data.data.length > 0) {
            data = event.data;
        }
        else {
            data = { "name": "castQuestions", "data": [
                    { questionId: 2101,
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
            };
        }
        this.typeLVL = 'type' + data.data[0].payload.skinType;
        var change, datas = data.data[0].payload.objects;
        for (var i_1 = datas.length - 1; i_1 >= 0; i_1--) {
            for (var j = 0; j < i_1; j++) {
                if (datas[j + 1].startTime < datas[j].startTime) {
                    change = datas[j + 1];
                    datas[j + 1] = datas[j];
                    datas[j] = change;
                }
            }
        }
        ;
        _this.data = data.data[0].payload;
        var list = datas;
        this.letterV = list[0].endTime - list[0].startTime;
        var Beats = [{ time: list[0].startTime, thing: list[0].obstacle ? '2' : '1' }];
        for (var i = 0; i < list.length; i++) {
            if (list[i + 1]) {
                var time = list[i + 1].startTime - list[i].startTime;
                Beats.push({ time: time, thing: list[i + 1].obstacle ? '2' : '1' });
            }
        }
        Beats0 = Beats;
    };
    return Main;
}());
//激活启动类
new Main();

},{"./Constants":1,"./GameConfig":2,"./LoadingDialog":3,"./Road":5,"./bg":6,"./end":7,"./ship":8,"./thing":9,"./tips":10}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bgx = 0;
exports.fourRoadPosition = [
    {
        start: {
            x: -150,
            y: 0,
            scaleX: 2,
            scaleY: 2,
        },
        end: {
            x: -320,
            y: 640,
            scaleX: 2,
            scaleY: 2,
        }
    }, {
        start: {
            x: -50,
            y: 0,
            scaleX: 2,
            scaleY: 2,
        },
        end: {
            x: -110,
            y: 640,
            scaleX: 2,
            scaleY: 2,
        }
    }, {
        start: {
            x: 50,
            y: 0,
            scaleX: 2,
            scaleY: 2,
        },
        end: {
            x: 90,
            y: 640,
            scaleX: 2,
            scaleY: 2,
        }
    }, {
        start: {
            x: 150,
            y: 0,
            scaleX: 2,
            scaleY: 2,
        },
        end: {
            x: 300,
            y: 640,
            scaleX: 2,
            scaleY: 2
        }
    }
];
exports.Beats0 = [
    { time: 2156, thing: "1" },
    { time: 2133, thing: "1" },
    { time: 2246, thing: "1" },
    { time: 2127, thing: "1" },
    { time: 2099, thing: "1" },
    { time: 2171, thing: "1" },
    { time: 2118, thing: "1" },
    { time: 2087, thing: "1" },
    { time: 2180, thing: "1" },
    { time: 2039, thing: "1" },
    { time: 2115, thing: "1" },
    { time: 2158, thing: "1" },
    { time: 2173, thing: "1" },
    { time: 2174, thing: "1" },
    { time: 2171, thing: "1" },
    { time: 2145, thing: "1" },
    { time: 2206, thing: "1" },
    { time: 2125, thing: "1" },
    { time: 2124, thing: "1" },
    { time: 2138, thing: "1" },
];
exports.Beats1 = [
    { time: 1189, thing: "1" },
    { time: 948, thing: "1" },
    { time: 1117, thing: "1" },
    { time: 1061, thing: "1" },
    { time: 1109, thing: "1" },
    { time: 1101, thing: "1" },
    { time: 1042, thing: "1" },
    { time: 1076, thing: "1" },
    { time: 1061, thing: "1" },
    { time: 1103, thing: "1" },
    { time: 1035, thing: "1" },
    { time: 1099, thing: "1" },
    { time: 1024, thing: "1" },
    { time: 1061, thing: "1" },
    { time: 1040, thing: "1" },
    { time: 1059, thing: "1" },
    { time: 1090, thing: "1" },
    { time: 1074, thing: "1" },
    { time: 1061, thing: "1" },
    { time: 1040, thing: "1" },
    { time: 991, thing: "1" },
    { time: 1147, thing: "1" },
    { time: 1025, thing: "1" },
    { time: 1077, thing: "1" },
    { time: 1013, thing: "1" },
    { time: 1200, thing: "1" },
    { time: 1094, thing: "1" },
    { time: 1078, thing: "1" },
    { time: 1077, thing: "1" },
    { time: 1038, thing: "1" },
    { time: 1119, thing: "1" },
    { time: 1035, thing: "1" },
    { time: 1185, thing: "1" },
    { time: 1109, thing: "1" },
    { time: 1003, thing: "1" },
    { time: 1025, thing: "1" },
    { time: 1065, thing: "1" },
    { time: 1139, thing: "1" },
    { time: 998, thing: "1" },
    { time: 1122, thing: "1" },
    { time: 1056, thing: "1" },
];
exports.Beats2 = [
    { time: 1095, thing: "1" },
    { time: 1102, thing: "1" },
    { time: 1130, thing: "1" },
    { time: 1014, thing: "1" },
    { time: 1119, thing: "1" },
    { time: 1080, thing: "1" },
    { time: 1058, thing: "1" },
    { time: 1068, thing: "1" },
    { time: 362, thing: "2" },
    { time: 262, thing: "1" },
    { time: 520, thing: "1" },
    { time: 520, thing: "1" },
    { time: 557, thing: "1" },
    { time: 543, thing: "1" },
    { time: 517, thing: "1" },
    { time: 524, thing: "1" },
    { time: 525, thing: "1" },
    { time: 540, thing: "1" },
    { time: 530, thing: "1" },
    { time: 502, thing: "1" },
    { time: 534, thing: "1" },
    { time: 522, thing: "1" },
    { time: 557, thing: "1" },
    { time: 563, thing: "1" },
    { time: 534, thing: "1" },
    { time: 531, thing: "1" },
    { time: 362, thing: "2" },
    { time: 232, thing: "1" },
    { time: 520, thing: "1" },
    { time: 592, thing: "1" },
    { time: 516, thing: "1" },
    { time: 466, thing: "1" },
    { time: 532, thing: "1" },
    { time: 491, thing: "1" },
    { time: 528, thing: "1" },
    { time: 500, thing: "1" },
    { time: 525, thing: "1" },
    { time: 510, thing: "1" },
    { time: 576, thing: "1" },
    { time: 548, thing: "1" },
    { time: 523, thing: "1" },
    { time: 545, thing: "1" },
    { time: 569, thing: "1" },
    { time: 493, thing: "1" },
    { time: 577, thing: "1" },
    { time: 518, thing: "1" },
    { time: 604, thing: "1" },
    { time: 485, thing: "1" },
    { time: 579, thing: "1" },
    { time: 515, thing: "1" },
    { time: 362, thing: "2" },
    { time: 250, thing: "1" },
    { time: 537, thing: "1" },
    { time: 547, thing: "1" },
    { time: 480, thing: "1" },
    { time: 601, thing: "1" },
    { time: 521, thing: "1" },
    { time: 584, thing: "1" },
    { time: 527, thing: "1" },
    { time: 499, thing: "1" },
    { time: 569, thing: "1" },
    { time: 551, thing: "1" },
    { time: 566, thing: "1" },
    { time: 557, thing: "1" },
    { time: 527, thing: "1" },
    { time: 362, thing: "2" },
    { time: 181, thing: "1" },
    { time: 561, thing: "1" },
    { time: 498, thing: "1" },
    { time: 529, thing: "1" },
    { time: 571, thing: "1" },
    { time: 495, thing: "1" },
    { time: 558, thing: "1" },
    { time: 557, thing: "1" },
    { time: 362, thing: "2" },
    { time: 246, thing: "1" },
    { time: 473, thing: "1" },
    { time: 522, thing: "1" },
    { time: 534, thing: "1" },
    { time: 572, thing: "1" },
    { time: 541, thing: "1" },
    { time: 580, thing: "1" },
    { time: 490, thing: "1" },
    { time: 555, thing: "1" }
];

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bg = /** @class */ (function (_super) {
    __extends(bg, _super);
    function bg() {
        var _this = _super.call(this) || this;
        _this.initBg();
        return _this;
    }
    bg.prototype.initBg = function () {
        var bgContainer = new Laya.Animation();
        bgContainer.loadAnimation("ani/bg.ani");
        bgContainer.width = 1008;
        bgContainer.height = 640;
        bgContainer.pivot(0, 0);
        bgContainer.pos(504, Laya.stage.height / 2);
        bgContainer.play(1, true);
        this.addChild(bgContainer);
        setTimeout(function () {
        }, 50);
    };
    return bg;
}(Laya.Sprite));
exports.default = bg;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = Laya.Event;
var Sprite = Laya.Sprite;
var Animation = Laya.Animation;
var Tween = Laya.Tween;
// import http from "./http";
var level = '0';
var that, LoadingDialog;
var centers, endshow;
var end = /** @class */ (function (_super) {
    __extends(end, _super);
    function end(thats, LoadingDialog) {
        var _this = this;
        that = thats;
        LoadingDialog = LoadingDialog;
        _this = _super.call(this) || this;
        level = that.typeLVL;
        // level = laya.net.LocalStorage.getItem('typeLVL')||'type1';
        _this.initEnd();
        return _this;
    }
    end.prototype.initEnd = function () {
        this.endContainer = new Sprite();
        Laya.SoundManager.playMusic("sound/end.mp3", 1);
        var bgCon = new Sprite();
        bgCon.graphics.drawRect(0, 0, 1380, 640, '#000');
        bgCon.alpha = 0.8;
        this.endContainer.addChild(bgCon);
        centers = new Sprite();
        centers.width = 1008;
        centers.height = 640;
        centers.pivot(504, 0);
        centers.pos(504, 0);
        this.endContainer.addChild(centers);
        // this.imgContainer = new Sprite();
        // this.imgContainer.loadImage("res/imgs/sg.png");
        // this.imgContainer.width = 953;
        // this.imgContainer.height = 550;
        // this.imgContainer.pivot(476.5,50);
        // this.imgContainer.pos(504,20);
        // centers.addChild(this.imgContainer);
        // var end = new Sprite();
        // end.loadImage("res/imgs/end.png");
        // end.width = 433;
        // end.height = 120;
        // end.pivot(216.5,0);
        // end.pos(504,300);
        // centers.addChild(end);
        // endTxt = new Text();
        // endTxt.fontSize = 40;
        // endTxt.width = 433;
        // endTxt.y = 30;
        // endTxt.align = "center"
        // endTxt.color = '#FFFFFF';
        // endTxt.bold = true;
        // endTxt.text = '继续努力!'
        // end.addChild(endTxt);
        this.endContainer.visible = false;
        this.addChild(this.endContainer);
    };
    end.prototype.showEndPanel = function (scoreObj, letterTotal) {
        //接口
        var data = {
            score: scoreObj.totalScore
        };
        var obj = {
            name: 'finishGame',
            data: {
                score: scoreObj.totalScore,
                perfect: scoreObj.perfect,
                // great:scoreObj.great, // great 个数
                // right:scoreObj.right, // right 个数
                miss: scoreObj.miss,
                bad: scoreObj.bad,
                obstacle: scoreObj.obstacle,
            }
        };
        window.parent.postMessage(obj, '*');
        // window.parent.postMessage(JSON.stringify(obj),'*');
        // var http = new http;
        // http.post('userInfo',data);    
        var start = scoreObj.totalScore > 30 ? scoreObj.totalScore > 65 ? scoreObj.totalScore > 95 ? "ani/end3.ani" : "ani/end2.ani" : "ani/end1.ani" : "ani/end0.ani";
        this.endshow = new Animation();
        this.endshow.width = 1008;
        this.endshow.height = 640;
        this.endshow.pivot(504, 0);
        this.endshow.pos(800, 0);
        this.endshow.play(0, false);
        this.endshow.loadAnimation(start);
        centers.addChild(this.endshow);
        // var star1 = new Sprite();
        // scoreObj.totalScore > 30?star1.loadImage("res/imgs/starON.png"):star1.loadImage("res/imgs/starOFF.png");
        // star1.width = 120;
        // star1.height = 118;
        // star1.pivot(60,0);
        // star1.pos(504-200,130);
        // centers.addChild(star1);
        // var star2 = new Sprite();
        // scoreObj.totalScore > 65?star2.loadImage("res/imgs/starON.png"):star2.loadImage("res/imgs/starOFF.png");        
        // star2.width = 120;
        // star2.height = 118;
        // star2.pivot(60,0);
        // star2.pos(504,80);
        // centers.addChild(star2);
        // var star3 = new Sprite();
        // scoreObj.totalScore > 95?star3.loadImage("res/imgs/starON.png"):star3.loadImage("res/imgs/starOFF.png");        
        // star3.width = 120;
        // star3.height = 118;
        // star3.pivot(60,0);
        // star3.pos(504+200,130);
        // centers.addChild(star3);
        this.buttonAgain = new Sprite();
        this.buttonAgain.loadImage("res/imgs/buttonAgain.png");
        this.buttonAgain.width = 240;
        this.buttonAgain.height = 90;
        this.buttonAgain.pivot(120, 0);
        this.buttonAgain.pos(690 - 170, 460);
        this.buttonAgain.scaleX = 0;
        this.buttonAgain.mouseEnabled = true;
        // this.buttonAgain.on(Event.MOUSE_OVER, this, function () {
        //     this.buttonAgain.graphics.clear();
        // });
        // this.buttonAgain.on(Event.MOUSE_OUT, this, function () {
        //     this.buttonAgain.graphics.clear();
        // });
        this.buttonAgain.on(Event.CLICK, this, function () {
            var _this = this;
            window.parent.postMessage({ name: 'endRestartGame', data: {} }, '*');
            setTimeout(function () {
                _this.buttonAgain.off(Event.CLICK, _this, function () { });
                _this.buttonNext.off(Event.CLICK, _this, function () { });
                _this.destroy();
            }, 500);
            Laya.timer.clearAll(that);
            that.GameManager();
        });
        centers.addChild(this.buttonAgain);
        // var againTxt = new Text();
        // againTxt.fontSize = 28;
        // againTxt.width = 240;
        // againTxt.x = -15;
        // againTxt.y = 30;
        // againTxt.align = "center"
        // againTxt.font = 'Charcoal CY';
        // againTxt.color = '#000000';
        // againTxt.bold = true;
        // againTxt.text = '再学一次'
        // this.buttonAgain.addChild(againTxt);
        Tween.to(this.buttonAgain, { scaleX: 1 }, 200);
        this.buttonNext = new Sprite();
        this.buttonNext.loadImage("res/imgs/buttonNext.png");
        this.buttonNext.width = 240;
        this.buttonNext.height = 90;
        this.buttonNext.pivot(120, 0);
        this.buttonNext.pos(690 + 170, 460);
        this.buttonNext.scaleX = 0;
        this.buttonNext.mouseEnabled = true;
        // this.buttonNext.on(Event.MOUSE_OVER, this, function () {
        //     this.buttonNext.graphics.clear();
        // });
        // this.buttonNext.on(Event.MOUSE_OUT, this, function () {
        //     this.buttonNext.graphics.clear();
        // });
        this.buttonNext.on(Event.CLICK, this, function () {
            var _this = this;
            window.parent.postMessage({ name: 'nextChapter', data: {} }, '*');
            // if(level == 'type1'){
            //     // laya.net.LocalStorage.setItem('typeLVL','type2')
            //     that.typeLVL = 'type2'
            // }
            // if(level == 'type2'){
            //     // laya.net.LocalStorage.setItem('typeLVL','type3')
            //     that.typeLVL = 'type3'
            // }
            // if(level == 'type3'){
            //     // laya.net.LocalStorage.setItem('typeLVL','type4')
            //     that.typeLVL = 'type4'
            // }
            // if(level == 'type4'){
            //     // laya.net.LocalStorage.setItem('typeLVL','type1')
            //     that.typeLVL = 'type1'
            // }
            Laya.stage.scaleMode = 'showall';
            that.loadingDialog.popup(true, false);
            this.alpha = 0;
            that.GameManager();
            setTimeout(function () {
                _this.buttonAgain.off(Event.CLICK, _this, function () { });
                _this.buttonNext.off(Event.CLICK, _this, function () { });
                _this.destroy();
            }, 500);
        });
        centers.addChild(this.buttonNext);
        // var nextTxt = new Text();
        // nextTxt.fontSize = 28;
        // nextTxt.x = -15;
        // nextTxt.y = 30;
        // nextTxt.width = 240;
        // nextTxt.align = "center"
        // nextTxt.font = 'Charcoal CY';
        // nextTxt.color = '#000000';
        // nextTxt.bold = true;
        // nextTxt.text = '下一章节'
        // this.buttonNext.addChild(nextTxt);
        Tween.to(this.buttonNext, { scaleX: 1 }, 200);
        this.endContainer.visible = true;
    };
    return end;
}(Laya.Sprite));
exports.default = end;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation = Laya.Animation;
var Sprite = Laya.Sprite;
var Event = Laya.Event;
var shipW = 200, that, padding = 0;
var ship = /** @class */ (function (_super) {
    __extends(ship, _super);
    function ship(thats) {
        var _this = _super.call(this) || this;
        // private ship = [new Animation(),new Animation(),new Animation(),new Animation()];
        _this.ship = [];
        that = thats;
        _this.ship =
            that.typeLVL == 'type1' ?
                [new Animation(), new Animation(), new Animation(), new Animation()] :
                [new Sprite(), new Sprite(), new Sprite(), new Sprite()];
        _this.init();
        return _this;
    }
    ship.prototype.init = function () {
        padding = 504;
        this.ship1 = new Sprite();
        this.ship2 = new Sprite();
        this.ship3 = new Sprite();
        this.ship4 = new Sprite();
        this.ship1.size(200, 200);
        this.ship2.size(200, 200);
        this.ship3.size(200, 200);
        this.ship4.size(200, 200);
        this.ship1.pivot(100, 100);
        this.ship2.pivot(100, 100);
        this.ship3.pivot(100, 100);
        this.ship4.pivot(100, 100);
        // this.ship1.graphics.drawRect(0, 0, 200, 200, '#fff');
        // this.ship2.graphics.drawRect(0, 0, 200, 200, '#000');
        // this.ship3.graphics.drawRect(0, 0, 200, 200, '#eee');
        // this.ship4.graphics.drawRect(0, 0, 200, 200, '#fff');
        if (that.typeLVL == 'type1') {
            this.ship1.pos(padding - 300, -50);
            this.ship2.pos(padding - 100, -50);
            this.ship3.pos(padding + 100, -50);
            this.ship4.pos(padding + 300, -50);
            this.ship[0] = new Animation();
            this.ship[0].x = 100;
            this.ship[0].y = 100;
            this.ship[0].loadAnimation("ani/stopship0.ani");
            this.ship[0].play(1, true);
            this.ship[1] = new Animation();
            this.ship[1].x = 100;
            this.ship[1].y = 100;
            this.ship[1].loadAnimation("ani/stopship1.ani");
            this.ship[1].play(1, true);
            this.ship[2] = new Animation();
            this.ship[2].x = 100;
            this.ship[2].y = 100;
            this.ship[2].loadAnimation("ani/stopship2.ani");
            this.ship[2].play(1, true);
            this.ship[3] = new Animation();
            this.ship[3].x = 100;
            this.ship[3].y = 100;
            this.ship[3].loadAnimation("ani/stopship3.ani");
            this.ship[3].play(1, true);
        }
        else {
            this.ship1.pos(padding - 300, -15);
            this.ship2.pos(padding - 100, -15);
            this.ship3.pos(padding + 100, -15);
            this.ship4.pos(padding + 300, -15);
            this.ship[0] = new Sprite();
            this.ship[0].pos(0, 0);
            this.ship[0].loadImage('res/imgs/' + that.typeLVL + '/m1.png');
            this.ship[1] = new Sprite();
            this.ship[1].loadImage('res/imgs/' + that.typeLVL + '/m2.png');
            this.ship[2] = new Sprite();
            this.ship[2].loadImage('res/imgs/' + that.typeLVL + '/m3.png');
            this.ship[3] = new Sprite();
            this.ship[3].loadImage('res/imgs/' + that.typeLVL + '/m4.png');
        }
        this.ship1.addChild(this.ship[0]);
        this.ship2.addChild(this.ship[1]);
        this.ship3.addChild(this.ship[2]);
        this.ship4.addChild(this.ship[3]);
        this.ship1.on(Event.CLICK, this, function () {
            that.onClickDown(0);
            console.log('0');
        });
        this.ship2.on(Event.CLICK, this, function () {
            that.onClickDown(1);
            console.log('1');
        });
        this.ship3.on(Event.CLICK, this, function () {
            that.onClickDown(2);
            console.log('2');
        });
        this.ship4.on(Event.CLICK, this, function () {
            that.onClickDown(3);
            console.log('3');
        });
        this.addChild(this.ship1);
        this.addChild(this.ship2);
        this.addChild(this.ship3);
        this.addChild(this.ship4);
    };
    ship.prototype.goship = function () {
        this.ship[0].loadAnimation("ani/goship0.ani");
        this.ship[1].loadAnimation("ani/goship1.ani");
        this.ship[2].loadAnimation("ani/goship2.ani");
        this.ship[3].loadAnimation("ani/goship3.ani");
    };
    ship.prototype.okship = function (index) {
        var ani = new Laya.Animation();
        ani.loadAnimation("ani/okship" + index + ".ani");
        ani.y = -30;
        this.ship[index].addChild(ani);
        ani.play(1, false);
        setTimeout(function () {
            ani.removeSelf();
        }, 400);
    };
    ship.prototype.bandship = function (index) {
        var ani = new Laya.Animation();
        ani.loadAnimation("ani/bandship" + index + ".ani");
        ani.scaleX = 1.1,
            ani.scaleY = 1.1,
            this.ship[index].addChild(ani);
        ani.play(1, false);
        setTimeout(function () {
            ani.removeSelf();
        }, 400);
    };
    return ship;
}(Laya.Sprite));
exports.default = ship;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handler = Laya.Handler;
var Sprite = Laya.Sprite;
var Tween = Laya.Tween;
var that;
var thing = /** @class */ (function (_super) {
    __extends(thing, _super);
    function thing(thats, wordObj) {
        var _this = _super.call(this) || this;
        that = thats;
        _this.wordObj = wordObj;
        _this.isOver = false; //是否已经排除
        _this.zimuCon = new Sprite();
        _this.addChild(_this.zimuCon);
        _this.addenergyImg();
        return _this;
    }
    thing.prototype.addenergyImg = function () {
        var imgSprite = new Sprite();
        imgSprite.loadImage('res/imgs/' + that.typeLVL + '/' + this.wordObj.letter.toLowerCase() + '.png');
        imgSprite.scaleX = 0.45;
        imgSprite.scaleY = 0.45;
        if (that.typeLVL == 'type1') {
            imgSprite.pivot(57, 94);
        }
        if (that.typeLVL == 'type2') {
            imgSprite.pivot(62, 124);
        }
        if (that.typeLVL == 'type3') {
            imgSprite.pivot(58, 126);
        }
        if (that.typeLVL == 'type4') {
            imgSprite.pivot(70, 68);
        }
        this.zimuCon.addChild(imgSprite);
    };
    thing.prototype.xiaoshi = function () {
        Tween.clearAll(this);
        this.isOver = true;
        Tween.to(this, { alpha: 0 }, 500, null, new Handler(this, function () {
            this.event('UIenergyBox_Remove_Event', [this]);
        }));
    };
    thing.prototype.setStatus = function (status) {
        this.wordObj.status = status;
    };
    thing.prototype.setStart = function (start) {
        this.wordObj.start = start;
    };
    thing.prototype.setTime = function (time) {
        this.wordObj.time = 3000 * time;
    };
    thing.prototype.setShow = function () {
        this.wordObj.isShow = true;
    };
    thing.prototype.setPercent = function (percent) {
        this.wordObj.percent = percent;
    };
    thing.prototype.bupipei = function (score) {
        this.wordObj.status = -1;
        this.xiaoshi();
    };
    thing.prototype.pipei = function () {
        this.wordObj.status = 1;
        this.xiaoshi();
    };
    thing.prototype.shitou = function () {
        this.wordObj.status = 1;
        this.xiaoshi();
    };
    return thing;
}(Laya.Sprite));
exports.default = thing;

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sprite = Laya.Sprite;
var Event = Laya.Event;
var Handler = Laya.Handler;
var TimeLine = Laya.TimeLine;
var Text = Laya.Text;
var Tween = Laya.Tween;
var Animation = Laya.Animation;
var Sound321 = Laya.SoundManager;
var that, timeLine, is321 = true, isclick = false;
var tips = /** @class */ (function (_super) {
    __extends(tips, _super);
    function tips(thats, gamePanel) {
        var _this = _super.call(this) || this;
        _this.allScore = 0;
        _this.countDown = 0;
        _this.countDown2 = 60;
        _this.scoreObj = {
            perfect: 0,
            good: 0,
            right: 0,
            miss: 0,
            bad: 0,
            obstacle: 0,
            totalScore: 0
        };
        _this.gamePanel = gamePanel;
        that = thats;
        _this.countDown2 = parseInt((thats.data.musicDuration / 1000).toString());
        // this.countDown2 = 55;
        _this.initTips();
        return _this;
    }
    tips.prototype.initTips = function () {
        this.badTip = new Sprite();
        this.badTip.loadImage("res/imgs/bad.png");
        this.badTip.alpha = 0;
        this.badTip.width = 510;
        this.badTip.height = 222;
        this.badTip.pivot(255, 111);
        this.badTip.pos(504, Laya.stage.height / 2 - 20);
        this.addChild(this.badTip);
        this.missTip = new Sprite();
        this.missTip.loadImage("res/imgs/miss.png");
        this.missTip.alpha = 0;
        this.missTip.width = 510;
        this.missTip.height = 222;
        this.missTip.pivot(255, 111);
        this.missTip.pos(504, Laya.stage.height / 2 - 20);
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
        this.perfectTip.pos(504, Laya.stage.height / 2 - 20);
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
        this.startGoTip.on(Event.MOUSE_DOWN, this, this.startGo);
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
        this.ready3Tip.pos(504, Laya.stage.height / 2 - 120);
        this.addChild(this.ready3Tip);
        this.ready2Tip = new Sprite();
        this.ready2Tip.loadImage("res/imgs/CountDown2.png");
        this.ready2Tip.alpha = 0;
        this.ready2Tip.pivot(46.5, 0);
        this.ready2Tip.height = 135;
        this.ready2Tip.pos(504, Laya.stage.height / 2 - 120);
        this.addChild(this.ready2Tip);
        this.ready1Tip = new Sprite();
        this.ready1Tip.loadImage("res/imgs/CountDown1.png");
        this.ready1Tip.alpha = 0;
        this.ready1Tip.pivot(33.5, 0);
        this.ready1Tip.height = 135;
        this.ready1Tip.pos(504, Laya.stage.height / 2 - 120);
        this.addChild(this.ready1Tip);
        this.readyTip = new Sprite();
        this.readyTip.loadImage("res/imgs/ready.png");
        this.readyTip.alpha = 0;
        this.readyTip.pivot(150, 0);
        this.readyTip.height = 135;
        this.readyTip.pos(504, Laya.stage.height / 2 - 120);
        this.addChild(this.readyTip);
        this.readyGoTip = new Sprite();
        this.readyGoTip.loadImage("res/imgs/GO.png");
        this.readyGoTip.alpha = 0;
        this.readyGoTip.pivot(150, 0);
        this.readyGoTip.height = 135;
        this.readyGoTip.pos(504, Laya.stage.height / 2 - 120);
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
    };
    tips.prototype.setCountDown = function () {
        Laya.timer.loop(1000, this, countDownHandler);
        function countDownHandler() {
            if (this.countDown == (this.countDown2 - 5)) {
                this.restartTip.destroy();
            }
            this.countDown++;
            var count = parseInt((this.countDown / 60 % 60).toString());
            var count2 = parseInt((this.countDown2 / 60 % 60).toString());
            var time = "0" + (count == 0 ? "0" : count) + ":" + (this.countDown - count * 60 < 0 ? (this.countDown < 10 ? "0" + this.countDown : this.countDown) : (this.countDown - count * 60 < 10 ? "0" + (this.countDown - count * 60) : (this.countDown - count * 60))) + "/" + "0" + (count2 == 0 ? "0" : count2) + ":" + (this.countDown2 - count2 * 60 < 0 ? (this.countDown2 < 10 ? "0" + this.countDown2 : this.countDown2) : (this.countDown2 - count2 * 60 < 10 ? "0" + (this.countDown2 - count2 * 60) : (this.countDown2 - count2 * 60)));
            this.countDownTxt.text = time;
            if (this.countDown == this.countDown2) {
                Laya.timer.clear(this, countDownHandler);
                this.event("End_Game_Event");
            }
        }
    };
    tips.prototype.play = function (e) {
        e.stopPropagation();
        this.event("Play_Game_Event");
    };
    tips.prototype.stop = function (e) {
        e.stopPropagation();
        this.event("Stop_Game_Event");
    };
    tips.prototype.restart = function (e) {
        if (isclick) {
            return;
        }
        isclick = true;
        window.parent.postMessage({ name: 'ingRestartGame', data: {} }, '*');
        Laya.timer.clearAll(this);
        if (timeLine && is321) {
            timeLine.off(Event.COMPLETE, this, function () { });
            timeLine.pause();
            timeLine.destroy();
        }
        is321 = true;
        Laya.SoundManager.stopAll();
        for (var _i = 0, _a = that.screenLetterBoxArr; _i < _a.length; _i++) {
            var i = _a[_i];
            i.moveTween.pause();
            i.destroy();
        }
        Laya.timer.clearAll(that);
        this.gamePanel.destroy();
        setTimeout(function () {
            that.GameManager();
        }, 500);
    };
    tips.prototype.setScore = function (addScore) {
        this.scoreObj.totalScore += addScore;
        // this.scoreTxt.text = parseInt((this.scoreObj.totalScore).toFixed(1)).toString();
    };
    tips.prototype.getScore = function () {
        return this.scoreObj;
    };
    tips.prototype.showPlayTip = function (addScore) {
        var dangeScore = 0;
        this.scoreObj.obstacle++;
        if (addScore == 20) {
            Laya.SoundManager.playSound("sound/beat.mp3", 1);
            this.scoreObj.perfect++;
            dangeScore = parseFloat((100 / that.gouziLength).toFixed(1));
            this.showTip(this.perfectTip);
        }
        else if (addScore == 10) {
            this.scoreObj.good++;
            dangeScore = parseFloat(((100 / that.gouziLength) * 0.8).toFixed(1));
            this.showTip(this.greatTip);
        }
        else if (addScore == 5) {
            this.scoreObj.right++;
            dangeScore = parseFloat(((100 / that.gouziLength) * 0.5).toFixed(1));
            this.showTip(this.rightTip);
        }
        else if (addScore == 0) {
            Laya.SoundManager.playSound("sound/button.mp3", 1);
            this.scoreObj.miss++;
            this.showTip(this.missTip);
        }
        else if (addScore == -1) {
            Laya.SoundManager.playSound("sound/bad.mp3", 1);
            this.scoreObj.bad++;
            this.showTip(this.badTip);
        }
        this.setScore(dangeScore);
    };
    tips.prototype.showTip = function (newTip) {
        if (this.lastTip) {
            Tween.clearAll(this.lastTip);
            this.lastTip.alpha = 0;
            this.lastTip.scaleX = 0.4;
            this.lastTip.scaleY = 0.4;
        }
        var handler = new Handler(this.lastTip, function () {
            Tween.to(newTip, { alpha: 0, }, 100, null, null, 250);
        });
        newTip.scaleX = 0.4;
        newTip.scaleY = 0.4;
        newTip.y = (Laya.stage.height) / 2;
        newTip.alpha = 0;
        Tween.to(newTip, { alpha: 1, scaleX: 1, scaleY: 1 }, 400, null, handler);
        this.lastTip = newTip;
    };
    tips.prototype.startGo = function (e) {
        isclick = false;
        e.stopPropagation();
        this.topBanTip.alpha = 0;
        this.titleTxt.alpha = 0;
        this.startGoTip.alpha = 0;
        this.topBanTip.y = 1000;
        this.startGoTip.y = 1000;
        var _that = this;
        this.long = new Animation();
        // this.long.loadAnimation("ani/"+that.typeLVL+".ani");
        this.long.loadAnimation("ani/type1.ani");
        this.long.width = 1008;
        this.long.height = 640;
        this.long.pivot(504, 0);
        this.long.pos(504, 0);
        this.long.play(0, false);
        setTimeout(function () {
            Laya.SoundManager.playMusic(that.data.explainAudioUrl, 1, handler);
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
    };
    tips.prototype.readyGO = function () {
        this.timeTip = new Sprite();
        this.timeTip.loadImage("res/imgs/time.png");
        this.timeTip.width = 250;
        this.timeTip.height = 55;
        this.timeTip.pos(504 + 100, 32);
        this.addChild(this.timeTip);
        this.countDownTxt = new Text();
        this.countDownTxt.width = 250;
        this.countDownTxt.fontSize = 22;
        this.countDownTxt.color = "#FFFFFF";
        this.countDownTxt.alpha = 1;
        this.countDownTxt.y = 19;
        this.countDownTxt.x = 95;
        var count2 = parseInt((this.countDown2 / 60 % 60).toString());
        var time = "00:00/" + "0" + (count2 == 0 ? "0" : count2) + ":" + (this.countDown2 - count2 * 60 < 0 ? (this.countDown2 < 10 ? "0" + this.countDown2 : this.countDown2) : (this.countDown2 - count2 * 60 < 10 ? "0" + (this.countDown2 - count2 * 60) : (this.countDown2 - count2 * 60)));
        this.countDownTxt.text = time;
        this.timeTip.addChild(this.countDownTxt);
        this.scoreObj.totalScore = 0;
        this.restartTip = new Sprite();
        this.restartTip.loadImage("res/imgs/restart.png");
        this.restartTip.alpha = 1;
        this.restartTip.width = 60;
        this.restartTip.height = 60;
        this.restartTip.pos(504 + 405, 34);
        this.addChild(this.restartTip);
        timeLine = new TimeLine();
        Sound321.autoStopMusic = true;
        Sound321.soundVolume = 3;
        Sound321.playMusic("sound/321.mp3", 1);
        timeLine.addLabel("ready3", 0).to(this.ready3Tip, { scaleX: 1, scaleY: 1, alpha: 1 }, 500, null, 0)
            .addLabel("ready3", 0).to(this.ready3Tip, { alpha: 0 }, 500, null, 0)
            .addLabel("ready2", 0).to(this.ready2Tip, { scaleX: 1, scaleY: 1, alpha: 1 }, 500, null, 0)
            .addLabel("ready2", 0).to(this.ready2Tip, { alpha: 0 }, 500, null, 0)
            .addLabel("ready1", 0).to(this.ready1Tip, { scaleX: 1, scaleY: 1, alpha: 1 }, 500, null, 0)
            .addLabel("ready1", 0).to(this.ready1Tip, { alpha: 0 }, 500, null, 0)
            .addLabel("ready", 0).to(this.readyTip, { scaleX: 1, scaleY: 1, alpha: 1 }, 500, null, 0)
            .addLabel("ready", 0).to(this.readyTip, { alpha: 0 }, 500, null, 0)
            .addLabel("readyGO", 0).to(this.readyGoTip, { scaleX: 1, scaleY: 1, alpha: 1 }, 500, null, 0)
            .addLabel("readyGO", 0).to(this.readyGoTip, { alpha: 0 }, 500, null, 0);
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
            this.restartTip.on(Event.MOUSE_DOWN, this, this.restart);
            timeLine.destroy();
            is321 = false;
            this.setCountDown();
            this.event("Start_Game_Event");
        }
    };
    return tips;
}(Laya.Sprite));
exports.default = tips;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog = Laya.Dialog;
var REG = Laya.ClassUtils.regClass;
var ui;
(function (ui) {
    var dialog;
    (function (dialog) {
        var LoadingDialogUI = /** @class */ (function (_super) {
            __extends(LoadingDialogUI, _super);
            function LoadingDialogUI() {
                return _super.call(this) || this;
            }
            LoadingDialogUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(LoadingDialogUI.uiView);
            };
            LoadingDialogUI.uiView = { "type": "Dialog", "props": { "width": 640, "height": 640, "autoDestroyAtClosed": false }, "compId": 2, "child": [{ "type": "Animation", "props": { "y": 320, "x": 504, "source": "ani/load.ani", "rotation": -90, "pivotY": 0, "pivotX": 0, "autoPlay": true }, "compId": 10 }], "loadList": ["ani/load.ani"], "loadList3D": [] };
            return LoadingDialogUI;
        }(Dialog));
        dialog.LoadingDialogUI = LoadingDialogUI;
        REG("ui.dialog.LoadingDialogUI", LoadingDialogUI);
    })(dialog = ui.dialog || (ui.dialog = {}));
})(ui = exports.ui || (exports.ui = {}));

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9MYXlhQWlySURFX2JldGEuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9Db25zdGFudHMudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9Mb2FkaW5nRGlhbG9nLnRzIiwic3JjL01haW4udHMiLCJzcmMvUm9hZC50cyIsInNyYy9iZy50cyIsInNyYy9lbmQudHMiLCJzcmMvc2hpcC50cyIsInNyYy90aGluZy50cyIsInNyYy90aXBzLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQSxLQUFLO0FBQ0w7SUFBQTtJQWtJQSxDQUFDO0lBaklVLGlCQUFPLEdBQUcsc0JBQXNCLENBQUE7SUFDaEMsa0JBQVEsR0FBRyx3QkFBd0IsQ0FBQTtJQUNuQyxpQkFBTyxHQUFHLHNCQUFzQixDQUFBO0lBQ2hDLGlCQUFPLEdBQUcsc0JBQXNCLENBQUE7SUFDaEMsa0JBQVEsR0FBRyx1QkFBdUIsQ0FBQTtJQUNsQyxrQkFBUSxHQUFHLHVCQUF1QixDQUFBO0lBQ2xDLGtCQUFRLEdBQUcsdUJBQXVCLENBQUE7SUFDbEMsa0JBQVEsR0FBRyx1QkFBdUIsQ0FBQTtJQUNsQyxrQkFBUSxHQUFHLHdCQUF3QixDQUFBO0lBQ25DLGlCQUFPLEdBQUcsc0JBQXNCLENBQUE7SUFDaEMsaUJBQU8sR0FBRyxzQkFBc0IsQ0FBQTtJQUNoQyxrQkFBUSxHQUFHLHVCQUF1QixDQUFBO0lBQ2xDLGtCQUFRLEdBQUcsdUJBQXVCLENBQUE7SUFDbEMsa0JBQVEsR0FBRyx1QkFBdUIsQ0FBQTtJQUNsQyxrQkFBUSxHQUFHLHVCQUF1QixDQUFBO0lBQ2xDLGtCQUFRLEdBQUcsd0JBQXdCLENBQUE7SUFD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TUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxVQUFVO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxVQUFVO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxVQUFVO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxVQUFVO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxLQUFLO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxFQUFFO1lB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LEtBQUs7WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsS0FBSztZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxLQUFLO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsS0FBSztZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxLQUFLO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsT0FBTztZQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMs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RSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEdBQUc7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsR0FBRztZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxHQUFHO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEdBQUc7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsR0FBRztZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxHQUFHO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEdBQUc7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFB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QUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDNUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM3RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dDQUM3RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Z0NBQzdELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFB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QUNXLFFBQUEsTUFBTSxHQUFHO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0NBQzdCLENBQUE7QUFDWSxRQUFBLE1BQU0sR0FBRztJQUNsQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtDQUM3QixDQUFBO0FBQ1ksUUFBQSxNQUFNLEdBQUc7SUFDbEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFF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SUFBSSxTQUFTLEVBQUUsRUFBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDbEUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxFQUFDLElBQUksTUFBTSxFQUFFLEVBQUMsSUFBSSxNQUFNLEVBQUUsRUFBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDMUQsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFBOztJQUNmLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBQ0ksT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFD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QUFPLEdBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUQ7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVB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R0FBRyxHQUFHLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcs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UUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUN2RCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQ3pELElBQUksSUFBSSxHQUFHLEdBQUcsR0FBQyxDQUFDLEtBQUssSUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQSxDQUFDLENBQUEsS0FBSyxDQUFDLEdBQUMsR0FBRyxHQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxLQUFLLEdBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUEsR0FBRyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQSxHQUFHLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssR0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxDQUFDLE1BQU0sSUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFBLEdBQUcsQ0FBQSxDQUFDLENBQUEsTUFBTSxDQUFDLEdBQUMsR0FBRyxHQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBQyxNQUFNLEdBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUEsR0FBRyxHQUFDLElBQUksQ0FB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QUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ3hGLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDbEUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDeEYsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNsRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUN4RixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ2xFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUks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RUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxjQUFjLENBQUMsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLENBQUM7WUFNelQsc0JBQUM7U0FQRCxBQU9DLENBUG9DLE1BQU0sR0FPMUM7UUFQWSxzQkFBZSxrQkFPM0IsQ0FBQTtRQUNELEdBQUcsQ0FBQywyQkFBMkIsRUFBQyxlQUFlLENBQUMsQ0FBQztJQUNyRCxDQUFDLEVBVmdCLE1BQU0sR0FBTixTQUFNLEtBQU4sU0FBTSxRQVV0QjtBQUFELENBQUMsRUFWYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFVZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL+mihOWjsOaYjlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RhbnRzIHtcbiAgICBzdGF0aWMgcGVyZmVjdCA9IFwicmVzL2ltZ3MvcGVyZmVjdC5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMV9iZyA9IFwicmVzL2ltZ3MvdHlwZTEvd2JnLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUxXzEgPSBcInJlcy9pbWdzL3R5cGUxLzEucG5nXCJcbiAgICBzdGF0aWMgdHlwZTFfMiA9IFwicmVzL2ltZ3MvdHlwZTEvMi5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMV9tMSA9IFwicmVzL2ltZ3MvdHlwZTEvbTEucG5nXCJcbiAgICBzdGF0aWMgdHlwZTFfbTIgPSBcInJlcy9pbWdzL3R5cGUxL20yLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUxX20zID0gXCJyZXMvaW1ncy90eXBlMS9tMy5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMV9tNCA9IFwicmVzL2ltZ3MvdHlwZTEvbTQucG5nXCJcbiAgICBzdGF0aWMgdHlwZTJfYmcgPSBcInJlcy9pbWdzL3R5cGUyL3diZy5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMl8xID0gXCJyZXMvaW1ncy90eXBlMi8xLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUyXzIgPSBcInJlcy9pbWdzL3R5cGUyLzIucG5nXCJcbiAgICBzdGF0aWMgdHlwZTJfbTEgPSBcInJlcy9pbWdzL3R5cGUyL20xLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUyX20yID0gXCJyZXMvaW1ncy90eXBlMi9tMi5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMl9tMyA9IFwicmVzL2ltZ3MvdHlwZTIvbTMucG5nXCJcbiAgICBzdGF0aWMgdHlwZTJfbTQgPSBcInJlcy9pbWdzL3R5cGUyL200LnBuZ1wiXG4gICAgc3RhdGljIHR5cGUzX2JnID0gXCJyZXMvaW1ncy90eXBlMy93YmcucG5nXCJcbiAgICBzdGF0aWMgdHlwZTNfMSA9IFwicmVzL2ltZ3MvdHlwZTMvMS5wbmdcIlxuICAgIHN0YXRpYyB0eXBlM18yID0gXCJyZXMvaW1ncy90eXBlMy8yLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUzX20xID0gXCJyZXMvaW1ncy90eXBlMy9tMS5wbmdcIlxuICAgIHN0YXRpYyB0eXBlM19tMiA9IFwicmVzL2ltZ3MvdHlwZTMvbTIucG5nXCJcbiAgICBzdGF0aWMgdHlwZTNfbTMgPSBcInJlcy9pbWdzL3R5cGUzL20zLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUzX200ID0gXCJyZXMvaW1ncy90eXBlMy9tNC5wbmdcIlxuICAgIHN0YXRpYyB0eXBlNF9iZyA9IFwicmVzL2ltZ3MvdHlwZTQvd2JnLnBuZ1wiXG4gICAgc3RhdGljIHR5cGU0XzEgPSBcInJlcy9pbWdzL3R5cGU0LzEucG5nXCJcbiAgICBzdGF0aWMgdHlwZTRfMiA9IFwicmVzL2ltZ3MvdHlwZTQvMi5wbmdcIlxuICAgIHN0YXRpYyB0eXBlNF9tMSA9IFwicmVzL2ltZ3MvdHlwZTQvbTEucG5nXCJcbiAgICBzdGF0aWMgdHlwZTRfbTIgPSBcInJlcy9pbWdzL3R5cGU0L20yLnBuZ1wiXG4gICAgc3RhdGljIHR5cGU0X20zID0gXCJyZXMvaW1ncy90eXBlNC9tMy5wbmdcIlxuICAgIHN0YXRpYyB0eXBlNF9tNCA9IFwicmVzL2ltZ3MvdHlwZTQvbTQucG5nXCJcbiAgICBzdGF0aWMgYmFkID0gXCJyZXMvaW1ncy9iYWQucG5nXCJcbiAgICBzdGF0aWMgYmcxID0gXCJiZy8xLnBuZ1wiXG4gICAgc3RhdGljIGJnMiA9IFwiYmcvMi5wbmdcIlxuICAgIHN0YXRpYyBiZzMgPSBcImJnLzMucG5nXCJcbiAgICBzdGF0aWMgYmc0ID0gXCJiZy80LnBuZ1wiXG4gICAgc3RhdGljIGJnNSA9IFwiYmcvNS5wbmdcIlxuICAgIHN0YXRpYyBiZzYgPSBcImJnLzYucG5nXCJcbiAgICBzdGF0aWMgYmc3ID0gXCJiZy83LnBuZ1wiXG4gICAgc3RhdGljIGJnOCA9IFwiYmcvOC5wbmdcIlxuICAgIHN0YXRpYyBiZzkgPSBcImJnLzkucG5nXCJcbiAgICBzdGF0aWMgYmcxMCA9IFwiYmcvMTAucG5nXCJcbiAgICBzdGF0aWMgYmcxMSA9IFwiYmcvMTEucG5nXCJcbiAgICBzdGF0aWMgYmcxMiA9IFwiYmcvMTIucG5nXCJcbiAgICBzdGF0aWMgYmcxMyA9IFwiYmcvMTMucG5nXCJcbiAgICBzdGF0aWMgYmcxNCA9IFwiYmcvMTQucG5nXCJcbiAgICBzdGF0aWMgYmcxNSA9IFwiYmcvMTUucG5nXCJcbiAgICBzdGF0aWMgYmcxNiA9IFwiYmcvMTYucG5nXCJcbiAgICBzdGF0aWMgYmcxNyA9IFwiYmcvMTcucG5nXCJcbiAgICBzdGF0aWMgYmcxOCA9IFwiYmcvMTgucG5nXCJcbiAgICBzdGF0aWMgYmcxOSA9IFwiYmcvMTkucG5nXCJcbiAgICBzdGF0aWMgYmcyMCA9IFwiYmcvMjAucG5nXCJcbiAgICBzdGF0aWMgYmcyMSA9IFwiYmcvMjEucG5nXCJcbiAgICBzdGF0aWMgYmcyMiA9IFwiYmcvMjIucG5nXCJcbiAgICBzdGF0aWMgYmcyMyA9IFwiYmcvMjMucG5nXCJcbiAgICBzdGF0aWMgYmcyNCA9IFwiYmcvMjQucG5nXCJcbiAgICBzdGF0aWMgYmcyNSA9IFwiYmcvMjUucG5nXCJcbiAgICBzdGF0aWMgYmcyNiA9IFwiYmcvMjYucG5nXCJcbiAgICBzdGF0aWMgYmcyNyA9IFwiYmcvMjcucG5nXCJcbiAgICBzdGF0aWMgYmcyOCA9IFwiYmcvMjgucG5nXCJcbiAgICBzdGF0aWMgYmcyOSA9IFwiYmcvMjkucG5nXCJcbiAgICBzdGF0aWMgYmczMCA9IFwiYmcvMzAucG5nXCJcbiAgICBzdGF0aWMgYmczMSA9IFwiYmcvMzEucG5nXCJcbiAgICBzdGF0aWMgYmczMiA9IFwiYmcvMzIucG5nXCJcbiAgICBzdGF0aWMgYmczMyA9IFwiYmcvMzMucG5nXCJcbiAgICBzdGF0aWMgYmczNCA9IFwiYmcvMzQucG5nXCJcbiAgICBzdGF0aWMgYmczNSA9IFwiYmcvMzUucG5nXCJcbiAgICBzdGF0aWMgYnV0dG9uQWdhaW4gPSBcInJlcy9pbWdzL2J1dHRvbkFnYWluLnBuZ1wiXG4gICAgc3RhdGljIGJ1dHRvbk5leHQgPSBcInJlcy9pbWdzL2J1dHRvbk5leHQucG5nXCJcbiAgICBzdGF0aWMgYnV0dG9uU3RhcnQgPSBcInJlcy9pbWdzL2J1dHRvblN0YXJ0LnBuZ1wiXG4gICAgc3RhdGljIGVuZXJneSA9IFwicmVzL2ltZ3MvdHlwZTEvMS5wbmdcIlxuICAgIHN0YXRpYyBvYnN0YWNsZSA9IFwicmVzL2ltZ3MvdHlwZTEvMi5wbmdcIlxuICAgIHN0YXRpYyBtaXNzID0gXCJyZXMvaW1ncy9taXNzLnBuZ1wiXG4gICAgc3RhdGljIHJlc3RhcnQgPSBcInJlcy9pbWdzL3Jlc3RhcnQucG5nXCJcbiAgICBzdGF0aWMgc2cgPSBcInJlcy9pbWdzL3NnLnBuZ1wiXG4gICAgc3RhdGljIHN0YXJPRkYgPSBcInJlcy9pbWdzL3N0YXJPRkYucG5nXCJcbiAgICBzdGF0aWMgc3Rhck9OID0gXCJyZXMvaW1ncy9zdGFyT04ucG5nXCJcbiAgICBzdGF0aWMgdGltZSA9IFwicmVzL2ltZ3MvdGltZS5wbmdcIlxuICAgIHN0YXRpYyB0b3BCYW4gPSBcInJlcy9pbWdzL3RvcEJhbi5wbmdcIlxuXG4gICAgc3RhdGljIGJhZGJ1bCA9IFwicmVzL2F0bGFzL3NoaXAvYmFkL2J1bC5wbmdcIlxuICAgIHN0YXRpYyBiYWRncmUgPSBcInJlcy9hdGxhcy9zaGlwL2JhZC9ncmUucG5nXCJcbiAgICBzdGF0aWMgYmFkcmVkID0gXCJyZXMvYXRsYXMvc2hpcC9iYWQvcmVkLnBuZ1wiXG4gICAgc3RhdGljIGJhZHllbCA9IFwicmVzL2F0bGFzL3NoaXAvYmFkL3llbC5wbmdcIlxuXG4gICAgc3RhdGljIG9rYnVsID0gXCJyZXMvYXRsYXMvc2hpcC9vay9idWwucG5nXCJcbiAgICBzdGF0aWMgb2tncmUgPSBcInJlcy9hdGxhcy9zaGlwL29rL2dyZS5wbmdcIlxuICAgIHN0YXRpYyBva3JlZCA9IFwicmVzL2F0bGFzL3NoaXAvb2svcmVkLnBuZ1wiXG4gICAgc3RhdGljIG9reWVsID0gXCJyZXMvYXRsYXMvc2hpcC9vay95ZWwucG5nXCJcblxuICAgIHN0YXRpYyBnb2J1bCA9IFwicmVzL2F0bGFzL3NoaXAvZ28vYnVsLnBuZ1wiXG4gICAgc3RhdGljIGdvZ3JlID0gXCJyZXMvYXRsYXMvc2hpcC9nby9ncmUucG5nXCJcbiAgICBzdGF0aWMgZ29yZWQgPSBcInJlcy9hdGxhcy9zaGlwL2dvL3JlZC5wbmdcIlxuICAgIHN0YXRpYyBnb3llbCA9IFwicmVzL2F0bGFzL3NoaXAvZ28veWVsLnBuZ1wiXG5cbiAgICBzdGF0aWMgc2hvcGJ1bCA9IFwicmVzL2F0bGFzL3NoaXAvc2hvcC9idWwucG5nXCJcbiAgICBzdGF0aWMgc2hvcGdyZSA9IFwicmVzL2F0bGFzL3NoaXAvc2hvcC9ncmUucG5nXCJcbiAgICBzdGF0aWMgc2hvcHJlZCA9IFwicmVzL2F0bGFzL3NoaXAvc2hvcC9yZWQucG5nXCJcbiAgICBzdGF0aWMgc2hvcHllbCA9IFwicmVzL2F0bGFzL3NoaXAvc2hvcC95ZWwucG5nXCJcblxuICAgIHN0YXRpYyBzb3VuZDAgPSBcInNvdW5kLzMyMS5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZDEgPSBcInNvdW5kL2J1dHRvbi5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZDIgPSBcInNvdW5kL2JlYXQubXAzXCJcbiAgICBzdGF0aWMgc291bmQzID0gXCJzb3VuZC9lbmQubXAzXCJcbiAgICBzdGF0aWMgc291bmQ0ID0gXCJzb3VuZC9iYWQubXAzXCJcbiAgICBzdGF0aWMgQ291bnREb3duMSA9IFwicmVzL2ltZ3MvQ291bnREb3duMS5wbmdcIlxuICAgIHN0YXRpYyBDb3VudERvd24yID0gXCJyZXMvaW1ncy9Db3VudERvd24yLnBuZ1wiXG4gICAgc3RhdGljIENvdW50RG93bjMgPSBcInJlcy9pbWdzL0NvdW50RG93bjMucG5nXCJcbiAgICBzdGF0aWMgcmVhZHkgPSBcInJlcy9pbWdzL3JlYWR5LnBuZ1wiXG4gICAgc3RhdGljIGdvID0gXCJyZXMvaW1ncy9HTy5wbmdcIlxuICAgIHN0YXRpYyBsb25nID0gXCJyZXMvYXRsYXMvbG9uZy5wbmdcIlxuICAgIHN0YXRpYyBsb25nYmcxID0gXCJsb25nL2JnMS5wbmdcIlxuICAgIHN0YXRpYyBsb25nYmcyID0gXCJsb25nL2JnMi5wbmdcIlxuICAgIHN0YXRpYyBsb25nYmczID0gXCJsb25nL2JnMy5wbmdcIlxuICAgIHN0YXRpYyBsb25nYmc0ID0gXCJsb25nL2JnNC5wbmdcIlxuICAgIHN0YXRpYyBsb2FkYmcgPSBcImxvYWQvYmcucG5nXCJcbiAgICBzdGF0aWMgbG9hZCA9IFwicmVzL2F0bGFzL2xvYWQucG5nXCJcbiAgICBzdGF0aWMgbG9hZDEgPSBcInJlcy9hdGxhcy9sb2FkMS5wbmdcIlxuICAgIHN0YXRpYyB0ZXN0ID0gXCJyZXMvYXRsYXMvc2hpcC5wbmdcIlxuICAgIHN0YXRpYyBsb25nU1dGID0gXCJyZXMvYXRsYXMvbG9uZy9sb25nU1dGLnBuZ1wiXG4gICAgc3RhdGljIGxvbmdTV0YxID0gXCJyZXMvYXRsYXMvbG9uZy9sb25nU1dGMS5wbmdcIlxuICAgIHN0YXRpYyBsb25nU1dGMiA9IFwicmVzL2F0bGFzL2xvbmcvbG9uZ1NXRjIucG5nXCJcbiAgICBzdGF0aWMgbG9uZ1NXRjMgPSBcInJlcy9hdGxhcy9sb25nL2xvbmdTV0YzLnBuZ1wiXG5cbiAgICBzdGF0aWMgZW5kMCA9IFwicmVzL2F0bGFzL2VuZC8wLnBuZ1wiXG4gICAgc3RhdGljIGVuZDEgPSBcInJlcy9hdGxhcy9lbmQvMS5wbmdcIlxuICAgIHN0YXRpYyBlbmQyID0gXCJyZXMvYXRsYXMvZW5kLzIucG5nXCJcbiAgICBzdGF0aWMgZW5kMyA9IFwicmVzL2F0bGFzL2VuZC8zLnBuZ1wiXG4gICAgc3RhdGljIGVuZDAwMSA9IFwicmVzL2F0bGFzL2VuZC8wMC5wbmdcIlxuICAgIHN0YXRpYyBlbmQwMDIgPSBcInJlcy9hdGxhcy9lbmQvMDAxLnBuZ1wiXG5cbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xMzgwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9NjQwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJzaG93YWxsXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJob3Jpem9udGFsXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cIm1pZGRsZVwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJjZW50ZXJcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cImRpYWxvZy9Mb2FkaW5nRGlhbG9nLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuXHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi91aS9sYXlhTWF4VUlcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdEaWFsb2cgZXh0ZW5kcyB1aS5kaWFsb2cuTG9hZGluZ0RpYWxvZ1VJIHtcbiAgICAvLyBwcml2YXRlIHByb2dyZXNzID0gJzAnXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICAvLyB0aGlzLndpZHRoID0gMTM4MDtcbiAgICAgICAgLy8gdGhpcy5oZWlnaHQgPSA2NDA7XG4gICAgICAgIC8vIHRoaXMuYXV0b0Rlc3Ryb3lBdENsb3NlZCA9IHRydWVcbiAgICAgICAgdGhpcy5pc1BvcHVwQ2VudGVyID0gdHJ1ZVxuICAgICAgICAvLyB0aGlzLnBvcygwLCAwKVxuICAgIH1cblxuICAgIG9uT3BlbmVkKCkge1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVByb2dyZXNzVmFsdWUoMCkgICAgXG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVByb2dyZXNzVmFsdWUobmJlcjogbnVtYmVyKSB7XG4gICAgICAgIC8vIGlmICghdGhpcy5wcm9ncmVzcykge1xuICAgICAgICAvLyAgICAgTGF5YS50aW1lci5vbmNlKDIwMCwgdGhpcywgdGhpcy5jaGFuZ2VQcm9ncmVzc1ZhbHVlKVxuICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc3QgbnVtID0gTWF0aC5jZWlsKG5iZXIgKiAxMDApICsgXCIlXCJcbiAgICAgICAgLy8gdGhpcy5wcm9ncmVzcy50ZXh0ID0gbnVtO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVUaXAodGlwOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gdGhpcy5wcm9ncmVzcy50ZXh0ID0gdGlwXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBFYXNlID0gTGF5YS5FYXNlO1xyXG5pbXBvcnQgSGFuZGxlciA9IExheWEuSGFuZGxlcjtcclxuaW1wb3J0IFNvdW5kTWFuYWdlciA9IExheWEuU291bmRNYW5hZ2VyO1xyXG5pbXBvcnQgU3ByaXRlID0gTGF5YS5TcHJpdGU7XHJcbmltcG9ydCBTdGFnZSA9IExheWEuU3RhZ2U7XHJcbmltcG9ydCBUd2VlbiA9IExheWEuVHdlZW47XHJcbmltcG9ydCBMb2FkaW5nRGlhbG9nIGZyb20gXCIuL0xvYWRpbmdEaWFsb2dcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IEJnIGZyb20gXCIuL2JnXCI7XHJcbmltcG9ydCBUaXBzIGZyb20gXCIuL3RpcHNcIjtcclxuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5pbXBvcnQgRW5kIGZyb20gXCIuL2VuZFwiO1xyXG5pbXBvcnQgVGhpbmcgZnJvbSBcIi4vdGhpbmdcIjtcclxuXHJcbmxldCBfdGhpcyxnYW1lUGFuZWwsXHJcbiAgICBpSW5kZXggPSAwLFxyXG4gICAgbW91c2VSID0gMCxcclxuICAgIHRoaW5nTGlzdCA9IFtdLFxyXG4gICAgaXNQYXVzZSA9IGZhbHNlLFxyXG4gICAgc2hpcFJvYWQgPSAxMDAsXHJcbiAgICBzaGlwV2lkdGggPSAyMDAsXHJcbiAgICByb2FkcyA9IDAsXHJcbiAgICBwZXJjZW50LEJlYXRzMCxCZWF0czEsQmVhdHMyLFxyXG4gICAgYmd4O1xyXG4gICAgXHJcbmltcG9ydCB7Zm91clJvYWRQb3NpdGlvbn0gZnJvbSBcIi4vUm9hZFwiO1xyXG5cclxuY2xhc3MgTWFpbiB7XHJcbiAgICBwcml2YXRlIGxvYWRpbmdEaWFsb2c6IExvYWRpbmdEaWFsb2c7XHJcblx0cHJpdmF0ZSBiZ01hbmFnZXI7Ly/muLjmiI/kuLvog4zmma9cclxuICAgIHByaXZhdGUgZW5kTWFuYWdlcjsvL+e7k+adn+WuueWZqFxyXG4gICAgcHJpdmF0ZSBzaGlwQ29udGFpbmVyOy8v6Ii556e75Yqo5a655ZmoXHJcbiAgICBwcml2YXRlIGJ1dHRvbndpZHRoO1xyXG4gICAgcHJpdmF0ZSBnYW1lUGFuZWw7Ly/muLjmiI/ljLrlrrnlmahcclxuICAgIHByaXZhdGUgdGhpbmdSb2FkOy8v5ryC5rWB54mp5a655ZmoXHJcbiAgICBwcml2YXRlIHRpcHNNYW5hZ2VyOy8v5o+Q56S65a655Zmo77yI5bGC57qn5pyA6auY77yJXHJcbiAgICBwcml2YXRlIHJvYWRBcnIgPSBbXTsvL+Wbm+adoei3r+aVsOe7hFxyXG5cdHByaXZhdGUgd29yZHNBcnIgPSBCZWF0czA7Ly/ljZXor43mlbDnu4RcclxuICAgIHByaXZhdGUgbGV0dGVyVG90YWwgPSAwO1xyXG4gICAgcHJpdmF0ZSBsZXR0ZXJPYmpBcnIgPSBbXTtcclxuICAgIHByaXZhdGUgY3VyckxldHRlciA9IHtsZXR0ZXI6Jyd9Oy8v5b2T5YmN5a2X5q+NXHJcbiAgICBwcml2YXRlIHNjcmVlbkxldHRlckJveEFyciA9IFtdOy8v5Zyo5bGP5bmV5Lit55qE5a2X5q+N5pWw57uEXHJcbiAgICBwcml2YXRlIGxldHRlclYgPSAzMDAwOy8v5YWo56iL5pe26Ze0XHJcbiAgICBwcml2YXRlIGNvbnNvbGU6IExheWEuVGV4dDtcclxuICAgIHByaXZhdGUgZ291emlMZW5ndGg7XHJcbiAgICBwcml2YXRlIGh0dHA7XHJcbiAgICBwcml2YXRlIGRhdGE7XHJcbiAgICBwcml2YXRlIHg7XHJcbiAgICBwcml2YXRlIGJnO1xyXG4gICAgcHJpdmF0ZSB0eXBlTFZMID0gJ3R5cGUxJztcclxuICAgIHByaXZhdGUgaGVpZ2h0QWxsO1xyXG4gICAgcHJpdmF0ZSBzdGFydDMyMSA9IFwic291bmQvMzIxLm1wM1wiXHJcbiAgICBwcml2YXRlIGVuZCA9IFwic291bmQvZW5kLm1wM1wiXHJcbiAgICBcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7bmFtZTonZmV0Y2hRdWVzdGlvbnMnLGRhdGE6e319LCcqJylcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLF90aGlzLnBvc3QsZmFsc2UpO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ub3JpZW50YXRpb25jaGFuZ2VcIiBpbiB3aW5kb3cgPyBcIm9yaWVudGF0aW9uY2hhbmdlXCIgOiBcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cub3JpZW50YXRpb24gPT09IDE4MCB8fCB3aW5kb3cub3JpZW50YXRpb24gPT09IDApIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExheWEuc3RhZ2Uud2lkdGggPSAxMDA4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZihfdGhpcy5lbmRNYW5hZ2VyKSBfdGhpcy5lbmRNYW5hZ2VyLnBvcyhMYXlhLnN0YWdlLndpZHRoLzIsMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKGdhbWVQYW5lbCkgZ2FtZVBhbmVsLnggPSBMYXlhLnN0YWdlLndpZHRoLzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSAnZXhhY3RmaXQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5vcmllbnRhdGlvbiA9PT0gOTAgfHwgd2luZG93Lm9yaWVudGF0aW9uID09PSAtOTAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5zdGFnZS53aWR0aCA9IDEzODA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKF90aGlzLmVuZE1hbmFnZXIpIF90aGlzLmVuZE1hbmFnZXIucG9zKExheWEuc3RhZ2Uud2lkdGgvMiwwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYoZ2FtZVBhbmVsKSBnYW1lUGFuZWwueCA9IExheWEuc3RhZ2Uud2lkdGgvMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9ICdzaG93YWxsJztcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfSw1MDApXHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcclxuICAgICAgICBcclxuXHRcdExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9ICcnO1xyXG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSDtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG4gICAgICAgIExheWEuc3RhZ2Uud2lkdGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ+NzAwfHx3aW5kb3cuaW5uZXJXaWR0aD43MDB8fHdpbmRvdy5pbm5lcldpZHRoPndpbmRvdy5pbm5lckhlaWdodD8xMzgwOjEwMDg7XHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcbiAgICAgICAgTGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHRcdExheWEuc3RhZ2UuYmdDb2xvciA9IFwid2hpdGVcIlxyXG5cdFx0VUlDb25maWcucG9wdXBCZ0FscGhhID0gMVxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG4gICAgICAgIFVJQ29uZmlnLnBvcHVwQmdDb2xvciA9IFwiI2ZmZmZmZlwiXHJcblxyXG4gICAgICAgIFNvdW5kTWFuYWdlci5zZXRTb3VuZFZvbHVtZSgwKTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheVNvdW5kKHRoaXMuZW5kLCAxKTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheVNvdW5kKHRoaXMuc3RhcnQzMjEsIDEpO1xyXG4gICAgICAgIC8v6aKE5Yqg6L29XHJcblx0XHR0aGlzLmxvYWRQcm9nZXNzQXNzZXRzKClcclxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG4gICAgbG9hZFByb2dlc3NBc3NldHMoKTogdm9pZCB7XHJcblx0XHRMYXlhLmxvYWRlci5sb2FkKFtcInJlcy9hdGxhcy9sb2FkLmF0bGFzXCIsXCJsb2FkL2JnLnBuZ1wiXSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uUHJvZ3Jlc3NBc3NldHNMb2FkZWQpKVxyXG5cdH1cclxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXHJcblx0XHRHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcbiAgICB9XHJcbiAgICAvL+mihOWKoOi9vVxyXG5cdGxvYWRPdGhlckFzc2V0cygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgYXNzZXRzOiBBcnJheTxhbnk+ID0gW11cclxuICAgICAgICBmb3IobGV0IGk9MDtpPDUzMjtpKyspe1xyXG5cdFx0XHRhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHRoYXQuZGF0YS5tdXNpY1VybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLlNPVU5EXHJcbiAgICAgICAgICAgIH0pXHJcblx0XHR9XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IHRoYXQuZGF0YS5tdXNpY1VybCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiB0aGF0LmRhdGEuZXhwbGFpbkF1ZGlvVXJsLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMV8xLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMV8yLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMV9iZyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTFfbTEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUxX20yLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMV9tMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTFfbTQsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUyXzEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUyXzIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUyX2JnLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMl9tMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTJfbTIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUyX20zLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMl9tNCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTNfMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTNfMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTNfYmcsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUzX20xLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlM19tMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTNfbTMsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUzX200LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlNF8xLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlNF8yLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlNF9iZyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTRfbTEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGU0X20yLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlNF9tMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTRfbTQsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLkNvdW50RG93bjEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kMCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5zb3VuZDIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLlNPVU5EXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQ0LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50ZXN0LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5Db3VudERvd24xLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5Db3VudERvd24yLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5Db3VudERvd24zLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5yZWFkeSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuZ28sXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMucGVyZmVjdCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJhZCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJ1dHRvbkFnYWluLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYnV0dG9uTmV4dCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJ1dHRvblN0YXJ0LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuZW5lcmd5LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMubWlzcyxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLm9ic3RhY2xlLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMucmVzdGFydCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLnNnLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmFkYnVsLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmFkZ3JlLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmFkcmVkLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmFkeWVsLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuZ29idWwsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5nb2dyZSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmdvcmVkLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuZ295ZWwsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5va2J1bCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLm9rZ3JlLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMub2tyZWQsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5va3llbCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLnNob3BidWwsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5zaG9wZ3JlLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuc2hvcHJlZCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLnNob3B5ZWwsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5zdGFyT0ZGLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuc3Rhck9OLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMudGltZSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLnRvcEJhbixcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9iYWQvYnVsLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvYmFkL2dyZS5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL2JhZC9yZWQuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9iYWQveWVsLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9nby9idWwuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL2dvL2dyZS5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvZ28vcmVkLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9nby95ZWwuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL29rL2J1bC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvb2svZ3JlLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9vay9yZWQuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL29rL3llbC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvc2hvcC9idWwuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL3Nob3AvZ3JlLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9zaG9wL3JlZC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvc2hvcC95ZWwuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzEsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzIsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzMsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzQsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzUsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzYsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzcsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzgsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzksXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzEwLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcxMSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMTIsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzEzLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcxNCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMTUsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzE2LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcxNyxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMTgsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzE5LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcyMCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMjEsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzIyLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcyMyxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMjQsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzI1LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcyNixcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMjcsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzI4LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcyOSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMzAsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzMxLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmczMixcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMzMsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzM0LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmczNSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvbmcsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvbmdiZzEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvbmdiZzIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvbmdiZzMsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvbmdiZzQsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvYWQsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvYWRiZyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL2xvYWQuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9sb25nL2xvbmdTV0YuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvbmdTV0YsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvbmdTV0YxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5sb25nU1dGMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMubG9uZ1NXRjMsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9lbmQvMC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL2VuZC8xLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvZW5kLzIuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9lbmQvMy5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL2VuZC8wMC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuZW5kMCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuZW5kMDAxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5lbmQwMDIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmVuZDEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmVuZDIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmVuZDMsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvLyDpooTliqDovb3otYTmupBcclxuXHRcdExheWEubG9hZGVyLmxvYWQoYXNzZXRzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Bc3NldHNMb2FkZWQpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Bc3NldHNMb2FkaW5nLCBudWxsLCBmYWxzZSkpO1xyXG5cdFx0TGF5YS5sb2FkZXIub24oTGF5YS5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5vbkVycm9yKVxyXG5cdH1cclxuICAgIC8vIOW/hemcgOWFiOWKoOi9vei/m+W6puadoei1hOa6kOaJjeiDveaYvuekuui/m+W6puadoVxyXG5cdG9uUHJvZ3Jlc3NBc3NldHNMb2FkZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g5pi+56S66L+b5bqm5p2hXHJcbiAgICAgICAgLy8g5pi+56S66L+b5bqm5p2hXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nRGlhbG9nID0gbmV3IExvYWRpbmdEaWFsb2coKTtcclxuICAgICAgICAvLyB0aGlzLmxvYWRpbmdEaWFsb2cud2lkdGggPSA2NDA7XHJcbiAgICAgICAgLy8gdGhpcy5sb2FkaW5nRGlhbG9nLmhlaWdodCA9IDY0MDtcclxuXHRcdC8vIHRoaXMubG9hZGluZ0RpYWxvZy5wb3B1cCh0cnVlLCBmYWxzZSk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkT3RoZXJBc3NldHMoKTtcclxuXHRcdH0sIDUwMCk7XHJcblx0fVxyXG4gICAgb25Bc3NldHNMb2FkaW5nKHByb2dyZXNzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmxvYWRpbmdEaWFsb2cuY2hhbmdlUHJvZ3Jlc3NWYWx1ZShwcm9ncmVzcyk7XHJcbiAgICB9XHJcbiAgICBvbkFzc2V0c0xvYWRlZCgpOiB2b2lkIHsgXHJcbiAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7bmFtZTonZmV0Y2hRdWVzdGlvbnMnLGRhdGE6e319LCcqJylcclxuICAgICAgICB0aGlzLkdhbWVNYW5hZ2VyKClcclxuICAgIH1cclxuXHRvbkVycm9yKGVycjogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuWKoOi9veWksei0pTogXCIgKyBlcnIpO1xyXG5cdFx0Ly8gdGhpcy5sb2FkaW5nRGlhbG9nLnVwZGF0ZVRpcChcIuWKoOi9veWksei0pTogXCIgKyBlcnIpXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdEdhbWVNYW5hZ2VyKCk6IHZvaWQge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBMb2FkaW5nRGlhbG9nLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gd2luZG93LmlubmVySGVpZ2h0PjcwMHx8d2luZG93LmlubmVyV2lkdGg+NzAwfHx3aW5kb3cuaW5uZXJXaWR0aD53aW5kb3cuaW5uZXJIZWlnaHQ/J3Nob3dhbGwnOidleGFjdGZpdCc7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudHlwZUxWTCA9IGxheWEubmV0LkxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0eXBlTFZMJyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudHlwZUxWTD8nJzpsYXlhLm5ldC5Mb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndHlwZUxWTCcsJ3R5cGUxJylcclxuY29uc29sZS5sb2coTGF5YS5zdGFnZS53aWR0aCxMYXlhLnN0YWdlLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0QWxsID0gNjkwO1xyXG4gICAgICAgICAgICBMYXlhLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuYmdNYW5hZ2VyKTtcclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5yZW1vdmVDaGlsZChnYW1lUGFuZWwpO1xyXG4gICAgICAgICAgICBMYXlhLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuYnV0dG9ud2lkdGgpO1xyXG4gICAgICAgICAgICBMYXlhLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMudGlwc01hbmFnZXIpO1xyXG4gICAgICAgICAgICBMYXlhLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuZW5kTWFuYWdlcik7XHJcbiAgICAgICAgICAgIHRoaXMubGV0dGVyVG90YWwgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxldHRlck9iakFyciA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJMZXR0ZXIgPSB7bGV0dGVyOicnfTsvL+W9k+WJjeWtl+avjVxyXG4gICAgICAgICAgICBpSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGluZ0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy53b3Jkc0FyciA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkxldHRlckJveEFyciA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmxldHRlclYgPSAzMDAwOy8v5YWo56iL5pe26Ze0XHJcbiAgICAgICAgICAgIHRoaXMuZ291emlMZW5ndGggPSAnJztcclxuICAgICAgICAgICAgdGhpcy5iZyA9IG5ldyBTcHJpdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5iZy53aWR0aCA9IDEzODA7XHJcbiAgICAgICAgICAgIHRoaXMuYmcuaGVpZ2h0ID0gNjQwO1xyXG4gICAgICAgICAgICB0aGlzLmJnLnBpdm90KExheWEuc3RhZ2Uud2lkdGgvMiwwKTtcclxuICAgICAgICAgICAgdGhpcy5iZy54ID0gdGhpcy5oZWlnaHRBbGw7XHJcbiAgICAgICAgICAgIHRoaXMuYmcubG9hZEltYWdlKCdyZXMvaW1ncy8nK3RoaXMudHlwZUxWTCsnL3diZy5wbmcnKTtcclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLmJnKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBnYW1lUGFuZWwgPSBuZXcgU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC53aWR0aCA9IDEwMDg7XHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC5oZWlnaHQgPSA2NDA7XHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC5waXZvdCg1MDQsMCk7XHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC54ID0gTGF5YS5zdGFnZS53aWR0aC8yO1xyXG4gICAgICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKGdhbWVQYW5lbCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudHlwZUxWTCA9PSAndHlwZTEnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmdNYW5hZ2VyID0gbmV3IEJnKCk7XHJcbiAgICAgICAgICAgICAgICBnYW1lUGFuZWwuYWRkQ2hpbGQodGhpcy5iZ01hbmFnZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRoaW5nUm9hZCA9IG5ldyBTcHJpdGUoKTtcclxuICAgICAgICAgICAgdGhpcy50aGluZ1JvYWQud2hpbGUgPSAxMDA4O1xyXG4gICAgICAgICAgICB0aGlzLnRoaW5nUm9hZC5oZWlnaHQgPSA2NDA7XHJcbiAgICAgICAgICAgIHRoaXMudGhpbmdSb2FkLnBpdm90KDUwNCwwKTtcclxuICAgICAgICAgICAgdGhpcy50aGluZ1JvYWQueCA9IDMwMDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgZ2FtZVBhbmVsLmFkZENoaWxkKHRoaXMudGhpbmdSb2FkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ud2lkdGggPSBuZXcgU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ud2lkdGgud2hpbGUgPSAxMDA4O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbndpZHRoLmhlaWdodCA9IDE1MjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b253aWR0aC5waXZvdCg1MDQsNDg4KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b253aWR0aC54ID0gNTA0OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbndpZHRoLmxvYWRJbWFnZShcInJlcy9pbWdzL2J1dHRvbldpZHRoLnBuZ1wiKTtcclxuICAgICAgICAgICAgZ2FtZVBhbmVsLmFkZENoaWxkKHRoaXMuYnV0dG9ud2lkdGgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaGlwQ29udGFpbmVyID0gbmV3IFNoaXAodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcENvbnRhaW5lci5oZWlnaHQgPSAxNzg7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcENvbnRhaW5lci53aWR0aCA9IDEwMDg7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcENvbnRhaW5lci55ID0gNjAwXHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC5hZGRDaGlsZCh0aGlzLnNoaXBDb250YWluZXIpOyAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy50aXBzTWFuYWdlciA9IG5ldyBUaXBzKHRoaXMsZ2FtZVBhbmVsKTtcclxuICAgICAgICAgICAgdGhpcy50aXBzTWFuYWdlci53aWR0aCA9IDEwMDg7XHJcbiAgICAgICAgICAgIHRoaXMudGlwc01hbmFnZXIucGl2b3QoNTA0LDApO1xyXG4gICAgICAgICAgICB0aGlzLnRpcHNNYW5hZ2VyLnggPSA1MDQ7XHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC5hZGRDaGlsZCh0aGlzLnRpcHNNYW5hZ2VyKTtcclxuICAgICAgICAgICAgdGhpcy53b3Jkc0FyciA9IEJlYXRzMDtcclxuICAgICAgICAgICAgdGhpcy5nb3V6aUxlbmd0aCA9IHRoaXMud29yZHNBcnIuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGhpbmcgPT0gJzEnO1xyXG4gICAgICAgICAgICB9KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdExldHRlck9iakFycigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRHYW1lKCk7XHJcbiAgICAgICAgfSwgMjAwMCk7ICBcclxuICAgIH1cclxuICAgIC8v6byg5qCH56e75Yqo5LqL5Lu2XHJcblx0Ly8gb25Nb3VzZU1vdmUoKTogdm9pZCB7XHJcblx0Ly8gXHQvLyBjb25zb2xlLmxvZyhcIm9uTW91c2VNb3ZlKFnvvJpcIiwgTGF5YS5zdGFnZS5tb3VzZVksIFwiOyAgeO+8mlwiLCBMYXlhLnN0YWdlLm1vdXNlWCwgJ++8iScpO1xyXG5cdC8vIFx0Ly8gY29uc29sZS5sb2coXCJMYXlhXCIsIExheWEuc3RhZ2UpO1xyXG5cdC8vIH1cclxuICAgIGluaXRMZXR0ZXJPYmpBcnIgKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53b3Jkc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbGluQXJyID0gW107XHJcbiAgICAgICAgICAgIHZhciBsaW5lID0gdGhpcy53b3Jkc0FycltpXS50aGluZztcclxuICAgICAgICAgICAgdmFyIHRpbWUgPSB0aGlzLndvcmRzQXJyW2ldLnRpbWU7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbGluZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGluQXJyLnB1c2goe2xldHRlcjogbGluZVtqXSwgc3RhdHVzOiAwLCBwb3NpdGlvbjogW2ksIGpdLGlzU2hvdzpmYWxzZSx0aW1lOnRoaXMubGV0dGVyVix0aW1lczp0aW1lLG5leHQ6MH0pO1xyXG4gICAgICAgICAgICAgICAgaWYobGluZVtqXSAhPSAnICcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldHRlclRvdGFsKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sZXR0ZXJPYmpBcnIucHVzaChsaW5BcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0R2FtZSAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50aXBzTWFuYWdlci5vbihcIlN0YXJ0X0dhbWVfRXZlbnRcIiwgdGhpcywgdGhpcy5zdGFydEdhbWUpO1xyXG4gICAgICAgIHRoaXMudGlwc01hbmFnZXIub24oXCJFbmRfR2FtZV9FdmVudFwiLCB0aGlzLCB0aGlzLmVuZEdhbWUpO1xyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lICgpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtuYW1lOidzdGFydEdhbWUnLGRhdGE6e319LCcqJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wbGF5TXVzaWMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0V29yZEFycigpO1xyXG4gICAgICAgIGlmKHRoaXMudHlwZUxWTCA9PSAndHlwZTEnKXtcclxuICAgICAgICAgICAgdGhpcy5zaGlwQ29udGFpbmVyLmdvc2hpcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbmRHYW1lICgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZE1hbmFnZXIgPSBuZXcgRW5kKHRoaXMsTG9hZGluZ0RpYWxvZyk7ICBcclxuICAgICAgICB0aGlzLmVuZE1hbmFnZXIud2lkdGggPSAxMzgwO1xyXG4gICAgICAgIHRoaXMuZW5kTWFuYWdlci5oZWlnaHQgPSA2NDA7ICBcclxuICAgICAgICB0aGlzLmVuZE1hbmFnZXIucGl2b3QoNjkwLDApO1xyXG4gICAgICAgIHRoaXMuZW5kTWFuYWdlci5wb3MoTGF5YS5zdGFnZS53aWR0aC8yLDApO1xyXG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe25hbWU6J2ZpbmlzaEdhbWUnLGRhdGE6e319LCcqJyk7XHJcbiAgICBcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5lbmRNYW5hZ2VyKTtcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy50aXBzTWFuYWdlci5nZXRTY29yZSgpO1xyXG4gICAgICAgIHRoaXMuZW5kTWFuYWdlci5zaG93RW5kUGFuZWwob2JqLCB0aGlzLmxldHRlclRvdGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5TXVzaWMgKCk6IHZvaWQge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5hdXRvU3RvcE11c2ljID0gZmFsc2U7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlNdXNpYyh0aGlzLmRhdGEubXVzaWNVcmwsIDEpO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5zZXRTb3VuZFZvbHVtZSgxKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0V29yZEFyciAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb2FkQXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG9uZVJvYWRTcHJpdGUgPSBuZXcgU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIG9uZVJvYWRTcHJpdGUud2lkdGggPSAyMDA7XHJcbiAgICAgICAgICAgIG9uZVJvYWRTcHJpdGUuaGVpZ2h0ID0gNjQwO1xyXG4gICAgICAgICAgICBvbmVSb2FkU3ByaXRlLm5hbWUgPSAncm9hZCcgKyBpO1xyXG4gICAgICAgICAgICB0aGlzLnJvYWRBcnIucHVzaChvbmVSb2FkU3ByaXRlKTtcclxuICAgICAgICAgICAgdGhpcy50aGluZ1JvYWQuYWRkQ2hpbGQob25lUm9hZFNwcml0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGV0dGVyT2JqQXJyLm1hcChkYXRhPT57XHJcbiAgICAgICAgICAgIGxldCB0aGlzUm9hZCA9IDBcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgdGhpc1JvYWQgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpKjQrXCJcIik7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHJvYWRzID09IHRoaXNSb2FkKVxyXG4gICAgICAgICAgICByb2FkcyA9IHRoaXNSb2FkO1xyXG4gICAgICAgICAgICBkYXRhWzBdWydyb2FkJ10gPSByb2Fkc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLm5leHRUaW1lb3V0KCk7XHJcbiAgICB9XHJcbiAgICBuZXh0VGltZW91dCgpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmxldHRlck9iakFycltpSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXJyTGV0dGVyID0gX3RoaXMubGV0dGVyT2JqQXJyW2lJbmRleF1bMF07XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sZXR0ZXJPYmpBcnJbaUluZGV4XVswXS5uZXh0ID0gMjtcclxuICAgICAgICAgICAgICAgIF90aGlzLmxldHRlck9iakFycltpSW5kZXgrMV0/X3RoaXMubGV0dGVyT2JqQXJyW2lJbmRleCsxXVswXS5uZXh0ID0gMTonJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBsYXN0TGluZSA9IF90aGlzLmxldHRlck9iakFycltfdGhpcy5sZXR0ZXJPYmpBcnIubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXJyTGV0dGVyID0gbGFzdExpbmVbbGFzdExpbmUubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhckludGVydmFsKHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlICghX3RoaXMuY3VyckxldHRlciB8fCBfdGhpcy5jdXJyTGV0dGVyLmxldHRlciA9PSBcIiBcIik7XHJcblxyXG4gICAgICAgIHZhciBsZXR0ZXJCb3ggPSBuZXcgVGhpbmcoX3RoaXMsX3RoaXMuY3VyckxldHRlcik7XHJcbiAgICAgICAgbGV0dGVyQm94Lm5hbWUgPSAneCcgKyBfdGhpcy5nZXRSYW5kb21Db2xvcigpO1xyXG4gICAgICAgIHRoaW5nTGlzdC5wdXNoKGxldHRlckJveClcclxuICAgICAgICBfdGhpcy5hcHBlbmRPbmVMZXR0ZXIobGV0dGVyQm94KTtcclxuICAgICAgICBMYXlhLnRpbWVyLmxvb3AoIF90aGlzLmxldHRlck9iakFycltpSW5kZXhdWzBdLnRpbWVzLHRoaXMsdGhpcy5uZXh0VGltZW91dCk7XHJcbiAgICAgICAgaUluZGV4Kys7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBnZXRSYW5kb21Db2xvciAoKTphbnkge1xyXG4gICAgICAgIHJldHVybiAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG5cdC8v6K6+572u6YCf5bqmXHJcbiAgICBhcHBlbmRPbmVMZXR0ZXIgKGxldHRlckJveCkge1xyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyZWVuTGV0dGVyQm94QXJyLnB1c2gobGV0dGVyQm94KTtcclxuICAgICAgICB2YXIgcmFuZG9tSW5kZXggPSBsZXR0ZXJCb3gud29yZE9iai5yb2FkO1xyXG5cdFx0bGV0dGVyQm94Lmd1aWRhbyA9IHJhbmRvbUluZGV4O1xyXG5cdFx0aWYobGV0dGVyQm94LndvcmRPYmouaXNTaG93KXtcclxuICAgICAgICAgICAgbGV0dGVyQm94LnggPSBsZXR0ZXJCb3gud29yZE9iai5zdGFydC54Kyh0aGlzLmhlaWdodEFsbCk7XHJcbiAgICAgICAgICAgIGxldHRlckJveC55ID0gbGV0dGVyQm94LndvcmRPYmouc3RhcnQueTtcclxuICAgICAgICAgICAgbGV0dGVyQm94LnNjYWxlWCA9IGxldHRlckJveC53b3JkT2JqLnN0YXJ0LnNjYWxlWDtcclxuICAgICAgICAgICAgbGV0dGVyQm94LnNjYWxlWSA9IGxldHRlckJveC53b3JkT2JqLnN0YXJ0LnNjYWxlWTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXR0ZXJCb3gueCA9IGZvdXJSb2FkUG9zaXRpb25bcmFuZG9tSW5kZXhdLnN0YXJ0LngrKHRoaXMuaGVpZ2h0QWxsKTtcclxuICAgICAgICAgICAgbGV0dGVyQm94LnkgPSBmb3VyUm9hZFBvc2l0aW9uW3JhbmRvbUluZGV4XS5zdGFydC55O1xyXG4gICAgICAgICAgICBsZXR0ZXJCb3guc2NhbGVYID0gZm91clJvYWRQb3NpdGlvbltyYW5kb21JbmRleF0uc3RhcnQuc2NhbGVYO1xyXG4gICAgICAgICAgICBsZXR0ZXJCb3guc2NhbGVZID0gZm91clJvYWRQb3NpdGlvbltyYW5kb21JbmRleF0uc3RhcnQuc2NhbGVZO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvYWRBcnJbcmFuZG9tSW5kZXhdLmFkZENoaWxkKGxldHRlckJveCk7XHJcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBuZXcgSGFuZGxlcihsZXR0ZXJCb3gsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYoIWlzUGF1c2Upe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoLTEpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy53b3JkT2JqLmxldHRlciAhPSAnMicpe1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRpcHNNYW5hZ2VyLnNob3dQbGF5VGlwKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZUxldHRlcih0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgbW92ZVVwZGF0ZUhhbmRsZXIgPSBuZXcgSGFuZGxlcihsZXR0ZXJCb3gsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG9uZVJvYWQgPSBfdGhpcy5yb2FkQXJyW3RoaXMuZ3VpZGFvXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbmVSb2FkLm51bUNoaWxkcmVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBsZXR0ZXIgPSBvbmVSb2FkLmdldENoaWxkQXQoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGV0dGVyIGluc3RhbmNlb2YgVGhpbmcgJiYgbGV0dGVyLmlzT3ZlciA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGxldHRlci55ICE9IDY0MCAmJiAhaXNQYXVzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbGV0dGVyLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbGV0dGVyLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVYOiBsZXR0ZXIuc2NhbGVYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWTogbGV0dGVyLnNjYWxlWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50ID0gbGV0dGVyLnkvNjQwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50ID0gKDEwMCAtIE1hdGguZmxvb3IocGVyY2VudCAqIDEwMCkpIC8gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VGltZShwZXJjZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQZXJjZW50KHBlcmNlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0dGVyQm94Lm1vdmVUd2VlbiA9IFR3ZWVuLnRvKGxldHRlckJveCwge3g6KGZvdXJSb2FkUG9zaXRpb25bcmFuZG9tSW5kZXhdLmVuZC54Kyh0aGlzLmhlaWdodEFsbCkpLHk6NjQwfSwgbGV0dGVyQm94LndvcmRPYmoudGltZSwgRWFzZS5saW5lYXJOb25lLCBoYW5kbGVyKTtcclxuICAgICAgICBsZXR0ZXJCb3gubW92ZVR3ZWVuLnVwZGF0ZSA9IG1vdmVVcGRhdGVIYW5kbGVyO1xyXG4gICAgICAgIGxldHRlckJveC5tb3ZlVHdlZW5VcGRhdGUgPSBtb3ZlVXBkYXRlSGFuZGxlcjsvL+WboOS4uuacgOWQjuS8mue7mWxldHRlcuWBmlR3ZWVuLmNsZWFyQWxsKCk7IOaJgOS7pemcgOimgemihOeVmeWPpeafhOWBmuacgOWQjua4hemZpOi9qOmBk+eXlei/ueWbnuiwg1xyXG5cclxuICAgICAgICBsZXR0ZXJCb3guYWxwaGFUd2VlbiA9IFR3ZWVuLnRvKGxldHRlckJveCwge2FscGhhOiAxfSwgbGV0dGVyQm94LndvcmRPYmoudGltZSAqIDAuMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0dGVyQm94Lm9uKCdVSUxldHRlckJveF9SZW1vdmVfRXZlbnQnLCB0aGlzLCB0aGlzLnJlbW92ZUxldHRlcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbW92ZUxldHRlciA9IGZ1bmN0aW9uIChsZXR0ZXIpIHtcclxuICAgICAgICB2YXIgbGV0dGVyQm94ID0gdGhpcy5zY3JlZW5MZXR0ZXJCb3hBcnIuc3BsaWNlKHRoaXMuc2NyZWVuTGV0dGVyQm94QXJyLmluZGV4T2YobGV0dGVyKSwgMSlbMF07XHJcbiAgICAgICAgLy8gbGV0dGVyQm94LmRlc3Ryb3lNZSgpO1xyXG4gICAgICAgIGxldHRlckJveC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgbGV0dGVyQm94LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGlja0Rvd24gPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB2YXIgbGV0dGVyO1xyXG4gICAgICAgIGxldCBpc0NvbGxpc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zY3JlZW5MZXR0ZXJCb3hBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gdGhpcy5zY3JlZW5MZXR0ZXJCb3hBcnJbaV07XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXIuaXNPdmVyID09IGZhbHNlICYmIGxldHRlci5ndWlkYW8gPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsZXR0ZXIueSA8IDQ4MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZXR0ZXIueSA+PSA0ODAgJiYgbGV0dGVyLnkgPCA2MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihsZXR0ZXIud29yZE9iai5sZXR0ZXIgPT0gJzInKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbktleURvd25MZXR0ZXIobGV0dGVyLCB0cnVlLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbktleURvd25MZXR0ZXIobGV0dGVyLCB0cnVlLCAyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duTGV0dGVyID0gZnVuY3Rpb24gKGxldHRlciwgaXNQaXBlaSwgc2NvcmUpIHtcclxuICAgICAgICBpZiAoaXNQaXBlaSkge1xyXG4gICAgICAgICAgICBpZihzY29yZSA9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnR5cGVMVkwgPT0gJ3R5cGUxJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwQ29udGFpbmVyLmJhbmRzaGlwKGxldHRlci5ndWlkYW8pO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnR5cGVMVkwgPT0gJ3R5cGUxJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwQ29udGFpbmVyLm9rc2hpcChsZXR0ZXIuZ3VpZGFvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRpcHNNYW5hZ2VyLnNob3dQbGF5VGlwKHNjb3JlKTtcclxuICAgICAgICAgICAgbGV0dGVyLnBpcGVpKHNjb3JlKTtcclxuICAgICAgICAgICAgbGV0dGVyLm1vdmVUd2VlblVwZGF0ZS5ydW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZihsZXR0ZXIud29yZE9iai5sZXR0ZXIgIT0gJzInKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwc01hbmFnZXIuc2hvd1BsYXlUaXAoMCk7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXIuYnVwaXBlaSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcG9zdChldmVudCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gZXZlbnQuZGF0YTtcclxuICAgICAgICBpZihkYXRhLmRhdGEhPXVuZGVmaW5lZCAmJiBkYXRhLmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICBkYXRhID0gZXZlbnQuZGF0YTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGF0YSA9IHsgXCJuYW1lXCI6IFwiY2FzdFF1ZXN0aW9uc1wiLCBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uSWQ6IDIxMDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIui3n+maj+iKguWlj1wiLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgZXhwbGFpbkF1ZGlvVXJsOiBcImh0dHBzOi8vbXVzZXMtb25saW5lLmZiY29udGVudC5jbi9tdXNlcy1sZXNzb24vbXVzaWMvYXVkaW8vJUU2JUI4JUI4JUU2JTg4JThGJUU5JTlGJUIzJUU5JUEyJTkxLyVFOCU4QSVCMSVFNiVBMCU5NyVFOSVCQyVBMCVFNiVCOCVCOCVFNiU4OCU4RiVFOSU5RiVCMyVFOSVBMiU5MS8lRTglOEElQjElRTYlQTAlOTclRTklQkMlQTAlRTYlQjglQjglRTYlODglOEYyJUU4JUE3JUEzJUU4JUFGJUI0Lm1wM1wiLFxyXG4gICAgICAgICAgICAgIG11c2ljVXJsOiBcImh0dHBzOi8vbXVzZXMtb25saW5lLmZiY29udGVudC5jbi9tdXNlcy1sZXNzb24vbXVzaWMvYXVkaW8vJUU2JUI4JUI4JUU2JTg4JThGJUU5JTlGJUIzJUU5JUEyJTkxLyVFOCU4QSVCMSVFNiVBMCU5NyVFOSVCQyVBMCVFNiVCOCVCOCVFNiU4OCU4RiVFOSU5RiVCMyVFOSVBMiU5MS8lRTglOEElQjElRTYlQTAlOTclRTklQkMlQTAlRTUlODglOUQlRTclQkElQTclRTklOUYlQjMlRTklQTIlOTEubXAzXCIsXHJcbiAgICAgICAgICAgICAgbXVzaWNEdXJhdGlvbjogNTMyOTMwLFxyXG4gICAgICAgICAgICAgIHNraW5UeXBlOiAxLFxyXG4gICAgICAgICAgICAgIG9iamVjdHM6IFtcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA2NTAwLCBlbmRUaW1lOiA3NTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA3NTAwLCBlbmRUaW1lOiA4NTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA4NjAwLCBlbmRUaW1lOiA5NjAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA5NjAwLCBlbmRUaW1lOiAxMDYwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMTA3MDAsIGVuZFRpbWU6IDExNzAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAxMTgwMCwgZW5kVGltZTogMTI4MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDEyOTAwLCBlbmRUaW1lOiAxMzkwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMTQwMDAsIGVuZFRpbWU6IDE1MDAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAxNTEwMCwgZW5kVGltZTogMTYxMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDE2MjAwLCBlbmRUaW1lOiAxNzIwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMTcyMDAsIGVuZFRpbWU6IDE4MjAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAxODMwMCwgZW5kVGltZTogMTkzMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDE5NDAwLCBlbmRUaW1lOiAyMDQwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMjA0MDAsIGVuZFRpbWU6IDIxNDAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAyMTUwMCwgZW5kVGltZTogMjI1MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDIyNTAwLCBlbmRUaW1lOiAyMzUwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMjM2MDAsIGVuZFRpbWU6IDI0NjAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAyNDcwMCwgZW5kVGltZTogMjU3MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDI1NzAwLCBlbmRUaW1lOiAyNjcwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMjY4MDAsIGVuZFRpbWU6IDI3ODAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAyNzgwMCwgZW5kVGltZTogMjg4MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDI4ODAwLCBlbmRUaW1lOiAyOTgwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMjk5MDAsIGVuZFRpbWU6IDMwOTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAzMTAwMCwgZW5kVGltZTogMzIwMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDMyMTAwLCBlbmRUaW1lOiAzMzEwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMzMxMDAsIGVuZFRpbWU6IDM0MTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAzNDIwMCwgZW5kVGltZTogMzUyMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDM1MzAwLCBlbmRUaW1lOiAzNjMwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMzY0MDAsIGVuZFRpbWU6IDM3NDAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAzNzUwMCwgZW5kVGltZTogMzg1MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDM4NjAwLCBlbmRUaW1lOiAzOTYwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMzk2MDAsIGVuZFRpbWU6IDQwNjAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA0MDgwMCwgZW5kVGltZTogNDE4MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDQxODAwLCBlbmRUaW1lOiA0MjgwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogNDI5MDAsIGVuZFRpbWU6IDQzOTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA0NDAwMCwgZW5kVGltZTogNDUwMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDQ1MTAwLCBlbmRUaW1lOiA0NjEwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogNDYxMDAsIGVuZFRpbWU6IDQ3MTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA0NzEwMCwgZW5kVGltZTogNDgxMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDEzMjAwLCBlbmRUaW1lOiAxNDIwMCwgb2JzdGFjbGU6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAyNDAwMCwgZW5kVGltZTogMjUwMDAsIG9ic3RhY2xlOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMzAwMDAsIGVuZFRpbWU6IDMxMDAwLCBvYnN0YWNsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDM4OTAwLCBlbmRUaW1lOiAzOTkwMCwgb2JzdGFjbGU6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA0MzAwMCwgZW5kVGltZTogNDQwMDAsIG9ic3RhY2xlOiB0cnVlIH1cclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIHR5cGU6IDEwNzEwMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0eXBlOiAxMDcxMDJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHlwZUxWTCA9ICd0eXBlJytkYXRhLmRhdGFbMF0ucGF5bG9hZC5za2luVHlwZTtcclxuICAgICAgICBsZXQgY2hhbmdlLGRhdGFzID0gZGF0YS5kYXRhWzBdLnBheWxvYWQub2JqZWN0cztcclxuICAgICAgICBmb3IobGV0IGk9ZGF0YXMubGVuZ3RoLTE7aT49MDtpLS0pe1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPGk7aisrKXtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGFzW2orMV0uc3RhcnRUaW1lPGRhdGFzW2pdLnN0YXJ0VGltZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlPWRhdGFzW2orMV07XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNbaisxXT1kYXRhc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhc1tqXT1jaGFuZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuZGF0YSA9IGRhdGEuZGF0YVswXS5wYXlsb2FkO1xyXG4gICAgICAgIGxldCBsaXN0ID0gZGF0YXM7XHJcbiAgICAgICAgdGhpcy5sZXR0ZXJWID0gbGlzdFswXS5lbmRUaW1lIC0gbGlzdFswXS5zdGFydFRpbWU7XHJcbiAgICAgICAgbGV0IEJlYXRzID0gW3sgdGltZTogbGlzdFswXS5zdGFydFRpbWUsIHRoaW5nOiBsaXN0WzBdLm9ic3RhY2xlPycyJzonMScgfV07XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDtpIDwgbGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYobGlzdFtpKzFdKXtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lID0gbGlzdFtpKzFdLnN0YXJ0VGltZSAtIGxpc3RbaV0uc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgQmVhdHMucHVzaCh7IHRpbWU6IHRpbWUsIHRoaW5nOiBsaXN0W2krMV0ub2JzdGFjbGU/JzInOicxJyB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEJlYXRzMCA9IEJlYXRzO1xyXG4gICAgfVxyXG59XHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7XHJcbiIsInZhciBiZ3ggPSAwO1xuZXhwb3J0IGNvbnN0IGZvdXJSb2FkUG9zaXRpb24gPSBbXG4gICAge1xuICAgICAgICBzdGFydDoge1xuICAgICAgICAgICAgeDogLTE1MCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBzY2FsZVg6IDIsXG4gICAgICAgICAgICBzY2FsZVk6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIGVuZDoge1xuICAgICAgICAgICAgeDogLTMyMCxcbiAgICAgICAgICAgIHk6IDY0MCxcbiAgICAgICAgICAgIHNjYWxlWDogMixcbiAgICAgICAgICAgIHNjYWxlWTogMixcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHg6IC01MCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBzY2FsZVg6IDIsXG4gICAgICAgICAgICBzY2FsZVk6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIGVuZDoge1xuICAgICAgICAgICAgeDogLTExMCxcbiAgICAgICAgICAgIHk6IDY0MCxcbiAgICAgICAgICAgIHNjYWxlWDogMixcbiAgICAgICAgICAgIHNjYWxlWTogMixcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHg6IDUwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHNjYWxlWDogMixcbiAgICAgICAgICAgIHNjYWxlWTogMixcbiAgICAgICAgfSxcbiAgICAgICAgZW5kOiB7XG4gICAgICAgICAgICB4OiA5MCxcbiAgICAgICAgICAgIHk6IDY0MCxcbiAgICAgICAgICAgIHNjYWxlWDogMixcbiAgICAgICAgICAgIHNjYWxlWTogMixcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHg6IDE1MCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBzY2FsZVg6IDIsXG4gICAgICAgICAgICBzY2FsZVk6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIGVuZDoge1xuICAgICAgICAgICAgeDogMzAwLFxuICAgICAgICAgICAgeTogNjQwLFxuICAgICAgICAgICAgc2NhbGVYOiAyLFxuICAgICAgICAgICAgc2NhbGVZOiAyXG4gICAgICAgIH1cbiAgICB9XG5dO1xuZXhwb3J0IGNvbnN0IEJlYXRzMCA9IFtcbiAgICB7IHRpbWU6IDIxNTYsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjEzMywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMjQ2LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxMjcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjA5OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTcxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxMTgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjA4NywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTgwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIwMzksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjExNSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTU4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxNzMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjE3NCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTcxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxNDUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjIwNiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTI1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxMjQsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjEzOCwgdGhpbmc6IFwiMVwiIH0sXG5dXG5leHBvcnQgY29uc3QgQmVhdHMxID0gW1xuICAgIHsgdGltZTogMTE4OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA5NDgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTExNywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDYxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMDksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTEwMSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDQyLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNzYsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA2MSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMTAzLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwMzUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA5OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDI0LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNjEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA0MCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDU5LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwOTAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA3NCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDYxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNDAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogOTkxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExNDcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTAyNSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDc3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwMTMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTIwMCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDk0LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNzgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA3NywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDM4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMTksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTAzNSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMTg1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMDksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTAwMywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDI1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNjUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTEzOSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA5OTgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTEyMiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDU2LCB0aGluZzogXCIxXCIgfSxcbl1cbmV4cG9ydCBjb25zdCBCZWF0czIgPSBbXG4gICAgeyB0aW1lOiAxMDk1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMDIsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTEzMCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDE0LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMTksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA4MCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDU4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNjgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMzYyLCB0aGluZzogXCIyXCIgfSxcbiAgICB7IHRpbWU6IDI2MiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTIwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU1NywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NDMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTE3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUyNCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTQwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUzMCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MDIsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTM0LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUyMiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NTcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTYzLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUzNCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MzEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMzYyLCB0aGluZzogXCIyXCIgfSxcbiAgICB7IHRpbWU6IDIzMiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTkyLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUxNiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA0NjYsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTMyLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDQ5MSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTAwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUyNSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MTAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTc2LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU0OCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTQ1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU2OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA0OTMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTc3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUxOCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA2MDQsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNDg1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU3OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MTUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMzYyLCB0aGluZzogXCIyXCIgfSxcbiAgICB7IHRpbWU6IDI1MCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MzcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTQ3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDQ4MCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA2MDEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTIxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU4NCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNDk5LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU2OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NTEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTY2LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU1NywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMzYyLCB0aGluZzogXCIyXCIgfSxcbiAgICB7IHRpbWU6IDE4MSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NjEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNDk4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUyOSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NzEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNDk1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU1OCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NTcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMzYyLCB0aGluZzogXCIyXCIgfSxcbiAgICB7IHRpbWU6IDI0NiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA0NzMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTIyLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUzNCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NzIsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTQxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU4MCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA0OTAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTU1LCB0aGluZzogXCIxXCIgfVxuXSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGJnIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdEJnKClcbiAgICB9XG4gICAgXG4gICAgaW5pdEJnKCk6dm9pZCB7XG4gICAgICAgIFxuICAgICAgICB2YXIgYmdDb250YWluZXIgPSBuZXcgTGF5YS5BbmltYXRpb24oKTtcbiAgICAgICAgYmdDb250YWluZXIubG9hZEFuaW1hdGlvbihcImFuaS9iZy5hbmlcIik7XG4gICAgICAgIGJnQ29udGFpbmVyLndpZHRoID0gMTAwODtcbiAgICAgICAgYmdDb250YWluZXIuaGVpZ2h0ID0gNjQwO1xuICAgICAgICBiZ0NvbnRhaW5lci5waXZvdCgwLDApXG4gICAgICAgIGJnQ29udGFpbmVyLnBvcyg1MDQsTGF5YS5zdGFnZS5oZWlnaHQvMik7XG4gICAgICAgIGJnQ29udGFpbmVyLnBsYXkoMSx0cnVlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChiZ0NvbnRhaW5lcik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB9LCA1MCk7XG4gICAgfVxufSIsImltcG9ydCBFdmVudCA9IExheWEuRXZlbnQ7XG5pbXBvcnQgU3ByaXRlID0gTGF5YS5TcHJpdGU7XG5pbXBvcnQgQW5pbWF0aW9uID0gTGF5YS5BbmltYXRpb247XG5pbXBvcnQgVGV4dCA9IExheWEuVGV4dDtcbmltcG9ydCBUd2VlbiA9IExheWEuVHdlZW47XG5cbi8vIGltcG9ydCBodHRwIGZyb20gXCIuL2h0dHBcIjtcbnZhciBsZXZlbCA9ICcwJztcbnZhciB0aGF0LExvYWRpbmdEaWFsb2c7XG52YXIgY2VudGVycyxlbmRzaG93O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZW5kIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIHByaXZhdGUgZW5kQ29udGFpbmVyO1xuICAgIHByaXZhdGUgaW1nQ29udGFpbmVyO1xuICAgIHByaXZhdGUgZW5kc2hvd1xuICAgIHByaXZhdGUgYnV0dG9uQWdhaW47XG4gICAgcHJpdmF0ZSBidXR0b25OZXh0O1xuXG4gICAgY29uc3RydWN0b3IodGhhdHMsTG9hZGluZ0RpYWxvZyl7XG4gICAgICAgIHRoYXQgPSB0aGF0cztcbiAgICAgICAgTG9hZGluZ0RpYWxvZyA9IExvYWRpbmdEaWFsb2c7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxldmVsID0gdGhhdC50eXBlTFZMO1xuICAgICAgICAvLyBsZXZlbCA9IGxheWEubmV0LkxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0eXBlTFZMJyl8fCd0eXBlMSc7XG4gICAgICAgIHRoaXMuaW5pdEVuZCgpO1xuICAgIH1cblxuICAgIGluaXRFbmQgKCkge1xuICAgICAgICB0aGlzLmVuZENvbnRhaW5lciA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKFwic291bmQvZW5kLm1wM1wiLCAxKTtcbiAgICAgICAgdmFyIGJnQ29uID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICBiZ0Nvbi5ncmFwaGljcy5kcmF3UmVjdCgwLCAwLCAxMzgwLCA2NDAsICcjMDAwJyk7XG4gICAgICAgIGJnQ29uLmFscGhhID0gMC44O1xuICAgICAgICB0aGlzLmVuZENvbnRhaW5lci5hZGRDaGlsZChiZ0Nvbik7XG4gICAgICAgIGNlbnRlcnMgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIGNlbnRlcnMud2lkdGggPSAxMDA4O1xuICAgICAgICBjZW50ZXJzLmhlaWdodCA9IDY0MDtcbiAgICAgICAgY2VudGVycy5waXZvdCg1MDQsMCk7XG4gICAgICAgIGNlbnRlcnMucG9zKDUwNCwwKTtcbiAgICAgICAgdGhpcy5lbmRDb250YWluZXIuYWRkQ2hpbGQoY2VudGVycyk7XG4gICAgICAgIC8vIHRoaXMuaW1nQ29udGFpbmVyID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICAvLyB0aGlzLmltZ0NvbnRhaW5lci5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9zZy5wbmdcIik7XG4gICAgICAgIC8vIHRoaXMuaW1nQ29udGFpbmVyLndpZHRoID0gOTUzO1xuICAgICAgICAvLyB0aGlzLmltZ0NvbnRhaW5lci5oZWlnaHQgPSA1NTA7XG4gICAgICAgIC8vIHRoaXMuaW1nQ29udGFpbmVyLnBpdm90KDQ3Ni41LDUwKTtcbiAgICAgICAgLy8gdGhpcy5pbWdDb250YWluZXIucG9zKDUwNCwyMCk7XG4gICAgICAgIC8vIGNlbnRlcnMuYWRkQ2hpbGQodGhpcy5pbWdDb250YWluZXIpO1xuXG4gICAgICAgIC8vIHZhciBlbmQgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIC8vIGVuZC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9lbmQucG5nXCIpO1xuICAgICAgICAvLyBlbmQud2lkdGggPSA0MzM7XG4gICAgICAgIC8vIGVuZC5oZWlnaHQgPSAxMjA7XG4gICAgICAgIC8vIGVuZC5waXZvdCgyMTYuNSwwKTtcbiAgICAgICAgLy8gZW5kLnBvcyg1MDQsMzAwKTtcbiAgICAgICAgLy8gY2VudGVycy5hZGRDaGlsZChlbmQpO1xuICAgICAgICAvLyBlbmRUeHQgPSBuZXcgVGV4dCgpO1xuICAgICAgICAvLyBlbmRUeHQuZm9udFNpemUgPSA0MDtcbiAgICAgICAgLy8gZW5kVHh0LndpZHRoID0gNDMzO1xuICAgICAgICAvLyBlbmRUeHQueSA9IDMwO1xuICAgICAgICAvLyBlbmRUeHQuYWxpZ24gPSBcImNlbnRlclwiXG4gICAgICAgIC8vIGVuZFR4dC5jb2xvciA9ICcjRkZGRkZGJztcbiAgICAgICAgLy8gZW5kVHh0LmJvbGQgPSB0cnVlO1xuICAgICAgICAvLyBlbmRUeHQudGV4dCA9ICfnu6fnu63liqrlipshJ1xuICAgICAgICAvLyBlbmQuYWRkQ2hpbGQoZW5kVHh0KTtcblxuICAgICAgICB0aGlzLmVuZENvbnRhaW5lci52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5lbmRDb250YWluZXIpO1xuICAgIH1cblxuICAgIHNob3dFbmRQYW5lbCAoc2NvcmVPYmosIGxldHRlclRvdGFsKSB7XG4gICAgICAgIC8v5o6l5Y+jXG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgc2NvcmUgOiBzY29yZU9iai50b3RhbFNjb3JlXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgbmFtZTonZmluaXNoR2FtZScsXG4gICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICBzY29yZTpzY29yZU9iai50b3RhbFNjb3JlLCAvLyDlvpfliIZcbiAgICAgICAgICAgICAgICBwZXJmZWN0OnNjb3JlT2JqLnBlcmZlY3QsIC8vIHBlcmZlY3Qg5Liq5pWwXG4gICAgICAgICAgICAgICAgLy8gZ3JlYXQ6c2NvcmVPYmouZ3JlYXQsIC8vIGdyZWF0IOS4quaVsFxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0OnNjb3JlT2JqLnJpZ2h0LCAvLyByaWdodCDkuKrmlbBcbiAgICAgICAgICAgICAgICBtaXNzOnNjb3JlT2JqLm1pc3MsIC8vIG1pc3Mg5Liq5pWwXG4gICAgICAgICAgICAgICAgYmFkOnNjb3JlT2JqLmJhZCwgLy8gYmFkIOS4quaVsFxuICAgICAgICAgICAgICAgIG9ic3RhY2xlOnNjb3JlT2JqLm9ic3RhY2xlLCAvLyDngrnlh7vpmpznoo3niankuKrmlbBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uob2JqLCcqJyk7XG4gICAgICAgIC8vIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkob2JqKSwnKicpO1xuICAgICAgICAvLyB2YXIgaHR0cCA9IG5ldyBodHRwO1xuICAgICAgICAvLyBodHRwLnBvc3QoJ3VzZXJJbmZvJyxkYXRhKTsgICAgXG4gICAgICAgIHZhciBzdGFydCA9IHNjb3JlT2JqLnRvdGFsU2NvcmUgPiAzMD9zY29yZU9iai50b3RhbFNjb3JlID4gNjU/c2NvcmVPYmoudG90YWxTY29yZSA+IDk1P1wiYW5pL2VuZDMuYW5pXCI6XCJhbmkvZW5kMi5hbmlcIjpcImFuaS9lbmQxLmFuaVwiOlwiYW5pL2VuZDAuYW5pXCI7XG4gICAgICAgIHRoaXMuZW5kc2hvdyA9IG5ldyBBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5lbmRzaG93LndpZHRoID0gMTAwODtcbiAgICAgICAgdGhpcy5lbmRzaG93LmhlaWdodCA9IDY0MDtcbiAgICAgICAgdGhpcy5lbmRzaG93LnBpdm90KDUwNCwgMCk7IFxuICAgICAgICB0aGlzLmVuZHNob3cucG9zKDgwMCwgMCk7XG4gICAgICAgIHRoaXMuZW5kc2hvdy5wbGF5KDAsIGZhbHNlKTsgIFxuICAgICAgICB0aGlzLmVuZHNob3cubG9hZEFuaW1hdGlvbihzdGFydCk7XG4gICAgICAgIGNlbnRlcnMuYWRkQ2hpbGQodGhpcy5lbmRzaG93KTtcbiAgICAgICAgLy8gdmFyIHN0YXIxID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICAvLyBzY29yZU9iai50b3RhbFNjb3JlID4gMzA/c3RhcjEubG9hZEltYWdlKFwicmVzL2ltZ3Mvc3Rhck9OLnBuZ1wiKTpzdGFyMS5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9zdGFyT0ZGLnBuZ1wiKTtcbiAgICAgICAgLy8gc3RhcjEud2lkdGggPSAxMjA7XG4gICAgICAgIC8vIHN0YXIxLmhlaWdodCA9IDExODtcbiAgICAgICAgLy8gc3RhcjEucGl2b3QoNjAsMCk7XG4gICAgICAgIC8vIHN0YXIxLnBvcyg1MDQtMjAwLDEzMCk7XG4gICAgICAgIC8vIGNlbnRlcnMuYWRkQ2hpbGQoc3RhcjEpO1xuXG4gICAgICAgIC8vIHZhciBzdGFyMiA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgLy8gc2NvcmVPYmoudG90YWxTY29yZSA+IDY1P3N0YXIyLmxvYWRJbWFnZShcInJlcy9pbWdzL3N0YXJPTi5wbmdcIik6c3RhcjIubG9hZEltYWdlKFwicmVzL2ltZ3Mvc3Rhck9GRi5wbmdcIik7ICAgICAgICBcbiAgICAgICAgLy8gc3RhcjIud2lkdGggPSAxMjA7XG4gICAgICAgIC8vIHN0YXIyLmhlaWdodCA9IDExODtcbiAgICAgICAgLy8gc3RhcjIucGl2b3QoNjAsMCk7XG4gICAgICAgIC8vIHN0YXIyLnBvcyg1MDQsODApO1xuICAgICAgICAvLyBjZW50ZXJzLmFkZENoaWxkKHN0YXIyKTtcblxuICAgICAgICAvLyB2YXIgc3RhcjMgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIC8vIHNjb3JlT2JqLnRvdGFsU2NvcmUgPiA5NT9zdGFyMy5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9zdGFyT04ucG5nXCIpOnN0YXIzLmxvYWRJbWFnZShcInJlcy9pbWdzL3N0YXJPRkYucG5nXCIpOyAgICAgICAgXG4gICAgICAgIC8vIHN0YXIzLndpZHRoID0gMTIwO1xuICAgICAgICAvLyBzdGFyMy5oZWlnaHQgPSAxMTg7XG4gICAgICAgIC8vIHN0YXIzLnBpdm90KDYwLDApO1xuICAgICAgICAvLyBzdGFyMy5wb3MoNTA0KzIwMCwxMzApO1xuICAgICAgICAvLyBjZW50ZXJzLmFkZENoaWxkKHN0YXIzKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbkFnYWluID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLmJ1dHRvbkFnYWluLmxvYWRJbWFnZShcInJlcy9pbWdzL2J1dHRvbkFnYWluLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi53aWR0aCA9IDI0MDtcbiAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi5oZWlnaHQgPSA5MDtcbiAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi5waXZvdCgxMjAsMCk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWdhaW4ucG9zKDY5MC0xNzAsNDYwKTtcbiAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi5zY2FsZVggPSAwO1xuICAgICAgICB0aGlzLmJ1dHRvbkFnYWluLm1vdXNlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuYnV0dG9uQWdhaW4ub24oRXZlbnQuTU9VU0VfT1ZFUiwgdGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgdGhpcy5idXR0b25BZ2Fpbi5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gdGhpcy5idXR0b25BZ2Fpbi5vbihFdmVudC5NT1VTRV9PVVQsIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYnV0dG9uQWdhaW4uZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWdhaW4ub24oRXZlbnQuQ0xJQ0ssIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe25hbWU6J2VuZFJlc3RhcnRHYW1lJyxkYXRhOnt9fSwnKicpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi5vZmYoRXZlbnQuQ0xJQ0ssIHRoaXMsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbk5leHQub2ZmKEV2ZW50LkNMSUNLLCB0aGlzLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGF0KTtcbiAgICAgICAgICAgIHRoYXQuR2FtZU1hbmFnZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNlbnRlcnMuYWRkQ2hpbGQodGhpcy5idXR0b25BZ2Fpbik7XG4gICAgICAgIC8vIHZhciBhZ2FpblR4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgIC8vIGFnYWluVHh0LmZvbnRTaXplID0gMjg7XG4gICAgICAgIC8vIGFnYWluVHh0LndpZHRoID0gMjQwO1xuICAgICAgICAvLyBhZ2FpblR4dC54ID0gLTE1O1xuICAgICAgICAvLyBhZ2FpblR4dC55ID0gMzA7XG4gICAgICAgIC8vIGFnYWluVHh0LmFsaWduID0gXCJjZW50ZXJcIlxuICAgICAgICAvLyBhZ2FpblR4dC5mb250ID0gJ0NoYXJjb2FsIENZJztcbiAgICAgICAgLy8gYWdhaW5UeHQuY29sb3IgPSAnIzAwMDAwMCc7XG4gICAgICAgIC8vIGFnYWluVHh0LmJvbGQgPSB0cnVlO1xuICAgICAgICAvLyBhZ2FpblR4dC50ZXh0ID0gJ+WGjeWtpuS4gOasoSdcbiAgICAgICAgLy8gdGhpcy5idXR0b25BZ2Fpbi5hZGRDaGlsZChhZ2FpblR4dCk7XG4gICAgICAgIFR3ZWVuLnRvKHRoaXMuYnV0dG9uQWdhaW4sIHtzY2FsZVg6IDF9LCAyMDApO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0LmxvYWRJbWFnZShcInJlcy9pbWdzL2J1dHRvbk5leHQucG5nXCIpO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQud2lkdGggPSAyNDA7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dC5oZWlnaHQgPSA5MDtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0LnBpdm90KDEyMCwwKTtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0LnBvcyg2OTArMTcwLDQ2MCk7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dC5zY2FsZVggPSAwO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQubW91c2VFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5idXR0b25OZXh0Lm9uKEV2ZW50Lk1PVVNFX09WRVIsIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYnV0dG9uTmV4dC5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gdGhpcy5idXR0b25OZXh0Lm9uKEV2ZW50Lk1PVVNFX09VVCwgdGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgdGhpcy5idXR0b25OZXh0LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQub24oRXZlbnQuQ0xJQ0ssIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe25hbWU6J25leHRDaGFwdGVyJyxkYXRhOnt9fSwnKicpO1xuICAgICAgICAgICAgLy8gaWYobGV2ZWwgPT0gJ3R5cGUxJyl7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGF5YS5uZXQuTG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGVMVkwnLCd0eXBlMicpXG4gICAgICAgICAgICAvLyAgICAgdGhhdC50eXBlTFZMID0gJ3R5cGUyJ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYobGV2ZWwgPT0gJ3R5cGUyJyl7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGF5YS5uZXQuTG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGVMVkwnLCd0eXBlMycpXG4gICAgICAgICAgICAvLyAgICAgdGhhdC50eXBlTFZMID0gJ3R5cGUzJ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYobGV2ZWwgPT0gJ3R5cGUzJyl7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGF5YS5uZXQuTG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGVMVkwnLCd0eXBlNCcpXG4gICAgICAgICAgICAvLyAgICAgdGhhdC50eXBlTFZMID0gJ3R5cGU0J1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYobGV2ZWwgPT0gJ3R5cGU0Jyl7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGF5YS5uZXQuTG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGVMVkwnLCd0eXBlMScpXG4gICAgICAgICAgICAvLyAgICAgdGhhdC50eXBlTFZMID0gJ3R5cGUxJ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSAnc2hvd2FsbCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoYXQubG9hZGluZ0RpYWxvZy5wb3B1cCh0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmFscGhhID0gMDtcbiAgICAgICAgICAgIHRoYXQuR2FtZU1hbmFnZXIoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQWdhaW4ub2ZmKEV2ZW50LkNMSUNLLCB0aGlzLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25OZXh0Lm9mZihFdmVudC5DTElDSywgdGhpcywgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNlbnRlcnMuYWRkQ2hpbGQodGhpcy5idXR0b25OZXh0KTtcbiAgICAgICAgLy8gdmFyIG5leHRUeHQgPSBuZXcgVGV4dCgpO1xuICAgICAgICAvLyBuZXh0VHh0LmZvbnRTaXplID0gMjg7XG4gICAgICAgIC8vIG5leHRUeHQueCA9IC0xNTtcbiAgICAgICAgLy8gbmV4dFR4dC55ID0gMzA7XG4gICAgICAgIC8vIG5leHRUeHQud2lkdGggPSAyNDA7XG4gICAgICAgIC8vIG5leHRUeHQuYWxpZ24gPSBcImNlbnRlclwiXG4gICAgICAgIC8vIG5leHRUeHQuZm9udCA9ICdDaGFyY29hbCBDWSc7XG4gICAgICAgIC8vIG5leHRUeHQuY29sb3IgPSAnIzAwMDAwMCc7XG4gICAgICAgIC8vIG5leHRUeHQuYm9sZCA9IHRydWU7XG4gICAgICAgIC8vIG5leHRUeHQudGV4dCA9ICfkuIvkuIDnq6DoioInXG4gICAgICAgIC8vIHRoaXMuYnV0dG9uTmV4dC5hZGRDaGlsZChuZXh0VHh0KTtcbiAgICAgICAgVHdlZW4udG8odGhpcy5idXR0b25OZXh0LCB7c2NhbGVYOiAxfSwgMjAwKTtcbiAgICAgICAgdGhpcy5lbmRDb250YWluZXIudmlzaWJsZSA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCBBbmltYXRpb24gPSBMYXlhLkFuaW1hdGlvbjtcbmltcG9ydCBTcHJpdGUgPSBMYXlhLlNwcml0ZTtcbmltcG9ydCBFdmVudCA9IExheWEuRXZlbnQ7XG5sZXQgc2hpcFcgPSAyMDAsdGhhdCxwYWRkaW5nID0gMDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNoaXAgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgcHJpdmF0ZSBzaGlwQmc7XG4gICAgLy8gcHJpdmF0ZSBzaGlwID0gW25ldyBBbmltYXRpb24oKSxuZXcgQW5pbWF0aW9uKCksbmV3IEFuaW1hdGlvbigpLG5ldyBBbmltYXRpb24oKV07XG4gICAgcHJpdmF0ZSBzaGlwID0gW107XG4gICAgcHJpdmF0ZSBzaGlwMTtcbiAgICBwcml2YXRlIHNoaXAyO1xuICAgIHByaXZhdGUgc2hpcDM7XG4gICAgcHJpdmF0ZSBzaGlwNDtcblxuXG4gICAgY29uc3RydWN0b3IodGhhdHMpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGF0ID0gdGhhdHNcbiAgICAgICAgdGhpcy5zaGlwID0gXG4gICAgICAgICAgICB0aGF0LnR5cGVMVkwgPT0gJ3R5cGUxJz9cbiAgICAgICAgICAgIFtuZXcgQW5pbWF0aW9uKCksbmV3IEFuaW1hdGlvbigpLG5ldyBBbmltYXRpb24oKSxuZXcgQW5pbWF0aW9uKCldOlxuICAgICAgICAgICAgW25ldyBTcHJpdGUoKSxuZXcgU3ByaXRlKCksbmV3IFNwcml0ZSgpLG5ldyBTcHJpdGUoKV07XG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgcGFkZGluZyA9IDUwNDtcbiAgICAgICAgdGhpcy5zaGlwMSA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zaGlwMiA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zaGlwMyA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zaGlwNCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zaGlwMS5zaXplKDIwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5zaGlwMi5zaXplKDIwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5zaGlwMy5zaXplKDIwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5zaGlwNC5zaXplKDIwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5zaGlwMS5waXZvdCgxMDAsIDEwMCk7XG4gICAgICAgIHRoaXMuc2hpcDIucGl2b3QoMTAwLCAxMDApO1xuICAgICAgICB0aGlzLnNoaXAzLnBpdm90KDEwMCwgMTAwKTtcbiAgICAgICAgdGhpcy5zaGlwNC5waXZvdCgxMDAsIDEwMCk7XG4gICAgICAgIC8vIHRoaXMuc2hpcDEuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMjAwLCAyMDAsICcjZmZmJyk7XG4gICAgICAgIC8vIHRoaXMuc2hpcDIuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMjAwLCAyMDAsICcjMDAwJyk7XG4gICAgICAgIC8vIHRoaXMuc2hpcDMuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMjAwLCAyMDAsICcjZWVlJyk7XG4gICAgICAgIC8vIHRoaXMuc2hpcDQuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMjAwLCAyMDAsICcjZmZmJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhhdC50eXBlTFZMID09ICd0eXBlMScpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcDEucG9zKHBhZGRpbmctMzAwLCAtNTApO1xuICAgICAgICAgICAgdGhpcy5zaGlwMi5wb3MocGFkZGluZy0xMDAsIC01MCk7XG4gICAgICAgICAgICB0aGlzLnNoaXAzLnBvcyhwYWRkaW5nKzEwMCwgLTUwKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcDQucG9zKHBhZGRpbmcrMzAwLCAtNTApO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzBdID0gbmV3IEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzBdLnggPSAxMDA7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMF0ueSA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMuc2hpcFswXS5sb2FkQW5pbWF0aW9uKFwiYW5pL3N0b3BzaGlwMC5hbmlcIik7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMF0ucGxheSgxLCB0cnVlKTsgXG4gICAgICAgICAgICB0aGlzLnNoaXBbMV0gPSBuZXcgQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMV0ueCA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMuc2hpcFsxXS55ID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzFdLmxvYWRBbmltYXRpb24oXCJhbmkvc3RvcHNoaXAxLmFuaVwiKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFsxXS5wbGF5KDEsIHRydWUpOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNoaXBbMl0gPSBuZXcgQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMl0ueCA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMuc2hpcFsyXS55ID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzJdLmxvYWRBbmltYXRpb24oXCJhbmkvc3RvcHNoaXAyLmFuaVwiKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFsyXS5wbGF5KDEsIHRydWUpOyBcbiAgICAgICAgICAgIHRoaXMuc2hpcFszXSA9IG5ldyBBbmltYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFszXS54ID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzNdLnkgPSAxMDA7XG4gICAgICAgICAgICB0aGlzLnNoaXBbM10ubG9hZEFuaW1hdGlvbihcImFuaS9zdG9wc2hpcDMuYW5pXCIpO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzNdLnBsYXkoMSwgdHJ1ZSk7ICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNoaXAxLnBvcyhwYWRkaW5nLTMwMCwgLTE1KTtcbiAgICAgICAgICAgIHRoaXMuc2hpcDIucG9zKHBhZGRpbmctMTAwLCAtMTUpO1xuICAgICAgICAgICAgdGhpcy5zaGlwMy5wb3MocGFkZGluZysxMDAsIC0xNSk7XG4gICAgICAgICAgICB0aGlzLnNoaXA0LnBvcyhwYWRkaW5nKzMwMCwgLTE1KTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFswXSA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFswXS5wb3MoMCwwKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFswXS5sb2FkSW1hZ2UoJ3Jlcy9pbWdzLycrdGhhdC50eXBlTFZMKycvbTEucG5nJyk7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMV0gPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMV0ubG9hZEltYWdlKCdyZXMvaW1ncy8nK3RoYXQudHlwZUxWTCsnL20yLnBuZycpO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzJdID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzJdLmxvYWRJbWFnZSgncmVzL2ltZ3MvJyt0aGF0LnR5cGVMVkwrJy9tMy5wbmcnKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFszXSA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFszXS5sb2FkSW1hZ2UoJ3Jlcy9pbWdzLycrdGhhdC50eXBlTFZMKycvbTQucG5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaGlwMS5hZGRDaGlsZCh0aGlzLnNoaXBbMF0pO1xuICAgICAgICB0aGlzLnNoaXAyLmFkZENoaWxkKHRoaXMuc2hpcFsxXSk7XG4gICAgICAgIHRoaXMuc2hpcDMuYWRkQ2hpbGQodGhpcy5zaGlwWzJdKTtcbiAgICAgICAgdGhpcy5zaGlwNC5hZGRDaGlsZCh0aGlzLnNoaXBbM10pO1xuXG4gICAgICAgIHRoaXMuc2hpcDEub24oRXZlbnQuQ0xJQ0ssdGhpcyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0Lm9uQ2xpY2tEb3duKDApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJzAnKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNoaXAyLm9uKEV2ZW50LkNMSUNLLHRoaXMsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5vbkNsaWNrRG93bigxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxJylcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zaGlwMy5vbihFdmVudC5DTElDSyx0aGlzLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQub25DbGlja0Rvd24oMik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMicpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2hpcDQub24oRXZlbnQuQ0xJQ0ssdGhpcyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0Lm9uQ2xpY2tEb3duKDMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJzMnKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2hpcDEpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2hpcDIpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2hpcDMpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2hpcDQpO1xuXG4gICAgfVxuICAgIGdvc2hpcCgpOnZvaWR7ICAgICAgXG4gICAgICAgIHRoaXMuc2hpcFswXS5sb2FkQW5pbWF0aW9uKFwiYW5pL2dvc2hpcDAuYW5pXCIpO1xuICAgICAgICB0aGlzLnNoaXBbMV0ubG9hZEFuaW1hdGlvbihcImFuaS9nb3NoaXAxLmFuaVwiKTtcbiAgICAgICAgdGhpcy5zaGlwWzJdLmxvYWRBbmltYXRpb24oXCJhbmkvZ29zaGlwMi5hbmlcIik7XG4gICAgICAgIHRoaXMuc2hpcFszXS5sb2FkQW5pbWF0aW9uKFwiYW5pL2dvc2hpcDMuYW5pXCIpO1xuICAgIH1cblxuICAgIG9rc2hpcChpbmRleCk6dm9pZHtcbiAgICAgICAgdmFyIGFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpO1xuICAgICAgICBhbmkubG9hZEFuaW1hdGlvbihcImFuaS9va3NoaXBcIitpbmRleCtcIi5hbmlcIik7XG4gICAgICAgIGFuaS55ID0gLTMwO1xuICAgICAgICB0aGlzLnNoaXBbaW5kZXhdLmFkZENoaWxkKGFuaSk7XG4gICAgICAgIGFuaS5wbGF5KDEsZmFsc2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFuaS5yZW1vdmVTZWxmKClcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9XG4gICAgYmFuZHNoaXAoaW5kZXgpOnZvaWR7XG4gICAgICAgIHZhciBhbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKTtcbiAgICAgICAgYW5pLmxvYWRBbmltYXRpb24oXCJhbmkvYmFuZHNoaXBcIitpbmRleCtcIi5hbmlcIik7XG4gICAgICAgIGFuaS5zY2FsZVg9IDEuMSxcbiAgICAgICAgYW5pLnNjYWxlWT0gMS4xLFxuICAgICAgICB0aGlzLnNoaXBbaW5kZXhdLmFkZENoaWxkKGFuaSk7XG4gICAgICAgIGFuaS5wbGF5KDEsZmFsc2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFuaS5yZW1vdmVTZWxmKClcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9XG59IiwidmFyIEhhbmRsZXIgPSBMYXlhLkhhbmRsZXI7XG52YXIgU3ByaXRlID0gTGF5YS5TcHJpdGU7XG52YXIgVHdlZW4gPSBMYXlhLlR3ZWVuO1xudmFyIHRoYXQ7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0aGluZyBleHRlbmRzIExheWEuU3ByaXRlIHtcbiAgICBwcml2YXRlIHdvcmRPYmo7XG4gICAgcHVibGljIGlzT3ZlcjtcbiAgICBwcml2YXRlIHppbXVDb247XG4gICAgXG4gICAgY29uc3RydWN0b3IodGhhdHMsd29yZE9iaikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGF0ID0gdGhhdHM7XG4gICAgICAgIHRoaXMud29yZE9iaiA9IHdvcmRPYmo7XG4gICAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7Ly/mmK/lkKblt7Lnu4/mjpLpmaRcbiAgICAgICAgdGhpcy56aW11Q29uID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuemltdUNvbik7XG4gICAgICAgIHRoaXMuYWRkZW5lcmd5SW1nKCk7XG4gICAgfVxuXG4gICAgYWRkZW5lcmd5SW1nICgpOnZvaWQge1xuICAgICAgICB2YXIgaW1nU3ByaXRlID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICBpbWdTcHJpdGUubG9hZEltYWdlKCdyZXMvaW1ncy8nK3RoYXQudHlwZUxWTCsnLycrdGhpcy53b3JkT2JqLmxldHRlci50b0xvd2VyQ2FzZSgpKycucG5nJyk7XG4gICAgICAgIGltZ1Nwcml0ZS5zY2FsZVggPSAwLjQ1O1xuICAgICAgICBpbWdTcHJpdGUuc2NhbGVZID0gMC40NTtcbiAgICAgICAgaWYodGhhdC50eXBlTFZMID09ICd0eXBlMScpe1xuICAgICAgICAgICAgaW1nU3ByaXRlLnBpdm90KDU3LDk0KTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGF0LnR5cGVMVkwgPT0gJ3R5cGUyJyl7XG4gICAgICAgICAgICBpbWdTcHJpdGUucGl2b3QoNjIsMTI0KTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGF0LnR5cGVMVkwgPT0gJ3R5cGUzJyl7XG4gICAgICAgICAgICBpbWdTcHJpdGUucGl2b3QoNTgsMTI2KTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGF0LnR5cGVMVkwgPT0gJ3R5cGU0Jyl7XG4gICAgICAgICAgICBpbWdTcHJpdGUucGl2b3QoNzAsNjgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuemltdUNvbi5hZGRDaGlsZChpbWdTcHJpdGUpO1xuICAgIH1cblxuICAgIHhpYW9zaGkgKCk6dm9pZCB7XG4gICAgICAgIFR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XG4gICAgICAgIFR3ZWVuLnRvKHRoaXMsIHthbHBoYTogMH0sIDUwMCwgbnVsbCwgbmV3IEhhbmRsZXIodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudCgnVUllbmVyZ3lCb3hfUmVtb3ZlX0V2ZW50JywgW3RoaXNdKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHNldFN0YXR1cyAoc3RhdHVzKTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG4gICAgc2V0U3RhcnQgKHN0YXJ0KTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLnN0YXJ0ID0gc3RhcnQ7XG4gICAgfVxuICAgIHNldFRpbWUgKHRpbWUpOnZvaWQge1xuICAgICAgICB0aGlzLndvcmRPYmoudGltZSA9IDMwMDAqdGltZTtcbiAgICB9XG4gICAgc2V0U2hvdyAoKTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLmlzU2hvdyA9IHRydWU7XG4gICAgfVxuICAgIHNldFBlcmNlbnQgKHBlcmNlbnQpOnZvaWQge1xuICAgICAgICB0aGlzLndvcmRPYmoucGVyY2VudCA9IHBlcmNlbnQ7XG4gICAgfVxuICAgIGJ1cGlwZWkgKHNjb3JlKTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLnN0YXR1cyA9IC0xO1xuICAgICAgICB0aGlzLnhpYW9zaGkoKTtcbiAgICB9XG5cbiAgICBwaXBlaSAoKTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLnN0YXR1cyA9IDE7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnhpYW9zaGkoKTtcbiAgICB9XG4gICAgc2hpdG91ICgpOnZvaWQge1xuICAgICAgICB0aGlzLndvcmRPYmouc3RhdHVzID0gMTtcbiAgICAgICAgdGhpcy54aWFvc2hpKCk7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IFNwcml0ZSA9IExheWEuU3ByaXRlO1xuaW1wb3J0IEV2ZW50ID0gTGF5YS5FdmVudDtcbmltcG9ydCBIYW5kbGVyID0gTGF5YS5IYW5kbGVyO1xuaW1wb3J0IFRpbWVMaW5lID0gTGF5YS5UaW1lTGluZTtcbmltcG9ydCBUZXh0ID0gTGF5YS5UZXh0O1xuaW1wb3J0IFR3ZWVuID0gTGF5YS5Ud2VlbjtcbmltcG9ydCBBbmltYXRpb24gPSBMYXlhLkFuaW1hdGlvbjtcbmltcG9ydCBTb3VuZDMyMSA9IExheWEuU291bmRNYW5hZ2VyO1xudmFyIHRoYXQsdGltZUxpbmUsaXMzMjEgPSB0cnVlLGlzY2xpY2sgPSBmYWxzZTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRpcHMgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG5cblxuICAgIHByaXZhdGUgcGVyZmVjdFRpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIGdyZWF0VGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgcmlnaHRUaXA6TGF5YS5TcHJpdGU7XG4gICAgcHJpdmF0ZSBtaXNzVGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgYmFkVGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgbG9uZzpMYXlhLkFuaW1hdGlvbjtcblxuICAgIHByaXZhdGUgdGltZVRpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIHJlc3RhcnRUaXA6TGF5YS5TcHJpdGU7XG4gICAgcHJpdmF0ZSB0b3BCYW5UaXA6TGF5YS5TcHJpdGU7XG4gICAgcHJpdmF0ZSB0aXRsZVR4dDpMYXlhLlRleHQ7XG4gICAgcHJpdmF0ZSBzdGFydEdvVGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgc3RhcnRHb1R4dDpMYXlhLlRleHQ7XG4gICAgXG5cbiAgICBwcml2YXRlIHJlYWR5MVRpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIHJlYWR5MlRpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIHJlYWR5M1RpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIHJlYWR5VGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgcmVhZHlHb1RpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIGNvdW50RG93blR4dDpMYXlhLlRleHQ7Ly/lgJLorqHml7bmlofmnKxcblxuICAgIHByaXZhdGUgc2NvcmVUeHQ7XG5cbiAgICBwcml2YXRlIGFsbFNjb3JlID0gMDtcbiAgICBwcml2YXRlIGdhbWVQYW5lbDtcbiAgICBwcml2YXRlIGxhc3RUaXA7XG5cbiAgICBwcml2YXRlIGNvdW50RG93biA9IDA7XG4gICAgcHJpdmF0ZSBjb3VudERvd24yID0gNjA7XG5cbiAgICBwcml2YXRlIHNjb3JlT2JqID0ge1xuICAgICAgICBwZXJmZWN0OiAwLFxuICAgICAgICBnb29kOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgbWlzczogMCxcbiAgICAgICAgYmFkOiAwLFxuICAgICAgICBvYnN0YWNsZTogMCxcbiAgICAgICAgdG90YWxTY29yZTogMFxuICAgIH07XG4gICAgY29uc3RydWN0b3IodGhhdHMsZ2FtZVBhbmVsKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5nYW1lUGFuZWwgPSBnYW1lUGFuZWw7XG4gICAgICAgIHRoYXQgPSB0aGF0c1xuICAgICAgICB0aGlzLmNvdW50RG93bjIgPSBwYXJzZUludCgodGhhdHMuZGF0YS5tdXNpY0R1cmF0aW9uIC8gMTAwMCkudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vIHRoaXMuY291bnREb3duMiA9IDU1O1xuICAgICAgICB0aGlzLmluaXRUaXBzKCk7XG4gICAgfVxuXG4gICAgaW5pdFRpcHMgKCkgOnZvaWQge1xuICAgICAgICB0aGlzLmJhZFRpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5iYWRUaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvYmFkLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5iYWRUaXAuYWxwaGEgPSAwO1xuICAgICAgICB0aGlzLmJhZFRpcC53aWR0aCA9IDUxMDtcbiAgICAgICAgdGhpcy5iYWRUaXAuaGVpZ2h0ID0gMjIyO1xuICAgICAgICB0aGlzLmJhZFRpcC5waXZvdCgyNTUsIDExMSk7XG4gICAgICAgIHRoaXMuYmFkVGlwLnBvcyg1MDQsIExheWEuc3RhZ2UuaGVpZ2h0LyAyLTIwKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJhZFRpcCk7XG5cbiAgICAgICAgdGhpcy5taXNzVGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLm1pc3NUaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvbWlzcy5wbmdcIik7XG4gICAgICAgIHRoaXMubWlzc1RpcC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMubWlzc1RpcC53aWR0aCA9IDUxMDtcbiAgICAgICAgdGhpcy5taXNzVGlwLmhlaWdodCA9IDIyMjtcbiAgICAgICAgdGhpcy5taXNzVGlwLnBpdm90KDI1NSwgMTExKTtcbiAgICAgICAgdGhpcy5taXNzVGlwLnBvcyg1MDQsIExheWEuc3RhZ2UuaGVpZ2h0LyAyLTIwKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pc3NUaXApO1xuXG4gICAgICAgIC8vIHRoaXMucmlnaHRUaXAgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIC8vIHRoaXMucmlnaHRUaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvcmlnaHQucG5nXCIpO1xuICAgICAgICAvLyB0aGlzLnJpZ2h0VGlwLmFscGhhID0gMDtcbiAgICAgICAgLy8gdGhpcy5yaWdodFRpcC5waXZvdCg2MCwgMzApO1xuICAgICAgICAvLyB0aGlzLnJpZ2h0VGlwLnBvcyg1MDQsIChMYXlhLnN0YWdlLmhlaWdodCkgLyAyKTtcbiAgICAgICAgLy8gdGhpcy5hZGRDaGlsZCh0aGlzLnJpZ2h0VGlwKTtcblxuICAgICAgICAvLyB0aGlzLmdyZWF0VGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICAvLyB0aGlzLmdyZWF0VGlwLmxvYWRJbWFnZShcInJlcy9pbWdzL2dyZWF0LnBuZ1wiKTtcbiAgICAgICAgLy8gdGhpcy5ncmVhdFRpcC5hbHBoYSA9IDA7XG4gICAgICAgIC8vIHRoaXMuZ3JlYXRUaXAucGl2b3QoNzAsIDMwKTtcbiAgICAgICAgLy8gdGhpcy5ncmVhdFRpcC5wb3MoNTA0LCAoTGF5YS5zdGFnZS5oZWlnaHQpIC8gMik7XG4gICAgICAgIC8vIHRoaXMuYWRkQ2hpbGQodGhpcy5ncmVhdFRpcCk7XG5cbiAgICAgICAgdGhpcy5wZXJmZWN0VGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnBlcmZlY3RUaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvcGVyZmVjdC5wbmdcIik7XG4gICAgICAgIHRoaXMucGVyZmVjdFRpcC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMucGVyZmVjdFRpcC53aWR0aCA9IDUxMDtcbiAgICAgICAgdGhpcy5wZXJmZWN0VGlwLmhlaWdodCA9IDIyMjtcbiAgICAgICAgdGhpcy5wZXJmZWN0VGlwLnBpdm90KDI1NSwgMTExKTtcbiAgICAgICAgdGhpcy5wZXJmZWN0VGlwLnBvcyg1MDQsIExheWEuc3RhZ2UuaGVpZ2h0IC8gMi0yMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wZXJmZWN0VGlwKTtcblxuICAgICAgICB0aGlzLnRvcEJhblRpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy50b3BCYW5UaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvdG9wQmFuLnBuZ1wiKTtcbiAgICAgICAgdGhpcy50b3BCYW5UaXAud2lkdGggPSAzMjA7XG4gICAgICAgIHRoaXMudG9wQmFuVGlwLmhlaWdodCA9IDE0NTtcbiAgICAgICAgdGhpcy50b3BCYW5UaXAucGl2b3QoMTYwLCAwKTsgXG4gICAgICAgIHRoaXMudG9wQmFuVGlwLnBvcyg1MDQsIDApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudG9wQmFuVGlwKTtcbiAgICAgICAgdGhpcy50aXRsZVR4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgIHRoaXMudGl0bGVUeHQuZm9udFNpemUgPSAzNDtcbiAgICAgICAgdGhpcy50aXRsZVR4dC5jb2xvciA9IFwiI0ZGRkZGRlwiO1xuICAgICAgICB0aGlzLnRpdGxlVHh0LndpZHRoID0gMzIwO1xuICAgICAgICB0aGlzLnRpdGxlVHh0LnkgPSA4NTtcbiAgICAgICAgdGhpcy50aXRsZVR4dC5hbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICB0aGlzLnRpdGxlVHh0LnRleHQgPSBcIui3n+maj+iKguWlj1wiO1xuICAgICAgICB0aGlzLnRvcEJhblRpcC5hZGRDaGlsZCh0aGlzLnRpdGxlVHh0KTtcblxuICAgICAgICB0aGlzLnN0YXJ0R29UaXAgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIHRoaXMuc3RhcnRHb1RpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9idXR0b25TdGFydC5wbmdcIik7XG4gICAgICAgIHRoaXMuc3RhcnRHb1RpcC53aWR0aCA9IDI0MDtcbiAgICAgICAgdGhpcy5zdGFydEdvVGlwLmhlaWdodCA9IDgwO1xuICAgICAgICB0aGlzLnN0YXJ0R29UaXAucGl2b3QoMTIwLCAwKTsgXG4gICAgICAgIHRoaXMuc3RhcnRHb1RpcC5wb3MoNTA0LCAyODApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc3RhcnRHb1RpcCk7XG4gICAgICAgIHRoaXMuc3RhcnRHb1RpcC5vbihFdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLnN0YXJ0R28pXG4gICAgICAgIC8vIHRoaXMuc3RhcnRHb1R4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRHb1R4dC5mb250U2l6ZSA9IDI3O1xuICAgICAgICAvLyB0aGlzLnN0YXJ0R29UeHQuY29sb3IgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgLy8gdGhpcy5zdGFydEdvVHh0LndpZHRoID0gMjQwO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0R29UeHQueSA9IDI2O1xuICAgICAgICAvLyB0aGlzLnN0YXJ0R29UeHQuYWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgLy8gdGhpcy5zdGFydEdvVHh0LnRleHQgPSBcIuW8gOWni+a4uOaIj1wiO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0R29UaXAuYWRkQ2hpbGQodGhpcy5zdGFydEdvVHh0KTtcblxuICAgICAgICB0aGlzLnJlYWR5M1RpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5yZWFkeTNUaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvQ291bnREb3duMy5wbmdcIik7XG4gICAgICAgIHRoaXMucmVhZHkzVGlwLmFscGhhID0gMDtcbiAgICAgICAgdGhpcy5yZWFkeTNUaXAucGl2b3QoNDUsIDApOyBcbiAgICAgICAgdGhpcy5yZWFkeTNUaXAuaGVpZ2h0ID0gMTM1O1xuICAgICAgICB0aGlzLnJlYWR5M1RpcC5wb3MoNTA0LCBMYXlhLnN0YWdlLmhlaWdodC8yLTEyMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5yZWFkeTNUaXApO1xuICAgICAgICB0aGlzLnJlYWR5MlRpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5yZWFkeTJUaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvQ291bnREb3duMi5wbmdcIik7XG4gICAgICAgIHRoaXMucmVhZHkyVGlwLmFscGhhID0gMDtcbiAgICAgICAgdGhpcy5yZWFkeTJUaXAucGl2b3QoNDYuNSwgMCk7IFxuICAgICAgICB0aGlzLnJlYWR5MlRpcC5oZWlnaHQgPSAxMzU7XG4gICAgICAgIHRoaXMucmVhZHkyVGlwLnBvcyg1MDQsIExheWEuc3RhZ2UuaGVpZ2h0LzItMTIwKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnJlYWR5MlRpcCk7XG4gICAgICAgIHRoaXMucmVhZHkxVGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnJlYWR5MVRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9Db3VudERvd24xLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5yZWFkeTFUaXAuYWxwaGEgPSAwO1xuICAgICAgICB0aGlzLnJlYWR5MVRpcC5waXZvdCgzMy41LCAwKTsgXG4gICAgICAgIHRoaXMucmVhZHkxVGlwLmhlaWdodCA9IDEzNTtcbiAgICAgICAgdGhpcy5yZWFkeTFUaXAucG9zKDUwNCwgTGF5YS5zdGFnZS5oZWlnaHQvMi0xMjApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucmVhZHkxVGlwKTtcbiAgICAgICAgdGhpcy5yZWFkeVRpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5yZWFkeVRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9yZWFkeS5wbmdcIik7XG4gICAgICAgIHRoaXMucmVhZHlUaXAuYWxwaGEgPSAwO1xuICAgICAgICB0aGlzLnJlYWR5VGlwLnBpdm90KDE1MCwgMCk7IFxuICAgICAgICB0aGlzLnJlYWR5VGlwLmhlaWdodCA9IDEzNTtcbiAgICAgICAgdGhpcy5yZWFkeVRpcC5wb3MoNTA0LCBMYXlhLnN0YWdlLmhlaWdodC8yLTEyMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5yZWFkeVRpcCk7XG4gICAgICAgIHRoaXMucmVhZHlHb1RpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5yZWFkeUdvVGlwLmxvYWRJbWFnZShcInJlcy9pbWdzL0dPLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5yZWFkeUdvVGlwLmFscGhhID0gMDtcbiAgICAgICAgdGhpcy5yZWFkeUdvVGlwLnBpdm90KDE1MCwgMCk7IFxuICAgICAgICB0aGlzLnJlYWR5R29UaXAuaGVpZ2h0ID0gMTM1O1xuICAgICAgICB0aGlzLnJlYWR5R29UaXAucG9zKDUwNCwgTGF5YS5zdGFnZS5oZWlnaHQvMi0xMjApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucmVhZHlHb1RpcCk7XG5cblxuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5zY29yZVR4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgIC8vIHRoaXMuc2NvcmVUeHQuZm9udCA9IFwiSW1wYWN0XCI7XG4gICAgICAgIC8vIHRoaXMuc2NvcmVUeHQuZm9udFNpemUgPSA3MDtcbiAgICAgICAgLy8gdGhpcy5zY29yZVR4dC5jb2xvciA9IFwiIzIxRDRBMVwiO1xuICAgICAgICAvLyB0aGlzLnNjb3JlVHh0LndpZHRoID0gMTM4MDtcbiAgICAgICAgLy8gdGhpcy5zY29yZVR4dC5waXZvdCgyNSwgMCk7IFxuICAgICAgICAvLyB0aGlzLnNjb3JlVHh0LnBvcyg1MDQsIDIwKTtcbiAgICAgICAgLy8gdGhpcy5zY29yZVR4dC5hbHBoYSA9IDA7XG4gICAgICAgIC8vIHRoaXMuc2NvcmVUeHQudGV4dCA9IHRoaXMuc2NvcmVPYmoudG90YWxTY29yZS50b1N0cmluZygpO1xuICAgICAgICAvLyB0aGlzLmFkZENoaWxkKHRoaXMuc2NvcmVUeHQpO1xuICAgIH1cblxuICAgIHNldENvdW50RG93biAoKSA6dm9pZCB7XG4gICAgICAgIExheWEudGltZXIubG9vcCgxMDAwLCB0aGlzLCBjb3VudERvd25IYW5kbGVyKTtcblxuICAgICAgICBmdW5jdGlvbiBjb3VudERvd25IYW5kbGVyKCkge1xuICAgICAgICAgICAgaWYodGhpcy5jb3VudERvd24gPT0gKHRoaXMuY291bnREb3duMi01KSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0VGlwLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY291bnREb3duKys7XG4gICAgICAgICAgICBsZXQgY291bnQgPSBwYXJzZUludCgodGhpcy5jb3VudERvd24vNjAlNjApLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICBsZXQgY291bnQyID0gcGFyc2VJbnQoKHRoaXMuY291bnREb3duMi82MCU2MCkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIGxldCB0aW1lID0gXCIwXCIrKGNvdW50PT0wP1wiMFwiOmNvdW50KStcIjpcIisodGhpcy5jb3VudERvd24tY291bnQqNjA8MD8odGhpcy5jb3VudERvd248MTA/XCIwXCIrdGhpcy5jb3VudERvd246dGhpcy5jb3VudERvd24pOih0aGlzLmNvdW50RG93bi1jb3VudCo2MDwxMD9cIjBcIisodGhpcy5jb3VudERvd24tY291bnQqNjApOih0aGlzLmNvdW50RG93bi1jb3VudCo2MCkpKStcIi9cIitcIjBcIisoY291bnQyPT0wP1wiMFwiOmNvdW50MikrXCI6XCIrKHRoaXMuY291bnREb3duMi1jb3VudDIqNjA8MD8odGhpcy5jb3VudERvd24yPDEwP1wiMFwiK3RoaXMuY291bnREb3duMjp0aGlzLmNvdW50RG93bjIpOih0aGlzLmNvdW50RG93bjItY291bnQyKjYwPDEwP1wiMFwiKyh0aGlzLmNvdW50RG93bjItY291bnQyKjYwKToodGhpcy5jb3VudERvd24yLWNvdW50Mio2MCkpKVxuICAgICAgICAgICAgdGhpcy5jb3VudERvd25UeHQudGV4dCA9IHRpbWU7XG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudERvd24gPT0gdGhpcy5jb3VudERvd24yKSB7XG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLCBjb3VudERvd25IYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50KFwiRW5kX0dhbWVfRXZlbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5IChlOiBFdmVudCk6dm9pZHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5ldmVudChcIlBsYXlfR2FtZV9FdmVudFwiKTsgXG4gICAgICAgIFxuICAgIH1cbiAgICBzdG9wIChlOiBFdmVudCk6dm9pZHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5ldmVudChcIlN0b3BfR2FtZV9FdmVudFwiKTtcbiAgICB9XG4gICAgcmVzdGFydCAoZTogRXZlbnQpOnZvaWR7XG4gICAgICAgIGlmKGlzY2xpY2spe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlzY2xpY2sgPSB0cnVlO1xuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtuYW1lOidpbmdSZXN0YXJ0R2FtZScsZGF0YTp7fX0sJyonKTtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcbiAgICAgICAgaWYodGltZUxpbmUmJmlzMzIxKXtcbiAgICAgICAgICAgIHRpbWVMaW5lLm9mZihFdmVudC5DT01QTEVURSwgdGhpcywgKCk9Pnt9KTtcbiAgICAgICAgICAgIHRpbWVMaW5lLnBhdXNlKCk7XG4gICAgICAgICAgICB0aW1lTGluZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaXMzMjEgPSB0cnVlOyAgICAgICAgXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnN0b3BBbGwoKTtcbiAgICAgICAgZm9yKGxldCBpIG9mIHRoYXQuc2NyZWVuTGV0dGVyQm94QXJyKXtcbiAgICAgICAgICAgIGkubW92ZVR3ZWVuLnBhdXNlKCk7XG4gICAgICAgICAgICBpLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoYXQpO1xuICAgICAgICB0aGlzLmdhbWVQYW5lbC5kZXN0cm95KCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5HYW1lTWFuYWdlcigpO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cbiAgICBzZXRTY29yZSAoYWRkU2NvcmUpIDp2b2lkIHtcbiAgICAgICAgdGhpcy5zY29yZU9iai50b3RhbFNjb3JlICs9IGFkZFNjb3JlO1xuICAgICAgICAvLyB0aGlzLnNjb3JlVHh0LnRleHQgPSBwYXJzZUludCgodGhpcy5zY29yZU9iai50b3RhbFNjb3JlKS50b0ZpeGVkKDEpKS50b1N0cmluZygpO1xuICAgIH1cbiAgICBcbiAgICBnZXRTY29yZSAoKSA6YW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVPYmo7XG4gICAgfVxuXG4gICAgc2hvd1BsYXlUaXAgKGFkZFNjb3JlKTp2b2lkIHtcbiAgICAgICAgdmFyIGRhbmdlU2NvcmU6bnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5zY29yZU9iai5vYnN0YWNsZSsrO1xuICAgICAgICBpZiAoYWRkU2NvcmUgPT0gMjApIHtcbiAgICAgICAgICAgIExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInNvdW5kL2JlYXQubXAzXCIsIDEpO1xuICAgICAgICAgICAgdGhpcy5zY29yZU9iai5wZXJmZWN0Kys7XG4gICAgICAgICAgICBkYW5nZVNjb3JlID0gcGFyc2VGbG9hdCgoMTAwL3RoYXQuZ291emlMZW5ndGgpLnRvRml4ZWQoMSkpXG4gICAgICAgICAgICB0aGlzLnNob3dUaXAodGhpcy5wZXJmZWN0VGlwKTtcbiAgICAgICAgfSBlbHNlIGlmIChhZGRTY29yZSA9PSAxMCkge1xuICAgICAgICAgICAgdGhpcy5zY29yZU9iai5nb29kKys7XG4gICAgICAgICAgICBkYW5nZVNjb3JlID0gcGFyc2VGbG9hdCgoKDEwMC90aGF0LmdvdXppTGVuZ3RoKSowLjgpLnRvRml4ZWQoMSkpXG4gICAgICAgICAgICB0aGlzLnNob3dUaXAodGhpcy5ncmVhdFRpcCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWRkU2NvcmUgPT0gNSkge1xuICAgICAgICAgICAgdGhpcy5zY29yZU9iai5yaWdodCsrO1xuICAgICAgICAgICAgZGFuZ2VTY29yZSA9IHBhcnNlRmxvYXQoKCgxMDAvdGhhdC5nb3V6aUxlbmd0aCkqMC41KS50b0ZpeGVkKDEpKVxuICAgICAgICAgICAgdGhpcy5zaG93VGlwKHRoaXMucmlnaHRUaXApO1xuICAgICAgICB9IGVsc2UgaWYgKGFkZFNjb3JlID09IDApIHtcbiAgICAgICAgICAgIExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInNvdW5kL2J1dHRvbi5tcDNcIiwgMSk7XG4gICAgICAgICAgICB0aGlzLnNjb3JlT2JqLm1pc3MrKztcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpcCh0aGlzLm1pc3NUaXApO1xuICAgICAgICB9IGVsc2UgaWYgKGFkZFNjb3JlID09IC0xKSB7XG4gICAgICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5wbGF5U291bmQoXCJzb3VuZC9iYWQubXAzXCIsIDEpO1xuICAgICAgICAgICAgdGhpcy5zY29yZU9iai5iYWQrKztcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpcCh0aGlzLmJhZFRpcCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTY29yZShkYW5nZVNjb3JlKTtcbiAgICB9XG5cbiAgICBzaG93VGlwIChuZXdUaXApOnZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmxhc3RUaXApIHtcbiAgICAgICAgICAgIFR3ZWVuLmNsZWFyQWxsKHRoaXMubGFzdFRpcClcbiAgICAgICAgICAgIHRoaXMubGFzdFRpcC5hbHBoYSA9IDA7XG4gICAgICAgICAgICB0aGlzLmxhc3RUaXAuc2NhbGVYID0gMC40O1xuICAgICAgICAgICAgdGhpcy5sYXN0VGlwLnNjYWxlWSA9IDAuNDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoYW5kbGVyID0gbmV3IEhhbmRsZXIodGhpcy5sYXN0VGlwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBUd2Vlbi50byhuZXdUaXAsIHthbHBoYTogMCx9LCAxMDAsIG51bGwsIG51bGwsIDI1MCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ld1RpcC5zY2FsZVggPSAwLjQ7XG4gICAgICAgIG5ld1RpcC5zY2FsZVkgPSAwLjQ7XG4gICAgICAgIG5ld1RpcC55ID0gKExheWEuc3RhZ2UuaGVpZ2h0KSAvIDI7XG4gICAgICAgIG5ld1RpcC5hbHBoYSA9IDA7XG4gICAgICAgIFR3ZWVuLnRvKG5ld1RpcCwge2FscGhhOiAxLCBzY2FsZVg6IDEsIHNjYWxlWTogMX0sIDQwMCwgbnVsbCwgaGFuZGxlcik7XG4gICAgICAgIHRoaXMubGFzdFRpcCA9IG5ld1RpcDtcblxuICAgIH1cbiAgICBzdGFydEdvIChlOkV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlzY2xpY2sgPSBmYWxzZTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgICAgICAgIFxuICAgICAgICB0aGlzLnRvcEJhblRpcC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMudGl0bGVUeHQuYWxwaGEgPSAwO1xuICAgICAgICB0aGlzLnN0YXJ0R29UaXAuYWxwaGEgPSAwO1xuICAgICAgICB0aGlzLnRvcEJhblRpcC55ID0gMTAwMDtcbiAgICAgICAgdGhpcy5zdGFydEdvVGlwLnkgPSAxMDAwO1xuICAgICAgICBsZXQgX3RoYXQgPSB0aGlzO1xuICAgICAgICB0aGlzLmxvbmcgPSBuZXcgQW5pbWF0aW9uKCk7XG4gICAgICAgIC8vIHRoaXMubG9uZy5sb2FkQW5pbWF0aW9uKFwiYW5pL1wiK3RoYXQudHlwZUxWTCtcIi5hbmlcIik7XG4gICAgICAgIHRoaXMubG9uZy5sb2FkQW5pbWF0aW9uKFwiYW5pL3R5cGUxLmFuaVwiKTtcbiAgICAgICAgdGhpcy5sb25nLndpZHRoID0gMTAwODtcbiAgICAgICAgdGhpcy5sb25nLmhlaWdodCA9IDY0MDtcbiAgICAgICAgdGhpcy5sb25nLnBpdm90KDUwNCwgMCk7IFxuICAgICAgICB0aGlzLmxvbmcucG9zKDUwNCwgMCk7XG4gICAgICAgIHRoaXMubG9uZy5wbGF5KDAsIGZhbHNlKTsgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIExheWEuU291bmRNYW5hZ2VyLnBsYXlNdXNpYyh0aGF0LmRhdGEuZXhwbGFpbkF1ZGlvVXJsLCAxLGhhbmRsZXIpXG4gICAgICAgICAgICBfdGhhdC5sb25nLmxvYWRBbmltYXRpb24oXCJhbmkvdHlwZTExLmFuaVwiKTtcbiAgICAgICAgICAgIF90aGF0Lmxvbmcud2lkdGggPSAxMDA4O1xuICAgICAgICAgICAgX3RoYXQubG9uZy5oZWlnaHQgPSA2NDA7XG4gICAgICAgICAgICBfdGhhdC5sb25nLnBpdm90KDUwNCwgMCk7IFxuICAgICAgICAgICAgX3RoYXQubG9uZy5wb3MoNTA0LCAwKTtcbiAgICAgICAgICAgIC8vIF90aGF0LmxvbmcubG9hZEFuaW1hdGlvbihcImFuaS9cIit0aGF0LnR5cGVMVkwrXCIxLmFuaVwiKTtcbiAgICAgICAgICAgIF90aGF0LmxvbmcucGxheSgwLCB0cnVlKTsgIFxuICAgICAgICB9LCAzMzcwKTsgICBcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmxvbmcpO1xuICAgICAgICB2YXIgaGFuZGxlciA9IG5ldyBIYW5kbGVyKHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGF0LmxvbmcuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5yZWFkeUdPKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWFkeUdPICgpOnZvaWQge1xuICAgICAgICB0aGlzLnRpbWVUaXAgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIHRoaXMudGltZVRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy90aW1lLnBuZ1wiKTtcbiAgICAgICAgdGhpcy50aW1lVGlwLndpZHRoID0gMjUwO1xuICAgICAgICB0aGlzLnRpbWVUaXAuaGVpZ2h0ID0gNTU7XG4gICAgICAgIHRoaXMudGltZVRpcC5wb3MoNTA0KzEwMCwgMzIpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGltZVRpcCk7XG4gICAgICAgIHRoaXMuY291bnREb3duVHh0ID0gbmV3IFRleHQoKTtcbiAgICAgICAgdGhpcy5jb3VudERvd25UeHQud2lkdGggPSAyNTA7XG4gICAgICAgIHRoaXMuY291bnREb3duVHh0LmZvbnRTaXplID0gMjI7XG4gICAgICAgIHRoaXMuY291bnREb3duVHh0LmNvbG9yID0gXCIjRkZGRkZGXCI7XG4gICAgICAgIHRoaXMuY291bnREb3duVHh0LmFscGhhID0gMTtcbiAgICAgICAgdGhpcy5jb3VudERvd25UeHQueSA9IDE5O1xuICAgICAgICB0aGlzLmNvdW50RG93blR4dC54ID0gOTU7XG4gICAgICAgIGxldCBjb3VudDIgPSBwYXJzZUludCgodGhpcy5jb3VudERvd24yLzYwJTYwKS50b1N0cmluZygpKVxuICAgICAgICBsZXQgdGltZSA9IFwiMDA6MDAvXCIrXCIwXCIrKGNvdW50Mj09MD9cIjBcIjpjb3VudDIpK1wiOlwiKyh0aGlzLmNvdW50RG93bjItY291bnQyKjYwPDA/KHRoaXMuY291bnREb3duMjwxMD9cIjBcIit0aGlzLmNvdW50RG93bjI6dGhpcy5jb3VudERvd24yKToodGhpcy5jb3VudERvd24yLWNvdW50Mio2MDwxMD9cIjBcIisodGhpcy5jb3VudERvd24yLWNvdW50Mio2MCk6KHRoaXMuY291bnREb3duMi1jb3VudDIqNjApKSlcbiAgICAgICAgdGhpcy5jb3VudERvd25UeHQudGV4dCA9IHRpbWU7XG4gICAgICAgIHRoaXMudGltZVRpcC5hZGRDaGlsZCh0aGlzLmNvdW50RG93blR4dCk7XG4gICAgICAgIHRoaXMuc2NvcmVPYmoudG90YWxTY29yZSA9IDA7XG4gICAgICAgIHRoaXMucmVzdGFydFRpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0VGlwLmxvYWRJbWFnZShcInJlcy9pbWdzL3Jlc3RhcnQucG5nXCIpO1xuICAgICAgICB0aGlzLnJlc3RhcnRUaXAuYWxwaGEgPSAxO1xuICAgICAgICB0aGlzLnJlc3RhcnRUaXAud2lkdGggPSA2MDtcbiAgICAgICAgdGhpcy5yZXN0YXJ0VGlwLmhlaWdodCA9IDYwO1xuICAgICAgICB0aGlzLnJlc3RhcnRUaXAucG9zKDUwNCs0MDUsIDM0KTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnJlc3RhcnRUaXApO1xuICAgICAgICB0aW1lTGluZSA9IG5ldyBUaW1lTGluZSgpO1xuICAgICAgICBTb3VuZDMyMS5hdXRvU3RvcE11c2ljID0gdHJ1ZTtcbiAgICAgICAgU291bmQzMjEuc291bmRWb2x1bWUgPSAzO1xuICAgICAgICBTb3VuZDMyMS5wbGF5TXVzaWMoXCJzb3VuZC8zMjEubXAzXCIsIDEpXG4gICAgICAgIHRpbWVMaW5lLmFkZExhYmVsKFwicmVhZHkzXCIsIDApLnRvKHRoaXMucmVhZHkzVGlwLCB7c2NhbGVYOiAxLCBzY2FsZVk6IDEsIGFscGhhOiAxfSwgNTAwLCBudWxsLCAwKVxuICAgICAgICAgICAgICAgIC5hZGRMYWJlbChcInJlYWR5M1wiLCAwKS50byh0aGlzLnJlYWR5M1RpcCwge2FscGhhOiAwfSwgNTAwLCBudWxsLCAwKVxuICAgICAgICAgICAgICAgIC5hZGRMYWJlbChcInJlYWR5MlwiLCAwKS50byh0aGlzLnJlYWR5MlRpcCwge3NjYWxlWDogMSwgc2NhbGVZOiAxLCBhbHBoYTogMX0sIDUwMCwgbnVsbCwgMClcbiAgICAgICAgICAgICAgICAuYWRkTGFiZWwoXCJyZWFkeTJcIiwgMCkudG8odGhpcy5yZWFkeTJUaXAsIHthbHBoYTogMH0sIDUwMCwgbnVsbCwgMClcbiAgICAgICAgICAgICAgICAuYWRkTGFiZWwoXCJyZWFkeTFcIiwgMCkudG8odGhpcy5yZWFkeTFUaXAsIHtzY2FsZVg6IDEsIHNjYWxlWTogMSwgYWxwaGE6IDF9LCA1MDAsIG51bGwsIDApXG4gICAgICAgICAgICAgICAgLmFkZExhYmVsKFwicmVhZHkxXCIsIDApLnRvKHRoaXMucmVhZHkxVGlwLCB7YWxwaGE6IDB9LCA1MDAsIG51bGwsIDApXG4gICAgICAgICAgICAgICAgLmFkZExhYmVsKFwicmVhZHlcIiwgMCkudG8odGhpcy5yZWFkeVRpcCwge3NjYWxlWDogMSwgc2NhbGVZOiAxLCBhbHBoYTogMX0sIDUwMCwgbnVsbCwgMClcbiAgICAgICAgICAgICAgICAuYWRkTGFiZWwoXCJyZWFkeVwiLCAwKS50byh0aGlzLnJlYWR5VGlwLCB7YWxwaGE6IDB9LCA1MDAsIG51bGwsIDApXG4gICAgICAgICAgICAgICAgLmFkZExhYmVsKFwicmVhZHlHT1wiLCAwKS50byh0aGlzLnJlYWR5R29UaXAsIHtzY2FsZVg6IDEsIHNjYWxlWTogMSwgYWxwaGE6IDF9LCA1MDAsIG51bGwsIDApXG4gICAgICAgICAgICAgICAgLmFkZExhYmVsKFwicmVhZHlHT1wiLCAwKS50byh0aGlzLnJlYWR5R29UaXAsIHthbHBoYTogMH0sIDUwMCwgbnVsbCwgMClcbiAgICAgICAgdGltZUxpbmUucGxheSgwLCBmYWxzZSk7XG4gICAgICAgIHRpbWVMaW5lLm9uKEV2ZW50LkxBQkVMLCB0aGlzLCBvbkxhYmVsKTtcbiAgICAgICAgdGltZUxpbmUub24oRXZlbnQuQ09NUExFVEUsIHRoaXMsIG9uQ29tcGxldGUpO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uTGFiZWwobGFiZWwpIHtcbiAgICAgICAgICAgIGlmIChsYWJlbCA9PSBcInJlYWR5T3V0XCIpIHtcbiAgICAgICAgICAgICAgICB0aW1lTGluZS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lTGluZS5yZXN1bWUoKTtcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Db21wbGV0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydFRpcC5vbihFdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLnJlc3RhcnQpXG4gICAgICAgICAgICAgICAgdGltZUxpbmUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGlzMzIxID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb3VudERvd24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50KFwiU3RhcnRfR2FtZV9FdmVudFwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xyXG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xyXG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbnZhciBSRUc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xuZXhwb3J0IG1vZHVsZSB1aS5kaWFsb2cge1xyXG4gICAgZXhwb3J0IGNsYXNzIExvYWRpbmdEaWFsb2dVSSBleHRlbmRzIERpYWxvZyB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiRGlhbG9nXCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6NjQwLFwiYXV0b0Rlc3Ryb3lBdENsb3NlZFwiOmZhbHNlfSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJBbmltYXRpb25cIixcInByb3BzXCI6e1wieVwiOjMyMCxcInhcIjo1MDQsXCJzb3VyY2VcIjpcImFuaS9sb2FkLmFuaVwiLFwicm90YXRpb25cIjotOTAsXCJwaXZvdFlcIjowLFwicGl2b3RYXCI6MCxcImF1dG9QbGF5XCI6dHJ1ZX0sXCJjb21wSWRcIjoxMH1dLFwibG9hZExpc3RcIjpbXCJhbmkvbG9hZC5hbmlcIl0sXCJsb2FkTGlzdDNEXCI6W119O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVWaWV3KExvYWRpbmdEaWFsb2dVSS51aVZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFJFRyhcInVpLmRpYWxvZy5Mb2FkaW5nRGlhbG9nVUlcIixMb2FkaW5nRGlhbG9nVUkpO1xyXG59XHIiXX0=
