"use strict";(self.webpackChunklearnjp=self.webpackChunklearnjp||[]).push([[289],{4456:(e,t,l)=>{l.r(t),l.d(t,{default:()=>v});var a=l(7294),n=l(6974),r=l(5041),c=l(6927),s=l(6675);const m=()=>{const[e,t]=(0,a.useState)(""),l=(0,s.CG)((e=>e.administration.logs)),n=(0,s.CG)((e=>e.administration.loading)),r=(0,s.TL)();(0,a.useEffect)((()=>{r((0,c.U2)())}),[]);const m=(e,t)=>()=>r((0,c.Q2)(e,t)),i=(e,t,l)=>e===t?`btn btn-sm btn-${l}`:"btn btn-sm btn-light",o=l?Object.entries(l.loggers).map((e=>({name:e[0],level:e[1].effectiveLevel}))):[];return a.createElement("div",null,a.createElement("h2",{id:"logs-page-heading","data-cy":"logsPageHeading"},"Logs"),a.createElement("p",null,"There are ",o.length," loggers."),a.createElement("span",null,"Filter"),a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),className:"form-control",disabled:n}),a.createElement("table",{className:"table table-sm table-striped table-bordered","aria-describedby":"logs-page-heading"},a.createElement("thead",null,a.createElement("tr",{title:"click to order"},a.createElement("th",null,a.createElement("span",null,"Name")),a.createElement("th",null,a.createElement("span",null,"Level")))),a.createElement("tbody",null,o.filter((t=>t.name.toUpperCase().includes(e.toUpperCase()))).map(((e,t)=>a.createElement("tr",{key:`log-row-${t}`},a.createElement("td",null,a.createElement("small",null,e.name)),a.createElement("td",null,a.createElement("button",{disabled:n,onClick:m(e.name,"TRACE"),className:i(e.level,"TRACE","primary")},"TRACE"),a.createElement("button",{disabled:n,onClick:m(e.name,"DEBUG"),className:i(e.level,"DEBUG","success")},"DEBUG"),a.createElement("button",{disabled:n,onClick:m(e.name,"INFO"),className:i(e.level,"INFO","info")},"INFO"),a.createElement("button",{disabled:n,onClick:m(e.name,"WARN"),className:i(e.level,"WARN","warning")},"WARN"),a.createElement("button",{disabled:n,onClick:m(e.name,"ERROR"),className:i(e.level,"ERROR","danger")},"ERROR"),a.createElement("button",{disabled:n,onClick:m(e.name,"OFF"),className:i(e.level,"OFF","secondary")},"OFF"))))))))};var i=l(450),o=l(7814);const d=({handleClose:e,healthObject:t,showModal:l})=>{const n=t.details||{};return a.createElement(i.u_,{isOpen:l,modalTransition:{timeout:20},backdropTransition:{timeout:10},toggle:e},a.createElement(i.xB,{toggle:e},t.name),a.createElement(i.fe,null,a.createElement(i.iA,{bordered:!0},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Value"))),a.createElement("tbody",null,Object.keys(n).map(((e,l)=>a.createElement("tr",{key:l},a.createElement("td",null,e),a.createElement("td",null,"diskSpace"===t.name?(e=>{const t=e/1073741824;return t>1?t.toFixed(2)+" GB":(e/1048576).toFixed(2)+" MB"})(n[e]):JSON.stringify(n[e])))))))),a.createElement(i.mz,null,a.createElement(i.zx,{color:"primary",onClick:e},"Close")))},u=()=>{const[e,t]=(0,a.useState)({}),[l,n]=(0,a.useState)(!1),r=(0,s.TL)(),m=(0,s.CG)((e=>e.administration.health)),u=(0,s.CG)((e=>e.administration.loading));(0,a.useEffect)((()=>{r((0,c.rv)())}),[]);const E=()=>n(!1),b=(m||{}).components||{};return a.createElement("div",null,a.createElement("h2",{id:"health-page-heading","data-cy":"healthPageHeading"},"Health Checks"),a.createElement("p",null,a.createElement(i.zx,{onClick:()=>{u||r((0,c.rv)())},color:u?"btn btn-danger":"btn btn-primary",disabled:u},a.createElement(o.G,{icon:"sync"}),"\xa0 Refresh")),a.createElement(i.X2,null,a.createElement(i.JX,{md:"12"},a.createElement(i.iA,{bordered:!0,"aria-describedby":"health-page-heading"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Service name"),a.createElement("th",null,"Status"),a.createElement("th",null,"Details"))),a.createElement("tbody",null,Object.keys(b).map(((e,l)=>{return"status"!==e?a.createElement("tr",{key:l},a.createElement("td",null,e),a.createElement("td",null,a.createElement(i.Ct,{color:(s=b[e].status,"UP"!==s?"danger":"success")},b[e].status)),a.createElement("td",null,b[e].details?a.createElement("a",{onClick:(r=e,c=b[e],()=>{n(!0),t(Object.assign(Object.assign({},c),{name:r}))})},a.createElement(o.G,{icon:"eye"})):null)):null;var r,c,s})))))),a.createElement(d,{healthObject:e,handleClose:E,showModal:l}))};var E=l(7076),b=l(4806);const h=()=>{const e=(0,s.TL)(),t=(0,s.CG)((e=>e.administration.metrics)),l=(0,s.CG)((e=>e.administration.loading)),n=(0,s.CG)((e=>e.administration.threadDump));(0,a.useEffect)((()=>{e((0,c.O0)()),e((0,c.u7)())}),[]);return a.createElement("div",null,a.createElement("h2",{id:"metrics-page-heading","data-cy":"metricsPageHeading"},"Application Metrics"),a.createElement("p",null,a.createElement(i.zx,{onClick:()=>{l||(e((0,c.O0)()),e((0,c.u7)()))},color:l?"btn btn-danger":"btn btn-primary",disabled:l},a.createElement(o.G,{icon:"sync"}),"\xa0 Refresh")),a.createElement("hr",null),a.createElement(i.X2,null,a.createElement(i.JX,{sm:"12"},a.createElement("h3",null,"JVM Metrics"),a.createElement(i.X2,null,a.createElement(i.JX,{md:"4"},(null===t||void 0===t?void 0:t.jvm)?a.createElement(E.JvmMemory,{jvmMetrics:t.jvm,wholeNumberFormat:b.hC}):""),a.createElement(i.JX,{md:"4"},n?a.createElement(E.JvmThreads,{jvmThreads:n,wholeNumberFormat:b.hC}):""),a.createElement(i.JX,{md:"4"},(null===t||void 0===t?void 0:t.processMetrics)?a.createElement(E.SystemMetrics,{systemMetrics:t.processMetrics,wholeNumberFormat:b.hC,timestampFormat:b.sR}):"")))),(null===t||void 0===t?void 0:t.garbageCollector)?a.createElement(E.GarbageCollectorMetrics,{garbageCollectorMetrics:t.garbageCollector,wholeNumberFormat:b.hC}):"",t&&t["http.server.requests"]?a.createElement(E.HttpRequestMetrics,{requestMetrics:t["http.server.requests"],twoDigitAfterPointFormat:b.aY,wholeNumberFormat:b.hC}):"",(null===t||void 0===t?void 0:t.services)?a.createElement(E.EndpointsRequestsMetrics,{endpointsRequestsMetrics:t.services,wholeNumberFormat:b.hC}):"",(null===t||void 0===t?void 0:t.cache)?a.createElement(i.X2,null,a.createElement(i.JX,{sm:"12"},a.createElement(E.CacheMetrics,{cacheMetrics:t.cache,twoDigitAfterPointFormat:b.aY}))):"",(null===t||void 0===t?void 0:t.databases)&&"{}"!==JSON.stringify(t.databases)?a.createElement(i.X2,null,a.createElement(i.JX,{sm:"12"},a.createElement(E.DatasourceMetrics,{datasourceMetrics:t.databases,twoDigitAfterPointFormat:b.aY}))):"")},p=()=>{var e,t;const[l,n]=(0,a.useState)(""),[r,m]=(0,a.useState)(!1),[o,d]=(0,a.useState)(!1),u=(0,s.TL)(),E=(0,s.CG)((e=>e.administration.configuration));(0,a.useEffect)((()=>{u((0,c.sm)()),u((0,c.dU)())}),[]);const b=e=>e.toUpperCase().includes(l.toUpperCase()),h=null!==(e=null===E||void 0===E?void 0:E.configProps)&&void 0!==e?e:{},p=null!==(t=null===E||void 0===E?void 0:E.env)&&void 0!==t?t:{};return a.createElement("div",null,a.createElement("h2",{id:"configuration-page-heading","data-cy":"configurationPageHeading"},"Configuration"),a.createElement("span",null,"Filter (by prefix)")," ",a.createElement(i.II,{type:"search",value:l,onChange:e=>n(e.target.value),name:"search",id:"search"}),a.createElement("label",null,"Spring configuration"),a.createElement(i.iA,{className:"table table-striped table-bordered table-responsive d-table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{onClick:()=>m(!r)},"Prefix"),a.createElement("th",{onClick:()=>d(!o)},"Properties"))),a.createElement("tbody",null,h.contexts?Object.values((g=h.contexts,Object.values(g).map((e=>e.beans)).reduce(((e,t)=>Object.assign(Object.assign({},e),t))))).filter((e=>e.prefix.toUpperCase().includes(l.toUpperCase()))).map(((e,t)=>a.createElement("tr",{key:t},a.createElement("td",null,e.prefix),a.createElement("td",null,Object.keys(e.properties).map(((t,l)=>a.createElement(i.X2,{key:l},a.createElement(i.JX,{md:"4"},t),a.createElement(i.JX,{md:"8"},a.createElement(i.Ct,{className:"float-end bg-secondary break"},JSON.stringify(e.properties[t])))))))))):null)),p.propertySources?p.propertySources.map(((e,t)=>a.createElement("div",{key:t},a.createElement("h4",null,a.createElement("span",null,e.name)),a.createElement(i.iA,{className:"table table-sm table-striped table-bordered table-responsive d-table"},a.createElement("thead",null,a.createElement("tr",{key:t},a.createElement("th",{className:"w-40"},"Property"),a.createElement("th",{className:"w-60"},"Value"))),a.createElement("tbody",null,Object.keys(e.properties).filter(b).map(((t,l)=>a.createElement("tr",{key:l},a.createElement("td",{className:"break"},t),a.createElement("td",{className:"break"},a.createElement("span",{className:"float-end badge bg-secondary break"},e.properties[t].value)))))))))):null);var g},g=()=>a.createElement("div",null,a.createElement("iframe",{src:"../swagger-ui/index.html",width:"100%",height:"800",title:"Swagger UI",seamless:!0,style:{border:"none"},"data-cy":"swagger-frame"})),v=()=>a.createElement("div",null,a.createElement(r.Z,null,a.createElement(n.AW,{path:"health",element:a.createElement(u,null)}),a.createElement(n.AW,{path:"metrics",element:a.createElement(h,null)}),a.createElement(n.AW,{path:"configuration",element:a.createElement(p,null)}),a.createElement(n.AW,{path:"logs",element:a.createElement(m,null)}),a.createElement(n.AW,{path:"docs",element:a.createElement(g,null)})))}}]);