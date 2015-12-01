#include <QApplication>
#include "glwidget.h"
#include <string>
using namespace std;

int main(int argc, char ** argv)
{
    QApplication a(argc, argv);

    // Specify an OpenGL 3.3 format using the Core profile.
    QGLFormat glFormat;
    glFormat.setVersion( 3, 3 );
    glFormat.setProfile( QGLFormat::CoreProfile ); 

    // Used to pass command line args to the plugins
    string args;
    for (int i=1; i<argc; ++i) args+=argv[i];
    
    GLWidget glWidget(glFormat, args);
    QString appPath = a.applicationDirPath();
# if defined(__APPLE__)
    appPath.append("/../../../");
#else
    appPath.append("/");
# endif
    glWidget.setPluginPath(appPath.append("../../plugins/bin/"));
    glWidget.show();

    // Print OpenGL version and profile 
    QGLFormat f = glWidget.format();
    cout << "OpenGL Version: " << f.majorVersion() << "." << f.minorVersion() << endl;
    cout << "OpenGL Profile: " << ((f.profile()==QGLFormat::CoreProfile)?"Core":"Compatibility") << endl;


    glWidget.loadDefaultPlugins();
    //glWidget.addObject();
    QString models = "/assig/grau-g/models";
    char* tmp = getenv ("VMODELS");
    if (tmp!=NULL) models=QString(tmp);
    glWidget.addObjectFromFile(models + "/default.obj");

    a.connect( &a, SIGNAL( lastWindowClosed() ), &a, SLOT( quit() ) );
    return a.exec();
}

