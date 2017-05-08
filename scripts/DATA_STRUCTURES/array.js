class My_Array{
    constructor(){
        this.array = [];
    }

    add(data){
        this.array.push(data);
    }

    remove(data){
        this.array = this.array.filter((current) => {
            return current !== data;
        });
    }

    search(data){
        let found_index = this.array.indexOf(data);
        if(!found_index){
            return null;
        }else{
            return found_index;
        }
    }

    index(index){
        return this.array[index];
    }

    length(){
        return this.array.length;
    }

    print(){
        console.log(this.array.join(''));
        console.log(typeof this.array.join(''));
    }
}

let a = new My_Array();
a.add("Water");
a.add("The");
a.add("HO");

a.print();
