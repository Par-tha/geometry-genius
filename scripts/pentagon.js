function pentagonAreaCalculation(){
    const pentagonperimeterArea = document.getElementById('pentagonPerimeterInput');
    const pentagonperimeter = pentagonperimeterArea.value;
    const perimeter = parseFloat(pentagonperimeter);
    // console.log(perimeter);
    
    const pentagonbaseArea = document.getElementById('pentagonBaseInput');
    const pentagonbase = pentagonbaseArea.value;
    const base = parseFloat(pentagonbase);
    // console.log(base);

    const area = .5*perimeter*base;
    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = area;
}

