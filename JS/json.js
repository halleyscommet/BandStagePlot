function exportAsJSON () {
  var positions = []

  // Loop through all draggable elements
  $('.draggable').each(function () {
    var $this = $(this)
    var id = $this.attr('id')
    var amount = $this.data('amount') || 1 // Default to 1 if not specified
    var elementPositions = []

    // Loop through all instances of the element
    for (var i = 0; i < amount; i++) {
      var position = {
        'pos-x': $this.css('left'),
        'pos-y': $this.css('top')
      }

      elementPositions.push(position)
    }

    // Add the element's positions to the overall positions array
    positions.push({
      item: id,
      clones: elementPositions
    })
  })

  // Convert the positions to JSON format
  var json = JSON.stringify(positions, null, 2)

  // Create a Blob object with the JSON data
  var blob = new Blob([json], { type: 'application/json' })

  // Create a download link for the user
  var url = URL.createObjectURL(blob)
  var link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', 'stageplot.json')
  document.body.appendChild(link)
  link.click()
}

function importJSON () {
  const file = document.getElementById('import-file').files[0]

  const reader = new FileReader()
  reader.onload = function (e) {
    const json = JSON.parse(e.target.result)
    for (let i = 0; i < json.length; i++) {
      const obj = json[i]
      const el = document.getElementById(obj.item)
      for (let j = 0; j < obj.clones.length; j++) {
        const clone = obj.clones[j]
        el.style.top = clone['pos-y']
        el.style.left = clone['pos-x']
      }
    }
  }
  reader.readAsText(file)
}

$('#import-button').on('click', importJSON);
