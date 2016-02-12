function doubleList () { 
    this._length = 0;
    this.head = null;
    this.tail = null; 
}

function Node (value) { 
    this.data = value;
    this.previous = null;
    this.next = null; 
}

doubleList.prototype.add = function (value) { 
  	var element = new Node(value);
	if (!this.head) {
   		this.head = element; 
   		this._length++
   		return;
	}
	var current = this.head;
	while (current) {
		var temp = current;
		current = current.next;
	}
	
	temp.next = element;
	this._length++;
}; 