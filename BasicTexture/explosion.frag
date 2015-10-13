#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;
uniform float time;
uniform sampler2D explosion;


void main()
{
    float n = time*6;
    vec2 offset;
    offset.x = 1/8;
    offset.y = 2/6;
    vec2 auxiliarTex = vec2(1/8, 2/6) + (vtexCoord/8);
    fragColor = frontColor * texture(explosion,auxiliarTex);
}
