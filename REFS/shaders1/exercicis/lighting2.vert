// simple vertex shader
varying vec4 c;

void main()
{
	gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
	vec4 ke = gl_FrontMaterial.emission;
	vec4 ka = gl_FrontMaterial.ambient;
	vec4 kd = gl_FrontMaterial.diffuse;
	vec4 ks = gl_FrontMaterial.specular;
	float s = gl_FrontMaterial.shininess;
	vec4 ma = gl_LightModel.ambient;

	vec4 ia = gl_LightSource[0].ambient;
	vec4 id = gl_LightSource[0].diffuse;
	vec4 is = gl_LightSource[0].specular;

	vec3 n = normalize((gl_NormalMatrix*gl_Normal).xyz);
	vec3 l = normalize((gl_LightSource[0].position - gl_ModelViewMatrix*gl_Vertex).xyz);

	vec3 v = vec3(0,0,1);
	vec3 r = normalize(2.0*max(0.0, dot(n,l))*n - l);
	
	vec4 c = ke + ka*(ma + ia) + kd*id*max(0.0, dot(n,l)) + ks*is*pow(max(0.0, dot(r,v)),s);
	gl_FrontColor = c;
}
