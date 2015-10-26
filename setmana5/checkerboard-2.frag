#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform float time;
uniform float n = 8;

void main()
{
    float i = floor(vtexCoord.s * n);
    float j = floor(vtexCoord.t * n);
    if (mod(i+j,2.0) == 0.0) fragColor = vec4(0.8,0.8,0.8,0);
    else fragColor = vec4(0,0,0,0);
}
/* Si multipliquem per 8 tenim que cada quadrat va del 0,1, 1,2, etcetera
   fins a 8. (0,1)*8
   Llavors agafant la part entera i mirant el modul 2 sabem quin square li toca i
   i assignem un color.
*/
