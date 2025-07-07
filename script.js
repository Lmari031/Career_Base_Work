// Add star shooting animation to the Free Trial button
// Add confetti animation to the Subscribe form
document.addEventListener('DOMContentLoaded', function() {
  // Free Trial button stars
  const freeTrialBtn = document.querySelector('.free-trial-btn');
  if (freeTrialBtn) {
    freeTrialBtn.style.position = 'relative';
    freeTrialBtn.addEventListener('click', function(e) {
      for (let i = 0; i < 5; i++) {
        shootStar(freeTrialBtn, i * 60);
      }
    });
  }

  function shootStar(btn, angleOffset) {
    const star = document.createElement('div');
    star.className = 'star';
    // Random angle and distance for each star
    const angle = (Math.random() * 120 - 60) + angleOffset;
    const distance = 80 + Math.random() * 40;
    const tx = Math.cos(angle * Math.PI / 180) * distance;
    const ty = Math.sin(angle * Math.PI / 180) * distance;
    star.style.setProperty('--tx', `${tx}px`);
    star.style.setProperty('--ty', `${ty}px`);
    // Position star at the center of the button
    const rect = btn.getBoundingClientRect();
    star.style.left = (rect.width / 2 - 6) + 'px';
    star.style.top = (rect.height / 2 - 6) + 'px';
    btn.appendChild(star);
    setTimeout(() => {
      star.remove();
    }, 800);
  }

  // Subscribe button and form
  const subscribeBtn = document.getElementById('subscribeBtn');
  const subscribeForm = document.getElementById('subscribeForm');
  if (subscribeBtn && subscribeForm) {
    subscribeBtn.addEventListener('click', function(e) {
      subscribeForm.style.display = 'flex';
    });

    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      subscribeForm.style.display = 'none';
      showConfetti(subscribeForm.parentElement);
    });
    // Optional: close form when clicking outside
    document.addEventListener('mousedown', function(e) {
      if (subscribeForm.style.display === 'flex' && !subscribeForm.contains(e.target) && e.target !== subscribeBtn) {
        subscribeForm.style.display = 'none';
      }
    });
  }

  // Confetti animation
  // Make confetti much louder and happier!
  // Confetti animation: now shoots like stars, but with more colors and much faster!
  function showConfetti(container) {
    // Center confetti in the middle of the screen for a party celebration
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    // Even more confetti for a huge celebration!
    for (let i = 0; i < 180; i++) {
      shootConfetti(container, i * 2, centerX, centerY);
    }
  }

  function shootConfetti(container, angleOffset, centerX, centerY) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    // Many bright colors
    const colors = ['#FFD700', '#FF69B4', '#00CFFF', '#7CFC00', '#FF6347', '#FFF', '#FF4500', '#40E0D0', '#8A2BE2', '#FFB347', '#FF00FF', '#00FFEA', '#FFB6C1', '#00FF00', '#FFA500'];
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    // Random angle and distance for each confetti
    const angle = (Math.random() * 360) + angleOffset;
    // Make the explosion reach the entire screen
    const maxDist = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) / 2 + 80;
    const distance = maxDist * (0.7 + Math.random() * 0.3);
    const tx = Math.cos(angle * Math.PI / 180) * distance;
    const ty = Math.sin(angle * Math.PI / 180) * distance;
    confetti.style.setProperty('--tx', `${tx}px`);
    confetti.style.setProperty('--ty', `${ty}px`);
    // Position confetti at the center of the screen
    confetti.style.left = `${centerX - 7}px`;
    confetti.style.top = `${centerY - 7}px`;
    // Make confetti smaller for a more realistic effect
    confetti.style.width = (8 + Math.random() * 8) + 'px';
    confetti.style.height = (8 + Math.random() * 8) + 'px';
    confetti.style.borderRadius = (2 + Math.random() * 6) + 'px';
    confetti.style.boxShadow = `0 0 8px 1px ${colors[Math.floor(Math.random() * colors.length)]}`;
    confetti.style.position = 'fixed';
    confetti.style.opacity = 0.95;
    confetti.style.pointerEvents = 'none';
    confetti.style.transition = 'none';
    document.body.appendChild(confetti);
    setTimeout(() => {
      confetti.remove();
    }, 900);
  }
});
//comment added for commit