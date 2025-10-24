document.getElementById('test').addEventListener('click', function (ev) {
  document.getElementById('image').src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.9t3z548I_S9Nx3BFrGI55AHaHa%3Fcb%3D12%26pid%3DApi&f=1&ipt=dc1cc71db090e28e3f68942cea088dc7316b43cad363c7205d5d6a824ae14110&ipo=images'
})


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
