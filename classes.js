export class BubbleSort {
  swapright(array = [], j = 0) {
    let temp = array[j];
    array[j] = array[j + 1];
    array[j + 1] = temp;
  }

  sort(array = []) {
    let sorted = true;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i; j++) {
        if (array[j] > array[j + 1]) {
          this.swapright(array, j);
          sorted = false;
        }
      }

      if (sorted) {
        break;
      }
    }
  }
}

export class StirngReverse {
  reverseObject(obj, revObj) {
    for (let i = 0; i <= obj.length; i++) {
      revObj[i] = obj[obj.length - i];
    }
  }
  reverse(str = "") {
    let tempStringArray = new Array(str.length);
    this.reverseObject(str, tempStringArray);
    return tempStringArray.join("");
  }

  reverseWords(str = "Trees are beautiful") {
    let temp = str.split(" ");
    let revTemp = new Array(temp.length);
    this.reverseObject(temp, revTemp);
    return revTemp.join(" ");
  }
}

export class Hash {}

export class Node {}

export class LinkedList {}

export class StringCapital extends String {
  constructor(string) {
    super(string);
    this.str = string;
  }
  capitalize() {
    console.log(this.str);
  }
}
