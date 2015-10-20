// simple vertex shader
varying vec3 V;

void main()
{
	V = (gl_ModelViewMatrix * gl_Vertex).xyz;
	gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;
	gl_FrontColor  = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
