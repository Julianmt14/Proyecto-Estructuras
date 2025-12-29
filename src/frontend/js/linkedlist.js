// Linked List implementation for memory management
class MemoryLinkedList {
    constructor() {
        this.head = null;
        this.blockId = 1;
    }

    insertLast(block) {
        if (!this.head) {
            this.head = block;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = block;
        }
        this.render();
        this.updateInfo();
    }

    remove(id) {
        if (!this.head) return false;

        if (this.head.id === id) {
            this.head = this.head.next;
            this.render();
            this.updateInfo();
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.id === id) {
                current.next = current.next.next;
                this.render();
                this.updateInfo();
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find(id) {
        let current = this.head;
        while (current) {
            if (current.id === id) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    getTotalMemory() {
        let total = 0;
        let current = this.head;
        while (current) {
            total += current.size;
            current = current.next;
        }
        return total;
    }

    getFreeMemory() {
        let free = 0;
        let current = this.head;
        while (current) {
            if (!current.allocated) {
                free += current.size;
            }
            current = current.next;
        }
        return free;
    }

    getAllocatedMemory() {
        let allocated = 0;
        let current = this.head;
        while (current) {
            if (current.allocated) {
                allocated += current.size;
            }
            current = current.next;
        }
        return allocated;
    }

    render() {
        const container = document.getElementById('linkedlist-items');
        container.innerHTML = '';

        let current = this.head;
        while (current) {
            const blockDiv = document.createElement('div');
            blockDiv.className = `memory-block ${current.allocated ? 'allocated' : ''}`;
            blockDiv.dataset.id = current.id;
            blockDiv.innerHTML = `
                <h4>📦 Bloque ${current.id}</h4>
                <p>Tamaño: ${current.size} KB</p>
                <p>Estado: ${current.allocated ? '🔒 Asignado' : '🔓 Libre'}</p>
                ${current.allocated ? `<p>Owner: ${current.owner}</p>` : ''}
            `;
            
            // Add click handler for selection
            blockDiv.addEventListener('click', () => {
                document.querySelectorAll('.memory-block').forEach(b => {
                    b.style.border = current.allocated ? 
                        '3px solid var(--danger-color)' : 
                        '3px solid var(--warning-color)';
                });
                blockDiv.style.border = '3px solid #2ecc71';
                window.selectedBlockId = current.id;
            });
            
            container.appendChild(blockDiv);
            current = current.next;
        }

        if (!this.head) {
            container.innerHTML = '<p style="color: #7f8c8d; text-align: center; width: 100%;">No hay bloques de memoria</p>';
        }
    }

    updateInfo() {
        document.getElementById('list-size').textContent = this.size();
        document.getElementById('free-memory').textContent = this.getFreeMemory();
        document.getElementById('allocated-memory').textContent = this.getAllocatedMemory();
    }

    clear() {
        this.head = null;
        this.render();
        this.updateInfo();
    }
}

// Global linked list instance
const memoryList = new MemoryLinkedList();
window.selectedBlockId = null;

// Functions called from HTML
function addMemoryBlock() {
    const size = parseInt(document.getElementById('block-size').value);
    
    const block = {
        id: memoryList.blockId++,
        size: size,
        allocated: false,
        owner: '',
        next: null
    };

    memoryList.insertLast(block);
}

function allocateMemory() {
    if (!window.selectedBlockId) {
        alert('Por favor seleccione un bloque de memoria primero (haga clic en un bloque)');
        return;
    }

    const block = memoryList.find(window.selectedBlockId);
    if (!block) {
        alert('Bloque no encontrado');
        return;
    }

    if (block.allocated) {
        alert('El bloque ya está asignado');
        return;
    }

    const processes = ['Chrome', 'Firefox', 'VSCode', 'Spotify', 'Slack'];
    block.allocated = true;
    block.owner = processes[Math.floor(Math.random() * processes.length)];
    
    memoryList.render();
    memoryList.updateInfo();
    alert(`Bloque ${block.id} asignado a ${block.owner}`);
}

function freeMemory() {
    if (!window.selectedBlockId) {
        alert('Por favor seleccione un bloque de memoria primero (haga clic en un bloque)');
        return;
    }

    const block = memoryList.find(window.selectedBlockId);
    if (!block) {
        alert('Bloque no encontrado');
        return;
    }

    if (!block.allocated) {
        alert('El bloque ya está libre');
        return;
    }

    block.allocated = false;
    block.owner = '';
    
    memoryList.render();
    memoryList.updateInfo();
    window.selectedBlockId = null;
    alert('Memoria liberada exitosamente');
}

function removeBlock() {
    if (!window.selectedBlockId) {
        alert('Por favor seleccione un bloque de memoria primero (haga clic en un bloque)');
        return;
    }

    const success = memoryList.remove(window.selectedBlockId);
    if (success) {
        window.selectedBlockId = null;
        alert('Bloque eliminado exitosamente');
    } else {
        alert('No se pudo eliminar el bloque');
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Add default blocks
    for (let i = 0; i < 4; i++) {
        const sizes = [256, 512, 128, 1024];
        addMemoryBlock();
        document.getElementById('block-size').value = sizes[(i + 1) % sizes.length];
    }
    document.getElementById('block-size').value = '256';
});
