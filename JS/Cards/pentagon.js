/*____________________Pentagon Card Functionalities___________________*/
// Pentagon edit button
document.getElementById('btn-pentagon-edit').addEventListener('click', function(){
    show('pentagon-input-field-section');
});

// Pentagon checkbox button
document.getElementById('btn-pentagon-checkbox').addEventListener('click', function(){
    hide('pentagon-input-field-section');
});

// Set the pentagon perameter and apothem values to the elements from the input fields.
    // Perameter
    document.getElementById('pentagon-perameter-field').addEventListener('keyup', function(event){
        const perameterInputValue = event.target.value;
        setInnerTextById('pentagon-perameter-element', perameterInputValue + ' ');
        if(perameterInputValue === ''){
            setInnerTextById('pentagon-perameter-element', '0 ');
        }
    });

    // Apothem
    document.getElementById('pentagon-apothem-field').addEventListener('keyup', function(event){
        const apothemInputValue = event.target.value;
        setInnerTextById('pentagon-apothem-element', apothemInputValue + ' ');
        if(apothemInputValue === ''){
            setInnerTextById('pentagon-apothem-element', '0 ');
        }
    });

// Pentagon calculate button
document.getElementById('btn-pentagon-calculate').addEventListener('click', function(){
    const perameter = getInputValueById('pentagon-perameter-field');
    const apothem = getInputValueById('pentagon-apothem-field');
    const area = 0.5 * perameter * apothem;
    const newElement = elementFromHtml(`
        <li>
            <div class="flex mt-3">
                <p>Pentagon</p>
                <p class="ms-2"><span class="pentagon-shape-area-element">0</span><span class="pentagon-shape-area-unit">cm</span><sup>2</sup></p>
                <button class="btn-convert-pentagon-area bg-blue-500 hover:bg-blue-700 text-white rounded px-1 py-0.5 ms-3">Convert to m<sup>2</sup></button>
            </div>
        </li>
    `);

    const areaCalculationSection = document.getElementById('area-calculation-section');
    areaCalculationSection.appendChild(newElement);
    const shapeAreaElement = newElement.querySelector('.pentagon-shape-area-element');
    shapeAreaElement.innerText = area;
});

// Event delegation for the 'Convert to m2' buttons
document.getElementById('area-calculation-section').addEventListener('click', function(event){
    if(event.target.classList.contains('btn-convert-pentagon-area')){
        const listItem = event.target.closest('li');
        const shapeAreaElementValue = listItem.querySelector('.pentagon-shape-area-element').innerText;
        const areaInMeterSquare = shapeAreaElementValue / 10000;
        listItem.querySelector('.pentagon-shape-area-element').innerText = areaInMeterSquare;
        listItem.querySelector('.pentagon-shape-area-unit').innerText = 'm';
    }
});
// This event listener will change the pentagon shape background color randomly.
const pentagonCard = document.getElementById('card-pentagon');
pentagonCard.addEventListener('mouseenter', () => {
  const randomColor = getRandomColor();
  pentagonCard.style.backgroundColor = randomColor;
});