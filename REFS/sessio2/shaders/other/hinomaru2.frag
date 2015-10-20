// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform bool classic;

const float PI = 3.141592653589;

void main()
{
	if (classic){
		if (distance(gl_TexCoord[0].st,vec2(0.5,0.5)) <= 0.2)
			gl_FragColor = vec4(1,0,0,0);
		else gl_FragColor = vec4(1,1,1,0);
	}
	else {
		vec2 U = gl_TexCoord[0].st - vec2(0.5,0.5);
		float W = atan(U.y,U.x);
		float phi = PI/16;
		if (distance(gl_TexCoord[0].st,vec2(0.5,0.5)) <= 0.2
			|| mod(W/phi+0.5, 2.0) < 1.0)
			gl_FragColor = vec4(1,0,0,0);
		else gl_FragColor = vec4(1,1,1,0);
	}
}
