#version 330 core

in vec4 frontColor;
in vec3 worldPosition;
in vec3 worldNormal;

out vec4 fragColor;

uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;
uniform mat4 modelViewMatrixInverse;

uniform bool world;
uniform vec4 matAmbient, matDiffuse, matSpecular;
uniform float matShininess;
uniform vec4 lightAmbient, lightDiffuse, lightSpecular, lightPosition;

vec4 light(vec3 N, vec3 V, vec3 L)
{
  N=normalize(N); V=normalize(V); L=normalize(L);
  vec3 R = normalize(2.0*dot(N,L)*N-L);
  float NdotL = max(0.0, dot(N,L));
  float RdotV = max(0.0, dot(R,V));
  float Idiff = NdotL;
  float lspec = 0;
  if(NdotL > 0) lspec = pow(RdotV, matShininess);
  return
    matAmbient * lightAmbient +
    matDiffuse * lightDiffuse * Idiff + 
    matSpecular * lightSpecular * lspec;
}

void main()
{
  vec3 V,N,L;
  //V = vec3(1.0, 0.0, 0.0);
  vec3 P = (modelViewMatrix * vec4(worldPosition.xyz, 1.0)).xyz;
  if(!world) {
    L = normalize(lightPosition.xyz - P);
    V = -P;
    N = normalMatrix * worldNormal;
    
  } else {
    L = vec3(modelViewMatrixInverse*lightPosition - vec4(worldPosition.xyz,1));
    V = vec3((modelViewMatrixInverse * vec4(0,0,0,1)).xyz - worldPosition);
    N = worldNormal;
    
  }
  fragColor = light(N, V, L);
}
