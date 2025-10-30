#ifndef TREE_H
#define TREE_H

#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

// Estructura para representar un nodo del sistema de archivos
struct FileNode {
    int id;
    std::string name;
    std::string type; // "file" o "directory"
    int size;
    
    FileNode(int _id, std::string _name, std::string _type, int _size = 0)
        : id(_id), name(_name), type(_type), size(_size) {}
};

// Nodo para el árbol
struct TreeNode {
    FileNode data;
    std::vector<TreeNode*> children;
    TreeNode* parent;
    
    TreeNode(FileNode _data) : data(_data), parent(nullptr) {}
    
    ~TreeNode() {
        for (TreeNode* child : children) {
            delete child;
        }
    }
};

// Implementación de Árbol para sistema de archivos
class Tree {
private:
    TreeNode* root;
    int nodeCount;
    
    // Función auxiliar para buscar nodo recursivamente
    TreeNode* findNodeRecursive(TreeNode* node, int id) {
        if (node == nullptr) return nullptr;
        if (node->data.id == id) return node;
        
        for (TreeNode* child : node->children) {
            TreeNode* result = findNodeRecursive(child, id);
            if (result != nullptr) return result;
        }
        return nullptr;
    }
    
    // Función auxiliar para imprimir árbol recursivamente
    void printTreeRecursive(TreeNode* node, std::string prefix, std::string& result) const {
        if (node == nullptr) return;
        
        result += prefix + node->data.name;
        if (node->data.type == "directory") {
            result += "/";
        }
        result += "\n";
        
        for (size_t i = 0; i < node->children.size(); i++) {
            bool isLast = (i == node->children.size() - 1);
            std::string newPrefix = prefix + (isLast ? "  " : "| ");
            std::string connector = isLast ? "└─" : "├─";
            printTreeRecursive(node->children[i], prefix + connector, result);
        }
    }
    
public:
    Tree(FileNode rootData) : nodeCount(1) {
        root = new TreeNode(rootData);
    }
    
    ~Tree() {
        delete root;
    }
    
    TreeNode* getRoot() const {
        return root;
    }
    
    // Buscar nodo por ID
    TreeNode* findNode(int id) {
        return findNodeRecursive(root, id);
    }
    
    // Agregar hijo a un nodo
    TreeNode* addChild(int parentId, FileNode childData) {
        TreeNode* parent = findNode(parentId);
        if (parent == nullptr || parent->data.type != "directory") {
            return nullptr;
        }
        
        TreeNode* newNode = new TreeNode(childData);
        newNode->parent = parent;
        parent->children.push_back(newNode);
        nodeCount++;
        return newNode;
    }
    
    // Remover nodo (y todos sus hijos)
    bool removeNode(int id) {
        if (id == root->data.id) {
            return false; // No se puede eliminar el root
        }
        
        TreeNode* node = findNode(id);
        if (node == nullptr || node->parent == nullptr) {
            return false;
        }
        
        TreeNode* parent = node->parent;
        auto it = std::find(parent->children.begin(), parent->children.end(), node);
        if (it != parent->children.end()) {
            parent->children.erase(it);
            delete node;
            nodeCount--;
            return true;
        }
        return false;
    }
    
    int getNodeCount() const {
        return nodeCount;
    }
    
    // Obtener representación en string del árbol
    std::string toString() const {
        std::string result = "";
        printTreeRecursive(root, "", result);
        return result;
    }
};

#endif // TREE_H
