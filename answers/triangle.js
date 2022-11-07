/*
A coloured triangle is created from a row of colours, each of which is red, green or blue. Successive rows, each containing one fewer colour than the last, are generated by considering the two touching colours in the previous row. If these colours are identical, the same colour is used in the new row. If they are different, the missing colour is used in the new row. This is continued until the final row, with only a single colour, is generated.

The different possibilities are:

Colour here:        G G        B G        R G        B R
Becomes colour:      G          R          B          G
*/
/*
AD notes:
in the case of triangle('RGBG'), I expect the output to be 'G', not 'B' based on:
R G B G
 B R R
  G R
   B
*/
const processRgb = (rgbPair) => {
  if (rgbPair[0] === rgbPair[1]) return rgbPair[0]
  for (char of ["R", "G", "B"]) if (!rgbPair.includes(char)) return char
} 

const triangle = (input) => {
  let output = [...input];
  output = output.slice(0, output.length -1).map((e, i) => processRgb([e, output[i+1]]));

  return input.length === 1 ? input : triangle(output.join(''))
}

console.log(triangle('RBRGBRBGGRRRBGBBBGG'), " Should return: G")
console.log(triangle('RGBG'), " Should return: B")