// Select all links with hashes
$('.enquire')
  .click(function(event) {
    if (location.pathname === "/supply/") {
      location.href = "/quote/?type=1"
    }
  })($);
