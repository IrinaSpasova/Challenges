let survey_options = document.getElementById('survey_options');
let add_field = document.getElementById('add_field');
let remove_field = document.getElementById('remove_field');


add_field.onclick = function(){
    let newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'survey_options[]');
    newField.setAttribute('class', 'survey_options');
    newField.setAttribute('size', '50');
    newField.setAttribute('placeholder', 'Another field');

    survey_options.appendChild(newField);
}

remove_field.onclick = function(){
    let inputTags = survey_options.getElementsByTagName('input');
    if(inputTags.length>2){
        survey_options.removeChild(inputTags[(inputTags.length)-1]);
    }
}