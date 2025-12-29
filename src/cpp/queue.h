#ifndef QUEUE_H
#define QUEUE_H

#include <iostream>
#include <string>

// Estructura para representar un proceso
struct Process {
    int id;
    std::string name;
    int priority;
    int burstTime;
    std::string state; // "ready", "running", "completed"
    
    Process(int _id, std::string _name, int _priority, int _burstTime) 
        : id(_id), name(_name), priority(_priority), burstTime(_burstTime), state("ready") {}
};

// Nodo para la cola
template<typename T>
struct QueueNode {
    T data;
    QueueNode* next;
    
    QueueNode(T _data) : data(_data), next(nullptr) {}
};

// Implementación de Cola (Queue) para scheduling de procesos
template<typename T>
class Queue {
private:
    QueueNode<T>* front;
    QueueNode<T>* rear;
    int size;
    
public:
    Queue() : front(nullptr), rear(nullptr), size(0) {}
    
    ~Queue() {
        while (!isEmpty()) {
            dequeue();
        }
    }
    
    // Agregar elemento al final de la cola
    void enqueue(T data) {
        QueueNode<T>* newNode = new QueueNode<T>(data);
        
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }
        size++;
    }
    
    // Remover elemento del frente de la cola
    T dequeue() {
        if (isEmpty()) {
            throw std::runtime_error("Queue is empty");
        }
        
        QueueNode<T>* temp = front;
        T data = front->data;
        front = front->next;
        
        if (front == nullptr) {
            rear = nullptr;
        }
        
        delete temp;
        size--;
        return data;
    }
    
    // Ver el elemento del frente sin removerlo
    T peek() const {
        if (isEmpty()) {
            throw std::runtime_error("Queue is empty");
        }
        return front->data;
    }
    
    bool isEmpty() const {
        return front == nullptr;
    }
    
    int getSize() const {
        return size;
    }
    
    // Obtener todos los elementos como string para visualización
    std::string toString() const {
        std::string result = "[";
        QueueNode<T>* current = front;
        
        while (current != nullptr) {
            result += std::to_string(current->data.id);
            if (current->next != nullptr) {
                result += ", ";
            }
            current = current->next;
        }
        
        result += "]";
        return result;
    }
};

#endif // QUEUE_H
