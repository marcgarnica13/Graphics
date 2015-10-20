// simple vertex shader
uniform float scale;
uniform float time;

float triangleWave (float x) {
	return abs(mod(x,2)-1.0);
}

void main()
{
	vec3 T0 = vec3(-1,-1,0);
	vec3 V = vec3(2,2,0);
	vec3 ti = vec3(triangleWave(time/1.618),triangleWave(time),0);
	vec3 T = scale * (T0 + V*ti);
	mat4 trans = mat4(
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0, 
		T, 1
	);
	vec4 NV = trans * gl_ModelViewProjectionMatrix * gl_Vertex;
	NV /= vec4(scale,scale,scale,1);
	gl_Position = NV;
	vec3 N = gl_NormalMatrix * gl_Normal;
	gl_FrontColor  = vec4(0.3,0.3,0.9,1.0)*N.z;
	gl_TexCoord[0] = gl_MultiTexCoord0;
}
