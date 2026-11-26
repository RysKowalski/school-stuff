const images = [
  "./gallery/1.webp",
  "./gallery/2.webp",
  "./gallery/3.webp",
  "./gallery/4.svg",
  "./gallery/5.webp"
]

const descriptions = [
  "desc1", "desc2", "desc3", "desc4", "desc5"
]

function zmien(x) {
  document.getElementById("pic").src = images[x - 1]
  document.getElementById("description").innerHTML = descriptions[x - 1]
}
