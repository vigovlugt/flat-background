var layers = [, , , , ]
var layercons = [, , , , ]
var colors = ["#0061ff", "#2b7bff", "#5e9aff", "#89b5ff", "#bfd7ff"]
var x = [, , , , ];
var y = [, , , , ];
var xSpeed = [
  1,
  0.5,
  0.25,
  0.125,
  0.0625
];
var width = 0;
var cloudWidth = 0;
var cloudColor = "#ffffff"
var sun;
var clouds = [,,,,];

var colorSchemes;
var themePicker;

document.onload = load();



function load() {
  for (var i = 0; i < clouds.length; i++) {
      newCloud(i);
      console.log(clouds[i]);
      clouds[i].cloud.setAttribute("d", cloudd);
      clouds[i].cloud.setAttribute("y", clouds[i].y);
      clouds[i].cloud.setAttribute("fill", cloudColor);
    }

    layers = [document.getElementById("img0"), document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4")];
    layercons = [document.getElementById("imgcon0"), document.getElementById("imgcon1"), document.getElementById("imgcon2"), document.getElementById("imgcon3"), document.getElementById("imgcon4")];
    width = layers[0].getBoundingClientRect().width;
    cloudWidth = clouds[0].cloud.getBoundingClientRect().width;

    if (width == 0) {
      width = 1920 * 2;
    }
    width = 1920 * 2;
    sun = document.getElementById("sun");

    for (var i = 0; i < layers.length; i++) {
      x[i] = Math.random() * -width;

      layers[i].setAttribute("d", mountaind);
    }

    loadWidth();
    loadColor(2);
    loadTheme();
    TweenMax.to("#imgs", 2, {
      opacity: "1"
    });
    TweenMax.from('body', 2, {
      backgroundColor: 'transparent'
    });
    TweenMax.to("#sun", 4, {
      attr: {
        cy: "50%"
      },
      delay: .5
    });

    setInterval(update, 1000 / 30);
  }



  function update() {
    for (var i = 0; i < layers.length; i++) {
      x[i] -= xSpeed[i] * 5;

      if (x[i] <= -width / 2) {
        x[i] += width / 2;
      }
      layercons[i].setAttribute("x", x[i]);
    }

    for (var i = 0; i < clouds.length; i++) {
      clouds[i].x -= clouds[i].xSpeed;
      clouds[i].cloudcon.setAttribute("x", clouds[i].x);

      if (clouds[i].x <= -cloudWidth) {
        newCloud(i);
        clouds[i].cloudcon.setAttribute("y", clouds[i].y);
      }

    }
  }

  function newCloud(i) {
    clouds[i] = {
      "xSpeed": 0.1 + 0.9 * Math.random(),
      "x": 1920 + cloudWidth + 500 * Math.random(),
      "y": 100 + 1440 * Math.random(),
      //"size": 0.5 + 0.5 * Math.random() * 5,
      "cloud": document.getElementById("cloud" + i.toString()),
      "cloudcon": document.getElementById("cloudcon" + i.toString())
    };
  }


  function loadColor(index) {

    for (var i = 0; i < colorSchemes[index].colors.length; i++) {
      if (i < 5) {
        layers[i].setAttribute("fill", colorSchemes[index].colors[i]);

      } else if (i == 5) {
        sun.setAttribute("fill", colorSchemes[index].colors[i]);
      } else if (i == 6) {
        document.body.style.backgroundColor = colorSchemes[index].colors[i];
      }
    }

  }

  function loadTheme(){
    var html;
    html += "<ul>";
    for (var i = 0; i < colorSchemes.length; i++) {
      html += "<li>";
      html += "<div class=theme style=background-color:"+ colorSchemes[i].colors[0] +";></div>"
      html += "</li>";
    }
    html += "</ul>";
    themePicker = document.getElementById("themePicker");
    themePicker.innerHTML = html;
  }

  function loadWidth() {
    var newWidth = (1080 / $(window).height()) * 1080 * 2;
    //$("#imgs").width(newWidth);
  }
