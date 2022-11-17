const som = document.querySelector('#som');
const usd = document.querySelector('#usd');

const handleConvert = (elements, target) => {
    elements.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response);
            if (elements === som) {
                target.value = (elements.value / response.usd).toFixed(4)
            } else if (elements === usd) {
                target.value = (elements.value * response.usd).toFixed(4)
            }
            elements.value === "" && (target.value = "");  
        });
    });
};
handleConvert( usd,som );
handleConvert( som, usd);