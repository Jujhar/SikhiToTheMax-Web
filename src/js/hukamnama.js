'use strict';

$(function() {
  const q = getParameterByName('q');

  document.body.classList.toggle("loading");
  $.ajax({
    url: Khajana.buildApiUrl({ hukam: true }),
    dataType: "json",
    success: function(data) {
      $shabad.innerHTML = '';
      metaData(data.shabadinfo);
      renderShabad(data.gurbani);
    },
    error: showError
  });
});

function showError(error) {
  $shabad.appendChild(h('h2', { }, [
    H3('Facing some issues'),
  ]));
}

