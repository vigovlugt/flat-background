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

var sun;
var cloud = {"xSpeed":0,"x":0,"y":0,"size":1,"cloud":"","cloudcon":""};
var clouds = [,,,,]

var colorSchemes;


document.onload = load();
function load() {
    /*for (var i = 0; i < clouds.length; i++) {
        clouds[i] = new cloud{
            xSpeed[Math.floor(Math.random()*5),
            2500+Math.random()*500,
            540 + 540 * Math.random(),
            1,
            "cloud" + i.toString(),
            "cloudcon" + i.toString()
        };*/

    layers = [document.getElementById("img0"), document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4")];
    layercons = [document.getElementById("imgcon0"), document.getElementById("imgcon1"), document.getElementById("imgcon2"), document.getElementById("imgcon3"), document.getElementById("imgcon4")];
    width = layers[0].getBoundingClientRect().width;


    if(width == 0){
        width= 1920*2;
    }
    width= 1920*2;
    sun = document.getElementById("sun");

    for (var i = 0; i < layers.length; i++) {
        x[i] = Math.random() * -width;

        layers[i].setAttribute("d", mountaind);
    }

    loadWidth();
    loadColor(2);

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

        if (x[i] <= -width/2) {
            x[i] += width/2;
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
            }else if(i == 6){
                document.body.style.backgroundColor = colorSchemes[index].colors[i]; 
            }
    }

}

function loadWidth(){
    var newWidth = (1080/$( window ).height()) * 1080 * 2;
    //$("#imgs").width(newWidth);
    console.log(newWidth);
}