class Node{
    constructor(value){
        this.data = value;
        this.previous = null;
        this.next = null;
    }
}

class Doubly_Linked_list{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    add(value){
        let node = new Node(value);

        if (this.length) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
        return node;
    }

    search(position){
        let current_node = this.head,
            length = this.length,
            count = 1,
            message = {failure:"No node in list."};

        //1st use-case: an invalid position
        if(length === 0 || position < 1 || position > length){
            ///throw new Error(message.failure);
            console.log(message.failure);
        }

        //2nd use-case: a valid position
        while(count < position){
            current_node = current_node.next;
            count++;
        }

        return current_node;
    }

    remove(position){
        let currentNode = this.head,
            length = this.length,
            count = 1,
            message = {
                failure: 'Failure: non-existent node in this list.',
                success:'Success: removed existing node in this list'
            },
            before_node_to_delete = null,
            after_node_to_delete = null,
            node_to_delete = null,
            delete_node = null;

        // 1st use-case: an invalid position
        if (length === 0 || position < 1 || position > length) {
            throw new Error(message.failure);
        }

        // 2nd use-case: the first node is removed
        if (position === 1) {
            this.head = currentNode.next;

            // 2nd use-case: there is a second node
            if (!this.head) {
                this.head.previous = null;
                // 2nd use-case: there is no second node
            } else {
                this.tail = null;
            }

            // 3rd use-case: the last node is removed
        } else if (position === this.length) {
            this.tail = this.tail.previous;
            this.tail.next = null;
            // 4th use-case: a middle node is removed
        } else {
            while (count < position) {
                currentNode = currentNode.next;
                count++;
            }

            before_node_to_delete = currentNode.previous;
            node_to_delete = currentNode;
            after_node_to_delete = currentNode.next;

            before_node_to_delete.next = after_node_to_delete;
            after_node_to_delete.previous = before_node_to_delete;
            delete_node = node_to_delete;
            node_to_delete = null;
        }

        this.length--;

        return message.success;
    }
}