#version 330 core

in vec4 frontColor;
in vec3 worldPosition;
in vec3 worldNormal;

out vec4 fragColor;

uniform vec4 matAmbient, matDiffuse, matSpecular;
uniform float matShininess;
uniform vec4 lightAmbient, lightDiffuse, lightSpecular, lightPosition;



void main()
{
    vec3 V = -normalize(worldPosition);
    vec3 N = normalize(worldNormal);
    //vec3 V = vec3(0.0, 0.0, 1.);
    vec3 L = normalize(lightPosition.xyz - worldPosition);
    vec3 R = normalize(2.0*dot(N,L)*N-L);
    float NdotL = max(0.0, dot(N,L));
    float RdotV = max(0.0, dot(R,V));
    float Idiff = NdotL;
    float Ispec = 0;
    if (NdotL > 0) Ispec = pow(RdotV, matShininess);
    fragColor = matAmbient * lightAmbient;
    fragColor += matDiffuse * lightDiffuse * Idiff;
    fragColor += matSpecular * lightSpecular * Ispec;
}
