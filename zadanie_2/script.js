const images = {
  "aksolotl": "/assets/aksolotl.webp",
  "goryl": "/assets/goryl.webp",
  "ibis": "/assets/ibis.webp",
  "nosorozec": "/assets/nosorozec.webp",
  "panda": "/assets/panda.jpg",
  "orangutan": "/assets/orangutan.jpg",
  "slon": "/assets/slon.jpg",
  "tygrys": "/assets/tygrys.jpg",
  "wydra": "/assets/wydra.jpg",
  "zolw": "/assets/zolw.jpg"
}

function change_image(element) {
  document.getElementById('image').src = images[element];
}

// Attach listeners dynamically
for (const key in images) {
  const el = document.getElementById(key);
  if (el) {
    el.addEventListener('mouseover', () => change_image(key));
  }
}
