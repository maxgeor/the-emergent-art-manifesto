const toggleWrappers = document.querySelectorAll('.toggle-wrapper');
const toggles = Array.from(toggleWrappers).map(el => el.querySelector('input[type="checkbox'));

toggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      const nob = toggle.closest('.toggle-wrapper').querySelector('.toggle-nob');
      const title = toggle.closest('.toggle-wrapper').querySelector('.toggle-title');
      const content = toggle.closest('.toggle-wrapper').querySelector('.toggle-content');
      if (toggle.checked === true) {
        nob.style.transform = 'rotate(90deg)' 
        title.innerHTML = 'Hide Manifesto preview' 
        content.style.display = 'block' 
      } else {
        nob.style.transform = 'rotate(0deg)' 
        title.innerHTML = 'Show Manifesto preview' 
        content.style.display = 'none' 
      }  
    });
});
