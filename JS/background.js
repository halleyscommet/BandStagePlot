const fileInput = document.getElementById('bg-image')
const mainElement = document.querySelector('.main')

fileInput.addEventListener('change', function () {
  const file = fileInput.files[0]
  const reader = new FileReader()

  reader.addEventListener('load', function () {
    mainElement.style.backgroundImage = `url(${reader.result})`
  })

  if (file) {
    reader.readAsDataURL(file)
  }
})