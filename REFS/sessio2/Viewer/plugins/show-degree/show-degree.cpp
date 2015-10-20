#include "show-degree.h"
#include "glwidget.h"

void ShowDegree::onPluginLoad()
{
  // There is one object
  const Object& object = scene()->objects()[0];
  num = 0.0;
  for (unsigned i = 0; i < object.faces().size(); ++i) {
    const Face& face = object.faces()[i];
    num += face.numVertices();
  }
  num /= object.vertices().size();
}


void ShowDegree::postFrame() 
{ 
	glColor3f(0.0, 0.0, 0.0);
	int x = 5;
	int y = 15;
	glwidget()->renderText(x,y, QString(QString::number(num)));
}

Q_EXPORT_PLUGIN2(show-fps, ShowDegree)   // plugin name, plugin class
