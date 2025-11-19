function ellipseAreaCalculation(){
    const ellipseaAxisArea = document.getElementById('ellipse-aAxisInput');
    const ellipseaAxis = ellipseaAxisArea.value;
    const aAxis = parseFloat(ellipseaAxis);
    // console.log(aAxis);
    
    const ellipsebAxisArea = document.getElementById('ellipse-bAxisInput');
    const ellipsebAxis = ellipsebAxisArea.value;
    const bAxis = parseFloat(ellipsebAxis);
    // console.log(bAxis);

    const area = 3.1416*aAxis*bAxis;
    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = area;
}

