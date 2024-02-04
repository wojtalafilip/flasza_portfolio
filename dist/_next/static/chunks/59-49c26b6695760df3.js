"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59],{2059:function(e,t,n){n.d(t,{Z:function(){return PhotoAlbum}});var r=n(2265);function round(e,t=0){let n=10**t;return Math.round((e+Number.EPSILON)*n)/n}function rankingFunctionComparator(e){return(t,n)=>e(n)-e(t)}let MinHeap=class MinHeap{constructor(e){this.comparator=e,this.heap=[],this.n=0}greater(e,t){return 0>this.comparator(this.heap[e],this.heap[t])}swap(e,t){let n=this.heap[e];this.heap[e]=this.heap[t],this.heap[t]=n}swim(e){let t=e,n=Math.floor(t/2);for(;t>1&&this.greater(n,t);)this.swap(n,t),n=Math.floor((t=n)/2)}sink(e){let t=e,n=2*t;for(;n<=this.n&&(n<this.n&&this.greater(n,n+1)&&(n+=1),this.greater(t,n));)this.swap(t,n),n=2*(t=n)}push(e){this.n+=1,this.heap[this.n]=e,this.swim(this.n)}pop(){if(0===this.n)return;this.swap(1,this.n),this.n-=1;let e=this.heap.pop();return this.sink(1),e}size(){return this.n}};function buildPrecedentsMap(e,t,n){let r=new Map,o=new Set,l=new Map;l.set(t,0);let u=new MinHeap(rankingFunctionComparator(e=>e.weight));for(u.push({id:t,weight:0});u.size()>0;){let{id:t,weight:n}=u.pop();if(!o.has(t)){let i=e(t);o.add(t),i.forEach((e,o)=>{let i=n+e,a=r.get(o),s=l.get(o);(void 0===s||s>i&&(s/i>1.005||void 0!==a&&a<t))&&(l.set(o,i),u.push({id:o,weight:i}),r.set(o,t))})}}return l.has(n)?r:void 0}function getPathFromPrecedentsMap(e,t){let n=[];for(let r=t;void 0!==r;r=e.get(r))n.push(r);return n.reverse()}function findShortestPath(e,t,n){let r=buildPrecedentsMap(e,t,n);return r?getPathFromPrecedentsMap(r,n):void 0}function findIdealNodeSearch({photos:e,targetRowHeight:t,containerWidth:n}){let r=e.reduce((e,t)=>Math.min(function({width:e,height:t}){return e/t}(t),e),Number.MAX_VALUE);return round(n/t/r)+2}function getCommonHeight(e,t,n,r){let o=t-(e.length-1)*n-2*r*e.length,l=e.reduce((e,t)=>e+function({width:e,height:t}){return e/t}(t),0);return o/l}function cost(e,t,n,r,o,l,u){let i=e.slice(t,n),a=getCommonHeight(i,r,l,u);return a>0?(a-o)**2*i.length:void 0}function makeGetRowNeighbors({photos:e,layoutOptions:t,targetRowHeight:n,limitNodeSearch:r,rowConstraints:o}){return l=>{var u,i;let{containerWidth:a,spacing:s,padding:c}=t,h=new Map;h.set(l,0);let d=null!=(u=null==o?void 0:o.minPhotos)?u:1,p=Math.min(r,null!=(i=null==o?void 0:o.maxPhotos)?i:1/0);for(let t=l+d;t<e.length+1&&!(t-l>p);t+=1){let r=cost(e,l,t,a,n,s,c);if(void 0===r)break;h.set(t,r)}return h}}function computeRowsLayout({photos:e,layoutOptions:t}){let{spacing:n,padding:r,containerWidth:o,targetRowHeight:l,rowConstraints:u}=t,i=findIdealNodeSearch({photos:e,containerWidth:o,targetRowHeight:l}),a=makeGetRowNeighbors({photos:e,layoutOptions:t,targetRowHeight:l,limitNodeSearch:i,rowConstraints:u}),s=findShortestPath(a,0,e.length);if(void 0===s)return;let c=[];for(let t=1;t<s.length;t+=1){let l=e.map((e,t)=>({photo:e,index:t})).slice(s[t-1],s[t]),u=getCommonHeight(l.map(({photo:e})=>e),o,n,r);c.push(l.map(({photo:e,index:t},n)=>({photo:e,layout:{height:u,width:u*function({width:e,height:t}){return e/t}(e),index:t,photoIndex:n,photosCount:l.length}})))}return c}function clsx(...e){return[...e].filter(e=>!!e).join(" ")}function calcWidth(e,{width:t,photosCount:n},{spacing:r,padding:o,containerWidth:l}){let u=r*(n-1)+2*o*n;return`calc((${e} - ${u}px) / ${round((l-u)/t,5)})`}function cssPhotoWidth(e,t){return"rows"!==t.layout?`calc(100% - ${2*t.padding}px)`:calcWidth("100%",e,t)}function calculateSizesValue(e,t,n){var r,o;return calcWidth(null!=(o=null==(r=e.match(/calc\((.*)\)/))?void 0:r[1])?o:e,t,n)}function srcSetAndSizes(e,t,n){let r,o;let l=e.srcSet||e.images;return l&&l.length>0&&(r=l.concat(l.find(({width:t})=>t===e.width)?[]:[{src:e.src,width:e.width,height:e.height}]).sort((e,t)=>e.width-t.width).map(e=>`${e.src} ${e.width}w`).join(", ")),n.sizes?o=(n.sizes.sizes||[]).map(({viewport:e,size:r})=>`${e} ${calculateSizesValue(r,t,n)}`).concat(calculateSizesValue(n.sizes.size,t,n)).join(", "):r&&(o=`${Math.ceil(t.width/n.containerWidth*100)}vw`),{srcSet:r,sizes:o}}function PhotoRenderer(e){var t,n;let{photo:o,layout:l,layoutOptions:u,imageProps:{style:i,className:a,...s}={},renderPhoto:c}=e,{onClick:h}=u,d={display:"block",boxSizing:"content-box",width:cssPhotoWidth(l,u),height:"auto",aspectRatio:`${o.width} / ${o.height}`,...u.padding?{padding:`${u.padding}px`}:null,...("columns"===u.layout||"masonry"===u.layout)&&l.photoIndex<l.photosCount-1?{marginBottom:`${u.spacing}px`}:null,...h?{cursor:"pointer"}:null,...i},p=h?e=>{h({event:e,photo:o,index:l.index})}:void 0,m={src:o.src,alt:null!=(t=o.alt)?t:"",title:o.title,onClick:p,style:d,className:clsx("react-photo-album--photo",a),loading:"lazy",decoding:"async",...srcSetAndSizes(o,l,u),...s},renderDefaultPhoto=e=>{let{src:t,alt:n,srcSet:o,sizes:l,style:u,...i}=m;return r.createElement("img",{alt:n,...o?{srcSet:o,sizes:l}:null,src:t,style:(null==e?void 0:e.wrapped)?{display:"block",width:"100%",height:"100%"}:u,...i})},f=(({display:e,boxSizing:t,width:n,aspectRatio:r,padding:o,marginBottom:l,cursor:u})=>({display:e,boxSizing:t,width:n,aspectRatio:r,padding:o,marginBottom:l,cursor:u}))(d);return r.createElement(r.Fragment,null,null!=(n=null==c?void 0:c({photo:o,layout:l,layoutOptions:u,imageProps:m,renderDefaultPhoto,wrapperStyle:f}))?n:renderDefaultPhoto())}function defaultRenderRowContainer({rowContainerProps:e,children:t}){return r.createElement("div",{...e},t)}function RowContainerRenderer(e){let{layoutOptions:t,rowIndex:n,rowsCount:o,renderRowContainer:l,rowContainerProps:{style:u,className:i,...a}={},children:s}=e,c={className:clsx("react-photo-album--row",i),style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"flex-start",justifyContent:"space-between",...n<o-1?{marginBottom:`${t.spacing}px`}:null,...u},...a};return r.createElement(r.Fragment,null,(null!=l?l:defaultRenderRowContainer)({layoutOptions:t,rowIndex:n,rowsCount:o,rowContainerProps:c,children:s}))}function RowsLayout(e){let{photos:t,layoutOptions:n,renderPhoto:o,renderRowContainer:l,componentsProps:{imageProps:u,rowContainerProps:i}}=e,a=computeRowsLayout({photos:t,layoutOptions:n});return a?r.createElement(r.Fragment,null,a.map((e,t)=>r.createElement(RowContainerRenderer,{key:`row-${t}`,layoutOptions:n,rowIndex:t,rowsCount:a.length,renderRowContainer:l,rowContainerProps:i},e.map(({photo:e,layout:t})=>r.createElement(PhotoRenderer,{key:e.key||e.src,photo:e,layout:t,layoutOptions:n,renderPhoto:o,imageProps:u}))))):null}function computeShortestPath(e,t,n,r){let o=new Map,l=new Set;l.add(n);for(let n=0;n<t;n+=1){let u=[...l.keys()];l.clear(),u.forEach(u=>{let i=n>0?o.get(u)[n].weight:0;e(u).forEach(({neighbor:e,weight:a})=>{let s=o.get(e);s||(s=[],o.set(e,s));let c=i+a,h=s[n+1];(!h||h.weight>c&&(h.weight/c>1.0001||u<h.node))&&(s[n+1]={node:u,weight:c}),n<t-1&&e!==r&&l.add(e)})})}return o}function reconstructShortestPath(e,t,n){let r=[n];for(let o=n,l=t;l>0;l-=1)r.push(o=e.get(o)[l].node);return r.reverse()}function findShortestPathLengthN(e,t,n,r){return reconstructShortestPath(computeShortestPath(e,t,n,r),t,r)}function makeGetColumnNeighbors({photos:e,spacing:t,padding:n,targetColumnWidth:r,targetColumnHeight:o}){return l=>{let u=[],i=1.5*o,a=r/function({width:e,height:t}){return e/t}(e[l])+2*n;for(let s=l+1;s<e.length+1&&(u.push({neighbor:s,weight:(o-a)**2}),!(a>i)&&s!==e.length);s+=1)a+=r/function({width:e,height:t}){return e/t}(e[s])+t+2*n;return u}}function buildColumnsModel({path:e,photos:t,containerWidth:n,columnsGaps:r,columnsRatios:o,spacing:l,padding:u}){let i=[],a=o.reduce((e,t)=>e+t,0);for(let s=0;s<e.length-1;s+=1){let c=t.map((e,t)=>({photo:e,index:t})).slice(e[s],e[s+1]),h=o.reduce((e,t,n)=>e+(r[s]-r[n])*t,0),d=(n-(e.length-2)*l-2*(e.length-1)*u-h)*o[s]/a;i.push(c.map(({photo:e,index:t},n)=>({photo:e,layout:{width:d,height:d/function({width:e,height:t}){return e/t}(e),index:t,photoIndex:n,photosCount:c.length}})))}return i}function computeColumnsModel({photos:e,layoutOptions:t,targetColumnWidth:n}){let{columns:r,spacing:o,padding:l,containerWidth:u}=t,i=[],a=[];if(e.length<=r){let t=e.length>0?e.reduce((e,t)=>e+function({width:e,height:t}){return e/t}(t),0)/e.length:1;for(let n=0;n<r;n+=1)i[n]=2*l,a[n]=n<e.length?function({width:e,height:t}){return e/t}(e[n]):t;let n=buildColumnsModel({path:Array.from({length:r+1}).map((t,n)=>Math.min(n,e.length)),photos:e,columnsRatios:a,columnsGaps:i,containerWidth:u,spacing:o,padding:l});return{columnsGaps:i,columnsRatios:a,columnsModel:n}}let s=(e.reduce((e,t)=>e+n/function({width:e,height:t}){return e/t}(t),0)+o*(e.length-r)+2*l*e.length)/r,c=makeGetColumnNeighbors({photos:e,targetColumnWidth:n,targetColumnHeight:s,spacing:o,padding:l}),h=findShortestPathLengthN(c,r,0,e.length);for(let t=0;t<h.length-1;t+=1){let n=e.slice(h[t],h[t+1]);i[t]=o*(n.length-1)+2*l*n.length,a[t]=1/n.reduce((e,t)=>e+1/function({width:e,height:t}){return e/t}(t),0)}let d=buildColumnsModel({path:h,photos:e,columnsRatios:a,columnsGaps:i,containerWidth:u,spacing:o,padding:l});return{columnsGaps:i,columnsRatios:a,columnsModel:d}}function computeLayout(e){let{photos:t,layoutOptions:n}=e,{columns:r,spacing:o,padding:l,containerWidth:u}=n,{columnsGaps:i,columnsRatios:a,columnsModel:s}=computeColumnsModel({photos:t,layoutOptions:n,targetColumnWidth:(u-o*(r-1)-2*l*r)/r});return s.findIndex(e=>e.findIndex(({layout:{width:e,height:t}})=>e<0||t<0)>=0)>=0?r>1?computeLayout({photos:t,layoutOptions:{...n,columns:r-1}}):void 0:{columnsModel:s,columnsGaps:i,columnsRatios:a}}function computeColumnsLayout({photos:e,layoutOptions:t}){return computeLayout({photos:e,layoutOptions:t})}function defaultRenderColumnContainer({columnContainerProps:e,children:t}){return r.createElement("div",{...e},t)}function cssColumnWidth(e){let{layoutOptions:t,columnIndex:n,columnsCount:r,columnsGaps:o,columnsRatios:l}=e,{layout:u,spacing:i,padding:a}=t;if("masonry"===u||!o||!l)return`calc((100% - ${i*(r-1)}px) / ${r})`;let s=l.reduce((e,t)=>e+t,0),c=l.reduce((e,t,r)=>e+(o[n]-o[r])*t,0);return`calc((100% - ${round((r-1)*i+2*r*a+c,3)}px) * ${round(l[n]/s,5)} + ${2*a}px)`}function ColumnContainerRenderer(e){let{layoutOptions:t,renderColumnContainer:n,children:o,columnContainerProps:{style:l,className:u,...i}={},...a}=e,s={className:clsx("react-photo-album--column",u),style:{display:"flex",flexDirection:"column",flexWrap:"nowrap",alignItems:"flex-start",width:cssColumnWidth(e),justifyContent:"columns"===t.layout?"space-between":"flex-start",...l},...i};return r.createElement(r.Fragment,null,(null!=n?n:defaultRenderColumnContainer)({layoutOptions:t,columnContainerProps:s,children:o,...a}))}function ColumnsLayout(e){let{photos:t,layoutOptions:n,renderPhoto:o,renderColumnContainer:l,componentsProps:{imageProps:u,columnContainerProps:i}}=e,a=computeColumnsLayout({photos:t,layoutOptions:n});if(!a)return null;let{columnsModel:s,columnsRatios:c,columnsGaps:h}=a;return r.createElement(r.Fragment,null,s.map((e,t)=>r.createElement(ColumnContainerRenderer,{key:`column-${t}`,layoutOptions:n,columnIndex:t,columnsCount:s.length,columnsGaps:h,columnsRatios:c,renderColumnContainer:l,columnContainerProps:i},e.map(({photo:e,layout:t})=>r.createElement(PhotoRenderer,{key:e.key||e.src,photo:e,layout:t,layoutOptions:n,renderPhoto:o,imageProps:u})))))}function computeMasonryLayout(e){let{photos:t,layoutOptions:n}=e,{columns:r,spacing:o,padding:l,containerWidth:u}=n,i=(u-o*(r-1)-2*l*r)/r;if(i<=0)return r>1?computeMasonryLayout({...e,layoutOptions:{...n,columns:r-1}}):void 0;let a=[];for(let e=0;e<r;e+=1)a[e]=0;let s=t.reduce((e,t,n)=>{let r=a.reduce((e,t,n)=>t<a[e]-1?n:e,0);return a[r]=a[r]+i/function({width:e,height:t}){return e/t}(t)+o+2*l,e[r].push({photo:t,index:n}),e},Array.from({length:r}).map(()=>[]));return s.map(e=>e.map(({photo:t,index:n},r)=>({photo:t,layout:{width:i,height:i/function({width:e,height:t}){return e/t}(t),index:n,photoIndex:r,photosCount:e.length}})))}function MasonryLayout(e){let{photos:t,layoutOptions:n,renderPhoto:o,renderColumnContainer:l,componentsProps:{imageProps:u,columnContainerProps:i}}=e,a=computeMasonryLayout({photos:t,layoutOptions:n});return a?r.createElement(r.Fragment,null,a.map((e,t)=>r.createElement(ColumnContainerRenderer,{key:`masonry-column-${t}`,layoutOptions:n,columnsCount:a.length,columnIndex:t,renderColumnContainer:l,columnContainerProps:i},e.map(({photo:e,layout:t})=>r.createElement(PhotoRenderer,{key:e.key||e.src,photo:e,layout:t,layoutOptions:n,renderPhoto:o,imageProps:u}))))):null}function defaultRenderContainer({containerProps:e,children:t,containerRef:n}){return r.createElement("div",{ref:n,...e},t)}function ContainerRenderer(e){let{layout:t,renderContainer:n,children:o,containerRef:l,containerProps:{style:u,className:i,...a}={}}=e,s={className:clsx("react-photo-album",`react-photo-album--${t}`,i),style:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",flexDirection:"rows"===t?"column":"row",...u},...a};return r.createElement(r.Fragment,null,(null!=n?n:defaultRenderContainer)({containerProps:s,containerRef:l,layout:t,children:o}))}function useArray(e){let t=r.useRef(e);return e&&t.current&&e.join()===t.current.join()||(t.current=e),t.current}function containerWidthReducer(e,{newContainerWidth:t,newScrollbarWidth:n}){let{containerWidth:r,scrollbarWidth:o}=e;return void 0!==r&&void 0!==o&&void 0!==t&&void 0!==n&&t>r&&t-r<=20&&n<o?{containerWidth:r,scrollbarWidth:n}:r!==t||o!==n?{containerWidth:t,scrollbarWidth:n}:e}function resolveContainerWidth(e,t){let n=null==e?void 0:e.clientWidth;if(void 0!==n&&t&&t.length>0){let e=[...t.filter(e=>e>0)].sort((e,t)=>t-e);e.push(Math.floor(e[e.length-1]/2));let r=n;n=e.find((t,n)=>t<=r||n===e.length-1)}return n}function useContainerWidth(e,t){let[{containerWidth:n},o]=r.useReducer(containerWidthReducer,{containerWidth:t}),l=r.useRef(null),u=r.useRef(),i=r.useCallback(t=>{var n;null==(n=u.current)||n.disconnect(),u.current=void 0,l.current=t;let updateWidth=()=>o({newContainerWidth:resolveContainerWidth(l.current,e),newScrollbarWidth:window.innerWidth-document.documentElement.clientWidth});updateWidth(),t&&"undefined"!=typeof ResizeObserver&&(u.current=new ResizeObserver(updateWidth),u.current.observe(t))},[e]);return{containerRef:i,containerWidth:n}}let o=Object.freeze([1200,600,300,0]);function unwrap(e,t){return"function"==typeof e?e(t):e}function unwrapParameter(e,t){return void 0!==e?unwrap(e,t):void 0}function selectResponsiveValue(e,t){let n=o.findIndex(e=>e<=t);return unwrap(e[n>=0?n:0],t)}function resolveResponsiveParameter(e,t,n,r=0){let o=unwrapParameter(e,t);return Math.round(Math.max(void 0===o?selectResponsiveValue(n,t):o,r))}function resolveLayoutOptions({layout:e,onClick:t,containerWidth:n,targetRowHeight:r,rowConstraints:o,columns:l,spacing:u,padding:i,sizes:a}){return{layout:e,onClick:t,containerWidth:n,columns:resolveResponsiveParameter(l,n,[5,4,3,2],1),spacing:resolveResponsiveParameter(u,n,[20,15,10,5]),padding:resolveResponsiveParameter(i,n,[0,0,0,0,0]),targetRowHeight:resolveResponsiveParameter(r,n,[e=>e/5,e=>e/4,e=>e/3,e=>e/2]),rowConstraints:unwrapParameter(o,n),sizes:a}}function resolveComponentsProps(e,t,n){let{photos:r,componentsProps:o}=e,l=unwrap(o,t)||{};if(n){let{layout:e,spacing:t,padding:o,rowConstraints:u}=n;if("rows"===e){let{singleRowMaxHeight:e}=u||{};if(e){let n=Math.floor(r.reduce((t,{width:n,height:r})=>t+n/r*e-2*o,o*r.length*2+t*(r.length-1)));n>0&&(l.containerProps=l.containerProps||{},l.containerProps.style={maxWidth:n,...l.containerProps.style})}}}return l}function renderLayout(e,t,n){let{photos:o,layout:l,renderPhoto:u,renderRowContainer:i,renderColumnContainer:a}=e,s={photos:o,renderPhoto:u,componentsProps:t};return"rows"===l?r.createElement(RowsLayout,{layoutOptions:n,renderRowContainer:i,...s}):"columns"===l?r.createElement(ColumnsLayout,{layoutOptions:n,renderColumnContainer:a,...s}):r.createElement(MasonryLayout,{layoutOptions:n,renderColumnContainer:a,...s})}function PhotoAlbum(e){let{photos:t,layout:n,renderContainer:o,defaultContainerWidth:l,breakpoints:u}=e,{containerRef:i,containerWidth:a}=useContainerWidth(useArray(u),l);if(!n||!["rows","columns","masonry"].includes(n)||!Array.isArray(t))return null;let s=a?resolveLayoutOptions({containerWidth:a,...e}):void 0,c=resolveComponentsProps(e,a,s);return r.createElement(ContainerRenderer,{layout:n,containerRef:i,renderContainer:o,containerProps:c.containerProps},s&&renderLayout(e,c,s))}}}]);