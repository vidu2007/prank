let word = 'Are you a good boy?';
document.getElementById('text').innerHTML = word;
let name = prompt("Answer?");

if (name == 'yes') {
  document.getElementById('text').innerHTML = 'ok good';
}
  
else {
  document.getElementById('text').innerHTML = 'bad boy';
}
