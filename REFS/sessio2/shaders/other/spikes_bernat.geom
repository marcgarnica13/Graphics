// simple geometry shader

// these lines enable the geometry shader support.
#version 120
#extension GL_EXT_geometry_shader4 : enable

uniform float disp;

varying in vec3 vNormal[3];

void main( void )
{
	vec4 center = (gl_PositionIn[0]+gl_PositionIn[1]+gl_PositionIn[2])/3.0;
	vec3 normal = (vNormal[0]+vNormal[1]+vNormal[2])/3.0;
	vec4 vert_center = center + vec4(normal*vec3(disp),0.0);

	for (int i = 0; i < 3; i++) {

		gl_FrontColor  = gl_FrontColorIn[i];
		gl_Position    = gl_ProjectionMatrix * gl_PositionIn  [i];
		EmitVertex();
		gl_FrontColor  = gl_FrontColorIn[(i+1)%3];
		gl_Position    = gl_ProjectionMatrix * gl_PositionIn  [(i+1)%3];
		EmitVertex();
		gl_FrontColor  = vec4(1.0);
		gl_Position    = gl_ProjectionMatrix * vert_center;
		EmitVertex();
		EndPrimitive();

	}

}