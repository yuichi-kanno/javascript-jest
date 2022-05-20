class Range {
  constructor(num1, num2) {
    this.range = [num1, num2];
  }

  getLowerEndpoint() {
    return this.range[0];
  }

  getUpperEndpoint() {
    return this.range[1];
  }

  convertToString() {
    return `[${this.range[0]}, ${this.range[1]}]`;
  }

  // rangeにnum3が含まれるか判定
  judge(num3) {
    return num3 >= this.range[0] && num3 <= this.range[1];
  }
}

module.exports = Range;
