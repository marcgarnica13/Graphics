#version 330 core

in vec4 frontColor;
in vec3 worldPosition;
in vec3 worldNormal;

out vec4 fragColor;

uniform vec4 matAmbient, matDiffuse, matSpecular;
uniform float matShininess;
uniform vec4 lightAmbient, lightDiffuse, lightSpecular, lightPosition;

float f_computation(vec3 N, vec3 L, vec3 V) {
    N=normalize(N); L=normalize(L); V=normalize(V);
    float NdotL = max(0.0, dot(N,L));
    vec3 R = normalize(2.0*dot(N,L)*N-L);
    float RdotV = max(0.0, dot(R,V));
    float power = 0;
    if (NdotL > 0) power = pow(RdotV, matShininess);
    return NdotL + power; 
}

void main()
{
    vec3 V = -worldPosition;
    vec3 N = worldNormal;
    vec3 L = lightPosition.xyz - worldPosition;
    float f_result = f_computation(N,L,V);
    if (f_result < 0.4) fragColor = vec4(0,0,0,0);
    else if (f_result < 0.98) fragColor = matDiffuse;
    else fragColor = matSpecular;
}
