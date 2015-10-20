// simple geometry shader

// these lines enable the geometry shader support.
#version 120
#extension GL_EXT_geometry_shader4 : enable

uniform float step;
varying out vec3 gNormal;

void main( void )
{
	vec4 pos = (gl_PositionIn[0]+gl_PositionIn[1]+gl_PositionIn[2])/3.0;
	pos = pos / step;
	round(pos);	
	pos = vec4(round(pos.x), round(pos.y), round(pos.z), 1.0);
	pos = pos * step;
	pos.w = 1.0;
	
		// Top, down, front, back, left, right
	float h = step/2.0;
	float x[36] = float[](-h, h, -h,  h, h, -h,           -h, h, -h,  h, h, -h,
									  -h, h, -h,  h, h, -h,           -h, h, -h, h, h, -h,
									 -h, -h, -h, -h, -h, -h,         h, h, h, h, h, h);
	float y[36] = float[](h, h, h,  h, h, h,              -h, -h, -h, -h, -h, -h,
									  h, h, -h, h, -h, -h,           h, h, -h, h, -h, -h,
									  h, h, -h, h, -h, -h,            h, h, -h, h, -h, -h);
	float z[36] = float[](-h, -h, h,  -h, h, h,          -h, -h, h,  -h, h, h,  
									h, h, h, h, h, h,          -h, -h, -h, -h, -h, -h,
									-h, h, -h,  h, h, -h,          h, -h, h, -h, -h, h);

	float tx[6] = float[](0, 1, 0, 1, 1, 0);
	float ty[6] = float[](1, 1, 0, 1, 0, 0);
	for (int i = 0; i < 36; i++)
	{
		gNormal = vec3(-1,0,0);
		if (i < 30) gNormal = vec3(1,0,0);
		if (i < 24) gNormal = vec3(0,0,-1);
		if (i < 18) gNormal = vec3(0,0,1);
		if (i < 12) gNormal = vec3(0,-1,0);	
		if (i < 6) gNormal = vec3(0,1,0);
		
		if (i < 6) 
		{
			gl_TexCoord[0] = vec4(tx[i], ty[i], 0, 0);

		}
		gNormal = gNormal;

		gl_Position = gl_ModelViewProjectionMatrix * (pos + vec4(x[i],y[i],z[i],0));
		gl_FrontColor = vec4(1,0,0,0.5);
		EmitVertex();
		if (mod(i,3) == 2) EndPrimitive();
	}

}
