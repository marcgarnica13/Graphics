#include "modelinfo.h"
#include <iostream>
using namespace std;

void ModelInfo::onPluginLoad()
{
    scn_objects = scn_polygons = scn_vert = scn_triangles = 0;
    triangles_pct = 0.0;
    for (unsigned i = 0; i < scene()->objects().size(); ++i)
    {
      countObject(i);
    }
    printModelInfo();
}

void ModelInfo::onObjectAdd()
{
  countObject(scene()->objects().size()-1);
  printModelInfo();
}

void ModelInfo::countObject(unsigned objId)
{
  ++scn_objects;
  const Object& object = scene()->objects()[objId];
  scn_polygons += object.faces().size();
  //scn_vert += object.vertices().size();
  for (unsigned i = 0; i < object.faces().size(); ++i)
  {
    scn_vert += object.faces()[i].numVertices();
    scn_triangles += (object.faces()[i].numVertices() == 3);
  }
  if (scn_polygons > 0)
  {
    triangles_pct = double(scn_triangles) / scn_polygons;
  }
}

void ModelInfo::printModelInfo()
{
  
  cout << "Number of objects " << scn_objects << endl;
  cout << "Number of polygons " << scn_polygons << endl;
  cout << "Number of vertices " << scn_vert << endl;
  cout << "Number of triangles "  << scn_triangles << endl;
  cout << "Percentatge of triangles among the polygons " << triangles_pct << endl;
 
}
Q_EXPORT_PLUGIN2(modelinfo, ModelInfo)   // plugin name, plugin class