# Simulador de Sistema Operativo - Implementación de Estructuras de Datos

Proyecto profesional que implementa estructuras de datos fundamentales (colas, pilas, listas enlazadas y árboles) aplicadas a la simulación de componentes críticos de un sistema operativo, con interfaz web interactiva y backend en C++.

## Descripción del Proyecto

Simulador de sistema operativo que demuestra la aplicación práctica de cuatro estructuras de datos fundamentales en ciencias de la computación: 

- **Cola (Queue)**: Planificador de procesos con política FIFO
- **Pila (Stack)**: Pila de llamadas de funciones (Call Stack)
- **Lista Enlazada**: Gestión dinámica de bloques de memoria
- **Árbol**: Sistema de archivos jerárquico

## Características Técnicas

- Implementaciones completas en C++ con templates y operaciones O(1) donde es aplicable
- Visualización en tiempo real de estructuras de datos
- Interfaz web responsive con diseño moderno
- Sistema de logs y monitoreo en tiempo real
- Documentación técnica completa con análisis de complejidad
- Build automation con Makefile
- Código limpio con estándares C++11

## Instalación y Ejecución

### Frontend - Interfaz Web

Abrir directamente en navegador:
```bash
cd src/frontend
# Abrir index.html en navegador
```

Con servidor HTTP:
```bash
cd src/frontend
python -m http.server 8000
# Acceder a http://localhost:8000
```

### Backend - C++ con Makefile

```bash
# Compilar
make

# Ejecutar demostración
make run

# Limpiar archivos compilados
make clean
```

### Backend - Compilación Manual

```bash
cd backend
g++ -o simulador simulador.cpp -std=c++11
./simulador
```

## Estructura del Proyecto

```
├── src/
│   ├── cpp/                    # Backend C++ modular
│   │   ├── queue.h            # Implementación de cola
│   │   ├── stack.h            # Implementación de pila
│   │   ├── linkedlist.h       # Implementación de lista enlazada
│   │   ├── tree.h             # Implementación de árbol
│   │   └── main.cpp           # Programa de demostración
│   └── frontend/              # Frontend Web
│       ├── index.html         # Página principal
│       ├── css/
│       │   └── styles.css     # Estilos
│       └── js/
│           ├── queue.js       # Lógica de cola
│           ├── stack.js       # Lógica de pila
│           ├── linkedlist.js  # Lógica de lista
│           ├── tree.js        # Lógica de árbol
│           └── main.js        # Controlador principal
├── backend/                   # Implementación original C++
│   └── simulador.cpp
├── frontend/                  # Interfaz web original
│   ├── index.html
│   ├── style.css
│   └── script.js
├── docs/                      # Documentación técnica
│   ├── GUIA_DE_USO.md
│   └── DOCUMENTACION_TECNICA.md
├── Makefile                   # Build automation
└── README.md
```

## Estructuras de Datos Implementadas

### 1. Cola (Queue) - Planificador de Procesos
- **Tipo**: FIFO (First In, First Out)
- **Aplicación**: Gestión de procesos en espera
- **Operaciones**: `enqueue()`, `dequeue()`, `peek()`
- **Complejidad**: O(1) para todas las operaciones

### 2. Pila (Stack) - Pila de Llamadas
- **Tipo**: LIFO (Last In, First Out)
- **Aplicación**: Gestión de llamadas de función con simulación de recursión
- **Operaciones**: `push()`, `pop()`, `peek()`
- **Complejidad**: O(1) para todas las operaciones

### 3. Lista Enlazada - Gestión de Memoria
- **Tipo**: Lista simplemente enlazada
- **Aplicación**: Asignación dinámica de bloques de memoria
- **Operaciones**: `insertFirst()`, `insertLast()`, `remove()`, `find()`
- **Complejidad**: O(1) para inserción, O(n) para búsqueda

### 4. Árbol - Sistema de Archivos
- **Tipo**: Árbol n-ario
- **Aplicación**: Jerarquía de directorios y archivos
- **Operaciones**: `addChild()`, `removeNode()`, `findNode()`
- **Complejidad**: O(n) para búsqueda, O(1) para inserción

## Requisitos Técnicos

### Backend
- Compilador C++ compatible con C++11 o superior
  - g++ 4.8+
  - clang 3.4+
  - MSVC 2015+
- Make (opcional)

### Frontend
- Navegador web moderno:
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+

## Documentación

- **[Guía de Uso](docs/GUIA_DE_USO.md)**: Instrucciones detalladas de operación
- **[Documentación Técnica](docs/DOCUMENTACION_TECNICA.md)**: Análisis de implementación y complejidad algorítmica
- **[Instalación](INSTALACION.md)**: Guía completa de instalación y configuración

## Guía de Uso

### Interfaz Web

1. **Navegación**: Utilizar botones superiores o atajos de teclado (Ctrl+1 a Ctrl+4)
2. **Controles**: Cada módulo incluye controles específicos para gestión de elementos
3. **Visualización**: Actualización en tiempo real del estado de las estructuras
4. **Monitoreo**: Panel de estadísticas y logs del sistema

### Ejemplos de Operaciones

#### Cola - Gestión de Procesos
```
1. Ingresar nombre del proceso
2. Asignar prioridad
3. Definir tiempo de ejecución
4. Agregar a cola
5. Ejecutar proceso (FIFO)
```

#### Pila - Simulación de Call Stack
```
1. Ejecutar simulación de recursión
2. Observar apilamiento de llamadas
3. Verificar orden LIFO en desapilamiento
```

#### Lista Enlazada - Gestión de Memoria
```
1. Seleccionar bloque de memoria
2. Asignar o liberar bloque
3. Visualizar fragmentación y disponibilidad
```

#### Árbol - Sistema de Archivos
```
1. Seleccionar nodo padre
2. Definir nombre del nuevo elemento
3. Especificar tipo (Directorio/Archivo)
4. Agregar a jerarquía
```

## Capturas de Pantalla

### Cola - Planificación de Procesos
![Queue](https://github.com/user-attachments/assets/f87640fb-78d3-445f-8f44-2f8ba4702f96)

### Pila - Call Stack con Recursión
![Stack](https://github.com/user-attachments/assets/d4adbfeb-948d-4014-bcf7-be328fce35ce)

### Lista Enlazada - Gestión de Memoria
![LinkedList](https://github.com/user-attachments/assets/54a028a6-cf01-4e0d-9327-5a7be2562571)

### Árbol - Sistema de Archivos
![Tree](https://github.com/user-attachments/assets/05172bd5-dd9e-4e3e-baee-c875f982300f)

## Testing y Validación

### Pruebas Backend
```bash
make run
# Verificar salida de consola para validar operaciones
```

### Pruebas Frontend
1. Abrir interfaz web en navegador
2. Ejecutar operaciones en cada módulo
3. Validar logs en consola del navegador (F12)

## Conceptos Técnicos Demostrados

- Implementación de estructuras de datos fundamentales
- Manejo de memoria dinámica en C++
- Templates genéricos y programación orientada a objetos
- Manipulación del DOM con JavaScript
- Diseño web responsive
- Análisis de complejidad algorítmica
- Build automation y gestión de dependencias

## Stack Tecnológico

- **Backend**: C++ (C++11 o superior)
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Formato de Datos**: JSON
- **Build System**: Make

## Licencia

Proyecto académico con fines educativos - 2025

---

**Proyecto desarrollado para demostrar competencias en estructuras de datos, algoritmos y desarrollo full-stack.**