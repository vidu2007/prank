let word = 'Are you a good boy?';
document.getElementById('text').innerHTML = word;
let name = prompt("Are you a good boy?");

if (name == 'yes') {
  document.getElementById('text').innerHTML = 'ok good';
}
  
else {
  document.getElementById('text').innerHTML = 'bad boy';
}
