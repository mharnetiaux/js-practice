/*
 In computer science, a singly-linked list is a data structure that holds a sequence of linked nodes.
 Each node, in turn, contains data and a pointer, which can point to another node.

 Singly-linked list contains Nodes
 Each Node contains Data and a pointer, which can point to another Node

 Node(data,next);

 SinglyList(_length, head, add(value), searchNodeAt(position), remove(position));

*/


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyList{
    constructor(){
        this._length = 0;
        this.head  = null;
    }
}

SinglyList.prototype.add = function(value){

    let node = new Node(value),
        currentNode = this.head;

    ////1st case: empty list
    if(!currentNode){
        this.head = node;
        this._length++;
        return node;
    }

    ///2nd case: a non empty list
    while(currentNode.next){
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
};


