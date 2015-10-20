// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform sampler2D map;
uniform float time;
uniform float a;

const float PI = 3.14159;

float max3 (vec3 v){
	return max(v.x,max(v.y,v.z));
}

void main()
{
	vec4 C = texture2D(map, gl_TexCoord[0].st);
	float m = max3(C.xyz);
	vec2 u = vec2(m,m);
	float r = 2.0*PI*time;
	mat2 rot = mat2(
		cos(r), sin(r),
		-sin(r), cos(r)
	);
	vec2 offset = (a/100.0) * rot * u;
	gl_FragColor = texture2D(map, gl_TexCoord[0].st 
								  + offset);
}
