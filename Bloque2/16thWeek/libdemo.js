/**
 * 
 * @param {*} result 
 * @param {*} container 
 */
export function renderResult(result, container) {
    const li = document.createElement('li');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');

    li.className = 'result';
    img.src = result.img;
    img.alt = result.name;
    figcaption.textContent = result.name;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    li.appendChild(figure);
    container.appendChild(li);
}

export const key = 'lakey'