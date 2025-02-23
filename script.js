document.addEventListener('DOMContentLoaded', function() {
  const settingsIcon = document.getElementById('settingsIcon');
  const editIcon = document.getElementById('editIcon');
  const lockButton = document.getElementById('lockButton');
  const githubButton = document.getElementById('githubButton');
  const supportButton = document.getElementById('supportButton');
  const aboutButton = document.getElementById('aboutButton');
  const sidebar = document.getElementById('sidebar');
  const backButton = document.getElementById('backButton'); // Changed to backButton

  // Toggle sidebar visibility
  settingsIcon.addEventListener('click', function() {
    sidebar.classList.toggle('show');
  });

  // Hide sidebar when clicking outside of it
  document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !settingsIcon.contains(event.target)) {
      sidebar.classList.remove('show');
    }
  });

  // Event listeners for buttons
  editIcon.addEventListener('click', function() {
    alert('Add code feature coming soon!');
  });

  lockButton.addEventListener('click', function() {
    alert('Lock feature coming soon!');
  });

  githubButton.addEventListener('click', function() {
    window.open('https://github.com/The-Real-Rylave/pro-auth', '_blank'); // Open GitHub link in new tab
  });

  supportButton.addEventListener('click', function() {
    window.open('https://dsc.gg/rylave', '_blank'); // Open support link in new tab
  });

  // Event listener for back button
  backButton.addEventListener('click', function() { // Changed to backButton
    sidebar.classList.remove('show');
  });

  // Link About button to specified URL
  aboutButton.addEventListener('click', function() {
    window.open('https://pro-auth.static.domains/', '_blank');
  });
});

// Debounce function to avoid multiple rapid events
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
