var n=Object.defineProperty;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var d=(a,o,r)=>o in a?n(a,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[o]=r,i=(a,o)=>{for(var r in o||(o={}))p.call(o,r)&&d(a,r,o[r]);if(s)for(var r of s(o))c.call(o,r)&&d(a,r,o[r]);return a};import{c as m,k as u}from"./index.1a5e5896.js";import{I as f}from"./Indicator.a2721961.js";import{r as t,c as D,a as x,j as e,d as y}from"./vendor.b30708ff.js";const h=({title:a,id:o})=>{const r=D(),l=t.exports.useCallback(()=>{r(m({priority:a,isDropDownOpen:!1}))},[r]);return x("button",{id:o,onClick:l,"data-cy":"modal-add-priority-item",className:"flex items-center h-full w-full px-4 lg:px-6 cursor-pointer hover:bg-neutral-100",children:[e(f,{type:a}),e("span",{children:a})]})};var w=t.exports.memo(h);const b=()=>y(o=>o.modalForm).isDropDownOpen?e("div",{"data-cy":"modal-add-priority-dropdown",className:"flex flex-col absolute w-40 lg:w-48 h-72 rounded-lg border divide-y mt-2 divide-neutral-300 bg-white",children:u.map(o=>e(w,i({},o),o.id))}):null;var k=t.exports.memo(b);export{k as default};