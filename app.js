// Create our user
const user = G$('Lebron', 'James');

// Add a listnerer to the input button
$('#login').click(()=>{
  // Get the value of the dropdown
  const lang = $('#lang').val();
  // Set the lang of our user
  user.setLang(lang);
  // Set the greeting on the page
  user.setGreeting('#greeting');
})
