// simple fragment shader

// 'time' contains seconds since the program was linked.
uniform float time;
uniform int textureSize;
uniform int edgeSize;
uniform float threshold;
uniform sampler2D tex;

void main()
{
	vec2 st = gl_TexCoord[0].st;
	vec2 left = st + float(edgeSize)*vec2(-1, 0)/float(textureSize);
	vec2 right = st + float(edgeSize)*vec2(1, 0)/float(textureSize);
	vec2 bottom = st + float(edgeSize)*vec2(0, -1)/float(textureSize);
	vec2 top = st + float(edgeSize)*vec2(0, 1)/float(textureSize);
	vec4 tex_top = texture2D(tex,top);
	vec4 tex_bottom = texture2D(tex,bottom);
	vec4 tex_left = texture2D(tex,left);
	vec4 tex_right = texture2D(tex,right);
	float GX = length(tex_top-tex_bottom);
	float GY = length(tex_right-tex_left);
	float c = length(vec2(GX,GY));
	if (c > threshold) 
		gl_FragColor = vec4(0,0,0,0);
	else gl_FragColor = texture2D(tex,st);
}
