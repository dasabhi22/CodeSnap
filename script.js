function run(){
    let htmlSection = document.getElementById("html-code");
    let cssSection = document.getElementById("css-code");
    let javascriptSection = document.getElementById("js-code");

    let outputSection = document.getElementById("output");

    outputSection.contentDocument.body.innerHTML = htmlSection.value + "<style>" + cssSection.value + "</style>" ;

    outputSection.contentWindow.eval(javascriptSection.value);

}
