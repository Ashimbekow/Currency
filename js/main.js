const som = document.querySelector('#som');
const usd = document.querySelector('#usd');

const handleConvert = (elem, target,) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.addEventListener("load", () => {
            const response = JSON.parse(request.response);
            if (elem === som) {
                target.value = (elem.value / response.usd).toFixed(2)
            } else if (elem === usd) {
                target.value = (elem.value * response.usd).toFixed(2)
            } else if (elem === euro) {
                target.value = (elem.value * response.euro).toFixed(2)
            }

            elem.value === "" && (target.value = "");    
        });
    });
};
handleConvert( usd,som );
handleConvert( som, usd);