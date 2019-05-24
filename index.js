
async function main () {
  const { variables } = await readConfig()
  const appendDestFile = makeAppendDestFile('./generated.css')
  const perBreakpoint = makePerBreakpoint(variables.breakpoints)

  await cleanDestFile('./generated.css')

  const colors = perBreakpoint(generateColors, variables.colors)
  await appendDestFile(colors, 'Wrote colors to file successfully')

  // const spacing = perBreakpoint(generateSpacing, variables.spacing)
  // await appendDestFile(spacing, 'Wrote spacing to file successfully')

  // const borders = perBreakpoint(generateBorders, variables.border)
  // await appendDestFile(borders, 'Wrote borders to file successfully')

  // readConfig()
  //  .then(checkForExistingDestFile)
  //  .then(cleanDestFile)
  //  .then(generateColors)
  //  .then(appendDestFile)
  //  .then(generateSpacing)
}

// main()
