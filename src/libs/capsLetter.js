// function to replace white space between wods with dash, and then capitialize the first letter of each word

export const capsLetter = (str) => {
  const arr = (str === 'normal' ? 'medium' : str).replace('-', ' ').split(' ')

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  return arr.join(' ')
}
