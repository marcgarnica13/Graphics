// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;

void main()
{
	//gl_FragCoord.z is [0,1], to invert it
	//we must substract 1
	gl_FragDepth = 1.0-gl_FragCoord.z;
	gl_FragColor = gl_Color;
}
