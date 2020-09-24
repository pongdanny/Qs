// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor (val) {
        this.value = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.back = null
        this.length = 0
    }
    enqueue(input) {
        let newNode = new Node (input)
        if (this.length === 0) {
            this.front = newNode
            this.back = newNode
        } else {
            this.back.next = newNode
            this.back =newNode
        }
        return ++ this.length

    }

    dequeue() {
        let oldNode = this.front
        if (!this.length) {
            return null
        }
        if( this.length === 1) {
            this.front = null
            this.back = null
        } else {
            let secondNode = oldNode.next
            this.front = secondNode

        }
        -- this.length
        return oldNode.value

    }

    size() {
        return this.length
    }

}

exports.Node = Node;
exports.Queue = Queue;
