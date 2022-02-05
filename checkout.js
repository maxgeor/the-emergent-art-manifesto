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

document.querySelector('#connect-wallet-btn').addEventListener('click', () => {
  setTimeout(() => {
    document.querySelector('#connect-wallet-card').style.display = 'none';
    document.querySelector('#successful-connect-wallet-card').style.display = 'flex';
    document.querySelector('.checkout-card-overlay').style.display = 'none';
  }, 500);
});

document.querySelector('#pay-fee-btn').addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = "https://manifesto-omega.vercel.app/success.html";
  }, 500);
});
