import { createIcons, ArrowRight, PersonStanding } from 'lucide';

createIcons({
  icons: {
    ArrowRight, PersonStanding
  }
});

function liveSearch() {
  // Locate the card elements
  let links = document.querySelectorAll('.linkout')
  // Locate the search input
  let search_query = document.getElementById("search").value.toLowerCase();
  console.log(search_query);
  // Loop through the cards
  for (const element of links) {
    // If the text is within the card...
    if(element.getAttribute('title').toLowerCase()
      // ...and the text matches the search query...
      .includes(search_query.toLowerCase())) {
        // ...remove the `.is-hidden` class.
        element.classList.remove("hidden");
        console.log('not hidden');
    } else {
      // Otherwise, add the class.
      element.classList.add("hidden");
      console.log('hidden');
    }
  }
}

document.getElementById("search").focus();

// A little delay
let typingTimer;        
let typeInterval = 500; // Half a second
let searchInput = document.getElementById('search');
searchInput.focus();

searchInput.addEventListener('keyup', () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(liveSearch, typeInterval);
});