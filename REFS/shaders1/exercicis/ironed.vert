// simple vertex shader
uniform float amplitude;
uniform float time;
const float PI = 3.14159;

void main()
{
	float Y = amplitude * sin(2.0*PI*gl_Vertex.x + 3.0*time);
	vec4 V = vec4(gl_Vertex.x, Y, gl_Vertex.z,1.0);
	gl_Position    = gl_ModelViewProjectionMatrix * V;
	gl_FrontColor  = vec4(1.0,0.0,0.0,0.0);
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
