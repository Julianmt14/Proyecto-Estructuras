# Makefile para Simulador de Sistema Operativo

CXX = g++
CXXFLAGS = -std=c++11 -Wall -Wextra -I./src/cpp
TARGET = simulator
SRCDIR = src/cpp
SOURCES = $(SRCDIR)/main.cpp

all: $(TARGET)

$(TARGET): $(SOURCES)
	$(CXX) $(CXXFLAGS) $(SOURCES) -o $(TARGET)

clean:
	rm -f $(TARGET)

run: $(TARGET)
	./$(TARGET)

.PHONY: all clean run
