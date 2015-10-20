// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform float offset;
varying float print;

void main()
{
	if (print == 1.0) gl_FragColor = gl_Color;
	else discard;
}
