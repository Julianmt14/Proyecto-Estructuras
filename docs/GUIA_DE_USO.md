# 📘 Guía de Uso - Simulador de Sistema Operativo

## Índice
1. [Introducción](#introducción)
2. [Instalación](#instalación)
3. [Estructuras de Datos](#estructuras-de-datos)
4. [Interfaz Web](#interfaz-web)
5. [Ejemplos de Uso](#ejemplos-de-uso)

## Introducción

Este proyecto es un simulador académico de sistema operativo que demuestra el uso de cuatro estructuras de datos clásicas:
- **Cola (Queue)**: Planificación de procesos
- **Pila (Stack)**: Pila de llamadas de funciones
- **Lista Enlazada**: Gestión de memoria
- **Árbol**: Sistema de archivos jerárquico

## Instalación

### Backend (C++)

1. **Requisitos**:
   - Compilador C++ compatible con C++11 (g++, clang, etc.)
   - Make (opcional, pero recomendado)

2. **Compilación**:
   ```bash
   # Con Make
   make

   # O manualmente
   g++ -std=c++11 -Wall -Wextra -I./src/cpp src/cpp/main.cpp -o simulator
   ```

3. **Ejecución**:
   ```bash
   # Con Make
   make run

   # O directamente
   ./simulator
   ```

### Frontend (HTML/CSS/JavaScript)

1. **Abrir en el navegador**:
   - Abra el archivo `src/frontend/index.html` en su navegador web preferido
   - No requiere servidor web (funciona con file://)
   - Para mejor experiencia, use un servidor local:
     ```bash
     # Con Python 3
     cd src/frontend
     python -m http.server 8000
     
     # Luego abra http://localhost:8000
     ```

## Estructuras de Datos

### 1. Cola (Queue) - Planificador de Procesos

**Concepto**: FIFO (First In, First Out) - El primer elemento en entrar es el primero en salir.

**Operaciones**:
- `enqueue()`: Agregar proceso al final de la cola
- `dequeue()`: Remover y ejecutar el proceso del frente
- `peek()`: Ver el próximo proceso sin removerlo
- `isEmpty()`: Verificar si la cola está vacía

**Uso en el simulador**:
1. Ingrese el nombre del proceso (ej: Chrome, Firefox)
2. Establezca la prioridad (1-5)
3. Defina el tiempo de CPU requerido
4. Haga clic en "Agregar Proceso"
5. Use "Ejecutar Proceso" para procesar el siguiente en la cola

**Aplicación real**: Los sistemas operativos usan colas para gestionar procesos en espera.

### 2. Pila (Stack) - Pila de Llamadas

**Concepto**: LIFO (Last In, First Out) - El último elemento en entrar es el primero en salir.

**Operaciones**:
- `push()`: Agregar llamada de función al tope
- `pop()`: Remover y retornar de la función del tope
- `peek()`: Ver la función actual sin removerla
- `isEmpty()`: Verificar si la pila está vacía

**Uso en el simulador**:
1. Ingrese el nombre de la función (ej: calculateSum)
2. Ingrese los parámetros (ej: (a, b))
3. Haga clic en "Push (Llamar)" para agregar a la pila
4. Use "Pop (Retornar)" para retornar de la función actual
5. Use "Simular Recursión" para ver un ejemplo de factorial recursivo

**Aplicación real**: Los lenguajes de programación usan pilas para gestionar llamadas de función.

### 3. Lista Enlazada - Gestión de Memoria

**Concepto**: Secuencia de nodos donde cada nodo contiene datos y un puntero al siguiente nodo.

**Operaciones**:
- `insertFirst()`: Insertar al inicio
- `insertLast()`: Insertar al final
- `remove()`: Eliminar un nodo específico
- `find()`: Buscar un nodo por ID

**Uso en el simulador**:
1. Ingrese el tamaño del bloque de memoria (en KB)
2. Haga clic en "Agregar Bloque" para crear un nuevo bloque
3. Haga clic en un bloque para seleccionarlo
4. Use "Asignar Memoria" para asignar el bloque a un proceso
5. Use "Liberar Memoria" para liberar un bloque asignado
6. Use "Eliminar Bloque" para eliminar un bloque de la lista

**Aplicación real**: Los sistemas operativos usan listas enlazadas para gestionar bloques de memoria.

### 4. Árbol - Sistema de Archivos

**Concepto**: Estructura jerárquica donde cada nodo puede tener múltiples hijos.

**Operaciones**:
- `addChild()`: Agregar nodo hijo a un directorio
- `removeNode()`: Eliminar un nodo y todos sus hijos
- `findNode()`: Buscar un nodo por ID

**Uso en el simulador**:
1. Haga clic en un directorio para seleccionarlo (debe ser directorio, no archivo)
2. Ingrese el nombre del nuevo nodo
3. Seleccione el tipo (Directorio o Archivo)
4. Si es archivo, ingrese el tamaño
5. Haga clic en "Agregar Nodo"
6. Use "Eliminar Nodo" para eliminar el nodo seleccionado
7. Use "Cargar Ejemplo" para cargar una estructura predefinida

**Aplicación real**: Los sistemas de archivos usan árboles para organizar archivos y directorios.

## Interfaz Web

### Navegación

- Use los botones en la barra de navegación para cambiar entre estructuras
- Atajos de teclado:
  - `Ctrl+1`: Cola
  - `Ctrl+2`: Pila
  - `Ctrl+3`: Lista Enlazada
  - `Ctrl+4`: Árbol

### Características

- **Visualización en tiempo real**: Los cambios se reflejan inmediatamente
- **Animaciones**: Transiciones suaves al agregar/eliminar elementos
- **Panel de información**: Muestra estadísticas actualizadas
- **Diseño responsive**: Funciona en desktop, tablet y móvil
- **Interfaz intuitiva**: Controles claros y fáciles de usar

## Ejemplos de Uso

### Ejemplo 1: Simular Round-Robin Scheduling

1. Vaya a la sección de Cola
2. Agregue varios procesos:
   - Chrome (Prioridad: 1, Tiempo: 5)
   - Firefox (Prioridad: 2, Tiempo: 3)
   - VSCode (Prioridad: 1, Tiempo: 4)
3. Ejecute procesos uno por uno observando el orden FIFO

### Ejemplo 2: Simular Recursión

1. Vaya a la sección de Pila
2. Haga clic en "Simular Recursión"
3. Observe cómo se apilan las llamadas a factorial(n)
4. Note que el orden es LIFO al retornar

### Ejemplo 3: Fragmentación de Memoria

1. Vaya a la sección de Lista Enlazada
2. Observe los bloques iniciales de memoria
3. Asigne varios bloques a diferentes procesos
4. Libere algunos bloques intermitios
5. Observe cómo queda fragmentada la memoria

### Ejemplo 4: Estructura de Directorios

1. Vaya a la sección de Árbol
2. Haga clic en "Cargar Ejemplo"
3. Explore la estructura jerárquica
4. Agregue nuevos archivos y directorios
5. Observe cómo se organizan en la jerarquía

## Recursos Adicionales

- **Código fuente C++**: `src/cpp/`
- **Interfaz web**: `src/frontend/`
- **Documentación técnica**: `docs/DOCUMENTACION_TECNICA.md`

## Soporte

Para preguntas o problemas, por favor revise la documentación técnica o contacte al instructor del curso.
