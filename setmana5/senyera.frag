#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform float time;
uniform float n = 8;

void main()
{
    float sfract = fract(vtexCoord.s);
    float a = 1.0/9.0;
    if ((sfract >= 0.0 && sfract < a) || 
	(sfract >= 2.0*a && sfract < 3.0*a) ||
	(sfract >= 4.0*a && sfract < 5.0*a) ||
	(sfract >= 6.0*a && sfract < 7.0*a) ||
	(sfract >= 8.0*a && sfract < 9.0*a))
	fragColor = vec4(1,1,0,0);
    else fragColor = vec4(1,0,0,0);
}

