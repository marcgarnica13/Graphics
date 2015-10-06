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
    vec3 V = -worldPosition;
    //vec3 V = vec3(0.0, 0.0, 1.);
    vec3 L = normalize(lightPosition.xyz - worldPosition);
    vec3 H = normalize(V+L);

    float NdotL = max(0.0, dot(worldNormal,L));
    float NdotH = max(0.0, dot(worldNormal,H));
    float Idiff = NdotL;
    float Ispec = 0;
    if (NdotL > 0) Ispec = pow(NdotH, matShininess);
    fragColor = matAmbient * lightAmbient;
    fragColor += matDiffuse * lightDiffuse * Idiff;
    fragColor += matSpecular * lightSpecular * Ispec;
}
