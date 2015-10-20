#ifndef _MODELINFO_H
#define _MODELINFO_H

#include "basicplugin.h"

class ModelInfo : public QObject, public BasicPlugin
{
   Q_OBJECT
   Q_INTERFACES(BasicPlugin)

public:
  void onPluginLoad();    
  void onObjectAdd();
  void postFrame();
    
private:
  void parseObject(unsigned objectId);
  unsigned int numObjects;
  unsigned int numPolygons;
  unsigned int numVertices;
  unsigned int numTriangles;
  double trianglesPercentage;
};
 
 #endif
