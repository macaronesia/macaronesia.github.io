var OGVDemuxerOggW=(()=>{var e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return"undefined"!=typeof __filename&&(e=e||__filename),function(n){var t,r,o;n=n||{},t||(t=void 0!==n?n:{}),t.ready=new Promise((function(e,n){r=e,o=n}));var i,a,u,s,c,f,d=Object.assign({},t),l="object"==typeof window,p="function"==typeof importScripts,m="";"object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node?(m=p?require("path").dirname(m)+"/":__dirname+"/",f=()=>{c||(s=require("fs"),c=require("path"))},i=function(e,n){return f(),e=c.normalize(e),s.readFileSync(e,n?void 0:"utf8")},u=e=>((e=i(e,!0)).buffer||(e=new Uint8Array(e)),e),a=(e,n,t)=>{f(),e=c.normalize(e),s.readFile(e,(function(e,r){e?t(e):n(r.buffer)}))},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("unhandledRejection",(function(e){throw e})),t.inspect=function(){return"[Emscripten Module object]"}):(l||p)&&(p?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),e&&(m=e),m=0!==m.indexOf("blob:")?m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i=e=>{var n=new XMLHttpRequest;return n.open("GET",e,!1),n.send(null),n.responseText},p&&(u=e=>{var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),a=(e,n,t)=>{var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?n(r.response):t()},r.onerror=t,r.send(null)}),t.print||console.log.bind(console);var _,y=t.printErr||console.warn.bind(console);Object.assign(t,d),d=null,t.wasmBinary&&(_=t.wasmBinary),t.noExitRuntime,"object"!=typeof WebAssembly&&E("no native wasm support detected");var v,g,h,b,k=!1;function P(){var e=v.buffer;g=e,t.HEAP8=new Int8Array(e),t.HEAP16=new Int16Array(e),t.HEAP32=b=new Int32Array(e),t.HEAPU8=h=new Uint8Array(e),t.HEAPU16=new Uint16Array(e),t.HEAPU32=new Uint32Array(e),t.HEAPF32=new Float32Array(e),t.HEAPF64=new Float64Array(e)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf8");var w,x=[],A=[],R=[];function O(){var e=t.preRun.shift();x.unshift(e)}var j,T=0,U=null,W=null;function E(e){throw t.onAbort&&t.onAbort(e),y(e="Aborted("+e+")"),k=!0,e=new WebAssembly.RuntimeError(e+". Build with -s ASSERTIONS=1 for more info."),o(e),e}function I(){return j.startsWith("data:application/octet-stream;base64,")}if(t.preloadedImages={},t.preloadedAudios={},j="ogv-demuxer-ogg-wasm.wasm",!I()){var S=j;j=t.locateFile?t.locateFile(S,m):m+S}function D(){var e=j;try{if(e==j&&_)return new Uint8Array(_);if(u)return u(e);throw"both async and sync fetching of the wasm failed"}catch(e){E(e)}}function M(e){for(;0<e.length;){var n=e.shift();if("function"==typeof n)n(t);else{var r=n.B;"number"==typeof r?void 0===n.v?q(r)():q(r)(n.v):r(void 0===n.v?null:n.v)}}}var H=[];function q(e){var n=H[e];return n||(e>=H.length&&(H.length=e+1),H[e]=n=w.get(e)),n}var C,F,G,V,B={},K={f:function(e,n,t){h.copyWithin(e,n,n+t)},d:function(e){var n=h.length;if(2147483648<(e>>>=0))return!1;for(var t=1;4>=t;t*=2){var r=n*(1+.2/t);r=Math.min(r,e+100663296);var o=Math;r=Math.max(e,r),o=o.min.call(o,2147483648,r+(65536-r%65536)%65536);e:{try{v.grow(o-g.byteLength+65535>>>16),P();var i=1;break e}catch(e){}i=void 0}if(i)return!0}return!1},e:function(e,n,t,r){return e=B.C(e),n=B.A(e,n,t),b[r>>2]=n,0},a:function(e,n,r,o){var i=v.buffer;t.audioPackets.push({data:i.slice?i.slice(e,e+n):new Uint8Array(new Uint8Array(i,e,n)).buffer,timestamp:r,discardPadding:o})},c:function(e,n){function r(e){for(var n="",t=new Uint8Array(v.buffer);0!=t[e];e++)n+=String.fromCharCode(t[e]);return n}e&&(t.videoCodec=r(e)),n&&(t.audioCodec=r(n)),e=t._ogv_demuxer_media_duration(),t.duration=0<=e?e:NaN,t.loadedMetadata=!0},b:function(e,n,r,o,i){var a=v.buffer;t.videoPackets.push({data:a.slice?a.slice(e,e+n):new Uint8Array(new Uint8Array(a,e,n)).buffer,timestamp:r,keyframeTimestamp:o,isKeyframe:!!i})}};function L(){function e(){if(!C&&(C=!0,t.calledRun=!0,!k)){if(M(A),r(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;){var e=t.postRun.shift();R.unshift(e)}M(R)}}if(!(0<T)){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)O();M(x),0<T||(t.setStatus?(t.setStatus("Running..."),setTimeout((function(){setTimeout((function(){t.setStatus("")}),1),e()}),1)):e())}}if(function(){function e(e){t.asm=e.exports,v=t.asm.g,P(),w=t.asm.s,A.unshift(t.asm.h),T--,t.monitorRunDependencies&&t.monitorRunDependencies(T),0==T&&(null!==U&&(clearInterval(U),U=null),W&&(e=W,W=null,e()))}function n(n){e(n.instance)}function r(e){return function(){if(!_&&(l||p)){if("function"==typeof fetch&&!j.startsWith("file://"))return fetch(j,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+j+"'";return e.arrayBuffer()})).catch((function(){return D()}));if(a)return new Promise((function(e,n){a(j,(function(n){e(new Uint8Array(n))}),n)}))}return Promise.resolve().then((function(){return D()}))}().then((function(e){return WebAssembly.instantiate(e,i)})).then((function(e){return e})).then(e,(function(e){y("failed to asynchronously prepare wasm: "+e),E(e)}))}var i={a:K};if(T++,t.monitorRunDependencies&&t.monitorRunDependencies(T),t.instantiateWasm)try{return t.instantiateWasm(i,e)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(_||"function"!=typeof WebAssembly.instantiateStreaming||I()||j.startsWith("file://")||"function"!=typeof fetch?r(n):fetch(j,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,i).then(n,(function(e){return y("wasm streaming compile failed: "+e),y("falling back to ArrayBuffer instantiation"),r(n)}))}))).catch(o)}(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.h).apply(null,arguments)},t._ogv_demuxer_init=function(){return(t._ogv_demuxer_init=t.asm.i).apply(null,arguments)},t._ogv_demuxer_receive_input=function(){return(t._ogv_demuxer_receive_input=t.asm.j).apply(null,arguments)},t._ogv_demuxer_process=function(){return(t._ogv_demuxer_process=t.asm.k).apply(null,arguments)},t._ogv_demuxer_destroy=function(){return(t._ogv_demuxer_destroy=t.asm.l).apply(null,arguments)},t._ogv_demuxer_media_length=function(){return(t._ogv_demuxer_media_length=t.asm.m).apply(null,arguments)},t._ogv_demuxer_media_duration=function(){return(t._ogv_demuxer_media_duration=t.asm.n).apply(null,arguments)},t._ogv_demuxer_seekable=function(){return(t._ogv_demuxer_seekable=t.asm.o).apply(null,arguments)},t._ogv_demuxer_keypoint_offset=function(){return(t._ogv_demuxer_keypoint_offset=t.asm.p).apply(null,arguments)},t._ogv_demuxer_seek_to_keypoint=function(){return(t._ogv_demuxer_seek_to_keypoint=t.asm.q).apply(null,arguments)},t._ogv_demuxer_flush=function(){return(t._ogv_demuxer_flush=t.asm.r).apply(null,arguments)},t._malloc=function(){return(t._malloc=t.asm.t).apply(null,arguments)},t._free=function(){return(t._free=t.asm.u).apply(null,arguments)},W=function e(){C||L(),C||(W=e)},t.run=L,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);0<t.preInit.length;)t.preInit.pop()();function N(e){var n=V();return e=e(),n=V()-n,t.cpuTime+=n,e}return L(),V="undefined"==typeof performance||void 0===performance.now?Date.now:performance.now.bind(performance),t.loadedMetadata=!1,t.videoCodec=null,t.audioCodec=null,t.duration=NaN,t.onseek=null,t.cpuTime=0,t.audioPackets=[],Object.defineProperty(t,"hasAudio",{get:function(){return t.loadedMetadata&&t.audioCodec}}),Object.defineProperty(t,"audioReady",{get:function(){return 0<t.audioPackets.length}}),Object.defineProperty(t,"audioTimestamp",{get:function(){return 0<t.audioPackets.length?t.audioPackets[0].timestamp:-1}}),t.videoPackets=[],Object.defineProperty(t,"hasVideo",{get:function(){return t.loadedMetadata&&t.videoCodec}}),Object.defineProperty(t,"frameReady",{get:function(){return 0<t.videoPackets.length}}),Object.defineProperty(t,"frameTimestamp",{get:function(){return 0<t.videoPackets.length?t.videoPackets[0].timestamp:-1}}),Object.defineProperty(t,"keyframeTimestamp",{get:function(){return 0<t.videoPackets.length?t.videoPackets[0].keyframeTimestamp:-1}}),Object.defineProperty(t,"nextKeyframeTimestamp",{get:function(){for(var e=0;e<t.videoPackets.length;e++){var n=t.videoPackets[e];if(n.isKeyframe)return n.timestamp}return-1}}),Object.defineProperty(t,"processing",{get:function(){return!1}}),Object.defineProperty(t,"seekable",{get:function(){return!!t._ogv_demuxer_seekable()}}),t.init=function(e){N((function(){t._ogv_demuxer_init()})),e()},t.receiveInput=function(e,n){N((function(){var n=e.byteLength;F&&G>=n||(F&&t._free(F),G=n,F=t._malloc(G));var r=F;new Uint8Array(v.buffer,r,n).set(new Uint8Array(e)),t._ogv_demuxer_receive_input(r,n)})),n()},t.process=function(e){e(!!N((function(){return t._ogv_demuxer_process()})))},t.dequeueVideoPacket=function(e){t.videoPackets.length?e(t.videoPackets.shift().data):e(null)},t.dequeueAudioPacket=function(e){if(t.audioPackets.length){var n=t.audioPackets.shift();e(n.data,n.discardPadding)}else e(null)},t.getKeypointOffset=function(e,n){n(N((function(){return t._ogv_demuxer_keypoint_offset(1e3*e)})))},t.seekToKeypoint=function(e,n){var r=N((function(){return t._ogv_demuxer_seek_to_keypoint(1e3*e)}));r&&(t.audioPackets.splice(0,t.audioPackets.length),t.videoPackets.splice(0,t.videoPackets.length)),n(!!r)},t.flush=function(e){N((function(){t.audioPackets.splice(0,t.audioPackets.length),t.videoPackets.splice(0,t.videoPackets.length),t._ogv_demuxer_flush()})),e()},t.close=function(){},n.ready}})();"object"==typeof exports&&"object"==typeof module?module.exports=OGVDemuxerOggW:"function"==typeof define&&define.amd?define([],(function(){return OGVDemuxerOggW})):"object"==typeof exports&&(exports.OGVDemuxerOggW=OGVDemuxerOggW);