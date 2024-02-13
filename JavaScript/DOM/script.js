let container = document.getElementById('chessboard');
let fragment = new DocumentFragment();

for (let i = 0; i < 8; i++) {
    let rowFragment = new DocumentFragment();
    for (let j = 0; j < 8; j++) {
        let column = document.createElement('div');
        column.style.border = "1px solid";
        if ((i + j) % 2 === 0) {
            column.style.background = 'black';
        } else {
            column.style.background = 'white';
        }
        rowFragment.appendChild(column);
    }
    fragment.appendChild(rowFragment);
}

container.appendChild(fragment);