// simple geometry shader

// these lines enable the geometry shader support.
#version 120
#extension GL_EXT_geometry_shader4 : enable

uniform float time;
uniform float speed;

const float PI = 3.14159265359;

void main( void )
{
	int ind = int(time*speed)&1;

	vec4 pos = (gl_PositionIn[0] + gl_PositionIn[1] + gl_PositionIn[2])/3.0;
	for (int i = 0; i < gl_VerticesIn; i++)
	{		
		if ((gl_PrimitiveIDIn&1) != ind) pos = gl_PositionIn[i];
		gl_FrontColor = gl_FrontColorIn[i];
		gl_Position = mix(gl_PositionIn[i], pos, abs(sin(speed*time*PI)));
		EmitVertex();
	}
	EndPrimitive();

}
