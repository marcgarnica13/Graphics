#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;


uniform float time;
uniform sampler2D explosion;
uniform float slice = 1/30;

void main()
{
    float relativetime = mod(time,(48*slice));
    int n = 0;
    bool found = false;
    vec2 offset;
    offset.x=1/6;
    offset.y=1/8;
    while (n < 47 && !found) {
      if(relativetime < (n+1)*slice) {
	found = true;
      } else { 
	++n;
	if (n%8 != 0) {
	  ++offset.x;
	}
	else {
	  offset.x = 1/8;
	  offset.y += 1;
	}
      }
    }
    vec2 auxiliar = (vtexCoord.x*1/6, vtexCoord*1/8);
    vec2 texCoordenades = auxiliar + offset;
    
    fragColor = frontColor * texture(explosion, texCoordenades);
}