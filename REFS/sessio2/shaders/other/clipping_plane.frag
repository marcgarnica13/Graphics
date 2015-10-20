// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform float offset;
varying float d;

void main()
{
	if (d < 0.0) gl_FragColor = gl_Color;
	else discard;
}
