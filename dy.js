import cheerio from "assets://js/lib/cheerio.min.js";
import "assets://js/lib/crypto-js.js";
import "./mo1.js";
import "./mo2.js";
import "./mo4.js";
import 模板 from "./mo7.js";
import {
    gbkTool
} from "./mo3.js";
import "./mo5.js";
import "./mo6.js";
const _jinja2 = cheerio.jinja2;
cheerio.jinja2 = function(template, obj) {
    try {
        return jinja.render(template, obj)
    } catch (e) {
        console.log("新的jinja2库渲染失败,换回原始cheerio:" + e.message);
        return _jinja2(template, obj)
    }
};
let vercode = typeof pdfl === "function" ? "drpy2.1" : "drpy2";
const VERSION = vercode + " 3.9.51beta6 20241126";
const UpdateInfo = [{
    date: "20241126",
    title: "drpy更新，优化去广告算法",
    version: "3.9.51beta6 20241126",
    msg: `
 1. 更新龙头大佬提供的去广告算法  
       `
}, {
    date: "20241104",
    title: "drpy更新，增加新特性",
    version: "3.9.51beta5 20241104",
    msg: `
 1. rule增加 搜索验证标识 属性,可以不定义，默认为 '系统安全验证|请输入验证码' 
 2. rule增加 searchNoPage 属性，可以不定义，如果定义 1 将关闭该源的搜索翻页功能，超过1页直接返回空     
       `
}];

function getUpdateInfo() {
    return UpdateInfo.map(_o => {
        _o.msg = _o.msg.trim().split("\n").map(_it => _it.trim()).join("\n");
        return _o
    })
}

function init_test() {
    console.log("init_test_start");
    console.log("当前版本号:" + VERSION);
    console.log("本地代理地址:" + getProxyUrl());
    console.log(RKEY);
    console.log(JSON.stringify(rule));
    console.log("init_test_end")
}

function ocr_demo_test() {
    let img_base64 = `iVBORw0KGgoAAAANSUhEUgAAAIAAAAAoBAMAAADEX+97AAAAG1BMVEXz+/4thQTa7N6QwIFFkyNeokKozqDB3b93sWHFR+MEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABN0lEQVRIie2TQU+DQBCFt9vScvQpxR4xrcSjJCZ67JDGXsX+AdR4B3vpsSYm/m2HXaRLmuySepR3Gdidb/btDAjRq5dT96eCMlfBuzi1QLZUoZy2yz5sOvI+9iomaPEZ6nWnEtxqIyiM1RcAy44GNDhBXUjot/VVNweV1ah68FqWRyjKIOqAcyYF6rGcmpYnHzGt3fycNoMw0d3/THFu7hFSJ/8OXO6iTM8/KSg09obAzIHLO250LgQ0txOZSfgrV4Exdw98uGycJ0ErAeExZGhOmFHV9zHO6qVSj0MpLq7xZON56o++MjlsEgfVhbQWWME+xQX7J4V6zfi9A1Ly9rP1BvEXp+BbVJ/M77n+wfOIDVp51pZ4iBxvmj9AGrtvry6emwfKnVkW+ZRKd5ZNMvob36vXP9YPDmQki8QiCFAAAAAASUVORK5CYII=`;
    OcrApi.api = OCR_API;
    let code = OcrApi.classification(img_base64);
    log("测试验证码图片的ocr识别结果为:" + code)
}

function rsa_demo_test() {
    let t1 = (new Date).getTime();
    let pkcs1_public = `
-----BEGIN RSA PUBLIC KEY-----
MEgCQQCrI0pQ/ERRpJ3Ou190XJedFq846nDYP52rOtXyDxlFK5D3p6JJu2RwsKwy
lsQ9xY0xYPpRZUZKMEeR7e9gmRNLAgMBAAE=
-----END RSA PUBLIC KEY-----
`.trim();
    let pkcs1_public_pem = `
MEgCQQCrI0pQ/ERRpJ3Ou190XJedFq846nDYP52rOtXyDxlFK5D3p6JJu2RwsKwy
lsQ9xY0xYPpRZUZKMEeR7e9gmRNLAgMBAAE=
`.trim();
    let pkcs8_public = `
-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKsjSlD8RFGknc67X3Rcl50WrzjqcNg/
nas61fIPGUUrkPenokm7ZHCwrDKWxD3FjTFg+lFlRkowR5Ht72CZE0sCAwEAAQ==
-----END PUBLIC KEY-----`.trim();
    let pkcs8_public_pem = `
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKsjSlD8RFGknc67X3Rcl50WrzjqcNg/
nas61fIPGUUrkPenokm7ZHCwrDKWxD3FjTFg+lFlRkowR5Ht72CZE0sCAwEAAQ==
`.trim();
    let pkcs1_private = `
-----BEGIN RSA PRIVATE KEY-----
MIIBOAIBAAJBAKsjSlD8RFGknc67X3Rcl50WrzjqcNg/nas61fIPGUUrkPenokm7
ZHCwrDKWxD3FjTFg+lFlRkowR5Ht72CZE0sCAwEAAQI/b6OV1z65UokQaMvSeRXt
0Yv6wiYtduQI9qpq5nzy/ytaqsbBfClNTi/HifKPKxlRouWFkc518EQI8LBxoarJ
AiEA4DaONMplV8PQNa3TKn2F+SDEvLOCjdL0kHKdN90Ti28CIQDDZnTBaHgZwZbA
hS7Bbf5yvwjWMhO6Y7l04/Qm7R+35QIgPuQuqXIoUSD080mp1N5WyRW++atksIF+
5lGv9e6GP/MCICnj8y/rl6Pd7tXDN6zcSeqLrfdNsREKhB3dKOCXgW9JAiAFYtFS
EJNBXVRTK42SNsZ2hJ/9xLwOwnH2epT8Q43s3Q==
-----END RSA PRIVATE KEY-----
`.trim();
    let pkcs8_private = `
-----BEGIN PRIVATE KEY-----
MIIBUgIBADANBgkqhkiG9w0BAQEFAASCATwwggE4AgEAAkEAqyNKUPxEUaSdzrtf
dFyXnRavOOpw2D+dqzrV8g8ZRSuQ96eiSbtkcLCsMpbEPcWNMWD6UWVGSjBHke3v
YJkTSwIDAQABAj9vo5XXPrlSiRBoy9J5Fe3Ri/rCJi125Aj2qmrmfPL/K1qqxsF8
KU1OL8eJ8o8rGVGi5YWRznXwRAjwsHGhqskCIQDgNo40ymVXw9A1rdMqfYX5IMS8
s4KN0vSQcp033ROLbwIhAMNmdMFoeBnBlsCFLsFt/nK/CNYyE7pjuXTj9CbtH7fl
AiA+5C6pcihRIPTzSanU3lbJFb75q2SwgX7mUa/17oY/8wIgKePzL+uXo93u1cM3
rNxJ6out902xEQqEHd0o4JeBb0kCIAVi0VIQk0FdVFMrjZI2xnaEn/3EvA7CcfZ6
lPxDjezd
-----END PRIVATE KEY-----
`.trim();
    let data = `
NodeRsa
这是node-rsa 现在修改集成在drpy里使用`.trim();
    let encryptedWithPublic = NODERSA.encryptRSAWithPublicKey(data, pkcs1_public, {
        outputEncoding: "base64",
        options: {
            environment: "browser",
            encryptionScheme: "pkcs1_oaep"
        }
    });
    console.log("公钥加密");
    console.log(encryptedWithPublic);
    let decryptedWithPrivate = NODERSA.decryptRSAWithPrivateKey(encryptedWithPublic, pkcs1_private, {
        options: {
            environment: "browser",
            encryptionScheme: "pkcs1_oaep"
        }
    });
    console.log("私钥解密");
    console.log(decryptedWithPrivate);
    let pkcs1_sha256_sign = NODERSA.sign("1", pkcs1_private, {
        outputEncoding: "base64",
        options: {
            environment: "browser",
            encryptionScheme: "pkcs1",
            signingScheme: "pkcs1-sha256"
        }
    });
    console.log("pkcs1_sha256_sign");
    console.log(pkcs1_sha256_sign);
    let pkcs1_sha256_sign_verify = NODERSA.verify("1", "Oulx2QrgeipKYBtqEDqFb2s/+ndk2cGQxO4CkhU7iBM1vyNmmvqubpsmeoUuN3waGrYZLknSEdwBkfv0tUMpFQ==", pkcs1_private, {
        options: {
            environment: "browser",
            encryptionScheme: "pkcs1",
            signingScheme: "pkcs1-sha256"
        }
    });
    console.log("pkcs1_sha256_sign_verify");
    console.log(pkcs1_sha256_sign_verify);
    let pkcs1_oaep_sha256 = NODERSA.encryptRSAWithPublicKey(data, `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEA5KOq1gRNyllLNWKQy8sGpZE3Q1ULLSmzZw+eaAhj9lvqn7IsT1du
SYn08FfoOA2qMwtz+1O2l1mgzNoSVCyVpVabnTG+C9XKeZXAnJHd8aYA7l7Sxhdm
kte+iymYZ0ZBPzijo8938iugtVvqi9UgDmnY3u/NlQDqiL5BGqSxSTd/Sgmy3zD8
PYzEa3wD9vehQ5fZZ45vKIq8GNVh2Z8+IGO85FF1OsN7+b2yGJa/FmDDNn0+HP+m
PfI+kYBqEVpo0Ztbc3UdxgFwGC8O1n8AQyriwHnSOtIiuBH62J/7qyC/3LEAApRb
Dd9YszqzmODjQUddZKHmvc638VW+azc0EwIDAQAB
-----END RSA PUBLIC KEY-----
`, {
        outputEncoding: "base64",
        options: {
            environment: "browser",
            encryptionScheme: {
                scheme: "pkcs1_oaep",
                hash: "sha256"
            }
        }
    });
    console.log("pkcs1_oaep_sha256");
    console.log(pkcs1_oaep_sha256);
    decryptedWithPrivate = NODERSA.decryptRSAWithPrivateKey("kSZesAAyYh2hdsQnYMdGqb6gKAzTauBKouvBzWcc4+F8RvGd0nwO6mVkUMVilPgUuNxjEauHayHiY8gI3Py45UI3+km0rSGyHrS6dHiHgCkMejXHieglYzAB0IxX3Jkm4z/66bdB/D+GFy0oct5fGCMI1UHPjEAYOsazJDa8lBFNbjiWFeb/qiZtIx3vGM7KYPAZzyRf/zPbbQ8zy9xOmRuOl5nnIxgo0Okp3KO/RIPO4GZOSBA8f2lx1UtNwwrXAMpcNavtoqHVcjJ/9lcotXYQFrn5b299pSIRf2gVm8ZJ31SK6Z8cc14nKtvgnmsgClDzIXJ1o1RcDK+knVAySg==", `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA5KOq1gRNyllLNWKQy8sGpZE3Q1ULLSmzZw+eaAhj9lvqn7Is
T1duSYn08FfoOA2qMwtz+1O2l1mgzNoSVCyVpVabnTG+C9XKeZXAnJHd8aYA7l7S
xhdmkte+iymYZ0ZBPzijo8938iugtVvqi9UgDmnY3u/NlQDqiL5BGqSxSTd/Sgmy
3zD8PYzEa3wD9vehQ5fZZ45vKIq8GNVh2Z8+IGO85FF1OsN7+b2yGJa/FmDDNn0+
HP+mPfI+kYBqEVpo0Ztbc3UdxgFwGC8O1n8AQyriwHnSOtIiuBH62J/7qyC/3LEA
ApRbDd9YszqzmODjQUddZKHmvc638VW+azc0EwIDAQABAoIBADZ/QGgUzInvsLp/
zO2WbfYm39o/uhNAvk9RbLt1TIZbMFhyOpeKynHi3Swwd9xsfWX/U9zS/lGi/m31
iKrhmaW4OA1G3vqpMcK7TBbFufYwUEaA+ZJX344euH8pIfdzyneMQ4z3Far2dS7l
QsmjuilVV2kEFadveXewiYoVOWCu00w6bN8wy2SIHlQn+kIL6HQhWz12iKKflIKu
eGRdzLHsKmBt6WbY1Wuhx7HU0fAKdlBDPxCHNlI+kybUYE9o5C2vJiaVM5wqJBgZ
8Dz8kt1QbLJ910JoLXkLVQ8uC8NJKQwFtqQjTGPnEq0+wbgz6Ij599rKZkwW/xq9
l6KoUiECgYEA6Ah42tVdkNW047f03xVYXFH96RgorHRS36mR8Y+ONUq1fwKidovC
WjwVujt4OPf3l1W6iyn/F6cu/bsmvPrSc3HTN0B1V31QK4OjgetxQ2PSbTldH02J
NPzkt+v+cPxXpx/P5mgt7Weefw5txU547KubGrHUV5rBKFtIx9pj16MCgYEA/EF0
o19+D24DZAPwlDS5VbEd7FStnwY4oQ5PqbuNOSbSJLMWU0AqzXcRokp8UTyCZ0X3
ATkS1REq97kShCuR+npTR6a6DlY7sdpPI1SMLNajgB2tkx0EOzX+PfNIbHUd4jpJ
I0ZMAHv/OOtkzQHDaeTWBTrzsWm6/nTiykfduNECgYEA46AMD4HpPECqKAs66e5i
tI6q7JSKskObWVdcmQEfnSAhVOwcvPb2Ptda6UuV8S0xcwDi88rLOUUFUFzc79+P
vTkY38cYVi/VChsluDpk7ptqv0PbGu5Rf+3n4pZdEjI7OvR2W64wAAn67uIUxc7p
yiO/ET0K9rYWb6S9jXGtKMkCgYEA2kPAqoO7zZoBMQ7/oR0lp/HC1HRIbiqx4RlC
8Lgpb+QZPEwA6zPAVVvLVENi4d+bbcRp/xLlKpraNNJcJSSWAMbLPFoU7sbKjA87
HnTPfRSTEA2d3Ibk3F7Rh8TzS3Ti0JZiJjVzGZAwu41iAMifzwaD8K6boUy80eNN
QH2CaaECgYBUsLYvC/MiYg3w+LGOONuQongoVUXjGqnw2bjVa9RK7lwRdXPUqJ51
MpVO98IkoLvGSI/0sGNP3GKNhC+eMGjJAVwFyEuOn+JsmMv9Y9uStIVi5tIHIhKw
m7mp8il0kaftHdSxTbspG3tZ2fjIiFIZkLEOmRpd7ogWumgOajzUdA==
-----END RSA PRIVATE KEY-----`, {
        options: {
            environment: "browser",
            encryptionScheme: "pkcs1_oaep"
        }
    });
    console.log("decryptedWithPrivate");
    console.log(decryptedWithPrivate);
    (() => {
        let key = new NODERSA.NodeRSA({
            b: 1024
        });
        key.setOptions({
            encryptionScheme: "pkcs1"
        });
        let text = `你好drpy node-ras`;
        let encrypted = key.encrypt(text, "base64");
        console.log("encrypted: ", encrypted);
        const decrypted = key.decrypt(encrypted, "utf8");
        console.log("decrypted: ", decrypted)
    })();
    let t2 = (new Date).getTime();
    console.log("rsa_demo_test 测试耗时:" + (t2 - t1) + "毫秒")
}

function pre() {
    if (typeof rule.预处理 === "string" && rule.预处理 && rule.预处理.trim()) {
        let code = rule.预处理.trim();
        console.log("执行预处理代码:" + code);
        if (code.startsWith("js:")) {
            code = code.replace("js:", "")
        }
        try {
            eval(code)
        } catch (e) {
            console.log(`预处理执行失败:${e.message}`)
        }
    }
}
let rule = {};
const MOBILE_UA = "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36";
const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36";
const UA = "Mozilla/5.0";
const UC_UA = "Mozilla/5.0 (Linux; U; Android 9; zh-CN; MI 9 Build/PKQ1.181121.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.5.5.1035 Mobile Safari/537.36";
const IOS_UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";
const RULE_CK = "cookie";
const CATE_EXCLUDE = "首页|留言|APP|下载|资讯|新闻|动态";
const TAB_EXCLUDE = "猜你|喜欢|下载|剧情|榜|评论";
const OCR_RETRY = 3;
const OCR_API = "https://api.nn.ci/ocr/b64/text";
if (typeof MY_URL === "undefined") {
    var MY_URL
}
var HOST;
var RKEY;
var fetch;
var print;
var log;
var rule_fetch_params;
var fetch_params;
var oheaders;
var _pdfh;
var _pdfa;
var _pd;
const DOM_CHECK_ATTR = /(url|src|href|-original|-src|-play|-url|style)$/;
const SPECIAL_URL = /^(ftp|magnet|thunder|ws):/;
const NOADD_INDEX = /:eq|:lt|:gt|:first|:last|^body$|^#/;
const URLJOIN_ATTR = /(url|src|href|-original|-src|-play|-url|style)$|^(data-|url-|src-)/;
const SELECT_REGEX = /:eq|:lt|:gt|#/g;
const SELECT_REGEX_A = /:eq|:lt|:gt/g;
const $js = {
    toString(func) {
        let strfun = func.toString();
        return strfun.replace(/^\(\)(\s+)?=>(\s+)?\{/, "js:").replace(/\}$/, "")
    }
};

function window_b64() {
    let b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

    function btoa(str) {
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 255;
            if (i == len) {
                out += b64map.charAt(c1 >> 2);
                out += b64map.charAt((c1 & 3) << 4);
                out += "==";
                break
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += b64map.charAt(c1 >> 2);
                out += b64map.charAt((c1 & 3) << 4 | (c2 & 240) >> 4);
                out += b64map.charAt((c2 & 15) << 2);
                out += "=";
                break
            }
            c3 = str.charCodeAt(i++);
            out += b64map.charAt(c1 >> 2);
            out += b64map.charAt((c1 & 3) << 4 | (c2 & 240) >> 4);
            out += b64map.charAt((c2 & 15) << 2 | (c3 & 192) >> 6);
            out += b64map.charAt(c3 & 63)
        }
        return out
    }

    function atob(str) {
        var c1, c2, c3, c4;
        var i, len, out;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            do {
                c1 = base64DecodeChars[str.charCodeAt(i++) & 255]
            } while (i < len && c1 == -1);
            if (c1 == -1) break;
            do {
                c2 = base64DecodeChars[str.charCodeAt(i++) & 255]
            } while (i < len && c2 == -1);
            if (c2 == -1) break;
            out += String.fromCharCode(c1 << 2 | (c2 & 48) >> 4);
            do {
                c3 = str.charCodeAt(i++) & 255;
                if (c3 == 61) return out;
                c3 = base64DecodeChars[c3]
            } while (i < len && c3 == -1);
            if (c3 == -1) break;
            out += String.fromCharCode((c2 & 15) << 4 | (c3 & 60) >> 2);
            do {
                c4 = str.charCodeAt(i++) & 255;
                if (c4 == 61) return out;
                c4 = base64DecodeChars[c4]
            } while (i < len && c4 == -1);
            if (c4 == -1) break;
            out += String.fromCharCode((c3 & 3) << 6 | c4)
        }
        return out
    }
    return {
        atob: atob,
        btoa: btoa
    }
}
if (typeof atob !== "function" || typeof btoa !== "function") {
    var {
        atob,
        btoa
    } = window_b64()
}
if (typeof Object.assign !== "function") {
    Object.assign = function() {
        let target = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            let source = arguments[i];
            for (let key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                }
            }
        }
        return target
    }
}
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        if (typeof start !== "number") {
            start = 0
        }
        if (start + search.length > this.length) {
            return false
        } else {
            return this.indexOf(search, start) !== -1
        }
    }
}
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
        value: function(searchElement, fromIndex) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined')
            }
            var o = Object(this);
            var len = o.length >>> 0;
            if (len === 0) {
                return false
            }
            var n = fromIndex | 0;
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            while (k < len) {
                if (o[k] === searchElement) {
                    return true
                }
                k++
            }
            return false
        },
        enumerable: false
    })
}
if (typeof String.prototype.startsWith !== "function") {
    String.prototype.startsWith = function(prefix) {
        return this.slice(0, prefix.length) === prefix
    }
}
if (typeof String.prototype.endsWith !== "function") {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1
    }
}
Object.defineProperty(Object.prototype, "myValues", {
    value: function(obj) {
        if (obj == null) {
            throw new TypeError("Cannot convert undefined or null to object")
        }
        var res = [];
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                res.push(obj[k])
            }
        }
        return res
    },
    enumerable: false
});
if (typeof Object.prototype.values !== "function") {
    Object.defineProperty(Object.prototype, "values", {
        value: function(obj) {
            if (obj == null) {
                throw new TypeError("Cannot convert undefined or null to object")
            }
            var res = [];
            for (var k in obj) {
                if (obj.hasOwnProperty(k)) {
                    res.push(obj[k])
                }
            }
            return res
        },
        enumerable: false
    })
}
if (typeof Array.prototype.join !== "function") {
    Object.defineProperty(Array.prototype, "join", {
        value: function(emoji) {
            emoji = emoji || "";
            let self = this;
            let str = "";
            let i = 0;
            if (!Array.isArray(self)) {
                throw String(self) + "is not Array"
            }
            if (self.length === 0) {
                return ""
            }
            if (self.length === 1) {
                return String(self[0])
            }
            i = 1;
            str = this[0];
            for (; i < self.length; i++) {
                str += String(emoji) + String(self[i])
            }
            return str
        },
        enumerable: false
    })
}
if (typeof Array.prototype.toReversed !== "function") {
    Object.defineProperty(Array.prototype, "toReversed", {
        value: function() {
            const clonedList = this.slice();
            const reversedList = clonedList.reverse();
            return reversedList
        },
        enumerable: false
    })
}
Object.defineProperty(Array.prototype, "append", {
    value: Array.prototype.push,
    enumerable: false
});
Object.defineProperty(String.prototype, "strip", {
    value: String.prototype.trim,
    enumerable: false
});
Object.defineProperty(String.prototype, "rstrip", {
    value: function(chars) {
        let regex = new RegExp(chars + "$");
        return this.replace(regex, "")
    },
    enumerable: false
});

function 是否正版(vipUrl) {
    let flag = new RegExp("qq.com|iqiyi.com|youku.com|mgtv.com|bilibili.com|sohu.com|ixigua.com|pptv.com|miguvideo.com|le.com|1905.com|fun.tv");
    return flag.test(vipUrl)
}

function urlDeal(vipUrl) {
    if (!vipUrl) {
        return ""
    }
    if (!是否正版(vipUrl)) {
        return vipUrl
    }
    if (!/miguvideo/.test(vipUrl)) {
        vipUrl = vipUrl.split("#")[0].split("?")[0]
    }
    return vipUrl
}

function setResult(d) {
    if (!Array.isArray(d)) {
        return []
    }
    VODS = [];
    d.forEach(function(it) {
        let obj = {
            vod_id: it.url || "",
            vod_name: it.title || "",
            vod_remarks: it.desc || "",
            vod_content: it.content || "",
            vod_pic: it.pic_url || it.img || ""
        };
        let keys = Object.keys(it);
        if (keys.includes("tname")) {
            obj.type_name = it.tname || ""
        }
        if (keys.includes("tid")) {
            obj.type_id = it.tid || ""
        }
        if (keys.includes("year")) {
            obj.vod_year = it.year || ""
        }
        if (keys.includes("actor")) {
            obj.vod_actor = it.actor || ""
        }
        if (keys.includes("director")) {
            obj.vod_director = it.director || ""
        }
        if (keys.includes("area")) {
            obj.vod_area = it.area || ""
        }
        VODS.push(obj)
    });
    return VODS
}

function setResult2(res) {
    VODS = res.list || [];
    return VODS
}

function setHomeResult(res) {
    if (!res || typeof res !== "object") {
        return []
    }
    return setResult(res.list)
}

function rc(js) {
    if (js === "maomi_aes.js") {
        var a = CryptoJS.enc.Utf8.parse("625222f9149e961d");
        var t = CryptoJS.enc.Utf8.parse("5efdtf6060e2o330");
        return {
            De: function(word) {
                word = CryptoJS.enc.Hex.parse(word);
                return CryptoJS.AES.decrypt(CryptoJS.enc.Base64.stringify(word), a, {
                    iv: t,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }).toString(CryptoJS.enc.Utf8)
            },
            En: function(word) {
                var Encrypted = CryptoJS.AES.encrypt(word, a, {
                    iv: t,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                });
                return Encrypted.ciphertext.toString()
            }
        }
    }
    return {}
}

function maoss(jxurl, ref, key) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    eval(getCryptoJS());
    try {
        var getVideoInfo = function(text) {
            return CryptoJS.AES.decrypt(text, key, {
                iv: iv,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8)
        };
        var token_key = key == undefined ? "dvyYRQlnPRCMdQSe" : key;
        if (ref) {
            var html = request(jxurl, {
                headers: {
                    Referer: ref
                }
            })
        } else {
            var html = request(jxurl)
        }
        if (html.indexOf("&btwaf=") != -1) {
            html = request(jxurl + "&btwaf" + html.match(/&btwaf(.*?)"/)[1], {
                headers: {
                    Referer: ref
                }
            })
        }
        var token_iv = html.split('_token = "')[1].split('"')[0];
        var key = CryptoJS.enc.Utf8.parse(token_key);
        var iv = CryptoJS.enc.Utf8.parse(token_iv);
        eval(html.match(/var config = {[\s\S]*?}/)[0] + "");
        if (!config.url.startsWith("http")) {
            config.url = CryptoJS.AES.decrypt(config.url, key, {
                iv: iv,
                padding: CryptoJS.pad.Pkcs7
            }).toString(CryptoJS.enc.Utf8)
        }
        return config.url
    } catch (e) {
        return ""
    }
}

function urlencode(str) {
    str = (str + "").toString();
    return encodeURIComponent(str).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
}

function encodeUrl(str) {
    if (typeof encodeURI == "function") {
        return encodeURI(str)
    } else {
        str = (str + "").toString();
        return encodeURIComponent(str).replace(/%2F/g, "/").replace(/%3F/g, "?").replace(/%3A/g, ":").replace(/%40/g, "@").replace(/%3D/g, "=").replace(/%3A/g, ":").replace(/%2C/g, ",").replace(/%2B/g, "+").replace(/%24/g, "$")
    }
}

function base64Encode(text) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text))
}

function base64Decode(text) {
    return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(text))
}

function md5(text) {
    return CryptoJS.MD5(text).toString()
}

function uint8ArrayToBase64(uint8Array) {
    let binaryString = String.fromCharCode.apply(null, Array.from(uint8Array));
    return btoa(binaryString)
}

function Utf8ArrayToStr(array) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                out += String.fromCharCode(c);
                break;
            case 12:
            case 13:
                char2 = array[i++];
                out += String.fromCharCode((c & 31) << 6 | char2 & 63);
                break;
            case 14:
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode((c & 15) << 12 | (char2 & 63) << 6 | (char3 & 63) << 0);
                break
        }
    }
    return out
}

function gzip(str) {
    let arr = pako.gzip(str, {});
    return uint8ArrayToBase64(arr)
}

function ungzip(b64Data) {
    let strData = atob(b64Data);
    const charData = strData.split("").map(function(x) {
        return x.charCodeAt(0)
    });
    const binData = new Uint8Array(charData);
    const data = pako.inflate(binData);
    return Utf8ArrayToStr(data)
}

function encodeStr(input, encoding) {
    encoding = encoding || "gbk";
    if (encoding.startsWith("gb")) {
        const strTool = gbkTool();
        input = strTool.encode(input)
    }
    return input
}

function decodeStr(input, encoding) {
    encoding = encoding || "gbk";
    if (encoding.startsWith("gb")) {
        const strTool = gbkTool();
        input = strTool.decode(input)
    }
    return input
}

function getCryptoJS() {
    return 'console.log("CryptoJS已装载");'
}
const RSA = {
    decode: function(data, key, option) {
        option = option || {};
        if (typeof JSEncrypt === "function") {
            let chunkSize = option.chunkSize || 117;
            let privateKey = this.getPrivateKey(key);
            const decryptor = new JSEncrypt;
            decryptor.setPrivateKey(privateKey);
            let uncrypted = "";
            uncrypted = decryptor.decryptUnicodeLong(data);
            return uncrypted
        } else {
            return false
        }
    },
    encode: function(data, key, option) {
        option = option || {};
        if (typeof JSEncrypt === "function") {
            let chunkSize = option.chunkSize || 117;
            let publicKey = this.getPublicKey(key);
            const encryptor = new JSEncrypt;
            encryptor.setPublicKey(publicKey);
            let encrypted = "";
            encrypted = encryptor.encryptUnicodeLong(data);
            return encrypted
        } else {
            return false
        }
    },
    fixKey(key, prefix, endfix) {
        if (!key.includes(prefix)) {
            key = prefix + key
        }
        if (!key.includes(endfix)) {
            key += endfix
        }
        return key
    },
    getPrivateKey(key) {
        let prefix = "-----BEGIN RSA PRIVATE KEY-----";
        let endfix = "-----END RSA PRIVATE KEY-----";
        return this.fixKey(key, prefix, endfix)
    },
    getPublicKey(key) {
        let prefix = "-----BEGIN PUBLIC KEY-----";
        let endfix = "-----END PUBLIC KEY-----";
        return this.fixKey(key, prefix, endfix)
    }
};

function getProxyUrl() {
    if (typeof getProxy === "function") {
        return getProxy(true)
    } else {
        return "http://127.0.0.1:9978/proxy?do=js"
    }
}

function fixAdM3u8(m3u8_text, m3u8_url, ad_remove) {
    if (!m3u8_text && !m3u8_url || !m3u8_text && m3u8_url && !m3u8_url.startsWith("http")) {
        return ""
    }
    if (!m3u8_text) {
        log("m3u8_url:" + m3u8_url);
        m3u8_text = request(m3u8_url)
    }
    log("len(m3u8_text):" + m3u8_text.length);
    if (!ad_remove) {
        return m3u8_text
    }
    if (ad_remove.startsWith("reg:")) {
        ad_remove = ad_remove.slice(4)
    } else if (ad_remove.startsWith("js:")) {
        ad_remove = ad_remove.slice(3)
    }
    let m3u8_start = m3u8_text.slice(0, m3u8_text.indexOf("#EXTINF")).trim();
    let m3u8_body = m3u8_text.slice(m3u8_text.indexOf("#EXTINF"), m3u8_text.indexOf("#EXT-X-ENDLIST")).trim();
    let m3u8_end = m3u8_text.slice(m3u8_text.indexOf("#EXT-X-ENDLIST")).trim();
    let murls = [];
    let m3_body_list = m3u8_body.split("\n");
    let m3_len = m3_body_list.length;
    let i = 0;
    while (i < m3_len) {
        let mi = m3_body_list[i];
        let mi_1 = m3_body_list[i + 1];
        if (mi.startsWith("#EXTINF")) {
            murls.push([mi, mi_1].join("&"));
            i += 2
        } else if (mi.startsWith("#EXT-X-DISCONTINUITY")) {
            let mi_2 = m3_body_list[i + 2];
            murls.push([mi, mi_1, mi_2].join("&"));
            i += 3
        } else {
            break
        }
    }
    let new_m3u8_body = [];
    for (let murl of murls) {
        if (ad_remove && new RegExp(ad_remove).test(murl)) {} else {
            let murl_list = murl.split("&");
            if (!murl_list[murl_list.length - 1].startsWith("http") && m3u8_url.startsWith("http")) {
                murl_list[murl_list.length - 1] = urljoin(m3u8_url, murl_list[murl_list.length - 1])
            }
            murl_list.forEach(it => {
                new_m3u8_body.push(it)
            })
        }
    }
    new_m3u8_body = new_m3u8_body.join("\n").trim();
    m3u8_text = [m3u8_start, new_m3u8_body, m3u8_end].join("\n").trim();
    return m3u8_text
}

function fixAdM3u8Ai(m3u8_url, headers) {
    let ts = (new Date).getTime();
    let option = headers ? {
        headers: headers
    } : {};

    function b(s1, s2) {
        let i = 0;
        while (i < s1.length) {
            if (s1[i] !== s2[i]) {
                break
            }
            i++
        }
        return i
    }

    function reverseString(str) {
        return str.split("").reverse().join("")
    }
    let m3u8 = request(m3u8_url, option);
    m3u8 = m3u8.trim().split("\n").map(it => it.startsWith("#") ? it : urljoin(m3u8_url, it)).join("\n");
    m3u8 = m3u8.replace(/\n\n/gi, "\n");
    let last_url = m3u8.split("\n").slice(-1)[0];
    if (last_url.length < 5) {
        last_url = m3u8.split("\n").slice(-2)[0]
    }
    if (last_url.includes(".m3u8") && last_url !== m3u8_url) {
        m3u8_url = urljoin2(m3u8_url, last_url);
        log("嵌套的m3u8_url:" + m3u8_url);
        m3u8 = request(m3u8_url, option)
    }
    let s = m3u8.trim().split("\n").filter(it => it.trim()).join("\n");
    let ss = s.split("\n");
    if (m3u8_url.indexOf("ffzy") > 0) {
        let j = 0,
            k1 = 0,
            m = 0,
            n = 0,
            t = 0;
        let s2 = "";
        for (let i = 0; i < ss.length; i++) {
            let s = ss[i];
            let s1 = "";
            if (s.startsWith("#EXTINF")) {
                s1 = s.slice(8);
                n++;
                if (n == 1) k1 = i;
                if (s2.indexOf(s1) == -1) {
                    s2 = s2 + s1;
                    m++
                }
                t = t + parseFloat(s1);
                i++;
                s = ss[i]
            }
            if (s.startsWith("#EXT-X-DISCONTINUITY")) {
                if (n == 5) {
                    log("n:" + n);
                    log("m:" + m);
                    for (let j = k1; j < k1 + n * 2; j++) {
                        log(ss[j])
                    }
                    log("广告位置：" + k1);
                    log("数据条数:" + n);
                    log("数据种类:" + m);
                    log("广告时间：" + t.toFixed(5));
                    ss.splice(k1, 2 * n + 1);
                    i = i - 2 * n + 1
                }
                t = 0;
                m = 0;
                n = 0;
                s2 = ""
            }
        }
    }
    let firststr = "";
    let maxl = 0;
    let kk = 0;
    let kkk1 = 1;
    let kkk2 = 0;
    let secondstr = "";
    for (let i = 0; i < ss.length; i++) {
        let s = ss[i];
        if (!s.startsWith("#")) {
            if (kk == 0) firststr = s;
            if (kk > 0) {
                if (maxl > b(firststr, s) + 1) {
                    if (secondstr.length < 5) secondstr = s;
                    kkk2++
                } else {
                    maxl = b(firststr, s);
                    kkk1++
                }
            }
            kk++;
            if (kk >= 30) break
        }
    }
    if (kkk2 > kkk1) firststr = secondstr;
    let firststrlen = firststr.length;
    let ml = Math.round(ss.length / 2).toString().length;
    let maxc = 0;
    let laststr = ss.toReversed().find(x => {
        if (!x.startsWith("#")) {
            let k = b(reverseString(firststr), reverseString(x));
            maxl = b(firststr, x);
            maxc++;
            if (firststrlen - maxl <= ml + k || maxc > 10) {
                return true
            }
        }
        return false
    });
    log("最后一条切片：" + laststr);
    let ad_urls = [];
    for (let i = 0; i < ss.length; i++) {
        let s = ss[i];
        if (!s.startsWith("#")) {
            if (b(firststr, s) < maxl) {
                ad_urls.push(s);
                ss.splice(i - 1, 2);
                i = i - 2
            } else {
                ss[i] = urljoin(m3u8_url, s)
            }
        } else {
            ss[i] = s.replace(/URI=\"(.*)\"/, 'URI="' + urljoin(m3u8_url, "$1") + '"')
        }
    }
    log("处理的m3u8地址:" + m3u8_url);
    log("----广告地址----");
    log(ad_urls);
    m3u8 = ss.join("\n");
    log("处理耗时：" + ((new Date).getTime() - ts).toString());
    log(m3u8);
    return m3u8
}

function forceOrder(lists, key, option) {
    let start = Math.floor(lists.length / 2);
    let end = Math.min(lists.length - 1, start + 1);
    if (start >= end) {
        return lists
    }
    let first = lists[start];
    let second = lists[end];
    if (key) {
        try {
            first = first[key];
            second = second[key]
        } catch (e) {}
    }
    if (option && typeof option === "function") {
        try {
            first = option(first);
            second = option(second)
        } catch (e) {}
    }
    first += "";
    second += "";
    if (first.match(/(\d+)/) && second.match(/(\d+)/)) {
        let num1 = Number(first.match(/(\d+)/)[1]);
        let num2 = Number(second.match(/(\d+)/)[1]);
        if (num1 > num2) {
            lists.reverse()
        }
    }
    return lists
}
let VODS = [];
let VOD = {};
let TABS = [];
let LISTS = [];

function getQuery(url) {
    try {
        if (url.indexOf("?") > -1) {
            url = url.slice(url.indexOf("?") + 1)
        }
        let arr = url.split("#")[0].split("&");
        const resObj = {};
        arr.forEach(item => {
            let arr1 = item.split("=");
            let key = arr1[0];
            let value = arr1.slice(1).join("=");
            resObj[key] = value
        });
        return resObj
    } catch (err) {
        log(`getQuery发生错误:${e.message}`);
        return {}
    }
}

function urljoin(fromPath, nowPath) {
    fromPath = fromPath || "";
    nowPath = nowPath || "";
    return joinUrl(fromPath, nowPath)
}
var urljoin2 = urljoin;
const defaultParser = {
    pdfh: pdfh,
    pdfa: pdfa,
    pd: pd
};

function pdfh2(html, parse) {
    let html2 = html;
    try {
        if (typeof html !== "string") {
            html2 = html.rr(html.ele).toString()
        }
    } catch (e) {
        print(`html对象转文本发生了错误:${e.message}`)
    }
    let result = defaultParser.pdfh(html2, parse);
    let option = parse.includes("&&") ? parse.split("&&").slice(-1)[0] : parse.split(" ").slice(-1)[0];
    if (/style/.test(option.toLowerCase()) && /url\(/.test(result)) {
        try {
            result = result.match(/url\((.*?)\)/)[1];
            result = result.replace(/^['|"](.*)['|"]$/, "$1")
        } catch (e) {}
    }
    return result
}

function pdfa2(html, parse) {
    let html2 = html;
    try {
        if (typeof html !== "string") {
            html2 = html.rr(html.ele).toString()
        }
    } catch (e) {
        print(`html对象转文本发生了错误:${e.message}`)
    }
    return defaultParser.pdfa(html2, parse)
}

function pd2(html, parse, uri) {
    let ret = pdfh2(html, parse);
    if (typeof uri === "undefined" || !uri) {
        uri = ""
    }
    if (DOM_CHECK_ATTR.test(parse) && !SPECIAL_URL.test(ret)) {
        if (/http/.test(ret)) {
            ret = ret.slice(ret.indexOf("http"))
        } else {
            ret = urljoin(MY_URL, ret)
        }
    }
    return ret
}
const parseTags = {
    jsp: {
        pdfh: pdfh2,
        pdfa: pdfa2,
        pd: pd2
    },
    json: {
        pdfh(html, parse) {
            if (!parse || !parse.trim()) {
                return ""
            }
            if (typeof html === "string") {
                html = JSON.parse(html)
            }
            parse = parse.trim();
            if (!parse.startsWith("$.")) {
                parse = "$." + parse
            }
            parse = parse.split("||");
            for (let ps of parse) {
                let ret = cheerio.jp(ps, html);
                if (Array.isArray(ret)) {
                    ret = ret[0] || ""
                } else {
                    ret = ret || ""
                }
                if (ret && typeof ret !== "string") {
                    ret = ret.toString()
                }
                if (ret) {
                    return ret
                }
            }
            return ""
        },
        pdfa(html, parse) {
            if (!parse || !parse.trim()) {
                return ""
            }
            if (typeof html === "string") {
                html = JSON.parse(html)
            }
            parse = parse.trim();
            if (!parse.startsWith("$.")) {
                parse = "$." + parse
            }
            let ret = cheerio.jp(parse, html);
            if (Array.isArray(ret) && Array.isArray(ret[0]) && ret.length === 1) {
                return ret[0] || []
            }
            return ret || []
        },
        pd(html, parse) {
            let ret = parseTags.json.pdfh(html, parse);
            if (ret) {
                return urljoin(MY_URL, ret)
            }
            return ret
        }
    },
    jq: {
        pdfh(html, parse) {
            if (!html || !parse || !parse.trim()) {
                return ""
            }
            parse = parse.trim();
            let result = defaultParser.pdfh(html, parse);
            return result
        },
        pdfa(html, parse) {
            if (!html || !parse || !parse.trim()) {
                return []
            }
            parse = parse.trim();
            let result = defaultParser.pdfa(html, parse);
            print(`pdfa解析${parse}=>${result.length}`);
            return result
        },
        pd(html, parse, base_url) {
            if (!html || !parse || !parse.trim()) {
                return ""
            }
            parse = parse.trim();
            base_url = base_url || MY_URL;
            return defaultParser.pd(html, parse, base_url)
        }
    },
    getParse(p0) {
        if (p0.startsWith("jsp:")) {
            return this.jsp
        } else if (p0.startsWith("json:")) {
            return this.json
        } else if (p0.startsWith("jq:")) {
            return this.jq
        } else {
            return this.jq
        }
    }
};
const stringify = JSON.stringify;
const jsp = parseTags.jsp;
const jq = parseTags.jq;

function readFile(filePath) {
    filePath = filePath || "./uri.min.js";
    var fd = os.open(filePath);
    var buffer = new ArrayBuffer(1024);
    var len = os.read(fd, buffer, 0, 1024);
    console.log(len);
    let text = String.fromCharCode.apply(null, new Uint8Array(buffer));
    console.log(text);
    return text
}

function dealJson(html) {
    try {
        html = html.trim();
        if (!(html.startsWith("{") && html.endsWith("}") || html.startsWith("[") && html.endsWith("]"))) {
            html = "{" + html.match(/.*?\{(.*)\}/m)[1] + "}"
        }
    } catch (e) {}
    try {
        html = JSON.parse(html)
    } catch (e) {}
    return html
}
var OcrApi = {
    api: OCR_API,
    classification: function(img) {
        let code = "";
        try {
            log("通过drpy_ocr验证码接口过验证...");
            let html = "";
            if (this.api.endsWith("drpy/text")) {
                html = request(this.api, {
                    data: {
                        img: img
                    },
                    headers: {
                        "User-Agent": PC_UA
                    },
                    method: "POST"
                }, true)
            } else {
                html = post(this.api, {
                    body: img
                })
            }
            code = html || ""
        } catch (e) {
            log(`OCR识别验证码发生错误:${e.message}`)
        }
        return code
    }
};

function verifyCode(url) {
    let cnt = 0;
    let host = getHome(url);
    let cookie = "";
    while (cnt < OCR_RETRY) {
        try {
            let yzm_url = `${host}/index.php/verify/index.html`;
            console.log(`验证码链接:${yzm_url}`);
            let hhtml = request(yzm_url, {
                withHeaders: true,
                toBase64: true
            }, true);
            let json = JSON.parse(hhtml);
            if (!cookie) {
                let setCk = Object.keys(json).find(it => it.toLowerCase() === "set-cookie");
                cookie = setCk ? json[setCk].split(";")[0] : ""
            }
            console.log("cookie:" + cookie);
            let img = json.body;
            let code = OcrApi.classification(img);
            console.log(`第${cnt+1}次验证码识别结果:${code}`);
            let submit_url = `${host}/index.php/ajax/verify_check?type=search&verify=${code}`;
            console.log(submit_url);
            let html = request(submit_url, {
                headers: {
                    Cookie: cookie
                },
                method: "POST"
            });
            html = JSON.parse(html);
            if (html.msg === "ok") {
                console.log(`第${cnt+1}次验证码提交成功`);
                return cookie
            } else if (html.msg !== "ok" && cnt + 1 >= OCR_RETRY) {
                cookie = ""
            }
        } catch (e) {
            console.log(`第${cnt+1}次验证码提交失败:${e.message}`);
            if (cnt + 1 >= OCR_RETRY) {
                cookie = ""
            }
        }
        cnt += 1
    }
    return cookie
}

function setItem(k, v) {
    local.set(RKEY, k, v);
    console.log(`规则${RKEY}设置${k} => ${v}`)
}

function getItem(k, v) {
    return local.get(RKEY, k) || v
}

function clearItem(k) {
    local.delete(RKEY, k)
}

function getHome(url) {
    if (!url) {
        return ""
    }
    let tmp = url.split("//");
    url = tmp[0] + "//" + tmp[1].split("/")[0];
    try {
        url = decodeURIComponent(url)
    } catch (e) {}
    return url
}

function buildUrl(url, obj) {
    obj = obj || {};
    if (url.indexOf("?") < 0) {
        url += "?"
    }
    let param_list = [];
    let keys = Object.keys(obj);
    keys.forEach(it => {
        param_list.push(it + "=" + obj[it])
    });
    let prs = param_list.join("&");
    if (keys.length > 0 && !url.endsWith("?")) {
        url += "&"
    }
    url += prs;
    return url
}

function $require(url) {
    eval(request(url))
}

function keysToLowerCase(obj) {
    return Object.keys(obj).reduce((result, key) => {
        const newKey = key.toLowerCase();
        result[newKey] = obj[key];
        return result
    }, {})
}

function parseQueryString(query) {
    const params = {};
    query.split("&").forEach(function(part) {
        const regex = /^(.*?)=(.*)/;
        const match = part.match(regex);
        if (match) {
            const key = decodeURIComponent(match[1]);
            const value = decodeURIComponent(match[2]);
            params[key] = value
        }
    });
    return params
}

function encodeIfContainsSpecialChars(value) {
    const specialChars = ":/?#[]@!$'()*+,;=%";
    if (specialChars.split("").some(char => value.includes(char))) {
        return encodeURIComponent(value)
    }
    return value
}

function objectToQueryString(obj) {
    const encoded = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            encoded.push(encodeURIComponent(key) + "=" + encodeIfContainsSpecialChars(obj[key]))
        }
    }
    return encoded.join("&")
}

function request(url, obj, ocr_flag) {
    ocr_flag = ocr_flag || false;
    if (typeof obj === "undefined" || !obj || obj === {}) {
        if (!fetch_params || !fetch_params.headers) {
            let headers = {
                "User-Agent": MOBILE_UA
            };
            if (rule.headers) {
                Object.assign(headers, rule.headers)
            }
            if (!fetch_params) {
                fetch_params = {}
            }
            fetch_params.headers = headers
        }
        if (!fetch_params.headers.Referer) {
            fetch_params.headers.Referer = getHome(url)
        }
        obj = fetch_params
    } else {
        let headers = obj.headers || {};
        let keys = Object.keys(headers).map(it => it.toLowerCase());
        if (!keys.includes("user-agent")) {
            headers["User-Agent"] = MOBILE_UA;
            if (typeof fetch_params === "object" && fetch_params && fetch_params.headers) {
                let fetch_headers = keysToLowerCase(fetch_params.headers);
                if (fetch_headers["user-agent"]) {
                    headers["User-Agent"] = fetch_headers["user-agent"]
                }
            }
        }
        if (!keys.includes("referer")) {
            headers["Referer"] = getHome(url)
        }
        obj.headers = headers
    }
    if (rule.encoding && rule.encoding !== "utf-8" && !ocr_flag) {
        if (!obj.headers.hasOwnProperty("Content-Type") && !obj.headers.hasOwnProperty("content-type")) {
            obj.headers["Content-Type"] = "text/html; charset=" + rule.encoding
        }
    }
    if (typeof obj.body != "undefined" && obj.body && typeof obj.body === "string") {
        if (!obj.headers.hasOwnProperty("Content-Type") && !obj.headers.hasOwnProperty("content-type")) {
            obj.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=" + rule.encoding
        }
    } else if (typeof obj.body != "undefined" && obj.body && typeof obj.body === "object") {
        obj.data = obj.body;
        delete obj.body
    }
    if (!url) {
        return obj.withHeaders ? "{}" : ""
    }
    if (obj.toBase64) {
        obj.buffer = 2;
        delete obj.toBase64
    }
    if (obj.redirect === false) {
        obj.redirect = 0
    }
    if (obj.headers.hasOwnProperty("Content-Type") || obj.headers.hasOwnProperty("content-type")) {
        let _contentType = obj.headers["Content-Type"] || obj.headers["content-type"] || "";
        if (_contentType.includes("application/x-www-form-urlencoded")) {
            log("custom body is application/x-www-form-urlencoded");
            if (typeof obj.body == "string") {
                let temp_obj = parseQueryString(obj.body);
                console.log(JSON.stringify(temp_obj))
            }
        }
    }
    console.log(JSON.stringify(obj.headers));
    console.log("request:" + url + `|method:${obj.method||"GET"}|body:${obj.body||""}`);
    let res = req(url, obj);
    let html = res.content || "";
    if (obj.withHeaders) {
        let htmlWithHeaders = res.headers;
        htmlWithHeaders.body = html;
        return JSON.stringify(htmlWithHeaders)
    } else {
        return html
    }
}

function post(url, obj) {
    obj = obj || {};
    obj.method = "POST";
    return request(url, obj)
}

function reqCookie(url, obj, all_cookie) {
    obj = obj || {};
    obj.withHeaders = true;
    all_cookie = all_cookie || false;
    let html = request(url, obj);
    let json = JSON.parse(html);
    let setCk = Object.keys(json).find(it => it.toLowerCase() === "set-cookie");
    let cookie = setCk ? json[setCk] : "";
    if (Array.isArray(cookie)) {
        cookie = cookie.join(";")
    }
    if (!all_cookie) {
        cookie = cookie.split(";")[0]
    }
    html = json.body;
    return {
        cookie: cookie,
        html: html
    }
}
fetch = request;
print = function(data) {
    data = data || "";
    if (typeof data == "object" && Object.keys(data).length > 0) {
        try {
            data = JSON.stringify(data);
            console.log(data)
        } catch (e) {
            console.log(typeof data + ":" + data.length);
            return
        }
    } else if (typeof data == "object" && Object.keys(data).length < 1) {
        console.log("null object")
    } else {
        console.log(data)
    }
};
log = print;

function checkHtml(html, url, obj) {
    if (/\?btwaf=/.test(html)) {
        let btwaf = html.match(/btwaf(.*?)"/)[1];
        url = url.split("#")[0] + "?btwaf" + btwaf;
        print("宝塔验证访问链接:" + url);
        html = request(url, obj)
    }
    return html
}

function getCode(url, obj) {
    let html = request(url, obj);
    html = checkHtml(html, url, obj);
    return html
}

function getHtml(url) {
    let obj = {};
    if (rule.headers) {
        obj.headers = rule.headers
    }
    let cookie = getItem(RULE_CK, "");
    if (cookie) {
        if (obj.headers && !Object.keys(obj.headers).map(it => it.toLowerCase()).includes("cookie")) {
            log("历史无cookie,新增过验证后的cookie");
            obj.headers["Cookie"] = cookie
        } else if (obj.headers && obj.headers.cookie && obj.headers.cookie !== cookie) {
            obj.headers["Cookie"] = cookie;
            log("历史有小写过期的cookie,更新过验证后的cookie")
        } else if (obj.headers && obj.headers.Cookie && obj.headers.Cookie !== cookie) {
            obj.headers["Cookie"] = cookie;
            log("历史有大写过期的cookie,更新过验证后的cookie")
        } else if (!obj.headers) {
            obj.headers = {
                Cookie: cookie
            };
            log("历史无headers,更新过验证后的含cookie的headers")
        }
    }
    let html = getCode(url, obj);
    return html
}

function homeParse(homeObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let classes = [];
    if (homeObj.class_name && homeObj.class_url) {
        let names = homeObj.class_name.split("&");
        let urls = homeObj.class_url.split("&");
        let cnt = Math.min(names.length, urls.length);
        for (let i = 0; i < cnt; i++) {
            classes.push({
                type_id: urls[i],
                type_name: names[i]
            })
        }
    }
    if (homeObj.class_parse) {
        if (homeObj.class_parse.startsWith("js:")) {
            var input = homeObj.MY_URL;
            try {
                eval(homeObj.class_parse.replace("js:", ""));
                if (Array.isArray(input)) {
                    classes = input
                }
            } catch (e) {
                log(`通过js动态获取分类发生了错误:${e.message}`)
            }
        } else {
            let p = homeObj.class_parse.split(";");
            let p0 = p[0];
            let _ps = parseTags.getParse(p0);
            let is_json = p0.startsWith("json:");
            _pdfa = _ps.pdfa;
            _pdfh = _ps.pdfh;
            _pd = _ps.pd;
            MY_URL = rule.url;
            if (is_json) {
                try {
                    let cms_cate_url = homeObj.MY_URL.replace("ac=detail", "ac=list");
                    let html = homeObj.home_html || getHtml(cms_cate_url);
                    if (html) {
                        if (cms_cate_url === homeObj.MY_URL) {
                            homeHtmlCache = html
                        }
                        let list = _pdfa(html, p0.replace("json:", ""));
                        if (list && list.length > 0) {
                            classes = list
                        }
                    }
                } catch (e) {
                    console.log(e.message)
                }
            } else if (p.length >= 3 && !is_json) {
                try {
                    let html = homeObj.home_html || getHtml(homeObj.MY_URL);
                    if (html) {
                        homeHtmlCache = html;
                        let list = _pdfa(html, p0);
                        if (list && list.length > 0) {
                            list.forEach((it, idex) => {
                                try {
                                    let name = _pdfh(it, p[1]);
                                    if (homeObj.cate_exclude && new RegExp(homeObj.cate_exclude).test(name)) {
                                        return
                                    }
                                    let url = _pd(it, p[2]);
                                    if (p.length > 3 && p[3] && !homeObj.home_html) {
                                        let exp = new RegExp(p[3]);
                                        url = url.match(exp)[1]
                                    }
                                    classes.push({
                                        type_id: url.trim(),
                                        type_name: name.trim()
                                    })
                                } catch (e) {
                                    console.log(`分类列表定位第${idex}个元素正常报错:${e.message}`)
                                }
                            })
                        }
                    }
                } catch (e) {
                    console.log(e.message)
                }
            }
        }
    }
    classes = classes.filter(it => !homeObj.cate_exclude || !new RegExp(homeObj.cate_exclude).test(it.type_name));
    let resp = {
        class: classes
    };
    if (homeObj.filter) {
        resp.filters = homeObj.filter
    }
    console.log(JSON.stringify(resp));
    return JSON.stringify(resp)
}

function getPP(p, pn, pp, ppn) {
    try {
        let ps = p[pn] === "*" && pp.length > ppn ? pp[ppn] : p[pn];
        return ps
    } catch (e) {
        return ""
    }
}

function homeVodParse(homeVodObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let d = [];
    MY_URL = homeVodObj.homeUrl;
    console.log(MY_URL);
    let t1 = (new Date).getTime();
    let p = homeVodObj.推荐;
    print("p:" + p);
    if (p === "*" && rule.一级) {
        p = rule.一级;
        homeVodObj.double = false
    }
    if (!p || typeof p !== "string") {
        return "{}"
    }
    p = p.trim();
    let pp = rule.一级 ? rule.一级.split(";") : [];
    if (p.startsWith("js:")) {
        const TYPE = "home";
        var input = MY_URL;
        HOST = rule.host;
        eval(p.replace("js:", ""));
        d = VODS
    } else {
        p = p.split(";");
        if (!homeVodObj.double && p.length < 5) {
            return "{}"
        } else if (homeVodObj.double && p.length < 6) {
            return "{}"
        }
        let p0 = getPP(p, 0, pp, 0);
        let _ps = parseTags.getParse(p0);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        let is_json = p0.startsWith("json:");
        p0 = p0.replace(/^(jsp:|json:|jq:)/, "");
        let html = homeHtmlCache || getHtml(MY_URL);
        homeHtmlCache = undefined;
        if (is_json) {
            html = dealJson(html)
        }
        try {
            console.log("double:" + homeVodObj.double);
            if (homeVodObj.double) {
                let items = _pdfa(html, p0);
                let p1 = getPP(p, 1, pp, 0);
                let p2 = getPP(p, 2, pp, 1);
                let p3 = getPP(p, 3, pp, 2);
                let p4 = getPP(p, 4, pp, 3);
                let p5 = getPP(p, 5, pp, 4);
                let p6 = getPP(p, 6, pp, 5);
                for (let item of items) {
                    let items2 = _pdfa(item, p1);
                    for (let item2 of items2) {
                        try {
                            let title = _pdfh(item2, p2);
                            let img = "";
                            try {
                                img = _pd(item2, p3)
                            } catch (e) {}
                            let desc = "";
                            try {
                                desc = _pdfh(item2, p4)
                            } catch (e) {}
                            let links = [];
                            for (let _p5 of p5.split("+")) {
                                let link = !homeVodObj.detailUrl ? _pd(item2, _p5, MY_URL) : _pdfh(item2, _p5);
                                links.push(link)
                            }
                            let content;
                            if (p.length > 6 && p[6]) {
                                content = _pdfh(item2, p6)
                            } else {
                                content = ""
                            }
                            let vid = links.join("$");
                            if (rule.二级 === "*") {
                                vid = vid + "@@" + title + "@@" + img
                            }
                            let vod = {
                                vod_name: title,
                                vod_pic: img,
                                vod_remarks: desc,
                                vod_content: content,
                                vod_id: vid
                            };
                            d.push(vod)
                        } catch (e) {
                            console.log(`首页列表双层定位处理发生错误:${e.message}`)
                        }
                    }
                }
            } else {
                let items = _pdfa(html, p0);
                let p1 = getPP(p, 1, pp, 1);
                let p2 = getPP(p, 2, pp, 2);
                let p3 = getPP(p, 3, pp, 3);
                let p4 = getPP(p, 4, pp, 4);
                let p5 = getPP(p, 5, pp, 5);
                for (let item of items) {
                    try {
                        let title = _pdfh(item, p1);
                        let img = "";
                        try {
                            img = _pd(item, p2, MY_URL)
                        } catch (e) {}
                        let desc = "";
                        try {
                            desc = _pdfh(item, p3)
                        } catch (e) {}
                        let links = [];
                        for (let _p5 of p4.split("+")) {
                            let link = !homeVodObj.detailUrl ? _pd(item, _p5, MY_URL) : _pdfh(item, _p5);
                            links.push(link)
                        }
                        let content;
                        if (p.length > 5 && p[5]) {
                            content = _pdfh(item, p5)
                        } else {
                            content = ""
                        }
                        let vid = links.join("$");
                        if (rule.二级 === "*") {
                            vid = vid + "@@" + title + "@@" + img
                        }
                        let vod = {
                            vod_name: title,
                            vod_pic: img,
                            vod_remarks: desc,
                            vod_content: content,
                            vod_id: vid
                        };
                        d.push(vod)
                    } catch (e) {
                        console.log(`首页列表单层定位处理发生错误:${e.message}`)
                    }
                }
            }
        } catch (e) {}
    }
    let t2 = (new Date).getTime();
    console.log("加载首页推荐耗时:" + (t2 - t1) + "毫秒");
    if (rule.图片替换) {
        if (rule.图片替换.startsWith("js:")) {
            d.forEach(it => {
                try {
                    var input = it.vod_pic;
                    eval(rule.图片替换.trim().replace("js:", ""));
                    it.vod_pic = input
                } catch (e) {
                    log(`图片:${it.vod_pic}替换错误:${e.message}`)
                }
            })
        } else if (rule.图片替换.includes("=>")) {
            let replace_from = rule.图片替换.split("=>")[0];
            let replace_to = rule.图片替换.split("=>")[1];
            d.forEach(it => {
                if (it.vod_pic && it.vod_pic.startsWith("http")) {
                    it.vod_pic = it.vod_pic.replace(replace_from, replace_to)
                }
            })
        }
    }
    if (rule.图片来源) {
        d.forEach(it => {
            if (it.vod_pic && it.vod_pic.startsWith("http")) {
                it.vod_pic = it.vod_pic + rule.图片来源
            }
        })
    }
    if (d.length > 0) {
        print(d.slice(0, 2))
    }
    return JSON.stringify({
        list: d
    })
}

function categoryParse(cateObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let p = cateObj.一级;
    if (!p || typeof p !== "string") {
        return "{}"
    }
    let d = [];
    let url = cateObj.url.replaceAll("fyclass", cateObj.tid);
    if (cateObj.pg === 1 && url.includes("[") && url.includes("]")) {
        url = url.split("[")[1].split("]")[0]
    } else if (cateObj.pg > 1 && url.includes("[") && url.includes("]")) {
        url = url.split("[")[0]
    }
    if (rule.filter_url) {
        if (!/fyfilter/.test(url)) {
            if (!url.endsWith("&") && !rule.filter_url.startsWith("&")) {
                url += "&"
            }
            url += rule.filter_url
        } else {
            url = url.replace("fyfilter", rule.filter_url)
        }
        url = url.replaceAll("fyclass", cateObj.tid);
        let fl = cateObj.filter ? cateObj.extend : {};
        if (rule.filter_def && typeof rule.filter_def === "object") {
            try {
                if (Object.keys(rule.filter_def).length > 0 && rule.filter_def.hasOwnProperty(cateObj.tid)) {
                    let self_fl_def = rule.filter_def[cateObj.tid];
                    if (self_fl_def && typeof self_fl_def === "object") {
                        let fl_def = JSON.parse(JSON.stringify(self_fl_def));
                        fl = Object.assign(fl_def, fl)
                    }
                }
            } catch (e) {
                print(`合并不同分类对应的默认筛选出错:${e.message}`)
            }
        }
        let new_url;
        new_url = cheerio.jinja2(url, {
            fl: fl,
            fyclass: cateObj.tid
        });
        url = new_url
    }
    if (/fypage/.test(url)) {
        if (url.includes("(") && url.includes(")")) {
            let url_rep = url.match(/.*?\((.*)\)/)[1];
            let cnt_page = url_rep.replaceAll("fypage", cateObj.pg);
            let cnt_pg = eval(cnt_page);
            url = url.replaceAll(url_rep, cnt_pg).replaceAll("(", "").replaceAll(")", "")
        } else {
            url = url.replaceAll("fypage", cateObj.pg)
        }
    }
    MY_URL = url;
    console.log(MY_URL);
    p = p.trim();
    const MY_CATE = cateObj.tid;
    if (p.startsWith("js:")) {
        var MY_FL = cateObj.extend;
        const TYPE = "cate";
        var input = MY_URL;
        const MY_PAGE = cateObj.pg;
        var desc = "";
        eval(p.trim().replace("js:", ""));
        d = VODS
    } else {
        p = p.split(";");
        if (p.length < 5) {
            return "{}"
        }
        let _ps = parseTags.getParse(p[0]);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        let is_json = p[0].startsWith("json:");
        p[0] = p[0].replace(/^(jsp:|json:|jq:)/, "");
        try {
            let html = getHtml(MY_URL);
            if (html) {
                if (is_json) {
                    html = dealJson(html)
                }
                let list = _pdfa(html, p[0]);
                list.forEach(it => {
                    let links = p[4].split("+").map(p4 => {
                        return !rule.detailUrl ? _pd(it, p4, MY_URL) : _pdfh(it, p4)
                    });
                    let link = links.join("$");
                    let vod_id = rule.detailUrl ? MY_CATE + "$" + link : link;
                    let vod_name = _pdfh(it, p[1]).replace(/\n|\t/g, "").trim();
                    let vod_pic = _pd(it, p[2], MY_URL);
                    if (rule.二级 === "*") {
                        vod_id = vod_id + "@@" + vod_name + "@@" + vod_pic
                    }
                    d.push({
                        vod_id: vod_id,
                        vod_name: vod_name,
                        vod_pic: vod_pic,
                        vod_remarks: _pdfh(it, p[3]).replace(/\n|\t/g, "").trim()
                    })
                })
            }
        } catch (e) {
            console.log(e.message)
        }
    }
    if (rule.图片替换) {
        if (rule.图片替换.startsWith("js:")) {
            d.forEach(it => {
                try {
                    var input = it.vod_pic;
                    eval(rule.图片替换.trim().replace("js:", ""));
                    it.vod_pic = input
                } catch (e) {
                    log(`图片:${it.vod_pic}替换错误:${e.message}`)
                }
            })
        } else if (rule.图片替换.includes("=>")) {
            let replace_from = rule.图片替换.split("=>")[0];
            let replace_to = rule.图片替换.split("=>")[1];
            d.forEach(it => {
                if (it.vod_pic && it.vod_pic.startsWith("http")) {
                    it.vod_pic = it.vod_pic.replace(replace_from, replace_to)
                }
            })
        }
    }
    if (rule.图片来源) {
        d.forEach(it => {
            if (it.vod_pic && it.vod_pic.startsWith("http")) {
                it.vod_pic = it.vod_pic + rule.图片来源
            }
        })
    }
    if (d.length > 0) {
        print(d.slice(0, 2))
    }
    let pagecount = 0;
    if (rule.pagecount && typeof rule.pagecount === "object" && rule.pagecount.hasOwnProperty(MY_CATE)) {
        print(`MY_CATE:${MY_CATE},pagecount:${JSON.stringify(rule.pagecount)}`);
        pagecount = parseInt(rule.pagecount[MY_CATE])
    }
    let nodata = {
        list: [{
            vod_name: "无数据,防无限请求",
            vod_id: "no_data",
            vod_remarks: "不要点,会崩的",
            vod_pic: "https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/404.jpg"
        }],
        total: 1,
        pagecount: 1,
        page: 1,
        limit: 1
    };
    let vod = d.length < 1 ? JSON.stringify(nodata) : JSON.stringify({
        page: parseInt(cateObj.pg),
        pagecount: pagecount || 999,
        limit: 20,
        total: 999,
        list: d
    });
    return vod
}

function searchParse(searchObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let d = [];
    if (!searchObj.searchUrl) {
        return "{}"
    }
    if (rule.searchNoPage && Number(searchObj.pg) > 1) {
        return "{}"
    }
    let p = searchObj.搜索 === "*" && rule.一级 ? rule.一级 : searchObj.搜索;
    if (!p || typeof p !== "string") {
        return "{}"
    }
    p = p.trim();
    let pp = rule.一级 ? rule.一级.split(";") : [];
    let url = searchObj.searchUrl.replaceAll("**", searchObj.wd);
    if (searchObj.pg === 1 && url.includes("[") && url.includes("]") && !url.includes("#")) {
        url = url.split("[")[1].split("]")[0]
    } else if (searchObj.pg > 1 && url.includes("[") && url.includes("]") && !url.includes("#")) {
        url = url.split("[")[0]
    }
    if (/fypage/.test(url)) {
        if (url.includes("(") && url.includes(")")) {
            let url_rep = url.match(/.*?\((.*)\)/)[1];
            let cnt_page = url_rep.replaceAll("fypage", searchObj.pg);
            let cnt_pg = eval(cnt_page);
            url = url.replaceAll(url_rep, cnt_pg).replaceAll("(", "").replaceAll(")", "")
        } else {
            url = url.replaceAll("fypage", searchObj.pg)
        }
    }
    MY_URL = url;
    console.log(MY_URL);
    if (p.startsWith("js:")) {
        const TYPE = "search";
        const MY_PAGE = searchObj.pg;
        const KEY = searchObj.wd;
        var input = MY_URL;
        var detailUrl = rule.detailUrl || "";
        eval(p.trim().replace("js:", ""));
        d = VODS
    } else {
        p = p.split(";");
        if (p.length < 5) {
            return "{}"
        }
        let p0 = getPP(p, 0, pp, 0);
        let _ps = parseTags.getParse(p0);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        let is_json = p0.startsWith("json:");
        p0 = p0.replace(/^(jsp:|json:|jq:)/, "");
        try {
            let req_method = MY_URL.split(";").length > 1 ? MY_URL.split(";")[1].toLowerCase() : "get";
            let html;
            if (req_method === "post") {
                let rurls = MY_URL.split(";")[0].split("#");
                let rurl = rurls[0];
                let params = rurls.length > 1 ? rurls[1] : "";
                print(`post=》rurl:${rurl},params:${params}`);
                let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
                let postData = {
                    body: params
                };
                Object.assign(_fetch_params, postData);
                html = post(rurl, _fetch_params)
            } else if (req_method === "postjson") {
                let rurls = MY_URL.split(";")[0].split("#");
                let rurl = rurls[0];
                let params = rurls.length > 1 ? rurls[1] : "";
                print(`postjson-》rurl:${rurl},params:${params}`);
                try {
                    params = JSON.parse(params)
                } catch (e) {
                    params = "{}"
                }
                let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
                let postData = {
                    body: params
                };
                Object.assign(_fetch_params, postData);
                html = post(rurl, _fetch_params)
            } else {
                html = getHtml(MY_URL)
            }
            if (html) {
                let search_tag = rule.搜索验证标识 || "系统安全验证|输入验证码";
                if (new RegExp(search_tag).test(html)) {
                    let cookie = verifyCode(MY_URL);
                    if (cookie) {
                        console.log(`本次成功过验证,cookie:${cookie}`);
                        setItem(RULE_CK, cookie)
                    } else {
                        console.log(`本次自动过搜索验证失败,cookie:${cookie}`)
                    }
                    html = getHtml(MY_URL)
                }
                if (!html.includes(searchObj.wd)) {
                    console.log("搜索结果源码未包含关键字,疑似搜索失败,正为您打印结果源码");
                    console.log(html)
                }
                if (is_json) {
                    html = dealJson(html)
                }
                let list = _pdfa(html, p0);
                let p1 = getPP(p, 1, pp, 1);
                let p2 = getPP(p, 2, pp, 2);
                let p3 = getPP(p, 3, pp, 3);
                let p4 = getPP(p, 4, pp, 4);
                let p5 = getPP(p, 5, pp, 5);
                list.forEach(it => {
                    let links = p4.split("+").map(_p4 => {
                        return !rule.detailUrl ? _pd(it, _p4, MY_URL) : _pdfh(it, _p4)
                    });
                    let link = links.join("$");
                    let content;
                    if (p.length > 5 && p[5]) {
                        content = _pdfh(it, p5)
                    } else {
                        content = ""
                    }
                    let vod_id = link;
                    let vod_name = _pdfh(it, p1).replace(/\n|\t/g, "").trim();
                    let vod_pic = _pd(it, p2, MY_URL);
                    if (rule.二级 === "*") {
                        vod_id = vod_id + "@@" + vod_name + "@@" + vod_pic
                    }
                    let ob = {
                        vod_id: vod_id,
                        vod_name: vod_name,
                        vod_pic: vod_pic,
                        vod_remarks: _pdfh(it, p3).replace(/\n|\t/g, "").trim(),
                        vod_content: content.replace(/\n|\t/g, "").trim()
                    };
                    d.push(ob)
                })
            }
        } catch (e) {
            print(`搜索发生错误:${e.message}`);
            return "{}"
        }
    }
    if (rule.图片替换) {
        if (rule.图片替换.startsWith("js:")) {
            d.forEach(it => {
                try {
                    var input = it.vod_pic;
                    eval(rule.图片替换.trim().replace("js:", ""));
                    it.vod_pic = input
                } catch (e) {
                    log(`图片:${it.vod_pic}替换错误:${e.message}`)
                }
            })
        } else if (rule.图片替换.includes("=>")) {
            let replace_from = rule.图片替换.split("=>")[0];
            let replace_to = rule.图片替换.split("=>")[1];
            d.forEach(it => {
                if (it.vod_pic && it.vod_pic.startsWith("http")) {
                    it.vod_pic = it.vod_pic.replace(replace_from, replace_to)
                }
            })
        }
    }
    if (rule.图片来源) {
        d.forEach(it => {
            if (it.vod_pic && it.vod_pic.startsWith("http")) {
                it.vod_pic = it.vod_pic + rule.图片来源
            }
        })
    }
    return JSON.stringify({
        page: parseInt(searchObj.pg),
        pagecount: 10,
        limit: 20,
        total: 100,
        list: d
    })
}

function detailParse(detailObj) {
    let t1 = (new Date).getTime();
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    let orId = detailObj.orId;
    let vod_name = "片名";
    let vod_pic = "";
    let vod_id = orId;
    if (rule.二级 === "*") {
        let extra = orId.split("@@");
        vod_name = extra.length > 1 ? extra[1] : vod_name;
        vod_pic = extra.length > 2 ? extra[2] : vod_pic
    }
    let vod = {
        vod_id: vod_id,
        vod_name: vod_name,
        vod_pic: vod_pic,
        type_name: "类型",
        vod_year: "年份",
        vod_area: "地区",
        vod_remarks: "更新信息",
        vod_actor: "主演",
        vod_director: "导演",
        vod_content: "简介"
    };
    let p = detailObj.二级;
    let url = detailObj.url;
    let detailUrl = detailObj.detailUrl;
    let fyclass = detailObj.fyclass;
    let tab_exclude = detailObj.tab_exclude;
    let html = detailObj.html || "";
    MY_URL = url;
    if (detailObj.二级访问前) {
        try {
            print(`尝试在二级访问前执行代码:${detailObj.二级访问前}`);
            eval(detailObj.二级访问前.trim().replace("js:", ""))
        } catch (e) {
            print(`二级访问前执行代码出现错误:${e.message}`)
        }
    }
    if (p === "*") {
        vod.vod_play_from = "在线播放";
        vod.vod_remarks = detailUrl;
        vod.vod_actor = "没有二级,只有一级链接直接嗅探播放";
        vod.vod_content = MY_URL;
        vod.vod_play_url = "嗅探播放$" + MY_URL.split("@@")[0]
    } else if (typeof p === "string" && p.trim().startsWith("js:")) {
        const TYPE = "detail";
        var input = MY_URL;
        var play_url = "";
        eval(p.trim().replace("js:", ""));
        vod = VOD;
        console.log(JSON.stringify(vod))
    } else if (p && typeof p === "object") {
        let tt1 = (new Date).getTime();
        if (!html) {
            html = getHtml(MY_URL)
        }
        print(`二级${MY_URL}仅获取源码耗时:${(new Date).getTime()-tt1}毫秒`);
        let _ps;
        if (p.is_json) {
            print("二级是json");
            _ps = parseTags.json;
            html = dealJson(html)
        } else if (p.is_jsp) {
            print("二级是jsp");
            _ps = parseTags.jsp
        } else if (p.is_jq) {
            print("二级是jq");
            _ps = parseTags.jq
        } else {
            print("二级默认jq");
            _ps = parseTags.jq
        }
        let tt2 = (new Date).getTime();
        print(`二级${MY_URL}获取并装载源码耗时:${tt2-tt1}毫秒`);
        _pdfa = _ps.pdfa;
        _pdfh = _ps.pdfh;
        _pd = _ps.pd;
        if (p.title) {
            let p1 = p.title.split(";");
            vod.vod_name = _pdfh(html, p1[0]).replace(/\n|\t/g, "").trim();
            let type_name = p1.length > 1 ? _pdfh(html, p1[1]).replace(/\n|\t/g, "").replace(/ /g, "").trim() : "";
            vod.type_name = type_name || vod.type_name
        }
        if (p.desc) {
            try {
                let p1 = p.desc.split(";");
                vod.vod_remarks = _pdfh(html, p1[0]).replace(/\n|\t/g, "").trim();
                vod.vod_year = p1.length > 1 ? _pdfh(html, p1[1]).replace(/\n|\t/g, "").trim() : "";
                vod.vod_area = p1.length > 2 ? _pdfh(html, p1[2]).replace(/\n|\t/g, "").trim() : "";
                vod.vod_actor = p1.length > 3 ? _pdfh(html, p1[3]).replace(/\n|\t/g, "").trim() : "";
                vod.vod_director = p1.length > 4 ? _pdfh(html, p1[4]).replace(/\n|\t/g, "").trim() : ""
            } catch (e) {}
        }
        if (p.content) {
            try {
                let p1 = p.content.split(";");
                vod.vod_content = _pdfh(html, p1[0]).replace(/\n|\t/g, "").trim()
            } catch (e) {}
        }
        if (p.img) {
            try {
                let p1 = p.img.split(";");
                vod.vod_pic = _pd(html, p1[0], MY_URL)
            } catch (e) {}
        }
        let vod_play_from = "$$$";
        let playFrom = [];
        if (p.重定向 && p.重定向.startsWith("js:")) {
            print("开始执行重定向代码:" + p.重定向);
            html = eval(p.重定向.replace("js:", ""))
        }
        if (p.tabs) {
            if (p.tabs.startsWith("js:")) {
                print("开始执行tabs代码:" + p.tabs);
                var input = MY_URL;
                eval(p.tabs.replace("js:", ""));
                playFrom = TABS
            } else {
                let p_tab = p.tabs.split(";")[0];
                let vHeader = _pdfa(html, p_tab);
                console.log(vHeader.length);
                let tab_text = p.tab_text || "body&&Text";
                let new_map = {};
                for (let v of vHeader) {
                    let v_title = _pdfh(v, tab_text).trim();
                    if (!v_title) {
                        v_title = "线路空"
                    }
                    console.log(v_title);
                    if (tab_exclude && new RegExp(tab_exclude).test(v_title)) {
                        continue
                    }
                    if (!new_map.hasOwnProperty(v_title)) {
                        new_map[v_title] = 1
                    } else {
                        new_map[v_title] += 1
                    }
                    if (new_map[v_title] > 1) {
                        v_title += Number(new_map[v_title] - 1)
                    }
                    playFrom.push(v_title)
                }
            }
            console.log(JSON.stringify(playFrom))
        } else {
            playFrom = ["在线播放"]
        }
        vod.vod_play_from = playFrom.join(vod_play_from);
        let vod_play_url = "$$$";
        let vod_tab_list = [];
        if (p.lists) {
            if (p.lists.startsWith("js:")) {
                print("开始执行lists代码:" + p.lists);
                try {
                    var input = MY_URL;
                    var play_url = "";
                    eval(p.lists.replace("js:", ""));
                    for (let i in LISTS) {
                        if (LISTS.hasOwnProperty(i)) {
                            try {
                                LISTS[i] = LISTS[i].map(it => it.split("$").slice(0, 2).join("$"))
                            } catch (e) {
                                print(`格式化LISTS发生错误:${e.message}`)
                            }
                        }
                    }
                    vod_play_url = LISTS.map(it => it.join("#")).join(vod_play_url)
                } catch (e) {
                    print(`js执行lists: 发生错误:${e.message}`)
                }
            } else {
                let list_text = p.list_text || "body&&Text";
                let list_url = p.list_url || "a&&href";
                let list_url_prefix = p.list_url_prefix || "";
                let is_tab_js = p.tabs.trim().startsWith("js:");
                for (let i = 0; i < playFrom.length; i++) {
                    let tab_name = playFrom[i];
                    let tab_ext = p.tabs.split(";").length > 1 && !is_tab_js ? p.tabs.split(";")[1] : "";
                    let p1 = p.lists.replaceAll("#idv", tab_name).replaceAll("#id", i);
                    tab_ext = tab_ext.replaceAll("#idv", tab_name).replaceAll("#id", i);
                    let tabName = tab_ext ? _pdfh(html, tab_ext) : tab_name;
                    console.log(tabName);
                    let new_vod_list = [];
                    let tt1 = (new Date).getTime();
                    if (typeof pdfl === "function") {
                        new_vod_list = pdfl(html, p1, list_text, list_url, MY_URL);
                        if (list_url_prefix) {
                            new_vod_list = new_vod_list.map(it => it.split("$")[0] + "$" + list_url_prefix + it.split("$").slice(1).join("$"))
                        }
                    } else {
                        let vodList = [];
                        try {
                            vodList = _pdfa(html, p1);
                            console.log("len(vodList):" + vodList.length)
                        } catch (e) {}
                        for (let i = 0; i < vodList.length; i++) {
                            let it = vodList[i];
                            new_vod_list.push(_pdfh(it, list_text).trim() + "$" + list_url_prefix + _pd(it, list_url, MY_URL))
                        }
                    }
                    if (new_vod_list.length > 0) {
                        new_vod_list = forceOrder(new_vod_list, "", x => x.split("$")[0]);
                        console.log(`drpy影响性能代码共计列表数循环次数:${new_vod_list.length},耗时:${(new Date).getTime()-tt1}毫秒`)
                    }
                    let vlist = new_vod_list.join("#");
                    vod_tab_list.push(vlist)
                }
                vod_play_url = vod_tab_list.join(vod_play_url)
            }
        }
        vod.vod_play_url = vod_play_url
    }
    if (rule.图片替换 && rule.图片替换.includes("=>")) {
        let replace_from = rule.图片替换.split("=>")[0];
        let replace_to = rule.图片替换.split("=>")[1];
        vod.vod_pic = vod.vod_pic.replace(replace_from, replace_to)
    }
    if (rule.图片来源 && vod.vod_pic && vod.vod_pic.startsWith("http")) {
        vod.vod_pic = vod.vod_pic + rule.图片来源
    }
    if (!vod.vod_id || vod_id.includes("$") && vod.vod_id !== vod_id) {
        vod.vod_id = vod_id
    }
    let t2 = (new Date).getTime();
    console.log(`加载二级界面${MY_URL}耗时:${t2-t1}毫秒`);
    try {
        vod = vodDeal(vod)
    } catch (e) {
        console.log(`vodDeal发生错误:${e.message}`)
    }
    return JSON.stringify({
        list: [vod]
    })
}

function get_tab_index(vod) {
    let obj = {};
    vod.vod_play_from.split("$$$").forEach((it, index) => {
        obj[it] = index
    });
    return obj
}

function vodDeal(vod) {
    let vod_play_from = vod.vod_play_from.split("$$$");
    let vod_play_url = vod.vod_play_url.split("$$$");
    let tab_removed_list = vod_play_from;
    let tab_ordered_list = vod_play_from;
    let tab_renamed_list = vod_play_from;
    let tab_list = vod_play_from;
    let play_ordered_list = vod_play_url;
    if (rule.tab_remove && rule.tab_remove.length > 0 || rule.tab_order && rule.tab_order.length > 0) {
        let tab_index_dict = get_tab_index(vod);
        if (rule.tab_remove && rule.tab_remove.length > 0) {
            tab_removed_list = vod_play_from.filter(it => !rule.tab_remove.includes(it));
            tab_list = tab_removed_list
        }
        if (rule.tab_order && rule.tab_order.length > 0) {
            let tab_order = rule.tab_order;
            tab_ordered_list = tab_removed_list.sort((a, b) => {
                return (tab_order.indexOf(a) === -1 ? 9999 : tab_order.indexOf(a)) - (tab_order.indexOf(b) === -1 ? 9999 : tab_order.indexOf(b))
            });
            tab_list = tab_ordered_list
        }
        play_ordered_list = tab_list.map(it => vod_play_url[tab_index_dict[it]])
    }
    if (rule.tab_rename && typeof rule.tab_rename === "object" & Object.keys(rule.tab_rename).length > 0) {
        tab_renamed_list = tab_list.map(it => rule.tab_rename[it] || it);
        tab_list = tab_renamed_list
    }
    vod.vod_play_from = tab_list.join("$$$");
    vod.vod_play_url = play_ordered_list.join("$$$");
    return vod
}

function tellIsJx(url) {
    try {
        let is_vip = !/\.(m3u8|mp4|m4a)$/.test(url.split("?")[0]) && 是否正版(url);
        return is_vip ? 1 : 0
    } catch (e) {
        return 1
    }
}

function playParse(playObj) {
    fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
    MY_URL = playObj.url;
    var MY_FLAG = playObj.flag;
    if (!/http/.test(MY_URL)) {
        try {
            MY_URL = base64Decode(MY_URL)
        } catch (e) {}
    }
    MY_URL = decodeURIComponent(MY_URL);
    var input = MY_URL;
    var flag = MY_FLAG;
    let common_play = {
        parse: SPECIAL_URL.test(input) || /^(push:)/.test(input) ? 0 : 1,
        url: input,
        flag: flag,
        jx: tellIsJx(input)
    };
    let lazy_play;
    if (!rule.play_parse || !rule.lazy) {
        lazy_play = common_play
    } else if (rule.play_parse && rule.lazy && typeof rule.lazy === "string") {
        try {
            let lazy_code = rule.lazy.trim();
            if (lazy_code.startsWith("js:")) {
                lazy_code = lazy_code.replace("js:", "").trim()
            }
            print("开始执行js免嗅=>" + lazy_code);
            eval(lazy_code);
            lazy_play = typeof input === "object" ? input : {
                parse: SPECIAL_URL.test(input) || /^(push:)/.test(input) ? 0 : 1,
                jx: tellIsJx(input),
                url: input
            }
        } catch (e) {
            print(`js免嗅错误:${e.message}`);
            lazy_play = common_play
        }
    } else {
        lazy_play = common_play
    }
    if (Array.isArray(rule.play_json) && rule.play_json.length > 0) {
        let web_url = lazy_play.url;
        for (let pjson of rule.play_json) {
            if (pjson.re && (pjson.re === "*" || web_url.match(new RegExp(pjson.re)))) {
                if (pjson.json && typeof pjson.json === "object") {
                    let base_json = pjson.json;
                    lazy_play = Object.assign(lazy_play, base_json);
                    break
                }
            }
        }
    } else if (rule.play_json && !Array.isArray(rule.play_json)) {
        let base_json = {
            jx: 1,
            parse: 1
        };
        lazy_play = Object.assign(lazy_play, base_json)
    } else if (!rule.play_json) {
        let base_json = {
            jx: 0,
            parse: 1
        };
        lazy_play = Object.assign(lazy_play, base_json)
    }
    console.log(JSON.stringify(lazy_play));
    return JSON.stringify(lazy_play)
}

function proxyParse(proxyObj) {
    var input = proxyObj.params;
    if (proxyObj.proxy_rule) {
        log("准备执行本地代理规则:\n" + proxyObj.proxy_rule);
        try {
            eval(proxyObj.proxy_rule);
            if (input && input !== proxyObj.params && Array.isArray(input) && input.length >= 3) {
                return input
            } else {
                return [404, "text/plain", "Not Found"]
            }
        } catch (e) {
            return [500, "text/plain", "代理规则错误:" + e.message]
        }
    } else {
        return [404, "text/plain", "Not Found"]
    }
}

function isVideoParse(isVideoObj) {
    var input = isVideoObj.url;
    if (!isVideoObj.t) {
        let re_matcher = new RegExp(isVideoObj.isVideo, "i");
        return re_matcher.test(input)
    } else {
        try {
            eval(isVideoObj.isVideo);
            if (typeof input === "boolean") {
                return input
            } else {
                return false
            }
        } catch (e) {
            log(`执行嗅探规则发生错误:${e.message}`);
            return false
        }
    }
}

function getOriginalJs(js_code) {
    let current_match = /var rule|[\u4E00-\u9FA5]+|function|let |var |const |\(|\)|"|'/;
    if (current_match.test(js_code)) {
        return js_code
    }
    let rsa_private_key = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqin/jUpqM6+fgYP/oMqj9zcdHMM0mEZXLeTyixIJWP53lzJV2N2E3OP6BBpUmq2O1a9aLnTIbADBaTulTNiOnVGoNG58umBnupnbmmF8iARbDp2mTzdMMeEgLdrfXS6Y3VvazKYALP8EhEQykQVarexR78vRq7ltY3quXx7cgI0ROfZz5Sw3UOLQJ+VoWmwIxu9AMEZLVzFDQN93hzuzs3tNyHK6xspBGB7zGbwCg+TKi0JeqPDrXxYUpAz1cQ/MO+Da0WgvkXnvrry8NQROHejdLVOAslgr6vYthH9bKbsGyNY3H+P12kcxo9RAcVveONnZbcMyxjtF5dWblaernAgMBAAECggEAGdEHlSEPFmAr5PKqKrtoi6tYDHXdyHKHC5tZy4YV+Pp+a6gxxAiUJejx1hRqBcWSPYeKne35BM9dgn5JofgjI5SKzVsuGL6bxl3ayAOu+xXRHWM9f0t8NHoM5fdd0zC3g88dX3fb01geY2QSVtcxSJpEOpNH3twgZe6naT2pgiq1S4okpkpldJPo5GYWGKMCHSLnKGyhwS76gF8bTPLoay9Jxk70uv6BDUMlA4ICENjmsYtd3oirWwLwYMEJbSFMlyJvB7hjOjR/4RpT4FPnlSsIpuRtkCYXD4jdhxGlvpXREw97UF2wwnEUnfgiZJ2FT/MWmvGGoaV/CfboLsLZuQKBgQDTNZdJrs8dbijynHZuuRwvXvwC03GDpEJO6c1tbZ1s9wjRyOZjBbQFRjDgFeWs9/T1aNBLUrgsQL9c9nzgUziXjr1Nmu52I0Mwxi13Km/q3mT+aQfdgNdu6ojsI5apQQHnN/9yMhF6sNHg63YOpH+b+1bGRCtr1XubuLlumKKscwKBgQDOtQ2lQjMtwsqJmyiyRLiUOChtvQ5XI7B2mhKCGi8kZ+WEAbNQcmThPesVzW+puER6D4Ar4hgsh9gCeuTaOzbRfZ+RLn3Aksu2WJEzfs6UrGvm6DU1INn0z/tPYRAwPX7sxoZZGxqML/z+/yQdf2DREoPdClcDa2Lmf1KpHdB+vQKBgBXFCVHz7a8n4pqXG/HvrIMJdEpKRwH9lUQS/zSPPtGzaLpOzchZFyQQBwuh1imM6Te+VPHeldMh3VeUpGxux39/m+160adlnRBS7O7CdgSsZZZ/dusS06HAFNraFDZf1/VgJTk9BeYygX+AZYu+0tReBKSs9BjKSVJUqPBIVUQXAoGBAJcZ7J6oVMcXxHxwqoAeEhtvLcaCU9BJK36XQ/5M67ceJ72mjJC6/plUbNukMAMNyyi62gO6I9exearecRpB/OGIhjNXm99Ar59dAM9228X8gGfryLFMkWcO/fNZzb6lxXmJ6b2LPY3KqpMwqRLTAU/zy+ax30eFoWdDHYa4X6e1AoGAfa8asVGOJ8GL9dlWufEeFkDEDKO9ww5GdnpN+wqLwePWqeJhWCHad7bge6SnlylJp5aZXl1+YaBTtOskC4Whq9TP2J+dNIgxsaF5EFZQJr8Xv+lY9lu0CruYOh9nTNF9x3nubxJgaSid/7yRPfAGnsJRiknB5bsrCvgsFQFjJVs=";
    let decode_content = "";

    function aes_decrypt(data) {
        let key = CryptoJS.enc.Hex.parse("686A64686E780A0A0A0A0A0A0A0A0A0A");
        let iv = CryptoJS.enc.Hex.parse("647A797964730A0A0A0A0A0A0A0A0A0A");
        let encrypted = CryptoJS.AES.decrypt({
            ciphertext: CryptoJS.enc.Base64.parse(data)
        }, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8);
        return encrypted
    }
    let error_log = false;

    function logger(text) {
        if (error_log) {
            log(text)
        }
    }
    let decode_funcs = [text => {
        try {
            return ungzip(text)
        } catch (e) {
            logger("非gzip加密");
            return ""
        }
    }, text => {
        try {
            return base64Decode(text)
        } catch (e) {
            logger("非b64加密");
            return ""
        }
    }, text => {
        try {
            return aes_decrypt(text)
        } catch (e) {
            logger("非aes加密");
            return ""
        }
    }, text => {
        try {
            return RSA.decode(text, rsa_private_key, null)
        } catch (e) {
            logger("非rsa加密");
            return ""
        }
    }];
    let func_index = 0;
    while (!current_match.test(decode_content)) {
        decode_content = decode_funcs[func_index](js_code);
        func_index++;
        if (func_index >= decode_funcs.length) {
            break
        }
    }
    return decode_content
}

function runMain(main_func_code, arg) {
    let mainFunc = function() {
        return ""
    };
    try {
        eval(main_func_code + "\nmainFunc=main;");
        return mainFunc(arg)
    } catch (e) {
        log(`执行main_funct发生了错误:${e.message}`);
        return ""
    }
}

function init(ext) {
    console.log("init");
    rule = {};
    rule_fetch_params = {};
    fetch_params = null;
    try {
        let muban = 模板.getMubans();
        if (typeof ext == "object") {
            rule = ext
        } else if (typeof ext == "string") {
            let is_file = ext.startsWith("file://");
            if (ext.startsWith("http") || is_file) {
                let query = getQuery(ext);
                if (is_file) {
                    ext = ext.split("?")[0]
                }
                let js = request(ext, {
                    method: "GET"
                });
                if (js) {
                    js = getOriginalJs(js);
                    eval("(function(){" + js.replace("var rule", "rule") + "})()")
                }
                if (query.type === "url" && query.params) {
                    if (is_file && /^http/.test(query.params)) {
                        rule.params = query.params
                    } else {
                        rule.params = urljoin(ext, query.params)
                    }
                } else if (query.params) {
                    rule.params = query.params
                }
            } else {
                ext = getOriginalJs(ext);
                eval("(function(){" + ext.replace("var rule", "rule") + "})()")
            }
        } else {
            console.log(`规则加载失败,不支持的规则类型:${typeof ext}`);
            return
        }
        rule.host = (rule.host || "").rstrip("/");
        HOST = rule.host;
        if (rule.hostJs) {
            console.log(`检测到hostJs,准备执行...`);
            try {
                eval(rule.hostJs);
                rule.host = HOST.rstrip("/")
            } catch (e) {
                console.log(`执行${rule.hostJs}获取host发生错误:${e.message}`)
            }
        }
        if (rule["模板"] === "自动") {
            try {
                let host_headers = rule["headers"] || {};
                let host_html = getCode(HOST, {
                    headers: host_headers
                });
                let match_muban = "";
                let muban_keys = Object.keys(muban).filter(it => !/默认|短视2|采集1/.test(it));
                for (let muban_key of muban_keys) {
                    try {
                        let host_data = JSON.parse(home({}, host_html, muban[muban_key].class_parse));
                        if (host_data.class && host_data.class.length > 0) {
                            match_muban = muban_key;
                            console.log(`自动匹配模板:【${muban_key}】`);
                            break
                        }
                    } catch (e) {
                        console.log(`自动匹配模板:【${muban_key}】错误:${e.message}`)
                    }
                }
                if (match_muban) {
                    muban["自动"] = muban[match_muban];
                    if (rule["模板修改"] && rule["模板修改"].startsWith("js:")) {
                        eval(rule["模板修改"].replace("js:", "").trim())
                    }
                } else {
                    delete rule["模板"]
                }
            } catch (e) {
                delete rule["模板"]
            }
        }
        if (rule.模板 && muban.hasOwnProperty(rule.模板)) {
            print("继承模板:" + rule.模板);
            rule = Object.assign(muban[rule.模板], rule)
        }
        let rule_cate_excludes = (rule.cate_exclude || "").split("|").filter(it => it.trim());
        let rule_tab_excludes = (rule.tab_exclude || "").split("|").filter(it => it.trim());
        rule_cate_excludes = rule_cate_excludes.concat(CATE_EXCLUDE.split("|").filter(it => it.trim()));
        rule_tab_excludes = rule_tab_excludes.concat(TAB_EXCLUDE.split("|").filter(it => it.trim()));
        rule.cate_exclude = rule_cate_excludes.join("|");
        rule.tab_exclude = rule_tab_excludes.join("|");
        rule.类型 = rule.类型 || "影视";
        rule.url = rule.url || "";
        rule.double = rule.double || false;
        rule.homeUrl = rule.homeUrl || "";
        rule.detailUrl = rule.detailUrl || "";
        rule.searchUrl = rule.searchUrl || "";
        rule.homeUrl = rule.host && rule.homeUrl ? urljoin(rule.host, rule.homeUrl) : rule.homeUrl || rule.host;
        rule.homeUrl = cheerio.jinja2(rule.homeUrl, {
            rule: rule
        });
        rule.detailUrl = rule.host && rule.detailUrl ? urljoin(rule.host, rule.detailUrl) : rule.detailUrl;
        rule.二级访问前 = rule.二级访问前 || "";
        if (rule.url.includes("[") && rule.url.includes("]")) {
            let u1 = rule.url.split("[")[0];
            let u2 = rule.url.split("[")[1].split("]")[0];
            rule.url = rule.host && rule.url ? urljoin(rule.host, u1) + "[" + urljoin(rule.host, u2) + "]" : rule.url
        } else {
            rule.url = rule.host && rule.url ? urljoin(rule.host, rule.url) : rule.url
        }
        if (rule.searchUrl.includes("[") && rule.searchUrl.includes("]") && !rule.searchUrl.includes("#")) {
            let u1 = rule.searchUrl.split("[")[0];
            let u2 = rule.searchUrl.split("[")[1].split("]")[0];
            rule.searchUrl = rule.host && rule.searchUrl ? urljoin(rule.host, u1) + "[" + urljoin(rule.host, u2) + "]" : rule.searchUrl
        } else {
            rule.searchUrl = rule.host && rule.searchUrl ? urljoin(rule.host, rule.searchUrl) : rule.searchUrl
        }
        rule.timeout = rule.timeout || 5e3;
        rule.encoding = rule.编码 || rule.encoding || "utf-8";
        rule.search_encoding = rule.搜索编码 || rule.search_encoding || "";
        rule.图片来源 = rule.图片来源 || "";
        rule.图片替换 = rule.图片替换 || "";
        rule.play_json = rule.hasOwnProperty("play_json") ? rule.play_json : [];
        rule.pagecount = rule.hasOwnProperty("pagecount") ? rule.pagecount : {};
        rule.proxy_rule = rule.hasOwnProperty("proxy_rule") ? rule.proxy_rule : "";
        if (!rule.hasOwnProperty("sniffer")) {
            rule.sniffer = false
        }
        rule.sniffer = rule.hasOwnProperty("sniffer") ? rule.sniffer : "";
        rule.sniffer = !!(rule.sniffer && rule.sniffer !== "0" && rule.sniffer !== "false");
        rule.isVideo = rule.hasOwnProperty("isVideo") ? rule.isVideo : "";
        if (rule.sniffer && !rule.isVideo) {
            rule.isVideo = "http((?!http).){12,}?\\.(m3u8|mp4|flv|avi|mkv|rm|wmv|mpg|m4a|mp3)\\?.*|http((?!http).){12,}\\.(m3u8|mp4|flv|avi|mkv|rm|wmv|mpg|m4a|mp3)|http((?!http).)*?video/tos*|http((?!http).)*?obj/tos*"
        }
        rule.tab_remove = rule.hasOwnProperty("tab_remove") ? rule.tab_remove : [];
        rule.tab_order = rule.hasOwnProperty("tab_order") ? rule.tab_order : [];
        rule.tab_rename = rule.hasOwnProperty("tab_rename") ? rule.tab_rename : {};
        if (rule.headers && typeof rule.headers === "object") {
            try {
                let header_keys = Object.keys(rule.headers);
                for (let k of header_keys) {
                    if (k.toLowerCase() === "user-agent") {
                        let v = rule.headers[k];
                        console.log(v);
                        if (["MOBILE_UA", "PC_UA", "UC_UA", "IOS_UA", "UA"].includes(v)) {
                            rule.headers[k] = eval(v)
                        }
                    } else if (k.toLowerCase() === "cookie") {
                        let v = rule.headers[k];
                        if (v && v.startsWith("http")) {
                            console.log(v);
                            try {
                                v = fetch(v);
                                console.log(v);
                                rule.headers[k] = v
                            } catch (e) {
                                console.log(`从${v}获取cookie发生错误:${e.message}`)
                            }
                        }
                    }
                }
            } catch (e) {
                console.log(`处理headers发生错误:${e.message}`)
            }
        } else {
            rule.headers = {}
        }
        oheaders = deepCopy(rule.headers);
        rule_fetch_params = {
            headers: rule.headers,
            timeout: rule.timeout,
            encoding: rule.encoding
        };
        RKEY = typeof key !== "undefined" && key ? key : "drpy_" + (rule.title || rule.host);
        pre();
        init_test()
    } catch (e) {
        console.log(`init_test发生错误:${e.message}`)
    }
}
let homeHtmlCache = undefined;

function home(filter, home_html, class_parse) {
    console.log("home");
    home_html = home_html || "";
    class_parse = class_parse || "";
    if (typeof rule.filter === "string" && rule.filter.trim().length > 0) {
        try {
            let filter_json = ungzip(rule.filter.trim());
            rule.filter = JSON.parse(filter_json)
        } catch (e) {
            rule.filter = {}
        }
    }
    let homeObj = {
        filter: rule.filter || false,
        MY_URL: rule.homeUrl,
        class_name: rule.class_name || "",
        class_url: rule.class_url || "",
        class_parse: class_parse || rule.class_parse || "",
        cate_exclude: rule.cate_exclude,
        home_html: home_html
    };
    return homeParse(homeObj)
}

function homeVod(params) {
    console.log("homeVod");
    let homeVodObj = {
        "推荐": rule.推荐,
        double: rule.double,
        homeUrl: rule.homeUrl,
        detailUrl: rule.detailUrl
    };
    return homeVodParse(homeVodObj)
}

function category(tid, pg, filter, extend) {
    let cateObj = {
        url: rule.url,
        "一级": rule.一级,
        tid: tid,
        pg: parseInt(pg),
        filter: filter,
        extend: extend
    };
    return categoryParse(cateObj)
}

function detail(vod_url) {
    let orId = vod_url;
    let fyclass = "";
    log("orId:" + orId);
    if (vod_url.indexOf("$") > -1) {
        let tmp = vod_url.split("$");
        fyclass = tmp[0];
        vod_url = tmp[1]
    }
    let detailUrl = vod_url.split("@@")[0];
    let url;
    if (!detailUrl.startsWith("http") && !detailUrl.includes("/")) {
        url = rule.detailUrl.replaceAll("fyid", detailUrl).replaceAll("fyclass", fyclass)
    } else if (detailUrl.includes("/")) {
        url = urljoin(rule.homeUrl, detailUrl)
    } else {
        url = detailUrl
    }
    let detailObj = {
        orId: orId,
        url: url,
        "二级": rule.二级,
        "二级访问前": rule.二级访问前,
        detailUrl: detailUrl,
        fyclass: fyclass,
        tab_exclude: rule.tab_exclude
    };
    return detailParse(detailObj)
}

function play(flag, id, flags) {
    let playObj = {
        url: id,
        flag: flag,
        flags: flags
    };
    return playParse(playObj)
}

function search(wd, quick, pg) {
    if (rule.search_encoding) {
        if (rule.search_encoding.toLowerCase() !== "utf-8") {
            wd = encodeStr(wd, rule.search_encoding)
        }
    } else if (rule.encoding && rule.encoding.toLowerCase() !== "utf-8") {
        wd = encodeStr(wd, rule.encoding)
    }
    let searchObj = {
        searchUrl: rule.searchUrl,
        "搜索": rule.搜索,
        wd: wd,
        pg: pg || 1,
        quick: quick
    };
    return searchParse(searchObj)
}

function proxy(params) {
    if (rule.proxy_rule && rule.proxy_rule.trim()) {
        rule.proxy_rule = rule.proxy_rule.trim()
    }
    if (rule.proxy_rule.startsWith("js:")) {
        rule.proxy_rule = rule.proxy_rule.replace("js:", "")
    }
    let proxyObj = {
        params: params,
        proxy_rule: rule.proxy_rule
    };
    return proxyParse(proxyObj)
}

function sniffer() {
    let enable_sniffer = rule.sniffer || false;
    if (enable_sniffer) {
        log("开始执行辅助嗅探代理规则...")
    }
    return enable_sniffer
}

function isVideo(url) {
    let t = 0;
    let is_video;
    if (rule.isVideo && rule.isVideo.trim()) {
        is_video = rule.isVideo.trim()
    }
    if (is_video.startsWith("js:")) {
        is_video = is_video.replace("js:", "");
        t = 1
    }
    let isVideoObj = {
        url: url,
        isVideo: is_video,
        t: t
    };
    let result = isVideoParse(isVideoObj);
    if (result) {
        log("成功执行辅助嗅探规则并检测到视频地址:\n" + rule.isVideo)
    }
    return result
}

function getRule(key) {
    return key ? rule[key] || "" : rule
}

function deepCopy(_obj) {
    return JSON.parse(JSON.stringify(_obj))
}

function matchesAll(str, pattern, flatten) {
    if (!pattern.global) {
        pattern = new RegExp(pattern.source, "g" + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : ""))
    }
    var matches = [];
    var match;
    while ((match = pattern.exec(str)) !== null) {
        matches.push(match)
    }
    return flatten ? matches.flat() : matches
}

function stringUtils() {
    Object.defineProperties(String.prototype, {
        replaceX: {
            value: function(regex, replacement) {
                let matches = matchesAll(this, regex, true);
                if (matches && matches.length > 1) {
                    const hasCaptureGroup = /\$\d/.test(replacement);
                    if (hasCaptureGroup) {
                        return this.replace(regex, m => m.replace(regex, replacement))
                    } else {
                        return this.replace(regex, (m, p1) => m.replace(p1, replacement))
                    }
                }
                return this.replace(regex, replacement)
            },
            configurable: true,
            enumerable: false,
            writable: true
        },
        parseX: {
            get: function() {
                try {
                    return JSON.parse(this)
                } catch (e) {
                    console.log(e.message);
                    return this.startsWith("[") ? [] : {}
                }
            },
            configurable: true,
            enumerable: false
        }
    })
}

function cut(text, start, end, method, All) {
    let result = "";
    let c = (t, s, e) => {
        let result = "";
        let rs = [];
        let results = [];
        try {
            let lr = new RegExp(String.raw`${s}`.toString());
            let rr = new RegExp(String.raw`${e}`.toString());
            const segments = t.split(lr);
            if (segments.length < 2) return "";
            let cutSegments = segments.slice(1).map(segment => {
                let splitSegment = segment.split(rr);
                return splitSegment.length < 2 ? undefined : splitSegment[0] + e
            }).filter(f => f);
            if (All) {
                return `[${cutSegments.join(",")}]`
            } else {
                return cutSegments[0]
            }
        } catch (e) {
            console.log(`Error cutting text:${e.message}`)
        }
        return result
    };
    result = c(text, start, end);
    stringUtils();
    if (method && typeof method === "function") {
        result = method(result)
    }
    return result
}

function DRPY() {
    return {
        runMain: runMain,
        getRule: getRule,
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        search: search,
        proxy: proxy,
        sniffer: sniffer,
        isVideo: isVideo,
        fixAdM3u8Ai: fixAdM3u8Ai
    }
}
export default {
    runMain: runMain,
    getRule: getRule,
    init: init,
    home: home,
    homeVod: homeVod,
    category: category,
    detail: detail,
    play: play,
    search: search,
    proxy: proxy,
    sniffer: sniffer,
    isVideo: isVideo,
    fixAdM3u8Ai: fixAdM3u8Ai,
    DRPY: DRPY
};