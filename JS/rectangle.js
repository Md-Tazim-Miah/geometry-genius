/*____________________Rectangle Card Functionalities___________________*/
// Rectangle edit button
document.getElementById('btn-rectangle-edit').addEventListener('click', function(){
    show('rectangle-input-field-section');
});

// Rectangle checkbox button
document.getElementById('btn-rectangle-checkbox').addEventListener('click', function(){
    hide('rectangle-input-field-section');
});

// Set the rectangle width and length values to the elements from the input fields.
    // Width
    document.getElementById('rectangle-width-field').addEventListener('keyup', function(event){
        const widthInputValue = event.target.value;
        setInnerTextById('rectangle-width-element', widthInputValue + ' ');
        if(widthInputValue === ''){
            setInnerTextById('rectangle-width-element', '0 ');
        }
    })

    // Length
    document.getElementById('rectangle-length-field').addEventListener('keyup', function(event){
        const lengthInputValue = event.target.value;
        setInnerTextById('rectangle-length-element', lengthInputValue + ' ');
        if(lengthInputValue === ''){
            setInnerTextById('rectangle-length-element', '0 ');
        }
    })

// Rectangle calculate button
document.getElementById('btn-rectangle-calculate').addEventListener('click', function(){
    const width = getInputValueById('rectangle-width-field');
    const length = getInputValueById('rectangle-length-field');
    const area = width * length;
    const newElement = elementFromHtml(`
        <li>
            <div class="flex mt-3">
                <p>Rectangle</p>
                <p class="ms-2"><span class="rectangle-shape-area-element">0</span><span class="rectangle-shape-area-unit">cm</span><sup>2</sup></p>
                <button class="btn-convert-rectangle-area bg-blue-500 hover:bg-blue-700 text-white rounded px-1 py-0.5 ms-3">Convert to m<sup>2</sup></button>
            </div>
        </li>
    `);

    const areaCalculationSection = document.getElementById('area-calculation-section');
    areaCalculationSection.appendChild(newElement);
    const shapeAreaElement = newElement.querySelector('.rectangle-shape-area-element');
    shapeAreaElement.innerText = area;
});

// Event delegation for the 'Convert to m2' buttons
document.getElementById('area-calculation-section').addEventListener('click', function(event){
    if(event.target.classList.contains('btn-convert-rectangle-area')){
        const listItem = event.target.closest('li');
        const shapeAreaElementValue = listItem.querySelector('.rectangle-shape-area-element').innerText;
        const areaInMeterSquare = shapeAreaElementValue / 10000;
        listItem.querySelector('.rectangle-shape-area-element').innerText = areaInMeterSquare;
        listItem.querySelector('.rectangle-shape-area-unit').innerText = 'm';
    }
});
// This event listener will change the rectangle shape background color randomly.
const rectangleCard = document.getElementById('card-rectangle');
rectangleCard.addEventListener('mouseenter', () => {
  const randomColor = getRandomColor();
  rectangleCard.style.backgroundColor = randomColor;
});