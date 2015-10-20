// simple vertex shader
uniform bool eyespace;
uniform float time;

const float PI = 3.1415;

void main()
{	
	float A;
	if (eyespace) A = (gl_ModelViewMatrix * gl_Vertex).y;
	else A = gl_Vertex.y;
	float d = A*sin(time/(2.0*PI));
	vec4 V = gl_Vertex + vec4(gl_Normal,0)*d;
	gl_Position    = gl_ModelViewProjectionMatrix * V;
	gl_FrontColor  = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
