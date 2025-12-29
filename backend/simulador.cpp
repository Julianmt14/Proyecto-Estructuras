#include <iostream>
#include <vector>
#include <queue>
#include <stack>
#include <string>
#include <fstream>
#include <map>
#include <algorithm>

using namespace std;

// Estructura de Proceso
struct Proceso {
    int id;
    string nombre;
    string estado; // "Listo", "Ejecutando", "Finalizado"
    int prioridad;
    vector<Proceso*> hijos; // subprocesos
    
    Proceso(int _id, string _nombre, int _prioridad) 
        : id(_id), nombre(_nombre), estado("Listo"), prioridad(_prioridad) {}
};

// Clase SimuladorSO
class SimuladorSO {
private:
    vector<Proceso*> listaProcesos; // Lista enlazada (vector como implementación)
    queue<Proceso*> colaProcesos;   // Cola de procesos listos
    stack<string> pilaCPU;          // Pila de llamadas del CPU
    map<string, vector<string>> arbolProcesos; // Árbol de jerarquía
    int contadorID;
    
public:
    SimuladorSO() : contadorID(1) {}
    
    // Crear un proceso nuevo
    void crearProceso(string nombre, int prioridad) {
        Proceso* nuevo = new Proceso(contadorID++, nombre, prioridad);
        listaProcesos.push_back(nuevo);
        colaProcesos.push(nuevo);
        arbolProcesos[nombre] = vector<string>();
        cout << "Proceso '" << nombre << "' creado con ID " << nuevo->id << endl;
        exportarJSON();
    }
    
    // Agregar subproceso a un proceso existente
    void agregarSubproceso(string nombrePadre, string nombreHijo) {
        Proceso* padre = buscarProceso(nombrePadre);
        if (padre) {
            Proceso* hijo = new Proceso(contadorID++, nombreHijo, padre->prioridad);
            padre->hijos.push_back(hijo);
            listaProcesos.push_back(hijo);
            arbolProcesos[nombrePadre].push_back(nombreHijo);
            arbolProcesos[nombreHijo] = vector<string>();
            cout << "Subproceso '" << nombreHijo << "' agregado a '" << nombrePadre << "'" << endl;
            exportarJSON();
        }
    }
    
    // Ejecutar el siguiente proceso de la cola
    void ejecutarSiguiente() {
        if (!colaProcesos.empty()) {
            Proceso* proceso = colaProcesos.front();
            colaProcesos.pop();
            proceso->estado = "Ejecutando";
            pilaCPU.push(proceso->nombre + "()");
            cout << "Ejecutando: " << proceso->nombre << endl;
            exportarJSON();
        } else {
            cout << "No hay procesos en la cola" << endl;
        }
    }
    
    // Terminar un proceso (quitar de todas las estructuras)
    void terminarProceso(string nombre) {
        Proceso* proceso = buscarProceso(nombre);
        if (proceso) {
            proceso->estado = "Finalizado";
            
            // Remover de la pila si está allí
            stack<string> temp;
            while (!pilaCPU.empty()) {
                string top = pilaCPU.top();
                pilaCPU.pop();
                if (top != nombre + "()") {
                    temp.push(top);
                }
            }
            while (!temp.empty()) {
                pilaCPU.push(temp.top());
                temp.pop();
            }
            
            cout << "Proceso '" << nombre << "' finalizado" << endl;
            exportarJSON();
        }
    }
    
    // Buscar un proceso por nombre
    Proceso* buscarProceso(string nombre) {
        for (auto p : listaProcesos) {
            if (p->nombre == nombre) return p;
        }
        return nullptr;
    }
    
    // Exportar estado actual a JSON
    void exportarJSON() {
        ofstream archivo("../data/procesos.json");
        
        archivo << "{\n";
        
        // Procesos
        archivo << "  \"procesos\": [\n";
        for (size_t i = 0; i < listaProcesos.size(); i++) {
            Proceso* p = listaProcesos[i];
            archivo << "    {\"id\":" << p->id 
                   << ",\"nombre\":\"" << p->nombre 
                   << "\",\"estado\":\"" << p->estado 
                   << "\",\"prioridad\":" << p->prioridad << "}";
            if (i < listaProcesos.size() - 1) archivo << ",";
            archivo << "\n";
        }
        archivo << "  ],\n";
        
        // Cola
        archivo << "  \"cola\": [";
        queue<Proceso*> tempCola = colaProcesos;
        bool primero = true;
        while (!tempCola.empty()) {
            if (!primero) archivo << ",";
            archivo << "\"" << tempCola.front()->nombre << "\"";
            tempCola.pop();
            primero = false;
        }
        archivo << "],\n";
        
        // Pila
        archivo << "  \"pila\": [";
        stack<string> tempPila = pilaCPU;
        vector<string> pilaVector;
        while (!tempPila.empty()) {
            pilaVector.push_back(tempPila.top());
            tempPila.pop();
        }
        reverse(pilaVector.begin(), pilaVector.end());
        for (size_t i = 0; i < pilaVector.size(); i++) {
            if (i > 0) archivo << ",";
            archivo << "\"" << pilaVector[i] << "\"";
        }
        archivo << "],\n";
        
        // Árbol
        archivo << "  \"arbol\": {\n";
        bool first = true;
        for (auto& par : arbolProcesos) {
            if (!first) archivo << ",\n";
            archivo << "    \"" << par.first << "\": [";
            for (size_t i = 0; i < par.second.size(); i++) {
                if (i > 0) archivo << ",";
                archivo << "\"" << par.second[i] << "\"";
            }
            archivo << "]";
            first = false;
        }
        archivo << "\n  }\n";
        
        archivo << "}\n";
        archivo.close();
    }
    
    // Mostrar estado en consola
    void mostrarEstado() {
        cout << "\n=== ESTADO DEL SISTEMA ===" << endl;
        cout << "\nProcesos totales: " << listaProcesos.size() << endl;
        for (auto p : listaProcesos) {
            cout << "  [" << p->id << "] " << p->nombre 
                 << " - " << p->estado 
                 << " (Prioridad: " << p->prioridad << ")" << endl;
        }
        
        cout << "\nCola de procesos: ";
        queue<Proceso*> tempCola = colaProcesos;
        while (!tempCola.empty()) {
            cout << tempCola.front()->nombre << " ";
            tempCola.pop();
        }
        cout << endl;
        
        cout << "\nPila CPU: ";
        stack<string> tempPila = pilaCPU;
        while (!tempPila.empty()) {
            cout << tempPila.top() << " ";
            tempPila.pop();
        }
        cout << endl;
    }
    
    // Destructor
    ~SimuladorSO() {
        for (auto p : listaProcesos) {
            delete p;
        }
    }
};

// Función principal con menú interactivo
int main() {
    SimuladorSO simulador;
    int opcion;
    
    cout << "=== SIMULADOR DE SISTEMA OPERATIVO ===" << endl;
    
    do {
        cout << "\n--- MENU ---" << endl;
        cout << "1. Crear proceso" << endl;
        cout << "2. Agregar subproceso" << endl;
        cout << "3. Ejecutar siguiente proceso" << endl;
        cout << "4. Terminar proceso" << endl;
        cout << "5. Mostrar estado" << endl;
        cout << "6. Salir" << endl;
        cout << "Opcion: ";
        cin >> opcion;
        
        string nombre, nombrePadre;
        int prioridad;
        
        switch(opcion) {
            case 1:
                cout << "Nombre del proceso: ";
                cin >> nombre;
                cout << "Prioridad (1-5): ";
                cin >> prioridad;
                simulador.crearProceso(nombre, prioridad);
                break;
            case 2:
                cout << "Nombre del proceso padre: ";
                cin >> nombrePadre;
                cout << "Nombre del subproceso: ";
                cin >> nombre;
                simulador.agregarSubproceso(nombrePadre, nombre);
                break;
            case 3:
                simulador.ejecutarSiguiente();
                break;
            case 4:
                cout << "Nombre del proceso a terminar: ";
                cin >> nombre;
                simulador.terminarProceso(nombre);
                break;
            case 5:
                simulador.mostrarEstado();
                break;
            case 6:
                cout << "Saliendo..." << endl;
                break;
            default:
                cout << "Opcion invalida" << endl;
        }
    } while (opcion != 6);
    
    return 0;
}
