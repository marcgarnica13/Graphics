#version 330 core

in vec4 frontColor;
out vec4 fragColor;
in vec4 gl_FragCoord;

uniform int n = 4;

void main()
{
    if(int(mod(gl_FragCoord.y, float(n))) == 0) fragColor = frontColor;
    else discard;
}
