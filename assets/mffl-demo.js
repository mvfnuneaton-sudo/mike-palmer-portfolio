/* MFFL Interactive Portfolio Demonstration v11
 * Isolated static simulation — fictional data, no live league/API access.
 */
(()=>{
'use strict';
const host=document.getElementById('project-mffl');
if(!host || host.dataset.interactiveDemo==='ready')return;
host.dataset.interactiveDemo='ready';
const gallery=host.querySelector('.studio-gallery-mffl');
if(!gallery)return;
// Keep the original laptop shell while replacing the image with a working UI.
const laptop=gallery.querySelector('.studio-laptop');
const base=gallery.querySelector('.studio-laptop-base');
const controls=gallery.querySelector('.studio-controls');
const oldDescription=gallery.querySelector('.studio-screen-description');
const oldImage=laptop?.querySelector('.studio-screen');
if(!laptop||!oldImage)return;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icons={
 overview:'▦',registrations:'▤',matches:'⚑',teams:'♧',graphics:'▧',tables:'▥',website:'↗',discipline:'◎'
};
const menu=[
 ['overview','Overview','LEAGUE'],
 ['tables','League Tables','LEAGUE'],
 ['matches','Match Control','MATCHDAY'],
 ['discipline','Discipline','MATCHDAY'],
 ['registrations','Registrations','PEOPLE & CLUBS'],
 ['teams','Teams & Squads','PEOPLE & CLUBS'],
 ['graphics','Graphics Hub','CONTENT'],
 ['website','Public Website','CONTENT']
];
const initialPeople=[
 {id:'R-1021',name:'Alex Mercer',team:'Northbridge Active',route:'Route 1',status:'Pending',submitted:'28 Oct'},
 {id:'R-1022',name:'Jordan Blake',team:'Riverside Fitness FC',route:'Route 3',status:'Pending',submitted:'28 Oct'},
 {id:'R-1023',name:'Sam Ellis',team:'Oakfield United',route:'Route 1',status:'Pending',submitted:'27 Oct'},
 {id:'R-1024',name:'Taylor Reed',team:'Northbridge Active',route:'Route 2',status:'Approved',submitted:'26 Oct'},
 {id:'R-1025',name:'Casey Morgan',team:'Riverside Fitness FC',route:'Route 1',status:'Approved',submitted:'25 Oct'}
];
const initialFixtures=[
 {id:'F101',date:'01 NOV',league:'Premier East',home:'Northbridge Active',away:'Riverside Fitness FC',score:'3–2',status:'Pending',returns:'2 / 2'},
 {id:'F102',date:'01 NOV',league:'Premier West',home:'Oakfield United',away:'Westside Wolves',score:'1–1',status:'Confirmed',returns:'2 / 2'},
 {id:'F103',date:'25 OCT',league:'Championship East',home:'Newtown FC',away:'Valley United',score:'4–1',status:'Confirmed',returns:'2 / 2'},
 {id:'F104',date:'25 OCT',league:'Premier East',home:'Riverside Fitness FC',away:'Oakfield United',score:'2–0',status:'Pending',returns:'1 / 2'},
 {id:'F105',date:'18 OCT',league:'Premier West',home:'Westside Wolves',away:'Newtown FC',score:'3–3',status:'Confirmed',returns:'2 / 2'}
];
const teams=[
 {name:'Northbridge Active',league:'Premier East',players:28,matches:10,initials:'NA',color:'#3f2c93'},
 {name:'Riverside Fitness FC',league:'Premier East',players:31,matches:10,initials:'RF',color:'#df3439'},
 {name:'Oakfield United',league:'Premier West',players:26,matches:9,initials:'OU',color:'#247eaa'},
 {name:'Westside Wolves',league:'Premier West',players:33,matches:9,initials:'WW',color:'#252f48'},
 {name:'Valley United',league:'Championship East',players:24,matches:8,initials:'VU',color:'#188266'},
 {name:'Newtown FC',league:'Championship East',players:29,matches:8,initials:'NF',color:'#9b5a20'}
];
const state={page:'overview',people:initialPeople.map(x=>({...x})),fixtures:initialFixtures.map(x=>({...x})),peopleFilter:'All',peopleSearch:'',matchFilter:'All',teamFilter:'All',selectedFixture:null,selectedPerson:null,graphic:'Results',format:'1:1',graphicWeek:'Week 13',tableLeague:'Premier East',publicTab:'Home',toast:''};
const badge=(label)=>`<span class="mffl-status mffl-status-${label.toLowerCase().replace(/\W+/g,'-')}">${esc(label)}</span>`;
const kpi=(num,label,tone='')=>`<div class="mffl-kpi ${tone}"><span>${esc(label)}</span><strong>${esc(num)}</strong></div>`;
const actionButton=(label,page)=>`<button type="button" class="mffl-task" data-mffl-page="${page}"><b>${esc(label)}</b><span>Open section →</span></button>`;
const stats=()=>({pending:state.people.filter(p=>p.status==='Pending').length,confirmed:state.fixtures.filter(f=>f.status==='Confirmed').length,pendingFixtures:state.fixtures.filter(f=>f.status==='Pending').length});
const header=(crumb,title,sub,actions='')=>`<div class="mffl-screen-heading"><div><p class="mffl-breadcrumb">${esc(crumb)}</p><h3>${esc(title)}</h3><p>${esc(sub)}</p></div>${actions}</div>`;
const mainOverview=()=>{const x=stats();return `${header('2026/27 / LEAGUE ADMIN','League control centre.','Everything the league needs, connected to one source of truth.','<span class="mffl-live-chip">● SYSTEM DEMO</span>')}
  <div class="mffl-kpis">${kpi('960','APPROVED PLAYERS')}${kpi('30','TEAMS')}${kpi('114','FIXTURES')}${kpi(x.confirmed,'CONFIRMED RESULTS')}${kpi(x.pending,'OPEN REGISTRATIONS','alert')}</div>
  <div class="mffl-section-caption">OPERATIONAL WORKFLOWS <span>LIVE IN THIS DEMO</span></div>
  <div class="mffl-task-grid">${actionButton('Review registrations','registrations')}${actionButton('Confirm match results','matches')}${actionButton('Manage clubs and squads','teams')}${actionButton('Create result graphics','graphics')}${actionButton('View league tables','tables')}${actionButton('Preview public site','website')}</div>
  <div class="mffl-notice"><b>Connected workflows</b><span>Try approving a sample registration or confirming a result — the demo dashboard will update.</span></div>`;};
const personRows=()=>state.people.filter(p=>(state.peopleFilter==='All'||p.status===state.peopleFilter)&&(!state.peopleSearch||`${p.name} ${p.team} ${p.id}`.toLowerCase().includes(state.peopleSearch.toLowerCase())));
const mainRegistrations=()=>`${header('PEOPLE & CLUBS / REGISTRATIONS','Player registrations','Review sample applications and simulate approval decisions.',badge(`${stats().pending} PENDING`))}
 <div class="mffl-filter-row"><label>STATUS <select data-mffl-select="peopleFilter">${['All','Pending','Approved','Refused'].map(x=>`<option ${state.peopleFilter===x?'selected':''}>${x}</option>`).join('')}</select></label><label class="mffl-search-label">SEARCH <input data-mffl-search="people" value="${esc(state.peopleSearch)}" placeholder="Name, team or reference"></label></div>
 <div class="mffl-panel"><div class="mffl-panel-title"><b>Applications</b><span>${personRows().length} demonstration records</span></div>
 ${personRows().length?personRows().map(p=>`<div class="mffl-person-row"><div class="mffl-avatar">${p.name.split(' ').map(n=>n[0]).join('')}</div><div class="mffl-person-name"><strong>${esc(p.name)}</strong><small>${esc(p.team)} · ${esc(p.id)}</small></div><div class="mffl-person-route">${esc(p.route)}</div>${badge(p.status)}<button class="mffl-link-btn" data-mffl-person="${p.id}">Review →</button></div>`).join(''):'<p class="mffl-empty">No applications match these filters.</p>'}</div>`;
const mainMatches=()=>`${header('MATCHDAY / FIXTURES & RESULTS','Match control.','Review fixtures, check returns and confirm sample results.',badge(`${stats().pendingFixtures} TO REVIEW`))}
 <div class="mffl-filter-row"><label>COMPETITION <select data-mffl-select="matchFilter"><option value="All">All competitions</option>${['Premier East','Premier West','Championship East'].map(v=>`<option ${state.matchFilter===v?'selected':''}>${v}</option>`).join('')}</select></label><span class="mffl-filter-note">Select a fixture to inspect its status.</span></div>
 <div class="mffl-panel"><div class="mffl-table-scroll"><table class="mffl-table"><thead><tr><th>DATE</th><th>COMPETITION</th><th>FIXTURE</th><th>RESULT</th><th>STATUS</th><th></th></tr></thead><tbody>${state.fixtures.filter(f=>state.matchFilter==='All'||f.league===state.matchFilter).map(f=>`<tr><td>${f.date}</td><td>${esc(f.league)}</td><td><strong>${esc(f.home)}</strong><small>vs ${esc(f.away)}</small></td><td><b>${esc(f.score)}</b></td><td>${badge(f.status)}</td><td><button class="mffl-link-btn" data-mffl-fixture="${f.id}">Open →</button></td></tr>`).join('')}</tbody></table></div></div>`;
const mainTeams=()=>`${header('PEOPLE & CLUBS / SQUADS','Teams & squads.','One linked club profile, registration and matchday view.')}
 <div class="mffl-filter-row"><label>DIVISION <select data-mffl-select="teamFilter"><option value="All">All divisions</option>${['Premier East','Premier West','Championship East'].map(v=>`<option ${state.teamFilter===v?'selected':''}>${v}</option>`).join('')}</select></label></div>
 <div class="mffl-team-grid">${teams.filter(t=>state.teamFilter==='All'||t.league===state.teamFilter).map(t=>`<article class="mffl-team-card"><div class="mffl-team-crest" style="--crest:${t.color}">${t.initials}</div><div><small>${esc(t.league)}</small><strong>${esc(t.name)}</strong><span>${t.players} players · ${t.matches} fixtures</span></div>${badge('Active')}</article>`).join('')}</div>`;
const mainDiscipline=()=>`${header('MATCHDAY / GOVERNANCE','Discipline & eligibility','Track the rules that keep competitions fair and consistent.')}
 <div class="mffl-rule-grid"><div><b>Competition eligibility</b><p>Route-based registration checks and player movement policies are recorded as structured rules.</p>${badge('Active')}</div><div><b>Cup tie restrictions</b><p>A player selected in one team becomes tied to that team for the remaining cup and shield fixtures.</p>${badge('Enforced')}</div><div><b>Suspensions</b><p>Admin workflows record match bans, review notes and future fixture availability.</p>${badge('Tracked')}</div></div><div class="mffl-notice"><b>Why this matters</b><span>Operational rules should be enforced by the platform, not remembered across spreadsheets and emails.</span></div>`;
function graphicsPreview(){const vertical=state.format==='9:16',table=state.graphic==='League Table';return `<div class="mffl-graphic-art ${vertical?'portrait':''}"><div class="mffl-graphic-bar"><span>◆ MFFL</span><span>2026 / 27</span></div><small>${esc(state.graphic.toUpperCase())} · ${esc(state.graphicWeek.toUpperCase())}</small>${table?`<h4>PREMIER<br>EAST</h4><div class="mffl-graphic-results">${['NORTHBRIDGE ACTIVE','RIVERSIDE FITNESS','OAKFIELD UNITED'].map((s,i)=>`<div><span>${i+1}. ${s}</span><b>${24-i*3} PTS</b></div>`).join('')}</div>`:`<h4>WEEKEND<br>RESULTS</h4><div class="mffl-graphic-score"><span>NORTHBRIDGE<br>ACTIVE</span><strong>3–2</strong><span>RIVERSIDE<br>FITNESS</span></div>`}<footer>FITNESS AT ITS HEART <span>●</span></footer></div>`;}
const mainGraphics=()=>`${header('CONTENT / AUTOMATION','Social graphics hub.','Turn confirmed league data into consistent, publish-ready assets.')}
 <div class="mffl-graphics-layout"><div class="mffl-graphic-settings"><div class="mffl-section-caption">GRAPHIC SETTINGS</div><label>CONTENT TYPE<select data-mffl-select="graphic"><option ${state.graphic==='Results'?'selected':''}>Results</option><option ${state.graphic==='League Table'?'selected':''}>League Table</option></select></label><label>FORMAT<select data-mffl-select="format"><option ${state.format==='1:1'?'selected':''}>1:1</option><option ${state.format==='9:16'?'selected':''}>9:16</option></select></label><label>GAME WEEK<select data-mffl-select="graphicWeek"><option ${state.graphicWeek==='Week 13'?'selected':''}>Week 13</option><option ${state.graphicWeek==='Week 12'?'selected':''}>Week 12</option></select></label><div class="mffl-notice"><b>Automated from results</b><span>This preview simulates data-fed output. Changes update the demonstration artwork.</span></div><button class="mffl-primary-action" data-mffl-action="generate">Regenerate preview ↗</button></div><div class="mffl-graphic-stage" data-mffl-graphic-stage>${graphicsPreview()}</div></div>`;
const tablesData={
 'Premier East':[['Northbridge Active',10,8,1,1,25],['Riverside Fitness FC',10,7,1,2,22],['Oakfield United',10,6,2,2,20],['Newtown FC',10,4,3,3,15]],
 'Premier West':[['Westside Wolves',10,7,2,1,23],['Valley United',10,6,2,2,20],['Riverside Fitness FC',10,5,3,2,18],['Oakfield United',10,4,2,4,14]],
 'Championship East':[['Valley United',8,7,1,0,22],['Newtown FC',8,5,2,1,17],['Northbridge Active',8,4,1,3,13],['Westside Wolves',8,2,2,4,8]]
};
const mainTables=()=>`${header('LEAGUE / STANDINGS','League tables.','Competition tables linked to confirmed results.')}
 <div class="mffl-filter-row"><label>DIVISION <select data-mffl-select="tableLeague">${Object.keys(tablesData).map(v=>`<option ${state.tableLeague===v?'selected':''}>${v}</option>`).join('')}</select></label></div><div class="mffl-panel"><div class="mffl-table-scroll"><table class="mffl-table"><thead><tr><th>POS</th><th>TEAM</th><th>P</th><th>W</th><th>D</th><th>L</th><th>PTS</th></tr></thead><tbody>${tablesData[state.tableLeague].map((t,i)=>`<tr><td><strong>${i+1}</strong></td><td><strong>${esc(t[0])}</strong></td>${t.slice(1).map(n=>`<td>${n}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div><div class="mffl-notice"><b>One data source</b><span>In the live platform, only confirmed fixtures contribute to public tables and statistics.</span></div>`;
const mainWebsite=()=>`${header('PUBLISHING / PUBLIC WEBSITE','Connected public website','A sample public-facing view fed from the same league system.')}
 <div class="mffl-public-surface"><div class="mffl-public-nav"><b>◆ MIDLANDS FITNESS LEAGUE</b><div>${['Home','Leagues','Results'].map(t=>`<button data-mffl-public="${t}" class="${state.publicTab===t?'active':''}">${t}</button>`).join('')}</div></div><div class="mffl-public-hero"><small>2026/27 SEASON · DEMONSTRATION</small><h4>${state.publicTab==='Home'?'COMPETITIVE FOOTBALL.\nFITNESS AT ITS HEART.':state.publicTab==='Leagues'?'FOUR LEAGUES.\nONE COMMUNITY.':'MATCHDAY RESULTS.\nALL IN ONE PLACE.'}</h4><p>${state.publicTab==='Home'?'Football, fitness and community across the Midlands.':state.publicTab==='Leagues'?'Explore teams, fixtures and tables across the current competitions.':'Confirmed results travel straight from league control to public pages.'}</p><button data-mffl-public="${state.publicTab==='Home'?'Leagues':state.publicTab==='Leagues'?'Results':'Home'}">Explore ${state.publicTab==='Home'?'leagues':state.publicTab==='Leagues'?'results':'the league'} →</button></div></div>`;
const renderContent=()=>{
 switch(state.page){case 'overview':return mainOverview();case 'registrations':return mainRegistrations();case 'matches':return mainMatches();case 'teams':return mainTeams();case 'discipline':return mainDiscipline();case 'graphics':return mainGraphics();case 'tables':return mainTables();case 'website':return mainWebsite();default:return mainOverview();}
};
// Build a fixed-size desktop UI. All sections occupy the same viewport; no jumpy navigation.
gallery.classList.add('mffl-interactive-gallery');
gallery.querySelector('.studio-gallery-top')?.replaceChildren();
const top=gallery.querySelector('.studio-gallery-top');
if(top)top.innerHTML='<span><i class="live-dot"></i> TRY THE PLATFORM</span><span>INTERACTIVE DEMO · FICTIONAL DATA</span>';
oldImage.innerHTML=`<div class="mffl-demo" role="application" aria-label="Interactive MFFL league management demonstration"><aside class="mffl-demo-sidebar"><div class="mffl-demo-brand"><div class="mffl-demo-crest">M</div><div><b>MFFL Control</b><small>LEAGUE ADMINISTRATION</small></div></div><nav class="mffl-demo-nav" aria-label="Demo sections"></nav><div class="mffl-demo-sidefoot">SAMPLE PLATFORM · V2</div></aside><div class="mffl-demo-body"><div class="mffl-demo-topbar"><div class="mffl-demo-breadcrumb">MFFL / <span data-mffl-current>OVERVIEW</span></div><div class="mffl-demo-indicators"><span class="mffl-demo-mode">INTERACTIVE DEMO</span><span class="mffl-demo-admin">DEMO ADMIN</span></div></div><nav class="mffl-demo-mobile-nav" aria-label="Demo mobile sections"></nav><div class="mffl-demo-main" data-mffl-content></div></div><div class="mffl-drawer" hidden data-mffl-drawer></div><div class="mffl-toast" hidden data-mffl-toast role="status" aria-live="polite"></div></div>`;
// Keep the MacBook shell and existing footer; remove static four-tab slideshow.
if(controls)controls.remove();if(oldDescription)oldDescription.remove();
const screenFoot=gallery.querySelector('.studio-screen-foot');
if(screenFoot)screenFoot.innerHTML='<strong>INTERACTIVE LEAGUE MANAGEMENT DEMO</strong><span>EXPLORE THE PLATFORM ↗</span>';
const nav=oldImage.querySelector('.mffl-demo-nav');
const mobileNav=oldImage.querySelector('.mffl-demo-mobile-nav');
function navMarkup(){let last='';return menu.map(([id,label,group])=>{let head=group!==last?`<p>${esc(group)}</p>`:'';last=group;return head+`<button type="button" data-mffl-page="${id}" class="${id===state.page?'active':''}"><span class="mffl-nav-symbol">${icons[id]}</span>${esc(label)}</button>`}).join('')};
function renderNav(){nav.innerHTML=navMarkup();mobileNav.innerHTML=menu.map(([id,label])=>`<button type="button" data-mffl-page="${id}" class="${id===state.page?'active':''}">${esc(label)}</button>`).join('');oldImage.querySelector('[data-mffl-current]').textContent=menu.find(([id])=>id===state.page)?.[1].toUpperCase()||'OVERVIEW';}
function render(resetScroll=true){renderNav();oldImage.querySelector('[data-mffl-content]').innerHTML=renderContent();if(resetScroll)oldImage.querySelector('.mffl-demo-main').scrollTop=0;}
function notify(msg){const toast=oldImage.querySelector('[data-mffl-toast]');toast.textContent=msg;toast.hidden=false;clearTimeout(notify.timer);notify.timer=setTimeout(()=>toast.hidden=true,2900);}
function drawer(html){const target=oldImage.querySelector('[data-mffl-drawer]');target.hidden=false;target.innerHTML=`<button class="mffl-drawer-close" data-mffl-close aria-label="Close details">×</button>${html}`;}
function closeDrawer(){const target=oldImage.querySelector('[data-mffl-drawer]');target.hidden=true;target.innerHTML='';}
function reviewPerson(id){const p=state.people.find(r=>r.id===id);if(!p)return;drawer(`<p class="mffl-breadcrumb">REGISTRATION / ${esc(p.id)}</p><h3>${esc(p.name)}</h3><p>${esc(p.team)}</p><div class="mffl-drawer-facts"><span>Eligibility route</span><b>${esc(p.route)}</b><span>Application state</span>${badge(p.status)}<span>Submitted</span><b>${p.submitted} 2026</b></div><div class="mffl-notice"><b>Sample record</b><span>Names, eligibility information and decisions are fictional.</span></div>${p.status==='Pending'?`<button class="mffl-primary-action" data-mffl-person-approve="${p.id}">Approve demonstration application</button><button class="mffl-muted-action" data-mffl-person-refuse="${p.id}">Refuse demonstration application</button>`:''}`);}
function reviewFixture(id){const f=state.fixtures.find(r=>r.id===id);if(!f)return;drawer(`<p class="mffl-breadcrumb">MATCH CONTROL / ${esc(f.id)}</p><h3>${esc(f.home)} <span>vs</span> ${esc(f.away)}</h3><div class="mffl-drawer-score">${esc(f.score)}</div><div class="mffl-drawer-facts"><span>Competition</span><b>${esc(f.league)}</b><span>Referee returns</span><b>${esc(f.returns)}</b><span>Status</span>${badge(f.status)}</div><div class="mffl-notice"><b>Illustrative match</b><span>Confirming this fixture updates the demo only.</span></div>${f.status==='Pending'?`<button class="mffl-primary-action" data-mffl-match-confirm="${f.id}">Confirm result</button>`:''}`);}
oldImage.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.mfflPage){state.page=b.dataset.mfflPage;closeDrawer();render();return;}
 if(b.dataset.mfflClose!==undefined){closeDrawer();return;}
 if(b.dataset.mfflPerson){reviewPerson(b.dataset.mfflPerson);return;}
 if(b.dataset.mfflFixture){reviewFixture(b.dataset.mfflFixture);return;}
 if(b.dataset.mfflPersonApprove||b.dataset.mfflPersonRefuse){const id=b.dataset.mfflPersonApprove||b.dataset.mfflPersonRefuse,p=state.people.find(x=>x.id===id);if(p){p.status=b.dataset.mfflPersonApprove?'Approved':'Refused';closeDrawer();render(false);notify(`Sample registration ${p.status.toLowerCase()} — demo only`);}return;}
 if(b.dataset.mfflMatchConfirm){const f=state.fixtures.find(x=>x.id===b.dataset.mfflMatchConfirm);if(f){f.status='Confirmed';closeDrawer();render(false);notify('Sample result confirmed — demo only');}return;}
 if(b.dataset.mfflPublic){state.publicTab=b.dataset.mfflPublic;render(false);return;}
 if(b.dataset.mfflAction==='generate'){notify(`${state.graphic} ${state.format} preview refreshed`);return;}
});
oldImage.addEventListener('change',e=>{
 const input=e.target,name=input?.dataset?.mfflSelect;if(!name)return;
 if(Object.prototype.hasOwnProperty.call(state,name)){state[name]=input.value;render(false)}
});
oldImage.addEventListener('input',e=>{
 if(e.target?.dataset?.mfflSearch!=='people')return;
 const val=e.target.value,pos=e.target.selectionStart;
 state.peopleSearch=val;render(false);
 const next=oldImage.querySelector('[data-mffl-search="people"]');if(next){next.focus();next.setSelectionRange(pos,pos);}
});
render();
})();