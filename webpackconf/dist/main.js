!function(e){function r(r){for(var t,o,c=r[0],i=r[1],d=r[2],a=0,l=[];a<c.length;a++)o=c[a],x[o]&&l.push(x[o][0]),x[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(R&&R(r);l.length;)l.shift()();return I.push.apply(I,d||[]),n()}function n(){for(var e,r=0;r<I.length;r++){for(var n=I[r],t=!0,o=1;o<n.length;o++){var c=n[o];0!==x[c]&&(t=!1)}t&&(I.splice(r--,1),e=M(M.s=n[0]))}return e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,r){if(!_[e]||!O[e])return;for(var n in O[e]=!1,r)Object.prototype.hasOwnProperty.call(r,n)&&(v[n]=r[n]);0==--m&&0===b&&E()}(e,r),t&&t(e,r)};var o,c=!0,i="e71fe712b78e93b8d632",d=1e4,a={},l=[],u=[];var s=[],p="idle";function f(e){p=e;for(var r=0;r<s.length;r++)s[r].call(null,e)}var h,v,y,m=0,b=0,w={},O={},_={};function g(e){return+e+""===e?+e:e}function j(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return c=e,f("check"),function(e){return e=e||1e4,new Promise(function(r,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,o=M.p+""+i+".hot-update.json";t.open("GET",o,!0),t.timeout=e,t.send(null)}catch(e){return n(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)r();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(t.responseText)}catch(e){return void n(e)}r(e)}}})}(d).then(function(e){if(!e)return f("idle"),null;O={},w={},_=e.c,y=e.h,f("prepare");var r=new Promise(function(e,r){h={resolve:e,reject:r}});for(var n in v={},x)D(n);return"prepare"===p&&0===b&&0===m&&E(),r})}function D(e){_[e]?(O[e]=!0,m++,function(e){var r=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=M.p+""+e+"."+i+".hot-update.js",r.appendChild(n)}(e)):w[e]=!0}function E(){f("ready");var e=h;if(h=null,e)if(c)Promise.resolve().then(function(){return P(c)}).then(function(r){e.resolve(r)},function(r){e.reject(r)});else{var r=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&r.push(g(n));e.resolve(r)}}function P(r){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,t,o,c,d;function u(e){for(var r=[e],n={},t=r.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,d=o.chain;if((c=H[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var a=0;a<c.parents.length;a++){var l=c.parents[a],u=H[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([l]),moduleId:i,parentId:l};-1===r.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),s(n[l],[i])):(delete n[l],r.push(l),t.push({chain:d.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function s(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}r=r||{};var h={},m=[],b={},w=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var O in v)if(Object.prototype.hasOwnProperty.call(v,O)){var j;d=g(O);var D=!1,E=!1,P=!1,I="";switch((j=v[O]?u(d):{type:"disposed",moduleId:O}).chain&&(I="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(D=new Error("Aborted because of self decline: "+j.moduleId+I));break;case"declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+I));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(j),r.ignoreUnaccepted||(D=new Error("Aborted because "+d+" is not accepted"+I));break;case"accepted":r.onAccepted&&r.onAccepted(j),E=!0;break;case"disposed":r.onDisposed&&r.onDisposed(j),P=!0;break;default:throw new Error("Unexception type "+j.type)}if(D)return f("abort"),Promise.reject(D);if(E)for(d in b[d]=v[d],s(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,d)&&(h[d]||(h[d]=[]),s(h[d],j.outdatedDependencies[d]));P&&(s(m,[j.moduleId]),b[d]=w)}var k,A=[];for(t=0;t<m.length;t++)d=m[t],H[d]&&H[d].hot._selfAccepted&&A.push({module:d,errorHandler:H[d].hot._selfAccepted});f("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete x[e]}(e)});for(var S,R,U=m.slice();U.length>0;)if(d=U.pop(),c=H[d]){var q={},T=c.hot._disposeHandlers;for(o=0;o<T.length;o++)(n=T[o])(q);for(a[d]=q,c.hot.active=!1,delete H[d],delete h[d],o=0;o<c.children.length;o++){var J=H[c.children[o]];J&&((k=J.parents.indexOf(d))>=0&&J.parents.splice(k,1))}}for(d in h)if(Object.prototype.hasOwnProperty.call(h,d)&&(c=H[d]))for(R=h[d],o=0;o<R.length;o++)S=R[o],(k=c.children.indexOf(S))>=0&&c.children.splice(k,1);for(d in f("apply"),i=y,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var N=null;for(d in h)if(Object.prototype.hasOwnProperty.call(h,d)&&(c=H[d])){R=h[d];var B=[];for(t=0;t<R.length;t++)if(S=R[t],n=c.hot._acceptedDependencies[S]){if(-1!==B.indexOf(n))continue;B.push(n)}for(t=0;t<B.length;t++){n=B[t];try{n(R)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:d,dependencyId:R[t],error:e}),r.ignoreErrored||N||(N=e)}}}for(t=0;t<A.length;t++){var L=A[t];d=L.module,l=[d];try{M(d)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),r.ignoreErrored||N||(N=n),N||(N=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:d,error:e}),r.ignoreErrored||N||(N=e)}}return N?(f("fail"),Promise.reject(N)):(f("idle"),new Promise(function(e){e(m)}))}var H={},x={0:0},I=[];function M(r){if(H[r])return H[r].exports;var n=H[r]={i:r,l:!1,exports:{},hot:function(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},check:j,apply:P,status:function(e){if(!e)return p;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var r=s.indexOf(e);r>=0&&s.splice(r,1)},data:a[e]};return o=void 0,r}(r),parents:(u=l,l=[],u),children:[]};return e[r].call(n.exports,n,n.exports,function(e){var r=H[e];if(!r)return M;var n=function(n){return r.hot.active?(H[n]?-1===H[n].parents.indexOf(e)&&H[n].parents.push(e):(l=[e],o=n),-1===r.children.indexOf(n)&&r.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),M(n)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(r){M[e]=r}}};for(var c in M)Object.prototype.hasOwnProperty.call(M,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(n,c,t(c));return n.e=function(e){return"ready"===p&&f("prepare"),b++,M.e(e).then(r,function(e){throw r(),e});function r(){b--,"prepare"===p&&(w[e]||D(e),0===b&&0===m&&E())}},n.t=function(e,r){return 1&r&&(e=n(e)),M.t(e,-2&r)},n}(r)),n.l=!0,n.exports}M.m=e,M.c=H,M.d=function(e,r,n){M.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},M.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,r){if(1&r&&(e=M(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(M.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)M.d(n,t,function(r){return e[r]}.bind(null,t));return n},M.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(r,"a",r),r},M.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},M.p="",M.h=function(){return i};var k=window.webpackJsonp=window.webpackJsonp||[],A=k.push.bind(k);k.push=r,k=k.slice();for(var S=0;S<k.length;S++)r(k[S]);var R=A;I.push([14,1]),n()}({14:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const t=n(0),o=n(4),c=n(31),i=n(24),d=n(28);o.render(t.createElement(c.Provider,{store:i.store},t.createElement("div",null,"Init",t.createElement(d.Demo,null,"Hello from styled components"))),document.getElementById("root"))},24:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const t=n(5),o=n(25),c=t.combineReducers({common:o.commonReducer});r.store=t.createStore(c)},25:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const t=n(26);r.commonReducer=t.reducerWithInitialState({}).build()},28:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const t=n(29);r.Demo=t.default.div`
    color: red;
`}});