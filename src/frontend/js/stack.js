// Stack implementation for call stack
class CallStack {
    constructor() {
        this.items = [];
        this.callId = 1;
    }

    push(functionCall) {
        this.items.push(functionCall);
        this.render();
        this.updateInfo();
    }

    pop() {
        if (this.isEmpty()) {
            alert('La pila está vacía!');
            return null;
        }
        const call = this.items.pop();
        this.render();
        this.updateInfo();
        return call;
    }

    peek() {
        return this.isEmpty() ? null : this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    render() {
        const container = document.getElementById('stack-items');
        container.innerHTML = '';

        // Display from top to bottom (reverse order)
        for (let i = this.items.length - 1; i >= 0; i--) {
            const call = this.items[i];
            const callDiv = document.createElement('div');
            callDiv.className = 'function-item';
            callDiv.innerHTML = `
                <h4>⚡ ${call.name}${call.params}</h4>
                <p>ID: ${call.id}</p>
                <p>Línea: ${call.line}</p>
            `;
            container.appendChild(callDiv);
        }

        if (this.isEmpty()) {
            container.innerHTML = '<p style="color: #7f8c8d; text-align: center;">La pila está vacía</p>';
        }
    }

    updateInfo() {
        document.getElementById('stack-size').textContent = this.size();
        const current = this.peek();
        document.getElementById('current-function').textContent = 
            current ? `${current.name}${current.params}` : 'Ninguna';
    }

    clear() {
        this.items = [];
        this.render();
        this.updateInfo();
    }
}

// Global stack instance
const callStack = new CallStack();

// Functions called from HTML
function pushFunction() {
    const name = document.getElementById('function-name').value.trim();
    const params = document.getElementById('function-params').value.trim();

    if (!name) {
        alert('Por favor ingrese un nombre de función');
        return;
    }

    const functionCall = {
        id: callStack.callId++,
        name: name,
        params: params || '()',
        line: Math.floor(Math.random() * 100) + 1
    };

    callStack.push(functionCall);
    
    // Clear inputs
    document.getElementById('function-name').value = '';
    document.getElementById('function-params').value = '';
}

function popFunction() {
    const call = callStack.pop();
    if (call) {
        alert(`Retornando de función: ${call.name}${call.params}\nLínea: ${call.line}`);
    }
}

function simulateRecursion() {
    callStack.clear();
    
    // Simulate factorial(5) recursion
    const functions = [
        { name: 'main', params: '()', line: 1 },
        { name: 'factorial', params: '(5)', line: 10 },
        { name: 'factorial', params: '(4)', line: 11 },
        { name: 'factorial', params: '(3)', line: 11 },
        { name: 'factorial', params: '(2)', line: 11 },
        { name: 'factorial', params: '(1)', line: 11 }
    ];

    let delay = 0;
    functions.forEach((func, index) => {
        setTimeout(() => {
            func.id = callStack.callId++;
            callStack.push(func);
        }, delay);
        delay += 500;
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    callStack.render();
    callStack.updateInfo();
});
