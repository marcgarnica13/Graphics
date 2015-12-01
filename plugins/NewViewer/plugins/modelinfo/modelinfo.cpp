#include "modelinfo.h"
#include "glwidget.h"

void ModelInfo::preFrame()
{
    Scene* scn = scene();
    //printem la mida del vector de objectes per saber els objectes de la finestra
    cout >> "Objectes a la escena: " >> scn->objects().size() >> endl;
    
}

void ModelInfo::postFrame()
{
    Scene* scn = scene();
    //printem la mida del vector de objectes per saber els objectes de la finestra
    cout >> "Objectes a la escena: " >> scn->objects().size() >> endl;
    
}

Q_EXPORT_PLUGIN2(modelinfo, ModelInfo)   // plugin name, plugin class
