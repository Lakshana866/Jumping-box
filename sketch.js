var canvas;
var music, orange;
var sur1;
var sur2;
var sur3;
var sur4;
var box;
var topEdge, bottomEdge, rightEdge, leftEdge, edges;
function preload(){
    music = loadSound("music.mp3");
   }


function setup(){
    canvas = createCanvas(800,600);
edges = new Group();
    //create 4 different surfaces
     sur1 = createSprite(105, 580, 187, 20);
     sur1.shapeColor = "blue";
     sur2 = createSprite(295, 580, 187, 20);
     sur2.shapeColor = "orange";
     sur3 = createSprite(485, 580, 187, 20);
     sur3.shapeColor = "red";
     sur4 = createSprite(675, 580, 187, 20);
     sur4.shapeColor = "green";

    //create box sprite and give velocity
box = createSprite(random(10,790), 0, 20, 20);

box.setVelocity(10,10);
topEdge = createSprite(400, 0 , 800, 10);
bottomEdge = createSprite(400, 600, 800, 10);
leftEdge = createSprite(0, 400, 10, 800);
rightEdge = createSprite(800, 400, 10, 800);
edges.add(topEdge);
edges.add(bottomEdge);
edges.add(rightEdge);
edges.add(leftEdge);

}

function draw() {
    background("lightgray");
    //create edgeSprite
    if(box.isTouching(sur4)){
        box.shapeColor = "green";
        music.pause();
        box.setVelocity(0,0);
        }
    if(box.isTouching(sur3)){
        box.shapeColor = "red";
    }
    if(box.isTouching(sur2)){
        box.shapeColor = "orange";
        
    }
    if(box.isTouching(sur1)){
        box.shapeColor = "blue";
        music.play();
    }


    box.bounceOff(edges);
    box.bounceOff(sur1);
    box.bounceOff(sur2);
    box.bounceOff(sur3);
    box.bounceOff(sur4);
    



drawSprites();
    //add condition to check if box touching surface and make it box
}

