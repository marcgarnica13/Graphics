#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform int n=12;

bool pointInsideTriangle(vec2 p, vec2 p0, vec2 p1, vec2 p2)
{
	float a = (-p1.y*p2.x + p0.y*(-p1.x + p2.x) + p0.x*(p1.y - p2.y) + p1.x*p2.y);
	float s = 1./a*(p0.y*p2.x - p0.x*p2.y + (p2.y - p0.y)*p.x + (p0.x - p2.x)*p.y);
	float t = 1./a*(p0.x*p1.y - p0.y*p1.x + (p0.y - p1.y)*p.x + (p1.x - p0.x)*p.y);
	return (s>0) && (t>0) && (1-s-t>0);
}

void main()
{
    vec2 part_frac = fract(vtexCoord);
    float value = step(distance(part_frac.st,vec2(0.5,0.5)), 0.2);
    bool is_inside = false;
    int i = 0;
    while (i < n && !is_inside) {
        float alpha = (2.0*3.14159*i)/n;
        float beta = 3.14159/n;
        vec2 p0 = vec2(0.5,0.5) + 0.45*vec2(cos(alpha), sin(alpha));
        vec2 p1 = vec2(0.5,0.5) + 0.2*vec2(cos(alpha + beta), sin(alpha + beta));
        vec2 p2 = vec2(0.5,0.5) + 0.2*vec2(cos(alpha - beta), sin(alpha - beta));
        bool is_inside = pointInsideTriangle(part_frac.st, p0, p1, p2);
        i += 1;
    }
    if (is_inside) fragColor = vec4(1,1,0,0);
    else fragColor = vec4(1,value,0,0);
}
