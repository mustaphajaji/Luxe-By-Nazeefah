# LUXE BY NAZEEFAH

A static fashion portfolio and product showcase website. HTML5, Tailwind CSS (CDN), vanilla JavaScript, custom SVG icons. No backend, database, cart or payments.

## Open the website
Double click `index.html`, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000. An internet connection is needed for Tailwind CSS and Google Fonts.

## Update contact details
Open `js/products.js` and edit the `SITE` block: `phoneDisplay`, `phoneIntl` (country code, no plus sign, for WhatsApp, for example 2348130903110), `location`, `instagramName` and `instagramUrl`.

IMPORTANT: `instagramUrl` is a placeholder (https://www.instagram.com/). Replace it with the exact profile link, for example https://www.instagram.com/yourhandle/

## Update prices, names and descriptions
In `js/products.js`, edit the `items` of each category: `name`, `price` (number, no commas) and `desc`. The WhatsApp message updates automatically from these values.

## Replace photographs
Put the new image in the matching folder under `assets/images/` (`abayas`, `adire`, `shoes`, `bags`, `accessories`, `founder`, `hero`, `branding`) and update its `img` path in `js/products.js`. Use WebP or JPG, about 900 px on the long side. `fit: "cover"` fills the frame, `fit: "contain"` shows the whole photo. The founder photo is `assets/images/founder/founder.jpg`, the hero photo is `assets/images/hero/hero.jpg`.

## Structure
`index.html` (all sections), `pages/` (about, contact, privacy-policy, terms), `js/` (products, contact, navigation, app), `css/styles.css`, `assets/`.
