const animations = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]

const loadingAnimation = (symbols) => {
  count = 0
  for (let symbol of symbols) {
    setTimeout(() => {
      process.stdout.write(`\r${symbol}`)
    }, 100 + count);
    count += 200
  }
  setTimeout(() => {
    console.log()
  }, 100 + count);
}

loadingAnimation(animations);

