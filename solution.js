function Node(val) {
    this.value = val
    this.next = null
}
//
function LinkedList() {
    this.head = null
    this.appendNode = function (val) {
        if (!this.head) {
            return this.head = new Node(val)
        }
        _appendHelper(val, this.head)
    }
    _appendHelper = function (val, curr) {
        if (!curr.next) {
            return curr.next = new Node(val)
        }
        _appendHelper(val, curr.next)
    }
    this.print = function (headNode) {
        if (!headNode.next) {
            return console.log("Node-->", headNode)
        }
        console.log("Node-->", headNode)
        this.print(headNode.next)
    }
    this.remove = function (val, currNode, prevNode = null) {
        if (this.head.value = val) {
            return this.head = this.head.next
        }
        if (currNode.value === val) {
            console.log("curr:",currNode,"prev:",prevNode, "next Node:",currNode.next)            
            prevNode.next = currNode.next
            return 
        }
        prevNode = currNode
        currNode = currNode.next
        this.remove(val, currNode, prevNode)
    }
    this.rotate = function (curr, prev=null, next=null) {
        if (!curr.next) {
            curr.next = prev
            return this.head = curr
        }
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
        this.rotate(curr, prev, next)
    }
}
// set up
const list = new LinkedList()
list.appendNode(3)
list.appendNode(5)
list.appendNode(7)
list.appendNode(9)
// driver code
list.rotate(list.head)
list.print(list.head)
