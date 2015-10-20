// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
varying vec3 V;

void main()
{
	vec3 N = normalize(cross(dFdx(V),dFdy(V)));
	gl_FragColor = N.z * gl_Color;
}
