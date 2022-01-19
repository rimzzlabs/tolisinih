import{T as g,F as C}from"./Trash.1302846e.js";import{P as E,f as A,c as u,a as h,b as y,h as f,i as T,j as b,k,l as _,m as x}from"./index.e81f9d47.js";import{I as S}from"./Indicator.5dca64f2.js";import{s as j}from"./modalAlertAction.f76f10af.js";import{r as n,d as p,c as m,a as v,j as a,l as O}from"./vendor.0cb41a1d.js";const F=({id:t,title:r,priority:i,is_active:c})=>{const[d,e]=n.exports.useState(!c),o=p(l=>l.selectedActivity),s=m(),w=async()=>{const l=await h(`/activity-groups/${o.id}`);s(y(l))};return v("div",{"data-cy":"todo-item",className:"flex items-center justify-between w-full h-14 md:h-16 px-4 lg:px-8 rounded-lg shadow bg-white",children:[v("div",{className:"flex items-center space-x-2 lg:space-x-4 w-full h-full",children:[a("input",{"data-cy":"todo-item-checkbox",type:"checkbox",onChange:async()=>{e(!d),await A("/todo-items/"+t,{is_active:d?1:0}),await w()},checked:d}),a(S,{type:i}),a("h3",{"data-cy":"todo-item-title",className:"lg:text-lg font-semibold text-fontColor-900 ",children:r}),a(E,{className:"w-5 h-5",onClick:()=>{s(u({isOpen:!0,title:r,priority:i,titleForm:"Edit Item",id:t}))},"data-cy":"todo-item-edit-button"})]}),a(g,{"data-cy":"todo-item-delete-button",onClick:()=>{s(j({type:"Item",id:t,isOpen:!0,title:r}))},className:"text-xl lg:text-2xl cursor-pointer text-gray-600"})]})};var N=n.exports.memo(F);const D=()=>{const t=p(e=>e.selectedActivity.todo_items),r=p(e=>e.sortOptions),i=m(),c=()=>{i(u({isOpen:!0,titleForm:"Tambah List Item",priority:"Very High"}))},d=e=>{switch(e.type){case x:return t.sort((o,s)=>s.id-o.id);case _:return t.sort((o,s)=>o.id-s.id);case k:return t.sort((o,s)=>o.title.toUpperCase()<s.title.toUpperCase()?-1:1);case b:return t.sort((o,s)=>o.title.toUpperCase()<s.title.toUpperCase()?1:-1);case T:return t.sort((o,s)=>s.is_active-o.is_active);default:return t}};return n.exports.useEffect(()=>(d({type:r.sortBy}),()=>{i(f({isOpen:!1}))}),[r.sortBy]),t.length>0?a("div",{className:"flex flex-col w-full space-y-2 md:space-y-3",children:t.map(e=>a(N,{id:e.id,title:e.title,priority:e.priority,is_active:e.is_active},e.id))}):a(C,{onClick:c,"data-cy":"todo-empty-state",src:"https://ik.imagekit.io/mlnzyx/devcode-todo/new-todos_icWrDUS4D0.webp?updatedAt=1641870367004"})},I=()=>{const t=m(),{slug:r}=O(),i=async()=>{const c=await h(`/activity-groups/${r}`);t(y(c))};return n.exports.useEffect(()=>(i(),()=>{t(f({sortBy:x,isOpen:!1}))}),[]),a(D,{})};var Z=n.exports.memo(I);export{Z as default};