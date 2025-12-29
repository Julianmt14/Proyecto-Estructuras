# 🖥️ Proyecto-Estructuras: Simulador de Sistema Operativo

Proyecto académico que demuestra el uso práctico de estructuras de datos clásicas (colas, pilas, listas enlazadas y árboles) aplicadas a la simulación de componentes de un sistema operativo, con una interfaz visual moderna y funcional.

## 📋 Descripción del Proyecto

Este proyecto académico demuestra el uso práctico de cuatro estructuras de datos fundamentales en ciencias de la computación, aplicadas a la simulación de componentes de un sistema operativo:

- **🔵 Cola (Queue)**: Planificador de procesos con política FIFO
- **🟢 Pila (Stack)**: Pila de llamadas de funciones (Call Stack)
- **🟡 Lista Enlazada**: Gestión dinámica de bloques de memoria
- **🟣 Árbol**: Sistema de archivos jerárquico

## ✨ Características

- ✅ **Implementaciones completas en C++** con templates y O(1) operations donde es aplicable
- ✅ **Visualización animada** de estructuras de datos
- ✅ **Interfaz web moderna** y responsive con tema oscuro y colores neón
- ✅ **Modo demo funcional** sin necesidad del backend
- ✅ **Sistema de logs** en tiempo real
- ✅ **Completamente interactivo** con controles intuitivos
- ✅ **Documentación completa** en español con análisis de complejidad
- ✅ **Atajos de teclado** (Ctrl+1-4) para navegación rápida
- ✅ **Build automation** con Makefile

## 🚀 Inicio Rápido

### Opción 1: Interfaz Web Avanzada (Recomendado)

La implementación avanzada con modularidad mejorada:

```bash
# Abrir directamente
cd src/frontend
# Doble clic en index.html
```

O con servidor HTTP:
```bash
cd src/frontend
python -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

### Opción 2: Interfaz Web Original

```bash
# Abre el archivo directamente en tu navegador
cd frontend
# Doble clic en index.html
```

O con servidor HTTP:
```bash
cd frontend
python3 -m http.server 8080
# Abre http://localhost:8080 en tu navegador
```

### Opción 3: Backend C++ con Makefile (Implementación Avanzada)

```bash
# Compilar
make

# Ejecutar demo
make run

# Limpiar archivos compilados
make clean
```

### Opción 4: Backend C++ Original

```bash
# Compilar
cd backend
g++ -o simulador simulador.cpp -std=c++11

# Ejecutar
./simulador
```
## 📁 Estructura del Proyecto

Este proyecto contiene dos implementaciones complementarias:

### Implementación Avanzada (src/)
```
src/
├── cpp/                    # Backend C++ modular
│   ├── queue.h            # Cola para scheduling
│   ├── stack.h            # Pila para call stack
│   ├── linkedlist.h       # Lista para memoria
│   ├── tree.h             # Árbol para archivos
│   └── main.cpp           # Programa de demostración
└── frontend/              # Frontend Web moderno
    ├── index.html         # Página principal
    ├── css/
    │   └── styles.css     # Estilos modernos
    └── js/
        ├── queue.js       # Lógica de cola
        ├── stack.js       # Lógica de pila
        ├── linkedlist.js  # Lógica de lista
        ├── tree.js        # Lógica de árbol
        └── main.js        # Navegación
```

### Implementación Original (backend/ & frontend/)
```
├── backend/          # Lógica en C++
│   └── simulador.cpp
├── frontend/         # Interfaz web
│   ├── index.html
│   ├── style.css
│   └── script.js
└── data/             # Datos JSON
    └── procesos.json
```

### Documentación y Build
```
├── docs/                      # Documentación completa
│   ├── GUIA_DE_USO.md        # Guía del usuario
│   └── DOCUMENTACION_TECNICA.md # Documentación técnica
├── Makefile                   # Build automation
├── INSTALACION.md            # Guía de instalación
├── GUIA_RAPIDA.md            # Guía rápida original
├── README_PROYECTO.md        # Documentación del proyecto original
└── README.md                  # Este archivo
```

## 🎯 Estructuras de Datos Implementadas

### 1. Cola (Queue) - Planificador de Procesos
- **Tipo**: FIFO (First In, First Out)
- **Uso**: Gestión de procesos en espera
- **Operaciones**: `enqueue()`, `dequeue()`, `peek()`
- **Complejidad**: O(1) para todas las operaciones

### 2. Pila (Stack) - Pila de Llamadas
- **Tipo**: LIFO (Last In, First Out)
- **Uso**: Gestión de llamadas de función con demo de recursión
- **Operaciones**: `push()`, `pop()`, `peek()`
- **Complejidad**: O(1) para todas las operaciones

### 3. Lista Enlazada - Gestión de Memoria
- **Tipo**: Lista simplemente enlazada
- **Uso**: Asignación dinámica de bloques de memoria
- **Operaciones**: `insertFirst()`, `insertLast()`, `remove()`, `find()`
- **Complejidad**: O(1) para inserción, O(n) para búsqueda

### 4. Árbol - Sistema de Archivos
- **Tipo**: Árbol n-ario
- **Uso**: Jerarquía de directorios y archivos
- **Operaciones**: `addChild()`, `removeNode()`, `findNode()`
- **Complejidad**: O(n) para búsqueda, O(1) para inserción

## 🛠️ Requisitos

### Backend
- Compilador C++ compatible con C++11 o superior
  - g++ 4.8+
  - clang 3.4+
  - MSVC 2015+
- Make (opcional)
- Compila limpiamente con `-Wall -Wextra -Wpedantic`

### Frontend
- Navegador web moderno:
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+

## 📖 Documentación

### Documentación Avanzada
- **[Guía de Uso](docs/GUIA_DE_USO.md)**: Instrucciones detalladas para usuarios
- **[Documentación Técnica](docs/DOCUMENTACION_TECNICA.md)**: Detalles de implementación y análisis de complejidad
- **[Instalación](INSTALACION.md)**: Guía completa de instalación

### Documentación Original
- **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)**: Tutorial paso a paso para usar el simulador
- **[README_PROYECTO.md](README_PROYECTO.md)**: Documentación técnica completa del proyecto

## 🎮 Cómo Usar

### Interfaz Web

1. **Navegación**: Use los botones en la barra superior o atajos de teclado (Ctrl+1 a Ctrl+4)
2. **Controles**: Cada sección tiene controles específicos para agregar, eliminar y modificar elementos
3. **Visualización**: Los cambios se reflejan en tiempo real en el área de visualización
4. **Información**: El panel inferior muestra estadísticas actualizadas

### Ejemplos Prácticos

#### Cola - Agregar procesos
```
1. Ingrese nombre: "Chrome"
2. Prioridad: 1
3. Tiempo: 5
4. Click "Agregar Proceso"
5. Click "Ejecutar Proceso" para procesarlo
```

#### Pila - Simular recursión
```
1. Click "Simular Recursión"
2. Observe cómo se apilan las llamadas
3. Note el orden LIFO al desapilar
```

#### Lista Enlazada - Gestionar memoria
```
1. Click en un bloque para seleccionarlo
2. Click "Asignar Memoria" para asignarlo
3. Click "Liberar Memoria" para liberarlo
```

#### Árbol - Crear estructura
```
1. Click en un directorio
2. Ingrese nombre del nuevo nodo
3. Seleccione tipo (Directorio/Archivo)
4. Click "Agregar Nodo"
```

## 🎨 Capturas de Pantalla

### Vista Previa del Simulador Original
![Simulador de Sistema Operativo](https://github.com/user-attachments/assets/57170c37-452a-42f2-af54-59ffc236207f)

### Implementación Avanzada

#### Queue - Process Scheduling
![Queue](https://github.com/user-attachments/assets/f87640fb-78d3-445f-8f44-2f8ba4702f96)

#### Stack - Call Stack with Recursion
![Stack](https://github.com/user-attachments/assets/d4adbfeb-948d-4014-bcf7-be328fce35ce)

#### LinkedList - Memory Management
![LinkedList](https://github.com/user-attachments/assets/54a028a6-cf01-4e0d-9327-5a7be2562571)

#### Tree - File System Hierarchy
![Tree](https://github.com/user-attachments/assets/05172bd5-dd9e-4e3e-baee-c875f982300f)

La interfaz presenta:
- ✨ Diseño moderno con gradientes y colores neón
- 🎯 Visualizaciones claras de cada estructura
- 📊 Paneles informativos con estadísticas en tiempo real
- 🔄 Animaciones suaves en las transiciones
- 📱 Diseño responsive para todos los dispositivos

## 🧪 Testing

### Pruebas del Backend Avanzado
```bash
make run
# Verifica la salida de consola para cada estructura
```

### Pruebas del Backend Original
```bash
cd backend
./simulador
```

### Pruebas del Frontend
1. Abrir `src/frontend/index.html` o `frontend/index.html` en navegador
2. Probar cada operación en cada estructura
3. Verificar consola del navegador (F12) para logs

## 📚 Conceptos Demostrados

Este proyecto demuestra:
- ✅ Implementación de estructuras de datos fundamentales
- ✅ Manejo de memoria dinámica en C++
- ✅ Templates genéricos en C++
- ✅ Manipulación del DOM con JavaScript puro
- ✅ Diseño web responsive y moderno
- ✅ Aplicación práctica de algoritmos
- ✅ Análisis de complejidad temporal
- ✅ Build automation con Makefile

## 🛠️ Tecnologías

- C++ (Backend - C++11 o superior)
- HTML5 + CSS3 + JavaScript (Frontend)
- JSON (Intercambio de datos)
- Make (Build automation)

## 🤝 Contribuciones

Este es un proyecto académico. Las contribuciones son bienvenidas para:
- Mejoras en la documentación
- Corrección de errores
- Optimizaciones de rendimiento
- Nuevas características

## 📝 Licencia

Proyecto académico con fines educativos - Universidad 2025

## 👥 Autores

Proyecto de Estructuras de Datos - Curso Académico

## 🙏 Agradecimientos

- A los profesores del curso de Estructuras de Datos
- A la comunidad de desarrolladores por las referencias
- A todos los que contribuyen al aprendizaje de la programación

---

**💡 Nota**: Este proyecto fue creado con fines educativos para demostrar el uso práctico de estructuras de datos clásicas en el contexto de sistemas operativos.

**Desarrollado como proyecto académico de Estructuras de Datos**
