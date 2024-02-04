(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6264:function(e,t,n){Promise.resolve().then(n.bind(n,7695))},7695:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return RootLayout}});var l=n(7437),i=n(3699),r=n.n(i);n(2853);var a=n(6691),s=n.n(a),c=n(1396),o=n.n(c);function Logo(){return(0,l.jsx)(o(),{href:"/",className:"lg:mr-32",children:(0,l.jsx)(s(),{src:"/img/other/logo.png",width:410,height:75,alt:"Logo of the author",priority:!0,className:"w-80"})})}function NavLink(e){let{children:t,pagePath:n}=e;return(0,l.jsx)(o(),{href:n,className:"hover:text-cobalt hover:duration-200",children:t.toUpperCase()})}var components_DesktopNav=function(){return(0,l.jsxs)("div",{className:"flex w-3/6 flex-auto items-center justify-between font-semibold tracking-wide sm:hidden md:hidden",children:[(0,l.jsx)(NavLink,{pagePath:"/paintings",children:"OBRAZY"}),(0,l.jsx)(NavLink,{pagePath:"/exhibitions",children:"WYSTAWY"}),(0,l.jsx)(NavLink,{pagePath:"/bio",children:"BIO"}),(0,l.jsx)(NavLink,{pagePath:"/contact",children:"KONTAKT"}),(0,l.jsx)("div",{className:"flex h-8 w-8  items-center justify-center rounded-full bg-cobalt p-[6px]",children:(0,l.jsx)(o(),{href:"https://www.instagram.com/kinga.flasza/",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{fill:"#ffffff",width:"20px",height:"20px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"m16 12v-.001c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4c1.104 0 2.104-.448 2.828-1.171.723-.701 1.172-1.682 1.172-2.768 0-.021 0-.042-.001-.063v.003zm2.16 0c-.012 3.379-2.754 6.114-6.135 6.114-3.388 0-6.135-2.747-6.135-6.135s2.747-6.135 6.135-6.135c1.694 0 3.228.687 4.338 1.797 1.109 1.08 1.798 2.587 1.798 4.256 0 .036 0 .073-.001.109v-.005zm1.687-6.406v.002c0 .795-.645 1.44-1.44 1.44s-1.44-.645-1.44-1.44.645-1.44 1.44-1.44c.398 0 .758.161 1.018.422.256.251.415.601.415.988v.029-.001zm-7.84-3.44-1.195-.008q-1.086-.008-1.649 0t-1.508.047c-.585.02-1.14.078-1.683.17l.073-.01c-.425.07-.802.17-1.163.303l.043-.014c-1.044.425-1.857 1.237-2.272 2.254l-.01.027c-.119.318-.219.695-.284 1.083l-.005.037c-.082.469-.14 1.024-.159 1.589l-.001.021q-.039.946-.047 1.508t0 1.649.008 1.195-.008 1.195 0 1.649.047 1.508c.02.585.078 1.14.17 1.683l-.01-.073c.07.425.17.802.303 1.163l-.014-.043c.425 1.044 1.237 1.857 2.254 2.272l.027.01c.318.119.695.219 1.083.284l.037.005c.469.082 1.024.14 1.588.159l.021.001q.946.039 1.508.047t1.649 0l1.188-.024 1.195.008q1.086.008 1.649 0t1.508-.047c.585-.02 1.14-.078 1.683-.17l-.073.01c.425-.07.802-.17 1.163-.303l-.043.014c1.044-.425 1.857-1.237 2.272-2.254l.01-.027c.119-.318.219-.695.284-1.083l.005-.037c.082-.469.14-1.024.159-1.588l.001-.021q.039-.946.047-1.508t0-1.649-.008-1.195.008-1.195 0-1.649-.047-1.508c-.02-.585-.078-1.14-.17-1.683l.01.073c-.07-.425-.17-.802-.303-1.163l.014.043c-.425-1.044-1.237-1.857-2.254-2.272l-.027-.01c-.318-.119-.695-.219-1.083-.284l-.037-.005c-.469-.082-1.024-.14-1.588-.159l-.021-.001q-.946-.039-1.508-.047t-1.649 0zm11.993 9.846q0 3.578-.08 4.953c.005.101.009.219.009.337 0 3.667-2.973 6.64-6.64 6.64-.119 0-.237-.003-.354-.009l.016.001q-1.375.08-4.953.08t-4.953-.08c-.101.005-.219.009-.337.009-3.667 0-6.64-2.973-6.64-6.64 0-.119.003-.237.009-.354l-.001.016q-.08-1.375-.08-4.953t.08-4.953c-.005-.101-.009-.219-.009-.337 0-3.667 2.973-6.64 6.64-6.64.119 0 .237.003.354.009l-.016-.001q1.375-.08 4.953-.08t4.953.08c.101-.005.219-.009.337-.009 3.667 0 6.64 2.973 6.64 6.64 0 .119-.003.237-.009.354l.001-.016q.08 1.374.08 4.953z"})})})})]})},d=n(2265);let Burger=({color:e="currentColor",direction:t="left",distance:n="md",duration:l=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:r=!0,label:a,lines:s=3,onToggle:c,render:o,rounded:h=!1,size:m=32,toggle:u,toggled:f})=>{let[p,x]=(0,d.useState)(!1),v=Math.max(12,Math.min(48,m)),g=Math.round((48-v)/2),b=v/12,w=Math.round(b),j=v/(s*(("lg"===n?.25:"sm"===n?.75:.5)+(3===s?1:1.25))),N=Math.round(j),_=w*s+N*(s-1),y=(b-w+(j-N))/(3===s?1:2),k=parseFloat((v/(3===s?"lg"===n?4.0425:"sm"===n?5.1625:4.6325:"lg"===n?6.7875:"sm"===n?8.4875:7.6675)-y/(4/3)).toFixed(2)),$=Math.max(0,l),q={cursor:"pointer",height:"48px",position:"relative",transition:`${$}s ${i}`,userSelect:"none",width:"48px"},O={background:e,height:`${w}px`,left:`${g}px`,position:"absolute"};r&&(q.outline="none"),h&&(O.borderRadius="9em");let L=u||x,z=void 0!==f?f:p;return o({barHeight:w,barStyles:O,burgerStyles:q,easing:i,handler:()=>{L(!z),"function"==typeof c&&c(!z)},isLeft:"left"===t,isToggled:z,label:a,margin:N,move:k,time:$,topOffset:Math.round((48-_)/2),width:v})};function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}let Turn=e=>d.createElement(Burger,_extends({},e,{render:e=>d.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:e.burgerStyles,tabIndex:0},d.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),d.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time/2}s ${e.easing}`,transform:`${e.isToggled?"scaleX(0)":"none"}`}}),d.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none"}`}}))}));var h=n(489),m=n(3046),components_MobileNavBtn=function(){let e=(0,m.v9)(e=>e.navReducer.value.isOpen),t=(0,m.I0)();return(0,l.jsx)("div",{className:"hidden w-3/6 items-center justify-end sm:flex md:flex",children:(0,l.jsx)(Turn,{toggled:e,toggle:()=>t((0,h.iv)(!e)),color:"#0001c0",label:"Show menu",hideOutline:!0,rounded:!0,distance:"md",size:30})})};function Navigation(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(components_MobileNavBtn,{}),(0,l.jsx)(components_DesktopNav,{})]})}var components_MobileNav=function(){return(0,l.jsxs)("div",{className:"flex flex-col gap-2 pb-8 font-semibold tracking-wide sm:text-lg lg:hidden",children:[(0,l.jsx)(NavLink,{pagePath:"/paintings",children:"OBRAZY"}),(0,l.jsx)(NavLink,{pagePath:"/exhibitions",children:"WYSTAWY"}),(0,l.jsx)(NavLink,{pagePath:"/bio",children:"BIO"}),(0,l.jsx)(NavLink,{pagePath:"/contact",children:"KONTAKT"}),(0,l.jsx)("div",{className:"mt-4 flex h-8  w-8 items-center justify-center rounded-full bg-cobalt",children:(0,l.jsx)(o(),{href:"https://www.instagram.com/kinga.flasza/",rel:"noopener noreferrer",target:"_blank",children:(0,l.jsx)("svg",{fill:"#ffffff",width:"20px",height:"20px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"m16 12v-.001c0-2.209-1.791-4-4-4s-4 1.791-4 4 1.791 4 4 4c1.104 0 2.104-.448 2.828-1.171.723-.701 1.172-1.682 1.172-2.768 0-.021 0-.042-.001-.063v.003zm2.16 0c-.012 3.379-2.754 6.114-6.135 6.114-3.388 0-6.135-2.747-6.135-6.135s2.747-6.135 6.135-6.135c1.694 0 3.228.687 4.338 1.797 1.109 1.08 1.798 2.587 1.798 4.256 0 .036 0 .073-.001.109v-.005zm1.687-6.406v.002c0 .795-.645 1.44-1.44 1.44s-1.44-.645-1.44-1.44.645-1.44 1.44-1.44c.398 0 .758.161 1.018.422.256.251.415.601.415.988v.029-.001zm-7.84-3.44-1.195-.008q-1.086-.008-1.649 0t-1.508.047c-.585.02-1.14.078-1.683.17l.073-.01c-.425.07-.802.17-1.163.303l.043-.014c-1.044.425-1.857 1.237-2.272 2.254l-.01.027c-.119.318-.219.695-.284 1.083l-.005.037c-.082.469-.14 1.024-.159 1.589l-.001.021q-.039.946-.047 1.508t0 1.649.008 1.195-.008 1.195 0 1.649.047 1.508c.02.585.078 1.14.17 1.683l-.01-.073c.07.425.17.802.303 1.163l-.014-.043c.425 1.044 1.237 1.857 2.254 2.272l.027.01c.318.119.695.219 1.083.284l.037.005c.469.082 1.024.14 1.588.159l.021.001q.946.039 1.508.047t1.649 0l1.188-.024 1.195.008q1.086.008 1.649 0t1.508-.047c.585-.02 1.14-.078 1.683-.17l-.073.01c.425-.07.802-.17 1.163-.303l-.043.014c1.044-.425 1.857-1.237 2.272-2.254l.01-.027c.119-.318.219-.695.284-1.083l.005-.037c.082-.469.14-1.024.159-1.588l.001-.021q.039-.946.047-1.508t0-1.649-.008-1.195.008-1.195 0-1.649-.047-1.508c-.02-.585-.078-1.14-.17-1.683l.01.073c-.07-.425-.17-.802-.303-1.163l.014.043c-.425-1.044-1.237-1.857-2.254-2.272l-.027-.01c-.318-.119-.695-.219-1.083-.284l-.037-.005c-.469-.082-1.024-.14-1.588-.159l-.021-.001q-.946-.039-1.508-.047t-1.649 0zm11.993 9.846q0 3.578-.08 4.953c.005.101.009.219.009.337 0 3.667-2.973 6.64-6.64 6.64-.119 0-.237-.003-.354-.009l.016.001q-1.375.08-4.953.08t-4.953-.08c-.101.005-.219.009-.337.009-3.667 0-6.64-2.973-6.64-6.64 0-.119.003-.237.009-.354l-.001.016q-.08-1.375-.08-4.953t.08-4.953c-.005-.101-.009-.219-.009-.337 0-3.667 2.973-6.64 6.64-6.64.119 0 .237.003.354.009l-.016-.001q1.375-.08 4.953-.08t4.953.08c.101-.005.219-.009.337-.009 3.667 0 6.64 2.973 6.64 6.64 0 .119-.003.237-.009.354l.001-.016q.08 1.374.08 4.953z"})})})})]})};function Header(){let e=(0,m.v9)(e=>e.navReducer.value.isOpen);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex items-center justify-between pb-8 sm:pb-4",children:[(0,l.jsx)(Logo,{}),(0,l.jsx)(Navigation,{})]}),e?(0,l.jsx)(components_MobileNav,{}):""]})}var u=n(9730);let f=(0,u.xC)({reducer:{navReducer:h.ZP}});function ReduxProvider(e){let{children:t}=e;return(0,l.jsx)(m.zt,{store:f,children:t})}let p="".concat(r().className," container mx-auto min-w-min max-w-5xl overflow-y-scroll px-6 pb-24 pt-4 sm:px-8 sm:pt-6");function RootLayout(e){let{children:t}=e;return(0,l.jsx)("html",{lang:"en",children:(0,l.jsx)("body",{className:p,children:(0,l.jsxs)(ReduxProvider,{children:[(0,l.jsx)(Header,{}),t]})})})}},489:function(e,t,n){"use strict";n.d(t,{iv:function(){return r}});var l=n(9730);let i=(0,l.oM)({name:"nav",initialState:{value:{isOpen:!1,wievportWidth:void 0}},reducers:{mobileNavToggle:(e,t)=>{e.value.isOpen=t.payload},setWievportWidth:(e,t)=>{e.value.wievportWidth=t.payload}}}),{mobileNavToggle:r,setWievportWidth:a}=i.actions;t.ZP=i.reducer},2853:function(){},3699:function(e){e.exports={style:{fontFamily:"'__Inter_Tight_32f607', '__Inter_Tight_Fallback_32f607'"},className:"__className_32f607"}}},function(e){e.O(0,[209,360,971,472,744],function(){return e(e.s=6264)}),_N_E=e.O()}]);