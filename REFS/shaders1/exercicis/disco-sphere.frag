// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform sampler2D tex;
varying vec4 R;

void main()
{
	vec3 N = normalize(cross(dFdx(R.xyz),dFdy(R.xyz)));
	vec4 T = texture2D(tex,N.xy);
	gl_FragColor = T * N.z;
}
