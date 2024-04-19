/*____________________Ellipse Card Functionalities___________________*/
// Ellipse edit button
document.getElementById('btn-ellipse-edit').addEventListener('click', function(){
    show('ellipse-input-field-section');
});

// Ellipse checkbox button
document.getElementById('btn-ellipse-checkbox').addEventListener('click', function(){
    hide('ellipse-input-field-section');
});

// Set the ellipse major length and minor length values to the elements from the input fields.
    // Major length
    document.getElementById('ellipse-major-length-field').addEventListener('keyup', function(event){
        const majorLengthInputValue = event.target.value;
        setInnerTextById('ellipse-major-length-element', majorLengthInputValue + ' ');
        if(majorLengthInputValue === ''){
            setInnerTextById('ellipse-major-length-element', '0 ');
        }
    });

    // Minor length
    document.getElementById('ellipse-minor-length-field').addEventListener('keyup', function(event){
        const minorLengthInputValue = event.target.value;
        setInnerTextById('ellipse-minor-length-element', minorLengthInputValue + ' ');
        if(minorLengthInputValue === ''){
            setInnerTextById('ellipse-minor-length-element', '0 ');
        }
    });

// ellipse calculate button
document.getElementById('btn-ellipse-calculate').addEventListener('click', function(){
    const majorLength = getInputValueById('ellipse-major-length-field');
    const minorLength = getInputValueById('ellipse-minor-length-field');
    const area = 0.5 * 3.1416 * majorLength * minorLength;
    const newElement = elementFromHtml(`
        <li>
            <div class="flex mt-3">
                <p>Ellipse</p>
                <p class="ms-2"><span class="ellipse-shape-area-element">0</span><span class="ellipse-shape-area-unit">cm</span><sup>2</sup></p>
                <button class="btn-convert-ellipse-area bg-blue-500 hover:bg-blue-700 text-white rounded px-1 py-0.5 ms-3">Convert to m<sup>2</sup></button>
            </div>
        </li>
    `);

    const areaCalculationSection = document.getElementById('area-calculation-section');
    areaCalculationSection.appendChild(newElement);
    const shapeAreaElement = newElement.querySelector('.ellipse-shape-area-element');
    shapeAreaElement.innerText = area;
});

// Event delegation for the 'Convert to m2' buttons
document.getElementById('area-calculation-section').addEventListener('click', function(event){
    if(event.target.classList.contains('btn-convert-ellipse-area')){
        const listItem = event.target.closest('li');
        const shapeAreaElementValue = listItem.querySelector('.ellipse-shape-area-element').innerText;
        const areaInMeterSquare = shapeAreaElementValue / 10000;
        listItem.querySelector('.ellipse-shape-area-element').innerText = areaInMeterSquare;
        listItem.querySelector('.ellipse-shape-area-unit').innerText = 'm';
    }
});
// This event listener will change the ellipse shape background color randomly.
const ellipseCard = document.getElementById('card-ellipse');
ellipseCard.addEventListener('mouseenter', () => {
  const randomColor = getRandomColor();
  ellipseCard.style.backgroundColor = randomColor;
});