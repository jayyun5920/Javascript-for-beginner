/// <reference path= "../../lib/p5.global-mode.d.ts"/>

function setup()
{
    createCanvas( 800, 600 );

    textSize(20);
}

function draw()
{
    background( 0 );
    
    stroke(255,0,0);
    strokeWeight(5)
    line(0, mouseY, windowWidth, mouseY);
    text( "(" + mouseX + ")", 4, mouseY - 8);

            stroke(0, 255, 0);
            strokeWeight(5);
            line(mouseX, 0, mouseX, windowHeight);
            text( "(" + mouseX + ")", mouseX + 8, 24 );
    
    
}