
export default function cssLoader(file){

    if (!document.querySelector(`link[href="${file}"]`)) {

        const currentPath = window.location.pathname;
        const absolutePath = new URL(file, window.location.origin + currentPath).href;

        console.log(absolutePath)

        var element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("type", "text/css");
        element.setAttribute("href", absolutePath);
        document.querySelector("head").appendChild(element);

    }



}
