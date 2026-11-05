/* LUXE BY NAZEEFAH: site settings and product data.
   Edit this file to change contact details, prices, names and photographs. */
window.SITE = {
  brand: "Luxe by Nazeefah",
  phoneDisplay: "08130903110",
  phoneIntl: "2348130903110",          // WhatsApp format: country code + number, no plus sign
  location: "Gombe, Nigeria",
  instagramName: "zeefarhs clothing brand",
  instagramUrl: "https://www.instagram.com/", // REPLACE with the exact profile link
  currency: "\u20A6"
};

/* fit: "cover" fills the frame (crops edges), "contain" shows the whole photo.
   pos: focus point for cover crops. img paths are relative to assets/images/ */
window.CATEGORIES = [
  { id: "abayas", label: "Abayas", title: "THE ABAYA COLLECTION", ratio: "3 / 4",
    blurb: "Flowing open abayas in lace, crystal and fine trims.",
    intro: "Modest silhouettes finished with refined detail, made for everyday grace and special occasions.",
    cover: "abayas/abaya-2.webp",
    items: [
      { name: "Abaya 1", price: 75000, img: "abayas/abaya-1.webp", fit: "contain", desc: "Blush open abaya in embroidered floral lace over a soft satin inner." },
      { name: "Abaya 2", price: 60000, img: "abayas/abaya-2.webp", fit: "cover", pos: "center top", desc: "Deep burgundy abaya with tonal floral texture and wide, graceful sleeves." },
      { name: "Abaya 3", price: 55000, img: "abayas/abaya-3.webp", fit: "contain", desc: "Black sheer abaya with fine crystal scatter and a clean satin inner." },
      { name: "Abaya 4", price: 35000, img: "abayas/abaya-4.webp", fit: "cover", pos: "center top", desc: "Soft grey abaya edged with delicate lace trim along the front and cuffs." }
    ] },
  { id: "adire", label: "Adire", title: "THE ADIRE COLLECTION", ratio: "3 / 4",
    blurb: "Hand dyed Adire outfits with bold, traditional pattern.",
    intro: "Adire-inspired outfits that celebrate Nigerian textile heritage in generous, comfortable cuts.",
    cover: "adire/adire-2.webp",
    items: [
      { name: "Adire Outfit 1", price: 60000, img: "adire/adire-1.webp", fit: "cover", pos: "center top", desc: "Relaxed kaftan in burnt orange and teal batik with a bold yellow yoke." },
      { name: "Adire Outfit 2", price: 45000, img: "adire/adire-2.webp", fit: "cover", pos: "center top", desc: "Blue tie dye kaftan with cream detail and sheer organza sleeves." },
      { name: "Adire Outfit 3", price: 30000, img: "adire/adire-3.webp", fit: "cover", pos: "center top", desc: "Ruched bodice with tie straps and a gathered indigo Adire skirt." }
    ] },
  { id: "shoes", label: "Shoes", title: "OUR FOOTWEAR COLLECTION", ratio: "5 / 4",
    blurb: "Considered footwear from statement heels to flat slides.",
    intro: "Footwear chosen to complete an outfit, from an evening heel to an easy everyday slide.",
    cover: "shoes/shoe-1.webp",
    items: [
      { name: "First Shoe", price: 105000, img: "shoes/shoe-1.webp", fit: "contain", desc: "Burgundy satin heeled mule with a crystal embellished mesh strap." },
      { name: "Second Shoe", price: 60000, img: "shoes/shoe-2.webp", fit: "contain", desc: "Flat slide in woven raffia with floral detail and a tan sole." },
      { name: "Third Shoe", price: 30000, img: "shoes/shoe-3.webp", fit: "contain", desc: "Burgundy suede flat slide with a soft sculpted bow." }
    ] },
  { id: "bags", label: "Bags", title: "OUR BAG COLLECTION", ratio: "1 / 1",
    blurb: "Structured handbags in leather and refined finishes.",
    intro: "Handbags in classic shapes and neutral tones that pair with every collection.",
    cover: "bags/bag-3.webp",
    items: [
      { name: "Bag 1", price: 45000, img: "bags/bag-3.webp", fit: "cover", desc: "Taupe structured handbag with gold toned clasps and a rolled top handle." },
      { name: "Bag 2", price: 30000, img: "bags/bag-1.webp", fit: "cover", desc: "Mustard textured handbag with silver clasp and a printed silk twilly." },
      { name: "Bag 3", price: 25000, img: "bags/bag-2.webp", fit: "cover", desc: "Black handbag pair in two sizes with gold detail and a removable strap." },
      { name: "Bag 4", price: 15000, img: "bags/bag-4.webp", fit: "cover", desc: "Black tote with tan leather straps, roomy enough for daily use." }
    ] },
  { id: "accessories", label: "Accessories", title: "ACCESSORIES AND JEWELLERY", ratio: "1 / 1",
    blurb: "Jewellery sets to finish every look.",
    intro: "Statement and delicate jewellery sets for weddings, celebrations and quiet evenings.",
    cover: "accessories/jewellery-2.webp",
    items: [
      { name: "Jewellery 1", price: 80000, img: "accessories/jewellery-1.webp", fit: "cover", desc: "Gold toned floral necklace, bracelet and earring set with clear crystals." },
      { name: "Jewellery 2", price: 50000, img: "accessories/jewellery-2.webp", fit: "cover", desc: "Silver teardrop pendant and earring set in a presentation gift box." },
      { name: "Jewellery 3", price: 35000, img: "accessories/jewellery-3.webp", fit: "cover", desc: "Antique gold vine necklace and earrings with plum and lilac stones." }
    ] }
];
