// Tree implementation for file system
class FileSystemTree {
    constructor() {
        this.root = {
            id: 1,
            name: 'root',
            type: 'directory',
            size: 0,
            children: [],
            parent: null
        };
        this.nodeId = 2;
        this.selectedNode = this.root;
    }

    addChild(parentId, node) {
        const parent = this.findNode(this.root, parentId);
        if (!parent || parent.type !== 'directory') {
            return null;
        }

        node.parent = parent;
        parent.children.push(node);
        this.render();
        this.updateInfo();
        return node;
    }

    findNode(node, id) {
        if (node.id === id) return node;
        
        for (let child of node.children) {
            const found = this.findNode(child, id);
            if (found) return found;
        }
        
        return null;
    }

    removeNode(id) {
        if (id === this.root.id) {
            alert('No se puede eliminar el nodo raíz');
            return false;
        }

        const node = this.findNode(this.root, id);
        if (!node || !node.parent) return false;

        const parent = node.parent;
        const index = parent.children.indexOf(node);
        if (index > -1) {
            parent.children.splice(index, 1);
            if (this.selectedNode.id === id) {
                this.selectedNode = this.root;
            }
            this.render();
            this.updateInfo();
            return true;
        }
        return false;
    }

    countNodes(node = this.root) {
        let count = 1;
        for (let child of node.children) {
            count += this.countNodes(child);
        }
        return count;
    }

    renderNode(node, container, level = 0) {
        const nodeDiv = document.createElement('div');
        nodeDiv.className = 'tree-node';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = `tree-node-content ${node.type}`;
        if (node.id === this.selectedNode.id) {
            contentDiv.classList.add('selected');
        }
        
        const icon = node.type === 'directory' ? '📁' : '📄';
        const sizeInfo = node.type === 'file' ? ` (${node.size} KB)` : '';
        
        contentDiv.innerHTML = `
            <span>${icon}</span>
            <span>${node.name}${sizeInfo}</span>
        `;
        
        contentDiv.addEventListener('click', (e) => {
            e.stopPropagation();
            this.selectedNode = node;
            this.render();
            this.updateInfo();
        });
        
        nodeDiv.appendChild(contentDiv);
        
        if (node.children.length > 0) {
            const childrenDiv = document.createElement('div');
            childrenDiv.className = 'tree-node-children';
            
            for (let child of node.children) {
                this.renderNode(child, childrenDiv, level + 1);
            }
            
            nodeDiv.appendChild(childrenDiv);
        }
        
        container.appendChild(nodeDiv);
    }

    render() {
        const container = document.getElementById('tree-items');
        container.innerHTML = '';
        this.renderNode(this.root, container);
    }

    updateInfo() {
        document.getElementById('node-count').textContent = this.countNodes();
        document.getElementById('selected-node').textContent = 
            `${this.selectedNode.name} (${this.selectedNode.type})`;
    }

    clear() {
        this.root = {
            id: 1,
            name: 'root',
            type: 'directory',
            size: 0,
            children: [],
            parent: null
        };
        this.nodeId = 2;
        this.selectedNode = this.root;
        this.render();
        this.updateInfo();
    }
}

// Global tree instance
const fileSystemTree = new FileSystemTree();

// Functions called from HTML
function addNode() {
    const name = document.getElementById('node-name').value.trim();
    const type = document.getElementById('node-type').value;
    const size = parseInt(document.getElementById('file-size').value);

    if (!name) {
        alert('Por favor ingrese un nombre para el nodo');
        return;
    }

    if (fileSystemTree.selectedNode.type !== 'directory') {
        alert('Debe seleccionar un directorio para agregar nodos');
        return;
    }

    const node = {
        id: fileSystemTree.nodeId++,
        name: name,
        type: type,
        size: type === 'file' ? size : 0,
        children: [],
        parent: null
    };

    fileSystemTree.addChild(fileSystemTree.selectedNode.id, node);
    
    // Clear inputs
    document.getElementById('node-name').value = '';
    document.getElementById('file-size').value = '100';
}

function removeNode() {
    if (fileSystemTree.selectedNode.id === fileSystemTree.root.id) {
        alert('No se puede eliminar el nodo raíz');
        return;
    }

    const nodeName = fileSystemTree.selectedNode.name;
    if (confirm(`¿Está seguro de eliminar "${nodeName}" y todos sus hijos?`)) {
        fileSystemTree.removeNode(fileSystemTree.selectedNode.id);
    }
}

function loadDefaultTree() {
    fileSystemTree.clear();
    
    // Create default structure
    const home = {
        id: fileSystemTree.nodeId++,
        name: 'home',
        type: 'directory',
        size: 0,
        children: [],
        parent: null
    };
    fileSystemTree.addChild(1, home);
    
    const user = {
        id: fileSystemTree.nodeId++,
        name: 'user',
        type: 'directory',
        size: 0,
        children: [],
        parent: null
    };
    fileSystemTree.addChild(home.id, user);
    
    fileSystemTree.addChild(user.id, {
        id: fileSystemTree.nodeId++,
        name: 'documents.txt',
        type: 'file',
        size: 150,
        children: [],
        parent: null
    });
    
    fileSystemTree.addChild(user.id, {
        id: fileSystemTree.nodeId++,
        name: 'photos.jpg',
        type: 'file',
        size: 2048,
        children: [],
        parent: null
    });
    
    const projects = {
        id: fileSystemTree.nodeId++,
        name: 'projects',
        type: 'directory',
        size: 0,
        children: [],
        parent: null
    };
    fileSystemTree.addChild(user.id, projects);
    
    fileSystemTree.addChild(projects.id, {
        id: fileSystemTree.nodeId++,
        name: 'app.cpp',
        type: 'file',
        size: 45,
        children: [],
        parent: null
    });
    
    fileSystemTree.addChild(projects.id, {
        id: fileSystemTree.nodeId++,
        name: 'readme.md',
        type: 'file',
        size: 12,
        children: [],
        parent: null
    });
    
    const usr = {
        id: fileSystemTree.nodeId++,
        name: 'usr',
        type: 'directory',
        size: 0,
        children: [],
        parent: null
    };
    fileSystemTree.addChild(1, usr);
    
    fileSystemTree.addChild(usr.id, {
        id: fileSystemTree.nodeId++,
        name: 'bin',
        type: 'directory',
        size: 0,
        children: [],
        parent: null
    });
    
    fileSystemTree.addChild(usr.id, {
        id: fileSystemTree.nodeId++,
        name: 'lib',
        type: 'directory',
        size: 0,
        children: [],
        parent: null
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    loadDefaultTree();
});
