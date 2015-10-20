// simple vertex shader

void main()
{
	vec4 P = gl_ModelViewProjectionMatrix * gl_Vertex;
	P.z = -P.z;
	gl_Position = P;
	gl_FrontColor  = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;
}

//works because -3 < -2. By inverting the sign,
//the smaller numbers will be the bigger ones.

