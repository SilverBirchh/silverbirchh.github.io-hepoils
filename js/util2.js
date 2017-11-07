jQuery(function(a){function b(e){const f=a(e.target).closest('div'),g=f.children()[0];return g.innerHTML}function c(e){const f=decodeURIComponent(window.location.search.substring(1)),g=f.split('&');let h,j;for(j=0;j<g.length;j++)if(h=g[j].split('='),h[0]===e)return void 0===h[1]||h[1]}(function(){if(location.pathname.includes('quote')){let e=c('message'),f=c('type');a('#message').val(e),a(`#${f}`).prop('checked',!0)}})(),a('.enquire').click(function(e){const f=`I would like to enquire about a supply of ${b(e)}.`;location.href='{{ site.baseurl}}'+`quote/?message=${f}&type=oil-col`})});

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("truc");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";

  // Can change text here
    setTimeout(carousel, 9000);
}
