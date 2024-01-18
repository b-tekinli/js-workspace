document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetLink = this.getAttribute('href');

      loadPage(targetLink);
    });
  });

  function loadPage(pageLink) {
    fetch(pageLink)
      .then(response => response.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
      })
      .catch(error => console.error(`Error landing page: ${error}`));
  };
});
