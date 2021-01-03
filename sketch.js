const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var crack,crack1,crack2,crack3,crack4;

var engine, world;
var drops = [];
var rand

var maxDrops = 100;

var crackCreateFrame = 0;

function preload()
{
    crack1 = loadImage("1.png");
    crack2 = loadImage("2.png");
    crack3 = loadImage("3.png");
    crack4 = loadImage("4.png");
}

function setup()
{
    engine = Engine.create();
    world = engine.world;

    createCanvas(420,700);
    umbrella = new Umbrella(200,500)

    //creating drops
    if(frameCount % 150 === 0)
    {
        for(var i = 0;i < maxDrops; i++)
        {
            drops.push(new createDrop(random(0,400),random(0,400)));
        }
    }
}

function draw()
{
    Engine.update(engine);
    background(0);

    //creating thunder
    rand = Math.round(random(1,4))
    if(frameCount % 80 === 0)
    {
        crackCreateFrame = frameCount;
        crack = createSprite(random(10,170),random(10,30),10,10);
        switch(rand)
        {
            case 1: crack.addImage(crack1)
            break;
            case 2: crack.addImage(crack2)
            break;
            case 3: crack.addImage(crack3)
            break;
            case 4: crack.addImage(crack4)
            break;
            default: break;
        }
        crack.scale = random(0.3,0.6)
    }

    if(crackCreateFrame + 10 === frameCount && crack)
    {
        crack.destroy();
    }

    umbrella.display();

    //displaying rain drop
    for(var i = 0; i<maxDrops; i++)
    {
        drops[i].showDrop();
        drops[i].updateY();
    }

    drawSprites();
}   
