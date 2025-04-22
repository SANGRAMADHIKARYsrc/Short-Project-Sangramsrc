function checkPalindrome() {
  const input = document.getElementById('textInput').value;
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  const result = document.getElementById('result');
  result.classList.remove('show');
  setTimeout(() => {
    if (!input) {
      result.textContent = 'Please enter some text.';
      result.style.color = 'black';
    } else if (cleaned === reversed) {
      result.textContent = `"${input}" is a palindrome! ✅`;
      result.style.color = 'green';
    } else {
      result.textContent = `"${input}" is not a palindrome. ❌`;
      result.style.color = 'red';
    }
    result.classList.add('show');
  }, 100);
}
