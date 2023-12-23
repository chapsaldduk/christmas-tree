function printChristmasTree(height) {
  for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
  console.log("\n\n Merry christmas!");
}

const treeHeight = 10;
printChristmasTree(treeHeight);
