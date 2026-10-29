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
    "projectTitle": "FFN · One connected experience",
    "project": "Brought availability, payments and statistics into a unified club workflow instead of several manual processes.",
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
    "projectTitle": "MFFL · Connected website",
    "project": "Used a shared data source and read-only public feed to connect league administration to public fixtures, results and statistics.",
    "keywords": "REST / DATA FLOWS / MAPPING / CONNECTOR REQUIREMENTS",
    "link": "#project-mffl"
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
    "project": "Connected registrations, squad eligibility, fixture control and public publishing within a consistent portal.",
    "keywords": "PLATFORM EVALUATION / ARCHITECTURE / ROLE-BASED WORKFLOWS",
    "link": "#project-mffl"
  },
  "automation": {
    "title": "WORKFLOW AUTOMATION",
    "claim": "Remove repetitive steps while retaining control of the exceptions.",
    "careerTitle": "Pyramid · International order routing",
    "career": "Introduced reusable order mappings and standardised workflows so teams did less interpretation by hand.",
    "projectTitle": "MFFL · Content and results",
    "project": "Linked confirmed results to league data and automated graphics output instead of recreating assets manually.",
    "keywords": "BUSINESS RULES / MAPPINGS / REPEATABILITY / EXCEPTIONS",
    "link": "#project-mffl"
  },
  "data": {
    "title": "DATA & REPORTING",
    "claim": "Make disconnected data useful for decisions.",
    "careerTitle": "Nemesis Now · Marketplace performance",
    "career": "Work across performance, product data, Vendor rebates, channel mix and forecasting, including the reporting gaps that affect decisions.",
    "projectTitle": "MP Desk · Product master and insights",
    "project": "Joined product reference data, marketplace performance and financial views into a consistent workspace.",
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
 skillFields.count.textContent=String(index+1).padStart(2,'0')+' / 12';
}));

if(skillButtons.length) skillButtons[0].click();

// A skill tag within a case study opens its supporting career/project evidence.
const skillAnchors=[...document.querySelectorAll('[data-skill-link]')];
skillAnchors.forEach(anchor=>anchor.addEventListener('click',()=>{
 const choice=document.querySelector('.skill-choice[data-skill="'+anchor.dataset.skillLink+'"]');
 if(choice)choice.click();
}));
