function printLoadingEffect(symbol = ".", animationLength = 10, period = 300) {
  let repeat = 1;

  return setInterval(() => {
    if (repeat > 0) {
      process.stdout.write(`\r${symbol.repeat(repeat)}`);
    } else {
      process.stdout.write(`\r${" ".repeat(animationLength)}`);
      process.stdout.write(`\r`);
    }
    repeat++;
    repeat = repeat % animationLength;
  }, period);
}

module.exports = printLoadingEffect;
