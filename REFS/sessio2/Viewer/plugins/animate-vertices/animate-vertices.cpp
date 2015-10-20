#include "animate-vertices.h"
#include <iostream>

void AnimateVertices::onPluginLoad()
{
  timer.start();
    // Carregar shader, compile & link 
    QString shaderSource = "uniform float time;uniform float A;uniform float F;float pi = 3.14156;void main(){float t = A * sin(2.0*pi*F*time);vec4 n = vec4(gl_Normal * t , 0.0);gl_Position = gl_ModelViewProjectionMatrix * (gl_Vertex + n);gl_FrontColor = vec4((gl_NormalMatrix * gl_Normal).z);gl_TexCoord[0] =  gl_MultiTexCoord0;} ";

// TODO finish this
    fs = new QGLShader(QGLShader::Vertex, this);
    fs->compileSourceCode(shaderSource);
    program = new QGLShaderProgram(this);
    program->addShader(fs);
    program->link();
}

void AnimateVertices::preFrame() 
{
    // bind shader and define uniforms
    program->bind();
    program->setUniformValue("time", float(timer.nsecsElapsed()/1e9));
    std::cerr << "time: " << float(timer.nsecsElapsed()/1e9) << std::endl;

    program->setUniformValue("A", 0.1f);
    program->setUniformValue("F", 1.0f);
}

void AnimateVertices::postFrame() 
{
    // unbind shader
    program->release();
}

Q_EXPORT_PLUGIN2(effectcrt, AnimateVertices)   // plugin name, plugin class
