// Estado global de la aplicación
let estadoSistema = {
    procesos: [],
    cola: [],
    pila: [],
    arbol: {}
};

let contadorProcesoID = 4; // Comenzamos desde 4 para coincidir con los ejemplos
let logCounter = 0;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    inicializarEventos();
    cargarDatos();
    addLog('Sistema iniciado correctamente', 'success');
});

// Configurar eventos de botones y modales
function inicializarEventos() {
    // Botones principales
    document.getElementById('btnAgregarProceso').addEventListener('click', abrirModalAgregar);
    document.getElementById('btnEjecutar').addEventListener('click', ejecutarSiguiente);
    document.getElementById('btnTerminar').addEventListener('click', abrirModalTerminar);
    document.getElementById('btnActualizar').addEventListener('click', actualizarVista);
    
    // Modales
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', cerrarModales);
    });
    
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            cerrarModales();
        }
    });
    
    // Formularios
    document.getElementById('formAgregarProceso').addEventListener('submit', agregarProceso);
    document.getElementById('formTerminarProceso').addEventListener('submit', terminarProceso);
}

// Cargar datos desde JSON
async function cargarDatos() {
    try {
        // Intentar cargar desde archivo
        const response = await fetch('../data/procesos.json');
        if (response.ok) {
            estadoSistema = await response.json();
            addLog('Datos cargados desde procesos.json', 'success');
        } else {
            throw new Error('No se pudo cargar el archivo');
        }
    } catch (error) {
        // Modo demo: usar datos de ejemplo
        addLog('Modo demo: usando datos de ejemplo', 'info');
        estadoSistema = {
            procesos: [
                {id: 1, nombre: "chrome.exe", estado: "Ejecutando", prioridad: 2},
                {id: 2, nombre: "spotify.exe", estado: "Listo", prioridad: 1},
                {id: 3, nombre: "code.exe", estado: "Listo", prioridad: 3}
            ],
            cola: ["spotify.exe", "code.exe"],
            pila: ["chrome.exe()", "render()", "processInput()"],
            arbol: {
                "chrome.exe": ["render()", "network()", "storage()"],
                "spotify.exe": ["play()", "download()"],
                "code.exe": ["editFile()", "compile()"]
            }
        };
    }
    
    renderizarTodo();
}

// Renderizar todas las visualizaciones
function renderizarTodo() {
    renderizarProcesos();
    renderizarCola();
    renderizarPila();
    renderizarArbol();
}

// Renderizar lista de procesos
function renderizarProcesos() {
    const container = document.getElementById('listaProcesos');
    container.innerHTML = '';
    
    if (estadoSistema.procesos.length === 0) {
        container.innerHTML = '<p style="color: #88ccff; text-align: center;">No hay procesos en el sistema</p>';
        return;
    }
    
    estadoSistema.procesos.forEach(proceso => {
        const card = document.createElement('div');
        card.className = 'proceso-card';
        
        const estadoClass = `estado-${proceso.estado.toLowerCase()}`;
        
        card.innerHTML = `
            <div class="proceso-header">
                <span class="proceso-nombre">${proceso.nombre}</span>
                <span class="proceso-id">ID: ${proceso.id}</span>
            </div>
            <div class="proceso-info">
                <span class="estado ${estadoClass}">${proceso.estado}</span>
                <span style="color: #bb86fc;">Prioridad: ${proceso.prioridad}</span>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Renderizar cola de procesos
function renderizarCola() {
    const container = document.getElementById('colaVisual');
    container.innerHTML = '';
    
    if (estadoSistema.cola.length === 0) {
        container.innerHTML = '<p style="color: #88ccff; text-align: center; width: 100%;">Cola vacía</p>';
        return;
    }
    
    estadoSistema.cola.forEach((nombreProceso, index) => {
        const item = document.createElement('div');
        item.className = 'cola-item';
        item.textContent = nombreProceso;
        item.style.animationDelay = `${index * 0.1}s`;
        
        container.appendChild(item);
    });
}

// Renderizar pila CPU
function renderizarPila() {
    const container = document.getElementById('pilaVisual');
    container.innerHTML = '';
    
    if (estadoSistema.pila.length === 0) {
        container.innerHTML = '<p style="color: #bb86fc; text-align: center;">Pila vacía</p>';
        return;
    }
    
    estadoSistema.pila.forEach((llamada, index) => {
        const item = document.createElement('div');
        item.className = 'pila-item';
        item.textContent = llamada;
        item.style.animationDelay = `${index * 0.1}s`;
        
        container.appendChild(item);
    });
}

// Renderizar árbol de jerarquía
function renderizarArbol() {
    const container = document.getElementById('arbolVisual');
    container.innerHTML = '';
    
    if (Object.keys(estadoSistema.arbol).length === 0) {
        container.innerHTML = '<p style="color: #00ff88; text-align: center; width: 100%;">No hay procesos con subprocesos</p>';
        return;
    }
    
    for (const [padre, hijos] of Object.entries(estadoSistema.arbol)) {
        const nodoArbol = document.createElement('div');
        nodoArbol.className = 'nodo-arbol';
        
        const nodoPadre = document.createElement('div');
        nodoPadre.className = 'nodo-padre';
        nodoPadre.textContent = padre;
        
        nodoArbol.appendChild(nodoPadre);
        
        if (hijos && hijos.length > 0) {
            const nodosHijos = document.createElement('div');
            nodosHijos.className = 'nodo-hijos';
            
            hijos.forEach((hijo, index) => {
                const nodoHijo = document.createElement('div');
                nodoHijo.className = 'nodo-hijo';
                nodoHijo.textContent = hijo;
                nodoHijo.style.animationDelay = `${index * 0.1}s`;
                nodosHijos.appendChild(nodoHijo);
            });
            
            nodoArbol.appendChild(nodosHijos);
        }
        
        container.appendChild(nodoArbol);
    }
}

// Agregar un nuevo proceso
function agregarProceso(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombreProceso').value.trim();
    const prioridad = parseInt(document.getElementById('prioridadProceso').value);
    
    if (!nombre) {
        addLog('Error: El nombre del proceso no puede estar vacío', 'error');
        return;
    }
    
    // Verificar si ya existe
    if (estadoSistema.procesos.find(p => p.nombre === nombre)) {
        addLog(`Error: El proceso "${nombre}" ya existe`, 'error');
        return;
    }
    
    // Crear nuevo proceso
    const nuevoProceso = {
        id: contadorProcesoID++,
        nombre: nombre,
        estado: "Listo",
        prioridad: prioridad
    };
    
    // Agregar a las estructuras
    estadoSistema.procesos.push(nuevoProceso);
    estadoSistema.cola.push(nombre);
    estadoSistema.arbol[nombre] = [];
    
    addLog(`✓ Proceso "${nombre}" creado con ID ${nuevoProceso.id}`, 'success');
    
    // Actualizar vista
    renderizarTodo();
    
    // Cerrar modal y limpiar formulario
    cerrarModales();
    document.getElementById('formAgregarProceso').reset();
}

// Ejecutar siguiente proceso de la cola
function ejecutarSiguiente() {
    if (estadoSistema.cola.length === 0) {
        addLog('⚠ No hay procesos en la cola para ejecutar', 'error');
        return;
    }
    
    // Obtener el primero de la cola
    const nombreProceso = estadoSistema.cola.shift();
    
    // Actualizar estado del proceso
    const proceso = estadoSistema.procesos.find(p => p.nombre === nombreProceso);
    if (proceso) {
        // Cambiar estado anterior a "Finalizado" si había uno ejecutando
        estadoSistema.procesos.forEach(p => {
            if (p.estado === "Ejecutando" && p.nombre !== nombreProceso) {
                p.estado = "Finalizado";
            }
        });
        
        proceso.estado = "Ejecutando";
        
        // Agregar a la pila
        estadoSistema.pila.push(`${nombreProceso}()`);
        
        addLog(`▶ Ejecutando proceso: ${nombreProceso}`, 'success');
    }
    
    renderizarTodo();
}

// Terminar un proceso
function terminarProceso(e) {
    e.preventDefault();
    
    const nombreProceso = document.getElementById('procesoSeleccionado').value;
    
    if (!nombreProceso) {
        addLog('Error: Debe seleccionar un proceso', 'error');
        return;
    }
    
    // Buscar el proceso
    const proceso = estadoSistema.procesos.find(p => p.nombre === nombreProceso);
    if (!proceso) {
        addLog(`Error: No se encontró el proceso "${nombreProceso}"`, 'error');
        return;
    }
    
    // Cambiar estado a finalizado
    proceso.estado = "Finalizado";
    
    // Remover de la cola si está allí
    estadoSistema.cola = estadoSistema.cola.filter(p => p !== nombreProceso);
    
    // Remover de la pila si está allí
    estadoSistema.pila = estadoSistema.pila.filter(p => !p.includes(nombreProceso));
    
    addLog(`⏹ Proceso "${nombreProceso}" finalizado`, 'info');
    
    renderizarTodo();
    cerrarModales();
}

// Actualizar vista (recargar datos)
function actualizarVista() {
    addLog('🔄 Actualizando vista...', 'info');
    cargarDatos();
}

// Modales
function abrirModalAgregar() {
    document.getElementById('modalAgregar').style.display = 'block';
}

function abrirModalTerminar() {
    // Llenar el select con los procesos activos
    const select = document.getElementById('procesoSeleccionado');
    select.innerHTML = '<option value="">-- Seleccione un proceso --</option>';
    
    estadoSistema.procesos
        .filter(p => p.estado !== "Finalizado")
        .forEach(proceso => {
            const option = document.createElement('option');
            option.value = proceso.nombre;
            option.textContent = `${proceso.nombre} (${proceso.estado})`;
            select.appendChild(option);
        });
    
    document.getElementById('modalTerminar').style.display = 'block';
}

function cerrarModales() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

// Sistema de log en consola
function addLog(mensaje, tipo = 'info') {
    const consoleLog = document.getElementById('consoleLog');
    const timestamp = new Date().toLocaleTimeString();
    
    const logLine = document.createElement('div');
    logLine.className = `console-line ${tipo}`;
    logLine.textContent = `[${timestamp}] ${mensaje}`;
    
    consoleLog.appendChild(logLine);
    
    // Auto-scroll al final
    consoleLog.scrollTop = consoleLog.scrollHeight;
    
    // Limitar a 50 líneas
    if (consoleLog.children.length > 50) {
        consoleLog.removeChild(consoleLog.firstChild);
    }
}

// Simulación automática (opcional - modo demo avanzado)
function iniciarSimulacionAutomatica() {
    setInterval(() => {
        if (Math.random() > 0.7 && estadoSistema.cola.length > 0) {
            ejecutarSiguiente();
        }
    }, 5000);
}

// Exportar estado actual (para debugging)
function exportarEstado() {
    const dataStr = JSON.stringify(estadoSistema, null, 2);
    console.log('Estado actual del sistema:', dataStr);
    return dataStr;
}

// Permitir exportación desde consola del navegador
window.exportarEstado = exportarEstado;
window.iniciarSimulacionAutomatica = iniciarSimulacionAutomatica;
