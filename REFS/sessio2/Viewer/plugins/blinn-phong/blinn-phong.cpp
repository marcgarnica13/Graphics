#include "blinn-phong.h"

void BlinnPhong::onPluginLoad()
{
  timer.start();
    // Carregar shader, compile & link 
    QString vsSource = 
        "varying float z_normal;"
        ""
        "void main()"
        "{"
        "	gl_Position    = gl_ModelViewProjectionMatrix * gl_Vertex;"
        "	z_normal = (gl_NormalMatrix * gl_Normal).z;"
        "	gl_FrontColor  = gl_Color;"
        "	gl_TexCoord[0] = gl_MultiTexCoord0;"
        "}";
    QString fsSource = 
        "uniform float time;"
        "varying float z_normal;"
        ""
        "void main()"
        "{"
        "	 gl_FragColor = gl_Color * z_normal;"
        "}";


    vs = new QGLShader(QGLShader::Vertex, this);
    vs->compileSourceCode(vsSource);
    fs = new QGLShader(QGLShader::Fragment, this);
    fs->compileSourceCode(fsSource);
    program = new QGLShaderProgram(this);
    program->addShader(fs);
    program->addShader(vs);
    program->link();
}

void BlinnPhong::preFrame() 
{
    // bind shader and define uniforms
    program->bind();
    program->setUniformValue("time", float(timer.nsecsElapsed()/1e9));

    program->setUniformValue("A", 0.1f);
    program->setUniformValue("F", 1.0f);
}

void BlinnPhong::postFrame() 
{
    // unbind shader
    program->release();
}

Q_EXPORT_PLUGIN2(effectcrt, BlinnPhong)   // plugin name, plugin class
