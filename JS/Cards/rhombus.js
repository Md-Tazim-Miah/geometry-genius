/*____________________Rhombus Card Functionalities___________________*/
// Rhombus edit button
document.getElementById('btn-rhombus-edit').addEventListener('click', function(){
    show('rhombus-input-field-section');
});

// Rhombus checkbox button
document.getElementById('btn-rhombus-checkbox').addEventListener('click', function(){
    hide('rhombus-input-field-section');
});

// Set the rhombus diagonal1 and diagonal2 values to the elements from the input fields.
    // Diagonal1
    document.getElementById('rhombus-diagonal1-length-field').addEventListener('keyup', function(event){
        const diagonal1InputValue = event.target.value;
        setInnerTextById('rhombus-diagonal1-length-element', diagonal1InputValue + ' ');
        if(diagonal1InputValue === ''){
            setInnerTextById('rhombus-diagonal1-length-element', '0 ');
        }
    });

    // Diagonal2
    document.getElementById('rhombus-diagonal2-length-field').addEventListener('keyup', function(event){
        const diagonal2InputValue = event.target.value;
        setInnerTextById('rhombus-diagonal2-length-element', diagonal2InputValue + ' ');
        if(diagonal2InputValue === ''){
            setInnerTextById('rhombus-diagonal2-length-element', '0 ');
        }
    });

// Rhombus calculate button
document.getElementById('btn-rhombus-calculate').addEventListener('click', function(){
    const diagonal1 = getInputValueById('rhombus-diagonal1-length-field');
    const diagonal2 = getInputValueById('rhombus-diagonal2-length-field');
    const area = 0.5 * diagonal1 * diagonal2;
    const newElement = elementFromHtml(`
        <li>
            <div class="flex mt-3">
                <p>Rhombus</p>
                <p class="ms-2"><span class="rhombus-shape-area-element">0</span><span class="rhombus-shape-area-unit">cm</span><sup>2</sup></p>
                <button class="btn-convert-rhombus-area bg-blue-500 hover:bg-blue-700 text-white rounded px-1 py-0.5 ms-3">Convert to m<sup>2</sup></button>
            </div>
        </li>
    `);

    const areaCalculationSection = document.getElementById('area-calculation-section');
    areaCalculationSection.appendChild(newElement);
    const shapeAreaElement = newElement.querySelector('.rhombus-shape-area-element');
    shapeAreaElement.innerText = area;
});

// Event delegation for the 'Convert to m2' buttons
document.getElementById('area-calculation-section').addEventListener('click', function(event){
    if(event.target.classList.contains('btn-convert-rhombus-area')){
        const listItem = event.target.closest('li');
        const shapeAreaElementValue = listItem.querySelector('.rhombus-shape-area-element').innerText;
        const areaInMeterSquare = shapeAreaElementValue / 10000;
        listItem.querySelector('.rhombus-shape-area-element').innerText = areaInMeterSquare;
        listItem.querySelector('.rhombus-shape-area-unit').innerText = 'm';
    }
});
// This event listener will change the rhombus shape background color randomly.
const rhombusCard = document.getElementById('card-rhombus');
rhombusCard.addEventListener('mouseenter', () => {
  const randomColor = getRandomColor();
  rhombusCard.style.backgroundColor = randomColor;
});