                            // INITIAL RUN //
document.addEventListener('DOMContentLoaded', genGrid);


                        // RESTART AND REGENERATE //
const startBtn = document.querySelector('button');
startBtn.addEventListener('click', () => {container.innerHTML = ''; genGrid()});

                    // INPUT FOR NUMBER OF SquaresPerSide  //
const sps = document.querySelector('input');
function getSqrCnt(spsValue) {
    let sqrCnt = parseInt(sps.value) * parseInt(sps.value); 
    return sqrCnt;
}

                        // GENERATES GRIDS //
const container = document.querySelector('.container');
function genGrid() {
    let n = getSqrCnt();
    for (i = 0; i < n; i++) {
        // container.innerHTML += '<div class="square"></div>'; 
        // the line above and the next 2 lines can be used interchangeably
        container.appendChild(document.createElement('div'));
        container.querySelector('div:last-child').classList.add('square');
        // container.querySelector('div:last-child').textContent = i+1;
        // line above puts numbers inside the squares
        // container.querySelector('div:last-child').setAttribute('style', `min-width: ${(800/sps.value).toFixed(2)}px; min-height: ${(800/sps.value).toFixed(2)}px`);
    }
    
                        // CHANGES BG COLOR WHEN HOVERING //
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', () => square.classList.add('hover')));
    // the forEach loop below and the code in the last line of for loop do the same thing
    squares.forEach(square => square.setAttribute('style', `min-width: ${(800/sps.value).toFixed(2)}px; min-height: ${(800/sps.value).toFixed(2)}px`));
}