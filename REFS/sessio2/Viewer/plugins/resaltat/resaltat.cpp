#include "resaltat.h"
#include "glwidget.h"

void Resaltat::postFrame() 
{ 
  int ind = scene()->selectedObject();
  if (ind >= 0) {
    scene()->objects()[ind].boundingBox().render();
  }
}

Q_EXPORT_PLUGIN2(resaltat, Resaltat)   // plugin name, plugin class
