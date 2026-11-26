(function(){
  const LINKEDIN = "https://www.linkedin.com/in/muhammed-mansoor-c/";
  const WHATSAPP = "96598078123";
  const TOPICS = {
    cv: {
      title: "Request my CV",
      text: "Message me on LinkedIn or WhatsApp and I'll send my full CV with complete project and role details.",
      msg: "Hi Mansoor, I came across your portfolio and would like to request your CV."
    },
    training: {
      title: "Enquire about training",
      text: "Tell me about your team and goals, and I'll suggest a Power BI or Power Automate programme that fits.",
      msg: "Hi Mansoor, I saw your training page and would like to discuss Power BI / Power Automate training for our team."
    }
  };
  const ICON_LI = '<svg viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>';
  const ICON_WA = '<svg viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.49-8.41z"/></svg>';

  // contact dialog
  const dlg = document.createElement('dialog');
  dlg.innerHTML = `<button class="close" aria-label="Close">×</button>
    <div class="label" style="color:var(--accent-2)">Get in touch</div>
    <h3 id="dlgTitle"></h3><p id="dlgText"></p>
    <div class="choices">
      <a class="choice" id="dlgWa" target="_blank" rel="noopener">${ICON_WA}<span><b>WhatsApp</b><small>+965 9807 8123</small></span></a>
      <a class="choice" href="${LINKEDIN}" target="_blank" rel="noopener">${ICON_LI}<span><b>LinkedIn</b><small>Send me a message</small></span></a>
    </div>`;
  document.body.appendChild(dlg);
  dlg.querySelector('.close').onclick = () => dlg.close();
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  document.querySelectorAll('[data-contact]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault();
    const t = TOPICS[b.dataset.contact] || TOPICS.cv;
    dlg.querySelector('#dlgTitle').textContent = t.title;
    dlg.querySelector('#dlgText').textContent = t.text;
    dlg.querySelector('#dlgWa').href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.msg)}`;
    if (dlg.showModal) dlg.showModal(); else window.open(`https://wa.me/${WHATSAPP}`, '_blank');
  }));

  // theme
  const root = document.documentElement;
  try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
  const tb = document.getElementById('themeBtn');
  if (tb) tb.onclick = () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  };
  const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();

  // github projects
  const grid = document.getElementById('repos');
  if (grid) {
    const REPOS = [
      {n:"NYC Taxi Analytics Engine on Microsoft Fabric",r:"-NYC-Taxi-Analytics-Engine-on-Microsoft-Fabric",c:"eng",lang:"PySpark",d:"Medallion architecture (Bronze → Silver → Gold) with PySpark and Delta Lake on OneLake. 3.48M trips and $103M revenue analysed by zone, hour and payment type."},
      {n:"End-to-End Supply Chain Analytics for ESP",r:"End-to-End-Supply-Chain-Analytics-for-ESP-Project",c:"bi",lang:"Power BI",d:"Oracle Fusion (20 tables, ~10M rows) → Power Automate → Power BI. Spare-parts forecasting, dynamic safety stock and ageing."},
      {n:"Material Analysis: Python, SQL & Power BI",r:"Material-Analysis-uing-Python-SQL-Power-BI",c:"eng",lang:"Python",d:"SharePoint → Python → MySQL → Power BI ETL. Regex SKU parsing, deduplication and a fact/dim schema as the single source of truth."},
      {n:"API Ingestion & Word-Count Analytics",r:"API-Data-Ingestion-Content-Word-Count-Analytics-Pipeline",c:"eng",lang:"Python",d:"REST API JSON ingestion with Requests and Pandas, vectorised text feature extraction, modelled in Power BI."},
      {n:"FIFA 2026 Player Performance & Valuation",r:"FIFA-2026-Player-Performance-Valuation-Analytics",c:"ds",lang:"Python",d:"Positional profiling, per-90 efficiency, disciplinary impact on ratings and market-value trends by age and position."},
      {n:"Business 360: AtliQ Hardware",r:"Business-360---BI-Projects",c:"bi",lang:"Power BI",d:"Finance, sales, marketing and supply-chain views: net sales, gross margin, YTD/YTG and channel performance."},
      {n:"AtliQ Mart: Supply Chain OTIF",r:"Altiq-Mart-SCM-Analysis",c:"bi",lang:"Power BI",d:"Daily On-Time, In-Full and OTIF service levels against customer targets for an FMCG manufacturer."},
      {n:"AtliQ Hospitality Analytics",r:"AltiQ-Hospitallity-Project",c:"bi",lang:"Power BI",d:"Hotel revenue analysis (ADR, realisation, DURN) with gateway-scheduled refresh and a Power BI App."},
      {n:"Consumer Goods Ad-hoc Insights",r:"Consumer-Project-SQL",c:"ds",lang:"SQL",d:"SQL answers to stakeholder ad-hoc requests for AtliQ Hardware, presented as an executive deck."}
    ];
    grid.innerHTML = REPOS.map(p => `<a class="repo" data-c="${p.c}" href="https://github.com/MuhammedMansoor/${p.r}" target="_blank" rel="noopener">
      <div class="top"><span class="mono">${p.lang}</span><span aria-hidden="true">↗</span></div>
      <h4>${p.n}</h4><p>${p.d}</p><span class="go">View repository →</span></a>`).join('');
    document.querySelectorAll('.filter').forEach(b => b.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(x => x.setAttribute('aria-pressed', x === b));
      grid.querySelectorAll('.repo').forEach(r => r.hidden = !(b.dataset.f === 'all' || r.dataset.c === b.dataset.f));
    }));
  }

  // reveal + counters
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function count(el){
    const end = +el.dataset.count, small = el.querySelector('small');
    const tail = small ? small.outerHTML : (el.dataset.suffix || '');
    if (reduce) { el.innerHTML = end.toLocaleString('en-US') + tail; return; }
    const t0 = performance.now();
    (function step(t){ const k = Math.min(1,(t-t0)/1200), v = Math.round(end*(1-Math.pow(1-k,3)));
      el.innerHTML = v.toLocaleString('en-US') + tail; if (k < 1) requestAnimationFrame(step); })(t0);
  }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) {
    e.target.classList.add('in'); const c = e.target.querySelector('[data-count]'); if (c) count(c); io.unobserve(e.target); } }), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
