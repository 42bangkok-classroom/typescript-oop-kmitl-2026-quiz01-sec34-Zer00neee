const size = Number(process.argv[2]);

for (let row = 1; row <= size; row++) {
  if (row % 2 === 1) {
    console.log("1".repeat(size));
  } else {
    console.log("0".repeat(size));
  }
}
