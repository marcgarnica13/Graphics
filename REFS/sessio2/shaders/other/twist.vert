// simple vertex shader
uniform float time;

void main()
{
	float phi = 0.4 * gl_Vertex.y * sin(time);
	mat4 trans = mat4(
		cos(phi), 0, -sin(phi), 0,
		0, 1, 0, 0,
		sin(phi), 0, cos(phi), 0,
		0, 0, 0, 1
	);
	vec4 NV = trans * gl_Vertex;
	gl_Position    = gl_ModelViewProjectionMatrix * NV;
	gl_FrontColor  = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
