#include "select-mouse.h"

void SelectMouse::onPluginLoad() {
    scene()->setSelectedObject(-1);
    cntrlClicked = false;
}

void SelectMouse::keyPressEvent(QKeyEvent* k) {
    if (k->key() == Qt::Key_Control) cntrlClicked = true;
}

void SelectMouse::keyReleaseEvent(QKeyEvent* k) {
    if (k->key() == Qt::Key_Control) cntrlClicked = false;
}

void SelectMouse::postFrame() 
{
    int selectedObj = scene()->selectedObject();
    if (selectedObj > -1) {
        const Object& obj = scene()->objects()[selectedObj];
        Box bb = obj.boundingBox(); 
        bb.render();
    }
}

bool SelectMouse::drawObject(int indexObj)
{
    const Object& obj = scene()->objects()[indexObj];
    // per cada cara
    for(unsigned int c=0; c<obj.faces().size(); c++)
    {
        const Face& face = obj.faces()[c];
        glBegin (GL_POLYGON);
        glNormal3f(face.normal().x(), face.normal().y(), face.normal().z());
        // per cada vertex
        for(int v=0; v<face.numVertices(); v++)
        { 
            const Point& p = obj.vertices()[face.vertexIndex(v)].coord();
            glVertex3f(p.x(), p.y(), p.z());
        }
        glEnd();
    }
    return true; 
}

bool SelectMouse::paintDiffColors()
{
    glClearColor(1.0f, 1.0f, 1.0f, 0.0f);
    glClear( GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT );
    //glwidget()->drawAxes();

    for (unsigned int i=0; i < scene()->objects().size(); ++i) {
        glColor3ub(i,125,125);
        drawObject(i);
    }
    return true;
}

void SelectMouse::mouseReleaseEvent(QMouseEvent* m) {
    if (m->button() == Qt::LeftButton && cntrlClicked) {
        glDisable(GL_LIGHTING);
        
        paintDiffColors();
     
        GLint viewport[4]; 
        glGetIntegerv(GL_VIEWPORT, viewport); 
        GLubyte colors[3]; // RGB x 1 pixel
        glReadPixels(m->x(), viewport[3] - m->y(), 1, 1, GL_RGB, GL_UNSIGNED_BYTE, colors);
        // if color[1] (or color[2]) components is not 125, then background selected
        scene()->setSelectedObject(colors[1] == 255 ? -1 : colors[0]);
        
        glEnable(GL_LIGHTING);
        glwidget()->updateGL();
    }
}

Q_EXPORT_PLUGIN2(highlight-mouse, SelectMouse)   // plugin name, plugin class
