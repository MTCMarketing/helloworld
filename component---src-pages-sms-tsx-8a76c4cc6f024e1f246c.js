"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[249],{3391:function(e,t,s){s.r(t);var a=s(7294);const r="AYrkAAIjcDFjZDZlODJmNzQ2YzI0M2JiOGU5YjE2ZWU3MGMwMjI1OHAxMA";async function n(){try{const e=await fetch("https://rare-coral-35556.upstash.io/subscribe/test-channel",{headers:{Authorization:"Bearer "+r}});if(!e.ok)throw new Error("Subscription failed: "+e.statusText);const t=await e.json();console.log("Received message:",t),n()}catch(e){console.error("Subscription error:",e),setTimeout(n,5e3)}}t.default=()=>{const{0:e,1:t}=(0,a.useState)([]),{0:s,1:r}=(0,a.useState)(!1),{0:u,1:c}=(0,a.useState)(""),{0:l,1:o}=(0,a.useState)([]);return(0,a.useEffect)((()=>{n()}),[]),a.createElement("div",null,a.createElement("h1",null,"Upstash Pub/Sub Test"),a.createElement("p",null,"Waiting for messages from Upstash..."),a.createElement("ul",null,l.map(((e,t)=>a.createElement("li",{key:t},e)))))}}}]);
//# sourceMappingURL=component---src-pages-sms-tsx-8a76c4cc6f024e1f246c.js.map