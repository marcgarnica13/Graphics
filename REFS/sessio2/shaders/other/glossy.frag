uniform sampler2D glossy;
uniform int r;

varying vec3 P;
varying vec3 N;

vec4 sampleTexture(sampler2D sampler, vec2 st, int ri)
{
	float W,H;
	vec4 sum = vec4(0,0,0,0);
	W = H = 512.0;
	for (int i = -ri; i <= ri; ++i){
		for (int j  = -ri; j <= ri; ++j){
			vec2 V = vec2(st.x + float(i)/W, st.y + float(j)/H);
			sum += texture2D(sampler,V);
		}
	}
	return sum / pow(2*ri+1, 2);
}

vec4 sampleSphereMap(sampler2D sampler, vec3 R)
{
	float z = sqrt((R.z+1.0)/2.0);
	vec2 st = vec2((R.x/(2.0*z)+1.0)/2.0, (R.y/(2.0*z)+1.0)/2.0);
    st.y = -st.y;
	return sampleTexture(sampler, st, r);
}

void main()
{
	vec3 obs = vec3(0.0);
	vec3 I = normalize(P-obs);
	vec3 R = reflect(I, N);

	gl_FragColor = sampleSphereMap(glossy, R);
}
