// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;

void main()
{
	if (distance(gl_TexCoord[0].st,vec2(0.5,0.5)) <= 0.2)
		gl_FragColor = vec4(1,0,0,0);
	else gl_FragColor = vec4(1,1,1,0);
}
