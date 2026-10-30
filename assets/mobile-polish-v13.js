/* V13 mobile interaction refinements for mobile-only demos. */
(()=>{
'use strict';
const mq=window.matchMedia('(max-width:600px)');
const mobileMq=window.matchMedia('(max-width:800px)');
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
let expanded=null,restore=null;
function closeExpanded(){
 if(!expanded)return;
 expanded.classList.remove('mobile-demo-expanded');
 const button=expanded.querySelector('.mobile-demo-expand');
 if(button){button.textContent='↗ Open full-screen demo';button.setAttribute('aria-expanded','false');}
 document.body.classList.remove('mobile-demo-lock');
 expanded=null;
 if(restore){restore.focus({preventScroll:true});restore=null;}
}
function enhanceGallery(gallery,label){
 if(gallery.dataset.mobileEnhanced)return;
 gallery.dataset.mobileEnhanced='true';
 const button=document.createElement('button');
 button.type='button';button.className='mobile-demo-expand';
 button.textContent='↗ Open full-screen demo';
 button.setAttribute('aria-expanded','false');
 button.setAttribute('aria-label', 'Open '+label+' in a full-screen interactive view');
 const galleryHead=gallery.querySelector('.studio-gallery-top');
 if(galleryHead)galleryHead.insertAdjacentElement('afterend',button);
 else gallery.prepend(button);
 button.addEventListener('click',()=>{
  if(expanded===gallery){closeExpanded();return;}
  closeExpanded();
  restore=button;
  expanded=gallery;
  gallery.classList.add('mobile-demo-expanded');
  document.body.classList.add('mobile-demo-lock');
  button.textContent='✕ Close demo';button.setAttribute('aria-expanded','true');
  button.focus({preventScroll:true});
 });
}
function enhanceFFN(ffn){
 if(ffn.dataset.mobileEnhanced)return;
 ffn.dataset.mobileEnhanced='true';
 ffn.dataset.mobileView='player';
 const controls=document.createElement('div');
 controls.className='mobile-demo-switch';
 controls.setAttribute('role','group');
 controls.setAttribute('aria-label','Choose FFN demonstration');
 controls.innerHTML='<button type="button" data-view="player" aria-pressed="true">Player app</button><button type="button" data-view="admin" aria-pressed="false">Club admin</button>';
 const devices=ffn.querySelector('.ffn-dual-devices');
 if(!devices)return;
 devices.insertAdjacentElement('beforebegin',controls);
 controls.addEventListener('click',e=>{
  const btn=e.target.closest('button[data-view]');if(!btn)return;
  ffn.dataset.mobileView=btn.dataset.view;
  controls.querySelectorAll('button').forEach(el=>el.setAttribute('aria-pressed',String(el===btn)));
 });
}
function scan(){
 const ffn=document.querySelector('#project-ffn .ffn-dual');
 if(ffn)enhanceFFN(ffn);
 const mffl=document.querySelector('#project-mffl .studio-gallery-mffl.mffl-interactive-gallery');
 if(mffl)enhanceGallery(mffl,'MFFL league portal');
 const mpd=document.querySelector('#project-mpdesk .mpd-interactive');
 if(mpd)enhanceGallery(mpd,'MP Desk marketplace workspace');
 return !!ffn&&!!mffl&&!!mpd;
}
if(!scan()){
 let count=0;
 const observer=new MutationObserver(()=>{
   if(scan()||++count>1000)observer.disconnect();
 });
 observer.observe(document.body,{childList:true,subtree:true});
}
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&expanded){e.preventDefault();closeExpanded();}
 if(e.key==='Tab'&&expanded){
   const list=[...expanded.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),[tabindex="0"]')].filter(el=>el.getClientRects().length);
   if(!list.length)return;
   const first=list[0],last=list[list.length-1];
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
 }
});
const onResize=()=>{if(!mobileMq.matches)closeExpanded();};
if(mobileMq.addEventListener)mobileMq.addEventListener('change',onResize);
// Mobile menu: Escape closes the navigation and returns focus to the trigger.
document.addEventListener('keydown',e=>{
 if(e.key!=='Escape')return;
 const sidebar=document.getElementById('sidebar'),menu=document.getElementById('menuButton');
 if(sidebar?.classList.contains('open') && menu){menu.click();menu.focus({preventScroll:true});}
});
})();