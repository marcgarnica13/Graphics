// simple vertex shader
uniform float n;

void main()
{
	vec4 F = gl_ModelViewMatrixInverse * gl_LightSource[0].position;
	float d = distance(F, gl_Vertex);
	float w = clamp(1.0/pow(d,n),0.0,1.0);
	vec4 VP = (1.0-w)*gl_Vertex + w*F;
	gl_Position   = gl_ModelViewProjectionMatrix * VP;
	vec3 normal = normalize(gl_NormalMatrix * gl_Normal);
    gl_FrontColor  = normal.z;
	gl_TexCoord[0] =  gl_MultiTexCoord0;
}
