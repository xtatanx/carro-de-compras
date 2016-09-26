export default () => {

  return function(input) {
    if (isNaN(input) && input < 1) {
      return input
    } else {
      return input.split('.').join('');
    }

  }
}