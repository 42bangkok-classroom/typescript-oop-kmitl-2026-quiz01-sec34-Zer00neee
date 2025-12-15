const size = Number(process.argv[2]);
if (isNaN(size) || size <= 0) {
  process.exit(0);
}
for (let i = 1; i <= size; i++) {
  console.log(String(i).repeat(size));
}
