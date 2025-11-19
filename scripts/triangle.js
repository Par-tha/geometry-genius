function calculateTriangleArea(){
    const triangleBaseText = document.getElementById('triangleBaseInput');
    const triangleBase = triangleBaseText.value;
    const base = parseFloat(triangleBase);
    // console.log(base);

    const triangleHeightText = document.getElementById('triangleHeightInput');
    const triangleHeight = triangleHeightText.value;
    const height = parseFloat(triangleHeight);
    // console.log(height);

    const triangleCalculation = .5*base*height;
    console.log(triangleCalculation);

    const triangleAreaText = document.getElementById('triangleArea');
    triangleAreaText.innerText = triangleCalculation;
}