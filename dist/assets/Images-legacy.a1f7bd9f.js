!function(){function e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.220945f9.js","./Folder-legacy.f4a1be12.js","./index-legacy.1d467dc2.js","./ImageWithError-legacy.dcdb6e25.js","./icon-legacy.67eca749.js","./helper-legacy.ccc43c79.js","./GridItem-legacy.5417ea75.js","./Layout-legacy.f2b4986d.js","./useTitle-legacy.29c28231.js","./FolderTree-legacy.437d6117.js","./index-legacy.d5350845.js","./video_box-legacy.45a545ed.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js","./Paginator-legacy.47275923.js","./index-legacy.2a9e5bf5.js","./index-legacy.fda02e79.js"],(function(t){"use strict";var r,i,o,a,c,l,u,s,f,d,g,b,y,h,m,p,j,v,w,x,$,_,S,O,k,I,M,A,P,C,E,L,G;return{setters:[function(e){r=e.bI,i=e.h,o=e.al,a=e.ax,c=e.m,l=e.k,u=e.aM,s=e.a5,f=e.a4,d=e.t,g=e.aO,b=e.dk,y=e.aC,h=e.S,m=e.av,p=e.aw,j=e.ad,v=e.a,w=e.G,x=e.a1,$=e.cW,_=e.l,S=e.bP,O=e.bQ},function(e){k=e.b},function(e){I=e.u},function(e){M=e.I},function(e){A=e.O,P=e.g},function(e){C=e.u,E=e.I,L=e.a},function(e){G=e.G},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var z=function(t){if((0,r().isHide)(t.obj)||t.obj.type!==A.IMAGE)return null;var v=I().setPathAs,w=i(a,{get color(){return o()},boxSize:"$12",get as(){return P(t.obj)}}),x=n(c(!1),2),$=x[0],_=x[1],S=l((function(){return u()&&($()||t.obj.selected)})),O=k({id:1}).show,G=s().rawLink,z=L().isMouseSupported,F=C();return i(j.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){var n,r,a;return i(f,(r={w:"$full",get classList(){return{selected:!!t.obj.selected}},class:"image-item viselect-item"},(a={})[n="data-index"]=a[n]||{},a[n].get=function(){return t.index},e(r,"p","$1"),e(r,"spacing","$1"),e(r,"rounded","$lg"),e(r,"transition","all 0.3s"),e(r,"border","2px solid transparent"),"_hover",a._hover=a._hover||{},a._hover.get=function(){return{border:"2px solid ".concat(o())}},e(r,"onMouseEnter",(function(){_(!0),v(t.obj.name,t.obj.is_dir,!0)})),e(r,"onMouseLeave",(function(){_(!1)})),e(r,"onContextMenu",(function(e){d((function(){g(!1),b(t.index,!0,!0)})),O(e,{props:t.obj})})),"children",a.children=a.children||{},a.children.get=function(){return i(y,{w:"$full",pos:"relative",get children(){return[i(h,{get when(){return S()||z()&&t.obj.selected},get children(){return i(E,{pos:"absolute",left:"$1",top:"$1",get checked(){return t.obj.selected},onChange:function(e){b(t.index,e.target.checked)}})}}),i(M,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return i(m,{size:"lg"})},fallbackErr:w,get src(){return G(t.obj)},loading:"lazy",get cursor(){return z()||u()&&!F()?"default":"pointer"},"on:dblclick":function(e){z()&&(e.ctrlKey||e.metaKey||e.shiftKey||p.emit("gallery",t.obj.name))},"on:click":function(){z()||(u()&&!F()?b(t.index,!t.obj.selected):p.emit("gallery",t.obj.name))}})]}})},function(e,n){for(var t in n)(o=n[t]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t,o);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(n),i=0;i<r.length;i++){var o,a=r[i];(o=n[a]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a,o)}}(r,a),r))}})};t("default",(function(e){var n=v(),t=l((function(){return i($,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return i(w,{get each(){return x.objs.filter((function(e){return e.is_dir}))},children:function(e,n){return i(G,{obj:e,get index(){return n()}})}})}})})),r=L(),o=r.isMouseSupported,a=r.registerSelectContainer,c=r.captureContentMenu;return a(),i(f,{"oncapture:contextmenu":c,get classList(){return{"viselect-container":o()}},spacing:"$2",w:"$full",get children(){return[i(h,{get when(){return"top"===_.show_folder_in_image_view},get children(){return t()}}),i(h,{get when(){return e.images.length>0},get fallback(){return i(S,{m:"$2",get children(){return n("home.no_images")}})},get children(){return i(O,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return i(w,{get each(){return x.objs},children:function(e,n){return i(z,{obj:e,get index(){return n()}})}})}})}}),i(h,{get when(){return"bottom"===_.show_folder_in_image_view},get children(){return t()}})]}})}))}}}))}();
