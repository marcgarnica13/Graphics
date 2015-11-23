#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat4 modelViewProjectionMatrixInverse;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;

uniform float time;

float PI = 3.14159;

void main()
{
    vec3 N = normalize(normalMatrix * normal);
    frontColor = vec4(color,1.0);
    vec3 vision = (modelViewProjectionMatrixInverse * vec4(vec3(0,0,1).xyz, 1.0)).xyz;
    vtexCoord = texCoord;
    float dist = sin(2*PI*time);
    vec3 newVertex = vertex - dist*normalize(vision);
    gl_Position = modelViewProjectionMatrix * vec4(newVertex.xyz, 1.0);
}
