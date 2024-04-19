/*____________________Parallelogram Card Functionalities___________________*/
// Parallelogram edit button
document.getElementById('btn-parallelogram-edit').addEventListener('click', function(){
    show('parallelogram-input-field-section');
});

// Parallelogram checkbox button
document.getElementById('btn-parallelogram-checkbox').addEventListener('click', function(){
    hide('parallelogram-input-field-section');
});

// Set the parallelogram base and height values to the elements from the input fields.
    // Base
    document.getElementById('parallelogram-base-field').addEventListener('keyup', function(event){
        const baseInputValue = event.target.value;
        setInnerTextById('parallelogram-base-element', baseInputValue + ' ');
        if(baseInputValue === ''){
            setInnerTextById('parallelogram-base-element', '0 ');
        }
    })

    // Length
    document.getElementById('parallelogram-height-field').addEventListener('keyup', function(event){
        const heightInputValue = event.target.value;
        setInnerTextById('parallelogram-height-element', heightInputValue + ' ');
        if(heightInputValue === ''){
            setInnerTextById('parallelogram-height-element', '0 ');
        }
    })

// Parallelogram calculate button
document.getElementById('btn-parallelogram-calculate').addEventListener('click', function(){
    const base = getInputValueById('parallelogram-base-field');
    const height = getInputValueById('parallelogram-height-field');
    const area = base * height;
    const newElement = elementFromHtml(`
        <li>
            <div class="flex mt-3">
                <p>Parallelogram</p>
                <p class="ms-2"><span class="parallelogram-shape-area-element">0</span><span class="parallelogram-shape-area-unit">cm</span><sup>2</sup></p>
                <button class="btn-convert-parallelogram-area bg-blue-500 hover:bg-blue-700 text-white rounded px-1 py-0.5 ms-3">Convert to m<sup>2</sup></button>
            </div>
        </li>
    `);

    const areaCalculationSection = document.getElementById('area-calculation-section');
    areaCalculationSection.appendChild(newElement);
    const shapeAreaElement = newElement.querySelector('.parallelogram-shape-area-element');
    shapeAreaElement.innerText = area;
});

// Event delegation for the 'Convert to m2' buttons
document.getElementById('area-calculation-section').addEventListener('click', function(event){
    if(event.target.classList.contains('btn-convert-parallelogram-area')){
        const listItem = event.target.closest('li');
        const shapeAreaElementValue = listItem.querySelector('.parallelogram-shape-area-element').innerText;
        const areaInMeterSquare = shapeAreaElementValue / 10000;
        listItem.querySelector('.parallelogram-shape-area-element').innerText = areaInMeterSquare;
        listItem.querySelector('.parallelogram-shape-area-unit').innerText = 'm';
    }
});
// This event listener will change the parallelogram shape background color randomly.
const parallelogramCard = document.getElementById('card-parallelogram');
parallelogramCard.addEventListener('mouseenter', () => {
  const randomColor = getRandomColor();
  parallelogramCard.style.backgroundColor = randomColor;
});