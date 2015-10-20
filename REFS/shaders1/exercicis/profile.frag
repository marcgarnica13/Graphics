// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform float epsilon; 
uniform float light;
varying vec4 P,N;

void main()
{
	float d = dot(normalize(P), normalize(N));
	if (abs(d) < epsilon) gl_FragColor = vec4(0.7,0.6,0.0,0.0);
	else gl_FragColor = gl_Color * light * N.z;
}
