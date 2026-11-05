/* Renders collection cards and product grids from products.js, with image skeletons. */
(function () {
  var base = document.body.dataset.base || "";
  var imgRoot = base + "assets/images/";
  var money = function (n) { return SITE.currency + n.toLocaleString("en-NG"); };

  function picture(src, alt, ratio, fit, pos, priority) {
    return '<div class="img-frame skeleton" style="aspect-ratio:' + ratio + '">' +
      '<img src="' + imgRoot + src + '" alt="' + alt + '" ' + (priority ? "" : 'loading="lazy" ') + 'decoding="async" ' +
      'class="w-full h-full ' + (fit === "contain" ? "object-contain img-multiply" : "object-cover") + '" ' +
      (pos ? 'style="object-position:' + pos + '"' : "") + "></div>";
  }

  var cards = document.getElementById("collection-cards");
  if (cards) cards.innerHTML = CATEGORIES.map(function (c) {
    return '<a href="#' + c.id + '" class="block group" aria-label="View ' + c.label + ' collection">' +
      picture(c.cover, c.label + " collection", "4 / 5", c.id === "shoes" ? "contain" : "cover", "center top") +
      '<h3 class="font-serif text-2xl text-burgundy mt-4">' + c.label + "</h3>" +
      '<p class="text-sm text-cocoa/80 mt-1 leading-relaxed">' + c.blurb + "</p>" +
      '<span class="inline-block mt-3 text-xs tracking-widest uppercase border-b border-burgundy text-burgundy pb-1">View Collection</span></a>';
  }).join("");

  var host = document.getElementById("product-sections");
  if (host) host.innerHTML = CATEGORIES.map(function (c, i) {
    var cols = c.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
    return '<section id="' + c.id + '" class="scroll-mt-20 py-16 sm:py-24 ' + (i % 2 ? "bg-beige/40" : "") + '">' +
      '<div class="max-w-7xl mx-auto px-5 sm:px-8"><div class="max-w-2xl mb-10">' +
      '<h2 class="font-serif text-3xl sm:text-4xl text-burgundy tracking-wide">' + c.title + "</h2>" +
      '<div class="w-12 h-px bg-champagne my-4"></div><p class="text-cocoa/80 leading-relaxed">' + c.intro + "</p></div>" +
      '<div class="grid grid-cols-1 sm:grid-cols-2 ' + cols + ' gap-x-6 gap-y-10">' +
      c.items.map(function (p) {
        return "<article>" + picture(p.img, p.name + ": " + p.desc, c.ratio, p.fit, p.pos) +
          '<div class="pt-4"><div class="flex items-baseline justify-between gap-3">' +
          '<h3 class="font-serif text-xl text-cocoa">' + p.name + '</h3><p class="text-gold font-medium whitespace-nowrap">' + money(p.price) + "</p></div>" +
          '<p class="text-sm text-cocoa/80 mt-2 leading-relaxed min-h-[3.5rem]">' + p.desc + "</p>" +
          '<a href="' + Contact.enquiryHref(p.name, p.price) + '" target="_blank" rel="noopener" class="btn-outline block text-center mt-4">ENQUIRE ABOUT THIS ITEM</a></div></article>';
      }).join("") + "</div></div></section>";
  }).join("");

  /* Remove skeletons once images load (or fail, so nothing stays pulsing). */
  document.querySelectorAll(".img-frame img, img[data-skel]").forEach(function (img) {
    var frame = img.closest(".skeleton");
    var done = function () { if (frame) frame.classList.remove("skeleton"); };
    if (img.complete) done(); else { img.addEventListener("load", done); img.addEventListener("error", done); }
  });

  Contact.apply();
})();
