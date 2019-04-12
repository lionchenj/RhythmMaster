import Event = Laya.Event;
import HttpRequest = Laya.HttpRequest;
export default class http extends Laya.Sprite {

    private hr: HttpRequest;

    constructor() {
        super();
    }

    post(push,data): void {
        this.hr = new HttpRequest();
        this.hr.once(Event.PROGRESS, this, this.onHttpRequestProgress);
        this.hr.once(Event.COMPLETE, this, this.onHttpRequestComplete);
        this.hr.once(Event.ERROR, this, this.onHttpRequestError);
        this.hr.send('http://xkxz.zhonghao.huo.inner.layabox.com/api/'+push,data, 'post', 'text');
    }

    onHttpRequestError(e: any): void {
        console.log(e);
    }

    onHttpRequestProgress(e: any): void {
        console.log(e)
    }

    onHttpRequestComplete(e: any): void {
        return this.hr.data;
    }
}