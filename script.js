                        // GENERATES GRIDS //
const container = document.querySelector('.container');
for (i = 0; i < 16*16; i++) {
    // container.innerHTML += '<div class="square"></div>';
    container.appendChild(document.createElement('div'));
    container.querySelector('div:last-child').classList.add('square');
    // container.querySelector('div:last-child').textContent = i+1;
}

                    // CHANGES BG COLOR WHEN HOVERING //
const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', () => square.classList.add('hover')));

