class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Singly_Linked_List{
    constructor(length,head){
        this.length = 0;
        this.head = null;
    }

    add(data) {
        let node = new Node(data),
            current_node = this.head;

        //1st use-case:an empty list
        if (!current_node) {
            this.head = node;
            this.length++;
            return node;
        }

        //2nd use-case: a non-empty list
        while(current_node.next){
            current_node = current_node.next;
        }

        current_node.next = node;
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
        let current_node = this.head,
            length = this.length,
            count = 0,
            message = {failure:'non-existent node in the list'},
            before_node_to_delete = null,
            node_to_delete = null,
            delete_node = null;

        //1st case: an invalid position
        if(position < 0 || position > length){
            console.log(message.failure);
        }

        //2nd case: the first node is removed
        if(position === 1){
            this.head = current_node.next;
            delete_node = current_node;
            current_node = null;
            this.length--;

            return delete_node;
        }

        //3rd case: any other node is removed
        while(count < position){
            before_node_to_delete = current_node;
            node_to_delete = current_node.next;
            count++;
        }

        before_node_to_delete.next = node_to_delete.next;
        delete_node = node_to_delete;
        node_to_delete = null;
        this.length--;

        return delete_node;
    }
}

let list = new Singly_Linked_List();
list.add(1);
list.add(2);
console.log(list);

