// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
varying float x;

void main()
{
	//time goes from [0,..], perspective [-1,1],
	//perform a shift
	float t = time-1.0;
	if (x <= t) gl_FragColor = vec4(0,0,1,0);
	else discard;
}
