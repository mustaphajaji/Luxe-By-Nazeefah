/* Builds every phone, WhatsApp and Instagram link from window.SITE. */
window.Contact = {
  phoneHref() { return "tel:" + SITE.phoneDisplay; },
  waHref(message) {
    return "https://wa.me/" + SITE.phoneIntl + (message ? "?text=" + encodeURIComponent(message) : "");
  },
  enquiryHref(name, price) {
    var p = SITE.currency + price.toLocaleString("en-NG");
    return this.waHref("Hello Luxe by Nazeefah, I am interested in " + name + " priced at " + p + ". Please provide more information.");
  },
  apply(root) {
    root = root || document;
    root.querySelectorAll('[data-link="phone"]').forEach(function (a) { a.href = Contact.phoneHref(); });
    root.querySelectorAll('[data-link="whatsapp"]').forEach(function (a) {
      a.href = Contact.waHref("Hello Luxe by Nazeefah, I would like to make an enquiry."); a.target = "_blank"; a.rel = "noopener";
    });
    root.querySelectorAll('[data-link="instagram"]').forEach(function (a) { a.href = SITE.instagramUrl; a.target = "_blank"; a.rel = "noopener"; });
    root.querySelectorAll("[data-text]").forEach(function (el) {
      var map = { phone: SITE.phoneDisplay, location: SITE.location, instagram: SITE.instagramName, brand: SITE.brand };
      if (map[el.dataset.text]) el.textContent = map[el.dataset.text];
    });
  }
};
