// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform sampler2D sampler;	

void main()
{
	float s_offset = floor(time*30.0);
	float t_offset = floor(time*30.0/8.0);
	vec2 tex = vec2(gl_TexCoord[0].st*vec2((1.0/8.0),(1.0/6.0)));
	vec4 c = texture2D(sampler,tex+vec2(s_offset/8.0,t_offset/6.0));
	gl_FragColor = c*c.a;
}
