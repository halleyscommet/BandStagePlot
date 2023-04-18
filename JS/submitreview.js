function submitReview () {
  var howfind = document.getElementsByName('how-did-you-find-bandstageplot')
  var review = document.getElementById('review-text').value
  var howfound

  for (i = 0; i < howfind.length; i++) {
    if (howfind[i].checked) {
      howfound = howfind[i].value
    }
  }

  var emailLink = `mailto:bandstageplot@gmail.com?subject=BandStagePlot Review and Data&body=User found BandStagePlot by ${howfound}.%0D%0AUser review: "${review}".`
  if(review === '') {
    var emailLink = `mailto:bandstageplot@gmail.com?subject=BandStagePlot Review and Data&body=User found BandStagePlot by ${howfound}.`
  }
  alert('This takes you to your mailing service and creates a premade email.\nFeel free to edit this!')
  window.open(emailLink,'popUpWindow','height=500,width=400,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes')
  event.preventDefault()
  document.getElementById('review').reset()
}
