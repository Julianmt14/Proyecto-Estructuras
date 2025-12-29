#ifndef STACK_H
#define STACK_H

#include <iostream>
#include <string>

// Estructura para representar una llamada de función
struct FunctionCall {
    int id;
    std::string name;
    std::string params;
    int lineNumber;
    
    FunctionCall(int _id, std::string _name, std::string _params, int _line)
        : id(_id), name(_name), params(_params), lineNumber(_line) {}
};

// Nodo para la pila
template<typename T>
struct StackNode {
    T data;
    StackNode* next;
    
    StackNode(T _data) : data(_data), next(nullptr) {}
};

// Implementación de Pila (Stack) para call stack
template<typename T>
class Stack {
private:
    StackNode<T>* top;
    int size;
    
public:
    Stack() : top(nullptr), size(0) {}
    
    ~Stack() {
        while (!isEmpty()) {
            pop();
        }
    }
    
    // Agregar elemento al tope de la pila
    void push(T data) {
        StackNode<T>* newNode = new StackNode<T>(data);
        newNode->next = top;
        top = newNode;
        size++;
    }
    
    // Remover elemento del tope de la pila
    T pop() {
        if (isEmpty()) {
            throw std::runtime_error("Stack is empty");
        }
        
        StackNode<T>* temp = top;
        T data = top->data;
        top = top->next;
        delete temp;
        size--;
        return data;
    }
    
    // Ver el elemento del tope sin removerlo
    T peek() const {
        if (isEmpty()) {
            throw std::runtime_error("Stack is empty");
        }
        return top->data;
    }
    
    bool isEmpty() const {
        return top == nullptr;
    }
    
    int getSize() const {
        return size;
    }
    
    // Obtener todos los elementos como string para visualización
    std::string toString() const {
        std::string result = "[";
        StackNode<T>* current = top;
        
        while (current != nullptr) {
            result += current->data.name;
            if (current->next != nullptr) {
                result += ", ";
            }
            current = current->next;
        }
        
        result += "]";
        return result;
    }
};

#endif // STACK_H
