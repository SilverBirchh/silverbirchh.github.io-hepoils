---
---
// For an enquire click. Could use a class here but nevermind
jQuery(function($) {

  setQuoteMessageIfApplicable();

  $('.enquire')
    .click(function(event) {
      const message = `I would like to enquire about a supply of ${selectOil(event)}.`
      location.href = "{{ site.baseurl}}" + `quote/?message=${message}&type=oil-col`
    })

  function selectOil(event) {
    const parent = $(event.target).closest('div');
    const title = parent.children()[0];
    return title.innerHTML;
  }

  function getURLParameter(sParam) {
    const sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&');
    let sParameterName, i;

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
        }
      }
  }

  function setQuoteMessageIfApplicable() {
    if (location.pathname.includes('quote')) {
      let quote = getURLParameter('message');
      let type = getURLParameter('type');

      $('#message').val(quote);
      $(`#${type}`).prop('checked', true);
    }
  }
});
