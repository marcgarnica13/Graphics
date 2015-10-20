// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform int N;

void main()
{
	float i = gl_TexCoord[0].s * N;
	float j = gl_TexCoord[0].t * N;
	if (fract(i) < 0.1 || fract(j) < 0.1) 
		 gl_FragColor = vec4(0,0,0,0);
	else gl_FragColor = vec4(1,1,1,0);
}

/* reasoning: each cell (like the ones on the checkerboard
   before) are divided from 0 to 1, then 1 to 2, till 8.
   then we make a 0.1 girth line along the upper and 
   left corners of the square and we paint them black.
   The fract function grabs the fractional part of the
	numbers and tells us if the point belong to the line. 
*/