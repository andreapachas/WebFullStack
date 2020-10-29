const API_KEY = 'Z1cPvuxq0X6YlUbbKcrSvNby4CgLf8XQ'

const container = document.querySelector(".containerTrending");

function renderTrendingTitle(){
    async function showResult() {
        const url = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}&limit=5&rating=g`;
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);
        if(results.meta.msg === 'OK')
            results.data.slice(0,5).forEach(renderResult);
        else alert('not found');
    }

    function renderResult(result,index) {
        const plot = document.createElement('p');
        plot.textContent = result;
        if (index < 4) 
            plot.textContent +=  ',';
        container.appendChild(plot);
    }
    showResult();
}

renderTrendingTitle();