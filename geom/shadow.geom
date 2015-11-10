#version 330 core
        
layout(triangles) in;
layout(triangle_strip, max_vertices = 36) out;

in vec4 vfrontColor[];
out vec4 gfrontColor;

uniform mat4 modelViewProjectionMatrix;
uniform vec3 boundingBoxMin; // cantonada minima de la capsa englobant 
uniform vec3 boundingBoxMax; // cantonada maxima de la capsa englobant







void main( void )
{
	for( int i = 0 ; i < 3 ; i++ )
	{
		gfrontColor = vfrontColor[i];
		gl_Position = modelViewProjectionMatrix * gl_in[i].gl_Position;
		EmitVertex();
	}
    EndPrimitive();

    gfrontColor = vec4(0,0,0,1);
    
    for (int i = 0; i < 3; i++ ) {
	vec4 vert = gl_in[i].gl_Position;
	vert.y = boundingBoxMin.y;
	gl_Position = modelViewProjectionMatrix * vert;
	EmitVertex();	
    }
    EndPrimitive();

    vec3 Rv = (boundingBoxMax - boundingBoxMin)*0.5;
    vec3 C = boundingBoxMin + Rv;
    float R = distance(boundingBoxMax, boundingBoxMin);

    if (gl_PrimitiveIDIn == 0) {
		gfrontColor = vec4(0.0, 1.0, 1.0, 0.5);
		float y_plane = boundingBoxMin.y - 0.01;

		gl_Position = modelViewProjectionMatrix * vec4(C.x - R, y_plane, C.z + R, 1.0);
		EmitVertex();
		gl_Position = modelViewProjectionMatrix * vec4(C.x + R, y_plane, C.z + R, 1.0);
		EmitVertex();
		gl_Position = modelViewProjectionMatrix * vec4(C.x - R, y_plane, C.z - R, 1.0);
		EmitVertex();
		gl_Position = modelViewProjectionMatrix * vec4(C.x + R, y_plane, C.z - R, 1.0);
		EmitVertex();
		EndPrimitive();
    }
}
