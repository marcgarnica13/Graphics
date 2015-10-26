#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;
uniform float amplitude=0.1;
uniform float freq = 1; //Hz

uniform float time;

void main()
{
    frontColor = vec4(normalize(normalMatrix * normal).z);
    vec3 N = normalize(normalMatrix * normal);
    vtexCoord = texCoord;
    float distance = amplitude*sin(2*3.1415*freq*time + 2*3.1415*texCoord.s );
    vec4 offset = vec4(normal*distance, 0.0);
    gl_Position = modelViewProjectionMatrix * vec4(vertex.xyz+offset.xyz, 1.0);
}
