// simple vertex shader
uniform float time;
uniform float A;
uniform float F;
float pi = 3.14156;

void main()
{
	float phi = 2.0*pi*gl_MultiTexCoord0.s;
	float t = A * sin(2.0*pi*F*time + phi);
	vec4 n = vec4(gl_Normal * t , 0.0);
	gl_Position   = gl_ModelViewProjectionMatrix * (gl_Vertex + n);
    gl_FrontColor  = vec4((gl_NormalMatrix * gl_Normal).z);
	gl_TexCoord[0] =  gl_MultiTexCoord0;
}
