# 🖥️ Simulador de Sistema Operativo

Proyecto académico de estructuras de datos que simula la gestión de procesos de un sistema operativo utilizando colas, pilas, listas enlazadas y árboles, con una interfaz visual moderna y funcional.

## 📋 Descripción

Este proyecto demuestra el uso práctico de estructuras de datos clásicas en la simulación de cómo un sistema operativo gestiona procesos:
- **Cola**: Representa los procesos listos para ejecutarse
- **Pila**: Representa la pila de llamadas del CPU
- **Lista enlazada**: Almacena todos los procesos existentes
- **Árbol n-ario**: Representa la jerarquía de procesos e hilos

## 🎯 Características

### Backend (C++)
- ✅ Implementación completa de estructuras de datos
- ✅ Gestión de procesos con estados (Listo, Ejecutando, Finalizado)
- ✅ Sistema de prioridades
- ✅ Exportación automática a JSON
- ✅ Interfaz de consola interactiva

### Frontend (HTML + CSS + JavaScript)
- ✅ Diseño moderno con tema oscuro y colores neón
- ✅ Visualización animada de cola de procesos
- ✅ Visualización de pila CPU con bloques verticales
- ✅ Árbol jerárquico de procesos y subprocesos
- ✅ Tabla/tarjetas de procesos con estados
- ✅ Sistema de logs en tiempo real
- ✅ Modales para gestión de procesos
- ✅ Modo demo sin conexión al backend

## 📁 Estructura del Proyecto

```
Proyecto-Estructuras/
│
├── backend/
│   └── simulador.cpp          # Lógica del simulador en C++
│
├── frontend/
│   ├── index.html             # Interfaz principal
│   ├── style.css              # Estilos modernos con animaciones
│   └── script.js              # Lógica de visualización y control
│
├── data/
│   └── procesos.json          # Datos de procesos (generado por C++)
│
├── README.md                  # Descripción breve del repositorio
└── README_PROYECTO.md         # Esta documentación completa
```

## 🚀 Instalación y Uso

### Opción 1: Solo Frontend (Modo Demo)

1. **Abrir la interfaz web:**
   ```bash
   cd frontend
   # Abrir index.html en tu navegador favorito
   ```

2. **Usar la interfaz:**
   - La interfaz funciona en modo demo con datos de ejemplo
   - Puedes agregar, ejecutar y terminar procesos
   - Todas las visualizaciones funcionan sin el backend

### Opción 2: Con Backend C++

1. **Compilar el programa C++:**
   ```bash
   cd backend
   g++ -o simulador simulador.cpp
   ```

2. **Ejecutar el simulador:**
   ```bash
   ./simulador
   ```

3. **Usar el menú interactivo:**
   ```
   --- MENU ---
   1. Crear proceso
   2. Agregar subproceso
   3. Ejecutar siguiente proceso
   4. Terminar proceso
   5. Mostrar estado
   6. Salir
   ```

4. **Abrir la interfaz web:**
   - El programa genera automáticamente `data/procesos.json`
   - Abrir `frontend/index.html` en el navegador
   - Presionar "🔄 Actualizar Vista" para cargar los datos

## 🎮 Funcionalidades

### Gestión de Procesos

- **➕ Agregar Proceso**: Crea un nuevo proceso con nombre y prioridad
- **▶️ Ejecutar Siguiente**: Mueve el primer proceso de la cola a ejecución
- **⏹️ Terminar Proceso**: Finaliza un proceso y lo elimina de las estructuras
- **🔄 Actualizar Vista**: Recarga los datos desde el archivo JSON

### Visualizaciones

1. **Lista de Procesos**: Muestra todos los procesos con sus estados y prioridades
2. **Cola de Procesos**: Animación horizontal de procesos esperando ejecución
3. **Pila CPU**: Stack vertical mostrando las llamadas del CPU
4. **Árbol de Jerarquía**: Visualización de procesos padre e hijos

### Sistema de Logs

Registro en tiempo real de todas las acciones del sistema:
- ✅ Éxitos (verde)
- ⚠️ Advertencias (violeta)
- ❌ Errores (rojo)
- ℹ️ Información (azul)

## 🎨 Diseño

### Paleta de Colores Neón
- **Verde neón (#00ff88)**: Procesos activos y éxitos
- **Azul cielo (#88ccff)**: Cola y elementos secundarios
- **Violeta (#bb86fc)**: Pila CPU y acciones especiales
- **Rosa (#ff5888)**: Errores y terminaciones

### Animaciones
- Entrada suave de elementos (fadeIn)
- Movimiento de cola (slideIn)
- Efecto de pila (stackPush)
- Pulsación de procesos activos (pulse)

## 📊 Ejemplo de Datos (procesos.json)

```json
{
  "procesos": [
    {"id":1,"nombre":"chrome.exe","estado":"Ejecutando","prioridad":2},
    {"id":2,"nombre":"spotify.exe","estado":"Listo","prioridad":1},
    {"id":3,"nombre":"code.exe","estado":"Listo","prioridad":3}
  ],
  "cola": ["spotify.exe","code.exe"],
  "pila": ["chrome.exe()","render()","processInput()"],
  "arbol": {
    "chrome.exe": ["render()","network()","storage()"],
    "spotify.exe": ["play()","download()"],
    "code.exe": ["editFile()","compile()"]
  }
}
```

## 🔧 Tecnologías Utilizadas

- **C++**: Implementación de estructuras de datos
- **HTML5**: Estructura de la interfaz
- **CSS3**: Diseño moderno con animaciones
- **JavaScript (Vanilla)**: Lógica de visualización
- **JSON**: Intercambio de datos

## 📚 Conceptos de Estructuras de Datos

### Cola (Queue)
- Estructura FIFO (First In, First Out)
- Representa procesos esperando ejecución
- Operaciones: enqueue, dequeue

### Pila (Stack)
- Estructura LIFO (Last In, First Out)
- Representa la pila de llamadas del CPU
- Operaciones: push, pop

### Lista Enlazada (Linked List)
- Almacenamiento dinámico de procesos
- Permite inserción y eliminación eficiente
- Acceso secuencial a elementos

### Árbol N-ario (N-ary Tree)
- Jerarquía de procesos padre-hijo
- Representa subprocesos y threads
- Permite relaciones uno-a-muchos

## 🎓 Uso Académico

Este proyecto es ideal para:
- Presentaciones de estructuras de datos
- Demostraciones de sistemas operativos
- Proyectos finales de programación
- Exposiciones universitarias

### Puntos Clave para Presentación
1. Explicar cada estructura de datos y su propósito
2. Demostrar la integración C++ ↔ Web
3. Mostrar las animaciones y visualizaciones
4. Explicar el ciclo de vida de un proceso
5. Demostrar la gestión de prioridades

## 🚀 Mejoras Futuras (Opcionales)

- [ ] Implementar cola de prioridad real
- [ ] Agregar simulación de tiempo de CPU
- [ ] Integrar D3.js para visualizaciones avanzadas
- [ ] Sistema de planificación Round-Robin
- [ ] Estadísticas de rendimiento
- [ ] Exportar logs a archivo
- [ ] Modo oscuro/claro
- [ ] Responsive design mejorado

## 👥 Autores

Proyecto académico de Estructuras de Datos

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Nota**: Este proyecto es completamente funcional en modo demo (solo frontend) y puede ser extendido con el backend en C++ para una experiencia completa.
