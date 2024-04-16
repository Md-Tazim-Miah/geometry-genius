// This function will return the input value from the input field of the html doc.
function getInputValueById(elementId){
    const elementField = document.getElementById(elementId);
    const inputValueString = elementField.value;
    const inputValue = parseFloat(inputValueString);
    if(isNaN(inputValue)){
        return 0;
    }
    return inputValue;
}

// This function will return the text element value from the html doc.
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const textElementValueString = element.innerText;
    const textElementValue = parseFloat(textElementValueString);
    if(isNaN(inputValue)){
        return 0;
    }
    return textElementValue;
}

// This function will set the innerText to an element of html doc.
function setInnerTextById(elementId, elementValue){
    const element = document.getElementById(elementId);
    element.innerText = elementValue;
}

// This function will show the element from the html doc.
function show(elementId){
    const element = document.getElementById(elementId);
    element.style.display = 'block';
}


// This function will hide the element from the html doc.
function hide(elementId){
    const element = document.getElementById(elementId);
    element.style.display = 'none';
}

// This function is a template element of html that will be use to append the new html code by JS DOM.
function elementFromHtml(html){
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

// This function will return Hex code that will create a random color every time.
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }