// simple geometry shader

// these lines enable the geometry shader support.
#version 120
#extension GL_EXT_geometry_shader4 : enable

uniform float time;

void main( void )
{
	if (gl_PrimitiveIDIn  < int(time*100)) {
		for (int i = 0; i < gl_VerticesIn; i++)
		{		
			gl_FrontColor = gl_FrontColorIn[i];
			gl_Position = gl_ModelViewProjectionMatrix * gl_PositionIn[i];
			EmitVertex();
		}
		EndPrimitive();
	}
}
