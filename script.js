
function runPythonScript(script_args) {
  $.ajax({
    type: "POST",
    url: ".\\capture_button_press.py",
    data: { param: script_args }
  }).done(function( o ) {
    console.log("Python script done: " + o);
  });
}

// Get every button from the index.html page
document.getElementById('wiki_button').addEventListener('click', runPythonScript.bind(null, 'wiki'));
document.getElementById('support_button').addEventListener('click', runPythonScript.bind(null, 'help'));
document.getElementById('github_button').addEventListener('click', runPythonScript.bind(null, 'github'));
document.getElementById('source_code_button').addEventListener('click', runPythonScript.bind(null, 'source_code'));