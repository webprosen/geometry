function getElementRawValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementRawValue = element.value;
    return elementRawValue;
}

function getElementFloatValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementFloatValue = parseFloat(elementValueString);
    element.value = '';
    return elementFloatValue;
    
}