// simple vertex shader
varying vec4 P,N;

void main()
{
	gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;
	gl_FrontColor  = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;
	P = gl_ModelViewMatrix * gl_Vertex;
	N = vec4(gl_NormalMatrix * gl_Normal, 0);	
}
