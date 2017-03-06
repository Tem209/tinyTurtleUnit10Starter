TinyTurtle.apply(window, [undefined, 400, 400]);

function square(dragon){
forward(dragon);
right(90);
forward(dragon);
right(90);
forward(dragon);
right(90);
forward(dragon);
right(90);
forward(dragon);
}

function rectangle(rogue){
forward(rogue);
right(90);
forward(20);
right(90);
forward(rogue);
right(90);
forward(20);
right(90);

}
function house(tiny){
forward(tiny);
right(45);
forward(tiny);
right(90);
forward(tiny);
right(45);
forward(tiny);
right(90);
forward(tiny);

}
function pentagon(){
left(30);
forward(40);
right(72);
forward(40);
right(72);
forward(40);
right(72);
forward(40);
right(72);
forward(40);
}
function hexagon(){
right(-50);
forward(60);
right(50);
forward(60);
right(50);
forward(60);
right(40);
forward(60);
right(40);
forward(60);
right(50);
forward(60);
right(40);
forward(50);
right(50);
forward(80);    
}
// Type your function call below
//square(100);
//rectangle(100);
house(100);
//pentagon();
//hexagon();
stamp();