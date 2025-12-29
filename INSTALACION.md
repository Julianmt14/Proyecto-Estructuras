# 📦 Guía de Instalación Rápida

## Requisitos Previos

### Backend (C++)
- Compilador C++ con soporte para C++11 o superior
- Make (opcional, pero recomendado)

### Frontend (Web)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Python 3 (opcional, para servidor local)

## Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/Julianmt14/Proyecto-Estructuras.git
cd Proyecto-Estructuras
```

### 2. Compilar el Backend (C++)

```bash
# Usando Make
make

# O manualmente
g++ -std=c++11 -Wall -Wextra -I./src/cpp src/cpp/main.cpp -o simulator
```

### 3. Ejecutar el Backend

```bash
# Usando Make
make run

# O directamente
./simulator
```

Deberías ver una salida similar a:

```
===============================================
  SIMULADOR DE SISTEMA OPERATIVO
  Demostración de Estructuras de Datos
===============================================

========== COLA (QUEUE) - Planificador de Procesos ==========
Procesos en cola de espera: 4
Ejecutando proceso: Chrome (ID: 1, Priority: 1, Burst Time: 5)
...
```

### 4. Ejecutar el Frontend (Web)

#### Opción A: Abrir directamente
```bash
# En Linux/Mac
open src/frontend/index.html

# En Windows
start src/frontend/index.html
```

#### Opción B: Usar servidor local (Recomendado)
```bash
cd src/frontend
python3 -m http.server 8000
```

Luego abrir en el navegador: http://localhost:8000

## Verificación

### Backend
Si la compilación y ejecución fueron exitosas, deberías ver:
- ✅ Demostración de Cola (Queue)
- ✅ Demostración de Pila (Stack)
- ✅ Demostración de Lista Enlazada
- ✅ Demostración de Árbol

### Frontend
Si el frontend se carga correctamente, deberías ver:
- ✅ Interfaz moderna con gradiente morado
- ✅ 4 botones de navegación en la parte superior
- ✅ Controles interactivos para cada estructura de datos
- ✅ Visualizaciones dinámicas

## Solución de Problemas

### Error: "command not found: make"
**Solución:** Instala Make o compila manualmente con g++

```bash
# Ubuntu/Debian
sudo apt-get install make

# macOS
xcode-select --install

# Windows
# Instalar MinGW o usar WSL
```

### Error: "g++: command not found"
**Solución:** Instala un compilador C++

```bash
# Ubuntu/Debian
sudo apt-get install g++

# macOS
xcode-select --install

# Windows
# Instalar MinGW, MSVC, o usar WSL
```

### El frontend no carga correctamente
**Solución:** Usa un servidor HTTP local

```bash
cd src/frontend
python3 -m http.server 8000
# o
python -m SimpleHTTPServer 8000  # Python 2
```

### Errores de compilación en C++
**Solución:** Verifica que tu compilador soporte C++11

```bash
g++ --version
# Debe ser g++ 4.8 o superior
```

## Comandos Útiles

```bash
# Limpiar archivos compilados
make clean

# Compilar y ejecutar
make run

# Ver ayuda del Makefile
make help
```

## Próximos Pasos

1. Lee la [Guía de Uso](docs/GUIA_DE_USO.md) para aprender a usar el simulador
2. Revisa la [Documentación Técnica](docs/DOCUMENTACION_TECNICA.md) para entender la implementación
3. Experimenta con las diferentes estructuras de datos en la interfaz web

## Soporte

Si encuentras problemas, consulta:
- [README.md](README.md) - Descripción general del proyecto
- [GUIA_DE_USO.md](docs/GUIA_DE_USO.md) - Instrucciones detalladas
- [DOCUMENTACION_TECNICA.md](docs/DOCUMENTACION_TECNICA.md) - Detalles técnicos

---

¡Disfruta explorando las estructuras de datos! 🚀
