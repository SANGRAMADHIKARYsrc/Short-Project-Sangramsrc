function generateQR() {
  const input = document.getElementById('qrInput').value.trim()
  const qrImage = document.getElementById('qrImage')
  const qrBox = document.getElementById('qrBox')
  const downloadBtn = document.getElementById('downloadBtn')

  if (input === '') {
    qrBox.style.display = 'none'
    return
  }

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`
  qrImage.src = qrUrl
  downloadBtn.href = qrUrl
  qrBox.style.display = 'flex'
}
