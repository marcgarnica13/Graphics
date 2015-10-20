// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
varying vec4 P;
varying vec3 N;
uniform sampler2D noise;

vec4 shading(vec3 N, vec3 V, vec4 diffuse){
	const vec3 lightPos = vec3(0.0,0.0,2.0);
	vec3 L = normalize( lightPos - V );
	V = -normalize(V);
	vec3 R = reflect(-L,N);
	float NdotL = max( 0.0, dot( N,L ) );
	float RdotV = max( 0.0, dot( R,V ) );
	float Ispec = pow( RdotV, 20.0 );
	return diffuse * NdotL + Ispec;
}

void main()
{
	vec4 PS = 0.3 * vec4(0,1,-1,0);
	vec4 TS = 0.3 * vec4(-2,-1,1,0);
	float s = dot(PS,P);
	float t = dot(TS,P);
	float v = (texture2D(noise, vec2(s,t))).r;
	vec4 r = vec4(0.5,0.2,0.2,1.0);
	vec4 w = vec4(1,1,1,1);
	vec4 diffuse;
	if (v <= 0.5) diffuse = mix(w,r,v/0.5);
	else {
		v = (v-0.5)/0.5;
		diffuse = mix(r,w,v);
	}
	vec3 PMV = (gl_ModelViewMatrix * P).xyz;
	vec3 NMV = gl_NormalMatrix * N;
	gl_FragColor = shading(NMV,PMV,diffuse);
}
