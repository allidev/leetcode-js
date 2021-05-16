class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  Size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.Size() === 0;
  }
  Peek() {
    return this._heap[0];
  }
  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }
  _leftChild(idx) {
    return idx * 2 + 1;
  }
  _rightChild(idx) {
    return idx * 2 + 2;
  }
  _swap(i, j) {
    const temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }
  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  Push(value) {
    this._heap.push(value);
    this._siftUp();
    return this.Size();
  }
  _siftUp() {
    let nodeIdx = this.Size() - 1;
    while (nodeIdx > 0 && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }
  Pop() {
    if (this.Size() > 1) {
      this._swap(0, this.Size() - 1);
    }
    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  _siftDown() {
    let nodeIdx = 0;
    while (
      (this._leftChild(nodeIdx) < this.Size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.Size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterNodeIdx =
        this._rightChild(nodeIdx) < this.Size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);
      this._swap(greaterNodeIdx, nodeIdx);
      nodeIdx = greaterNodeIdx;
    }
  }
}
