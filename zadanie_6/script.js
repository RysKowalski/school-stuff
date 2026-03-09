
function toggle_banner() {

  if (document.getElementById("android-banner").classList.contains("hide")) {
    document.getElementById("android-banner").classList.remove("hide")
    document.getElementById("my-banner").classList.add("hide")
  } else {
    document.getElementById("android-banner").classList.add("hide")
    document.getElementById("my-banner").classList.remove("hide")

  }
}

document.getElementById("toggle-banner").addEventListener("click", toggle_banner)
