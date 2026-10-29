const menu=document.getElementById('menuButton'),sidebar=document.getElementById('sidebar'),shade=document.getElementById('navShade');
function closeMenu(){sidebar.classList.remove('open');shade.hidden=true;menu.setAttribute('aria-expanded','false')}
menu.addEventListener('click',()=>{const open=sidebar.classList.toggle('open');shade.hidden=!open;menu.setAttribute('aria-expanded',String(open))});
shade.addEventListener('click',closeMenu);
document.querySelectorAll('.side-nav a').forEach(a=>a.addEventListener('click',closeMenu));
const nav=[...document.querySelectorAll('.side-nav a')];
const obs=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible){nav.forEach(a=>a.classList.toggle('active',a.hash==='#'+visible.target.id))}},{threshold:[.14,.3,.6],rootMargin:'-12% 0px -55% 0px'});
document.querySelectorAll('main section[id]').forEach(section=>obs.observe(section));
for(const gallery of document.querySelectorAll('[data-gallery]')){
 const id=gallery.dataset.gallery,main=gallery.querySelector('.screen-main img'),caption=gallery.querySelector('.screen-caption span');
 gallery.querySelectorAll('.thumbs button').forEach(button=>button.addEventListener('click',()=>{
  gallery.querySelectorAll('.thumbs button').forEach(b=>b.classList.remove('active'));
  button.classList.add('active'); main.src=button.dataset.image; main.alt=button.dataset.alt;caption.textContent=button.dataset.caption;
 }));
}
document.getElementById('year').textContent=new Date().getFullYear();


// V5 skill proof explorer: each claim is linked to actual work and side-project evidence.
const skillData = {
  "process": {
    "title": "PROCESS IMPROVEMENT",
    "claim": "Find the friction before designing the fix.",
    "careerTitle": "Pyramid · B2B order mapping",
    "career": "Redesigned customer-order flows, with reusable mappings across around 40% of accounts and all key accounts in a 1,000+ customer base.",
    "projectTitle": "FFN · Connected member records and payments",
    "project": "Replaced disconnected availability, spreadsheet statistics and payment tracking with linked member records, integrated Stripe payments and one club workflow.",
    "keywords": "PROCESS MAPPING / EXCEPTION HANDLING / DELIVERY",
    "link": "#project-ffn"
  },
  "ux": {
    "title": "UI/UX & USER JOURNEYS",
    "claim": "Make the difficult parts feel straightforward for the person using them.",
    "careerTitle": "Pyramid · Customer-facing B2B ordering",
    "career": "Improved product terminology, interface clarity and online payment completion, including card and PayPal checkout.",
    "projectTitle": "FFN · Mobile journeys",
    "project": "Designed different paths for players and administrators, with fixtures, payments, progress and quick actions made accessible on a phone.",
    "keywords": "INFORMATION ARCHITECTURE / NAVIGATION / INTERACTION DESIGN",
    "link": "#project-ffn"
  },
  "api": {
    "title": "APIs & CONNECTIVITY",
    "claim": "Understand how information moves between tools and what must happen next.",
    "careerTitle": "Nemesis Now · Faire & Wayfair",
    "career": "Worked through marketplace API stock feeds, order retrieval and the operational handover required to make new channels work.",
    "projectTitle": "FFN · Stripe and nutrition integrations",
    "project": "Connected Stripe Checkout with signed webhook validation and reconciled payments, plus barcode scanning against the Open Food Facts API and a local nutrition catalogue.",
    "keywords": "REST APIs / STRIPE WEBHOOKS / THIRD-PARTY DATA / CACHING",
    "link": "#project-ffn"
  },
  "edi": {
    "title": "EDI & VENDOR FLOWS",
    "claim": "Connect the technical message to the real purchase order and shipment behind it.",
    "careerTitle": "KhooCommerce · Amazon Vendor EDI",
    "career": "Supported vendor-code EDI setup, investigated ORDERS delivery, AS2 feeds, shipment notices, carton data and invoice/chargeback exceptions.",
    "projectTitle": "MP Desk · Vendor operations",
    "project": "Designed operational visibility around Vendor purchase orders, shortages and rebates, informed by hands-on experience of the underlying flows.",
    "keywords": "AS2 / ORDERS / ASN / INVOICE / AMAZON VENDOR",
    "link": "#project-mpdesk"
  },
  "platforms": {
    "title": "SYSTEMS & PLATFORMS",
    "claim": "Choose and shape technology that fits the business rather than adding another silo.",
    "careerTitle": "Pyramid · Linnworks",
    "career": "Personally evaluated and selected Linnworks to help consolidate DTC and marketplace trading workflows.",
    "projectTitle": "MFFL · Operations platform",
    "project": "Modelled league operations in a shared MySQL database linking registrations, team eligibility, fixture control and read-only public publishing.",
    "keywords": "PLATFORM EVALUATION / ARCHITECTURE / ROLE-BASED WORKFLOWS",
    "link": "#project-mffl"
  },
  "automation": {
    "title": "WORKFLOW AUTOMATION",
    "claim": "Remove repetitive steps while retaining control of the exceptions.",
    "careerTitle": "Pyramid · International order routing",
    "career": "Introduced reusable order mappings and standardised workflows so teams did less interpretation by hand.",
    "projectTitle": "MFFL · Content and results",
    "project": "Connected confirmed fixture results to live league data and an automated graphics hub for 1:1 posts and 9:16 story assets.",
    "keywords": "BUSINESS RULES / MAPPINGS / REPEATABILITY / EXCEPTIONS",
    "link": "#project-mffl"
  },
  "data": {
    "title": "DATA & REPORTING",
    "claim": "Make disconnected data useful for decisions.",
    "careerTitle": "Nemesis Now · Marketplace performance",
    "career": "Work across performance, product data, Vendor rebates, channel mix and forecasting, including the reporting gaps that affect decisions.",
    "projectTitle": "MP Desk · Product master and insights",
    "project": "Designed SKU-based product master joins, channel performance reporting and imported Vendor rebate data inside a shared operational workspace.",
    "keywords": "PRODUCT MASTER / SQL / REPORTING / VISUALISATION",
    "link": "#project-mpdesk"
  },
  "commerce": {
    "title": "ECOMMERCE & MARKETPLACES",
    "claim": "Understand the trading reality as well as the technical plumbing.",
    "careerTitle": "Pyramid · Multi-channel digital trading",
    "career": "Led digital trading activities across DTC, Amazon and wider marketplace channels, including platform selection and operational improvements.",
    "projectTitle": "MP Desk · Marketplace workspace",
    "project": "Designed around how Vendor, Seller and other channel performance needs to be compared and acted on.",
    "keywords": "AMAZON VENDOR / SELLER / DTC / B2B / MARKETPLACES",
    "link": "#project-mpdesk"
  },
  "product": {
    "title": "PRODUCT OWNERSHIP",
    "claim": "Turn a business need into a release people actually use.",
    "careerTitle": "KhooCommerce · Customer implementations",
    "career": "Worked directly with customers to diagnose requirements, coordinate changes with IT teams and support training and adoption.",
    "projectTitle": "FFN · From messy process to live app",
    "project": "Defined the journeys, coordinated the work and refined a live club application through feedback from its users.",
    "keywords": "REQUIREMENTS / PRIORITISATION / RELEASES / FEEDBACK",
    "link": "#project-ffn"
  },
  "people": {
    "title": "PEOPLE & CHANGE",
    "claim": "Get the right people involved early, not after the solution is built.",
    "careerTitle": "KhooCommerce · Client-side problem solving",
    "career": "Visited customers to understand processes, worked with their teams and translated operational problems into usable changes and training.",
    "projectTitle": "FFN & MFFL · Different users",
    "project": "Designed around the needs of players, managers, league administrators and volunteers, each with different access and priorities.",
    "keywords": "STAKEHOLDERS / TRAINING / ADOPTION / COMMUNICATION",
    "link": "#project-ffn"
  },
  "strategy": {
    "title": "COMMERCIAL STRATEGY",
    "claim": "Make change serve a measurable business objective.",
    "careerTitle": "Nemesis Now · Marketplace strategy",
    "career": "Manage marketplace partners and channel planning, balancing commercial opportunity against stock, costs, fulfilment and operational readiness.",
    "projectTitle": "MP Desk · Decisions before dashboards",
    "project": "Built views around the commercial questions that matter, from product performance to deductions and channel contribution.",
    "keywords": "CHANNEL STRATEGY / COSTS / PRIORITIES / PERFORMANCE",
    "link": "#project-mpdesk"
  },
  "technical": {
    "title": "TECHNICAL PROBLEM-SOLVING",
    "claim": "Learn what is needed, test constraints and keep working until the system behaves.",
    "careerTitle": "Pyramid · Systems troubleshooting",
    "career": "Worked across trading systems and operational workflows, coordinating platform and process changes with teams and suppliers.",
    "projectTitle": "ShieldNet · Hardware and network experiment",
    "project": "Repurposed an NVIDIA Shield into a monitoring platform, working through network connectivity, alerts and device constraints.",
    "keywords": "TROUBLESHOOTING / NETWORKS / INTEGRATION / ITERATION",
    "link": "#lab"
  }
};
// Payment workflows are a distinct, evidenced technical capability.
skillData.payments = {"title": "PAYMENT APIs & WEBHOOKS",
    "claim": "Design transactions as reliable business processes, not just payment buttons.",
    "careerTitle": "Pyramid · Digital checkout and payments",
    "career": "Improved B2B online payment journeys and worked through card and PayPal checkout issues affecting customers and the team.",
    "projectTitle": "FFN · Stripe integration",
    "project": "Delivered a unified Stripe Checkout flow with signed webhook verification, reconciliation against underlying member ledgers and source-aware allocation of payments.",
    "keywords": "STRIPE CHECKOUT / WEBHOOK SIGNATURES / EVENT RECONCILIATION / LEDGERS",
    "link": "#project-ffn"
  };
const skillsMenu=document.querySelector('.skill-menu');
if(skillsMenu){
  const paymentButton=document.createElement('button');
  paymentButton.type='button';
  paymentButton.className='skill-choice';
  paymentButton.dataset.skill='payments';
  paymentButton.setAttribute('aria-pressed','false');
  paymentButton.innerHTML='<span>13</span><strong>Payments &amp; webhooks</strong><small>INTEGRATIONS</small><i aria-hidden="true">↗</i>';
  const after=skillsMenu.querySelector('[data-skill="api"]');
  if(after)after.insertAdjacentElement('afterend',paymentButton);else skillsMenu.appendChild(paymentButton);
}
document.querySelectorAll('.skills-intro-line span').forEach(el=>{if(el.textContent.includes('12'))el.textContent=el.textContent.replace('12','13')});
const skillButtons=[...document.querySelectorAll('.skill-choice')];
skillButtons.forEach((btn,index)=>{const number=btn.querySelector('span');if(number)number.textContent=String(index+1).padStart(2,'0');});
const skillFields={title:document.getElementById('skillTitle'),claim:document.getElementById('skillClaim'),careerTitle:document.getElementById('skillCareerTitle'),career:document.getElementById('skillCareerText'),projectTitle:document.getElementById('skillProjectTitle'),project:document.getElementById('skillProjectText'),keywords:document.getElementById('skillKeywords'),link:document.getElementById('skillLink'),count:document.getElementById('skillCount')};
skillButtons.forEach((btn,index)=>btn.addEventListener('click',()=>{
 const d=skillData[btn.dataset.skill];if(!d)return;
 skillButtons.forEach(b=>{const selected=b===btn;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
 skillFields.title.textContent=d.title;
 skillFields.claim.textContent=d.claim;
 skillFields.careerTitle.textContent=d.careerTitle;
 skillFields.career.textContent=d.career;
 skillFields.projectTitle.textContent=d.projectTitle;
 skillFields.project.textContent=d.project;
 skillFields.keywords.textContent=d.keywords;
 skillFields.link.href=d.link;
 skillFields.count.textContent=String(index+1).padStart(2,'0')+' / 13';
}));

if(skillButtons.length) skillButtons[0].click();

// A skill tag within a case study opens its supporting career/project evidence.
const skillAnchors=[...document.querySelectorAll('[data-skill-link]')];
skillAnchors.forEach(anchor=>anchor.addEventListener('click',()=>{
 const choice=document.querySelector('.skill-choice[data-skill="'+anchor.dataset.skillLink+'"]');
 if(choice)choice.click();
}));


(function addTechnicalEvidence(){
 const specs=[{"id":"project-ffn","type":"FFN / TECHNOLOGY BEHIND THE APP","heading":"THE INTEGRATIONS BEHIND THE EXPERIENCE.","desc":"A unified app is the result. The interesting part is the data, payments, interfaces and external services that make it work.","items":[["PAYMENTS · STRIPE","Stripe Checkout + verified webhooks","A single checkout for club charges. Stripe events are signature-verified, reconciled and allocated against 11-a-side, Weekly and shop ledgers.","STRIPE API","WEBHOOKS","LEDGER LOGIC","payments"],["NUTRITION · EXTERNAL DATA","Barcode scanning + Open Food Facts","Camera-based barcode reading with ZXing; packaged foods are retrieved through the Open Food Facts API, normalised and cached locally.","ZXING","REST API","LOCAL CACHE","api"],["NUTRITION · DATA MODEL","UK CoFID dataset + personal food history","A normalised nutrition dataset alongside sourced-product caching, personal serving corrections and diary entries, without overwriting shared records.","CoFID","DATA MODEL","SQL","data"],["PLATFORM · DATABASE","One linked member system","MariaDB-backed member records connect 11-a-side, Weekly and admin workflows, with access controls shaped around different roles.","MARIADB","ROLE-BASED ACCESS","WORKFLOWS","platforms"],["AUTOMATION · INSIGHT","Tracking data into usable outputs","Weight, attendance and football data support progress dashboards and generated club graphics — less copying between spreadsheets.","REPORTING","VISUALISATION","AUTOMATION","automation"]]},{"id":"project-mffl","type":"MFFL / LEAGUE SYSTEMS","heading":"FROM COMPLEX RULES TO CONNECTED SYSTEMS.","desc":"Underneath the public site is a database-led operations platform handling league rules, permissions, publishing and communications.","items":[["DATABASE · OPERATIONS","MySQL league data model","Clubs, team squads, registrations, fixtures and returns flow through one central record system instead of disconnected admin files.","MYSQL","RELATIONAL DATA","SYSTEM DESIGN","platforms"],["BUSINESS LOGIC · ELIGIBILITY","Rules built into workflows","Eligibility checks, player movement, cup-tie restrictions and suspensions are treated as operational rules — not manual memory tests.","RULE ENGINES","VALIDATION","EXCEPTIONS","automation"],["PUBLIC CONNECTIVITY","Administration to website feed","Approved and confirmed league information powers public fixtures, tables and statistics via a controlled read-only data flow.","DATA FEEDS","PUBLIC SITE","INTEGRATION","api"],["CONTENT AUTOMATION","Automated graphics hub","Confirmed results feed downloadable social graphics and formatted exports, including 1:1 posts and 9:16 story formats.","GENERATED PNG","TEMPLATES","AUTOMATION","automation"]]},{"id":"project-mpdesk","type":"MP DESK / COMMERCIAL SYSTEMS","heading":"COMMERCIAL KNOW-HOW, BUILT INTO DATA PRODUCTS.","desc":"A connected marketplace workspace shaped around operational decisions, with public-safe descriptions of the systems thinking involved.","items":[["DATA · PRODUCT MODEL","SKU-linked product master","Multiple catalogue and stock sources are matched by SKU so product information can be searched, compared and reused across workflows.","DATA MAPPING","SKU MATCHING","PRODUCT MASTER","data"],["REPORTING · COMMERCIAL","Cross-channel performance views","Channel, product and unit-level information is modelled into dashboards that answer real commercial questions.","METRICS","SQL","VISUALISATION","strategy"],["FINANCE · OPERATIONS","Vendor rebates and deductions","Imported rebate records support category analysis, prior-year comparison and line-level examination of deductions.","DATA IMPORTS","RECONCILIATION","ANALYSIS","data"],["WORKFLOWS · UI/UX","Warehouse returns capture","Barcode-driven receipts, damage photos, exceptions and status changes are designed around how the warehouse actually works.","BARCODES","IMAGE CAPTURE","PROCESS DESIGN","ux"]]}];
 const escapeText=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
 for(const spec of specs){
  const caseEl=document.getElementById(spec.id);
  if(!caseEl||caseEl.querySelector('.technical-build'))continue;
  const section=document.createElement('section');
  section.className='technical-build';
  section.setAttribute('aria-label',spec.type);
  section.innerHTML='<div class="tech-head"><div><p class="tech-eyebrow">'+escapeText(spec.type)+'</p><h4>'+escapeText(spec.heading)+'</h4></div><p>'+escapeText(spec.desc)+'</p></div>'+
   '<div class="tech-grid">'+spec.items.map((item,index)=>
      '<article class="tech-item"><div class="tech-item-top"><span>'+escapeText(String(index+1).padStart(2,'0'))+'</span><small>'+escapeText(item[0])+'</small></div>'+
      '<h5>'+escapeText(item[1])+'</h5><p>'+escapeText(item[2])+'</p>'+
      '<div class="tech-item-bottom">'+item.slice(3,6).map(tag=>'<span>'+escapeText(tag)+'</span>').join('')+'</div>'+
      '<a href="#skills" data-evidence-skill="'+escapeText(item[6])+'">See supporting skills ↗</a></article>'
   ).join('')+'</div>';
  caseEl.appendChild(section);
 }
 document.querySelectorAll('[data-evidence-skill]').forEach(link=>link.addEventListener('click',()=>{
  const btn=document.querySelector('.skill-choice[data-skill="'+link.dataset.evidenceSkill+'"]');
  if(btn)btn.click();
 }));
})();

// MFFL: auto-advance inside the desktop frame while in view. Manual controls always take priority.
(function animateMfflShowcase(){
 const gallery=document.querySelector('[data-gallery="mffl"]');
 if(!gallery || !('IntersectionObserver' in window))return;
 const buttons=[...gallery.querySelectorAll('.thumbs button')];
 if(buttons.length<2)return;
 let visible=false,paused=false,lastManual=0;
 const io=new IntersectionObserver(es=>{visible=es.some(e=>e.isIntersecting);},{threshold:.3});
 io.observe(gallery);
 gallery.addEventListener('mouseenter',()=>paused=true);
 gallery.addEventListener('mouseleave',()=>paused=false);
 gallery.addEventListener('focusin',()=>paused=true);
 gallery.addEventListener('focusout',()=>paused=false);
 buttons.forEach(b=>b.addEventListener('click',()=>lastManual=Date.now()));
 if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 window.setInterval(()=>{
  if(!visible||paused||document.hidden||Date.now()-lastManual<12000)return;
  const active=buttons.findIndex(b=>b.classList.contains('active'));
  const next=buttons[(active+1)%buttons.length];
  next.click();
  lastManual=0; // automated navigation does not start the manual override pause
 },5200);
})();


/* V9 — two intentionally art-directed showcase systems, not pasted screenshots. */
(function rebuildShowcases(){
 const htmlEscape=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
 const mffl=document.getElementById('project-mffl');
 if(mffl && !mffl.dataset.rebuilt){
  mffl.dataset.rebuilt='true';
  const original=mffl.querySelector('[data-gallery="mffl"]');
  const entries=[...original.querySelectorAll('.thumbs button')].map((button,i)=>({
    image:button.dataset.image,
    title:['League control centre','Match control','Graphics hub','Public website'][i]||button.textContent.trim(),
    description:[
      'A single view of teams, registrations, fixtures and league operations.',
      'Confirmed fixtures, returns and match results in a controlled workflow.',
      'Results and competition data turned into ready-to-publish social assets.',
      'Public league content powered by the same central data source.'
    ][i]||'',
    alt:button.dataset.alt
  }));
  // Every frame has the same 2048×1008 canvas, fixed UI scale and crop.
  const seamlessScreens=[
    'assets/mffl-overview-seamless.webp',
    'assets/mffl-matches-seamless.webp',
    'assets/mffl-graphics-seamless.webp',
    'assets/mffl-website-seamless.webp'
  ];
  entries.forEach((entry,i)=>{if(seamlessScreens[i])entry.image=seamlessScreens[i]});
  entries.forEach(entry=>{const preloaded=new Image();preloaded.src=entry.image});
  const tech=mffl.querySelector('.technical-build');
  const summary=mffl.querySelector('.case-summary');
  summary.innerHTML=`<div class="studio-overline"><b>02 / MFFL PORTAL</b><span>LEAGUE MANAGEMENT / DATA / PUBLISHING</span></div>
   <div class="studio-title-grid"><div><h3>THE LEAGUE.<br><em>UNDER CONTROL.</em></h3><p class="studio-description">One connected platform built around the people who run and play in the league — from player registration and eligibility to match control, public data and social publishing.</p></div>
   <div class="studio-number"><span>ONE SOURCE OF TRUTH</span><strong>ADMIN → PITCH → PUBLIC</strong><p>League operations and content, working from the same records.</p></div></div>
   <div class="studio-story"><div><b>THE CHALLENGE</b><p>Different teams, competitions and rules — too many manual checks and disconnected workflows.</p></div><div><b>THE RESPONSE</b><p>Model the rules in the system, give each user the right controls and let approved data power the outputs.</p></div><div><b>WHAT I DID</b><p>Mapped operational requirements, designed workflows and interfaces, and connected the data to the public website and graphics hub.</p></div></div>`;
  const gallery=document.createElement('div');
  gallery.className='studio-gallery studio-gallery-mffl';
  gallery.setAttribute('aria-label','MFFL product walkthrough');
  gallery.innerHTML=`<div class="studio-gallery-top"><span><i class="live-dot"></i> PRODUCT WALKTHROUGH</span><span>04 CONNECTED EXPERIENCES</span></div>
   <div class="studio-laptop"><div class="studio-screen"><img src="${entries[0]?.image||''}" alt="${htmlEscape(entries[0]?.alt||'MFFL platform')}"></div><div class="studio-screen-foot"><strong class="studio-screen-title">01 / ${entries[0]?.title.toUpperCase()||'OVERVIEW'}</strong><span>REAL MFFL INTERFACE · DEMO DETAILS</span></div></div><div class="studio-laptop-base"><span></span></div>
   <div class="studio-controls" role="group" aria-label="Choose an MFFL screen">${entries.map((e,i)=>`<button type="button" aria-pressed="${i===0}" class="studio-tab ${i===0?'active':''}" data-showcase-index="${i}"><small>0${i+1}</small><span>${htmlEscape(e.title)}</span></button>`).join('')}</div>
   <p class="studio-screen-description" aria-live="polite">${htmlEscape(entries[0]?.description||'')}</p>`;
  original.replaceWith(gallery);
  const image=gallery.querySelector('.studio-screen img'),title=gallery.querySelector('.studio-screen-title'),desc=gallery.querySelector('.studio-screen-description');
  const tabs=[...gallery.querySelectorAll('[data-showcase-index]')];
  let index=0,visible=false,userHoldUntil=0;
  function select(i,user=false){
   if(!entries[i])return;
   index=i;
   // Keep the laptop shell fixed while each identically sized screen fades in.
   const next=entries[i];
   image.classList.add('changing');
   window.setTimeout(()=>{image.src=next.image;image.alt=next.alt||next.title;image.classList.remove('changing');},110);
   title.textContent='0'+(i+1)+' / '+next.title.toUpperCase();
   desc.textContent=next.description;
   tabs.forEach((b,j)=>{b.classList.toggle('active',i===j);b.setAttribute('aria-pressed',String(i===j));});
   if(user)userHoldUntil=Date.now()+18000;
  }
  tabs.forEach((b,i)=>b.addEventListener('click',()=>select(i,true)));
  if('IntersectionObserver' in window){new IntersectionObserver(es=>{visible=es.some(e=>e.isIntersecting)},{threshold:.25}).observe(gallery)}else visible=true;
  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduce){window.setInterval(()=>{if(visible&&!document.hidden&&Date.now()>userHoldUntil&&!gallery.matches(':hover')&&!gallery.matches(':focus-within'))select((index+1)%entries.length);},6500)}
  if(tech)mffl.appendChild(tech);
 }
 const mpdesk=document.getElementById('project-mpdesk');
 if(mpdesk && !mpdesk.dataset.rebuilt){
  mpdesk.dataset.rebuilt='true';
  const summary=mpdesk.querySelector('.case-summary');
  const oldGallery=mpdesk.querySelector('.screen-gallery');
  const tech=mpdesk.querySelector('.technical-build');
  summary.innerHTML=`<div class="studio-overline"><b>03 / MP DESK</b><span>MARKETPLACE SYSTEMS / DATA / DECISION SUPPORT</span></div>
    <div class="studio-title-grid"><div><h3>COMPLEX DATA.<br><em>CLEAR DECISIONS.</em></h3><p class="studio-description">A purpose-built workspace designed around the real demands of marketplace management — connecting product data, performance and operational workflows instead of making people chase spreadsheets.</p></div>
    <div class="studio-number"><span>COMMERCIAL SYSTEMS</span><strong>PRODUCT → CHANNEL → ACTION</strong><p>Good data is only useful when it helps somebody decide what to do next.</p></div></div>
    <div class="studio-story"><div><b>THE CHALLENGE</b><p>Catalogue information, channel performance and financial deductions spread across multiple sources.</p></div><div><b>THE RESPONSE</b><p>Bring those sources into usable views, with clear business logic and consistent data structures.</p></div><div><b>WHAT I DID</b><p>Defined the product and reporting models, designed the workflows and created a coherent operational UI.</p></div></div>`;
  const gallery=document.createElement('div');gallery.className='studio-gallery studio-gallery-mpdesk';gallery.setAttribute('aria-label','MP Desk representative interface demo');
  gallery.innerHTML=`<div class="studio-gallery-top"><span><i class="live-dot"></i> PLATFORM WALKTHROUGH</span><span>FICTIONAL SAMPLE DATA · NO EMPLOYER RECORDS</span></div>
   <div class="studio-workspace"><div class="studio-browser-top"><span class="studio-browser-dots"><i></i><i></i><i></i></span><span>MPDesk <b> / Marketplace workspace</b></span><small>DEMO VIEW</small></div>
     <div class="studio-app"><aside class="studio-app-sidebar"><div class="studio-app-logo">MP<span>Desk</span></div><p>WORKSPACE</p><div class="studio-app-link active">▦ &nbsp; Overview</div><div class="studio-app-link">▤ &nbsp; Products</div><div class="studio-app-link">◫ &nbsp; Performance</div><div class="studio-app-link">◇ &nbsp; Operations</div><p>DATA SOURCES</p><div class="studio-app-link">◈ &nbsp; Marketplaces</div><div class="studio-app-link">⌁ &nbsp; Imports</div></aside>
      <div class="studio-app-content"><div class="studio-app-header"><div><small>MPDesk / <span id="studio-app-breadcrumb">Products</span></small><h4 id="studio-app-title">Product Master</h4><p id="studio-app-subtitle">Multiple sources. One searchable product view.</p></div><span class="studio-demo-pill">SAMPLE DATA</span></div>
       <div id="studio-app-body" class="studio-app-body"></div>
      </div></div>
   </div></div>
   <div class="studio-controls" role="group" aria-label="Choose an MP Desk view"><button class="studio-tab active" type="button" data-mpd-view="master" aria-pressed="true"><small>01</small><span>Product master</span></button><button class="studio-tab" type="button" data-mpd-view="performance" aria-pressed="false"><small>02</small><span>Performance</span></button><button class="studio-tab" type="button" data-mpd-view="rebates" aria-pressed="false"><small>03</small><span>Vendor rebates</span></button></div>
   <p class="studio-screen-description" aria-live="polite">SKU-level product information linked across sources, presented with fictional sample data.</p>`;
  if(oldGallery)oldGallery.replaceWith(gallery);else summary.insertAdjacentElement('afterend',gallery);
  if(tech)mpdesk.appendChild(tech);
  const views={
   master:{breadcrumb:'Products',title:'Product Master',subtitle:'Multiple sources. One searchable product view.',description:'SKU-level product information linked across sources, presented with fictional sample data.',body:`<div class="studio-demo-summary"><div><small>CATALOGUE PRODUCTS</small><strong>1,248</strong><span>Reference catalogue</span></div><div><small>LIVE MARKETPLACE SKUS</small><strong>842</strong><span>Across sample channels</span></div><div><small>CONNECTED SOURCES</small><strong>03</strong><span>Joined by SKU</span></div></div><div class="studio-demo-table"><header><b>Products</b><span>Search by SKU or description</span></header><div class="studio-demo-tablehead"><span>SKU</span><span>PRODUCT</span><span>STOCK</span><span>CHANNEL</span></div><div class="studio-demo-row"><span>SKU-1024</span><b>Sample Collectible — 15 cm</b><em>In stock</em><small>Marketplace UK</small></div><div class="studio-demo-row"><span>SKU-1087</span><b>Decorative Figure — 22 cm</b><em>In stock</em><small>Marketplace US</small></div><div class="studio-demo-row"><span>SKU-1149</span><b>Seasonal Ornament — 8 cm</b><em>In stock</em><small>Retail Partner</small></div><div class="studio-demo-row"><span>SKU-1213</span><b>Miniature Gift Set — 12 cm</b><em>In stock</em><small>Marketplace UK</small></div></div>`},
   performance:{breadcrumb:'Performance',title:'Product Performance',subtitle:'Channel and product insight in one workspace.',description:'Joined-up channel analytics, SKU reporting and contribution views using fictional metrics.',body:`<div class="studio-demo-summary"><div><small>DEMO REVENUE</small><strong>£184k</strong><span>Illustrative figure</span></div><div><small>UNITS</small><strong>8,640</strong><span>Fictional sample</span></div><div><small>CHANNELS</small><strong>03</strong><span>Sample split</span></div></div><div class="studio-demo-dual"><div class="studio-chart-card"><header><b>Top products by revenue</b><span>DEMO</span></header><div class="studio-bar-label">Figurine collection <span>£32k</span></div><div class="studio-bar"><i style="width:91%"></i></div><div class="studio-bar-label">Ornament range <span>£26k</span></div><div class="studio-bar"><i style="width:74%"></i></div><div class="studio-bar-label">Gift sets <span>£19k</span></div><div class="studio-bar"><i style="width:56%"></i></div><div class="studio-bar-label">Home accessories <span>£14k</span></div><div class="studio-bar"><i style="width:39%"></i></div></div><div class="studio-chart-card"><header><b>Channel contribution</b><span>DEMO</span></header><div class="studio-donut-row"><div class="studio-donut"><span>3<br><small>channels</small></span></div><div class="studio-donut-legend"><p><i></i>Marketplace UK</p><p><i></i>Marketplace US</p><p><i></i>Retail partners</p></div></div></div></div>`},
   rebates:{breadcrumb:'Finance',title:'Vendor Rebates',subtitle:'Deduction visibility and year-on-year comparisons.',description:'Illustrative rebate categories, comparisons and deduction analysis — all data fictional.',body:`<div class="studio-demo-summary"><div><small>REBATE DOCUMENTS</small><strong>136</strong><span>Fictional records</span></div><div><small>PERIOD</small><strong>2026</strong><span>Demo reporting year</span></div><div><small>CATEGORIES</small><strong>06</strong><span>Normalised labels</span></div></div><div class="studio-demo-dual"><div class="studio-chart-card"><header><b>Monthly rebate comparison</b><span>DEMO</span></header><div class="studio-month-chart">${[25,41,32,55,40,47,64,59,44,69,50,76].map((n,i)=>`<div><span style="height:${n}%"></span><small>${'JFMAMJJASOND'[i]}</small></div>`).join('')}</div></div><div class="studio-chart-card"><header><b>Category breakdown</b><span>DEMO</span></header><div class="studio-bar-label">Marketing allowances <span>38%</span></div><div class="studio-bar"><i style="width:76%"></i></div><div class="studio-bar-label">Promotional support <span>31%</span></div><div class="studio-bar"><i style="width:62%"></i></div><div class="studio-bar-label">Damage allowances <span>18%</span></div><div class="studio-bar"><i style="width:36%"></i></div><div class="studio-bar-label">Other deductions <span>13%</span></div><div class="studio-bar"><i style="width:26%"></i></div></div></div>`}
  };
  function selectView(name){const d=views[name];if(!d)return;gallery.querySelector('#studio-app-breadcrumb').textContent=d.breadcrumb;gallery.querySelector('#studio-app-title').textContent=d.title;gallery.querySelector('#studio-app-subtitle').textContent=d.subtitle;gallery.querySelector('#studio-app-body').innerHTML=d.body;gallery.querySelector('.studio-screen-description').textContent=d.description;gallery.querySelectorAll('[data-mpd-view]').forEach(b=>{const selected=b.dataset.mpdView===name;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});}
  gallery.querySelectorAll('[data-mpd-view]').forEach(b=>b.addEventListener('click',()=>selectView(b.dataset.mpdView)));
  selectView('master');
 }
})();