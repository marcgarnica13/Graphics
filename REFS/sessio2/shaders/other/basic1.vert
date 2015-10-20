// simple vertex shader

void main()
{
	gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
	vec3 normal = normalize(gl_NormalMatrix * gl_Normal);
	gl_FrontColor  = gl_Color * normal.z;
	gl_TexCoord[0] = gl_MultiTexCoord0;
}