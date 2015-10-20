// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform int n;

void main()
{
	if (int(mod(gl_FragCoord.y, float(n))) == 0)
		gl_FragColor = gl_Color;
}
