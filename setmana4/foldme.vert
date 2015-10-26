#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform float time;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

void main()
{
    float fita = -time * texCoord.s;
    //A la matriu se li van donant les columnes
    mat4 rotation_fita = mat4(cos(fita), 0, -sin(fita),0,
		    0, 1, 0, 0,
		    sin(fita), 0, cos(fita), 0,
		    0, 0, 0, 1);
    frontColor = vec4(0,0,1,0);
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * rotation_fita * vec4(vertex.xyz, 1.0);
}
