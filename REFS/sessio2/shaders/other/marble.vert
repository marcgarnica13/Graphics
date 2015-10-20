// simple vertex shader
varying vec4 P;
varying vec3 N;

void main()
{
	N = gl_Normal;
	P = gl_Vertex;
	gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;
	gl_FrontColor  = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
