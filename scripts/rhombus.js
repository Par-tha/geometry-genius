function rhombusAreaCalculation(){
    const rhombusBaseArea = document.getElementById('rhombusBaseInput');
    const rhombusBase = rhombusBaseArea.value;
    const base = parseFloat(rhombusBase);
    // console.log(base);
    
    const rhombusHeightArea = document.getElementById('rhombusHeightInput');
    const rhombusbase = rhombusHeightArea.value;
    const height = parseFloat(rhombusbase);
    // console.log(base);

    const area = .5*base*height;
    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = area;
}

