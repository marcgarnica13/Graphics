// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform int N;

void main()
{
	float i = fract(gl_TexCoord[0].s);
	float a = 1.0/9.0;
	if ( (i >= 0.0 && i < a)|| 
	     (i >= 2.0*a && i < 3.0*a)||
		 (i >= 4.0*a && i < 5.0*a)|| 
		 (i >= 6.0*a && i < 7.0*a)||
		 (i >= 8.0*a && i < 9.0*a) ) 
		 gl_FragColor = vec4(1,1,0,0);
	else gl_FragColor = vec4(1,0,0,0);
}