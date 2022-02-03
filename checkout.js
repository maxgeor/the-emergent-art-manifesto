document.querySelector('#showing-preview-checkbox').addEventListener('click', function() {
  if (document.querySelector('#showing-preview-checkbox').checked === true) {
      document.querySelector('#manifesto-preview-mobile').style.display = 'block' 
      document.querySelector('.showing-preview-toggle-nob').style.transform = 'rotate(90deg)' 
      document.querySelector('.showing-preview-toggle-text').innerHTML = 'Hide Manifesto preview' 
  } else {
      document.querySelector('#manifesto-preview-mobile').style.display = 'none';
      document.querySelector('.showing-preview-toggle-nob').style.transform = 'rotate(0deg)' 
      document.querySelector('.showing-preview-toggle-text').innerHTML = 'Show Manifesto preview' 
  }
});