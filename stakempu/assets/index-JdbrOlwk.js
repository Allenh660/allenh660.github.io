import{P as e,Q as t,R as r,S as o,U as n,V as s,X as i,Y as a,Z as c,$ as l,a0 as u,a1 as h,a2 as p,a3 as d,a4 as m,a5 as g,a6 as f,a7 as w,a8 as k,W as b}from"./MsStake-iw_DxEVZ.js";const y=""+new URL("nav-logo-DefyyTt3.png",import.meta.url).href;let v=null;try{if(v=WebSocket,null==v)throw new Error("inject please")}catch(ve){const r=new e(t);v=function(){r.throwError("WebSockets not supported in this environment",e.errors.UNSUPPORTED_OPERATION,{operation:"new WebSocket()"})}}var E=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{c(o.next(e))}catch(t){s(t)}}function a(e){try{c(o.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};const P=new e(t);let N=1;class T extends r{constructor(t,r){"any"===r&&P.throwError("WebSocketProvider does not support 'any' network yet",e.errors.UNSUPPORTED_OPERATION,{operation:"network:any"}),super("string"==typeof t?t:"_websocket",r),this._pollingInterval=-1,this._wsReady=!1,o(this,"_websocket","string"==typeof t?new v(this.connection.url):t),o(this,"_requests",{}),o(this,"_subs",{}),o(this,"_subIds",{}),o(this,"_detectNetwork",super.detectNetwork()),this.websocket.onopen=()=>{this._wsReady=!0,Object.keys(this._requests).forEach((e=>{this.websocket.send(this._requests[e].payload)}))},this.websocket.onmessage=e=>{const t=e.data,r=JSON.parse(t);if(null!=r.id){const e=String(r.id),n=this._requests[e];if(delete this._requests[e],void 0!==r.result)n.callback(null,r.result),this.emit("debug",{action:"response",request:JSON.parse(n.payload),response:r.result,provider:this});else{let e=null;r.error?(e=new Error(r.error.message||"unknown error"),o(e,"code",r.error.code||null),o(e,"response",t)):e=new Error("unknown error"),n.callback(e,void 0),this.emit("debug",{action:"response",error:e,request:JSON.parse(n.payload),provider:this})}}else if("eth_subscription"===r.method){const e=this._subs[r.params.subscription];e&&e.processFunc(r.params.result)}};const n=setInterval((()=>{this.emit("poll")}),1e3);n.unref&&n.unref()}get websocket(){return this._websocket}detectNetwork(){return this._detectNetwork}get pollingInterval(){return 0}resetEventsBlock(t){P.throwError("cannot reset events block on WebSocketProvider",e.errors.UNSUPPORTED_OPERATION,{operation:"resetEventBlock"})}set pollingInterval(t){P.throwError("cannot set polling interval on WebSocketProvider",e.errors.UNSUPPORTED_OPERATION,{operation:"setPollingInterval"})}poll(){return E(this,void 0,void 0,(function*(){return null}))}set polling(t){t&&P.throwError("cannot set polling on WebSocketProvider",e.errors.UNSUPPORTED_OPERATION,{operation:"setPolling"})}send(e,t){const r=N++;return new Promise(((o,n)=>{const s=JSON.stringify({method:e,params:t,id:r,jsonrpc:"2.0"});this.emit("debug",{action:"request",request:JSON.parse(s),provider:this}),this._requests[String(r)]={callback:function(e,t){return e?n(e):o(t)},payload:s},this._wsReady&&this.websocket.send(s)}))}static defaultUrl(){return"ws://localhost:8546"}_subscribe(e,t,r){return E(this,void 0,void 0,(function*(){let o=this._subIds[e];null==o&&(o=Promise.all(t).then((e=>this.send("eth_subscribe",e))),this._subIds[e]=o);const n=yield o;this._subs[n]={tag:e,processFunc:r}}))}_startEvent(e){switch(e.type){case"block":this._subscribe("block",["newHeads"],(e=>{const t=n.from(e.number).toNumber();this._emitted.block=t,this.emit("block",t)}));break;case"pending":this._subscribe("pending",["newPendingTransactions"],(e=>{this.emit("pending",e)}));break;case"filter":this._subscribe(e.tag,["logs",this._getFilter(e.filter)],(t=>{null==t.removed&&(t.removed=!1),this.emit(e.filter,this.formatter.filterLog(t))}));break;case"tx":{const t=e=>{const t=e.hash;this.getTransactionReceipt(t).then((e=>{e&&this.emit(t,e)}))};t(e),this._subscribe("tx",["newHeads"],(e=>{this._events.filter((e=>"tx"===e.type)).forEach(t)}));break}}}_stopEvent(e){let t=e.tag;if("tx"===e.type){if(this._events.filter((e=>"tx"===e.type)).length)return;t="tx"}else if(this.listenerCount(e.event))return;const r=this._subIds[t];r&&(delete this._subIds[t],r.then((e=>{this._subs[e]&&(delete this._subs[e],this.send("eth_unsubscribe",[e]))})))}destroy(){return E(this,void 0,void 0,(function*(){this.websocket.readyState===v.CONNECTING&&(yield new Promise((e=>{this.websocket.onopen=function(){e(!0)},this.websocket.onerror=function(){e(!1)}}))),this.websocket.close(1e3)}))}}var _=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{c(o.next(e))}catch(t){s(t)}}function a(e){try{c(o.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};const R=new e(t);class I extends r{detectNetwork(){const t=Object.create(null,{detectNetwork:{get:()=>super.detectNetwork}});return _(this,void 0,void 0,(function*(){let r=this.network;return null==r&&(r=yield t.detectNetwork.call(this),r||R.throwError("no network detected",e.errors.UNKNOWN_ERROR,{}),null==this._network&&(o(this,"_network",r),this.emit("network",r,null))),r}))}}class S extends I{constructor(e,t){R.checkAbstract(new.target,S),e=s(new.target,"getNetwork")(e),t=s(new.target,"getApiKey")(t);super(s(new.target,"getUrl")(e,t),e),"string"==typeof t?o(this,"apiKey",t):null!=t&&Object.keys(t).forEach((e=>{o(this,e,t[e])}))}_startPending(){R.warn("WARNING: API provider does not support pending filters")}isCommunityResource(){return!1}getSigner(t){return R.throwError("API provider does not support signing",e.errors.UNSUPPORTED_OPERATION,{operation:"getSigner"})}listAccounts(){return Promise.resolve([])}static getApiKey(e){return e}static getUrl(t,r){return R.throwError("not implemented; sub-classes must override getUrl",e.errors.NOT_IMPLEMENTED,{operation:"getUrl"})}}const O=new e(t),A="_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";class x extends T{constructor(e,t){const r=new j(e,t);super(r.connection.url.replace(/^http/i,"ws").replace(".alchemyapi.",".ws.alchemyapi."),r.network),o(this,"apiKey",r.apiKey)}isCommunityResource(){return this.apiKey===A}}class j extends S{static getWebSocketProvider(e,t){return new x(e,t)}static getApiKey(e){return null==e?A:(e&&"string"!=typeof e&&O.throwArgumentError("invalid apiKey","apiKey",e),e)}static getUrl(e,t){let r=null;switch(e.name){case"homestead":r="eth-mainnet.alchemyapi.io/v2/";break;case"goerli":r="eth-goerli.g.alchemy.com/v2/";break;case"matic":r="polygon-mainnet.g.alchemy.com/v2/";break;case"maticmum":r="polygon-mumbai.g.alchemy.com/v2/";break;case"arbitrum":r="arb-mainnet.g.alchemy.com/v2/";break;case"arbitrum-goerli":r="arb-goerli.g.alchemy.com/v2/";break;case"optimism":r="opt-mainnet.g.alchemy.com/v2/";break;case"optimism-goerli":r="opt-goerli.g.alchemy.com/v2/";break;default:O.throwArgumentError("unsupported network","network",arguments[0])}return{allowGzip:!0,url:"https://"+r+t,throttleCallback:(e,r)=>(t===A&&i(),Promise.resolve(!0))}}isCommunityResource(){return this.apiKey===A}}const U=new e(t),C="9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";function K(e){switch(e){case"homestead":return"rpc.ankr.com/eth/";case"ropsten":return"rpc.ankr.com/eth_ropsten/";case"rinkeby":return"rpc.ankr.com/eth_rinkeby/";case"goerli":return"rpc.ankr.com/eth_goerli/";case"matic":return"rpc.ankr.com/polygon/";case"arbitrum":return"rpc.ankr.com/arbitrum/"}return U.throwArgumentError("unsupported network","name",e)}class B extends S{isCommunityResource(){return this.apiKey===C}static getApiKey(e){return null==e?C:e}static getUrl(e,t){null==t&&(t=C);const r={allowGzip:!0,url:"https://"+K(e.name)+t,throttleCallback:(e,r)=>(t.apiKey===C&&i(),Promise.resolve(!0))};return null!=t.projectSecret&&(r.user="",r.password=t.projectSecret),r}}var D=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{c(o.next(e))}catch(t){s(t)}}function a(e){try{c(o.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};const q=new e(t);class L extends S{static getApiKey(e){return null!=e&&q.throwArgumentError("apiKey not supported for cloudflare","apiKey",e),null}static getUrl(e,t){let r=null;if("homestead"===e.name)r="https://cloudflare-eth.com/";else q.throwArgumentError("unsupported network","network",arguments[0]);return r}perform(e,t){const r=Object.create(null,{perform:{get:()=>super.perform}});return D(this,void 0,void 0,(function*(){if("getBlockNumber"===e){return(yield r.perform.call(this,"getBlock",{blockTag:"latest"})).number}return r.perform.call(this,e,t)}))}}var G=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{c(o.next(e))}catch(t){s(t)}}function a(e){try{c(o.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};const M=new e(t);function W(e){const t={};for(let r in e){if(null==e[r])continue;let o=e[r];"type"===r&&0===o||(o={type:!0,gasLimit:!0,gasPrice:!0,maxFeePerGs:!0,maxPriorityFeePerGas:!0,nonce:!0,value:!0}[r]?u(h(o)):"accessList"===r?"["+p(o).map((e=>`{address:"${e.address}",storageKeys:["${e.storageKeys.join('","')}"]}`)).join(",")+"]":h(o),t[r]=o)}return t}function $(e){if(0==e.status&&("No records found"===e.message||"No transactions found"===e.message))return e.result;if(1!=e.status||"string"!=typeof e.message||!e.message.match(/^OK/)){const t=new Error("invalid response");throw t.result=JSON.stringify(e),(e.result||"").toLowerCase().indexOf("rate limit")>=0&&(t.throttleRetry=!0),t}return e.result}function F(e){if(e&&0==e.status&&"NOTOK"==e.message&&(e.result||"").toLowerCase().indexOf("rate limit")>=0){const t=new Error("throttled response");throw t.result=JSON.stringify(e),t.throttleRetry=!0,t}if("2.0"!=e.jsonrpc){const t=new Error("invalid response");throw t.result=JSON.stringify(e),t}if(e.error){const t=new Error(e.error.message||"unknown error");throw e.error.code&&(t.code=e.error.code),e.error.data&&(t.data=e.error.data),t}return e.result}function H(e){if("pending"===e)throw new Error("pending not supported");return"latest"===e?e:parseInt(e.substring(2),16)}function J(t,r,o){if("call"===t&&r.code===e.errors.SERVER_ERROR){const t=r.error;if(t&&(t.message.match(/reverted/i)||t.message.match(/VM execution error/i))){let o=t.data;if(o&&(o="0x"+o.replace(/^.*0x/i,"")),d(o))return o;M.throwError("missing revert data in call exception",e.errors.CALL_EXCEPTION,{error:r,data:"0x"})}}let n=r.message;throw r.code===e.errors.SERVER_ERROR&&(r.error&&"string"==typeof r.error.message?n=r.error.message:"string"==typeof r.body?n=r.body:"string"==typeof r.responseText&&(n=r.responseText)),n=(n||"").toLowerCase(),n.match(/insufficient funds/)&&M.throwError("insufficient funds for intrinsic transaction cost",e.errors.INSUFFICIENT_FUNDS,{error:r,method:t,transaction:o}),n.match(/same hash was already imported|transaction nonce is too low|nonce too low/)&&M.throwError("nonce has already been used",e.errors.NONCE_EXPIRED,{error:r,method:t,transaction:o}),n.match(/another transaction with same nonce/)&&M.throwError("replacement fee too low",e.errors.REPLACEMENT_UNDERPRICED,{error:r,method:t,transaction:o}),n.match(/execution failed due to an exception|execution reverted/)&&M.throwError("cannot estimate gas; transaction may fail or may require manual gas limit",e.errors.UNPREDICTABLE_GAS_LIMIT,{error:r,method:t,transaction:o}),r}class V extends a{constructor(e,t){super(e),o(this,"baseUrl",this.getBaseUrl()),o(this,"apiKey",t||null)}getBaseUrl(){switch(this.network?this.network.name:"invalid"){case"homestead":return"https://api.etherscan.io";case"goerli":return"https://api-goerli.etherscan.io";case"sepolia":return"https://api-sepolia.etherscan.io";case"matic":return"https://api.polygonscan.com";case"maticmum":return"https://api-testnet.polygonscan.com";case"arbitrum":return"https://api.arbiscan.io";case"arbitrum-goerli":return"https://api-goerli.arbiscan.io";case"optimism":return"https://api-optimistic.etherscan.io";case"optimism-goerli":return"https://api-goerli-optimistic.etherscan.io"}return M.throwArgumentError("unsupported network","network",this.network.name)}getUrl(e,t){const r=Object.keys(t).reduce(((e,r)=>{const o=t[r];return null!=o&&(e+=`&${r}=${o}`),e}),""),o=this.apiKey?`&apikey=${this.apiKey}`:"";return`${this.baseUrl}/api?module=${e}${r}${o}`}getPostUrl(){return`${this.baseUrl}/api`}getPostData(e,t){return t.module=e,t.apikey=this.apiKey,t}fetch(e,t,r){return G(this,void 0,void 0,(function*(){const o=r?this.getPostUrl():this.getUrl(e,t),n=r?this.getPostData(e,t):null,s="proxy"===e?F:$;this.emit("debug",{action:"request",request:o,provider:this});const a={url:o,throttleSlotInterval:1e3,throttleCallback:(e,t)=>(this.isCommunityResource()&&i(),Promise.resolve(!0))};let u=null;n&&(a.headers={"content-type":"application/x-www-form-urlencoded; charset=UTF-8"},u=Object.keys(n).map((e=>`${e}=${n[e]}`)).join("&"));const h=yield c(a,u,s||F);return this.emit("debug",{action:"response",request:o,response:l(h),provider:this}),h}))}detectNetwork(){return G(this,void 0,void 0,(function*(){return this.network}))}perform(t,r){const o=Object.create(null,{perform:{get:()=>super.perform}});return G(this,void 0,void 0,(function*(){switch(t){case"getBlockNumber":return this.fetch("proxy",{action:"eth_blockNumber"});case"getGasPrice":return this.fetch("proxy",{action:"eth_gasPrice"});case"getBalance":return this.fetch("account",{action:"balance",address:r.address,tag:r.blockTag});case"getTransactionCount":return this.fetch("proxy",{action:"eth_getTransactionCount",address:r.address,tag:r.blockTag});case"getCode":return this.fetch("proxy",{action:"eth_getCode",address:r.address,tag:r.blockTag});case"getStorageAt":return this.fetch("proxy",{action:"eth_getStorageAt",address:r.address,position:r.position,tag:r.blockTag});case"sendTransaction":return this.fetch("proxy",{action:"eth_sendRawTransaction",hex:r.signedTransaction},!0).catch((e=>J("sendTransaction",e,r.signedTransaction)));case"getBlock":if(r.blockTag)return this.fetch("proxy",{action:"eth_getBlockByNumber",tag:r.blockTag,boolean:r.includeTransactions?"true":"false"});throw new Error("getBlock by blockHash not implemented");case"getTransaction":return this.fetch("proxy",{action:"eth_getTransactionByHash",txhash:r.transactionHash});case"getTransactionReceipt":return this.fetch("proxy",{action:"eth_getTransactionReceipt",txhash:r.transactionHash});case"call":{if("latest"!==r.blockTag)throw new Error("EtherscanProvider does not support blockTag for call");const e=W(r.transaction);e.module="proxy",e.action="eth_call";try{return yield this.fetch("proxy",e,!0)}catch(ve){return J("call",ve,r.transaction)}}case"estimateGas":{const e=W(r.transaction);e.module="proxy",e.action="eth_estimateGas";try{return yield this.fetch("proxy",e,!0)}catch(ve){return J("estimateGas",ve,r.transaction)}}case"getLogs":{const t={action:"getLogs"};if(r.filter.fromBlock&&(t.fromBlock=H(r.filter.fromBlock)),r.filter.toBlock&&(t.toBlock=H(r.filter.toBlock)),r.filter.address&&(t.address=r.filter.address),r.filter.topics&&r.filter.topics.length>0&&(r.filter.topics.length>1&&M.throwError("unsupported topic count",e.errors.UNSUPPORTED_OPERATION,{topics:r.filter.topics}),1===r.filter.topics.length)){const o=r.filter.topics[0];"string"==typeof o&&66===o.length||M.throwError("unsupported topic format",e.errors.UNSUPPORTED_OPERATION,{topic0:o}),t.topic0=o}const o=yield this.fetch("logs",t);let n={};for(let e=0;e<o.length;e++){const t=o[e];if(null==t.blockHash){if(null==n[t.blockNumber]){const e=yield this.getBlock(t.blockNumber);e&&(n[t.blockNumber]=e.hash)}t.blockHash=n[t.blockNumber]}}return o}case"getEtherPrice":return"homestead"!==this.network.name?0:parseFloat((yield this.fetch("stats",{action:"ethprice"})).ethusd)}return o.perform.call(this,t,r)}))}getHistory(e,t,r){return G(this,void 0,void 0,(function*(){const o={action:"txlist",address:yield this.resolveName(e),startblock:null==t?0:t,endblock:null==r?99999999:r,sort:"asc"};return(yield this.fetch("account",o)).map((e=>{["contractAddress","to"].forEach((function(t){""==e[t]&&delete e[t]})),null==e.creates&&null!=e.contractAddress&&(e.creates=e.contractAddress);const t=this.formatter.transactionResponse(e);return e.timeStamp&&(t.timestamp=parseInt(e.timeStamp)),t}))}))}isCommunityResource(){return null==this.apiKey}}var z=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{c(o.next(e))}catch(t){s(t)}}function a(e){try{c(o.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};const X=new e(t);function Q(){return(new Date).getTime()}function Y(e){let t=null;for(let r=0;r<e.length;r++){const o=e[r];if(null==o)return null;t?t.name===o.name&&t.chainId===o.chainId&&(t.ensAddress===o.ensAddress||null==t.ensAddress&&null==o.ensAddress)||X.throwArgumentError("provider mismatch","networks",e):t=o}return t}function Z(e,t){e=e.slice().sort();const r=Math.floor(e.length/2);if(e.length%2)return e[r];const o=e[r-1],n=e[r];return null!=t&&Math.abs(o-n)>t?null:(o+n)/2}function ee(e){if(null===e)return"null";if("number"==typeof e||"boolean"==typeof e)return JSON.stringify(e);if("string"==typeof e)return e;if(n.isBigNumber(e))return e.toString();if(Array.isArray(e))return JSON.stringify(e.map((e=>ee(e))));if("object"==typeof e){const t=Object.keys(e);return t.sort(),"{"+t.map((t=>{let r=e[t];return r="function"==typeof r?"[function]":ee(r),JSON.stringify(t)+":"+r})).join(",")+"}"}throw new Error("unknown value type: "+typeof e)}let te=1;function re(e){let t=null,r=null,o=new Promise((o=>{t=function(){r&&(clearTimeout(r),r=null),o()},r=setTimeout(t,e)}));return{cancel:t,getPromise:function(){return o},wait:e=>(o=o.then(e),o)}}const oe=[e.errors.CALL_EXCEPTION,e.errors.INSUFFICIENT_FUNDS,e.errors.NONCE_EXPIRED,e.errors.REPLACEMENT_UNDERPRICED,e.errors.UNPREDICTABLE_GAS_LIMIT],ne=["address","args","errorArgs","errorSignature","method","transaction"];function se(e,t){const r={weight:e.weight};return Object.defineProperty(r,"provider",{get:()=>e.provider}),e.start&&(r.start=e.start),t&&(r.duration=t-e.start),e.done&&(e.error?r.error=e.error:r.result=e.result||null),r}function ie(e,t,r){let o=ee;switch(t){case"getBlockNumber":return function(t){const r=t.map((e=>e.result));let o=Z(t.map((e=>e.result)),2);if(null!=o)return o=Math.ceil(o),r.indexOf(o+1)>=0&&o++,o>=e._highestBlockNumber&&(e._highestBlockNumber=o),e._highestBlockNumber};case"getGasPrice":return function(e){const t=e.map((e=>e.result));return t.sort(),t[Math.floor(t.length/2)]};case"getEtherPrice":return function(e){return Z(e.map((e=>e.result)))};case"getBalance":case"getTransactionCount":case"getCode":case"getStorageAt":case"call":case"estimateGas":case"getLogs":break;case"getTransaction":case"getTransactionReceipt":o=function(e){return null==e?null:((e=f(e)).confirmations=-1,ee(e))};break;case"getBlock":o=r.includeTransactions?function(e){return null==e?null:((e=f(e)).transactions=e.transactions.map((e=>((e=f(e)).confirmations=-1,e))),ee(e))}:function(e){return null==e?null:ee(e)};break;default:throw new Error("unknown method: "+t)}return function(e,t){return function(r){const o={};r.forEach((t=>{const r=e(t.result);o[r]||(o[r]={count:0,result:t.result}),o[r].count++}));const n=Object.keys(o);for(let e=0;e<n.length;e++){const r=o[n[e]];if(r.count>=t)return r.result}}}(o,e.quorum)}function ae(e,t){return z(this,void 0,void 0,(function*(){const r=e.provider;return null!=r.blockNumber&&r.blockNumber>=t||-1===t?r:w((()=>new Promise(((o,n)=>{setTimeout((function(){return r.blockNumber>=t?o(r):e.cancelled?o(null):o(void 0)}),0)}))),{oncePoll:r})}))}function ce(t,r,o,n){return z(this,void 0,void 0,(function*(){let s=t.provider;switch(o){case"getBlockNumber":case"getGasPrice":return s[o]();case"getEtherPrice":if(s.getEtherPrice)return s.getEtherPrice();break;case"getBalance":case"getTransactionCount":case"getCode":return n.blockTag&&d(n.blockTag)&&(s=yield ae(t,r)),s[o](n.address,n.blockTag||"latest");case"getStorageAt":return n.blockTag&&d(n.blockTag)&&(s=yield ae(t,r)),s.getStorageAt(n.address,n.position,n.blockTag||"latest");case"getBlock":return n.blockTag&&d(n.blockTag)&&(s=yield ae(t,r)),s[n.includeTransactions?"getBlockWithTransactions":"getBlock"](n.blockTag||n.blockHash);case"call":case"estimateGas":return n.blockTag&&d(n.blockTag)&&(s=yield ae(t,r)),"call"===o&&n.blockTag?s[o](n.transaction,n.blockTag):s[o](n.transaction);case"getTransaction":case"getTransactionReceipt":return s[o](n.transactionHash);case"getLogs":{let e=n.filter;return(e.fromBlock&&d(e.fromBlock)||e.toBlock&&d(e.toBlock))&&(s=yield ae(t,r)),s.getLogs(e)}}return X.throwError("unknown method error",e.errors.UNKNOWN_ERROR,{method:o,params:n})}))}class le extends a{constructor(e,t){0===e.length&&X.throwArgumentError("missing providers","providers",e);const r=e.map(((e,t)=>{if(m.isProvider(e)){const t=g(e)?2e3:750,r=1;return Object.freeze({provider:e,weight:1,stallTimeout:t,priority:r})}const r=f(e);null==r.priority&&(r.priority=1),null==r.stallTimeout&&(r.stallTimeout=g(e)?2e3:750),null==r.weight&&(r.weight=1);const o=r.weight;return(o%1||o>512||o<1)&&X.throwArgumentError("invalid weight; must be integer in [1, 512]",`providers[${t}].weight`,o),Object.freeze(r)})),n=r.reduce(((e,t)=>e+t.weight),0);null==t?t=n/2:t>n&&X.throwArgumentError("quorum will always fail; larger than total weight","quorum",t);let s=Y(r.map((e=>e.provider.network)));null==s&&(s=new Promise(((e,t)=>{setTimeout((()=>{this.detectNetwork().then(e,t)}),0)}))),super(s),o(this,"providerConfigs",Object.freeze(r)),o(this,"quorum",t),this._highestBlockNumber=-1}detectNetwork(){return z(this,void 0,void 0,(function*(){return Y(yield Promise.all(this.providerConfigs.map((e=>e.provider.getNetwork()))))}))}perform(t,r){return z(this,void 0,void 0,(function*(){if("sendTransaction"===t){const e=yield Promise.all(this.providerConfigs.map((e=>e.provider.sendTransaction(r.signedTransaction).then((e=>e.hash),(e=>e)))));for(let t=0;t<e.length;t++){const r=e[t];if("string"==typeof r)return r}throw e[0]}-1===this._highestBlockNumber&&"getBlockNumber"!==t&&(yield this.getBlockNumber());const o=ie(this,t,r),n=function(e){for(let t=(e=e.slice()).length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[r],e[r]=o}return e}(this.providerConfigs.map(f));n.sort(((e,t)=>e.priority-t.priority));const s=this._highestBlockNumber;let i=0,a=!0;for(;;){const e=Q();let c=n.filter((t=>t.runner&&e-t.start<t.stallTimeout)).reduce(((e,t)=>e+t.weight),0);for(;c<this.quorum&&i<n.length;){const e=n[i++],o=te++;e.start=Q(),e.staller=re(e.stallTimeout),e.staller.wait((()=>{e.staller=null})),e.runner=ce(e,s,t,r).then((n=>{e.done=!0,e.result=n,this.listenerCount("debug")&&this.emit("debug",{action:"request",rid:o,backend:se(e,Q()),request:{method:t,params:l(r)},provider:this})}),(n=>{e.done=!0,e.error=n,this.listenerCount("debug")&&this.emit("debug",{action:"request",rid:o,backend:se(e,Q()),request:{method:t,params:l(r)},provider:this})})),this.listenerCount("debug")&&this.emit("debug",{action:"request",rid:o,backend:se(e,null),request:{method:t,params:l(r)},provider:this}),c+=e.weight}const u=[];n.forEach((e=>{!e.done&&e.runner&&(u.push(e.runner),e.staller&&u.push(e.staller.getPromise()))})),u.length&&(yield Promise.race(u));const h=n.filter((e=>e.done&&null==e.error));if(h.length>=this.quorum){const e=o(h);if(void 0!==e)return n.forEach((e=>{e.staller&&e.staller.cancel(),e.cancelled=!0})),e;a||(yield re(100).getPromise()),a=!1}const p=n.reduce(((e,t)=>{if(!t.done||null==t.error)return e;const r=t.error.code;return oe.indexOf(r)>=0&&(e[r]||(e[r]={error:t.error,weight:0}),e[r].weight+=t.weight),e}),{});if(Object.keys(p).forEach((e=>{const t=p[e];if(t.weight<this.quorum)return;n.forEach((e=>{e.staller&&e.staller.cancel(),e.cancelled=!0}));const r=t.error,o={};ne.forEach((e=>{null!=r[e]&&(o[e]=r[e])})),X.throwError(r.reason||r.message,e,o)})),0===n.filter((e=>!e.done)).length)break}return n.forEach((e=>{e.staller&&e.staller.cancel(),e.cancelled=!0})),X.throwError("failed to meet quorum",e.errors.SERVER_ERROR,{method:t,params:r,results:n.map((e=>se(e))),provider:this})}))}}const ue=new e(t),he="84842078b09946638c03157f83405213";class pe extends T{constructor(t,r){const n=new de(t,r),s=n.connection;s.password&&ue.throwError("INFURA WebSocket project secrets unsupported",e.errors.UNSUPPORTED_OPERATION,{operation:"InfuraProvider.getWebSocketProvider()"});super(s.url.replace(/^http/i,"ws").replace("/v3/","/ws/v3/"),t),o(this,"apiKey",n.projectId),o(this,"projectId",n.projectId),o(this,"projectSecret",n.projectSecret)}isCommunityResource(){return this.projectId===he}}class de extends S{static getWebSocketProvider(e,t){return new pe(e,t)}static getApiKey(e){const t={apiKey:he,projectId:he,projectSecret:null};return null==e||("string"==typeof e?t.projectId=e:null!=e.projectSecret?(ue.assertArgument("string"==typeof e.projectId,"projectSecret requires a projectId","projectId",e.projectId),ue.assertArgument("string"==typeof e.projectSecret,"invalid projectSecret","projectSecret","[REDACTED]"),t.projectId=e.projectId,t.projectSecret=e.projectSecret):e.projectId&&(t.projectId=e.projectId),t.apiKey=t.projectId),t}static getUrl(t,r){let o=null;switch(t?t.name:"unknown"){case"homestead":o="mainnet.infura.io";break;case"goerli":o="goerli.infura.io";break;case"sepolia":o="sepolia.infura.io";break;case"matic":o="polygon-mainnet.infura.io";break;case"maticmum":o="polygon-mumbai.infura.io";break;case"optimism":o="optimism-mainnet.infura.io";break;case"optimism-goerli":o="optimism-goerli.infura.io";break;case"arbitrum":o="arbitrum-mainnet.infura.io";break;case"arbitrum-goerli":o="arbitrum-goerli.infura.io";break;default:ue.throwError("unsupported network",e.errors.INVALID_ARGUMENT,{argument:"network",value:t})}const n={allowGzip:!0,url:"https://"+o+"/v3/"+r.projectId,throttleCallback:(e,t)=>(r.projectId===he&&i(),Promise.resolve(!0))};return null!=r.projectSecret&&(n.user="",n.password=r.projectSecret),n}isCommunityResource(){return this.projectId===he}}const me=new e(t);class ge extends S{static getApiKey(e){return e&&"string"!=typeof e&&me.throwArgumentError("invalid apiKey","apiKey",e),e||"ETHERS_JS_SHARED"}static getUrl(e,t){me.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");let r=null;switch(e.name){case"homestead":r="https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";break;case"ropsten":r="https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";break;case"rinkeby":r="https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";break;case"goerli":r="https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";break;case"kovan":r="https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";break;default:me.throwArgumentError("unsupported network","network",arguments[0])}return r+"?apiKey="+t}}const fe=new e(t),we="62e1ad51b37b8e00394bda3b";class ke extends S{static getApiKey(e){const t={applicationId:null,loadBalancer:!0,applicationSecretKey:null};return null==e?t.applicationId=we:"string"==typeof e?t.applicationId=e:null!=e.applicationSecretKey?(t.applicationId=e.applicationId,t.applicationSecretKey=e.applicationSecretKey):e.applicationId?t.applicationId=e.applicationId:fe.throwArgumentError("unsupported PocketProvider apiKey","apiKey",e),t}static getUrl(t,r){let o=null;switch(t?t.name:"unknown"){case"goerli":o="eth-goerli.gateway.pokt.network";break;case"homestead":o="eth-mainnet.gateway.pokt.network";break;case"kovan":o="poa-kovan.gateway.pokt.network";break;case"matic":o="poly-mainnet.gateway.pokt.network";break;case"maticmum":o="polygon-mumbai-rpc.gateway.pokt.network";break;case"rinkeby":o="eth-rinkeby.gateway.pokt.network";break;case"ropsten":o="eth-ropsten.gateway.pokt.network";break;default:fe.throwError("unsupported network",e.errors.INVALID_ARGUMENT,{argument:"network",value:t})}const n={headers:{},url:`https://${o}/v1/lb/${r.applicationId}`};return null!=r.applicationSecretKey&&(n.user="",n.password=r.applicationSecretKey),n}isCommunityResource(){return this.applicationId===we}}const be=new e(t);function ye(t,o){if(null==t&&(t="homestead"),"string"==typeof t){const e=t.match(/^(ws|http)s?:/i);if(e)switch(e[1].toLowerCase()){case"http":case"https":return new r(t);case"ws":case"wss":return new T(t);default:be.throwArgumentError("unsupported URL scheme","network",t)}}const n=k(t);return n&&n._defaultProvider||be.throwError("unsupported getDefaultProvider network",e.errors.NETWORK_ERROR,{operation:"getDefaultProvider",network:t}),n._defaultProvider({FallbackProvider:le,AlchemyProvider:j,AnkrProvider:B,CloudflareProvider:L,EtherscanProvider:V,InfuraProvider:de,JsonRpcProvider:r,NodesmithProvider:ge,PocketProvider:ke,Web3Provider:b,IpcProvider:null},o)}export{y as _,ye as g};
