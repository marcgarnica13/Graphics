#!/bin/bash

export LD_LIBRARY_PATH=$PWD/viewer/bin
export VPLUGINS="libdraw-vbo-ext.so;libshaderloader.so;libnavigatedefault.so"   

echo "Executing empty viewer"
viewer/bin/viewerd
