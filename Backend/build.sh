#!/bin/bash

cd ./src/include
g++ -std=c++11 -c ./*.cpp
cd ../
g++ -std=c++11 -c ./query.cpp -o ./query.o -lfl
g++ ./include/*.o ./query.o -o ../query -lfl
