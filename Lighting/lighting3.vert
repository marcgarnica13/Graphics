#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;
out vec4 frontColor;
uniform mat4 modelViewProjectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;
uniform mat4 viewMatrix;
uniform vec4 matAmbient, matDiffuse, matSpecular;
uniform float matShininess;
uniform vec4 lightAmbient, lightDiffuse, lightSpecular, lightPosition;

out vec3 worldPosition;
out vec3 worldNormal;


vec4 light(vec3 N, vec3 V, vec3 L)
{
    N=normalize(N);
    V=normalize(V);
    L=normalize(L);
    vec3 H = normalize(V+L);
    float NdotL = max(0.0, dot(N,L));
    float NdotH = max(0.0, dot(N,H));
    float Idiff = NdotL;
    float Ispec = 0;
    if (NdotL > 0) Ispec = pow(NdotH, matShininess);
    return matAmbient * lightAmbient + matDiffuse * lightDiffuse * Idiff + matSpecular * lightSpecular * Ispec;
}

void main()
{
    vec3 P = (modelViewMatrix * vec4(vertex.xyz, 1.0)).xyz;
    vec3 N = normalize(normalMatrix * normal);
    vec3 V = -P;
    vec3 L = (lightPosition.xyz - P);
    //Blinn shading in Vertex Shader
    //frontColor = light(N,V,L);
    //Blinn shading in fragment Shader
    frontColor = vec4(color,1.0);
    worldPosition = P;
    worldNormal = N;
    gl_Position = modelViewProjectionMatrix * vec4(vertex.xyz,1.0);
}
