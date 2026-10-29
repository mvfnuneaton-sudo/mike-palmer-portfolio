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
