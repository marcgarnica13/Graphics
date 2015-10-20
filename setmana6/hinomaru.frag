#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D colorMap;

void main()
{
    /* Both options are correct but if are quite inefficient on graphic driver.
    if (distance(vtexCoord.st,vec2(0.5,0.5)) < 0.2) fragColor = vec4(1,0,0,0);
    else fragColor = vec4(1,1,1,0);
    */
   
    float value = step(0.2, distance(vtexCoord.st,vec2(0.5,0.5)));
    /*float step(float edge, float x) :
	0 if x<edge
	1 otherwise
    */
    fragColor = vec4(1,value,value,0);
}
