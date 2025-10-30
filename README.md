# 🖥️ Simulador de Sistema Operativo - Proyecto de Estructuras de Datos

Diseñar e implementar un simulador de sistema operativo que permita visualizar la gestión de procesos utilizando estructuras de datos clásicas como colas, pilas, listas y árboles, integrando una interfaz web dinámica desarrollada con HTML, CSS y JavaScript, y una lógica base en C++.

## 📋 Descripción del Proyecto

Este es un proyecto académico que demuestra el uso práctico de cuatro estructuras de datos fundamentales en ciencias de la computación, aplicadas a la simulación de componentes de un sistema operativo:

- **🔵 Cola (Queue)**: Planificador de procesos con política FIFO
- **🟢 Pila (Stack)**: Pila de llamadas de funciones (Call Stack)
- **🟡 Lista Enlazada**: Gestión dinámica de bloques de memoria
- **🟣 Árbol**: Sistema de archivos jerárquico

## ✨ Características

- ✅ Implementaciones completas en C++ con templates
- ✅ Interfaz web moderna y responsive
- ✅ Visualización interactiva en tiempo real
- ✅ Animaciones y transiciones suaves
- ✅ Panel de información con estadísticas
- ✅ Documentación completa en español
- ✅ Ejemplos de uso y casos prácticos

## 🚀 Inicio Rápido

### Backend (C++)

```bash
# Compilar
make

# Ejecutar
make run
```

### Frontend (Web)

1. **Opción 1**: Abrir directamente
   ```bash
   # Abrir src/frontend/index.html en tu navegador
   ```

2. **Opción 2**: Servidor local (recomendado)
   ```bash
   cd src/frontend
   python -m http.server 8000
   # Luego abrir http://localhost:8000
   ```

## 📁 Estructura del Proyecto

```
Proyecto-Estructuras/
├── src/
│   ├── cpp/                    # Backend C++
│   │   ├── queue.h            # Cola para scheduling
│   │   ├── stack.h            # Pila para call stack
│   │   ├── linkedlist.h       # Lista para memoria
│   │   ├── tree.h             # Árbol para archivos
│   │   └── main.cpp           # Programa de demostración
│   └── frontend/              # Frontend Web
│       ├── index.html         # Página principal
│       ├── css/
│       │   └── styles.css     # Estilos modernos
│       └── js/
│           ├── queue.js       # Lógica de cola
│           ├── stack.js       # Lógica de pila
│           ├── linkedlist.js  # Lógica de lista
│           ├── tree.js        # Lógica de árbol
│           └── main.js        # Navegación
├── docs/                      # Documentación
│   ├── GUIA_DE_USO.md        # Guía del usuario
│   └── DOCUMENTACION_TECNICA.md # Documentación técnica
├── Makefile                   # Build automation
└── README.md                  # Este archivo
```

## 🎯 Estructuras de Datos Implementadas

### 1. Cola (Queue) - Planificador de Procesos
- **Tipo**: FIFO (First In, First Out)
- **Uso**: Gestión de procesos en espera
- **Operaciones**: `enqueue()`, `dequeue()`, `peek()`

### 2. Pila (Stack) - Pila de Llamadas
- **Tipo**: LIFO (Last In, First Out)
- **Uso**: Gestión de llamadas de función
- **Operaciones**: `push()`, `pop()`, `peek()`

### 3. Lista Enlazada - Gestión de Memoria
- **Tipo**: Lista simplemente enlazada
- **Uso**: Asignación dinámica de memoria
- **Operaciones**: `insertFirst()`, `insertLast()`, `remove()`, `find()`

### 4. Árbol - Sistema de Archivos
- **Tipo**: Árbol n-ario
- **Uso**: Jerarquía de directorios y archivos
- **Operaciones**: `addChild()`, `removeNode()`, `findNode()`

## 🛠️ Requisitos

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

## 📖 Documentación

- **[Guía de Uso](docs/GUIA_DE_USO.md)**: Instrucciones detalladas para usuarios
- **[Documentación Técnica](docs/DOCUMENTACION_TECNICA.md)**: Detalles de implementación

## 🎮 Cómo Usar

### Interfaz Web

1. **Navegación**: Use los botones en la barra superior o atajos de teclado (Ctrl+1 a Ctrl+4)
2. **Controles**: Cada sección tiene controles específicos para agregar, eliminar y modificar elementos
3. **Visualización**: Los cambios se reflejan en tiempo real en el área de visualización
4. **Información**: El panel inferior muestra estadísticas actualizadas

### Ejemplos

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
3. Note el orden LIFO
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

La interfaz presenta:
- ✨ Diseño moderno con gradientes
- 🎯 Visualizaciones claras de cada estructura
- 📊 Paneles informativos con estadísticas
- 🔄 Animaciones suaves en las transiciones
- 📱 Diseño responsive para todos los dispositivos

## 🧪 Testing

### Pruebas del Backend
```bash
make run
# Verifica la salida de consola
```

### Pruebas del Frontend
1. Abrir `index.html` en navegador
2. Probar cada operación en cada estructura
3. Verificar consola del navegador (F12)

## 📚 Conceptos Aprendidos

Este proyecto demuestra:
- ✅ Implementación de estructuras de datos fundamentales
- ✅ Manejo de memoria dinámica en C++
- ✅ Templates en C++
- ✅ Manipulación del DOM con JavaScript
- ✅ Diseño web responsive
- ✅ Aplicación práctica de algoritmos

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
