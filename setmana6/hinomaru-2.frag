#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D colorMap;
uniform bool classic = true;

void main()
{
    /* Both options are correct but if are quite inefficient on graphic driver.
    if (distance(vtexCoord.st,vec2(0.5,0.5)) < 0.2) fragColor = vec4(1,0,0,0);
    else fragColor = vec4(1,1,1,0);
    */
   float value;
   if (classic) {
    value = step(0.2, distance(vtexCoord.st,vec2(0.5,0.5)));
    /*float step(float edge, float x) :
	0 if x<edge
	1 otherwise
    */
   }
   else {
    vec2 u = vtexCoord.st - vec2(0.5,0.5);
    float angle = atan(u.y, u.x);
    float phi = 3.141592/16;
    /*
    if ((distance(vtexCoord.st,vec2(0.5,0.5)) <= 0.2) ||
	(mod(angle/phi + 0.5, 2.0) < 1)) fragColor = vec4(1,0,0,0);
    else fragColor = vec4(1,1,1,0);*/
    value = int(step(0.2, distance(vtexCoord.st,vec2(0.5,0.5)))) & 
	    int(step(1, mod(angle/phi + 0.5, 2.0)));
   }
   fragColor = vec4(1,value,value,0);
}
