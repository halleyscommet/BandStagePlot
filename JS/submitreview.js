function submitReview () {
  var howfind = document.getElementsByName('how-did-you-find-bandstageplot')
  var review = document.getElementById('review-text').value
  var howfound

  for (i = 0; i < howfind.length; i++) {
    if (howfind[i].checked) {
      howfound = howfind[i].value
    }
  }

  var emailLink = `mailto:bandstageplot@gmail.com?subject=BandStagePlot Review and Data&body=User found BandStagePlot by: ${howfound}.%0D%0AUser review: "${review}".`
  window.open(emailLink, '_blank')
  event.preventDefault()
  document.getElementById('review').reset()
}
