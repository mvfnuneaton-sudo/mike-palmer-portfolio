/* Relevance navigator: a fast route through the portfolio for recruiters & clients. */
(()=>{'use strict';
const host=document.getElementById('role-fit');if(!host)return;
const tabs=[...host.querySelectorAll('[role="tab"]')];
const panels=[...host.querySelectorAll('[role="tabpanel"]')];
const choices=new Set(tabs.map(t=>t.dataset.fit));
const getCurrent=()=>tabs.find(t=>t.getAttribute('aria-selected')==='true')?.dataset.fit||'commerce';
function activate(name,focus=false){if(!choices.has(name))return;
 tabs.forEach(t=>{const on=t.dataset.fit===name;t.setAttribute('aria-selected',String(on));t.tabIndex=on?0:-1;if(on&&focus)t.focus();});
 panels.forEach(p=>{p.hidden=p.id!==`fit-panel-${name}`;});
}
tabs.forEach((tab,i)=>{
 tab.addEventListener('click',()=>activate(tab.dataset.fit));
 tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight'||e.key==='ArrowDown')next=(i+1)%tabs.length;else if(e.key==='ArrowLeft'||e.key==='ArrowUp')next=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();activate(tabs[next].dataset.fit,true);});
});
const initial=new URLSearchParams(location.search).get('focus');if(initial&&choices.has(initial))activate(initial);
const copy=document.getElementById('copyFocus');
copy?.addEventListener('click',async()=>{
 const link=new URL(window.location.href);link.searchParams.set('focus',getCurrent());link.hash='role-fit';
 try{await navigator.clipboard.writeText(link.href);copy.textContent='Copied — share this view ✓';}
 catch{const input=document.createElement('input');input.value=link.href;input.style.position='fixed';input.style.left='-9999px';document.body.append(input);input.select();const ok=document.execCommand('copy');input.remove();copy.textContent=ok?'Copied — share this view ✓':'Copy unavailable — use the address bar';}
 window.setTimeout(()=>{copy.textContent='Copy a link to this evidence ↗';},2500);
});
})();
