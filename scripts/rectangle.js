function calculateRectangleArea (){
    const rectangleWidthArea = document.getElementById('rectangleWidthInput');
    const rectangleWidth = rectangleWidthArea.value;
    const width = parseFloat(rectangleWidth);
    // console.log(width);
    
    const rectangleLengthArea = document.getElementById('rectangleLengthInput');
    const rectangleLength = rectangleLengthArea.value;
    const length = parseFloat(rectangleLength);
    // console.log(length);

    const area = width*length;
    const rectangleArea = document.getElementById('rectangle-Area');
    rectangleArea.innerText = area;
}