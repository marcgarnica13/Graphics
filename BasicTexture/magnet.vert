#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

uniform float speed=0.1;
uniform float time;
uniform float n=4;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;
uniform vec4 lightPosition;

void main()
{
    frontColor = vec4(normalize(normalMatrix * normal).z);
    vtexCoord = texCoord * tiles;
    
    float w = clamp(1/pow(d,n),0,1);
    vec3 vertexprima = normalize((1.0-w)*vertex + w*lightPosition); 
    gl_Position = modelViewProjectionMatrix * vec4(vertexprima.xyz, 1.0);
}
