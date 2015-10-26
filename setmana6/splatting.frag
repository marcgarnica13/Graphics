#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D noise0;
uniform sampler2D rock1;
uniform sampler2D grass2;

void main()
{
    vec4 noise_tex = texture(noise0, vtexCoord.st);
    vec4 rock_tex = texture(rock1, vtexCoord.st);
    vec4 grass_tex = texture(grass2, vtexCoord.st);
    fragColor = mix(rock_tex,grass_tex, noise_tex.r);
}
