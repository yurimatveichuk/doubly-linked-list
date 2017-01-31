const Node = require('./node');

class LinkedList {
    constructor() {
    	             this.length = 0;
                   this._head = null;
                   this._tail = null;
                  }

    append(data) {
                	var node = new Node(data);
                	if(this.length)
                	{
                		this._tail.next = node;
                		node.previous= this._tail;
                		this._tail = node;
                	}
                	else {
                		this._head = node;
                		this._tail = node;
                	}
                	++this.length;
                	return this;
                  }

    head() {
    	      return this._head.data;
           }

    tail() {
    	      return this._tail.data;
           }

    at(index) {
            	var node = this._head;
            	for(var i = 0; i < index; ++i)
            		node = node.next;
            	return node.data;
              }

    insertAt(index, data) {
            	var new_node = new Node(data);
            	var next_node = this._head;
            	for(var i = 0; i < index; ++i)
            		next_node = next_node.next;
            	if(index != 0)
            	{
            		next_node.previous.next = new_node;
            	}
            	new_node.next = next_node;
            	new_node.previous= next_node.previous;
            	next_node.previous= new_node;
            	++this.length;
              }

    isEmpty() {
            	if(this.length) return false;
            	return true;
              }

    clear() {
            	this._head.data = null;
            	this._tail.data = null;
            	this.length = 0;

            	return this;
            }

    deleteAt(index) {
                  	var node = this._head;
                  	for (var i = 0; i < index; ++i)
                  		node = node.next;
                  	if (node.previous!= null)
                  		node.previous.next = node.next;
                  	if (node.next != null)
                  		node.next.previous= node.previous;
                  	--this.length;
                  	node.next = null;
                  	node.previous= null;

                  	return this;
                    }

    reverse() {
            	var node = this._head;
            	var swap = this._head;
            	this._head = this._tail;
            	this._tail = swap;

            	for(var i = 0; i < this.length; ++i)
            	{
            		swap = node.previous;
            		node.previous= node.next;
            		node.next = swap;
            		node = node.previous;
            	}
            	return this;
            }

    indexOf(data) {
                	var node = this._head;
                	for(var i = 0; i < this.length; ++i)
                	{
                		if(node.data == data) return i;
                		node = node.next;
                	}
                	return -1;
                }
              }

module.exports = LinkedList;
