const toggleWrappers = document.querySelectorAll('.toggle-wrapper');
const toggles = Array.from(toggleWrappers).map(el => el.querySelector('input[type="checkbox'));

toggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      const nob = toggle.closest('.toggle-wrapper').querySelector('.toggle-nob');
      const content = toggle.closest('.toggle-wrapper').querySelector('.toggle-content');
      if (toggle.checked === true) {
        nob.style.transform = 'rotate(90deg)'
        content.style.display = 'block' 
      } else {
        nob.style.transform = 'rotate(0deg)' 
        content.style.display = 'none' 
      }  
    });
});
