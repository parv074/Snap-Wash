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
    if (e.target === popup) {
        popup.style.display = "none";
    }
});


document.querySelectorAll(".service-item").forEach(function(item) {
    item.addEventListener("click", function() {
        const serviceName = item.querySelector("p").innerText;
        openPopup(serviceName);
    });
});
// ── LOCATION PICKER ──
const locationPicker = document.getElementById('locationPicker');
const locationDropdown = document.getElementById('locationDropdown');
const locationSearch = document.getElementById('locationSearch');
const locationList = document.getElementById('locationList');
const allCities = ['Ludhiana, Punjab','Chandigarh','Amritsar','Delhi','Mumbai','Bangalore'];

locationPicker.addEventListener('click', function(e) {
  locationDropdown.classList.toggle('open');
  profileDropdown.classList.remove('open');
  if (locationDropdown.classList.contains('open')) locationSearch.focus();
});

locationSearch.addEventListener('input', function() {
  const val = this.value.toLowerCase();
  locationList.innerHTML = allCities
    .filter(c => c.toLowerCase().includes(val))
    .map(c => `<li onclick="setLocation('${c}')">${c}</li>`)
    .join('');
});

function setLocation(city) {
  document.getElementById('locationText').innerText = city;
  locationDropdown.classList.remove('open');
}

// ── PROFILE DROPDOWN ──
const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');

profileBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  profileDropdown.classList.toggle('open');
  locationDropdown.classList.remove('open');
});

function goTo(page) {
  if (page === 'signout') {
    alert('You have been signed out!');
  } else {
    alert('Going to: ' + page); // replace with real routing later
  }
  profileDropdown.classList.remove('open');
}

// Close both dropdowns when clicking outside
document.addEventListener('click', function(e) {
  if (!locationPicker.contains(e.target)) locationDropdown.classList.remove('open');
  if (!document.getElementById('profileWrapper').contains(e.target)) profileDropdown.classList.remove('open');
});