document.getElementById('test').addEventListener('click', function (ev) {
  document.getElementById('image').src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.9t3z548I_S9Nx3BFrGI55AHaHa%3Fcb%3D12%26pid%3DApi&f=1&ipt=dc1cc71db090e28e3f68942cea088dc7316b43cad363c7205d5d6a824ae14110&ipo=images'
})


const images = {
  "aksolotl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.PxUNu4CZHoLOUcs8zf2E1QHaHa%3Fpid%3DApi&f=1&ipt=d2fa94dd1fdb74bb24bbf6bf19efcf0f38120f2f16f3ec1a3ec228795f1b1298&ipo=images",
  "goryl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.9t3z548I_S9Nx3BFrGI55AHaHa%3Fcb%3D12%26pid%3DApi&f=1&ipt=dc1cc71db090e28e3f68942cea088dc7316b43cad363c7205d5d6a824ae14110&ipo=images",
  "ibis": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.1LbFow0KyfeTprim-4SURgHaHa%3Fcb%3D12%26pid%3DApi&f=1&ipt=9af0b332c5d903d9fbe4a94eb4c2fbb97eab9b8ce55b8416827c36301ec91bf8&ipo=images",
  "nosorozec": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeh4ZbXjtC4paEzVFI44EX6yUuIhrkykBAxhAbNVQ71g&s=10",
  "panda": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2ubmfhVtRI5zxTk-z88LPTzIb-sTx_LTv9huShbdMQ&s=10",
  "orangutan": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl_Sj9hx8xPEfgDEoFALrCvzKzWv2LRr5BAczBvbIDQ&s=10",
  "slon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuLm3dAGKn1-mNbSbquBx0xJp4OEzdSKEsm2wWdW45Q&s=10",
  "tygrys": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMl1zzxxxnvXWtPGGtkkJCPx1u5vZrJpMjX4woa-JGw&s=10",
  "wydra": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMrARWQTlSAKBt-eAgCtqeRH3D9NjEWJ-TIoiCMoXeQ&s=10",
  "zolw": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEWG-n8T8Y8pqIctwqJ8YMdWktKlirBAZLqdCk4b_nQ&s=10"
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
