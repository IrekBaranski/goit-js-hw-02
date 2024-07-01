// task 3. Element width
//note: Npx: N is Integer or Float number => Number.parseFloat() <-tabnine 

function getElementWidth(content, padding, border) {
    //const elementWidth = Number.parseFloat(content) + (2 * Number.parseFloat(padding)) + (2 * Number.parseFloat(border))
    const elementWidth = parseFloat(content) + (parseFloat(padding) * 2) + (parseFloat(border) * 2);
    return elementWidth + `\n` +`Element width is ${elementWidth}px.`; // zwracamy info pełnymi zdaniami.:P
    
}

console.log(getElementWidth("50px", "8px", "4px")); // outputs: 74
console.log(getElementWidth("60px", "12px", "8.5px")); // outputs: 101
console.log(getElementWidth("200px", "0px", "0px")); // outputs: 200


