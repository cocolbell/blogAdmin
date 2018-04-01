
class FetchUtil {

    constructor () {
        this.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    }

    sendJson (data) {
        let body = typeof data == "object" ? JSON.stringify(data) : data;
        return fetch(this.url,{
            method: this.method,
            headers: this.headers,
            body: body
        });
    }

    get (url) {
        this.url = url || '';
        this.method = 'GET';
        return this;
    }

    post (url) {
        this.url = url || '';
        this.method = 'POST';
        return this;
    }

    send (data) {
        if (this.method == 'GET'){
            data && (this.url = this._obj2url(data));
            return fetch(this.url, {
                method: this.method,
                headers: this.headers
            })
        }
    }

    _obj2url (obj) {
        if (typeof obj != 'object') return false; 
        let arr = typeof obj == 'object' && Object.keys(obj);
        let arrStr = arr.map((key,i) => {
            return key + '=' + obj[key];
        })
        let param = arrStr.join("&");
        return this.url + "?" + param;
    }
}


export default FetchUtil