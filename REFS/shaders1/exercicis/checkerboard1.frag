// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;

void main()
{
	float i = floor(gl_TexCoord[0].s * 8.0);
	float j = floor(gl_TexCoord[0].t * 8.0);
	if (mod(i+j,2.0) == 0.0) 
		gl_FragColor = vec4(1,1,1,0);
	else gl_FragColor = vec4(0,0,0,0);
}

/*
	each square goes from 0 to 1, from 1 to 2, till 8
	since originally they went from 0 to 1 and where
	multiplied by 8.
	Then we make floor in order to eliminate the decimal
	part of our point and decide in which square it belongs
	and paint it that colour.
*/
