/* Renders the shared header and footer, and runs the mobile menu. */
(function () {
  var base = document.body.dataset.base || "";
  var home = base ? base + "index.html" : "";
  var links = [
    ["Home", home + "#home"], ["Collections", home + "#collections"],
    ["About Us", home + "#about"], ["Contact", home + "#contact"]
  ];
  if (!base) links = links.map(function (l) { return [l[0], l[1]]; });
  var cta = home + "#collections";
  var ico = {
    phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1z"/></svg>',
    wa: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .8c-.8-.4-1.600-1.200-2-2l.8-1-1-2z"/></svg>',
    ig: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.600"/><circle cx="16.800" cy="7.200" r=".6" fill="currentColor"/></svg>'
  };
  window.LuxeIcons = ico;
  var nav = links.map(function (l) {
    return '<a href="' + l[1] + '" class="nav-link block py-2 text-sm tracking-widest uppercase text-cocoa hover:text-burgundy">' + l[0] + "</a>";
  }).join("");
  var header = document.getElementById("site-header");
  if (header) header.innerHTML =
    '<div class="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">' +
    '<a href="' + (home || "#home") + '" class="flex items-center gap-3" aria-label="Luxe by Nazeefah home">' +
    '<img src="' + base + 'assets/images/branding/logo.webp" alt="" width="40" height="40" class="h-10 w-10 object-contain mix-blend-multiply">' +
    '<span class="font-serif font-bold text-xl sm:text-2xl tracking-wider text-burgundy">LUXE BY NAZEEFAH</span></a>' +
    '<nav class="hidden lg:flex items-center gap-8" aria-label="Main">' + nav + "</nav>" +
    '<a href="' + cta + '" class="btn-primary hidden lg:inline-block">EXPLORE COLLECTION</a>' +
    '<button id="menu-btn" class="lg:hidden p-2 text-burgundy" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">' +
    '<svg id="menu-open" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.500"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
    '<svg id="menu-close" class="hidden" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.500"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>' +
    '<div id="mobile-menu" class="hidden lg:hidden border-t border-champagne/40 bg-cream"><div class="px-5 pb-5 pt-2">' + nav +
    '<a href="' + cta + '" class="btn-primary block text-center mt-3">EXPLORE COLLECTION</a></div></div>';

  var btn = document.getElementById("menu-btn"), menu = document.getElementById("mobile-menu");
  if (btn) {
    var toggle = function (open) {
      menu.classList.toggle("hidden", !open);
      document.getElementById("menu-open").classList.toggle("hidden", open);
      document.getElementById("menu-close").classList.toggle("hidden", !open);
      btn.setAttribute("aria-expanded", open);
    };
    btn.addEventListener("click", function () { toggle(menu.classList.contains("hidden")); });
    menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { toggle(false); }); });
  }

  var footer = document.getElementById("site-footer");
  if (footer) footer.innerHTML =
    '<div class="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-4">' +
    '<div class="md:col-span-1"><p class="font-serif font-bold text-2xl tracking-wider">LUXE BY NAZEEFAH</p>' +
    '<p class="mt-4 text-sm leading-relaxed text-cream/80">Abayas, Adire outfits, shoes, bags and jewellery, carefully selected in Gombe, Nigeria.</p></div>' +
    '<div><p class="footer-h">Explore</p><ul class="space-y-2 text-sm">' +
    links.map(function (l) { return '<li><a href="' + l[1] + '" class="footer-a">' + l[0] + "</a></li>"; }).join("") + "</ul></div>" +
    '<div><p class="footer-h">Contact</p><ul class="space-y-2 text-sm">' +
    '<li><a data-link="instagram" href="#" class="footer-a inline-flex items-center gap-2">' + ico.ig + 'Instagram</a></li>' +
    '<li><a data-link="whatsapp" href="#" class="footer-a inline-flex items-center gap-2">' + ico.wa + 'WhatsApp</a></li>' +
    '<li><a data-link="phone" href="#" class="footer-a inline-flex items-center gap-2">' + ico.phone + '<span data-text="phone"></span></a></li>' +
    '<li class="text-cream/80" data-text="location"></li></ul></div>' +
    '<div><p class="footer-h">Legal</p><ul class="space-y-2 text-sm">' +
    '<li><a href="' + (base ? "" : "pages/") + 'privacy-policy.html" class="footer-a">Privacy Policy</a></li>' +
    '<li><a href="' + (base ? "" : "pages/") + 'terms.html" class="footer-a">Terms of Service</a></li></ul></div></div>' +
    '<div class="border-t border-cream/20"><p class="max-w-7xl mx-auto px-5 sm:px-8 py-5 text-xs text-cream/70">&copy; <span id="year"></span> Luxe by Nazeefah. All rights reserved.</p></div>';
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
