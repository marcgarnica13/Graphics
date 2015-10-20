// simple vertex shader
uniform float offset;
varying float d;

void main()
{
	vec4 v = gl_ModelViewMatrixInverse*gl_LightSource[0].position;
	d = gl_Vertex.x*v.x +
		gl_Vertex.y*v.y +
		gl_Vertex.z*v.z + offset;
	//d = num / sqrt(v.x*v.x+v.y*v.y+v.z*v.z);
	gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;
	gl_FrontColor  = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;

}
