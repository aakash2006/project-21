
var bullet,wall,thick;
var speed,wieght;
function setup() {
  createCanvas(1500,400);
  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = color('white');
  thick = random(22,83)
  wall = createSprite(1200,200,thick,height/2)
  wall.shapeColor = color(80,80,80);
  speed=random(223,331);
  wieght=random(30,52);
  
}

function draw() 
{
  background('black');  
  bullet.velocityX = speed;
  if (hasCollided(bullet,wall))
    {

      bullet.velocityX = 0;
      var damage = 0.5 * wieght * speed * speed/(thick * thick * thick);

      if(damage>10)
      {
        wall.shapeColor = color(255,0,0);
      }

      if(damage<10)
      {
        wall.shapeColor = color(0,255,0)
      }
    }
  drawSprites();
}