class Sorter {
  constructor() {
    this.Array = [];
    this.Comparator = (left, right) => left - right;
  }

  add(element) {
    this.Array.push(element);
  }

  at(index) {
    return this.Array[index];
  }

  get length() {
    return this.Array.length;
  }

  toArray() {
    return this.Array;
  }

  sort(indices) {
    let bufArray = [];
    for (let index = 0; index < indices.length; index++) {
      bufArray.push(this.Array[indices[index]]);
    }
    bufArray.sort(this.Comparator);
    indices.sort();
    for (let index = 0; index < bufArray.length; index++) {
      this.Array[indices[index]] = bufArray[index];
    }
  }

  setComparator(compareFunction) {
    this.Comparator = compareFunction;
  }
}

module.exports = Sorter;
