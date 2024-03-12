import { createNode } from "./node.js"

class LinkedList {
    node = null

    constructor(start){
        this.node = start
    }

    append(value){
        const node = createNode(value)
        let tail = this.tail()
        if (tail) {
            tail.next = node 
            return
        }

        this.node = node
    }

    prepend(value){
        const node = createNode(value)
        node.next = this.node

        this.node = node
    }

    size(){
        let size = 0
        let ll = this.node
        while (ll && ll.value){
            size++
            ll = ll.next
        }

        return size
    }

    head(){
        return this.node
    }

    tail(){
        let ll = this.node
        while (ll && ll.value){
            if (!ll.next) return ll;
            ll = ll.next
        }

        return null
    }

    at(index){
        let size = 0
        let ll = this.node
        while (ll && ll.value){
            if (index == size) return ll
            size++
            ll = ll.next
        }

        return null
    }

    pop(){
        if (this.size() >= 2){
            let n = this.at(this.size() - 2)

            if (n){
                n.next = null
            }
        } else {
            this.node = null
        }
    }

    contains(value){
        let ll = this.node
        while (ll && ll.value){
            if (ll.value == value) return true
            ll = ll.next
        }

        return false
    }

    find(value){
        let ll = this.node
        while (ll && ll.value){
            if (ll.value == value) return ll
            ll = ll.next
        }

        return null
    }

    toString(){
        let result = ""
        let ll = this.node
        while (ll && ll.value){
            result+=`(${ll.value}) -> `
            ll = ll.next
        }

        return result+'null'
    }

    insertAt(value, index){
        let nn = this.at(index)
            
        let prev = this.at(index - 1)
        if (prev){
            prev.next = createNode(value, nn)
        } else {
            this.node = createNode(value, nn)
        }
    }

    removeAt(index){
        if (index <= this.size() - 1 && index > -1){
            let prev = this.at(index - 1)
            let next = this.at(index + 1)

            if (prev && next){
                prev.next = next
            } else if (!prev){
                this.node = next
            } else if (!next){
                prev.next = null
            } else {
                this.node = null
            }
        }
    }
}

const ll = new LinkedList()
ll.append(1)
console.log(ll.toString())
ll.append(2)
console.log(ll.toString())
ll.append(3)
console.log(ll.toString())
ll.append(4)
console.log(ll.toString())
ll.append(5)
console.log(ll.toString())
ll.prepend(5)
console.log(ll.toString())
ll.removeAt(4)
console.log(ll.toString())
ll.insertAt(10,0)
console.log(ll.toString())
ll.removeAt(3)
console.log(ll.toString())
ll.insertAt(11, 5)
console.log(ll.toString())