// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform int N;

void main()
{
	float i = floor(gl_TexCoord[0].s * N);
	float j = floor(gl_TexCoord[0].t * N);
	if (mod(i+j,2.0) == 0.0) 
		gl_FragColor = vec4(1,1,1,0);
	else gl_FragColor = vec4(0,0,0,0);
}
