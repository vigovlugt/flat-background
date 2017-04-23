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
var widths = [, , , , ]

var sun;

var colorSchemes;


document.onload = load();
function load() {
    layers = [document.getElementById("img0"), document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4")];
    layercons = [document.getElementById("imgcon0"), document.getElementById("imgcon1"), document.getElementById("imgcon2"), document.getElementById("imgcon3"), document.getElementById("imgcon4")];
    widths = [layers[0].getBoundingClientRect.width, layers[1].getBoundingClientRect.width, layers[2].getBoundingClientRect.width, layers[3].getBoundingClientRect.width, layers[4].getBoundingClientRect.width]
    sun = document.getElementById("sun");

    for (var i = 0; i < layers.length; i++) {
        x[i] = Math.random() * -1920;
        layers[i].setAttribute("d", svgpathd);
    }

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

    loadColor(0);

    setInterval(update, 1000 / 30);
}


function update() {
    for (var i = 0; i < layers.length; i++) {
        x[i] -= xSpeed[i] * 5;

        if (x[i] <= -1920) {
            x[i] = 0;
        }
        layercons[i].setAttribute("x", x[i]);
    }

    for (var i = layers.length; i >= 0; i--) {

    }
}

function loadColor(index) {

    for (var i = 0; i < colorSchemes[index].colors.length; i++) {
            if(i<5){
                layers[i].setAttribute("fill", colorSchemes[index].colors[i]);
                
            }else if(i == 5){
                sun.setAttribute("fill", colorSchemes[index].colors[i]);
                console.log(i);
            }
    }

}