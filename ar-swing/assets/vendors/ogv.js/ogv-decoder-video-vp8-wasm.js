var OGVDecoderVideoVP8W=(()=>{var e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return"undefined"!=typeof __filename&&(e=e||__filename),function(n){var t,r,o;n=n||{},t||(t=void 0!==n?n:{}),t.ready=new Promise((function(e,n){r=e,o=n}));var i,a,c,u,s,f,d=t,l=Object.assign({},t),p="object"==typeof window,y="function"==typeof importScripts,m="";"object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node?(m=y?require("path").dirname(m)+"/":__dirname+"/",f=()=>{s||(u=require("fs"),s=require("path"))},i=function(e,n){return f(),e=s.normalize(e),u.readFileSync(e,n?void 0:"utf8")},c=e=>((e=i(e,!0)).buffer||(e=new Uint8Array(e)),e),a=(e,n,t)=>{f(),e=s.normalize(e),u.readFile(e,(function(e,r){e?t(e):n(r.buffer)}))},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("unhandledRejection",(function(e){throw e})),t.inspect=function(){return"[Emscripten Module object]"}):(p||y)&&(y?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),e&&(m=e),m=0!==m.indexOf("blob:")?m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i=e=>{var n=new XMLHttpRequest;return n.open("GET",e,!1),n.send(null),n.responseText},y&&(c=e=>{var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),a=(e,n,t)=>{var r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=()=>{200==r.status||0==r.status&&r.response?n(r.response):t()},r.onerror=t,r.send(null)}),t.print||console.log.bind(console);var h=t.printErr||console.warn.bind(console);Object.assign(t,l),l=null;var v,_=0;t.wasmBinary&&(v=t.wasmBinary),t.noExitRuntime,"object"!=typeof WebAssembly&&T("no native wasm support detected");var g,w,b,A=!1;function R(){var e=g.buffer;w=e,t.HEAP8=new Int8Array(e),t.HEAP16=new Int16Array(e),t.HEAP32=new Int32Array(e),t.HEAPU8=b=new Uint8Array(e),t.HEAPU16=new Uint16Array(e),t.HEAPU32=new Uint32Array(e),t.HEAPF32=new Float32Array(e),t.HEAPF64=new Float64Array(e)}var W,H=[],U=[],F=[];function P(){var e=t.preRun.shift();H.unshift(e)}var E,S=0,j=null,I=null;function T(e){throw t.onAbort&&t.onAbort(e),h(e="Aborted("+e+")"),A=!0,e=new WebAssembly.RuntimeError(e+". Build with -s ASSERTIONS=1 for more info."),o(e),e}function V(){return E.startsWith("data:application/octet-stream;base64,")}if(t.preloadedImages={},t.preloadedAudios={},E="ogv-decoder-video-vp8-wasm.wasm",!V()){var x=E;E=t.locateFile?t.locateFile(x,m):m+x}function O(){var e=E;try{if(e==E&&v)return new Uint8Array(v);if(c)return c(e);throw"both async and sync fetching of the wasm failed"}catch(e){T(e)}}function k(e){for(;0<e.length;){var n=e.shift();if("function"==typeof n)n(t);else{var r=n.C;"number"==typeof r?void 0===n.A?D(r)():D(r)(n.A):r(void 0===n.A?null:n.A)}}}var B=[];function D(e){var n=B[e];return n||(e>=B.length&&(B.length=e+1),B[e]=n=W.get(e)),n}var M={e:function(){throw 1/0},g:function(e,n,t){b.copyWithin(e,n,n+t)},f:function(e){var n=b.length;if(2147483648<(e>>>=0))return!1;for(var t=1;4>=t;t*=2){var r=n*(1+.2/t);r=Math.min(r,e+100663296);var o=Math;r=Math.max(e,r),o=o.min.call(o,2147483648,r+(65536-r%65536)%65536);e:{try{g.grow(o-w.byteLength+65535>>>16),R();var i=1;break e}catch(e){}i=void 0}if(i)return!0}return!1},a:function(){return _},d:function(e,n,t){var r=X();try{return D(e)(n,t)}catch(e){if(N(r),e!==e+0)throw e;C(1,0)}},i:function(e,n,t,r){var o=X();try{return D(e)(n,t,r)}catch(e){if(N(o),e!==e+0)throw e;C(1,0)}},j:function(e,n,t,r,o,i){var a=X();try{return J(e,n,t,r,o,i)}catch(e){if(N(a),e!==e+0)throw e;C(1,0)}},h:function(e,n){var t=X();try{D(e)(n)}catch(e){if(N(t),e!==e+0)throw e;C(1,0)}},c:function(e,n,t,r,o){var i=X();try{D(e)(n,t,r,o)}catch(e){if(N(i),e!==e+0)throw e;C(1,0)}},k:function(e,n,r,o,i,a,c,u,s,f,d,l,p,y,m,h){function v(e,n,t,r,o,i,a,c,u){var s,f;for(e.set(new Uint8Array(_,n,t*r)),s=f=0;s<i;s++,f+=t)for(n=0;n<t;n++)e[f+n]=u;for(;s<i+c;s++,f+=t){for(n=0;n<o;n++)e[f+n]=u;for(n=o+a;n<t;n++)e[f+n]=u}for(;s<r;s++,f+=t)for(n=0;n<t;n++)e[f+n]=u;return e}var _=g.buffer,w=t.videoFormat,b=(-2&p)*s/c,A=(-2&y)*f/u,R=d*s/c,W=l*f/u;d===w.cropWidth&&l===w.cropHeight&&(m=w.displayWidth,h=w.displayHeight);for(var H,U=t.recycledFrames,F=u*n,P=f*o,E=f*a;0<U.length;){var S=U.shift();if((w=S.format).width===c&&w.height===u&&w.chromaWidth===s&&w.chromaHeight===f&&w.cropLeft===p&&w.cropTop===y&&w.cropWidth===d&&w.cropHeight===l&&w.displayWidth===m&&w.displayHeight===h&&S.y.bytes.length===F&&S.u.bytes.length===P&&S.v.bytes.length===E){H=S;break}}H||(H={format:{width:c,height:u,chromaWidth:s,chromaHeight:f,cropLeft:p,cropTop:y,cropWidth:d,cropHeight:l,displayWidth:m,displayHeight:h},y:{bytes:new Uint8Array(F),stride:n},u:{bytes:new Uint8Array(P),stride:o},v:{bytes:new Uint8Array(E),stride:a}}),v(H.y.bytes,e,n,u,p,y,d,l,0),v(H.u.bytes,r,o,f,b,A,R,W,128),v(H.v.bytes,i,a,f,b,A,R,W,128),t.frameBuffer=H},b:function(e){_=e}};!function(){function e(e){t.asm=e.exports,g=t.asm.l,R(),W=t.asm.s,U.unshift(t.asm.m),S--,t.monitorRunDependencies&&t.monitorRunDependencies(S),0==S&&(null!==j&&(clearInterval(j),j=null),I&&(e=I,I=null,e()))}function n(n){e(n.instance)}function r(e){return function(){if(!v&&(p||y)){if("function"==typeof fetch&&!E.startsWith("file://"))return fetch(E,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+E+"'";return e.arrayBuffer()})).catch((function(){return O()}));if(a)return new Promise((function(e,n){a(E,(function(n){e(new Uint8Array(n))}),n)}))}return Promise.resolve().then((function(){return O()}))}().then((function(e){return WebAssembly.instantiate(e,i)})).then((function(e){return e})).then(e,(function(e){h("failed to asynchronously prepare wasm: "+e),T(e)}))}var i={a:M};if(S++,t.monitorRunDependencies&&t.monitorRunDependencies(S),t.instantiateWasm)try{return t.instantiateWasm(i,e)}catch(e){return h("Module.instantiateWasm callback failed with error: "+e),!1}(v||"function"!=typeof WebAssembly.instantiateStreaming||V()||E.startsWith("file://")||"function"!=typeof fetch?r(n):fetch(E,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,i).then(n,(function(e){return h("wasm streaming compile failed: "+e),h("falling back to ArrayBuffer instantiation"),r(n)}))}))).catch(o)}(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.m).apply(null,arguments)},t._ogv_video_decoder_init=function(){return(t._ogv_video_decoder_init=t.asm.n).apply(null,arguments)},t._ogv_video_decoder_async=function(){return(t._ogv_video_decoder_async=t.asm.o).apply(null,arguments)},t._ogv_video_decoder_destroy=function(){return(t._ogv_video_decoder_destroy=t.asm.p).apply(null,arguments)},t._ogv_video_decoder_process_header=function(){return(t._ogv_video_decoder_process_header=t.asm.q).apply(null,arguments)},t._ogv_video_decoder_process_frame=function(){return(t._ogv_video_decoder_process_frame=t.asm.r).apply(null,arguments)},t._malloc=function(){return(t._malloc=t.asm.t).apply(null,arguments)},t._free=function(){return(t._free=t.asm.u).apply(null,arguments)};var G,L,q,z,C=t._setThrew=function(){return(C=t._setThrew=t.asm.v).apply(null,arguments)},X=t.stackSave=function(){return(X=t.stackSave=t.asm.w).apply(null,arguments)},N=t.stackRestore=function(){return(N=t.stackRestore=t.asm.x).apply(null,arguments)},J=t.dynCall_iiiij=function(){return(J=t.dynCall_iiiij=t.asm.y).apply(null,arguments)};function K(){function e(){if(!G&&(G=!0,t.calledRun=!0,!A)){if(k(U),r(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;){var e=t.postRun.shift();F.unshift(e)}k(F)}}if(!(0<S)){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)P();k(H),0<S||(t.setStatus?(t.setStatus("Running..."),setTimeout((function(){setTimeout((function(){t.setStatus("")}),1),e()}),1)):e())}}if(I=function e(){G||K(),G||(I=e)},t.run=K,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);0<t.preInit.length;)t.preInit.pop()();function Q(e){var n=z();return e=e(),t.cpuTime+=z()-n,e}return K(),z="undefined"==typeof performance||void 0===performance.now?Date.now:performance.now.bind(performance),t.loadedMetadata=!!d.videoFormat,t.videoFormat=d.videoFormat||null,t.frameBuffer=null,t.cpuTime=0,Object.defineProperty(t,"processing",{get:function(){return!1}}),t.init=function(e){Q((function(){t._ogv_video_decoder_init()})),e()},t.processHeader=function(e,n){n(Q((function(){var n=e.byteLength;L&&q>=n||(L&&t._free(L),q=n,L=t._malloc(q));var r=L;return new Uint8Array(g.buffer,r,n).set(new Uint8Array(e)),t._ogv_video_decoder_process_header(r,n)})))},t.B=[],t.processFrame=function(e,n){function r(e){t._free(a),n(e)}var o=t._ogv_video_decoder_async(),i=e.byteLength,a=t._malloc(i);o&&t.B.push(r);var c=Q((function(){return new Uint8Array(g.buffer,a,i).set(new Uint8Array(e)),t._ogv_video_decoder_process_frame(a,i)}));o||r(c)},t.close=function(){},t.sync=function(){t._ogv_video_decoder_async()&&(t.B.push((function(){})),Q((function(){t._ogv_video_decoder_process_frame(0,0)})))},t.recycledFrames=[],t.recycleFrame=function(e){var n=t.recycledFrames;n.push(e),16<n.length&&n.shift()},n.ready}})();"object"==typeof exports&&"object"==typeof module?module.exports=OGVDecoderVideoVP8W:"function"==typeof define&&define.amd?define([],(function(){return OGVDecoderVideoVP8W})):"object"==typeof exports&&(exports.OGVDecoderVideoVP8W=OGVDecoderVideoVP8W);