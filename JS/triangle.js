/*_____________________Triangle Card Functionalities__________________*/
// Triangle edit button
document.getElementById('btn-triangle-edit').addEventListener('click', function(){
    show('triangle-input-field-section');
});

// Triangle checkbox button
document.getElementById('btn-triangle-checkbox').addEventListener('click', function(){
    hide('triangle-input-field-section');
});

// Set the triangle base and height values to the elements from the input fields.
    // Base
    document.getElementById('triangle-base-field').addEventListener('keyup', function(event){
        const baseInputValue = event.target.value;
        setInnerTextById('triangle-base-element', baseInputValue + ' ');
        if(baseInputValue === ''){
            setInnerTextById('triangle-base-element', '0 ');
        }
    })

    // Height
    document.getElementById('triangle-height-field').addEventListener('keyup', function(event){
        const heightInputValue = event.target.value;
        setInnerTextById('triangle-height-element', heightInputValue + ' ');
        if(heightInputValue === ''){
            setInnerTextById('triangle-height-element', '0 ');
        }
    })

// Triangle calculate button
document.getElementById('btn-triangle-calculate').addEventListener('click', function(){
    const base = getInputValueById('triangle-base-field');
    const height = getInputValueById('triangle-height-field');
    const area = 0.5 * base * height;
    const newElement = elementFromHtml(`
        <li>
            <div class="flex mt-3">
                <p>Triangle</p>
                <p class="ms-2"><span class="shape-area-element">0</span>cm<sup>2</sup></p>
                <button class="btn-convert-area bg-blue-500 hover:bg-blue-700 text-white rounded px-1 py-0.5 ms-3">Convert to m<sup>2</sup></button>
            </div>
        </li>
    `);

    const areaCalculationSection = document.getElementById('area-calculation-section');
    areaCalculationSection.appendChild(newElement);
    const shapeAreaElement = newElement.querySelector('.shape-area-element');
    shapeAreaElement.innerText = area;
});

// Event delegation for the 'Convert to m2' buttons
document.getElementById('area-calculation-section').addEventListener('click', function(event){
    if(event.target.classList.contains('btn-convert-area')){
        const listItem = event.target.closest('li');
        const shapeAreaElementValue = listItem.querySelector('.shape-area-element').innerText;
        const areaInMeterSquare = shapeAreaElementValue / 10000;
        listItem.querySelector('.shape-area-element').innerText = areaInMeterSquare;
    }
});

// This event listener will change the triangle shape background color randomly.
const triangleCard = document.getElementById('card-triangle');
triangleCard.addEventListener('mouseenter', () => {
  const randomColor = getRandomColor();
  triangleCard.style.backgroundColor = randomColor;
});