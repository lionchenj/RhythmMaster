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
            Laya.stage.scaleMode = window.innerWidth > window.innerHeight ? 'showall' : 'exactfit';
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
        _this.countDown2 = 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9MYXlhQWlySURFX2JldGEuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9Db25zdGFudHMudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9Mb2FkaW5nRGlhbG9nLnRzIiwic3JjL01haW4udHMiLCJzcmMvUm9hZC50cyIsInNyYy9iZy50cyIsInNyYy9lbmQudHMiLCJzcmMvc2hpcC50cyIsInNyYy90aGluZy50cyIsInNyYy90aXBzLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQSxLQUFLO0FBQ0w7SUFBQTtJQThIQSxDQUFDO0lBN0hVLGlCQUFPLEdBQUcsc0JBQXNCLENBQUE7SUFDaEMsa0JBQVEsR0FBRyx3QkFBd0IsQ0FBQTtJQUNuQyxpQkFBTyxHQUFHLHNCQUFzQixDQUFBO0lBQ2hDLGlCQUFPLEdBQUcsc0JBQXNCLENBQUE7SUFDaEMsa0JBQVEsR0FBRyx1QkFBdUIsQ0FBQTtJQUNsQyxrQkFBUSxHQUFHLHVCQUF1QixDQUFBO0lBQ2xDLGtCQUFRLEdBQUcsdUJBQXVCLENBQUE7SUFDbEMsa0JBQVEsR0FBRyx1QkFBdUIsQ0FBQTtJQUNsQyxrQkFBUSxHQUFHLHdCQUF3QixDQUFBO0lBQ25DLGlCQUFPLEdBQUcsc0JBQXNCLENBQUE7SUFDaEMsaUJBQU8sR0FBRyxzQkFBc0IsQ0FBQTtJQUNoQyxrQkFBUSxHQUFHLHVCQUF1QixDQUFBO0lBQ2xDLGtCQUFRLEdBQUcsdUJBQXVCLENBQUE7SUFDbEMsa0JBQVEsR0FBRyx1QkFBdUIsQ0FBQTtJQUNsQyxrQkFBUSxHQUFHLHVCQUF1QixDQUFBO0lBQ2xDLGtCQUFRLEdBQUcsd0JBQXdCLENBQUE7SUFD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O1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxVQUFVO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElB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QyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEVBQUU7WUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsTUFBTTtZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLE1BQU07WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsTUFBTTtZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxLQUFLO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsS0FBSztZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxLQUFLO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsS0FBSztZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxLQUFLO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsT0FBTztZQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxt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SSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsR0FBRztZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxHQUFHO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEdBQUc7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsR0FBRztZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxHQUFHO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEdBQUc7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FB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QUFFO2dDQUM1RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzVELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDNUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM3RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dDQUM3RCxF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Q0osTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0QsR0FBRyxFQUFFO1lBQ0QsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7U0FDWjtLQUNKO0NBQ0osQ0FBQztBQUNXLFFBQUEsTUFBTSxHQUFHO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0NBQzdCLENBQUE7QUFDWSxRQUFBLE1BQU0sR0FBRztJQUNsQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtDQUM3QixDQUFBO0FBQ1ksUUFBQSxNQUFNLEdBQUc7SUFDbEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FB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SUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2hELElBQUks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QyxDQUFDO1FBRTlDO1lBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBQyxDQUFDLENBQUMsRUFBQztnQkFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM3QjtZQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQ3ZELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDekQsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFDLENBQUMsS0FBSyxJQUFFLENBQUMsQ0FBQSxDQUFDLENBQUEsR0FBRyxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUMsR0FBQyxHQUFHLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssR0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQSxHQUFHLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFBLEdBQUcsR0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLENBQUMsTUFBTSxJQUFFLENBQUMsQ0FBQSxD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QUFDLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUEsR0FBRyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLE1BQU0sR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQSxHQUFHLEdBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLE1BQU0sR0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLE1BQU0sR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcE8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMxQixRQUFRLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM5QixRQUFRLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN6QixRQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDeEYsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNsRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUN4RixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ2xFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ3hGLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDbEUsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDdEYsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNoRSxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMxRixRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDN0UsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4QyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTlDLGlCQUFpQixLQUFLO1lBQ2xCLElBQUksS0FBSyxJQUFJLFVBQVUsRUFBRTtnQkFDckIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqQixVQUFVLENBQUM7b0JBQ1AsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDWDtRQUNMLENBQUM7UUFFRDtZQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNwRCxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNkLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFdkMsQ0FBQztJQUNMLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0E5WEEsQUE4WEMsQ0E5WGlDLElBQUksQ0FBQyxNQUFNLEdBOFg1Qzs7Ozs7O0FDcllELElBQU8sTUFBTSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFFMUIsSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7QUFDN0MsSUFBYyxFQUFFLENBVWY7QUFWRCxXQUFjLEVBQUU7SUFBQyxJQUFBLE1BQU0sQ0FVdEI7SUFWZ0IsV0FBQSxNQUFNO1FBQ25CO1lBQXFDLG1DQUFNO1lBRXZDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2Qix3Q0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBTGMsc0JBQU0sR0FBTSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLHFCQUFxQixFQUFDLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLGNBQWMsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU16VCxzQkFBQztTQVBELEFBT0MsQ0FQb0MsTUFBTSxHQU8xQztRQVBZLHNCQUFlLGtCQU8zQixDQUFBO1FBQ0QsR0FBRyxDQUFDLDJCQUEyQixFQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JELENBQUMsRUFWZ0IsTUFBTSxHQUFOLFNBQU0sS0FBTixTQUFNLFFBVXRCO0FBQUQsQ0FBQyxFQVZhLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQVVmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8v6aKE5aOw5piOXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdGFudHMge1xuICAgIHN0YXRpYyBwZXJmZWN0ID0gXCJyZXMvaW1ncy9wZXJmZWN0LnBuZ1wiXG4gICAgc3RhdGljIHR5cGUxX2JnID0gXCJyZXMvaW1ncy90eXBlMS93YmcucG5nXCJcbiAgICBzdGF0aWMgdHlwZTFfMSA9IFwicmVzL2ltZ3MvdHlwZTEvMS5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMV8yID0gXCJyZXMvaW1ncy90eXBlMS8yLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUxX20xID0gXCJyZXMvaW1ncy90eXBlMS9tMS5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMV9tMiA9IFwicmVzL2ltZ3MvdHlwZTEvbTIucG5nXCJcbiAgICBzdGF0aWMgdHlwZTFfbTMgPSBcInJlcy9pbWdzL3R5cGUxL20zLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUxX200ID0gXCJyZXMvaW1ncy90eXBlMS9tNC5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMl9iZyA9IFwicmVzL2ltZ3MvdHlwZTIvd2JnLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUyXzEgPSBcInJlcy9pbWdzL3R5cGUyLzEucG5nXCJcbiAgICBzdGF0aWMgdHlwZTJfMiA9IFwicmVzL2ltZ3MvdHlwZTIvMi5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMl9tMSA9IFwicmVzL2ltZ3MvdHlwZTIvbTEucG5nXCJcbiAgICBzdGF0aWMgdHlwZTJfbTIgPSBcInJlcy9pbWdzL3R5cGUyL20yLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUyX20zID0gXCJyZXMvaW1ncy90eXBlMi9tMy5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMl9tNCA9IFwicmVzL2ltZ3MvdHlwZTIvbTQucG5nXCJcbiAgICBzdGF0aWMgdHlwZTNfYmcgPSBcInJlcy9pbWdzL3R5cGUzL3diZy5wbmdcIlxuICAgIHN0YXRpYyB0eXBlM18xID0gXCJyZXMvaW1ncy90eXBlMy8xLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUzXzIgPSBcInJlcy9pbWdzL3R5cGUzLzIucG5nXCJcbiAgICBzdGF0aWMgdHlwZTNfbTEgPSBcInJlcy9pbWdzL3R5cGUzL20xLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUzX20yID0gXCJyZXMvaW1ncy90eXBlMy9tMi5wbmdcIlxuICAgIHN0YXRpYyB0eXBlM19tMyA9IFwicmVzL2ltZ3MvdHlwZTMvbTMucG5nXCJcbiAgICBzdGF0aWMgdHlwZTNfbTQgPSBcInJlcy9pbWdzL3R5cGUzL200LnBuZ1wiXG4gICAgc3RhdGljIHR5cGU0X2JnID0gXCJyZXMvaW1ncy90eXBlNC93YmcucG5nXCJcbiAgICBzdGF0aWMgdHlwZTRfMSA9IFwicmVzL2ltZ3MvdHlwZTQvMS5wbmdcIlxuICAgIHN0YXRpYyB0eXBlNF8yID0gXCJyZXMvaW1ncy90eXBlNC8yLnBuZ1wiXG4gICAgc3RhdGljIHR5cGU0X20xID0gXCJyZXMvaW1ncy90eXBlNC9tMS5wbmdcIlxuICAgIHN0YXRpYyB0eXBlNF9tMiA9IFwicmVzL2ltZ3MvdHlwZTQvbTIucG5nXCJcbiAgICBzdGF0aWMgdHlwZTRfbTMgPSBcInJlcy9pbWdzL3R5cGU0L20zLnBuZ1wiXG4gICAgc3RhdGljIHR5cGU0X200ID0gXCJyZXMvaW1ncy90eXBlNC9tNC5wbmdcIlxuICAgIHN0YXRpYyBiYWQgPSBcInJlcy9pbWdzL2JhZC5wbmdcIlxuICAgIHN0YXRpYyBiZzEgPSBcImJnLzEucG5nXCJcbiAgICBzdGF0aWMgYmcyID0gXCJiZy8yLnBuZ1wiXG4gICAgc3RhdGljIGJnMyA9IFwiYmcvMy5wbmdcIlxuICAgIHN0YXRpYyBiZzQgPSBcImJnLzQucG5nXCJcbiAgICBzdGF0aWMgYmc1ID0gXCJiZy81LnBuZ1wiXG4gICAgc3RhdGljIGJnNiA9IFwiYmcvNi5wbmdcIlxuICAgIHN0YXRpYyBiZzcgPSBcImJnLzcucG5nXCJcbiAgICBzdGF0aWMgYmc4ID0gXCJiZy84LnBuZ1wiXG4gICAgc3RhdGljIGJnOSA9IFwiYmcvOS5wbmdcIlxuICAgIHN0YXRpYyBiZzEwID0gXCJiZy8xMC5wbmdcIlxuICAgIHN0YXRpYyBiZzExID0gXCJiZy8xMS5wbmdcIlxuICAgIHN0YXRpYyBiZzEyID0gXCJiZy8xMi5wbmdcIlxuICAgIHN0YXRpYyBiZzEzID0gXCJiZy8xMy5wbmdcIlxuICAgIHN0YXRpYyBiZzE0ID0gXCJiZy8xNC5wbmdcIlxuICAgIHN0YXRpYyBiZzE1ID0gXCJiZy8xNS5wbmdcIlxuICAgIHN0YXRpYyBiZzE2ID0gXCJiZy8xNi5wbmdcIlxuICAgIHN0YXRpYyBiZzE3ID0gXCJiZy8xNy5wbmdcIlxuICAgIHN0YXRpYyBiZzE4ID0gXCJiZy8xOC5wbmdcIlxuICAgIHN0YXRpYyBiZzE5ID0gXCJiZy8xOS5wbmdcIlxuICAgIHN0YXRpYyBiZzIwID0gXCJiZy8yMC5wbmdcIlxuICAgIHN0YXRpYyBiZzIxID0gXCJiZy8yMS5wbmdcIlxuICAgIHN0YXRpYyBiZzIyID0gXCJiZy8yMi5wbmdcIlxuICAgIHN0YXRpYyBiZzIzID0gXCJiZy8yMy5wbmdcIlxuICAgIHN0YXRpYyBiZzI0ID0gXCJiZy8yNC5wbmdcIlxuICAgIHN0YXRpYyBiZzI1ID0gXCJiZy8yNS5wbmdcIlxuICAgIHN0YXRpYyBiZzI2ID0gXCJiZy8yNi5wbmdcIlxuICAgIHN0YXRpYyBiZzI3ID0gXCJiZy8yNy5wbmdcIlxuICAgIHN0YXRpYyBiZzI4ID0gXCJiZy8yOC5wbmdcIlxuICAgIHN0YXRpYyBiZzI5ID0gXCJiZy8yOS5wbmdcIlxuICAgIHN0YXRpYyBiZzMwID0gXCJiZy8zMC5wbmdcIlxuICAgIHN0YXRpYyBiZzMxID0gXCJiZy8zMS5wbmdcIlxuICAgIHN0YXRpYyBiZzMyID0gXCJiZy8zMi5wbmdcIlxuICAgIHN0YXRpYyBiZzMzID0gXCJiZy8zMy5wbmdcIlxuICAgIHN0YXRpYyBiZzM0ID0gXCJiZy8zNC5wbmdcIlxuICAgIHN0YXRpYyBiZzM1ID0gXCJiZy8zNS5wbmdcIlxuICAgIHN0YXRpYyBidXR0b25BZ2FpbiA9IFwicmVzL2ltZ3MvYnV0dG9uQWdhaW4ucG5nXCJcbiAgICBzdGF0aWMgYnV0dG9uTmV4dCA9IFwicmVzL2ltZ3MvYnV0dG9uTmV4dC5wbmdcIlxuICAgIHN0YXRpYyBidXR0b25TdGFydCA9IFwicmVzL2ltZ3MvYnV0dG9uU3RhcnQucG5nXCJcbiAgICBzdGF0aWMgZW5lcmd5ID0gXCJyZXMvaW1ncy90eXBlMS8xLnBuZ1wiXG4gICAgc3RhdGljIG9ic3RhY2xlID0gXCJyZXMvaW1ncy90eXBlMS8yLnBuZ1wiXG4gICAgc3RhdGljIG1pc3MgPSBcInJlcy9pbWdzL21pc3MucG5nXCJcbiAgICBzdGF0aWMgcmVzdGFydCA9IFwicmVzL2ltZ3MvcmVzdGFydC5wbmdcIlxuICAgIHN0YXRpYyBzZyA9IFwicmVzL2ltZ3Mvc2cucG5nXCJcbiAgICBzdGF0aWMgc3Rhck9GRiA9IFwicmVzL2ltZ3Mvc3Rhck9GRi5wbmdcIlxuICAgIHN0YXRpYyBzdGFyT04gPSBcInJlcy9pbWdzL3N0YXJPTi5wbmdcIlxuICAgIHN0YXRpYyB0aW1lID0gXCJyZXMvaW1ncy90aW1lLnBuZ1wiXG4gICAgc3RhdGljIHRvcEJhbiA9IFwicmVzL2ltZ3MvdG9wQmFuLnBuZ1wiXG5cbiAgICBzdGF0aWMgYmFkYnVsID0gXCJyZXMvYXRsYXMvc2hpcC9iYWQvYnVsLnBuZ1wiXG4gICAgc3RhdGljIGJhZGdyZSA9IFwicmVzL2F0bGFzL3NoaXAvYmFkL2dyZS5wbmdcIlxuICAgIHN0YXRpYyBiYWRyZWQgPSBcInJlcy9hdGxhcy9zaGlwL2JhZC9yZWQucG5nXCJcbiAgICBzdGF0aWMgYmFkeWVsID0gXCJyZXMvYXRsYXMvc2hpcC9iYWQveWVsLnBuZ1wiXG5cbiAgICBzdGF0aWMgb2tidWwgPSBcInJlcy9hdGxhcy9zaGlwL29rL2J1bC5wbmdcIlxuICAgIHN0YXRpYyBva2dyZSA9IFwicmVzL2F0bGFzL3NoaXAvb2svZ3JlLnBuZ1wiXG4gICAgc3RhdGljIG9rcmVkID0gXCJyZXMvYXRsYXMvc2hpcC9vay9yZWQucG5nXCJcbiAgICBzdGF0aWMgb2t5ZWwgPSBcInJlcy9hdGxhcy9zaGlwL29rL3llbC5wbmdcIlxuXG4gICAgc3RhdGljIGdvYnVsID0gXCJyZXMvYXRsYXMvc2hpcC9nby9idWwucG5nXCJcbiAgICBzdGF0aWMgZ29ncmUgPSBcInJlcy9hdGxhcy9zaGlwL2dvL2dyZS5wbmdcIlxuICAgIHN0YXRpYyBnb3JlZCA9IFwicmVzL2F0bGFzL3NoaXAvZ28vcmVkLnBuZ1wiXG4gICAgc3RhdGljIGdveWVsID0gXCJyZXMvYXRsYXMvc2hpcC9nby95ZWwucG5nXCJcblxuICAgIHN0YXRpYyBzaG9wYnVsID0gXCJyZXMvYXRsYXMvc2hpcC9zaG9wL2J1bC5wbmdcIlxuICAgIHN0YXRpYyBzaG9wZ3JlID0gXCJyZXMvYXRsYXMvc2hpcC9zaG9wL2dyZS5wbmdcIlxuICAgIHN0YXRpYyBzaG9wcmVkID0gXCJyZXMvYXRsYXMvc2hpcC9zaG9wL3JlZC5wbmdcIlxuICAgIHN0YXRpYyBzaG9weWVsID0gXCJyZXMvYXRsYXMvc2hpcC9zaG9wL3llbC5wbmdcIlxuXG4gICAgc3RhdGljIHNvdW5kMCA9IFwic291bmQvMzIxLm1wM1wiXG4gICAgc3RhdGljIHNvdW5kMSA9IFwic291bmQvYnV0dG9uLm1wM1wiXG4gICAgc3RhdGljIHNvdW5kMiA9IFwic291bmQvYmVhdC5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZDMgPSBcInNvdW5kL2VuZC5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZDQgPSBcInNvdW5kL2JhZC5tcDNcIlxuICAgIHN0YXRpYyBDb3VudERvd24xID0gXCJyZXMvaW1ncy9Db3VudERvd24xLnBuZ1wiXG4gICAgc3RhdGljIENvdW50RG93bjIgPSBcInJlcy9pbWdzL0NvdW50RG93bjIucG5nXCJcbiAgICBzdGF0aWMgQ291bnREb3duMyA9IFwicmVzL2ltZ3MvQ291bnREb3duMy5wbmdcIlxuICAgIHN0YXRpYyByZWFkeSA9IFwicmVzL2ltZ3MvcmVhZHkucG5nXCJcbiAgICBzdGF0aWMgZ28gPSBcInJlcy9pbWdzL0dPLnBuZ1wiXG4gICAgc3RhdGljIGxvbmcgPSBcInJlcy9hdGxhcy9sb25nLnBuZ1wiXG4gICAgc3RhdGljIGxvYWRiZyA9IFwibG9hZC9iZy5wbmdcIlxuICAgIHN0YXRpYyBsb2FkID0gXCJyZXMvYXRsYXMvbG9hZC5wbmdcIlxuICAgIHN0YXRpYyBsb2FkMSA9IFwicmVzL2F0bGFzL2xvYWQxLnBuZ1wiXG4gICAgc3RhdGljIHRlc3QgPSBcInJlcy9hdGxhcy9zaGlwLnBuZ1wiXG4gICAgc3RhdGljIGxvbmdTV0YgPSBcInJlcy9hdGxhcy9sb25nL2xvbmdTV0YucG5nXCJcbiAgICBzdGF0aWMgbG9uZ1NXRjEgPSBcInJlcy9hdGxhcy9sb25nL2xvbmdTV0YxLnBuZ1wiXG4gICAgc3RhdGljIGxvbmdTV0YyID0gXCJyZXMvYXRsYXMvbG9uZy9sb25nU1dGMi5wbmdcIlxuICAgIHN0YXRpYyBsb25nU1dGMyA9IFwicmVzL2F0bGFzL2xvbmcvbG9uZ1NXRjMucG5nXCJcblxuICAgIHN0YXRpYyBlbmQwID0gXCJyZXMvYXRsYXMvZW5kLzAucG5nXCJcbiAgICBzdGF0aWMgZW5kMSA9IFwicmVzL2F0bGFzL2VuZC8xLnBuZ1wiXG4gICAgc3RhdGljIGVuZDIgPSBcInJlcy9hdGxhcy9lbmQvMi5wbmdcIlxuICAgIHN0YXRpYyBlbmQzID0gXCJyZXMvYXRsYXMvZW5kLzMucG5nXCJcbiAgICBzdGF0aWMgZW5kMDAxID0gXCJyZXMvYXRsYXMvZW5kLzAwLnBuZ1wiXG4gICAgc3RhdGljIGVuZDAwMiA9IFwicmVzL2F0bGFzL2VuZC8wMDEucG5nXCJcblxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5cclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTEzODA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj02NDA7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cInNob3dhbGxcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cImhvcml6b250YWxcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwibWlkZGxlXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImNlbnRlclwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiZGlhbG9nL0xvYWRpbmdEaWFsb2cuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG5cclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuL3VpL2xheWFNYXhVSVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ0RpYWxvZyBleHRlbmRzIHVpLmRpYWxvZy5Mb2FkaW5nRGlhbG9nVUkge1xuICAgIC8vIHByaXZhdGUgcHJvZ3Jlc3MgPSAnMCdcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIC8vIHRoaXMud2lkdGggPSAxMzgwO1xuICAgICAgICAvLyB0aGlzLmhlaWdodCA9IDY0MDtcbiAgICAgICAgLy8gdGhpcy5hdXRvRGVzdHJveUF0Q2xvc2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzUG9wdXBDZW50ZXIgPSB0cnVlXG4gICAgICAgIC8vIHRoaXMucG9zKDAsIDApXG4gICAgfVxuXG4gICAgb25PcGVuZWQoKSB7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlUHJvZ3Jlc3NWYWx1ZSgwKSAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlUHJvZ3Jlc3NWYWx1ZShuYmVyOiBudW1iZXIpIHtcbiAgICAgICAgLy8gaWYgKCF0aGlzLnByb2dyZXNzKSB7XG4gICAgICAgIC8vICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLmNoYW5nZVByb2dyZXNzVmFsdWUpXG4gICAgICAgIC8vICAgICByZXR1cm5cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjb25zdCBudW0gPSBNYXRoLmNlaWwobmJlciAqIDEwMCkgKyBcIiVcIlxuICAgICAgICAvLyB0aGlzLnByb2dyZXNzLnRleHQgPSBudW07XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRpcCh0aXA6IHN0cmluZykge1xuICAgICAgICAvLyB0aGlzLnByb2dyZXNzLnRleHQgPSB0aXBcbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgfVxufSIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IEVhc2UgPSBMYXlhLkVhc2U7XHJcbmltcG9ydCBIYW5kbGVyID0gTGF5YS5IYW5kbGVyO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyID0gTGF5YS5Tb3VuZE1hbmFnZXI7XHJcbmltcG9ydCBTcHJpdGUgPSBMYXlhLlNwcml0ZTtcclxuaW1wb3J0IFN0YWdlID0gTGF5YS5TdGFnZTtcclxuaW1wb3J0IFR3ZWVuID0gTGF5YS5Ud2VlbjtcclxuaW1wb3J0IExvYWRpbmdEaWFsb2cgZnJvbSBcIi4vTG9hZGluZ0RpYWxvZ1wiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQmcgZnJvbSBcIi4vYmdcIjtcclxuaW1wb3J0IFRpcHMgZnJvbSBcIi4vdGlwc1wiO1xyXG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcbmltcG9ydCBFbmQgZnJvbSBcIi4vZW5kXCI7XHJcbmltcG9ydCBUaGluZyBmcm9tIFwiLi90aGluZ1wiO1xyXG5cclxubGV0IF90aGlzLGdhbWVQYW5lbCxcclxuICAgIGlJbmRleCA9IDAsXHJcbiAgICBtb3VzZVIgPSAwLFxyXG4gICAgdGhpbmdMaXN0ID0gW10sXHJcbiAgICBpc1BhdXNlID0gZmFsc2UsXHJcbiAgICBzaGlwUm9hZCA9IDEwMCxcclxuICAgIHNoaXBXaWR0aCA9IDIwMCxcclxuICAgIHJvYWRzID0gMCxcclxuICAgIHBlcmNlbnQsQmVhdHMwLEJlYXRzMSxCZWF0czIsXHJcbiAgICBiZ3g7XHJcbiAgICBcclxuaW1wb3J0IHtmb3VyUm9hZFBvc2l0aW9ufSBmcm9tIFwiLi9Sb2FkXCI7XHJcblxyXG5jbGFzcyBNYWluIHtcclxuICAgIHByaXZhdGUgbG9hZGluZ0RpYWxvZzogTG9hZGluZ0RpYWxvZztcclxuXHRwcml2YXRlIGJnTWFuYWdlcjsvL+a4uOaIj+S4u+iDjOaZr1xyXG4gICAgcHJpdmF0ZSBlbmRNYW5hZ2VyOy8v57uT5p2f5a655ZmoXHJcbiAgICBwcml2YXRlIHNoaXBDb250YWluZXI7Ly/oiLnnp7vliqjlrrnlmahcclxuICAgIHByaXZhdGUgYnV0dG9ud2lkdGg7XHJcbiAgICBwcml2YXRlIGdhbWVQYW5lbDsvL+a4uOaIj+WMuuWuueWZqFxyXG4gICAgcHJpdmF0ZSB0aGluZ1JvYWQ7Ly/mvILmtYHnianlrrnlmahcclxuICAgIHByaXZhdGUgdGlwc01hbmFnZXI7Ly/mj5DnpLrlrrnlmajvvIjlsYLnuqfmnIDpq5jvvIlcclxuICAgIHByaXZhdGUgcm9hZEFyciA9IFtdOy8v5Zub5p2h6Lev5pWw57uEXHJcblx0cHJpdmF0ZSB3b3Jkc0FyciA9IEJlYXRzMDsvL+WNleivjeaVsOe7hFxyXG4gICAgcHJpdmF0ZSBsZXR0ZXJUb3RhbCA9IDA7XHJcbiAgICBwcml2YXRlIGxldHRlck9iakFyciA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyTGV0dGVyID0ge2xldHRlcjonJ307Ly/lvZPliY3lrZfmr41cclxuICAgIHByaXZhdGUgc2NyZWVuTGV0dGVyQm94QXJyID0gW107Ly/lnKjlsY/luZXkuK3nmoTlrZfmr43mlbDnu4RcclxuICAgIHByaXZhdGUgbGV0dGVyViA9IDMwMDA7Ly/lhajnqIvml7bpl7RcclxuICAgIHByaXZhdGUgY29uc29sZTogTGF5YS5UZXh0O1xyXG4gICAgcHJpdmF0ZSBnb3V6aUxlbmd0aDtcclxuICAgIHByaXZhdGUgaHR0cDtcclxuICAgIHByaXZhdGUgZGF0YTtcclxuICAgIHByaXZhdGUgeDtcclxuICAgIHByaXZhdGUgYmc7XHJcbiAgICBwcml2YXRlIHR5cGVMVkwgPSAndHlwZTEnO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHRBbGw7XHJcbiAgICBwcml2YXRlIHN0YXJ0MzIxID0gXCJzb3VuZC8zMjEubXAzXCJcclxuICAgIHByaXZhdGUgZW5kID0gXCJzb3VuZC9lbmQubXAzXCJcclxuICAgIFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIF90aGlzID0gdGhpcztcclxuICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtuYW1lOidmZXRjaFF1ZXN0aW9ucycsZGF0YTp7fX0sJyonKVxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsX3RoaXMucG9zdCxmYWxzZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25vcmllbnRhdGlvbmNoYW5nZVwiIGluIHdpbmRvdyA/IFwib3JpZW50YXRpb25jaGFuZ2VcIiA6IFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5vcmllbnRhdGlvbiA9PT0gMTgwIHx8IHdpbmRvdy5vcmllbnRhdGlvbiA9PT0gMCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5zdGFnZS53aWR0aCA9IDEwMDg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKF90aGlzLmVuZE1hbmFnZXIpIF90aGlzLmVuZE1hbmFnZXIucG9zKExheWEuc3RhZ2Uud2lkdGgvMiwwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYoZ2FtZVBhbmVsKSBnYW1lUGFuZWwueCA9IExheWEuc3RhZ2Uud2lkdGgvMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9ICdleGFjdGZpdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lm9yaWVudGF0aW9uID09PSA5MCB8fCB3aW5kb3cub3JpZW50YXRpb24gPT09IC05MCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXlhLnN0YWdlLndpZHRoID0gMTM4MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYoX3RoaXMuZW5kTWFuYWdlcikgX3RoaXMuZW5kTWFuYWdlci5wb3MoTGF5YS5zdGFnZS53aWR0aC8yLDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZihnYW1lUGFuZWwpIGdhbWVQYW5lbC54ID0gTGF5YS5zdGFnZS53aWR0aC8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gJ3Nob3dhbGwnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9LDUwMClcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFxyXG4gICAgICAgIFxyXG5cdFx0TGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gJyc7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25WID0gR2FtZUNvbmZpZy5hbGlnblY7XHJcbiAgICAgICAgTGF5YS5zdGFnZS53aWR0aCA9IHdpbmRvdy5pbm5lckhlaWdodD43MDB8fHdpbmRvdy5pbm5lcldpZHRoPjcwMHx8d2luZG93LmlubmVyV2lkdGg+d2luZG93LmlubmVySGVpZ2h0PzEzODA6MTAwODtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuICAgICAgICBMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlO1xyXG5cdFx0TGF5YS5zdGFnZS5iZ0NvbG9yID0gXCJ3aGl0ZVwiXHJcblx0XHRVSUNvbmZpZy5wb3B1cEJnQWxwaGEgPSAxXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IGZhbHNlXHJcbiAgICAgICAgVUlDb25maWcucG9wdXBCZ0NvbG9yID0gXCIjZmZmZmZmXCJcclxuXHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnNldFNvdW5kVm9sdW1lKDApO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5U291bmQodGhpcy5lbmQsIDEpO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5U291bmQodGhpcy5zdGFydDMyMSwgMSk7XHJcbiAgICAgICAgLy/pooTliqDovb1cclxuXHRcdHRoaXMubG9hZFByb2dlc3NBc3NldHMoKVxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcbiAgICBsb2FkUHJvZ2Vzc0Fzc2V0cygpOiB2b2lkIHtcclxuXHRcdExheWEubG9hZGVyLmxvYWQoW1wicmVzL2F0bGFzL2xvYWQuYXRsYXNcIixcImxvYWQvYmcucG5nXCJdLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Qcm9ncmVzc0Fzc2V0c0xvYWRlZCkpXHJcblx0fVxyXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuXHRcdEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuICAgIH1cclxuICAgIC8v6aKE5Yqg6L29XHJcblx0bG9hZE90aGVyQXNzZXRzKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBjb25zdCBhc3NldHM6IEFycmF5PGFueT4gPSBbXVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8NTMyO2krKyl7XHJcblx0XHRcdGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHVybDogdGhhdC5kYXRhLm11c2ljVXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuICAgICAgICAgICAgfSlcclxuXHRcdH1cclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogdGhhdC5kYXRhLm11c2ljVXJsLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IHRoYXQuZGF0YS5leHBsYWluQXVkaW9VcmwsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLlNPVU5EXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUxXzEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUxXzIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUxX2JnLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMV9tMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTFfbTIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUxX20zLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMV9tNCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTJfMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTJfMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTJfYmcsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUyX20xLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMl9tMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTJfbTMsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUyX200LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlM18xLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlM18yLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlM19iZyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTNfbTEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUzX20yLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlM19tMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTNfbTQsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGU0XzEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGU0XzIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGU0X2JnLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlNF9tMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTRfbTIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGU0X20zLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlNF9tNCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuQ291bnREb3duMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQwLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5zb3VuZDEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLlNPVU5EXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQzLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5zb3VuZDQsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLlNPVU5EXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnRlc3QsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLkNvdW50RG93bjEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLkNvdW50RG93bjIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLkNvdW50RG93bjMsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnJlYWR5LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5nbyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5wZXJmZWN0LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmFkLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYnV0dG9uQWdhaW4sXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5idXR0b25OZXh0LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYnV0dG9uU3RhcnQsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5lbmVyZ3ksXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5taXNzLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMub2JzdGFjbGUsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5yZXN0YXJ0LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuc2csXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iYWRidWwsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iYWRncmUsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iYWRyZWQsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iYWR5ZWwsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5nb2J1bCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmdvZ3JlLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuZ29yZWQsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5nb3llbCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLm9rYnVsLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMub2tncmUsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5va3JlZCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLm9reWVsLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuc2hvcGJ1bCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLnNob3BncmUsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5zaG9wcmVkLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuc2hvcHllbCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLnN0YXJPRkYsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5zdGFyT04sXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy50aW1lLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMudG9wQmFuLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL2JhZC9idWwuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9iYWQvZ3JlLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvYmFkL3JlZC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL2JhZC95ZWwuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL2dvL2J1bC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvZ28vZ3JlLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9nby9yZWQuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL2dvL3llbC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvb2svYnVsLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9vay9ncmUuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL29rL3JlZC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvb2sveWVsLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9zaG9wL2J1bC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvc2hvcC9ncmUuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL3Nob3AvcmVkLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9zaG9wL3llbC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMixcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMyxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnNCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnNSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnNixcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnNyxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnOCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnOSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMTAsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzExLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcxMixcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMTMsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzE0LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcxNSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMTYsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzE3LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcxOCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMTksXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzIwLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcyMSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMjIsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzIzLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcyNCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMjUsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzI2LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcyNyxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMjgsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzI5LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmczMCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMzEsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzMyLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmczMyxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMzQsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzM1LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMubG9uZyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMubG9hZCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMubG9hZGJnLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvbG9hZC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL2xvbmcvbG9uZ1NXRi5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMubG9uZ1NXRixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMubG9uZ1NXRjEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvbmdTV0YyLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5sb25nU1dGMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL2VuZC8wLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvZW5kLzEuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9lbmQvMi5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL2VuZC8zLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvZW5kLzAwLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5lbmQwLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5lbmQwMDEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmVuZDAwMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuZW5kMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuZW5kMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuZW5kMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOmihOWKoOi9vei1hOa6kFxyXG5cdFx0TGF5YS5sb2FkZXIubG9hZChhc3NldHMsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkFzc2V0c0xvYWRlZCksIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkFzc2V0c0xvYWRpbmcsIG51bGwsIGZhbHNlKSk7XHJcblx0XHRMYXlhLmxvYWRlci5vbihMYXlhLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLm9uRXJyb3IpXHJcblx0fVxyXG4gICAgLy8g5b+F6ZyA5YWI5Yqg6L296L+b5bqm5p2h6LWE5rqQ5omN6IO95pi+56S66L+b5bqm5p2hXHJcblx0b25Qcm9ncmVzc0Fzc2V0c0xvYWRlZCgpOiB2b2lkIHtcclxuICAgICAgICAvLyDmmL7npLrov5vluqbmnaFcclxuICAgICAgICAvLyDmmL7npLrov5vluqbmnaFcclxuICAgICAgICB0aGlzLmxvYWRpbmdEaWFsb2cgPSBuZXcgTG9hZGluZ0RpYWxvZygpO1xyXG4gICAgICAgIC8vIHRoaXMubG9hZGluZ0RpYWxvZy53aWR0aCA9IDY0MDtcclxuICAgICAgICAvLyB0aGlzLmxvYWRpbmdEaWFsb2cuaGVpZ2h0ID0gNjQwO1xyXG5cdFx0Ly8gdGhpcy5sb2FkaW5nRGlhbG9nLnBvcHVwKHRydWUsIGZhbHNlKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRPdGhlckFzc2V0cygpO1xyXG5cdFx0fSwgNTAwKTtcclxuXHR9XHJcbiAgICBvbkFzc2V0c0xvYWRpbmcocHJvZ3Jlc3M6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMubG9hZGluZ0RpYWxvZy5jaGFuZ2VQcm9ncmVzc1ZhbHVlKHByb2dyZXNzKTtcclxuICAgIH1cclxuICAgIG9uQXNzZXRzTG9hZGVkKCk6IHZvaWQgeyBcclxuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtuYW1lOidmZXRjaFF1ZXN0aW9ucycsZGF0YTp7fX0sJyonKVxyXG4gICAgICAgIHRoaXMuR2FtZU1hbmFnZXIoKVxyXG4gICAgfVxyXG5cdG9uRXJyb3IoZXJyOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5Yqg6L295aSx6LSlOiBcIiArIGVycik7XHJcblx0XHQvLyB0aGlzLmxvYWRpbmdEaWFsb2cudXBkYXRlVGlwKFwi5Yqg6L295aSx6LSlOiBcIiArIGVycilcclxuXHR9XHJcblxyXG5cclxuXHJcblx0R2FtZU1hbmFnZXIoKTogdm9pZCB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIExvYWRpbmdEaWFsb2cuY2xvc2VBbGwoKTtcclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSB3aW5kb3cuaW5uZXJXaWR0aD53aW5kb3cuaW5uZXJIZWlnaHQ/J3Nob3dhbGwnOidleGFjdGZpdCc7XHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0QWxsID0gNjkwO1xyXG4gICAgICAgICAgICBMYXlhLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuYmdNYW5hZ2VyKTtcclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5yZW1vdmVDaGlsZChnYW1lUGFuZWwpO1xyXG4gICAgICAgICAgICBMYXlhLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuYnV0dG9ud2lkdGgpO1xyXG4gICAgICAgICAgICBMYXlhLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMudGlwc01hbmFnZXIpO1xyXG4gICAgICAgICAgICBMYXlhLnN0YWdlLnJlbW92ZUNoaWxkKHRoaXMuZW5kTWFuYWdlcik7XHJcbiAgICAgICAgICAgIHRoaXMubGV0dGVyVG90YWwgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxldHRlck9iakFyciA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJMZXR0ZXIgPSB7bGV0dGVyOicnfTsvL+W9k+WJjeWtl+avjVxyXG4gICAgICAgICAgICBpSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB0aGluZ0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy53b3Jkc0FyciA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkxldHRlckJveEFyciA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmxldHRlclYgPSAzMDAwOy8v5YWo56iL5pe26Ze0XHJcbiAgICAgICAgICAgIHRoaXMuZ291emlMZW5ndGggPSAnJztcclxuICAgICAgICAgICAgdGhpcy5iZyA9IG5ldyBTcHJpdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5iZy53aWR0aCA9IDEzODA7XHJcbiAgICAgICAgICAgIHRoaXMuYmcuaGVpZ2h0ID0gNjQwO1xyXG4gICAgICAgICAgICB0aGlzLmJnLnBpdm90KExheWEuc3RhZ2Uud2lkdGgvMiwwKTtcclxuICAgICAgICAgICAgdGhpcy5iZy54ID0gdGhpcy5oZWlnaHRBbGw7XHJcbiAgICAgICAgICAgIHRoaXMuYmcubG9hZEltYWdlKCdyZXMvaW1ncy8nK3RoaXMudHlwZUxWTCsnL3diZy5wbmcnKTtcclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLmJnKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBnYW1lUGFuZWwgPSBuZXcgU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC53aWR0aCA9IDEwMDg7XHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC5oZWlnaHQgPSA2NDA7XHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC5waXZvdCg1MDQsMCk7XHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC54ID0gTGF5YS5zdGFnZS53aWR0aC8yO1xyXG4gICAgICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKGdhbWVQYW5lbCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudHlwZUxWTCA9PSAndHlwZTEnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmdNYW5hZ2VyID0gbmV3IEJnKCk7XHJcbiAgICAgICAgICAgICAgICBnYW1lUGFuZWwuYWRkQ2hpbGQodGhpcy5iZ01hbmFnZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRoaW5nUm9hZCA9IG5ldyBTcHJpdGUoKTtcclxuICAgICAgICAgICAgdGhpcy50aGluZ1JvYWQud2hpbGUgPSAxMDA4O1xyXG4gICAgICAgICAgICB0aGlzLnRoaW5nUm9hZC5oZWlnaHQgPSA2NDA7XHJcbiAgICAgICAgICAgIHRoaXMudGhpbmdSb2FkLnBpdm90KDUwNCwwKTtcclxuICAgICAgICAgICAgdGhpcy50aGluZ1JvYWQueCA9IDMwMDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgZ2FtZVBhbmVsLmFkZENoaWxkKHRoaXMudGhpbmdSb2FkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ud2lkdGggPSBuZXcgU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ud2lkdGgud2hpbGUgPSAxMDA4O1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbndpZHRoLmhlaWdodCA9IDE1MjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b253aWR0aC5waXZvdCg1MDQsNDg4KTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b253aWR0aC54ID0gNTA0OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbndpZHRoLmxvYWRJbWFnZShcInJlcy9pbWdzL2J1dHRvbldpZHRoLnBuZ1wiKTtcclxuICAgICAgICAgICAgZ2FtZVBhbmVsLmFkZENoaWxkKHRoaXMuYnV0dG9ud2lkdGgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaGlwQ29udGFpbmVyID0gbmV3IFNoaXAodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcENvbnRhaW5lci5oZWlnaHQgPSAxNzg7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcENvbnRhaW5lci53aWR0aCA9IDEwMDg7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcENvbnRhaW5lci55ID0gNjAwXHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC5hZGRDaGlsZCh0aGlzLnNoaXBDb250YWluZXIpOyAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy50aXBzTWFuYWdlciA9IG5ldyBUaXBzKHRoaXMsZ2FtZVBhbmVsKTtcclxuICAgICAgICAgICAgdGhpcy50aXBzTWFuYWdlci53aWR0aCA9IDEwMDg7XHJcbiAgICAgICAgICAgIHRoaXMudGlwc01hbmFnZXIucGl2b3QoNTA0LDApO1xyXG4gICAgICAgICAgICB0aGlzLnRpcHNNYW5hZ2VyLnggPSA1MDQ7XHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC5hZGRDaGlsZCh0aGlzLnRpcHNNYW5hZ2VyKTtcclxuICAgICAgICAgICAgdGhpcy53b3Jkc0FyciA9IEJlYXRzMDtcclxuICAgICAgICAgICAgdGhpcy5nb3V6aUxlbmd0aCA9IHRoaXMud29yZHNBcnIuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGhpbmcgPT0gJzEnO1xyXG4gICAgICAgICAgICB9KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdExldHRlck9iakFycigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRHYW1lKCk7XHJcbiAgICAgICAgfSwgMjAwMCk7ICBcclxuICAgIH1cclxuICAgIC8v6byg5qCH56e75Yqo5LqL5Lu2XHJcblx0Ly8gb25Nb3VzZU1vdmUoKTogdm9pZCB7XHJcblx0Ly8gXHQvLyBjb25zb2xlLmxvZyhcIm9uTW91c2VNb3ZlKFnvvJpcIiwgTGF5YS5zdGFnZS5tb3VzZVksIFwiOyAgeO+8mlwiLCBMYXlhLnN0YWdlLm1vdXNlWCwgJ++8iScpO1xyXG5cdC8vIFx0Ly8gY29uc29sZS5sb2coXCJMYXlhXCIsIExheWEuc3RhZ2UpO1xyXG5cdC8vIH1cclxuICAgIGluaXRMZXR0ZXJPYmpBcnIgKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53b3Jkc0Fyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbGluQXJyID0gW107XHJcbiAgICAgICAgICAgIHZhciBsaW5lID0gdGhpcy53b3Jkc0FycltpXS50aGluZztcclxuICAgICAgICAgICAgdmFyIHRpbWUgPSB0aGlzLndvcmRzQXJyW2ldLnRpbWU7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbGluZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGluQXJyLnB1c2goe2xldHRlcjogbGluZVtqXSwgc3RhdHVzOiAwLCBwb3NpdGlvbjogW2ksIGpdLGlzU2hvdzpmYWxzZSx0aW1lOnRoaXMubGV0dGVyVix0aW1lczp0aW1lLG5leHQ6MH0pO1xyXG4gICAgICAgICAgICAgICAgaWYobGluZVtqXSAhPSAnICcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldHRlclRvdGFsKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sZXR0ZXJPYmpBcnIucHVzaChsaW5BcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0R2FtZSAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50aXBzTWFuYWdlci5vbihcIlN0YXJ0X0dhbWVfRXZlbnRcIiwgdGhpcywgdGhpcy5zdGFydEdhbWUpO1xyXG4gICAgICAgIHRoaXMudGlwc01hbmFnZXIub24oXCJFbmRfR2FtZV9FdmVudFwiLCB0aGlzLCB0aGlzLmVuZEdhbWUpO1xyXG4gICAgfVxyXG4gICAgc3RhcnRHYW1lICgpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtuYW1lOidzdGFydEdhbWUnLGRhdGE6e319LCcqJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wbGF5TXVzaWMoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0V29yZEFycigpO1xyXG4gICAgICAgIGlmKHRoaXMudHlwZUxWTCA9PSAndHlwZTEnKXtcclxuICAgICAgICAgICAgdGhpcy5zaGlwQ29udGFpbmVyLmdvc2hpcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbmRHYW1lICgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZE1hbmFnZXIgPSBuZXcgRW5kKHRoaXMsTG9hZGluZ0RpYWxvZyk7ICBcclxuICAgICAgICB0aGlzLmVuZE1hbmFnZXIud2lkdGggPSAxMzgwO1xyXG4gICAgICAgIHRoaXMuZW5kTWFuYWdlci5oZWlnaHQgPSA2NDA7ICBcclxuICAgICAgICB0aGlzLmVuZE1hbmFnZXIucGl2b3QoNjkwLDApO1xyXG4gICAgICAgIHRoaXMuZW5kTWFuYWdlci5wb3MoTGF5YS5zdGFnZS53aWR0aC8yLDApO1xyXG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe25hbWU6J2ZpbmlzaEdhbWUnLGRhdGE6e319LCcqJyk7XHJcbiAgICBcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5lbmRNYW5hZ2VyKTtcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy50aXBzTWFuYWdlci5nZXRTY29yZSgpO1xyXG4gICAgICAgIHRoaXMuZW5kTWFuYWdlci5zaG93RW5kUGFuZWwob2JqLCB0aGlzLmxldHRlclRvdGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5TXVzaWMgKCk6IHZvaWQge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5hdXRvU3RvcE11c2ljID0gZmFsc2U7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlNdXNpYyh0aGlzLmRhdGEubXVzaWNVcmwsIDEpO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5zZXRTb3VuZFZvbHVtZSgxKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0V29yZEFyciAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb2FkQXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG9uZVJvYWRTcHJpdGUgPSBuZXcgU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIG9uZVJvYWRTcHJpdGUud2lkdGggPSAyMDA7XHJcbiAgICAgICAgICAgIG9uZVJvYWRTcHJpdGUuaGVpZ2h0ID0gNjQwO1xyXG4gICAgICAgICAgICBvbmVSb2FkU3ByaXRlLm5hbWUgPSAncm9hZCcgKyBpO1xyXG4gICAgICAgICAgICB0aGlzLnJvYWRBcnIucHVzaChvbmVSb2FkU3ByaXRlKTtcclxuICAgICAgICAgICAgdGhpcy50aGluZ1JvYWQuYWRkQ2hpbGQob25lUm9hZFNwcml0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGV0dGVyT2JqQXJyLm1hcChkYXRhPT57XHJcbiAgICAgICAgICAgIGxldCB0aGlzUm9hZCA9IDBcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgdGhpc1JvYWQgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpKjQrXCJcIik7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHJvYWRzID09IHRoaXNSb2FkKVxyXG4gICAgICAgICAgICByb2FkcyA9IHRoaXNSb2FkO1xyXG4gICAgICAgICAgICBkYXRhWzBdWydyb2FkJ10gPSByb2Fkc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLm5leHRUaW1lb3V0KCk7XHJcbiAgICB9XHJcbiAgICBuZXh0VGltZW91dCgpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmxldHRlck9iakFycltpSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXJyTGV0dGVyID0gX3RoaXMubGV0dGVyT2JqQXJyW2lJbmRleF1bMF07XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sZXR0ZXJPYmpBcnJbaUluZGV4XVswXS5uZXh0ID0gMjtcclxuICAgICAgICAgICAgICAgIF90aGlzLmxldHRlck9iakFycltpSW5kZXgrMV0/X3RoaXMubGV0dGVyT2JqQXJyW2lJbmRleCsxXVswXS5uZXh0ID0gMTonJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBsYXN0TGluZSA9IF90aGlzLmxldHRlck9iakFycltfdGhpcy5sZXR0ZXJPYmpBcnIubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXJyTGV0dGVyID0gbGFzdExpbmVbbGFzdExpbmUubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhckludGVydmFsKHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlICghX3RoaXMuY3VyckxldHRlciB8fCBfdGhpcy5jdXJyTGV0dGVyLmxldHRlciA9PSBcIiBcIik7XHJcblxyXG4gICAgICAgIHZhciBsZXR0ZXJCb3ggPSBuZXcgVGhpbmcoX3RoaXMsX3RoaXMuY3VyckxldHRlcik7XHJcbiAgICAgICAgbGV0dGVyQm94Lm5hbWUgPSAneCcgKyBfdGhpcy5nZXRSYW5kb21Db2xvcigpO1xyXG4gICAgICAgIHRoaW5nTGlzdC5wdXNoKGxldHRlckJveClcclxuICAgICAgICBfdGhpcy5hcHBlbmRPbmVMZXR0ZXIobGV0dGVyQm94KTtcclxuICAgICAgICBMYXlhLnRpbWVyLmxvb3AoIF90aGlzLmxldHRlck9iakFycltpSW5kZXhdWzBdLnRpbWVzLHRoaXMsdGhpcy5uZXh0VGltZW91dCk7XHJcbiAgICAgICAgaUluZGV4Kys7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBnZXRSYW5kb21Db2xvciAoKTphbnkge1xyXG4gICAgICAgIHJldHVybiAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG5cdC8v6K6+572u6YCf5bqmXHJcbiAgICBhcHBlbmRPbmVMZXR0ZXIgKGxldHRlckJveCkge1xyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyZWVuTGV0dGVyQm94QXJyLnB1c2gobGV0dGVyQm94KTtcclxuICAgICAgICB2YXIgcmFuZG9tSW5kZXggPSBsZXR0ZXJCb3gud29yZE9iai5yb2FkO1xyXG5cdFx0bGV0dGVyQm94Lmd1aWRhbyA9IHJhbmRvbUluZGV4O1xyXG5cdFx0aWYobGV0dGVyQm94LndvcmRPYmouaXNTaG93KXtcclxuICAgICAgICAgICAgbGV0dGVyQm94LnggPSBsZXR0ZXJCb3gud29yZE9iai5zdGFydC54Kyh0aGlzLmhlaWdodEFsbCk7XHJcbiAgICAgICAgICAgIGxldHRlckJveC55ID0gbGV0dGVyQm94LndvcmRPYmouc3RhcnQueTtcclxuICAgICAgICAgICAgbGV0dGVyQm94LnNjYWxlWCA9IGxldHRlckJveC53b3JkT2JqLnN0YXJ0LnNjYWxlWDtcclxuICAgICAgICAgICAgbGV0dGVyQm94LnNjYWxlWSA9IGxldHRlckJveC53b3JkT2JqLnN0YXJ0LnNjYWxlWTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXR0ZXJCb3gueCA9IGZvdXJSb2FkUG9zaXRpb25bcmFuZG9tSW5kZXhdLnN0YXJ0LngrKHRoaXMuaGVpZ2h0QWxsKTtcclxuICAgICAgICAgICAgbGV0dGVyQm94LnkgPSBmb3VyUm9hZFBvc2l0aW9uW3JhbmRvbUluZGV4XS5zdGFydC55O1xyXG4gICAgICAgICAgICBsZXR0ZXJCb3guc2NhbGVYID0gZm91clJvYWRQb3NpdGlvbltyYW5kb21JbmRleF0uc3RhcnQuc2NhbGVYO1xyXG4gICAgICAgICAgICBsZXR0ZXJCb3guc2NhbGVZID0gZm91clJvYWRQb3NpdGlvbltyYW5kb21JbmRleF0uc3RhcnQuc2NhbGVZO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvYWRBcnJbcmFuZG9tSW5kZXhdLmFkZENoaWxkKGxldHRlckJveCk7XHJcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBuZXcgSGFuZGxlcihsZXR0ZXJCb3gsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYoIWlzUGF1c2Upe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoLTEpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy53b3JkT2JqLmxldHRlciAhPSAnMicpe1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRpcHNNYW5hZ2VyLnNob3dQbGF5VGlwKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLnJlbW92ZUxldHRlcih0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgbW92ZVVwZGF0ZUhhbmRsZXIgPSBuZXcgSGFuZGxlcihsZXR0ZXJCb3gsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG9uZVJvYWQgPSBfdGhpcy5yb2FkQXJyW3RoaXMuZ3VpZGFvXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbmVSb2FkLm51bUNoaWxkcmVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBsZXR0ZXIgPSBvbmVSb2FkLmdldENoaWxkQXQoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGV0dGVyIGluc3RhbmNlb2YgVGhpbmcgJiYgbGV0dGVyLmlzT3ZlciA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGxldHRlci55ICE9IDY0MCAmJiAhaXNQYXVzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbGV0dGVyLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbGV0dGVyLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVYOiBsZXR0ZXIuc2NhbGVYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWTogbGV0dGVyLnNjYWxlWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50ID0gbGV0dGVyLnkvNjQwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50ID0gKDEwMCAtIE1hdGguZmxvb3IocGVyY2VudCAqIDEwMCkpIC8gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VGltZShwZXJjZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQZXJjZW50KHBlcmNlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0dGVyQm94Lm1vdmVUd2VlbiA9IFR3ZWVuLnRvKGxldHRlckJveCwge3g6KGZvdXJSb2FkUG9zaXRpb25bcmFuZG9tSW5kZXhdLmVuZC54Kyh0aGlzLmhlaWdodEFsbCkpLHk6NjQwfSwgbGV0dGVyQm94LndvcmRPYmoudGltZSwgRWFzZS5saW5lYXJOb25lLCBoYW5kbGVyKTtcclxuICAgICAgICBsZXR0ZXJCb3gubW92ZVR3ZWVuLnVwZGF0ZSA9IG1vdmVVcGRhdGVIYW5kbGVyO1xyXG4gICAgICAgIGxldHRlckJveC5tb3ZlVHdlZW5VcGRhdGUgPSBtb3ZlVXBkYXRlSGFuZGxlcjsvL+WboOS4uuacgOWQjuS8mue7mWxldHRlcuWBmlR3ZWVuLmNsZWFyQWxsKCk7IOaJgOS7pemcgOimgemihOeVmeWPpeafhOWBmuacgOWQjua4hemZpOi9qOmBk+eXlei/ueWbnuiwg1xyXG5cclxuICAgICAgICBsZXR0ZXJCb3guYWxwaGFUd2VlbiA9IFR3ZWVuLnRvKGxldHRlckJveCwge2FscGhhOiAxfSwgbGV0dGVyQm94LndvcmRPYmoudGltZSAqIDAuMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0dGVyQm94Lm9uKCdVSUxldHRlckJveF9SZW1vdmVfRXZlbnQnLCB0aGlzLCB0aGlzLnJlbW92ZUxldHRlcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbW92ZUxldHRlciA9IGZ1bmN0aW9uIChsZXR0ZXIpIHtcclxuICAgICAgICB2YXIgbGV0dGVyQm94ID0gdGhpcy5zY3JlZW5MZXR0ZXJCb3hBcnIuc3BsaWNlKHRoaXMuc2NyZWVuTGV0dGVyQm94QXJyLmluZGV4T2YobGV0dGVyKSwgMSlbMF07XHJcbiAgICAgICAgLy8gbGV0dGVyQm94LmRlc3Ryb3lNZSgpO1xyXG4gICAgICAgIGxldHRlckJveC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgbGV0dGVyQm94LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGlja0Rvd24gPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB2YXIgbGV0dGVyO1xyXG4gICAgICAgIGxldCBpc0NvbGxpc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zY3JlZW5MZXR0ZXJCb3hBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0dGVyID0gdGhpcy5zY3JlZW5MZXR0ZXJCb3hBcnJbaV07XHJcbiAgICAgICAgICAgIGlmIChsZXR0ZXIuaXNPdmVyID09IGZhbHNlICYmIGxldHRlci5ndWlkYW8gPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsZXR0ZXIueSA8IDQ4MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsZXR0ZXIueSA+PSA0ODAgJiYgbGV0dGVyLnkgPCA2MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihsZXR0ZXIud29yZE9iai5sZXR0ZXIgPT0gJzInKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbktleURvd25MZXR0ZXIobGV0dGVyLCB0cnVlLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbktleURvd25MZXR0ZXIobGV0dGVyLCB0cnVlLCAyMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duTGV0dGVyID0gZnVuY3Rpb24gKGxldHRlciwgaXNQaXBlaSwgc2NvcmUpIHtcclxuICAgICAgICBpZiAoaXNQaXBlaSkge1xyXG4gICAgICAgICAgICBpZihzY29yZSA9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnR5cGVMVkwgPT0gJ3R5cGUxJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwQ29udGFpbmVyLmJhbmRzaGlwKGxldHRlci5ndWlkYW8pO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnR5cGVMVkwgPT0gJ3R5cGUxJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwQ29udGFpbmVyLm9rc2hpcChsZXR0ZXIuZ3VpZGFvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRpcHNNYW5hZ2VyLnNob3dQbGF5VGlwKHNjb3JlKTtcclxuICAgICAgICAgICAgbGV0dGVyLnBpcGVpKHNjb3JlKTtcclxuICAgICAgICAgICAgbGV0dGVyLm1vdmVUd2VlblVwZGF0ZS5ydW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZihsZXR0ZXIud29yZE9iai5sZXR0ZXIgIT0gJzInKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwc01hbmFnZXIuc2hvd1BsYXlUaXAoMCk7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXIuYnVwaXBlaSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcG9zdChldmVudCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gZXZlbnQuZGF0YTtcclxuICAgICAgICBpZihkYXRhLmRhdGEhPXVuZGVmaW5lZCAmJiBkYXRhLmRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICBkYXRhID0gZXZlbnQuZGF0YTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGF0YSA9IHsgXCJuYW1lXCI6IFwiY2FzdFF1ZXN0aW9uc1wiLCBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uSWQ6IDIxMDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIui3n+maj+iKguWlj1wiLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgZXhwbGFpbkF1ZGlvVXJsOiBcImh0dHBzOi8vbXVzZXMtb25saW5lLmZiY29udGVudC5jbi9tdXNlcy1sZXNzb24vbXVzaWMvYXVkaW8vJUU2JUI4JUI4JUU2JTg4JThGJUU5JTlGJUIzJUU5JUEyJTkxLyVFOCU4QSVCMSVFNiVBMCU5NyVFOSVCQyVBMCVFNiVCOCVCOCVFNiU4OCU4RiVFOSU5RiVCMyVFOSVBMiU5MS8lRTglOEElQjElRTYlQTAlOTclRTklQkMlQTAlRTYlQjglQjglRTYlODglOEYyJUU4JUE3JUEzJUU4JUFGJUI0Lm1wM1wiLFxyXG4gICAgICAgICAgICAgIG11c2ljVXJsOiBcImh0dHBzOi8vbXVzZXMtb25saW5lLmZiY29udGVudC5jbi9tdXNlcy1sZXNzb24vbXVzaWMvYXVkaW8vJUU2JUI4JUI4JUU2JTg4JThGJUU5JTlGJUIzJUU5JUEyJTkxLyVFOCU4QSVCMSVFNiVBMCU5NyVFOSVCQyVBMCVFNiVCOCVCOCVFNiU4OCU4RiVFOSU5RiVCMyVFOSVBMiU5MS8lRTglOEElQjElRTYlQTAlOTclRTklQkMlQTAlRTUlODglOUQlRTclQkElQTclRTklOUYlQjMlRTklQTIlOTEubXAzXCIsXHJcbiAgICAgICAgICAgICAgbXVzaWNEdXJhdGlvbjogNTMyOTMwLFxyXG4gICAgICAgICAgICAgIHNraW5UeXBlOiAxLFxyXG4gICAgICAgICAgICAgIG9iamVjdHM6IFtcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA2NTAwLCBlbmRUaW1lOiA3NTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA3NTAwLCBlbmRUaW1lOiA4NTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA4NjAwLCBlbmRUaW1lOiA5NjAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA5NjAwLCBlbmRUaW1lOiAxMDYwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMTA3MDAsIGVuZFRpbWU6IDExNzAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAxMTgwMCwgZW5kVGltZTogMTI4MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDEyOTAwLCBlbmRUaW1lOiAxMzkwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMTQwMDAsIGVuZFRpbWU6IDE1MDAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAxNTEwMCwgZW5kVGltZTogMTYxMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDE2MjAwLCBlbmRUaW1lOiAxNzIwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMTcyMDAsIGVuZFRpbWU6IDE4MjAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAxODMwMCwgZW5kVGltZTogMTkzMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDE5NDAwLCBlbmRUaW1lOiAyMDQwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMjA0MDAsIGVuZFRpbWU6IDIxNDAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAyMTUwMCwgZW5kVGltZTogMjI1MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDIyNTAwLCBlbmRUaW1lOiAyMzUwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMjM2MDAsIGVuZFRpbWU6IDI0NjAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAyNDcwMCwgZW5kVGltZTogMjU3MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDI1NzAwLCBlbmRUaW1lOiAyNjcwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMjY4MDAsIGVuZFRpbWU6IDI3ODAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAyNzgwMCwgZW5kVGltZTogMjg4MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDI4ODAwLCBlbmRUaW1lOiAyOTgwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMjk5MDAsIGVuZFRpbWU6IDMwOTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAzMTAwMCwgZW5kVGltZTogMzIwMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDMyMTAwLCBlbmRUaW1lOiAzMzEwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMzMxMDAsIGVuZFRpbWU6IDM0MTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAzNDIwMCwgZW5kVGltZTogMzUyMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDM1MzAwLCBlbmRUaW1lOiAzNjMwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMzY0MDAsIGVuZFRpbWU6IDM3NDAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAzNzUwMCwgZW5kVGltZTogMzg1MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDM4NjAwLCBlbmRUaW1lOiAzOTYwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMzk2MDAsIGVuZFRpbWU6IDQwNjAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA0MDgwMCwgZW5kVGltZTogNDE4MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDQxODAwLCBlbmRUaW1lOiA0MjgwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogNDI5MDAsIGVuZFRpbWU6IDQzOTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA0NDAwMCwgZW5kVGltZTogNDUwMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDQ1MTAwLCBlbmRUaW1lOiA0NjEwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogNDYxMDAsIGVuZFRpbWU6IDQ3MTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA0NzEwMCwgZW5kVGltZTogNDgxMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDEzMjAwLCBlbmRUaW1lOiAxNDIwMCwgb2JzdGFjbGU6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAyNDAwMCwgZW5kVGltZTogMjUwMDAsIG9ic3RhY2xlOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMzAwMDAsIGVuZFRpbWU6IDMxMDAwLCBvYnN0YWNsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDM4OTAwLCBlbmRUaW1lOiAzOTkwMCwgb2JzdGFjbGU6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA0MzAwMCwgZW5kVGltZTogNDQwMDAsIG9ic3RhY2xlOiB0cnVlIH1cclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIHR5cGU6IDEwNzEwMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0eXBlOiAxMDcxMDJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHlwZUxWTCA9ICd0eXBlJytkYXRhLmRhdGFbMF0ucGF5bG9hZC5za2luVHlwZTtcclxuICAgICAgICBsZXQgY2hhbmdlLGRhdGFzID0gZGF0YS5kYXRhWzBdLnBheWxvYWQub2JqZWN0cztcclxuICAgICAgICBmb3IobGV0IGk9ZGF0YXMubGVuZ3RoLTE7aT49MDtpLS0pe1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPGk7aisrKXtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGFzW2orMV0uc3RhcnRUaW1lPGRhdGFzW2pdLnN0YXJ0VGltZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlPWRhdGFzW2orMV07XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNbaisxXT1kYXRhc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhc1tqXT1jaGFuZ2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgX3RoaXMuZGF0YSA9IGRhdGEuZGF0YVswXS5wYXlsb2FkO1xyXG4gICAgICAgIGxldCBsaXN0ID0gZGF0YXM7XHJcbiAgICAgICAgdGhpcy5sZXR0ZXJWID0gbGlzdFswXS5lbmRUaW1lIC0gbGlzdFswXS5zdGFydFRpbWU7XHJcbiAgICAgICAgbGV0IEJlYXRzID0gW3sgdGltZTogbGlzdFswXS5zdGFydFRpbWUsIHRoaW5nOiBsaXN0WzBdLm9ic3RhY2xlPycyJzonMScgfV07XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDtpIDwgbGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYobGlzdFtpKzFdKXtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lID0gbGlzdFtpKzFdLnN0YXJ0VGltZSAtIGxpc3RbaV0uc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgQmVhdHMucHVzaCh7IHRpbWU6IHRpbWUsIHRoaW5nOiBsaXN0W2krMV0ub2JzdGFjbGU/JzInOicxJyB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEJlYXRzMCA9IEJlYXRzO1xyXG4gICAgfVxyXG59XHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7XHJcbiIsInZhciBiZ3ggPSAwO1xuZXhwb3J0IGNvbnN0IGZvdXJSb2FkUG9zaXRpb24gPSBbXG4gICAge1xuICAgICAgICBzdGFydDoge1xuICAgICAgICAgICAgeDogLTE1MCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBzY2FsZVg6IDIsXG4gICAgICAgICAgICBzY2FsZVk6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIGVuZDoge1xuICAgICAgICAgICAgeDogLTMyMCxcbiAgICAgICAgICAgIHk6IDY0MCxcbiAgICAgICAgICAgIHNjYWxlWDogMixcbiAgICAgICAgICAgIHNjYWxlWTogMixcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHg6IC01MCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBzY2FsZVg6IDIsXG4gICAgICAgICAgICBzY2FsZVk6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIGVuZDoge1xuICAgICAgICAgICAgeDogLTExMCxcbiAgICAgICAgICAgIHk6IDY0MCxcbiAgICAgICAgICAgIHNjYWxlWDogMixcbiAgICAgICAgICAgIHNjYWxlWTogMixcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHg6IDUwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHNjYWxlWDogMixcbiAgICAgICAgICAgIHNjYWxlWTogMixcbiAgICAgICAgfSxcbiAgICAgICAgZW5kOiB7XG4gICAgICAgICAgICB4OiA5MCxcbiAgICAgICAgICAgIHk6IDY0MCxcbiAgICAgICAgICAgIHNjYWxlWDogMixcbiAgICAgICAgICAgIHNjYWxlWTogMixcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHg6IDE1MCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBzY2FsZVg6IDIsXG4gICAgICAgICAgICBzY2FsZVk6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIGVuZDoge1xuICAgICAgICAgICAgeDogMzAwLFxuICAgICAgICAgICAgeTogNjQwLFxuICAgICAgICAgICAgc2NhbGVYOiAyLFxuICAgICAgICAgICAgc2NhbGVZOiAyXG4gICAgICAgIH1cbiAgICB9XG5dO1xuZXhwb3J0IGNvbnN0IEJlYXRzMCA9IFtcbiAgICB7IHRpbWU6IDIxNTYsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjEzMywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMjQ2LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxMjcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjA5OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTcxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxMTgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjA4NywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTgwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIwMzksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjExNSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTU4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxNzMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjE3NCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTcxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxNDUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjIwNiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTI1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxMjQsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjEzOCwgdGhpbmc6IFwiMVwiIH0sXG5dXG5leHBvcnQgY29uc3QgQmVhdHMxID0gW1xuICAgIHsgdGltZTogMTE4OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA5NDgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTExNywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDYxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMDksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTEwMSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDQyLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNzYsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA2MSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMTAzLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwMzUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA5OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDI0LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNjEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA0MCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDU5LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwOTAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA3NCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDYxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNDAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogOTkxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExNDcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTAyNSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDc3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwMTMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTIwMCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDk0LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNzgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA3NywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDM4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMTksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTAzNSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMTg1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMDksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTAwMywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDI1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNjUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTEzOSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA5OTgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTEyMiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDU2LCB0aGluZzogXCIxXCIgfSxcbl1cbmV4cG9ydCBjb25zdCBCZWF0czIgPSBbXG4gICAgeyB0aW1lOiAxMDk1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMDIsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTEzMCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDE0LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMTksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA4MCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDU4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNjgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMzYyLCB0aGluZzogXCIyXCIgfSxcbiAgICB7IHRpbWU6IDI2MiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTIwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU1NywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NDMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTE3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUyNCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTQwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUzMCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MDIsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTM0LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUyMiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NTcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTYzLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUzNCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MzEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMzYyLCB0aGluZzogXCIyXCIgfSxcbiAgICB7IHRpbWU6IDIzMiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTkyLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUxNiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA0NjYsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTMyLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDQ5MSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTAwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUyNSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MTAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTc2LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU0OCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTQ1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU2OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA0OTMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTc3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUxOCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA2MDQsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNDg1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU3OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MTUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMzYyLCB0aGluZzogXCIyXCIgfSxcbiAgICB7IHRpbWU6IDI1MCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MzcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTQ3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDQ4MCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA2MDEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTIxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU4NCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNDk5LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU2OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NTEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTY2LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU1NywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMzYyLCB0aGluZzogXCIyXCIgfSxcbiAgICB7IHRpbWU6IDE4MSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NjEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNDk4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUyOSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NzEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNDk1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU1OCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NTcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMzYyLCB0aGluZzogXCIyXCIgfSxcbiAgICB7IHRpbWU6IDI0NiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA0NzMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTIyLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUzNCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NzIsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTQxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU4MCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA0OTAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTU1LCB0aGluZzogXCIxXCIgfVxuXSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGJnIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdEJnKClcbiAgICB9XG4gICAgXG4gICAgaW5pdEJnKCk6dm9pZCB7XG4gICAgICAgIFxuICAgICAgICB2YXIgYmdDb250YWluZXIgPSBuZXcgTGF5YS5BbmltYXRpb24oKTtcbiAgICAgICAgYmdDb250YWluZXIubG9hZEFuaW1hdGlvbihcImFuaS9iZy5hbmlcIik7XG4gICAgICAgIGJnQ29udGFpbmVyLndpZHRoID0gMTAwODtcbiAgICAgICAgYmdDb250YWluZXIuaGVpZ2h0ID0gNjQwO1xuICAgICAgICBiZ0NvbnRhaW5lci5waXZvdCgwLDApXG4gICAgICAgIGJnQ29udGFpbmVyLnBvcyg1MDQsTGF5YS5zdGFnZS5oZWlnaHQvMik7XG4gICAgICAgIGJnQ29udGFpbmVyLnBsYXkoMSx0cnVlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChiZ0NvbnRhaW5lcik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB9LCA1MCk7XG4gICAgfVxufSIsImltcG9ydCBFdmVudCA9IExheWEuRXZlbnQ7XG5pbXBvcnQgU3ByaXRlID0gTGF5YS5TcHJpdGU7XG5pbXBvcnQgQW5pbWF0aW9uID0gTGF5YS5BbmltYXRpb247XG5pbXBvcnQgVGV4dCA9IExheWEuVGV4dDtcbmltcG9ydCBUd2VlbiA9IExheWEuVHdlZW47XG5cbi8vIGltcG9ydCBodHRwIGZyb20gXCIuL2h0dHBcIjtcbnZhciBsZXZlbCA9ICcwJztcbnZhciB0aGF0LExvYWRpbmdEaWFsb2c7XG52YXIgY2VudGVycyxlbmRzaG93O1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZW5kIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIHByaXZhdGUgZW5kQ29udGFpbmVyO1xuICAgIHByaXZhdGUgaW1nQ29udGFpbmVyO1xuICAgIHByaXZhdGUgZW5kc2hvd1xuICAgIHByaXZhdGUgYnV0dG9uQWdhaW47XG4gICAgcHJpdmF0ZSBidXR0b25OZXh0O1xuXG4gICAgY29uc3RydWN0b3IodGhhdHMsTG9hZGluZ0RpYWxvZyl7XG4gICAgICAgIHRoYXQgPSB0aGF0cztcbiAgICAgICAgTG9hZGluZ0RpYWxvZyA9IExvYWRpbmdEaWFsb2c7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxldmVsID0gdGhhdC50eXBlTFZMO1xuICAgICAgICAvLyBsZXZlbCA9IGxheWEubmV0LkxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0eXBlTFZMJyl8fCd0eXBlMSc7XG4gICAgICAgIHRoaXMuaW5pdEVuZCgpO1xuICAgIH1cblxuICAgIGluaXRFbmQgKCkge1xuICAgICAgICB0aGlzLmVuZENvbnRhaW5lciA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKFwic291bmQvZW5kLm1wM1wiLCAxKTtcbiAgICAgICAgdmFyIGJnQ29uID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICBiZ0Nvbi5ncmFwaGljcy5kcmF3UmVjdCgwLCAwLCAxMzgwLCA2NDAsICcjMDAwJyk7XG4gICAgICAgIGJnQ29uLmFscGhhID0gMC44O1xuICAgICAgICB0aGlzLmVuZENvbnRhaW5lci5hZGRDaGlsZChiZ0Nvbik7XG4gICAgICAgIGNlbnRlcnMgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIGNlbnRlcnMud2lkdGggPSAxMDA4O1xuICAgICAgICBjZW50ZXJzLmhlaWdodCA9IDY0MDtcbiAgICAgICAgY2VudGVycy5waXZvdCg1MDQsMCk7XG4gICAgICAgIGNlbnRlcnMucG9zKDUwNCwwKTtcbiAgICAgICAgdGhpcy5lbmRDb250YWluZXIuYWRkQ2hpbGQoY2VudGVycyk7XG4gICAgICAgIC8vIHRoaXMuaW1nQ29udGFpbmVyID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICAvLyB0aGlzLmltZ0NvbnRhaW5lci5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9zZy5wbmdcIik7XG4gICAgICAgIC8vIHRoaXMuaW1nQ29udGFpbmVyLndpZHRoID0gOTUzO1xuICAgICAgICAvLyB0aGlzLmltZ0NvbnRhaW5lci5oZWlnaHQgPSA1NTA7XG4gICAgICAgIC8vIHRoaXMuaW1nQ29udGFpbmVyLnBpdm90KDQ3Ni41LDUwKTtcbiAgICAgICAgLy8gdGhpcy5pbWdDb250YWluZXIucG9zKDUwNCwyMCk7XG4gICAgICAgIC8vIGNlbnRlcnMuYWRkQ2hpbGQodGhpcy5pbWdDb250YWluZXIpO1xuXG4gICAgICAgIC8vIHZhciBlbmQgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIC8vIGVuZC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9lbmQucG5nXCIpO1xuICAgICAgICAvLyBlbmQud2lkdGggPSA0MzM7XG4gICAgICAgIC8vIGVuZC5oZWlnaHQgPSAxMjA7XG4gICAgICAgIC8vIGVuZC5waXZvdCgyMTYuNSwwKTtcbiAgICAgICAgLy8gZW5kLnBvcyg1MDQsMzAwKTtcbiAgICAgICAgLy8gY2VudGVycy5hZGRDaGlsZChlbmQpO1xuICAgICAgICAvLyBlbmRUeHQgPSBuZXcgVGV4dCgpO1xuICAgICAgICAvLyBlbmRUeHQuZm9udFNpemUgPSA0MDtcbiAgICAgICAgLy8gZW5kVHh0LndpZHRoID0gNDMzO1xuICAgICAgICAvLyBlbmRUeHQueSA9IDMwO1xuICAgICAgICAvLyBlbmRUeHQuYWxpZ24gPSBcImNlbnRlclwiXG4gICAgICAgIC8vIGVuZFR4dC5jb2xvciA9ICcjRkZGRkZGJztcbiAgICAgICAgLy8gZW5kVHh0LmJvbGQgPSB0cnVlO1xuICAgICAgICAvLyBlbmRUeHQudGV4dCA9ICfnu6fnu63liqrlipshJ1xuICAgICAgICAvLyBlbmQuYWRkQ2hpbGQoZW5kVHh0KTtcblxuICAgICAgICB0aGlzLmVuZENvbnRhaW5lci52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5lbmRDb250YWluZXIpO1xuICAgIH1cblxuICAgIHNob3dFbmRQYW5lbCAoc2NvcmVPYmosIGxldHRlclRvdGFsKSB7XG4gICAgICAgIC8v5o6l5Y+jXG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgc2NvcmUgOiBzY29yZU9iai50b3RhbFNjb3JlXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgbmFtZTonZmluaXNoR2FtZScsXG4gICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICBzY29yZTpzY29yZU9iai50b3RhbFNjb3JlLCAvLyDlvpfliIZcbiAgICAgICAgICAgICAgICBwZXJmZWN0OnNjb3JlT2JqLnBlcmZlY3QsIC8vIHBlcmZlY3Qg5Liq5pWwXG4gICAgICAgICAgICAgICAgLy8gZ3JlYXQ6c2NvcmVPYmouZ3JlYXQsIC8vIGdyZWF0IOS4quaVsFxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0OnNjb3JlT2JqLnJpZ2h0LCAvLyByaWdodCDkuKrmlbBcbiAgICAgICAgICAgICAgICBtaXNzOnNjb3JlT2JqLm1pc3MsIC8vIG1pc3Mg5Liq5pWwXG4gICAgICAgICAgICAgICAgYmFkOnNjb3JlT2JqLmJhZCwgLy8gYmFkIOS4quaVsFxuICAgICAgICAgICAgICAgIG9ic3RhY2xlOnNjb3JlT2JqLm9ic3RhY2xlLCAvLyDngrnlh7vpmpznoo3niankuKrmlbBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uob2JqLCcqJyk7XG4gICAgICAgIC8vIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkob2JqKSwnKicpO1xuICAgICAgICAvLyB2YXIgaHR0cCA9IG5ldyBodHRwO1xuICAgICAgICAvLyBodHRwLnBvc3QoJ3VzZXJJbmZvJyxkYXRhKTsgICAgXG4gICAgICAgIHZhciBzdGFydCA9IHNjb3JlT2JqLnRvdGFsU2NvcmUgPiAzMD9zY29yZU9iai50b3RhbFNjb3JlID4gNjU/c2NvcmVPYmoudG90YWxTY29yZSA+IDk1P1wiYW5pL2VuZDMuYW5pXCI6XCJhbmkvZW5kMi5hbmlcIjpcImFuaS9lbmQxLmFuaVwiOlwiYW5pL2VuZDAuYW5pXCI7XG4gICAgICAgIHRoaXMuZW5kc2hvdyA9IG5ldyBBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5lbmRzaG93LndpZHRoID0gMTAwODtcbiAgICAgICAgdGhpcy5lbmRzaG93LmhlaWdodCA9IDY0MDtcbiAgICAgICAgdGhpcy5lbmRzaG93LnBpdm90KDUwNCwgMCk7IFxuICAgICAgICB0aGlzLmVuZHNob3cucG9zKDgwMCwgMCk7XG4gICAgICAgIHRoaXMuZW5kc2hvdy5wbGF5KDAsIGZhbHNlKTsgIFxuICAgICAgICB0aGlzLmVuZHNob3cubG9hZEFuaW1hdGlvbihzdGFydCk7XG4gICAgICAgIGNlbnRlcnMuYWRkQ2hpbGQodGhpcy5lbmRzaG93KTtcbiAgICAgICAgLy8gdmFyIHN0YXIxID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICAvLyBzY29yZU9iai50b3RhbFNjb3JlID4gMzA/c3RhcjEubG9hZEltYWdlKFwicmVzL2ltZ3Mvc3Rhck9OLnBuZ1wiKTpzdGFyMS5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9zdGFyT0ZGLnBuZ1wiKTtcbiAgICAgICAgLy8gc3RhcjEud2lkdGggPSAxMjA7XG4gICAgICAgIC8vIHN0YXIxLmhlaWdodCA9IDExODtcbiAgICAgICAgLy8gc3RhcjEucGl2b3QoNjAsMCk7XG4gICAgICAgIC8vIHN0YXIxLnBvcyg1MDQtMjAwLDEzMCk7XG4gICAgICAgIC8vIGNlbnRlcnMuYWRkQ2hpbGQoc3RhcjEpO1xuXG4gICAgICAgIC8vIHZhciBzdGFyMiA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgLy8gc2NvcmVPYmoudG90YWxTY29yZSA+IDY1P3N0YXIyLmxvYWRJbWFnZShcInJlcy9pbWdzL3N0YXJPTi5wbmdcIik6c3RhcjIubG9hZEltYWdlKFwicmVzL2ltZ3Mvc3Rhck9GRi5wbmdcIik7ICAgICAgICBcbiAgICAgICAgLy8gc3RhcjIud2lkdGggPSAxMjA7XG4gICAgICAgIC8vIHN0YXIyLmhlaWdodCA9IDExODtcbiAgICAgICAgLy8gc3RhcjIucGl2b3QoNjAsMCk7XG4gICAgICAgIC8vIHN0YXIyLnBvcyg1MDQsODApO1xuICAgICAgICAvLyBjZW50ZXJzLmFkZENoaWxkKHN0YXIyKTtcblxuICAgICAgICAvLyB2YXIgc3RhcjMgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIC8vIHNjb3JlT2JqLnRvdGFsU2NvcmUgPiA5NT9zdGFyMy5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9zdGFyT04ucG5nXCIpOnN0YXIzLmxvYWRJbWFnZShcInJlcy9pbWdzL3N0YXJPRkYucG5nXCIpOyAgICAgICAgXG4gICAgICAgIC8vIHN0YXIzLndpZHRoID0gMTIwO1xuICAgICAgICAvLyBzdGFyMy5oZWlnaHQgPSAxMTg7XG4gICAgICAgIC8vIHN0YXIzLnBpdm90KDYwLDApO1xuICAgICAgICAvLyBzdGFyMy5wb3MoNTA0KzIwMCwxMzApO1xuICAgICAgICAvLyBjZW50ZXJzLmFkZENoaWxkKHN0YXIzKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbkFnYWluID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLmJ1dHRvbkFnYWluLmxvYWRJbWFnZShcInJlcy9pbWdzL2J1dHRvbkFnYWluLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi53aWR0aCA9IDI0MDtcbiAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi5oZWlnaHQgPSA5MDtcbiAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi5waXZvdCgxMjAsMCk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWdhaW4ucG9zKDY5MC0xNzAsNDYwKTtcbiAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi5zY2FsZVggPSAwO1xuICAgICAgICB0aGlzLmJ1dHRvbkFnYWluLm1vdXNlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuYnV0dG9uQWdhaW4ub24oRXZlbnQuTU9VU0VfT1ZFUiwgdGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgdGhpcy5idXR0b25BZ2Fpbi5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gdGhpcy5idXR0b25BZ2Fpbi5vbihFdmVudC5NT1VTRV9PVVQsIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYnV0dG9uQWdhaW4uZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWdhaW4ub24oRXZlbnQuQ0xJQ0ssIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe25hbWU6J2VuZFJlc3RhcnRHYW1lJyxkYXRhOnt9fSwnKicpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi5vZmYoRXZlbnQuQ0xJQ0ssIHRoaXMsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbk5leHQub2ZmKEV2ZW50LkNMSUNLLCB0aGlzLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGF0KTtcbiAgICAgICAgICAgIHRoYXQuR2FtZU1hbmFnZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNlbnRlcnMuYWRkQ2hpbGQodGhpcy5idXR0b25BZ2Fpbik7XG4gICAgICAgIC8vIHZhciBhZ2FpblR4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgIC8vIGFnYWluVHh0LmZvbnRTaXplID0gMjg7XG4gICAgICAgIC8vIGFnYWluVHh0LndpZHRoID0gMjQwO1xuICAgICAgICAvLyBhZ2FpblR4dC54ID0gLTE1O1xuICAgICAgICAvLyBhZ2FpblR4dC55ID0gMzA7XG4gICAgICAgIC8vIGFnYWluVHh0LmFsaWduID0gXCJjZW50ZXJcIlxuICAgICAgICAvLyBhZ2FpblR4dC5mb250ID0gJ0NoYXJjb2FsIENZJztcbiAgICAgICAgLy8gYWdhaW5UeHQuY29sb3IgPSAnIzAwMDAwMCc7XG4gICAgICAgIC8vIGFnYWluVHh0LmJvbGQgPSB0cnVlO1xuICAgICAgICAvLyBhZ2FpblR4dC50ZXh0ID0gJ+WGjeWtpuS4gOasoSdcbiAgICAgICAgLy8gdGhpcy5idXR0b25BZ2Fpbi5hZGRDaGlsZChhZ2FpblR4dCk7XG4gICAgICAgIFR3ZWVuLnRvKHRoaXMuYnV0dG9uQWdhaW4sIHtzY2FsZVg6IDF9LCAyMDApO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0LmxvYWRJbWFnZShcInJlcy9pbWdzL2J1dHRvbk5leHQucG5nXCIpO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQud2lkdGggPSAyNDA7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dC5oZWlnaHQgPSA5MDtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0LnBpdm90KDEyMCwwKTtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0LnBvcyg2OTArMTcwLDQ2MCk7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dC5zY2FsZVggPSAwO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQubW91c2VFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5idXR0b25OZXh0Lm9uKEV2ZW50Lk1PVVNFX09WRVIsIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYnV0dG9uTmV4dC5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gdGhpcy5idXR0b25OZXh0Lm9uKEV2ZW50Lk1PVVNFX09VVCwgdGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgdGhpcy5idXR0b25OZXh0LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQub24oRXZlbnQuQ0xJQ0ssIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe25hbWU6J25leHRDaGFwdGVyJyxkYXRhOnt9fSwnKicpO1xuICAgICAgICAgICAgLy8gaWYobGV2ZWwgPT0gJ3R5cGUxJyl7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGF5YS5uZXQuTG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGVMVkwnLCd0eXBlMicpXG4gICAgICAgICAgICAvLyAgICAgdGhhdC50eXBlTFZMID0gJ3R5cGUyJ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYobGV2ZWwgPT0gJ3R5cGUyJyl7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGF5YS5uZXQuTG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGVMVkwnLCd0eXBlMycpXG4gICAgICAgICAgICAvLyAgICAgdGhhdC50eXBlTFZMID0gJ3R5cGUzJ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYobGV2ZWwgPT0gJ3R5cGUzJyl7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGF5YS5uZXQuTG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGVMVkwnLCd0eXBlNCcpXG4gICAgICAgICAgICAvLyAgICAgdGhhdC50eXBlTFZMID0gJ3R5cGU0J1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYobGV2ZWwgPT0gJ3R5cGU0Jyl7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGF5YS5uZXQuTG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGVMVkwnLCd0eXBlMScpXG4gICAgICAgICAgICAvLyAgICAgdGhhdC50eXBlTFZMID0gJ3R5cGUxJ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSAnc2hvd2FsbCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoYXQubG9hZGluZ0RpYWxvZy5wb3B1cCh0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmFscGhhID0gMDtcbiAgICAgICAgICAgIHRoYXQuR2FtZU1hbmFnZXIoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQWdhaW4ub2ZmKEV2ZW50LkNMSUNLLCB0aGlzLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25OZXh0Lm9mZihFdmVudC5DTElDSywgdGhpcywgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNlbnRlcnMuYWRkQ2hpbGQodGhpcy5idXR0b25OZXh0KTtcbiAgICAgICAgLy8gdmFyIG5leHRUeHQgPSBuZXcgVGV4dCgpO1xuICAgICAgICAvLyBuZXh0VHh0LmZvbnRTaXplID0gMjg7XG4gICAgICAgIC8vIG5leHRUeHQueCA9IC0xNTtcbiAgICAgICAgLy8gbmV4dFR4dC55ID0gMzA7XG4gICAgICAgIC8vIG5leHRUeHQud2lkdGggPSAyNDA7XG4gICAgICAgIC8vIG5leHRUeHQuYWxpZ24gPSBcImNlbnRlclwiXG4gICAgICAgIC8vIG5leHRUeHQuZm9udCA9ICdDaGFyY29hbCBDWSc7XG4gICAgICAgIC8vIG5leHRUeHQuY29sb3IgPSAnIzAwMDAwMCc7XG4gICAgICAgIC8vIG5leHRUeHQuYm9sZCA9IHRydWU7XG4gICAgICAgIC8vIG5leHRUeHQudGV4dCA9ICfkuIvkuIDnq6DoioInXG4gICAgICAgIC8vIHRoaXMuYnV0dG9uTmV4dC5hZGRDaGlsZChuZXh0VHh0KTtcbiAgICAgICAgVHdlZW4udG8odGhpcy5idXR0b25OZXh0LCB7c2NhbGVYOiAxfSwgMjAwKTtcbiAgICAgICAgdGhpcy5lbmRDb250YWluZXIudmlzaWJsZSA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCBBbmltYXRpb24gPSBMYXlhLkFuaW1hdGlvbjtcbmltcG9ydCBTcHJpdGUgPSBMYXlhLlNwcml0ZTtcbmltcG9ydCBFdmVudCA9IExheWEuRXZlbnQ7XG5sZXQgc2hpcFcgPSAyMDAsdGhhdCxwYWRkaW5nID0gMDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNoaXAgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgcHJpdmF0ZSBzaGlwQmc7XG4gICAgLy8gcHJpdmF0ZSBzaGlwID0gW25ldyBBbmltYXRpb24oKSxuZXcgQW5pbWF0aW9uKCksbmV3IEFuaW1hdGlvbigpLG5ldyBBbmltYXRpb24oKV07XG4gICAgcHJpdmF0ZSBzaGlwID0gW107XG4gICAgcHJpdmF0ZSBzaGlwMTtcbiAgICBwcml2YXRlIHNoaXAyO1xuICAgIHByaXZhdGUgc2hpcDM7XG4gICAgcHJpdmF0ZSBzaGlwNDtcblxuXG4gICAgY29uc3RydWN0b3IodGhhdHMpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGF0ID0gdGhhdHNcbiAgICAgICAgdGhpcy5zaGlwID0gXG4gICAgICAgICAgICB0aGF0LnR5cGVMVkwgPT0gJ3R5cGUxJz9cbiAgICAgICAgICAgIFtuZXcgQW5pbWF0aW9uKCksbmV3IEFuaW1hdGlvbigpLG5ldyBBbmltYXRpb24oKSxuZXcgQW5pbWF0aW9uKCldOlxuICAgICAgICAgICAgW25ldyBTcHJpdGUoKSxuZXcgU3ByaXRlKCksbmV3IFNwcml0ZSgpLG5ldyBTcHJpdGUoKV07XG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgcGFkZGluZyA9IDUwNDtcbiAgICAgICAgdGhpcy5zaGlwMSA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zaGlwMiA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zaGlwMyA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zaGlwNCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zaGlwMS5zaXplKDIwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5zaGlwMi5zaXplKDIwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5zaGlwMy5zaXplKDIwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5zaGlwNC5zaXplKDIwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5zaGlwMS5waXZvdCgxMDAsIDEwMCk7XG4gICAgICAgIHRoaXMuc2hpcDIucGl2b3QoMTAwLCAxMDApO1xuICAgICAgICB0aGlzLnNoaXAzLnBpdm90KDEwMCwgMTAwKTtcbiAgICAgICAgdGhpcy5zaGlwNC5waXZvdCgxMDAsIDEwMCk7XG4gICAgICAgIC8vIHRoaXMuc2hpcDEuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMjAwLCAyMDAsICcjZmZmJyk7XG4gICAgICAgIC8vIHRoaXMuc2hpcDIuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMjAwLCAyMDAsICcjMDAwJyk7XG4gICAgICAgIC8vIHRoaXMuc2hpcDMuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMjAwLCAyMDAsICcjZWVlJyk7XG4gICAgICAgIC8vIHRoaXMuc2hpcDQuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMjAwLCAyMDAsICcjZmZmJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhhdC50eXBlTFZMID09ICd0eXBlMScpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcDEucG9zKHBhZGRpbmctMzAwLCAtNTApO1xuICAgICAgICAgICAgdGhpcy5zaGlwMi5wb3MocGFkZGluZy0xMDAsIC01MCk7XG4gICAgICAgICAgICB0aGlzLnNoaXAzLnBvcyhwYWRkaW5nKzEwMCwgLTUwKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcDQucG9zKHBhZGRpbmcrMzAwLCAtNTApO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzBdID0gbmV3IEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzBdLnggPSAxMDA7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMF0ueSA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMuc2hpcFswXS5sb2FkQW5pbWF0aW9uKFwiYW5pL3N0b3BzaGlwMC5hbmlcIik7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMF0ucGxheSgxLCB0cnVlKTsgXG4gICAgICAgICAgICB0aGlzLnNoaXBbMV0gPSBuZXcgQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMV0ueCA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMuc2hpcFsxXS55ID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzFdLmxvYWRBbmltYXRpb24oXCJhbmkvc3RvcHNoaXAxLmFuaVwiKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFsxXS5wbGF5KDEsIHRydWUpOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNoaXBbMl0gPSBuZXcgQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMl0ueCA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMuc2hpcFsyXS55ID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzJdLmxvYWRBbmltYXRpb24oXCJhbmkvc3RvcHNoaXAyLmFuaVwiKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFsyXS5wbGF5KDEsIHRydWUpOyBcbiAgICAgICAgICAgIHRoaXMuc2hpcFszXSA9IG5ldyBBbmltYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFszXS54ID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzNdLnkgPSAxMDA7XG4gICAgICAgICAgICB0aGlzLnNoaXBbM10ubG9hZEFuaW1hdGlvbihcImFuaS9zdG9wc2hpcDMuYW5pXCIpO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzNdLnBsYXkoMSwgdHJ1ZSk7ICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNoaXAxLnBvcyhwYWRkaW5nLTMwMCwgLTE1KTtcbiAgICAgICAgICAgIHRoaXMuc2hpcDIucG9zKHBhZGRpbmctMTAwLCAtMTUpO1xuICAgICAgICAgICAgdGhpcy5zaGlwMy5wb3MocGFkZGluZysxMDAsIC0xNSk7XG4gICAgICAgICAgICB0aGlzLnNoaXA0LnBvcyhwYWRkaW5nKzMwMCwgLTE1KTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFswXSA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFswXS5wb3MoMCwwKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFswXS5sb2FkSW1hZ2UoJ3Jlcy9pbWdzLycrdGhhdC50eXBlTFZMKycvbTEucG5nJyk7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMV0gPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMV0ubG9hZEltYWdlKCdyZXMvaW1ncy8nK3RoYXQudHlwZUxWTCsnL20yLnBuZycpO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzJdID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzJdLmxvYWRJbWFnZSgncmVzL2ltZ3MvJyt0aGF0LnR5cGVMVkwrJy9tMy5wbmcnKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFszXSA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFszXS5sb2FkSW1hZ2UoJ3Jlcy9pbWdzLycrdGhhdC50eXBlTFZMKycvbTQucG5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaGlwMS5hZGRDaGlsZCh0aGlzLnNoaXBbMF0pO1xuICAgICAgICB0aGlzLnNoaXAyLmFkZENoaWxkKHRoaXMuc2hpcFsxXSk7XG4gICAgICAgIHRoaXMuc2hpcDMuYWRkQ2hpbGQodGhpcy5zaGlwWzJdKTtcbiAgICAgICAgdGhpcy5zaGlwNC5hZGRDaGlsZCh0aGlzLnNoaXBbM10pO1xuXG4gICAgICAgIHRoaXMuc2hpcDEub24oRXZlbnQuQ0xJQ0ssdGhpcyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0Lm9uQ2xpY2tEb3duKDApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJzAnKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNoaXAyLm9uKEV2ZW50LkNMSUNLLHRoaXMsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5vbkNsaWNrRG93bigxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxJylcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zaGlwMy5vbihFdmVudC5DTElDSyx0aGlzLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQub25DbGlja0Rvd24oMik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMicpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2hpcDQub24oRXZlbnQuQ0xJQ0ssdGhpcyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0Lm9uQ2xpY2tEb3duKDMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJzMnKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2hpcDEpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2hpcDIpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2hpcDMpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2hpcDQpO1xuXG4gICAgfVxuICAgIGdvc2hpcCgpOnZvaWR7ICAgICAgXG4gICAgICAgIHRoaXMuc2hpcFswXS5sb2FkQW5pbWF0aW9uKFwiYW5pL2dvc2hpcDAuYW5pXCIpO1xuICAgICAgICB0aGlzLnNoaXBbMV0ubG9hZEFuaW1hdGlvbihcImFuaS9nb3NoaXAxLmFuaVwiKTtcbiAgICAgICAgdGhpcy5zaGlwWzJdLmxvYWRBbmltYXRpb24oXCJhbmkvZ29zaGlwMi5hbmlcIik7XG4gICAgICAgIHRoaXMuc2hpcFszXS5sb2FkQW5pbWF0aW9uKFwiYW5pL2dvc2hpcDMuYW5pXCIpO1xuICAgIH1cblxuICAgIG9rc2hpcChpbmRleCk6dm9pZHtcbiAgICAgICAgdmFyIGFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpO1xuICAgICAgICBhbmkubG9hZEFuaW1hdGlvbihcImFuaS9va3NoaXBcIitpbmRleCtcIi5hbmlcIik7XG4gICAgICAgIGFuaS55ID0gLTMwO1xuICAgICAgICB0aGlzLnNoaXBbaW5kZXhdLmFkZENoaWxkKGFuaSk7XG4gICAgICAgIGFuaS5wbGF5KDEsZmFsc2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFuaS5yZW1vdmVTZWxmKClcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9XG4gICAgYmFuZHNoaXAoaW5kZXgpOnZvaWR7XG4gICAgICAgIHZhciBhbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKTtcbiAgICAgICAgYW5pLmxvYWRBbmltYXRpb24oXCJhbmkvYmFuZHNoaXBcIitpbmRleCtcIi5hbmlcIik7XG4gICAgICAgIGFuaS5zY2FsZVg9IDEuMSxcbiAgICAgICAgYW5pLnNjYWxlWT0gMS4xLFxuICAgICAgICB0aGlzLnNoaXBbaW5kZXhdLmFkZENoaWxkKGFuaSk7XG4gICAgICAgIGFuaS5wbGF5KDEsZmFsc2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFuaS5yZW1vdmVTZWxmKClcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9XG59IiwidmFyIEhhbmRsZXIgPSBMYXlhLkhhbmRsZXI7XG52YXIgU3ByaXRlID0gTGF5YS5TcHJpdGU7XG52YXIgVHdlZW4gPSBMYXlhLlR3ZWVuO1xudmFyIHRoYXQ7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0aGluZyBleHRlbmRzIExheWEuU3ByaXRlIHtcbiAgICBwcml2YXRlIHdvcmRPYmo7XG4gICAgcHVibGljIGlzT3ZlcjtcbiAgICBwcml2YXRlIHppbXVDb247XG4gICAgXG4gICAgY29uc3RydWN0b3IodGhhdHMsd29yZE9iaikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGF0ID0gdGhhdHM7XG4gICAgICAgIHRoaXMud29yZE9iaiA9IHdvcmRPYmo7XG4gICAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7Ly/mmK/lkKblt7Lnu4/mjpLpmaRcbiAgICAgICAgdGhpcy56aW11Q29uID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuemltdUNvbik7XG4gICAgICAgIHRoaXMuYWRkZW5lcmd5SW1nKCk7XG4gICAgfVxuXG4gICAgYWRkZW5lcmd5SW1nICgpOnZvaWQge1xuICAgICAgICB2YXIgaW1nU3ByaXRlID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICBpbWdTcHJpdGUubG9hZEltYWdlKCdyZXMvaW1ncy8nK3RoYXQudHlwZUxWTCsnLycrdGhpcy53b3JkT2JqLmxldHRlci50b0xvd2VyQ2FzZSgpKycucG5nJyk7XG4gICAgICAgIGltZ1Nwcml0ZS5zY2FsZVggPSAwLjQ1O1xuICAgICAgICBpbWdTcHJpdGUuc2NhbGVZID0gMC40NTtcbiAgICAgICAgaWYodGhhdC50eXBlTFZMID09ICd0eXBlMScpe1xuICAgICAgICAgICAgaW1nU3ByaXRlLnBpdm90KDU3LDk0KTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGF0LnR5cGVMVkwgPT0gJ3R5cGUyJyl7XG4gICAgICAgICAgICBpbWdTcHJpdGUucGl2b3QoNjIsMTI0KTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGF0LnR5cGVMVkwgPT0gJ3R5cGUzJyl7XG4gICAgICAgICAgICBpbWdTcHJpdGUucGl2b3QoNTgsMTI2KTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGF0LnR5cGVMVkwgPT0gJ3R5cGU0Jyl7XG4gICAgICAgICAgICBpbWdTcHJpdGUucGl2b3QoNzAsNjgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuemltdUNvbi5hZGRDaGlsZChpbWdTcHJpdGUpO1xuICAgIH1cblxuICAgIHhpYW9zaGkgKCk6dm9pZCB7XG4gICAgICAgIFR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XG4gICAgICAgIFR3ZWVuLnRvKHRoaXMsIHthbHBoYTogMH0sIDUwMCwgbnVsbCwgbmV3IEhhbmRsZXIodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudCgnVUllbmVyZ3lCb3hfUmVtb3ZlX0V2ZW50JywgW3RoaXNdKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHNldFN0YXR1cyAoc3RhdHVzKTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG4gICAgc2V0U3RhcnQgKHN0YXJ0KTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLnN0YXJ0ID0gc3RhcnQ7XG4gICAgfVxuICAgIHNldFRpbWUgKHRpbWUpOnZvaWQge1xuICAgICAgICB0aGlzLndvcmRPYmoudGltZSA9IDMwMDAqdGltZTtcbiAgICB9XG4gICAgc2V0U2hvdyAoKTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLmlzU2hvdyA9IHRydWU7XG4gICAgfVxuICAgIHNldFBlcmNlbnQgKHBlcmNlbnQpOnZvaWQge1xuICAgICAgICB0aGlzLndvcmRPYmoucGVyY2VudCA9IHBlcmNlbnQ7XG4gICAgfVxuICAgIGJ1cGlwZWkgKHNjb3JlKTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLnN0YXR1cyA9IC0xO1xuICAgICAgICB0aGlzLnhpYW9zaGkoKTtcbiAgICB9XG5cbiAgICBwaXBlaSAoKTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLnN0YXR1cyA9IDE7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnhpYW9zaGkoKTtcbiAgICB9XG4gICAgc2hpdG91ICgpOnZvaWQge1xuICAgICAgICB0aGlzLndvcmRPYmouc3RhdHVzID0gMTtcbiAgICAgICAgdGhpcy54aWFvc2hpKCk7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IFNwcml0ZSA9IExheWEuU3ByaXRlO1xuaW1wb3J0IEV2ZW50ID0gTGF5YS5FdmVudDtcbmltcG9ydCBIYW5kbGVyID0gTGF5YS5IYW5kbGVyO1xuaW1wb3J0IFRpbWVMaW5lID0gTGF5YS5UaW1lTGluZTtcbmltcG9ydCBUZXh0ID0gTGF5YS5UZXh0O1xuaW1wb3J0IFR3ZWVuID0gTGF5YS5Ud2VlbjtcbmltcG9ydCBBbmltYXRpb24gPSBMYXlhLkFuaW1hdGlvbjtcbmltcG9ydCBTb3VuZDMyMSA9IExheWEuU291bmRNYW5hZ2VyO1xudmFyIHRoYXQsdGltZUxpbmUsaXMzMjEgPSB0cnVlLGlzY2xpY2sgPSBmYWxzZTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRpcHMgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG5cblxuICAgIHByaXZhdGUgcGVyZmVjdFRpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIGdyZWF0VGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgcmlnaHRUaXA6TGF5YS5TcHJpdGU7XG4gICAgcHJpdmF0ZSBtaXNzVGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgYmFkVGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgbG9uZzpMYXlhLkFuaW1hdGlvbjtcblxuICAgIHByaXZhdGUgdGltZVRpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIHJlc3RhcnRUaXA6TGF5YS5TcHJpdGU7XG4gICAgcHJpdmF0ZSB0b3BCYW5UaXA6TGF5YS5TcHJpdGU7XG4gICAgcHJpdmF0ZSB0aXRsZVR4dDpMYXlhLlRleHQ7XG4gICAgcHJpdmF0ZSBzdGFydEdvVGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgc3RhcnRHb1R4dDpMYXlhLlRleHQ7XG4gICAgXG5cbiAgICBwcml2YXRlIHJlYWR5MVRpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIHJlYWR5MlRpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIHJlYWR5M1RpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIHJlYWR5VGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgcmVhZHlHb1RpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIGNvdW50RG93blR4dDpMYXlhLlRleHQ7Ly/lgJLorqHml7bmlofmnKxcblxuICAgIHByaXZhdGUgc2NvcmVUeHQ7XG5cbiAgICBwcml2YXRlIGFsbFNjb3JlID0gMDtcbiAgICBwcml2YXRlIGdhbWVQYW5lbDtcbiAgICBwcml2YXRlIGxhc3RUaXA7XG5cbiAgICBwcml2YXRlIGNvdW50RG93biA9IDA7XG4gICAgcHJpdmF0ZSBjb3VudERvd24yID0gNjA7XG5cbiAgICBwcml2YXRlIHNjb3JlT2JqID0ge1xuICAgICAgICBwZXJmZWN0OiAwLFxuICAgICAgICBnb29kOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgbWlzczogMCxcbiAgICAgICAgYmFkOiAwLFxuICAgICAgICBvYnN0YWNsZTogMCxcbiAgICAgICAgdG90YWxTY29yZTogMFxuICAgIH07XG4gICAgY29uc3RydWN0b3IodGhhdHMsZ2FtZVBhbmVsKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5nYW1lUGFuZWwgPSBnYW1lUGFuZWw7XG4gICAgICAgIHRoYXQgPSB0aGF0c1xuICAgICAgICB0aGlzLmNvdW50RG93bjIgPSBwYXJzZUludCgodGhhdHMuZGF0YS5tdXNpY0R1cmF0aW9uIC8gMTAwMCkudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuY291bnREb3duMiA9IDI7XG4gICAgICAgIHRoaXMuaW5pdFRpcHMoKTtcbiAgICB9XG5cbiAgICBpbml0VGlwcyAoKSA6dm9pZCB7XG4gICAgICAgIHRoaXMuYmFkVGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLmJhZFRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9iYWQucG5nXCIpO1xuICAgICAgICB0aGlzLmJhZFRpcC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMuYmFkVGlwLndpZHRoID0gNTEwO1xuICAgICAgICB0aGlzLmJhZFRpcC5oZWlnaHQgPSAyMjI7XG4gICAgICAgIHRoaXMuYmFkVGlwLnBpdm90KDI1NSwgMTExKTtcbiAgICAgICAgdGhpcy5iYWRUaXAucG9zKDUwNCwgTGF5YS5zdGFnZS5oZWlnaHQvIDItMjApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmFkVGlwKTtcblxuICAgICAgICB0aGlzLm1pc3NUaXAgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIHRoaXMubWlzc1RpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9taXNzLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5taXNzVGlwLmFscGhhID0gMDtcbiAgICAgICAgdGhpcy5taXNzVGlwLndpZHRoID0gNTEwO1xuICAgICAgICB0aGlzLm1pc3NUaXAuaGVpZ2h0ID0gMjIyO1xuICAgICAgICB0aGlzLm1pc3NUaXAucGl2b3QoMjU1LCAxMTEpO1xuICAgICAgICB0aGlzLm1pc3NUaXAucG9zKDUwNCwgTGF5YS5zdGFnZS5oZWlnaHQvIDItMjApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWlzc1RpcCk7XG5cbiAgICAgICAgLy8gdGhpcy5yaWdodFRpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgLy8gdGhpcy5yaWdodFRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9yaWdodC5wbmdcIik7XG4gICAgICAgIC8vIHRoaXMucmlnaHRUaXAuYWxwaGEgPSAwO1xuICAgICAgICAvLyB0aGlzLnJpZ2h0VGlwLnBpdm90KDYwLCAzMCk7XG4gICAgICAgIC8vIHRoaXMucmlnaHRUaXAucG9zKDUwNCwgKExheWEuc3RhZ2UuaGVpZ2h0KSAvIDIpO1xuICAgICAgICAvLyB0aGlzLmFkZENoaWxkKHRoaXMucmlnaHRUaXApO1xuXG4gICAgICAgIC8vIHRoaXMuZ3JlYXRUaXAgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIC8vIHRoaXMuZ3JlYXRUaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvZ3JlYXQucG5nXCIpO1xuICAgICAgICAvLyB0aGlzLmdyZWF0VGlwLmFscGhhID0gMDtcbiAgICAgICAgLy8gdGhpcy5ncmVhdFRpcC5waXZvdCg3MCwgMzApO1xuICAgICAgICAvLyB0aGlzLmdyZWF0VGlwLnBvcyg1MDQsIChMYXlhLnN0YWdlLmhlaWdodCkgLyAyKTtcbiAgICAgICAgLy8gdGhpcy5hZGRDaGlsZCh0aGlzLmdyZWF0VGlwKTtcblxuICAgICAgICB0aGlzLnBlcmZlY3RUaXAgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIHRoaXMucGVyZmVjdFRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9wZXJmZWN0LnBuZ1wiKTtcbiAgICAgICAgdGhpcy5wZXJmZWN0VGlwLmFscGhhID0gMDtcbiAgICAgICAgdGhpcy5wZXJmZWN0VGlwLndpZHRoID0gNTEwO1xuICAgICAgICB0aGlzLnBlcmZlY3RUaXAuaGVpZ2h0ID0gMjIyO1xuICAgICAgICB0aGlzLnBlcmZlY3RUaXAucGl2b3QoMjU1LCAxMTEpO1xuICAgICAgICB0aGlzLnBlcmZlY3RUaXAucG9zKDUwNCwgTGF5YS5zdGFnZS5oZWlnaHQgLyAyLTIwKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBlcmZlY3RUaXApO1xuXG4gICAgICAgIHRoaXMudG9wQmFuVGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnRvcEJhblRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy90b3BCYW4ucG5nXCIpO1xuICAgICAgICB0aGlzLnRvcEJhblRpcC53aWR0aCA9IDMyMDtcbiAgICAgICAgdGhpcy50b3BCYW5UaXAuaGVpZ2h0ID0gMTQ1O1xuICAgICAgICB0aGlzLnRvcEJhblRpcC5waXZvdCgxNjAsIDApOyBcbiAgICAgICAgdGhpcy50b3BCYW5UaXAucG9zKDUwNCwgMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50b3BCYW5UaXApO1xuICAgICAgICB0aGlzLnRpdGxlVHh0ID0gbmV3IFRleHQoKTtcbiAgICAgICAgdGhpcy50aXRsZVR4dC5mb250U2l6ZSA9IDM0O1xuICAgICAgICB0aGlzLnRpdGxlVHh0LmNvbG9yID0gXCIjRkZGRkZGXCI7XG4gICAgICAgIHRoaXMudGl0bGVUeHQud2lkdGggPSAzMjA7XG4gICAgICAgIHRoaXMudGl0bGVUeHQueSA9IDg1O1xuICAgICAgICB0aGlzLnRpdGxlVHh0LmFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIHRoaXMudGl0bGVUeHQudGV4dCA9IFwi6Lef6ZqP6IqC5aWPXCI7XG4gICAgICAgIHRoaXMudG9wQmFuVGlwLmFkZENoaWxkKHRoaXMudGl0bGVUeHQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnRHb1RpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zdGFydEdvVGlwLmxvYWRJbWFnZShcInJlcy9pbWdzL2J1dHRvblN0YXJ0LnBuZ1wiKTtcbiAgICAgICAgdGhpcy5zdGFydEdvVGlwLndpZHRoID0gMjQwO1xuICAgICAgICB0aGlzLnN0YXJ0R29UaXAuaGVpZ2h0ID0gODA7XG4gICAgICAgIHRoaXMuc3RhcnRHb1RpcC5waXZvdCgxMjAsIDApOyBcbiAgICAgICAgdGhpcy5zdGFydEdvVGlwLnBvcyg1MDQsIDI4MCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zdGFydEdvVGlwKTtcbiAgICAgICAgdGhpcy5zdGFydEdvVGlwLm9uKEV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMuc3RhcnRHbylcbiAgICAgICAgLy8gdGhpcy5zdGFydEdvVHh0ID0gbmV3IFRleHQoKTtcbiAgICAgICAgLy8gdGhpcy5zdGFydEdvVHh0LmZvbnRTaXplID0gMjc7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRHb1R4dC5jb2xvciA9IFwiIzAwMDAwMFwiO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0R29UeHQud2lkdGggPSAyNDA7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRHb1R4dC55ID0gMjY7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRHb1R4dC5hbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0R29UeHQudGV4dCA9IFwi5byA5aeL5ri45oiPXCI7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRHb1RpcC5hZGRDaGlsZCh0aGlzLnN0YXJ0R29UeHQpO1xuXG4gICAgICAgIHRoaXMucmVhZHkzVGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnJlYWR5M1RpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9Db3VudERvd24zLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5yZWFkeTNUaXAuYWxwaGEgPSAwO1xuICAgICAgICB0aGlzLnJlYWR5M1RpcC5waXZvdCg0NSwgMCk7IFxuICAgICAgICB0aGlzLnJlYWR5M1RpcC5oZWlnaHQgPSAxMzU7XG4gICAgICAgIHRoaXMucmVhZHkzVGlwLnBvcyg1MDQsIExheWEuc3RhZ2UuaGVpZ2h0LzItMTIwKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnJlYWR5M1RpcCk7XG4gICAgICAgIHRoaXMucmVhZHkyVGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnJlYWR5MlRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9Db3VudERvd24yLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5yZWFkeTJUaXAuYWxwaGEgPSAwO1xuICAgICAgICB0aGlzLnJlYWR5MlRpcC5waXZvdCg0Ni41LCAwKTsgXG4gICAgICAgIHRoaXMucmVhZHkyVGlwLmhlaWdodCA9IDEzNTtcbiAgICAgICAgdGhpcy5yZWFkeTJUaXAucG9zKDUwNCwgTGF5YS5zdGFnZS5oZWlnaHQvMi0xMjApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucmVhZHkyVGlwKTtcbiAgICAgICAgdGhpcy5yZWFkeTFUaXAgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIHRoaXMucmVhZHkxVGlwLmxvYWRJbWFnZShcInJlcy9pbWdzL0NvdW50RG93bjEucG5nXCIpO1xuICAgICAgICB0aGlzLnJlYWR5MVRpcC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMucmVhZHkxVGlwLnBpdm90KDMzLjUsIDApOyBcbiAgICAgICAgdGhpcy5yZWFkeTFUaXAuaGVpZ2h0ID0gMTM1O1xuICAgICAgICB0aGlzLnJlYWR5MVRpcC5wb3MoNTA0LCBMYXlhLnN0YWdlLmhlaWdodC8yLTEyMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5yZWFkeTFUaXApO1xuICAgICAgICB0aGlzLnJlYWR5VGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnJlYWR5VGlwLmxvYWRJbWFnZShcInJlcy9pbWdzL3JlYWR5LnBuZ1wiKTtcbiAgICAgICAgdGhpcy5yZWFkeVRpcC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMucmVhZHlUaXAucGl2b3QoMTUwLCAwKTsgXG4gICAgICAgIHRoaXMucmVhZHlUaXAuaGVpZ2h0ID0gMTM1O1xuICAgICAgICB0aGlzLnJlYWR5VGlwLnBvcyg1MDQsIExheWEuc3RhZ2UuaGVpZ2h0LzItMTIwKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnJlYWR5VGlwKTtcbiAgICAgICAgdGhpcy5yZWFkeUdvVGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnJlYWR5R29UaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvR08ucG5nXCIpO1xuICAgICAgICB0aGlzLnJlYWR5R29UaXAuYWxwaGEgPSAwO1xuICAgICAgICB0aGlzLnJlYWR5R29UaXAucGl2b3QoMTUwLCAwKTsgXG4gICAgICAgIHRoaXMucmVhZHlHb1RpcC5oZWlnaHQgPSAxMzU7XG4gICAgICAgIHRoaXMucmVhZHlHb1RpcC5wb3MoNTA0LCBMYXlhLnN0YWdlLmhlaWdodC8yLTEyMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5yZWFkeUdvVGlwKTtcblxuXG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnNjb3JlVHh0ID0gbmV3IFRleHQoKTtcbiAgICAgICAgLy8gdGhpcy5zY29yZVR4dC5mb250ID0gXCJJbXBhY3RcIjtcbiAgICAgICAgLy8gdGhpcy5zY29yZVR4dC5mb250U2l6ZSA9IDcwO1xuICAgICAgICAvLyB0aGlzLnNjb3JlVHh0LmNvbG9yID0gXCIjMjFENEExXCI7XG4gICAgICAgIC8vIHRoaXMuc2NvcmVUeHQud2lkdGggPSAxMzgwO1xuICAgICAgICAvLyB0aGlzLnNjb3JlVHh0LnBpdm90KDI1LCAwKTsgXG4gICAgICAgIC8vIHRoaXMuc2NvcmVUeHQucG9zKDUwNCwgMjApO1xuICAgICAgICAvLyB0aGlzLnNjb3JlVHh0LmFscGhhID0gMDtcbiAgICAgICAgLy8gdGhpcy5zY29yZVR4dC50ZXh0ID0gdGhpcy5zY29yZU9iai50b3RhbFNjb3JlLnRvU3RyaW5nKCk7XG4gICAgICAgIC8vIHRoaXMuYWRkQ2hpbGQodGhpcy5zY29yZVR4dCk7XG4gICAgfVxuXG4gICAgc2V0Q291bnREb3duICgpIDp2b2lkIHtcbiAgICAgICAgTGF5YS50aW1lci5sb29wKDEwMDAsIHRoaXMsIGNvdW50RG93bkhhbmRsZXIpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNvdW50RG93bkhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZih0aGlzLmNvdW50RG93biA9PSAodGhpcy5jb3VudERvd24yLTUpKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnRUaXAuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb3VudERvd24rKztcbiAgICAgICAgICAgIGxldCBjb3VudCA9IHBhcnNlSW50KCh0aGlzLmNvdW50RG93bi82MCU2MCkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIGxldCBjb3VudDIgPSBwYXJzZUludCgodGhpcy5jb3VudERvd24yLzYwJTYwKS50b1N0cmluZygpKVxuICAgICAgICAgICAgbGV0IHRpbWUgPSBcIjBcIisoY291bnQ9PTA/XCIwXCI6Y291bnQpK1wiOlwiKyh0aGlzLmNvdW50RG93bi1jb3VudCo2MDwwPyh0aGlzLmNvdW50RG93bjwxMD9cIjBcIit0aGlzLmNvdW50RG93bjp0aGlzLmNvdW50RG93bik6KHRoaXMuY291bnREb3duLWNvdW50KjYwPDEwP1wiMFwiKyh0aGlzLmNvdW50RG93bi1jb3VudCo2MCk6KHRoaXMuY291bnREb3duLWNvdW50KjYwKSkpK1wiL1wiK1wiMFwiKyhjb3VudDI9PTA/XCIwXCI6Y291bnQyKStcIjpcIisodGhpcy5jb3VudERvd24yLWNvdW50Mio2MDwwPyh0aGlzLmNvdW50RG93bjI8MTA/XCIwXCIrdGhpcy5jb3VudERvd24yOnRoaXMuY291bnREb3duMik6KHRoaXMuY291bnREb3duMi1jb3VudDIqNjA8MTA/XCIwXCIrKHRoaXMuY291bnREb3duMi1jb3VudDIqNjApOih0aGlzLmNvdW50RG93bjItY291bnQyKjYwKSkpXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93blR4dC50ZXh0ID0gdGltZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50RG93biA9PSB0aGlzLmNvdW50RG93bjIpIHtcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIGNvdW50RG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQoXCJFbmRfR2FtZV9FdmVudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkgKGU6IEV2ZW50KTp2b2lke1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmV2ZW50KFwiUGxheV9HYW1lX0V2ZW50XCIpOyBcbiAgICAgICAgXG4gICAgfVxuICAgIHN0b3AgKGU6IEV2ZW50KTp2b2lke1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmV2ZW50KFwiU3RvcF9HYW1lX0V2ZW50XCIpO1xuICAgIH1cbiAgICByZXN0YXJ0IChlOiBFdmVudCk6dm9pZHtcbiAgICAgICAgaWYoaXNjbGljayl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXNjbGljayA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe25hbWU6J2luZ1Jlc3RhcnRHYW1lJyxkYXRhOnt9fSwnKicpO1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICBpZih0aW1lTGluZSYmaXMzMjEpe1xuICAgICAgICAgICAgdGltZUxpbmUub2ZmKEV2ZW50LkNPTVBMRVRFLCB0aGlzLCAoKT0+e30pO1xuICAgICAgICAgICAgdGltZUxpbmUucGF1c2UoKTtcbiAgICAgICAgICAgIHRpbWVMaW5lLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpczMyMSA9IHRydWU7ICAgICAgICBcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc3RvcEFsbCgpO1xuICAgICAgICBmb3IobGV0IGkgb2YgdGhhdC5zY3JlZW5MZXR0ZXJCb3hBcnIpe1xuICAgICAgICAgICAgaS5tb3ZlVHdlZW4ucGF1c2UoKTtcbiAgICAgICAgICAgIGkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhhdCk7XG4gICAgICAgIHRoaXMuZ2FtZVBhbmVsLmRlc3Ryb3koKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LkdhbWVNYW5hZ2VyKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuICAgIHNldFNjb3JlIChhZGRTY29yZSkgOnZvaWQge1xuICAgICAgICB0aGlzLnNjb3JlT2JqLnRvdGFsU2NvcmUgKz0gYWRkU2NvcmU7XG4gICAgICAgIC8vIHRoaXMuc2NvcmVUeHQudGV4dCA9IHBhcnNlSW50KCh0aGlzLnNjb3JlT2JqLnRvdGFsU2NvcmUpLnRvRml4ZWQoMSkpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIFxuICAgIGdldFNjb3JlICgpIDphbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29yZU9iajtcbiAgICB9XG5cbiAgICBzaG93UGxheVRpcCAoYWRkU2NvcmUpOnZvaWQge1xuICAgICAgICB2YXIgZGFuZ2VTY29yZTpudW1iZXIgPSAwO1xuICAgICAgICB0aGlzLnNjb3JlT2JqLm9ic3RhY2xlKys7XG4gICAgICAgIGlmIChhZGRTY29yZSA9PSAyMCkge1xuICAgICAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKFwic291bmQvYmVhdC5tcDNcIiwgMSk7XG4gICAgICAgICAgICB0aGlzLnNjb3JlT2JqLnBlcmZlY3QrKztcbiAgICAgICAgICAgIGRhbmdlU2NvcmUgPSBwYXJzZUZsb2F0KCgxMDAvdGhhdC5nb3V6aUxlbmd0aCkudG9GaXhlZCgxKSlcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpcCh0aGlzLnBlcmZlY3RUaXApO1xuICAgICAgICB9IGVsc2UgaWYgKGFkZFNjb3JlID09IDEwKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlT2JqLmdvb2QrKztcbiAgICAgICAgICAgIGRhbmdlU2NvcmUgPSBwYXJzZUZsb2F0KCgoMTAwL3RoYXQuZ291emlMZW5ndGgpKjAuOCkudG9GaXhlZCgxKSlcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpcCh0aGlzLmdyZWF0VGlwKTtcbiAgICAgICAgfSBlbHNlIGlmIChhZGRTY29yZSA9PSA1KSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlT2JqLnJpZ2h0Kys7XG4gICAgICAgICAgICBkYW5nZVNjb3JlID0gcGFyc2VGbG9hdCgoKDEwMC90aGF0LmdvdXppTGVuZ3RoKSowLjUpLnRvRml4ZWQoMSkpXG4gICAgICAgICAgICB0aGlzLnNob3dUaXAodGhpcy5yaWdodFRpcCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWRkU2NvcmUgPT0gMCkge1xuICAgICAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKFwic291bmQvYnV0dG9uLm1wM1wiLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmVPYmoubWlzcysrO1xuICAgICAgICAgICAgdGhpcy5zaG93VGlwKHRoaXMubWlzc1RpcCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWRkU2NvcmUgPT0gLTEpIHtcbiAgICAgICAgICAgIExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInNvdW5kL2JhZC5tcDNcIiwgMSk7XG4gICAgICAgICAgICB0aGlzLnNjb3JlT2JqLmJhZCsrO1xuICAgICAgICAgICAgdGhpcy5zaG93VGlwKHRoaXMuYmFkVGlwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNjb3JlKGRhbmdlU2NvcmUpO1xuICAgIH1cblxuICAgIHNob3dUaXAgKG5ld1RpcCk6dm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdFRpcCkge1xuICAgICAgICAgICAgVHdlZW4uY2xlYXJBbGwodGhpcy5sYXN0VGlwKVxuICAgICAgICAgICAgdGhpcy5sYXN0VGlwLmFscGhhID0gMDtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpcC5zY2FsZVggPSAwLjQ7XG4gICAgICAgICAgICB0aGlzLmxhc3RUaXAuc2NhbGVZID0gMC40O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhbmRsZXIgPSBuZXcgSGFuZGxlcih0aGlzLmxhc3RUaXAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFR3ZWVuLnRvKG5ld1RpcCwge2FscGhhOiAwLH0sIDEwMCwgbnVsbCwgbnVsbCwgMjUwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3VGlwLnNjYWxlWCA9IDAuNDtcbiAgICAgICAgbmV3VGlwLnNjYWxlWSA9IDAuNDtcbiAgICAgICAgbmV3VGlwLnkgPSAoTGF5YS5zdGFnZS5oZWlnaHQpIC8gMjtcbiAgICAgICAgbmV3VGlwLmFscGhhID0gMDtcbiAgICAgICAgVHdlZW4udG8obmV3VGlwLCB7YWxwaGE6IDEsIHNjYWxlWDogMSwgc2NhbGVZOiAxfSwgNDAwLCBudWxsLCBoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5sYXN0VGlwID0gbmV3VGlwO1xuXG4gICAgfVxuICAgIHN0YXJ0R28gKGU6RXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaXNjbGljayA9IGZhbHNlO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAgICAgICAgXG4gICAgICAgIHRoaXMudG9wQmFuVGlwLmFscGhhID0gMDtcbiAgICAgICAgdGhpcy50aXRsZVR4dC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRHb1RpcC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMudG9wQmFuVGlwLnkgPSAxMDAwO1xuICAgICAgICB0aGlzLnN0YXJ0R29UaXAueSA9IDEwMDA7XG4gICAgICAgIGxldCBfdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoaXMubG9uZyA9IG5ldyBBbmltYXRpb24oKTtcbiAgICAgICAgLy8gdGhpcy5sb25nLmxvYWRBbmltYXRpb24oXCJhbmkvXCIrdGhhdC50eXBlTFZMK1wiLmFuaVwiKTtcbiAgICAgICAgdGhpcy5sb25nLmxvYWRBbmltYXRpb24oXCJhbmkvdHlwZTEuYW5pXCIpO1xuICAgICAgICB0aGlzLmxvbmcud2lkdGggPSAxMDA4O1xuICAgICAgICB0aGlzLmxvbmcuaGVpZ2h0ID0gNjQwO1xuICAgICAgICB0aGlzLmxvbmcucGl2b3QoNTA0LCAwKTsgXG4gICAgICAgIHRoaXMubG9uZy5wb3MoNTA0LCAwKTtcbiAgICAgICAgdGhpcy5sb25nLnBsYXkoMCwgZmFsc2UpOyAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKHRoYXQuZGF0YS5leHBsYWluQXVkaW9VcmwsIDEsaGFuZGxlcilcbiAgICAgICAgICAgIF90aGF0LmxvbmcubG9hZEFuaW1hdGlvbihcImFuaS90eXBlMTEuYW5pXCIpO1xuICAgICAgICAgICAgX3RoYXQubG9uZy53aWR0aCA9IDEwMDg7XG4gICAgICAgICAgICBfdGhhdC5sb25nLmhlaWdodCA9IDY0MDtcbiAgICAgICAgICAgIF90aGF0LmxvbmcucGl2b3QoNTA0LCAwKTsgXG4gICAgICAgICAgICBfdGhhdC5sb25nLnBvcyg1MDQsIDApO1xuICAgICAgICAgICAgLy8gX3RoYXQubG9uZy5sb2FkQW5pbWF0aW9uKFwiYW5pL1wiK3RoYXQudHlwZUxWTCtcIjEuYW5pXCIpO1xuICAgICAgICAgICAgX3RoYXQubG9uZy5wbGF5KDAsIHRydWUpOyAgXG4gICAgICAgIH0sIDMzNzApOyAgIFxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubG9uZyk7XG4gICAgICAgIHZhciBoYW5kbGVyID0gbmV3IEhhbmRsZXIodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoYXQubG9uZy5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnJlYWR5R08oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlYWR5R08gKCk6dm9pZCB7XG4gICAgICAgIHRoaXMudGltZVRpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy50aW1lVGlwLmxvYWRJbWFnZShcInJlcy9pbWdzL3RpbWUucG5nXCIpO1xuICAgICAgICB0aGlzLnRpbWVUaXAud2lkdGggPSAyNTA7XG4gICAgICAgIHRoaXMudGltZVRpcC5oZWlnaHQgPSA1NTtcbiAgICAgICAgdGhpcy50aW1lVGlwLnBvcyg1MDQrMTAwLCAzMik7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50aW1lVGlwKTtcbiAgICAgICAgdGhpcy5jb3VudERvd25UeHQgPSBuZXcgVGV4dCgpO1xuICAgICAgICB0aGlzLmNvdW50RG93blR4dC53aWR0aCA9IDI1MDtcbiAgICAgICAgdGhpcy5jb3VudERvd25UeHQuZm9udFNpemUgPSAyMjtcbiAgICAgICAgdGhpcy5jb3VudERvd25UeHQuY29sb3IgPSBcIiNGRkZGRkZcIjtcbiAgICAgICAgdGhpcy5jb3VudERvd25UeHQuYWxwaGEgPSAxO1xuICAgICAgICB0aGlzLmNvdW50RG93blR4dC55ID0gMTk7XG4gICAgICAgIHRoaXMuY291bnREb3duVHh0LnggPSA5NTtcbiAgICAgICAgbGV0IGNvdW50MiA9IHBhcnNlSW50KCh0aGlzLmNvdW50RG93bjIvNjAlNjApLnRvU3RyaW5nKCkpXG4gICAgICAgIGxldCB0aW1lID0gXCIwMDowMC9cIitcIjBcIisoY291bnQyPT0wP1wiMFwiOmNvdW50MikrXCI6XCIrKHRoaXMuY291bnREb3duMi1jb3VudDIqNjA8MD8odGhpcy5jb3VudERvd24yPDEwP1wiMFwiK3RoaXMuY291bnREb3duMjp0aGlzLmNvdW50RG93bjIpOih0aGlzLmNvdW50RG93bjItY291bnQyKjYwPDEwP1wiMFwiKyh0aGlzLmNvdW50RG93bjItY291bnQyKjYwKToodGhpcy5jb3VudERvd24yLWNvdW50Mio2MCkpKVxuICAgICAgICB0aGlzLmNvdW50RG93blR4dC50ZXh0ID0gdGltZTtcbiAgICAgICAgdGhpcy50aW1lVGlwLmFkZENoaWxkKHRoaXMuY291bnREb3duVHh0KTtcbiAgICAgICAgdGhpcy5zY29yZU9iai50b3RhbFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5yZXN0YXJ0VGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnJlc3RhcnRUaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvcmVzdGFydC5wbmdcIik7XG4gICAgICAgIHRoaXMucmVzdGFydFRpcC5hbHBoYSA9IDE7XG4gICAgICAgIHRoaXMucmVzdGFydFRpcC53aWR0aCA9IDYwO1xuICAgICAgICB0aGlzLnJlc3RhcnRUaXAuaGVpZ2h0ID0gNjA7XG4gICAgICAgIHRoaXMucmVzdGFydFRpcC5wb3MoNTA0KzQwNSwgMzQpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucmVzdGFydFRpcCk7XG4gICAgICAgIHRpbWVMaW5lID0gbmV3IFRpbWVMaW5lKCk7XG4gICAgICAgIFNvdW5kMzIxLmF1dG9TdG9wTXVzaWMgPSB0cnVlO1xuICAgICAgICBTb3VuZDMyMS5zb3VuZFZvbHVtZSA9IDM7XG4gICAgICAgIFNvdW5kMzIxLnBsYXlNdXNpYyhcInNvdW5kLzMyMS5tcDNcIiwgMSlcbiAgICAgICAgdGltZUxpbmUuYWRkTGFiZWwoXCJyZWFkeTNcIiwgMCkudG8odGhpcy5yZWFkeTNUaXAsIHtzY2FsZVg6IDEsIHNjYWxlWTogMSwgYWxwaGE6IDF9LCA1MDAsIG51bGwsIDApXG4gICAgICAgICAgICAgICAgLmFkZExhYmVsKFwicmVhZHkzXCIsIDApLnRvKHRoaXMucmVhZHkzVGlwLCB7YWxwaGE6IDB9LCA1MDAsIG51bGwsIDApXG4gICAgICAgICAgICAgICAgLmFkZExhYmVsKFwicmVhZHkyXCIsIDApLnRvKHRoaXMucmVhZHkyVGlwLCB7c2NhbGVYOiAxLCBzY2FsZVk6IDEsIGFscGhhOiAxfSwgNTAwLCBudWxsLCAwKVxuICAgICAgICAgICAgICAgIC5hZGRMYWJlbChcInJlYWR5MlwiLCAwKS50byh0aGlzLnJlYWR5MlRpcCwge2FscGhhOiAwfSwgNTAwLCBudWxsLCAwKVxuICAgICAgICAgICAgICAgIC5hZGRMYWJlbChcInJlYWR5MVwiLCAwKS50byh0aGlzLnJlYWR5MVRpcCwge3NjYWxlWDogMSwgc2NhbGVZOiAxLCBhbHBoYTogMX0sIDUwMCwgbnVsbCwgMClcbiAgICAgICAgICAgICAgICAuYWRkTGFiZWwoXCJyZWFkeTFcIiwgMCkudG8odGhpcy5yZWFkeTFUaXAsIHthbHBoYTogMH0sIDUwMCwgbnVsbCwgMClcbiAgICAgICAgICAgICAgICAuYWRkTGFiZWwoXCJyZWFkeVwiLCAwKS50byh0aGlzLnJlYWR5VGlwLCB7c2NhbGVYOiAxLCBzY2FsZVk6IDEsIGFscGhhOiAxfSwgNTAwLCBudWxsLCAwKVxuICAgICAgICAgICAgICAgIC5hZGRMYWJlbChcInJlYWR5XCIsIDApLnRvKHRoaXMucmVhZHlUaXAsIHthbHBoYTogMH0sIDUwMCwgbnVsbCwgMClcbiAgICAgICAgICAgICAgICAuYWRkTGFiZWwoXCJyZWFkeUdPXCIsIDApLnRvKHRoaXMucmVhZHlHb1RpcCwge3NjYWxlWDogMSwgc2NhbGVZOiAxLCBhbHBoYTogMX0sIDUwMCwgbnVsbCwgMClcbiAgICAgICAgICAgICAgICAuYWRkTGFiZWwoXCJyZWFkeUdPXCIsIDApLnRvKHRoaXMucmVhZHlHb1RpcCwge2FscGhhOiAwfSwgNTAwLCBudWxsLCAwKVxuICAgICAgICB0aW1lTGluZS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgdGltZUxpbmUub24oRXZlbnQuTEFCRUwsIHRoaXMsIG9uTGFiZWwpO1xuICAgICAgICB0aW1lTGluZS5vbihFdmVudC5DT01QTEVURSwgdGhpcywgb25Db21wbGV0ZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gb25MYWJlbChsYWJlbCkge1xuICAgICAgICAgICAgaWYgKGxhYmVsID09IFwicmVhZHlPdXRcIikge1xuICAgICAgICAgICAgICAgIHRpbWVMaW5lLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVMaW5lLnJlc3VtZSgpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0VGlwLm9uKEV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMucmVzdGFydClcbiAgICAgICAgICAgICAgICB0aW1lTGluZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgaXMzMjEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvdW50RG93bigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQoXCJTdGFydF9HYW1lX0V2ZW50XCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XHJcbmltcG9ydCBEaWFsb2c9TGF5YS5EaWFsb2c7XHJcbmltcG9ydCBTY2VuZT1MYXlhLlNjZW5lO1xudmFyIFJFRzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XG5leHBvcnQgbW9kdWxlIHVpLmRpYWxvZyB7XHJcbiAgICBleHBvcnQgY2xhc3MgTG9hZGluZ0RpYWxvZ1VJIGV4dGVuZHMgRGlhbG9nIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJEaWFsb2dcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjo2NDAsXCJhdXRvRGVzdHJveUF0Q2xvc2VkXCI6ZmFsc2V9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkFuaW1hdGlvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzIwLFwieFwiOjUwNCxcInNvdXJjZVwiOlwiYW5pL2xvYWQuYW5pXCIsXCJyb3RhdGlvblwiOi05MCxcInBpdm90WVwiOjAsXCJwaXZvdFhcIjowLFwiYXV0b1BsYXlcIjp0cnVlfSxcImNvbXBJZFwiOjEwfV0sXCJsb2FkTGlzdFwiOltcImFuaS9sb2FkLmFuaVwiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoTG9hZGluZ0RpYWxvZ1VJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkuZGlhbG9nLkxvYWRpbmdEaWFsb2dVSVwiLExvYWRpbmdEaWFsb2dVSSk7XHJcbn1cciJdfQ==
