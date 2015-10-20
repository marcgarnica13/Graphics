// simple vertex shader
varying float x;

void main()
{
	gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;
	//need to divide by w to get window coords
	x = gl_Position.x / gl_Position.w;
	gl_FrontColor  = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
