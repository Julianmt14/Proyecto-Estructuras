# 🖥️ Proyecto-Estructuras: Simulador de Sistema Operativo

Proyecto académico que simula la gestión de procesos de un sistema operativo utilizando estructuras de datos clásicas (colas, pilas, listas enlazadas y árboles), con una interfaz web moderna y una lógica implementada en C++.

## 🎯 Características

- ✅ **Visualización animada** de estructuras de datos
- ✅ **Interfaz web moderna** con tema oscuro y colores neón
- ✅ **Backend en C++** con estructuras de datos nativas
- ✅ **Modo demo** funcional sin necesidad del backend
- ✅ **Sistema de logs** en tiempo real
- ✅ **Completamente interactivo** con controles intuitivos

## 🚀 Inicio Rápido

### Opción 1: Solo Interfaz Web (Recomendado para comenzar)

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

### Opción 2: Con Backend C++

```bash
# Compilar
cd backend
g++ -o simulador simulador.cpp -std=c++11

# Ejecutar
./simulador
```

## 📚 Documentación

- **[GUIA_RAPIDA.md](GUIA_RAPIDA.md)**: Tutorial paso a paso para usar el simulador
- **[README_PROYECTO.md](README_PROYECTO.md)**: Documentación técnica completa del proyecto

## 🎨 Vista Previa

![Simulador de Sistema Operativo](https://github.com/user-attachments/assets/57170c37-452a-42f2-af54-59ffc236207f)

## 📁 Estructura del Proyecto

```
Proyecto-Estructuras/
├── backend/          # Lógica en C++
│   └── simulador.cpp
├── frontend/         # Interfaz web
│   ├── index.html
│   ├── style.css
│   └── script.js
├── data/             # Datos JSON
│   └── procesos.json
└── docs/             # Documentación
```

## 🎓 Conceptos Demostrados

- **Cola (Queue)**: Procesos listos para ejecutarse - FIFO
- **Pila (Stack)**: Pila de llamadas del CPU - LIFO
- **Lista Enlazada**: Almacenamiento de todos los procesos
- **Árbol N-ario**: Jerarquía de procesos y subprocesos

## 🛠️ Tecnologías

- C++ (Backend)
- HTML5 + CSS3 + JavaScript (Frontend)
- JSON (Intercambio de datos)

## 📄 Licencia

Proyecto de código abierto para fines educativos.

---

**Desarrollado como proyecto académico de Estructuras de Datos**
