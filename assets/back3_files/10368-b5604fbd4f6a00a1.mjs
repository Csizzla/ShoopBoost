"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[10368],{615097:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"UnifiedPinRepAuthDesktopPinRep_pin",selections:[{args:null,kind:"FragmentSpread",name:"PinRepWithImpressions_pin"}],type:"Pin",abstractKey:null};i.hash="000e24070b5df05da76d803775cb37e6";let n=i},148048:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});let i={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"UnifiedPinRepDefaultPinRep_pin",selections:[{args:[{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"PinRep_pin"}],type:"Pin",abstractKey:null};i.hash="51f44b91a29d43c6d06785fcb846b61b";let n=i},120879:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"UnifiedPinRepVariant_pin",selections:[{args:null,kind:"FragmentSpread",name:"UnifiedPinRepAuthDesktopPinRep_pin"}],type:"Pin",abstractKey:null};i.hash="7982b415980bdf92f7b9338cb5f6c539";let n=i},892236:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});let i={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"UnifiedPinRep_pin",selections:[{args:[{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"UnifiedPinRepDefaultPinRep_pin"}],type:"Pin",abstractKey:null};i.hash="630f94c5c1fff86bdd3cb70e987c1fee";let n=i},743079:(e,t,r)=>{r.d(t,{DW:()=>o,I:()=>n,oo:()=>i,zI:()=>a});let i=e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t&&[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]},n=.18,o=(e,t,r)=>.2126*(e/255)**2.2+.7151*(t/255)**2.2+.0721*(r/255)**2.2,a=e=>{let t=e.replace("#",""),r=parseInt(t.substr(0,2),16);return(299*r+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3<155}},541841:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(667294),n=r(973935);function o(e,t,r){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class a extends i.Component{constructor(...e){super(...e),o(this,"observer",null),o(this,"handleVisibilityChanged",(e,t)=>{this.props.onVisibilityChange(e,t)})}componentDidMount(){let e=n.findDOMNode(this);e instanceof HTMLElement&&(this.node=e),this.node&&(this.observer=new window.IntersectionObserver(this.handleVisibilityChanged,this.props.options),this.observer.observe(this.node))}componentWillUnmount(){this.observer&&(this.observer.unobserve(this.node),delete this.observer)}render(){return i.Children.only(this.props.children)}}let s=a},839391:(e,t,r)=>{r.d(t,{L:()=>i,Z:()=>o});let{Provider:i,useHook:n}=(0,r(342513).Z)("ExperienceContext"),o=n},757017:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(188349),n=r(140017),o=r(339001);function a(){let e=(0,n.ZP)();return function(t,r){let n=new Date(t).getTime(),a=Date.now()-n,s=Math.floor(a/i.FS),l=Math.floor(a/i.UK),d=Math.floor(a/i.F4),c=Math.floor(a/i.VL),u=Math.floor(a/i.N9),h=Math.floor(a/i.N1),p=e.ngettext('{{ minutes }} minute ago', '{{ minutes }} minutes ago', s, ' - ', ' -- '),_=e.ngettext('{{ hours }} hour ago', '{{ hours }} hours ago', l, ' - ', ' -- '),g=e.ngettext('{{ days }} day ago', '{{ days }} days ago', d, ' - ', ' -- '),m=e.ngettext('{{ weeks }} week ago', '{{ weeks }} weeks ago', c, ' - ', ' -- '),f=e.ngettext('{{ months }} month ago', '{{ months }} months ago', u, 'useGetHumanizedTimeSince.monthsString', 'months since last update'),b=e.ngettext('{{ years }} year ago', '{{ years }} years ago', h, ' - ', ' -- '),v=e.ngettext('{{ minutes }}m', '{{ minutes }}m', s, 'minutes ago abbreviated', 'minutes ago abbreviated'),S=e.ngettext('{{ hours }}h', '{{ hours }}h', l, 'hours ago abbreviated', 'hours ago abbreviated'),E=e.ngettext('{{ days }}d', '{{ days }}d', d, 'days ago abbreviated', 'days ago abbreviated'),P=e.ngettext('{{ weeks }}w', '{{ weeks }}w', c, 'weeks ago abbreviated', 'weeks ago abbreviated'),y=e.ngettext('{{ months }}mo', '{{ months }}mo', u, 'months ago abbreviated', 'months ago abbreviated'),A=e.ngettext('{{ years }}y', '{{ years }}y', h, 'years ago abbreviated', 'years ago abbreviated');return h>0?(0,o.nk)(r?A:b,{years:h}).join(""):u>0?(0,o.nk)(r?y:f,{months:u}).join(""):c>0?(0,o.nk)(r?P:m,{weeks:c}).join(""):d>0?(0,o.nk)(r?E:g,{days:d}).join(""):l>0?(0,o.nk)(r?S:_,{hours:l}).join(""):s>0?(0,o.nk)(r?v:p,{minutes:s}).join(""):e._('Just now', ' - ', ' -- ')}}},59545:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(667294);function n(e,t,r){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class o extends i.Component{constructor(...e){super(...e),n(this,"ref",(0,i.createRef)()),n(this,"observer",null),n(this,"handleVisibilityChanged",(e,t)=>{this.props.onVisibilityChange(e,t)})}componentDidMount(){this.ref&&this.ref.current&&(this.observer=new window.IntersectionObserver(this.handleVisibilityChanged,this.props.options),this.observer.observe(this.ref.current))}componentWillUnmount(){this.observer&&(this.observer.unobserve(this.ref.current),delete this.observer)}render(){return this.props.children(this.ref)}}let a=o},165706:(e,t,r)=>{r.r(t),r.d(t,{DEFAULT_HEIGHT:()=>h,FixedFooter:()=>g,FixedHeader:()=>_});var i=r(667294),n=r(883119),o=r(876594),a=r(696534),s=r(30378),l=r(71328);function d(e,t,r){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class c extends i.Component{constructor(...e){super(...e),d(this,"state",{isHidden:!!this.props.appUpsellFooterConfig||!!this.props.navFooterConfig?.isDockedNavOnPlp}),d(this,"lastScrollPos",0),d(this,"updateHiddenState",e=>{this.reqAnimationId=window.requestAnimationFrame(()=>{this.setState({isHidden:e})})}),d(this,"handleScroll",(0,l.Z)(()=>{let{appUpsellFooterConfig:e,navFooterConfig:t}=this.props,{isHidden:r}=this.state,i=window.scrollY,n=i-this.lastScrollPos,o="none",{scrollHeight:a,clientHeight:s}=document.documentElement||{};Number.isNaN(a)||Number.isNaN(s)||(o=n<0?i<=Math.abs((window.scrollMinY||0)+Math.max(n,20))?"start":"none":i>=(window.scrollMaxY||a-s)-Math.max(n,20)?"end":"none");let l=t?.isModal?0:55;e?n>20&&r&&i>=500?e.shouldShowAfterScroll()&&(this.updateHiddenState(!1),t?.onScroll(!1)):(n<-20&&!r||i<=l)&&(this.updateHiddenState(!0),t?.onScroll(!0)):this.props.navFooterConfig?.isDockedNavOnPlp?"start"===o&&!r||i<=l?(this.updateHiddenState(!0),t?.onScroll(!0)):(i>l||"end"===o)&&r&&(this.updateHiddenState(!1),t?.onScroll(!1)):(n<-20||"start"===o)&&r||i<=l?(this.updateHiddenState(!1),t?.onScroll(!1)):(n>20||"end"===o)&&!r&&(this.updateHiddenState(!0),t?.onScroll(!0)),this.lastScrollPos=i},30))}componentDidMount(){try{(this.props.hideOnScroll||this.props.navFooterConfig?.isDockedNavOnPlp)&&window.addEventListener("scroll",this.handleScroll)}catch(e){window.console.error(e),window.console.error('Can only register impression obstructions for type "HTMLElement"')}}componentWillUnmount(){(this.props.hideOnScroll||this.props.navFooterConfig?.isDockedNavOnPlp)&&window.removeEventListener("scroll",this.handleScroll),this.reqAnimationId&&(window.cancelAnimationFrame(this.reqAnimationId),this.reqAnimationId=null)}componentDidUpdate(e){!e.hideOnScroll&&this.props.hideOnScroll||!e.navFooterConfig?.isDockedNavOnPlp&&this.props.navFooterConfig?.isDockedNavOnPlp?(this.updateHiddenState(!0),window.addEventListener("scroll",this.handleScroll)):(e.hideOnScroll&&!this.props.hideOnScroll||e.navFooterConfig?.isDockedNavOnPlp&&!this.props.navFooterConfig?.isDockedNavOnPlp)&&(this.updateHiddenState(!1),window.removeEventListener("scroll",this.handleScroll))}render(){let{children:e,navFooterConfig:t}=this.props,{isHidden:r}=this.state;return e({isHidden:!t?.forceShow&&r,updateHiddenState:this.updateHiddenState})}}var u=r(785893);let h=64;function p({children:e,footerConfig:t,headerConfig:r,height:l,hideOnScroll:d,hideOnScrollState:{isHidden:c,updateHiddenState:p},noPadding:_,paddingY:g=3,type:m,zIndex:f}){let b,v;let{headerLimitedOverflow:S,ignoreObstructions:E,zIndexForGestaltBug:P}=r||{},{appUpsellFooterConfig:y,footerInLego:A,navFooterConfig:x}=t||{},C=!!y,R="header"===m?"top":"bottom",T=(0,a.vs)(),O=(0,i.useRef)(null),D=(0,i.useRef)(null);(0,i.useEffect)(()=>{try{if(!E){let e=O.current;D.current=S&&e&&Array.isArray(e.children)?e.children[0]:e,D.current instanceof HTMLElement&&s.Z.addObstruction(R,D.current)}}catch(e){window.console.error(e),window.console.error('Can only register impression obstructions for type "HTMLElement"')}return()=>{!E&&D.current instanceof HTMLElement&&s.Z.removeObstruction(R,D.current)}},[E,S,R,T]);let w="top"===R?"relative":"fixed",I=(l??h)+(r?.overrideTop||0),N=d||x?{transition:A?"transform 300ms ease-in-out, opacity 300ms ease-in-out":"transform 200ms linear",...c?{transform:`translateY(${"top"===R?-I:I}px)`,opacity:A?0:1}:Object.freeze({})}:{},k="relative"!==w||r?.noGutter?0:2,U=k?-k:0;T&&("header"===m?b=-1:v=-1);let j=r?.isTransparentBackground&&o.o7L||r?.isTranslucent&&(T?"rgba(0,0,0,.95)":"rgba(255,255,255,.95)")||o.k95;return(0,u.jsx)(n.xu,{ref:O,bottom:"footer"===m,dangerouslySetInlineStyle:{__style:{top:b,bottomStyle:v,...!f||P?{zIndex:P||1}:Object.freeze({}),...S?{background:"transparent",overflow:"hidden",paddingBottom:100,marginBottom:-100,pointerEvents:"none"}:Object.freeze({}),...r?.hasBorder?{borderBottom:"1px solid #efefef"}:Object.freeze({}),...t?.hasTopShadow?{boxShadow:"0 -2px 4px 1px rgba(0, 0, 0, 0.08)"}:Object.freeze({}),...N}},"data-test-id":m,display:C?"flex":void 0,height:l&&!A?l:void 0,left:!0,marginEnd:A?"auto":U,marginStart:A?"auto":U,onTransitionEnd:()=>{(d||x)&&D.current&&(c?s.Z.removeObstruction(R,D.current):s.Z.addObstruction(R,D.current))},position:w,right:!0,top:"header"===m,width:A||"fixed"!==w?void 0:"100%",zIndex:P?void 0:f,children:(0,u.jsx)(n.xu,{alignItems:t?.alignCenter?"center":void 0,dangerouslySetInlineStyle:{__style:{backgroundColor:j,height:A?C?void 0:l??h:"100%",boxShadow:A?"0px 0px 8px rgba(0, 0, 0, 0.1)":void 0,marginBottom:A&&!x?.docked?16:void 0,...S?{pointerEvents:"auto"}:Object.freeze({}),...r?.useRoundedCorners?{zIndex:5,borderTopRightRadius:17,borderTopLeftRadius:17,borderBottomRightRadius:0,borderBottomLeftRadius:0}:Object.freeze({})}},display:A||t?.alignCenter?"flex":void 0,marginEnd:A?"auto":void 0,marginStart:A?"auto":void 0,paddingX:("footer"!==m||_?0:4)+k,paddingY:_?0:g,position:"relative",rounding:A&&!x?.docked?"pill":void 0,width:x?x.footerWidth:C?void 0:"100%",children:"function"==typeof e?e({updateHiddenState:p}):e})})}function _({hasBorder:e,headerLimitedOverflow:t,ignoreObstructions:r,isTranslucent:i,isTransparentBackground:o,noGutter:a,overrideTop:s,useRoundedCorners:l,zIndexForGestaltBug:d,...h}){let{noPadding:_,paddingY:g=3,zIndex:m}=h;return(0,u.jsx)(n.Le,{height:t?44+8*(_?0:g):void 0,top:s||0,zIndex:m||void 0,children:(0,u.jsx)(c,{hideOnScroll:h.hideOnScroll,children:n=>(0,u.jsx)(p,{...h,headerConfig:{isTranslucent:i,isTransparentBackground:o,headerLimitedOverflow:t,hasBorder:e,ignoreObstructions:r,noGutter:a,overrideTop:s,zIndexForGestaltBug:d,useRoundedCorners:l},hideOnScrollState:n,type:"header"})})})}function g({alignCenter:e,appUpsellFooterConfig:t,footerInLego:r,hasTopShadow:i,navFooterConfig:n,...o}){return(0,u.jsx)(c,{appUpsellFooterConfig:t,hideOnScroll:o.hideOnScroll,navFooterConfig:n?.scrollConfig,children:a=>(0,u.jsx)(p,{...o,footerConfig:{alignCenter:e,appUpsellFooterConfig:t,footerInLego:r,hasTopShadow:i,navFooterConfig:n},hideOnScrollState:a,type:"footer"})})}},230077:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(667294),n=r(545007),o=r(839967),a=r(569372);function s(e){let{name:t,optionsKey:r}=e,s=t===o.fY,l=(0,a.bC)(),d=l?.get(t,r);if(d)throw d;let c=e=>e[t]?.[r],u=(0,n.v9)(({resources:e})=>c(e)?.nextBookmark),h=(0,n.v9)(({resources:e})=>c(e)?.data),p=(0,n.v9)(({resources:e})=>c(e)?.auxData),_=(0,n.v9)(({resources:e})=>c(e)?.error),g=(0,i.useRef)({auxData:void 0,data:void 0,error:void 0,isAtEnd:!1,nextBookmark:void 0});if(s)return g.current;let m={auxData:p,data:h,error:_,isAtEnd:u===o.qx,nextBookmark:u};return(m.auxData!==g.current.auxData||m.data!==g.current.data||m.error!==g.current.error||m.isAtEnd!==g.current.isAtEnd||m.nextBookmark!==g.current.nextBookmark)&&(g.current=m),g.current}},447479:(e,t,r)=>{r.d(t,{i:()=>i});let i={AC:"ac",AUTOCOMPLETE:"autocomplete",BOARD:"blp",CONTENT_TYPE_FILTER:"content_type_filter",DIRECT_NAVIGATION:"direct_navigation",FILTER:"filter",GUIDED_SEARCH_ENTRY:"guided_search_entry",GUIDED_SEARCH_LANDING:"guided_search_landing",HASHTAG_CLOSEUP:"hashtag_closeup",HASHTAG_PINREP:"hashtag_pinrep",HOMEFEED_BUBBLE:"homefeed_bubble",HUB_PAGE:"hub_page",IDEAS_ROOT:"ideas_root",IMAGE_ONLY_ATTRIBUTION:"image_only_attribution",LANDING_PAGE_STORY:"landing_page_story",NO_RESULTS_SEARCH_STORY:"no_results_search_story",PRODUCT:"product",REMOVE:"remove",RS:"rs",SHOPPING_FILTER:"shopping_filter",SITELINKS_SEARCHBOX:"sitelinks_searchbox",SLP_REC_CURATED:"slp_rec_curated",SLP_REC_TRENDING:"slp_rec_trending",SRS:"srs",STRUCTURED_GUIDE:"structured_guide",TRENDING:"trending",TYPED:"typed",TYPO_AUTO_ORIGINAL:"typo_auto_original",TYPO_SUGGESTION:"typo_suggestion",UNKNOWN:"Unknown",VANILLA_GUIDE:"guide",URECS:"urecs",VIDEO:"video"}},627408:(e,t,r)=>{r.d(t,{Z:()=>S});var i=r(667294),n=r(883119),o=r(541841),a=r(901855),s=r(59545),l=r(340523),d=r(5859),c=r(520893),u=r(503325);let{Provider:h,useMaybeHook:p}=(0,r(342513).Z)("timeSpentContext");var _=r(28449),g=r(19447),m=r(785893);function f(e,t,r){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class b extends i.Component{constructor(e){super(e),f(this,"componentWillUnmount",()=>{this.unregisterComponent()}),f(this,"getContext",()=>{let{clientTrackingParams:e,component:t,element:r,objectId:i,timeSpentContext:n,view:o,viewParameter:a}=this.props;return{view:o||n?.view,viewParameter:a||n?.viewParameter,component:t||n?.component,element:r,objectId:i||n?.objectId,clientTrackingParams:e||n?.clientTrackingParams,getParentUuid:()=>this.getUuid(),getGrandparentUuid:()=>this.getParentId()}}),f(this,"getLoggerContext",()=>{let e={...this.getContext()};return delete e.getParentUuid,e}),f(this,"getParentId",()=>{let{timeSpentContext:e,shouldUseGrandparentId:t=!1}=this.props;if(t&&e&&e.getGrandparentUuid){let t=e.getGrandparentUuid();if(t)return t}return e&&e.getParentUuid?e.getParentUuid():void 0}),f(this,"getUuid",()=>this.state.timedPair?this.state.timedPair.uuid:void 0),f(this,"getTimedPair",()=>this.state.timedPair),f(this,"setTimedPair",(e,t)=>{this.setState({timedPair:e},()=>{t&&t()})}),f(this,"isRegistered",!1),f(this,"registerComponent",()=>{this.props.timeSpentManager.registerComponent(this),this.isRegistered=!0}),f(this,"unregisterComponent",()=>{this.isRegistered&&(this.props.timeSpentManager.unregisterComponent(this),this.isRegistered=!1)}),f(this,"handleVisibilityChange",e=>{let{intersectionRatio:t}=e[0],{bottom:r,left:i,right:n,top:o}=e[0].intersectionRect;t>0?this.registerComponent():0===t&&(0===r&&0===i&&0===n&&0===o?this.unregisterComponent():this.registerComponent())}),this.state={timedPair:new u.Z(this.getLoggerContext())}}componentDidUpdate(e){!this.isRegistered||e.view===this.props.view&&e.viewParameter===this.props.viewParameter&&e.component===this.props.component&&e.element===this.props.element&&e.objectId===this.props.objectId&&(0,c.Z)(e.auxData,this.props.auxData)&&(0,c.Z)(e.viewData,this.props.viewData)||(this.unregisterComponent(),setTimeout(this.registerComponent))}render(){let{children:e,intersectionObserverExpEnabled:t,intersectionObserverBoxHeight:r}=this.props;return t?(0,m.jsx)(h,{value:this.getContext(),children:(0,m.jsx)(s.Z,{onVisibilityChange:this.handleVisibilityChange,options:{threshold:0},children:t=>(0,m.jsx)(n.xu,{ref:t,height:r??"100%",children:i.Children.only(e)})})}):(0,m.jsx)(h,{value:this.getContext(),children:(0,m.jsx)(o.Z,{onVisibilityChange:this.handleVisibilityChange,options:{threshold:0},children:i.Children.only(e)})})}}function v(e){let t=(0,a.Hv)(),r=p(),n=(0,_.Z)(),o=(0,g.H0)(),{requestIdentifier:s="",isAuthenticated:c}=(0,d.B)(),u={app_instance_id:s.slice(0,8),...e.auxData??{}},{checkExperiment:h}=(0,l.F)(),f=h(c?"web_intersection_observer_migration_auth":"web_intersection_observer_migration_unauth").anyEnabled;return(0,i.useEffect)(()=>{n?.setHistoryStackContext(t)},[t,n]),(0,i.useEffect)(()=>{n?.setPins(o??{})},[o,n]),n?(0,m.jsx)(b,{...e,auxData:u,intersectionObserverExpEnabled:f,timeSpentContext:r,timeSpentManager:n,children:e.children}):e.children}v.displayName="TimeSpent";let S=v},460270:(e,t,r)=>{r.d(t,{Z:()=>i});let i=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},180338:(e,t,r)=>{r.d(t,{H:()=>i,W:()=>n});let{Provider:i,useMaybeHook:n}=(0,r(342513).Z)("PinCreateDeleteContext")},676554:(e,t,r)=>{r.d(t,{BK:()=>_,Tw:()=>g,ZP:()=>y,rX:()=>A}),r(167912);var i,n,o,a,s=r(986631),l=r(340523),d=r(554786),c=r(149722),u=r(19447),h=r(832853),p=r(785893);let _=(0,h.Z)(()=>Promise.all([r.e(97270),r.e(75650),r.e(92071),r.e(23466),r.e(2984)]).then(r.bind(r,912849)),void 0,"AuthDesktopPinRep"),g=(0,h.Z)(()=>Promise.all([r.e(97270),r.e(39921)]).then(r.bind(r,583222)),void 0,"DefaultPinRep"),m=void 0!==i?i:i=r(892236),f=void 0!==n?n:n=r(120879),b=void 0!==o?o:o=r(615097),v=e=>{let{pinKey:t,...r}=e,i=(0,s.Z)(b,t);return(0,p.jsx)(_,{...r,pinKey:i})},S=e=>{let{pinId:t,pin:r,...i}=e,n=(0,u.S6)(),o=(t?n(t):null)||r,a=o?.tracking_params;return(0,p.jsx)(_,{...i,pinKey:{type:"deprecated",data:o},trackingParams:a})},E=void 0!==a?a:a=r(148048),P=e=>{let{pinKey:t,...r}=e,i=(0,s.Z)(E,e.pinKey);return(0,p.jsx)(g,{...r,duploQueryRef:i})};function y(e){let t=(0,d.HG)(),r=(0,c.Z)(),i=r&&r.isAuth&&t,n=(0,s.Z)(m,e.duploQueryRef),{checkExperiment:o}=(0,l.F)();if(!(!i||e.duploQueryRef||o("web_auth_desktop_default_pin_rep").anyEnabled)){let{disableReaction:t,disableAppUpsell:r,duploDedupeVisualAnnotations:i,duploDisablePinCardPadding:n,duploFeedItemProps:o,duploIsSquarePin:a,duploLazyLoadImage:s,duploOneTapSave:l,duploPinCardDetailsMargin:d,duploPriorityFetchImage:c,duploQueryRef:u,duploShouldAddNiiSearchParamToImageUrls:h,duploShouldAllowProductPriceIndicator:_,duploConversationPin:g,topLevelTrafficSource:m,topLevelTrafficSourceDepth:f,trafficSource:b,...v}=e;return(0,p.jsx)(S,{...v})}let{attributionOption:a,blockClickEvents:u,borderStyle:h,disableHover:_,imageHeightModifier:g,imageOnlyOption:f,onError:b,onLoad:v,pin:E,pinImageCrop:y,pinImageFit:A,resolution:x,rounding:C,saveButtonOptions:R,authDesktopSelectionState:T,authDesktopSurface:O,pinOwner:D,duploQueryRef:w,...I}=e;return(0,p.jsx)(P,{...I,pinKey:n})}function A(e){let t=(0,d.HG)(),r=(0,c.Z)(),i=r&&r.isAuth&&t,n=(0,s.Z)(m,e.duploQueryRef),o=(0,s.Z)(f,e.pinKey),{checkExperiment:a}=(0,l.F)();if((!i||e.duploQueryRef||a("web_auth_desktop_default_pin_rep").anyEnabled)&&null!=o&&null!=e.pinKey){let{disableReaction:t,disableAppUpsell:r,duploDedupeVisualAnnotations:i,duploDisablePinCardPadding:n,duploFeedItemProps:a,duploIsSquarePin:s,duploLazyLoadImage:l,duploOneTapSave:d,duploPinCardDetailsMargin:c,duploPriorityFetchImage:u,duploQueryRef:h,duploShouldAddNiiSearchParamToImageUrls:_,duploShouldAllowProductPriceIndicator:g,duploConversationPin:m,topLevelTrafficSource:f,topLevelTrafficSourceDepth:b,trafficSource:S,pinKey:E,...P}=e,{pin:y,pinId:A,...x}=P;return(0,p.jsx)(v,{...x,pinKey:o})}let{attributionOption:u,blockClickEvents:h,borderStyle:_,disableHover:g,imageHeightModifier:b,imageOnlyOption:S,onError:E,onLoad:y,pin:A,pinImageCrop:x,pinImageFit:C,resolution:R,rounding:T,saveButtonOptions:O,authDesktopSelectionState:D,authDesktopSurface:w,pinOwner:I,duploQueryRef:N,...k}=e;return(0,p.jsx)(P,{...k,pinKey:n})}},563322:(e,t,r)=>{r.d(t,{ET:()=>s,UQ:()=>l,dv:()=>d,xZ:()=>u,yh:()=>h});var i,n=r(667294),o=r(342513),a=r(785893);let s={NONE:"NONE",GROUP:"GROUP",SECRET:"SECRET",ARCHIVED:"ARCHIVED"},l={NONE:0,ARCHIVED:1,GROUP:2,SECRET:3},d=((i={}).COLORS="COLORS",i.CREATED_BY_ME="CREATED_BY_ME",i.FAVORITED="FAVORITED",i.FAVORITED_AND_CREATED="FAVORITED_AND_CREATED_BY_ME",i.INTERESTS="INTERESTS",i.NONE="",i),{Provider:c,useMaybeHook:u}=(0,o.Z)("ProfileViewContext");function h({children:e}){let[t,r]=(0,n.useState)(),[i,o]=(0,n.useState)(new Map),[s,l]=(0,n.useState)(),[u,h]=(0,n.useState)(),[p,_]=(0,n.useState)(d.NONE),[g,m]=(0,n.useState)(0),[f,b]=(0,n.useState)(),v=(0,n.useCallback)((e,t)=>{o(new Map(i.set(e,t)))},[i]),S=(0,n.useMemo)(()=>({boardPinDensity:t,boardSortOrder:i,profileBoardView:s,profilePinDensity:u,profileFollowingSelectedIndex:g,selfProfilePinFilter:p,setBoardPinDensity:r,setSelfProfilePinFilter:_,updateBoardSortOrder:v,selfProfileBoardFilter:f,setSelfProfileBoardFilter:b,setProfileBoardView:l,setProfilePinDensity:h,setProfileFollowingSelectedIndex:m}),[t,i,s,u,g,p,f,v]);return(0,a.jsx)(c,{value:S,children:e})}},407053:(e,t,r)=>{r.d(t,{AA:()=>o,E9:()=>m,EU:()=>v,IO:()=>b,KH:()=>c,Lg:()=>h,QR:()=>d,Uw:()=>n,ZR:()=>S,dx:()=>p,dy:()=>l,eV:()=>_,fo:()=>g,k7:()=>a,rT:()=>f,tz:()=>u,u9:()=>E,zR:()=>s,zu:()=>i});let i="OPEN_UNAUTH",n="openUnauthType",o="_isAfterLogin",a="_lastVisitedPages",s="_lastVisitedPagesBeforeLogin",l="_lastVisitedBoardPages",d="_lastVisitedPagesBeforeNavPage",c="_lastVisitedSessionPages",u="_unauthVisitedPages",h="_inviteCodeRedemption",p="_inviteCodeRedemptionList",_="_paidTrafficLand",g="_unauthReferrerString",m="unauthTopicsFollowed",f=["US","CA","NZ","AU"],b=new Set(["GB","IE"]),v=new Set(["AT","BE","CH","DE","DK","ES","FR","IT","NL","NO","PT","SE"]),S=new Set(["BR","MX","AR","CL","CO","PE"]),E="ad_img"},265192:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(227258);function n(e,t){return r=>r((0,i.U)("BoardSectionResource",{options:{field_set_key:t||"board_page",section_id:e}}))}},937310:(e,t,r)=>{r.d(t,{Z:()=>i});let i={AGGREGATED_COMMENTS:"aggregatedComments",AGGREGATED_COMMENT_REPLIES:"aggregated-comment-replies",BOARDFEED:"boardfeed",BOARDLESS_PINS:"boardless-pins",BOARD_SECTIONS:"board-sections",BOARD_SECTION_PINS:"board-section-pins",STORY_PINS_FEED:"story-pins-feed",PROFILE_PINS_FEED:"profile-pins-feed",PROFILE_BOARDS:"profileBoards",SEARCH_PINS:"searchPins",STORY_PIN_DATA:"storyPinData",TODAY_ARTICLE_INTEREST_FEED:"todayArticleInterestFeed",TODAY_TAB:"todayTabFeed",UNIFIED_COMMENTS:"unified-comments",USE_CASE_TAB:"useCaseFeed",TRIED_IT_FEED:"trieditfeed"}},554312:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(667294),n=r(883119),o=r(587703),a=r(140017),s=r(529001),l=r(706196),d=r(431489),c=r(785893);function u({history:e,placeholder:t,query:r="",scope:u,type:h="default",viewParameter:p,viewType:_,height:g=48,shouldInputFocusOnTouch:m=!1}){let f=(0,a.ZP)(),b=(0,d.U)(),v=(0,o.Z)();(0,i.useEffect)(()=>{b&&setTimeout(()=>{b.preload?.(l.ke("search.js"))},500)},[]);let S={default:{label:f._('Search', 'SearchBar.searchTypes.default.label', 'Search input label'),path:"/search/"},syop:{label:"en"===f.getLocaleData().locale.split("-")[0]?f._('Search your Pins', 'SearchBar.searchTypes.profile.englishLabel', 'text for profile search bar'):f._('Search', 'SearchBar.searchTypes.profile.nonEnglishLabel', 'text for profile search bar'),path:"/search/me/"}},E=()=>S[h].path,P=()=>{let t=E();v({component:43,element:227,event_type:102,aux_data:{entered_query:r},view_parameter:p,view_type:_});let i=(0,s.Z)({query:r,searchPath:t,scope:u,shouldInputFocusOnTouch:m});return e.push(i)},y=t||S[h].label,A=r?(0,c.jsx)(i.Fragment,{children:(0,c.jsx)(n.kC,{alignItems:"center",flex:"grow",justifyContent:"start",children:(0,c.jsx)(n.xu,{marginStart:1,overflow:"hidden",children:(0,c.jsx)(n.xv,{inline:!0,lineClamp:1,weight:"bold",children:r})})})}):(0,c.jsxs)(i.Fragment,{children:[(0,c.jsx)(n.JO,{accessibilityLabel:f._('Search', 'SearchBar.searchIcon.accessibilityLabel', 'Accessibility label for search bar "search" icon'),icon:"search",size:16}),(0,c.jsx)(n.xu,{marginStart:2,width:"100%",children:(0,c.jsx)(n.xv,{color:"subtle",children:y})})]});return(0,c.jsx)(n.iP,{onTap:()=>P(),rounding:2,children:(0,c.jsx)(n.xu,{alignItems:"center",borderStyle:"lg",color:"default",dangerouslySetInlineStyle:{__style:{padding:"13px 16px"}},"data-test-id":"searchBarPlaceholder",display:"flex",flex:"grow",height:g,rounding:8,children:A})})}},529001:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(447479);function n({query:e,searchPath:t,scope:r,shouldInputFocusOnTouch:n}){let o=e?`${t}?rs=${i.i.TYPED}&q=${encodeURIComponent(e)}&scope=${r||""}`:t;return n&&(o=`${o}${"/"===o.charAt(o.length-1)?"?":"&"}input_select=true`),o}},431489:(e,t,r)=>{r.d(t,{U:()=>o,Z:()=>a});var i=r(667294);let n=(0,i.createContext)();function o(){return(0,i.useContext)(n)}let a=n}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/10368-b5604fbd4f6a00a1.mjs.map