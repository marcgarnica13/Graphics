#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;
in vec4 fragCoord;

uniform sampler2D colorMap;
uniform float time;

void main()
{
    float time_r = time-1.0;
    if(fragCoord.x <= time_r) fragColor = vec4(0,0,1,0);
    else discard;
}
