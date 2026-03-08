// ═══════════════════════════════════
//  SERVICE POPUP
// ═══════════════════════════════════

function openPopup(serviceName) {
  const popup = document.getElementById("servicePopup");
  const title = document.getElementById("popupTitle");
  popup.style.display = "flex";
  title.innerText = serviceName;
}

document.querySelector(".close-popup").addEventListener("click", function () {
  document.getElementById("servicePopup").style.display = "none";
});

window.addEventListener("click", function (e) {
  const popup = document.getElementById("servicePopup");
  if (e.target === popup) popup.style.display = "none";
});

// Wire up every service tile
document.querySelectorAll(".service-item").forEach(function (item) {
  item.addEventListener("click", function () {
    openPopup(item.querySelector("p").innerText);
  });
});


// ═══════════════════════════════════
//  LOCATION PICKER
// ═══════════════════════════════════

const locationPicker   = document.getElementById("locationPicker");
const locationDropdown = document.getElementById("locationDropdown");
const locationSearch   = document.getElementById("locationSearch");
const locationList     = document.getElementById("locationList");

const allCities = [
  "Ludhiana, Punjab", "Chandigarh", "Amritsar",
  "Delhi", "Mumbai", "Bangalore"
];

// Toggle dropdown on picker click
locationPicker.addEventListener("click", function (e) {
  e.stopPropagation();
  locationDropdown.classList.toggle("open");
  profileDropdown.classList.remove("open");
  if (locationDropdown.classList.contains("open")) locationSearch.focus();
});

// Live search filter
locationSearch.addEventListener("input", function () {
  const val = this.value.toLowerCase();
  locationList.innerHTML = allCities
    .filter(c => c.toLowerCase().includes(val))
    .map(c => `<li onclick="setLocation('${c}')">${c}</li>`)
    .join("");
});

// Set chosen city
function setLocation(city) {
  document.getElementById("locationText").innerText = city;
  locationDropdown.classList.remove("open");
}


// ═══════════════════════════════════
//  PROFILE DROPDOWN
// ═══════════════════════════════════

const profileBtn      = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");

profileBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  profileDropdown.classList.toggle("open");
  locationDropdown.classList.remove("open");
});

function goTo(page) {
  profileDropdown.classList.remove("open");
  if (page === "signout") {
    alert("You have been signed out!");
  } else {
    alert("Going to: " + page); // swap with real routing later
  }
}


// ═══════════════════════════════════
//  CLOSE DROPDOWNS ON OUTSIDE CLICK
// ═══════════════════════════════════

document.addEventListener("click", function (e) {
  if (!locationPicker.contains(e.target))
    locationDropdown.classList.remove("open");
  if (!document.getElementById("profileWrapper").contains(e.target))
    profileDropdown.classList.remove("open");
});


// ═══════════════════════════════════
//  THEME TOGGLE  (dark / light)
// ═══════════════════════════════════

document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  this.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});