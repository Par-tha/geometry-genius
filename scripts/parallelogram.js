function parallelogramAreaCalulation(){
    const parallelogramBaseArea = document.getElementById('parallelogramBaseInput');
    const parallelogramBase = parallelogramBaseArea.value;
    const base = parseFloat(parallelogramBase);
    // console.log(base);
    
    const parallelogramHeightArea = document.getElementById('parallelogramHeightInput');
    const parallelogramHeight = parallelogramHeightArea.value;
    const height = parseFloat(parallelogramHeight);
    // console.log(height);

    const area = base*height;
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;
}