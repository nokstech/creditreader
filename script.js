
(function(){
  const navToggle = document.querySelector('.navToggle');
  const nav = document.getElementById('nav');
  const toTop = document.getElementById('toTop');
  const form = document.getElementById('leadForm');

  function setExpanded(val){
    navToggle?.setAttribute('aria-expanded', String(val));
  }

  navToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    setExpanded(open);
  });

  // Close nav on link click (mobile)
  nav?.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      setExpanded(false);
    });
  });

  // Back to top
  window.addEventListener('scroll', () => {
    if(window.scrollY > 700) toTop.classList.add('show');
    else toTop.classList.remove('show');
  });
  toTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // Demo form submit
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<strong>Message sent (demo)</strong><br/>We\'ll contact you at <b>' + (form.email.value || 'sales@creditreaderaccounting.com') + '</b>.';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4200);
    form.reset();
  });
})();



// FAQ accordion
document.querySelectorAll(".faqItem").forEach((btn) => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    // close others
    document.querySelectorAll(".faqItem").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      const p = b.nextElementSibling;
      if (p && p.classList.contains("faqPanel")) p.hidden = true;
      const icon = b.querySelector(".faqItem__i");
      if (icon) icon.textContent = "+";
    });

    // toggle this
    btn.setAttribute("aria-expanded", expanded ? "false" : "true");
    const panel = btn.nextElementSibling;
    if (panel && panel.classList.contains("faqPanel")) panel.hidden = expanded;
    const icon = btn.querySelector(".faqItem__i");
    if (icon) icon.textContent = expanded ? "+" : "–";
  });
});
