// simple vertex shader
uniform float offset;
varying float print;

void main()
{
	vec4 v = gl_ModelViewMatrixInverse*gl_LightSource[0].position;
	float num = gl_Vertex.x*v.x+
				gl_Vertex.y*v.y+
				gl_Vertex.z*v.z + offset;
	if (num > 0.0) print = 0.0;
	else {
		print = 1.0;
		gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;
		gl_FrontColor  = gl_Color;
		gl_TexCoord[0] = gl_MultiTexCoord0;
	}
}
