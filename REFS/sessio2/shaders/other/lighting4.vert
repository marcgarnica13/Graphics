// simple vertex shader
varying vec3 n;
varying vec4 pos;

void main()
{
	n = normalize((gl_NormalMatrix*gl_Normal).xyz); 
	pos = gl_ModelViewMatrix*gl_Vertex;
	gl_Position = gl_ModelViewProjectionMatrix*gl_Vertex;
}
