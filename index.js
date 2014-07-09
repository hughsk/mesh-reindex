module.exports = reindex

function reindex(array) {
  var pos = []
  var cel = []

  var i = 0
  var c = 0
  while (i < array.length) {
    cel.push([c++, c++, c++])
    pos.push([
        array[i++]
      , array[i++]
      , array[i++]
    ], [
        array[i++]
      , array[i++]
      , array[i++]
    ], [
        array[i++]
      , array[i++]
      , array[i++]
    ])
  }

  return {
      positions: pos
    , cells: cel
  }
}
