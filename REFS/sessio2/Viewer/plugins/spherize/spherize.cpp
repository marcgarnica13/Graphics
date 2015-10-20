#include "spherize.h"
#include <iostream>

void spherize::onPluginLoad()
{
  // Carregar shader, compile & link 
  QString shaderSource = 
      "void main()"
      "{"
      "	vec4 dst = vec4(normalize(gl_Vertex.xyz), gl_Vertex.w);"
      "	gl_Position    = gl_ModelViewProjectionMatrix * dst;"
      "	gl_FrontColor  = 0.2*gl_Color;"
      "	gl_TexCoord[0] = gl_MultiTexCoord0;"
      "}";

    QString vs_src = "void main() {float d = sqrt(pow(gl_Vertex.x,2) + pow(gl_Vertex.y,2) + pow(gl_Vertex.z,2));   vec3 V = gl_Vertex.xyz / d;     gl_Position    = gl_ModelViewProjectionMatrix * vec4(V,1);      gl_FrontColor  = 0.2*gl_Color;      gl_TexCoord[0] = gl_MultiTexCoord0; }";
  shader = new QGLShader(QGLShader::Vertex, this);
  shader->compileSourceCode(vs_src);
  program = new QGLShaderProgram(this);
  program->addShader(shader);
  program->link();
}

void spherize::preFrame() 
{
    // bind shader and define uniforms
    program->bind();
}

void spherize::postFrame() 
{
    // unbind shader
    program->release();
}

Q_EXPORT_PLUGIN2(effectcrt, spherize)   // plugin name, plugin class
