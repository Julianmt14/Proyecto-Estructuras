#include <iostream>
#include <string>
#include "queue.h"
#include "stack.h"
#include "linkedlist.h"
#include "tree.h"

using namespace std;

void demonstrateQueue() {
    cout << "\n========== COLA (QUEUE) - Planificador de Procesos ==========\n";
    
    Queue<Process> processQueue;
    
    // Agregar procesos a la cola
    processQueue.enqueue(Process(1, "Chrome", 1, 5));
    processQueue.enqueue(Process(2, "Firefox", 2, 3));
    processQueue.enqueue(Process(3, "VSCode", 1, 4));
    processQueue.enqueue(Process(4, "Spotify", 3, 2));
    
    cout << "Procesos en cola de espera: " << processQueue.getSize() << endl;
    
    // Simular ejecución de procesos
    while (!processQueue.isEmpty()) {
        Process current = processQueue.dequeue();
        cout << "Ejecutando proceso: " << current.name 
             << " (ID: " << current.id 
             << ", Priority: " << current.priority 
             << ", Burst Time: " << current.burstTime << ")" << endl;
    }
    
    cout << "Todos los procesos han sido ejecutados.\n";
}

void demonstrateStack() {
    cout << "\n========== PILA (STACK) - Pila de Llamadas ==========\n";
    
    Stack<FunctionCall> callStack;
    
    // Simular llamadas de funciones
    cout << "Iniciando programa...\n";
    callStack.push(FunctionCall(1, "main", "()", 1));
    cout << "  -> Llamando a main()\n";
    
    callStack.push(FunctionCall(2, "processData", "(data)", 5));
    cout << "  -> Llamando a processData(data)\n";
    
    callStack.push(FunctionCall(3, "validateInput", "(input)", 12));
    cout << "  -> Llamando a validateInput(input)\n";
    
    callStack.push(FunctionCall(4, "checkFormat", "(format)", 20));
    cout << "  -> Llamando a checkFormat(format)\n";
    
    cout << "\nPila de llamadas actual (tamaño: " << callStack.getSize() << "):\n";
    cout << callStack.toString() << endl;
    
    cout << "\nRetornando de funciones...\n";
    while (!callStack.isEmpty()) {
        FunctionCall call = callStack.pop();
        cout << "  <- Retornando de " << call.name << "()\n";
    }
}

void demonstrateLinkedList() {
    cout << "\n========== LISTA ENLAZADA - Gestión de Memoria ==========\n";
    
    LinkedList<MemoryBlock> memoryList;
    
    // Inicializar bloques de memoria
    cout << "Inicializando 4 bloques de memoria:\n";
    memoryList.insertLast(MemoryBlock(1, 256, false));
    memoryList.insertLast(MemoryBlock(2, 512, false));
    memoryList.insertLast(MemoryBlock(3, 128, false));
    memoryList.insertLast(MemoryBlock(4, 1024, false));
    
    cout << "Lista de memoria: " << memoryList.toString() << endl;
    cout << "Bloques disponibles: " << memoryList.getSize() << endl;
    
    // Asignar memoria
    cout << "\nAsignando memoria...\n";
    ListNode<MemoryBlock>* block = memoryList.find(2);
    if (block != nullptr) {
        block->data.allocated = true;
        block->data.owner = "Chrome";
        cout << "  Bloque 2 (512 KB) asignado a Chrome\n";
    }
    
    block = memoryList.find(4);
    if (block != nullptr) {
        block->data.allocated = true;
        block->data.owner = "VSCode";
        cout << "  Bloque 4 (1024 KB) asignado a VSCode\n";
    }
    
    // Mostrar estado actual
    cout << "\nEstado de memoria:\n";
    ListNode<MemoryBlock>* current = memoryList.getHead();
    while (current != nullptr) {
        cout << "  Bloque " << current->data.id 
             << " (" << current->data.size << " KB): "
             << (current->data.allocated ? "Asignado a " + current->data.owner : "Libre")
             << endl;
        current = current->next;
    }
    
    // Liberar memoria
    cout << "\nLiberando bloque 2...\n";
    block = memoryList.find(2);
    if (block != nullptr) {
        block->data.allocated = false;
        block->data.owner = "";
    }
    cout << "Bloque 2 liberado.\n";
}

void demonstrateTree() {
    cout << "\n========== ÁRBOL - Sistema de Archivos ==========\n";
    
    // Crear sistema de archivos
    Tree fileSystem(FileNode(1, "root", "directory"));
    
    cout << "Creando estructura de directorios...\n";
    
    // Agregar directorios principales
    TreeNode* home = fileSystem.addChild(1, FileNode(2, "home", "directory"));
    TreeNode* usr = fileSystem.addChild(1, FileNode(3, "usr", "directory"));
    TreeNode* var = fileSystem.addChild(1, FileNode(4, "var", "directory"));
    
    // Agregar subdirectorios y archivos en home
    if (home != nullptr) {
        TreeNode* user = fileSystem.addChild(home->data.id, FileNode(5, "user", "directory"));
        if (user != nullptr) {
            fileSystem.addChild(user->data.id, FileNode(6, "documents.txt", "file", 150));
            fileSystem.addChild(user->data.id, FileNode(7, "photos.jpg", "file", 2048));
            TreeNode* projects = fileSystem.addChild(user->data.id, FileNode(8, "projects", "directory"));
            if (projects != nullptr) {
                fileSystem.addChild(projects->data.id, FileNode(9, "app.cpp", "file", 45));
                fileSystem.addChild(projects->data.id, FileNode(10, "readme.md", "file", 12));
            }
        }
    }
    
    // Agregar en usr
    if (usr != nullptr) {
        fileSystem.addChild(usr->data.id, FileNode(11, "bin", "directory"));
        fileSystem.addChild(usr->data.id, FileNode(12, "lib", "directory"));
    }
    
    // Agregar en var
    if (var != nullptr) {
        fileSystem.addChild(var->data.id, FileNode(13, "log", "directory"));
    }
    
    cout << "\nEstructura del sistema de archivos:\n";
    cout << fileSystem.toString() << endl;
    cout << "Total de nodos: " << fileSystem.getNodeCount() << endl;
}

int main() {
    cout << "===============================================\n";
    cout << "  SIMULADOR DE SISTEMA OPERATIVO\n";
    cout << "  Demostración de Estructuras de Datos\n";
    cout << "===============================================\n";
    
    demonstrateQueue();
    demonstrateStack();
    demonstrateLinkedList();
    demonstrateTree();
    
    cout << "\n===============================================\n";
    cout << "  Demostración completada\n";
    cout << "===============================================\n";
    
    return 0;
}
