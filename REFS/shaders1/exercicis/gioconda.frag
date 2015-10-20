// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform sampler2D tex;

void main()
{
	// is point inside circle?
	// (x-center.x)^2 + (y-center.y)^2 <= radius^2
	float S = (gl_TexCoord[0].s - 0.393);
	float T = (gl_TexCoord[0].t - 0.348);
	if (S*S + T*T <= 0.025*0.025
		&& fract(time) > 0.5) 
	{
		gl_FragColor = texture2D(tex, gl_TexCoord[0].st
									  + vec2(0.057,0.172));
	}
	else 
		gl_FragColor = texture2D(tex, gl_TexCoord[0].st);
}
