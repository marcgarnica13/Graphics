#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D map;
uniform float time;
uniform float a;

const float PI = 3.14159;

float max_three (vec3 v) {
  return max(v.x,max(v.y,v.z));
}

void main()
{
    vec4 C = texture(map, vtexCoord.st);
    float m = max_three(C.xyz);
    vec2 u = vec2(m,m);
    float r = 2.0*PI*time;
    mat2 rotation = mat2(cos(r), sin(r),
			 -sin(r), cos(r));
    vec2 offset = (a/100.0) * rotation * u;
    fragColor = texture(map, vtexCoord.st + offset);
}
