# 🔧 Documentación Técnica - Simulador de Sistema Operativo

## Arquitectura del Sistema

### Visión General

El proyecto está dividido en dos componentes principales:

1. **Backend (C++)**: Implementación de estructuras de datos en C++
2. **Frontend (Web)**: Interfaz visual en HTML/CSS/JavaScript

```
Proyecto-Estructuras/
├── src/
│   ├── cpp/                 # Backend C++
│   │   ├── queue.h         # Implementación de Cola
│   │   ├── stack.h         # Implementación de Pila
│   │   ├── linkedlist.h    # Implementación de Lista Enlazada
│   │   ├── tree.h          # Implementación de Árbol
│   │   └── main.cpp        # Programa principal de demostración
│   └── frontend/           # Frontend Web
│       ├── index.html      # Página principal
│       ├── css/
│       │   └── styles.css  # Estilos
│       └── js/
│           ├── queue.js    # Lógica de Cola
│           ├── stack.js    # Lógica de Pila
│           ├── linkedlist.js # Lógica de Lista Enlazada
│           ├── tree.js     # Lógica de Árbol
│           └── main.js     # Navegación y utilidades
├── docs/                   # Documentación
├── Makefile               # Compilación automatizada
└── README.md             # Descripción del proyecto
```

## Implementaciones C++

### 1. Cola (Queue) - queue.h

**Estructura de Proceso**:
```cpp
struct Process {
    int id;
    std::string name;
    int priority;
    int burstTime;
    std::string state;
};
```

**Nodo de Cola**:
```cpp
template<typename T>
struct QueueNode {
    T data;
    QueueNode* next;
};
```

**Clase Queue**:
- **Complejidad temporal**:
  - `enqueue()`: O(1)
  - `dequeue()`: O(1)
  - `peek()`: O(1)
- **Complejidad espacial**: O(n) donde n es el número de elementos

**Métodos principales**:
- `enqueue(T data)`: Agrega elemento al final
- `dequeue()`: Remueve elemento del frente
- `peek()`: Retorna elemento del frente sin removerlo
- `isEmpty()`: Verifica si está vacía
- `getSize()`: Retorna número de elementos

### 2. Pila (Stack) - stack.h

**Estructura de Llamada de Función**:
```cpp
struct FunctionCall {
    int id;
    std::string name;
    std::string params;
    int lineNumber;
};
```

**Nodo de Pila**:
```cpp
template<typename T>
struct StackNode {
    T data;
    StackNode* next;
};
```

**Clase Stack**:
- **Complejidad temporal**:
  - `push()`: O(1)
  - `pop()`: O(1)
  - `peek()`: O(1)
- **Complejidad espacial**: O(n)

**Métodos principales**:
- `push(T data)`: Agrega elemento al tope
- `pop()`: Remueve y retorna elemento del tope
- `peek()`: Retorna elemento del tope sin removerlo
- `isEmpty()`: Verifica si está vacía
- `getSize()`: Retorna número de elementos

### 3. Lista Enlazada - linkedlist.h

**Estructura de Bloque de Memoria**:
```cpp
struct MemoryBlock {
    int id;
    int size;
    bool allocated;
    std::string owner;
};
```

**Nodo de Lista**:
```cpp
template<typename T>
struct ListNode {
    T data;
    ListNode* next;
};
```

**Clase LinkedList**:
- **Complejidad temporal**:
  - `insertFirst()`: O(1)
  - `insertLast()`: O(n)
  - `removeFirst()`: O(1)
  - `find()`: O(n)
  - `remove()`: O(n)
- **Complejidad espacial**: O(n)

**Métodos principales**:
- `insertFirst(T data)`: Inserta al inicio
- `insertLast(T data)`: Inserta al final
- `removeFirst()`: Remueve primer elemento
- `find(int id)`: Busca nodo por ID
- `remove(int id)`: Remueve nodo por ID

### 4. Árbol - tree.h

**Estructura de Nodo de Archivo**:
```cpp
struct FileNode {
    int id;
    std::string name;
    std::string type;  // "file" o "directory"
    int size;
};
```

**Nodo de Árbol**:
```cpp
struct TreeNode {
    FileNode data;
    std::vector<TreeNode*> children;
    TreeNode* parent;
};
```

**Clase Tree**:
- **Complejidad temporal**:
  - `findNode()`: O(n)
  - `addChild()`: O(n) por búsqueda + O(1) inserción
  - `removeNode()`: O(n)
- **Complejidad espacial**: O(n)

**Métodos principales**:
- `findNode(int id)`: Busca nodo por ID
- `addChild(int parentId, FileNode data)`: Agrega hijo a un nodo
- `removeNode(int id)`: Elimina nodo y sus hijos
- `getNodeCount()`: Retorna número total de nodos

## Implementaciones JavaScript

### Arquitectura Frontend

El frontend usa JavaScript vanilla (sin frameworks) para demostrar las estructuras de datos de forma pura.

### 1. Queue (queue.js)

**Clase ProcessQueue**:
```javascript
class ProcessQueue {
    constructor() {
        this.items = [];        // Array para almacenar procesos
        this.processId = 1;     // ID autoincremental
    }
}
```

**Características**:
- Usa array de JavaScript como backing store
- Renderización dinámica en el DOM
- Actualización de información en tiempo real

### 2. Stack (stack.js)

**Clase CallStack**:
```javascript
class CallStack {
    constructor() {
        this.items = [];
        this.callId = 1;
    }
}
```

**Características**:
- Implementación LIFO pura
- Simulación de recursión
- Visualización de arriba hacia abajo

### 3. LinkedList (linkedlist.js)

**Clase MemoryLinkedList**:
```javascript
class MemoryLinkedList {
    constructor() {
        this.head = null;
        this.blockId = 1;
    }
}
```

**Características**:
- Implementación con punteros (referencias)
- Gestión de selección de nodos
- Cálculo dinámico de estadísticas

### 4. Tree (tree.js)

**Clase FileSystemTree**:
```javascript
class FileSystemTree {
    constructor() {
        this.root = { /* nodo raíz */ };
        this.nodeId = 2;
        this.selectedNode = this.root;
    }
}
```

**Características**:
- Estructura recursiva
- Renderización jerárquica
- Selección de nodos interactiva

## Estilos CSS

### Variables CSS
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --success-color: #27ae60;
    --warning-color: #f39c12;
    --danger-color: #e74c3c;
}
```

### Características del Diseño

1. **Responsive Design**: Adaptable a diferentes tamaños de pantalla
2. **Animaciones**: Transiciones suaves con CSS animations
3. **Gradientes**: Fondo con gradiente moderno
4. **Sombras**: Box shadows para profundidad
5. **Hover Effects**: Interacciones visuales claras

## Compilación y Ejecución

### Backend (C++)

**Makefile**:
```makefile
CXX = g++
CXXFLAGS = -std=c++11 -Wall -Wextra -I./src/cpp
TARGET = simulator
```

**Comandos**:
- `make`: Compila el proyecto
- `make run`: Compila y ejecuta
- `make clean`: Limpia archivos compilados

### Frontend (Web)

No requiere compilación. Opciones de ejecución:

1. **Archivo local**: Abrir `index.html` directamente
2. **Servidor HTTP simple**:
   ```bash
   python -m http.server 8000
   ```
3. **Live Server** (VS Code extension)

## Patrones de Diseño Utilizados

### 1. Template Pattern (C++)
Las clases Queue, Stack y LinkedList usan templates para ser genéricas.

### 2. Factory Pattern (JavaScript)
Creación de objetos Process, FunctionCall, MemoryBlock, FileNode.

### 3. Observer Pattern (JavaScript)
Los cambios en las estructuras de datos actualizan automáticamente la UI.

### 4. Singleton Pattern (JavaScript)
Instancias globales únicas de cada estructura de datos.

## Mejoras Futuras

### Backend
- [ ] Implementar versiones thread-safe
- [ ] Agregar serialización/deserialización
- [ ] Implementar algoritmos de búsqueda más avanzados
- [ ] Agregar unit tests

### Frontend
- [ ] Conexión real con el backend C++ (WebAssembly)
- [ ] Animaciones más elaboradas
- [ ] Modo oscuro
- [ ] Exportar/importar configuraciones
- [ ] Tutorial interactivo

## Testing

### Manual Testing

**Backend**:
```bash
make run
# Verificar salida de consola
```

**Frontend**:
1. Abrir `index.html` en navegador
2. Probar cada operación en cada estructura
3. Verificar consola del navegador para errores

### Unit Testing (Futuro)
- C++: Google Test
- JavaScript: Jest o Mocha

## Performance

### Backend (C++)
- **Memoria**: Asignación dinámica eficiente
- **Velocidad**: Operaciones en O(1) o O(n) según necesidad
- **Compilación**: Optimización con `-O2` o `-O3`

### Frontend (JavaScript)
- **Renderizado**: DOM manipulation eficiente
- **Memoria**: Garbage collection automática de JavaScript
- **Responsividad**: Event listeners optimizados

## Compatibilidad

### Backend
- **SO**: Linux, macOS, Windows (con MinGW)
- **Compiladores**: g++ 4.8+, clang 3.4+, MSVC 2015+

### Frontend
- **Navegadores**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Dispositivos**: Desktop, Tablet, Mobile

## Referencias

- [C++ Documentation](https://en.cppreference.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Data Structures and Algorithms](https://www.geeksforgeeks.org/data-structures/)

## Licencia

Este es un proyecto académico para fines educativos.
