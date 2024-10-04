/*
* This program calls the boardFoot function, which calculates boardfoot.
*
* @author  Ian Beddie
* @version 1.0
* @since   2024-10-02
*/

import { createPrompt } from 'bun-promptx'

function main (): void {
  function boardFoot (width: number, height: number): number {
    const boardFoot = 144
    const length = boardFoot / (width * height)
    return length
  }

  console.log('Program finds length of a board so that it is 144 in³')
  const widthString = createPrompt('Please enter the width of your wood: ')
  const heightString = createPrompt('Please enter the height of your wood: ')

  if (isNaN(parseFloat(widthString.value)) ||
      isNaN(parseFloat(heightString.value))) {
    console.log('One of the inputs is not a number')
  } else {
    const width = parseFloat(widthString.value)
    const height = parseFloat(heightString.value)
    const result = boardFoot(width, height)
    console.log(`The wood should be ${result} inch(es) long.`)
  }
}

main()

console.log('\nDone.')
