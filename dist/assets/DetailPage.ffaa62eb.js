import{_ as i,h as c,a as n,b as l,i as d}from"./index.0699fed6.js";import{r as s,c as p,k as f,j as t}from"./vendor.b30708ff.js";const u=s.exports.lazy(()=>i(()=>import("./TodoList.21e2f5c5.js"),["assets/TodoList.21e2f5c5.js","assets/index.0699fed6.js","assets/index.8a4398f2.css","assets/vendor.b30708ff.js"])),v=()=>{const e=p(),{slug:a}=f(),o=async()=>{const r=await n(`/activity-groups/${a}`);e(l(r))};return s.exports.useEffect(()=>(o(),()=>{e(c({sortBy:d,isOpen:!1}))}),[]),t("div",{className:"w-full",children:t(s.exports.Suspense,{fallback:null,children:t(u,{})})})};export{v as default};
