#include "model-info.h"
#include "glwidget.h"

void ModelInfo::onPluginLoad()
{
  numObjects = numPolygons = numVertices = numTriangles = 0;
  trianglesPercentage = 0.0;
  for (unsigned i = 0; i < scene()->objects().size(); ++i)
  {
    parseObject(i);
  }
}

void ModelInfo::onObjectAdd()
{
  parseObject(scene()->objects().size()-1);
}

void ModelInfo::postFrame() 
{ 
  glColor3f(0.0, 0.0, 0.0);
  int x = glwidget()->width() - 600;
  int y = glwidget()->height() - 10;
  glwidget()->renderText(x,y, QString(
    "numObjects: " + QString::number(numObjects) +
    " - numPolygons: " + QString::number(numPolygons) +
    " - numVertices: " + QString::number(numVertices) +
    " - trianglesPercentage: " + QString::number(trianglesPercentage) + "%"));
}

void ModelInfo::parseObject(unsigned objectId)
{
  ++numObjects;
  const Object& object = scene()->objects()[objectId];
  numPolygons += object.faces().size();
  numVertices += object.vertices().size();
  for (unsigned i = 0; i < object.faces().size(); ++i)
  {
    numVertices += object.faces()[i].numVertices();
    numTriangles += (object.faces()[i].numVertices() == 3);
  }
  if (numPolygons > 0)
  {
    trianglesPercentage = double(numTriangles) / numPolygons;
  }
}

Q_EXPORT_PLUGIN2(show-fps, ModelInfo)   // plugin name, plugin class
