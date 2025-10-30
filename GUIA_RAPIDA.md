# 🚀 Guía Rápida - Simulador de Sistema Operativo

## Inicio Rápido (Solo Frontend - Modo Demo)

### Opción 1: Abrir directamente en el navegador

1. Navega a la carpeta `frontend`
2. Abre el archivo `index.html` en tu navegador web favorito
3. ¡Listo! La aplicación funciona en modo demo con datos de ejemplo

### Opción 2: Con servidor HTTP local

```bash
# Opción A: Python
cd frontend
python3 -m http.server 8080

# Opción B: Node.js (si tienes npx)
cd frontend
npx http-server -p 8080

# Luego abre http://localhost:8080 en tu navegador
```

## Uso de la Interfaz Web

### 1. Agregar un Proceso
- Clic en el botón **➕ Agregar Proceso**
- Ingresa el nombre del proceso (ej: `notepad.exe`, `firefox.exe`)
- Selecciona la prioridad (1-5, donde 5 es la más alta)
- Clic en **Crear Proceso**
- El proceso aparecerá en la lista y se agregará a la cola

### 2. Ejecutar el Siguiente Proceso
- Clic en el botón **▶️ Ejecutar Siguiente**
- El primer proceso de la cola cambiará a estado "Ejecutando"
- Se agregará a la pila de llamadas del CPU
- El proceso anterior en ejecución pasará a "Finalizado"

### 3. Terminar un Proceso
- Clic en el botón **⏹️ Terminar Proceso**
- Selecciona el proceso que deseas terminar del menú desplegable
- Clic en **Terminar**
- El proceso cambiará a estado "Finalizado"
- Se eliminará de la cola y la pila

### 4. Actualizar Vista
- Clic en el botón **🔄 Actualizar Vista**
- Recarga los datos desde el archivo `procesos.json`
- Útil cuando usas el backend C++ para sincronizar cambios

## Uso del Backend C++ (Opcional)

### Compilación

```bash
cd backend
g++ -o simulador simulador.cpp -std=c++11
```

### Ejecución

```bash
./simulador
```

### Menú Interactivo

```
--- MENU ---
1. Crear proceso          → Crea un nuevo proceso
2. Agregar subproceso     → Agrega un hijo a un proceso existente
3. Ejecutar siguiente     → Ejecuta el siguiente en la cola
4. Terminar proceso       → Finaliza un proceso
5. Mostrar estado         → Muestra el estado en consola
6. Salir                  → Cierra el programa
```

### Integración Backend ↔ Frontend

1. Ejecuta el programa C++ y realiza operaciones (crear, ejecutar, terminar procesos)
2. El programa genera automáticamente `data/procesos.json`
3. Abre `frontend/index.html` en el navegador
4. Clic en **🔄 Actualizar Vista** para ver los cambios

## Elementos de la Interfaz

### 📋 Lista de Procesos
Muestra todos los procesos con:
- **ID**: Identificador único
- **Nombre**: Nombre del proceso
- **Estado**: Listo (azul), Ejecutando (verde pulsante), Finalizado (rosa)
- **Prioridad**: Valor de 1 a 5

### 📥 Cola de Procesos Listos
Visualización horizontal de procesos esperando ejecución:
- Los elementos se muestran en orden FIFO (First In, First Out)
- Animación de entrada para nuevos procesos
- Flechas indican la dirección de la cola

### 🔥 Pila de Llamadas CPU
Visualización vertical de funciones en ejecución:
- El elemento superior (verde) es el más reciente (top de la pila)
- Los elementos inferiores son llamadas más antiguas
- Estructura LIFO (Last In, First Out)

### 🌳 Árbol de Jerarquía
Visualización de procesos y sus subprocesos:
- **Procesos padre** en verde (cajas grandes)
- **Subprocesos** en azul (cajas pequeñas conectadas)
- Líneas verticales indican la relación padre-hijo

### 💻 Log del Sistema
Registro cronológico de eventos:
- ✅ Verde: Operaciones exitosas
- ℹ️ Azul: Información general
- ⚠️ Violeta: Advertencias
- ❌ Rosa: Errores

## Conceptos de Estructuras de Datos

### Cola (Queue)
- **Uso**: Almacena procesos listos para ejecutarse
- **Operación**: FIFO - El primero en entrar es el primero en salir
- **Visualización**: Elementos horizontales con flechas

### Pila (Stack)
- **Uso**: Representa las llamadas del CPU
- **Operación**: LIFO - El último en entrar es el primero en salir
- **Visualización**: Elementos apilados verticalmente

### Lista Enlazada (Linked List)
- **Uso**: Almacena todos los procesos del sistema
- **Operación**: Acceso secuencial, inserción/eliminación eficiente
- **Visualización**: Tarjetas de procesos en la lista principal

### Árbol N-ario (N-ary Tree)
- **Uso**: Jerarquía de procesos y subprocesos
- **Operación**: Relaciones padre-hijo, un padre puede tener múltiples hijos
- **Visualización**: Nodos conectados con líneas

## Solución de Problemas

### La interfaz no carga los datos
- **Solución**: Está en modo demo, usa datos de ejemplo predefinidos
- Si quieres usar datos reales, ejecuta primero el backend C++

### No puedo agregar un proceso
- Verifica que el nombre no esté vacío
- Verifica que el nombre no exista ya en el sistema

### La cola está vacía al ejecutar
- Primero agrega procesos para que entren a la cola
- Los procesos "Finalizados" no aparecen en la cola

### El backend no compila
```bash
# Instalar g++ si no está disponible (Ubuntu/Debian)
sudo apt-get update
sudo apt-get install g++ build-essential

# Compilar con flag C++11 explícito
g++ -o simulador simulador.cpp -std=c++11
```

## Consejos para Presentación Académica

### Explicación de Estructuras
1. **Inicia** mostrando el estado inicial con 3 procesos
2. **Demuestra** agregar un nuevo proceso → se agrega a cola y lista
3. **Ejecuta** un proceso → sale de cola, entra a pila, cambia estado
4. **Termina** un proceso → cambia estado, sale de cola y pila
5. **Muestra** el árbol para explicar jerarquías

### Puntos Clave
- ✅ Cada botón representa una operación sobre estructuras de datos
- ✅ Las animaciones muestran cómo cambian las estructuras en tiempo real
- ✅ El log documenta cada operación para seguimiento
- ✅ Los colores neón hacen visualmente atractiva la presentación

### Flujo de Demostración (5 minutos)
1. (0:00) Mostrar interfaz y explicar cada panel
2. (1:00) Explicar conceptos: Cola, Pila, Lista, Árbol
3. (2:00) Agregar 2 procesos nuevos
4. (3:00) Ejecutar procesos y mostrar movimiento entre estructuras
5. (4:00) Terminar un proceso
6. (4:30) Mostrar el código C++ brevemente
7. (5:00) Conclusión y preguntas

## Recursos Adicionales

- **README_PROYECTO.md**: Documentación completa del proyecto
- **backend/simulador.cpp**: Código fuente comentado en C++
- **frontend/script.js**: Lógica de visualización comentada

## Contacto y Contribuciones

Para reportar problemas o sugerir mejoras, abre un issue en el repositorio.

---

**¡Disfruta explorando las estructuras de datos de forma visual e interactiva!** 🎉
