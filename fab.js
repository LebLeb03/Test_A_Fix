class Blur {
    div;
    constructor(message) {
        const oBody = window.top?.document.querySelector("body");
        this.div = window.top?.document.createElement("div");
        this.div.id = "blurred_background";
        this.div.innerHTML = `<style>
        #blurred_background{
            position:absolute;
            top:0;
            left:0;
            height:100vh;
            width:100vw;
            backdrop-filter: blur(8px);
            z-index:1001;
        }
        #blurred_background p{
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
        }
        #blurred_background div{
            padding: 0 1em;
        }
        </style>
        <div>${message}</div>`;
        oBody?.insertAdjacentElement("afterbegin", this.div);
    }
    close(){
        this.div.remove();
    }
}


const suffix = (Math.random()*100).toFixed().toString();

document.querySelector("body").insertAdjacentHTML("beforeend", `
    <style>
    #fab${suffix} {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1002;
        background-color: #45a29e;
        color: #0b0c10;
        padding: 15px 30px;
        border: none;
        border-radius: 30px;
        box-shadow: 0 0 15px rgba(69, 162, 158, 0.8);
        font-family: 'Orbitron', sans-serif;
        font-size: 16px;
        cursor: pointer;
    }
    #fab${suffix}:hover {
        background-color: #66fcf1;
        box-shadow: 0 0 20px rgba(102, 252, 241, 1);
    }
    #modal${suffix} {
        position: fixed;
        bottom: 90px;
        right: 20px;
        z-index: 1003;
    }
    #clear${suffix} {
        position: absolute;
        top: -1em;
        right: 1em;
        background-color: #66fcf1;
        color: #0b0c10;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    </style>
    <button id="fab${suffix}">🚀 Tell Us</button>
`);
