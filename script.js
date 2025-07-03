
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.createElement('button');
    toggle.textContent = '🌓';
    toggle.setAttribute('aria-label', 'Toggle dark/light mode');
    toggle.style.position = 'fixed';
    toggle.style.bottom = '20px';
    toggle.style.right = '20px';
    toggle.style.padding = '0.5rem 1rem';
    toggle.style.border = 'none';
    toggle.style.borderRadius = '8px';
    toggle.style.background = '#00bfae';
    toggle.style.color = '#181a1b';
    toggle.style.fontSize = '1.5rem';
    toggle.style.cursor = 'pointer';
    toggle.style.zIndex = '1000';
  
    document.body.appendChild(toggle);
  
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  });
  