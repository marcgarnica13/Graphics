// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform sampler2D rock;
uniform sampler2D grass;
uniform sampler2D noise;

void main()
{
	vec4 N = texture2D(noise,gl_TexCoord[0].st);
	vec4 R = texture2D(rock,gl_TexCoord[0].st);
	vec4 G = texture2D(grass,gl_TexCoord[0].st);
	gl_FragColor = mix(G,R,N.r);
}
