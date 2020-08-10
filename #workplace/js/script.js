// Open the full screen search box
function openSearch() {
  document.getElementById("searchForm").style.transform = "scale(1)";
  document.querySelector("body").style.overflow = "hidden";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("searchForm").style.transform = "scale(0)";
  document.querySelector("body").style.overflow = "auto";

}