window.addEventListener('WebComponentsReady', function() {

  var progress = document.getElementById('timerprogress');

  progress.start();

  // take 2 seconds to "load"
  setTimeout(function() {
    progress.finish();
  }, 2000);

  var buttonprogress = document.getElementById('buttonprogress');

  var startbuttonprogress = document.getElementById('startprogress');
  startbuttonprogress.addEventListener("click", function(){buttonprogress.start();});

  var finishbuttonprogress = document.getElementById('finishprogress');
  finishbuttonprogress.addEventListener("click", function(){buttonprogress.finish();});
});
