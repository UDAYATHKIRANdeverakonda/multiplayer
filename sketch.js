var ball1;
var database,pos;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";
    var posofchild=database.ref("ball/position")
   posofchild.on("value",readop,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){

    database.ref("ball/position").set({
        x : ball1.x + x,
        y : ball1.y + y
    
    })
    
}
function readop(data)
{

pos=data.val();
ball1.x=pos.x;
ball1.y=pos.y;

}

function showerror()
{
    console.log("error");
}