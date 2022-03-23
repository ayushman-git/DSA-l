"use strict";
class LinkNode {
    constructor(data) {
        this._data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}
const node1 = new LinkNode(23);
const node2 = new LinkNode(43);
node1.next = node2;
const linkedList = new LinkedList(node1);
console.log(linkedList);
