window.onload = function () {
  var audio = document.getElementById("audio");

  var buttonPixies = document.getElementById("pixies");
  var buttonPerfectGirl = document.getElementById("perfectGirl");
  var buttonInMyHead = document.getElementById("inMyHead");

  var nowPlaying = document.getElementById("nowPlaying");

  buttonPixies.onclick = function () {
    audio.src = "where_is_my_mind.mp3";
    nowPlaying.innerHTML = "Pixies - Where Is My Mind?";
    audio.load();
    audio.play();
  };
  buttonPerfectGirl.onclick = function () {
    audio.src = "thePerfectGirl.mp3";
    nowPlaying.innerHTML = "Mareux - The Perfect Girl";
    audio.load();
    audio.play();
  };
  buttonInMyHead.onclick = function () {
    audio.src = "inMyHead.mp3";
    nowPlaying.innerHTML = "Bedroom - In My Head";
    audio.load();
    audio.play();
  };
  
  // start audio visualisation
  audio.onplay = function () {
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = audio.clientWidth;
    canvas.height = audio.clientHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 512;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 6;

        var r = barHeight + 25 * (i / bufferLength);
        var g = 250 * (i / bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    audio.play();
    renderFrame();
  };
};
