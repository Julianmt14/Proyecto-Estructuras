#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include <iostream>
#include <string>

// Estructura para representar un bloque de memoria
struct MemoryBlock {
    int id;
    int size;
    bool allocated;
    std::string owner;
    
    MemoryBlock(int _id, int _size, bool _allocated = false, std::string _owner = "")
        : id(_id), size(_size), allocated(_allocated), owner(_owner) {}
};

// Nodo para la lista enlazada
template<typename T>
struct ListNode {
    T data;
    ListNode* next;
    
    ListNode(T _data) : data(_data), next(nullptr) {}
};

// Implementación de Lista Enlazada para gestión de memoria
template<typename T>
class LinkedList {
private:
    ListNode<T>* head;
    int size;
    
public:
    LinkedList() : head(nullptr), size(0) {}
    
    ~LinkedList() {
        while (!isEmpty()) {
            removeFirst();
        }
    }
    
    // Agregar elemento al inicio
    void insertFirst(T data) {
        ListNode<T>* newNode = new ListNode<T>(data);
        newNode->next = head;
        head = newNode;
        size++;
    }
    
    // Agregar elemento al final
    void insertLast(T data) {
        ListNode<T>* newNode = new ListNode<T>(data);
        
        if (isEmpty()) {
            head = newNode;
        } else {
            ListNode<T>* current = head;
            while (current->next != nullptr) {
                current = current->next;
            }
            current->next = newNode;
        }
        size++;
    }
    
    // Remover primer elemento
    T removeFirst() {
        if (isEmpty()) {
            throw std::runtime_error("List is empty");
        }
        
        ListNode<T>* temp = head;
        T data = head->data;
        head = head->next;
        delete temp;
        size--;
        return data;
    }
    
    // Buscar elemento por ID
    ListNode<T>* find(int id) {
        ListNode<T>* current = head;
        while (current != nullptr) {
            if (current->data.id == id) {
                return current;
            }
            current = current->next;
        }
        return nullptr;
    }
    
    // Remover elemento por ID
    bool remove(int id) {
        if (isEmpty()) {
            return false;
        }
        
        if (head->data.id == id) {
            removeFirst();
            return true;
        }
        
        ListNode<T>* current = head;
        while (current->next != nullptr) {
            if (current->next->data.id == id) {
                ListNode<T>* temp = current->next;
                current->next = current->next->next;
                delete temp;
                size--;
                return true;
            }
            current = current->next;
        }
        return false;
    }
    
    bool isEmpty() const {
        return head == nullptr;
    }
    
    int getSize() const {
        return size;
    }
    
    // Obtener todos los elementos como string para visualización
    std::string toString() const {
        std::string result = "[";
        ListNode<T>* current = head;
        
        while (current != nullptr) {
            result += "Block" + std::to_string(current->data.id);
            if (current->next != nullptr) {
                result += " -> ";
            }
            current = current->next;
        }
        
        result += "]";
        return result;
    }
    
    ListNode<T>* getHead() const {
        return head;
    }
};

#endif // LINKEDLIST_H
