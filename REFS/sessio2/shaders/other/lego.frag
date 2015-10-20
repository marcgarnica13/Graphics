// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
varying vec3 gNormal;
uniform sampler2D tex;

void main()
{
	vec3 newN = gl_NormalMatrix * gNormal;
	if (gNormal.y > 0 )
		gl_FragColor = newN.z * gl_Color * texture2D(tex, gl_TexCoord[0].st);
	else gl_FragColor = newN.z * gl_Color;
}
