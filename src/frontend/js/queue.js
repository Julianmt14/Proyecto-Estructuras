// Queue implementation for process scheduling
class ProcessQueue {
    constructor() {
        this.items = [];
        this.processId = 1;
    }

    enqueue(process) {
        this.items.push(process);
        this.render();
        this.updateInfo();
    }

    dequeue() {
        if (this.isEmpty()) {
            alert('La cola está vacía!');
            return null;
        }
        const process = this.items.shift();
        this.render();
        this.updateInfo();
        return process;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    front() {
        return this.isEmpty() ? null : this.items[0];
    }

    render() {
        const container = document.getElementById('queue-items');
        container.innerHTML = '';

        this.items.forEach((process, index) => {
            const processDiv = document.createElement('div');
            processDiv.className = 'process-item';
            processDiv.innerHTML = `
                <h4>🔵 ${process.name}</h4>
                <p>ID: ${process.id}</p>
                <p>Prioridad: ${process.priority}</p>
                <p>Tiempo: ${process.time}s</p>
            `;
            container.appendChild(processDiv);
        });

        if (this.isEmpty()) {
            container.innerHTML = '<p style="color: #7f8c8d; text-align: center; width: 100%;">La cola está vacía</p>';
        }
    }

    updateInfo() {
        document.getElementById('queue-size').textContent = this.size();
        const nextProcess = this.front();
        document.getElementById('next-process').textContent = 
            nextProcess ? `${nextProcess.name} (ID: ${nextProcess.id})` : 'Ninguno';
    }

    clear() {
        this.items = [];
        this.render();
        this.updateInfo();
    }
}

// Global queue instance
const processQueue = new ProcessQueue();

// Functions called from HTML
function enqueueProcess() {
    const name = document.getElementById('process-name').value.trim();
    const priority = parseInt(document.getElementById('process-priority').value);
    const time = parseInt(document.getElementById('process-time').value);

    if (!name) {
        alert('Por favor ingrese un nombre de proceso');
        return;
    }

    const process = {
        id: processQueue.processId++,
        name: name,
        priority: priority,
        time: time
    };

    processQueue.enqueue(process);
    
    // Clear inputs
    document.getElementById('process-name').value = '';
    document.getElementById('process-priority').value = '3';
    document.getElementById('process-time').value = '5';
}

function dequeueProcess() {
    const process = processQueue.dequeue();
    if (process) {
        alert(`Ejecutando proceso: ${process.name}\nID: ${process.id}\nPrioridad: ${process.priority}\nTiempo: ${process.time}s`);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    processQueue.render();
    processQueue.updateInfo();
});
