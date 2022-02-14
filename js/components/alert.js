const dialog = document.createElement("dialog");
const titoloDialog = document.createElement("h1");
const corpoDialog = document.createElement("div");
const chiudiDialog = document.createElement("button");
const wrap = document.createElement("div");

titoloDialog.innerHTML = "titolo";
corpoDialog.innerHTML = "corpo";
chiudiDialog.innerHTML = "chiudi";

dialog.style.cssText =
    "box-sizing: border-box; z-index: 10001; display: none; opacity: 0; overflow: hidden; border-radius: 5px; color: white; display:block; position: fixed; border: none; top: 0.25rem; left: 50%; transform: translate(-50% , 0); padding: 1rem 1.5rem; width: 350px; min-height: 200px; background-color: rgb(64, 65, 66); margin: 0;";

titoloDialog.style.cssText =
    "box-sizing: border-box; margin: 0; padding: 0; text-transform: capitalize; ";

corpoDialog.style.cssText =
    "box-sizing: border-box; padding: 1rem 0; margin-bottom: 2rem;";

chiudiDialog.style.cssText =
    "box-sizing: border-box; margin: 0; color: #d8d8d8; border: 1px solid #d8d8d8; font-size: 1rem; background-color: transparent; border-radius: 5px; position: absolute; bottom: 1rem; right: 1.5rem; padding: 0.4rem 1.2rem;";

chiudiDialog.onmouseover = () =>
    (chiudiDialog.style.cssText += "color: white; border: 1px solid white;");
chiudiDialog.onmouseout = () =>
    (chiudiDialog.style.cssText =
        "box-sizing: border-box; color: #d8d8d8; border: 1px solid #d8d8d8; font-size: 1rem; background-color: transparent; border-radius: 5px; position: absolute; bottom: 1rem; right: 1.5rem; padding: 0.4rem 1.2rem;");

wrap.style.cssText =
    "background-color: rgba(0 , 0 , 0 , 0.5); z-index: 10000; position: absolute; top: 0; left: 0;, overflow: hidden;";
wrap.style.height = parseInt(document.body.clientHeight + 100) + "px";
wrap.style.width = parseInt(document.body.clientWidth + 100) + "px";

document.body.style.overflow = "hidden";

wrap.appendChild(dialog);

dialog.appendChild(titoloDialog);

dialog.appendChild(corpoDialog);

dialog.appendChild(chiudiDialog);

document.body.appendChild(wrap);

wrap.style.display = "none";

export function dialogOpen(titolo = "titolo", messaggio = "testo") {
    dialog.style.top = "0.5";
    titoloDialog.innerHTML = titolo;
    corpoDialog.innerHTML = messaggio;

    dialog.style.display = "block";
    wrap.style.display = "block";

    let top = 0;
    let opacity = 0;
    let timer = setInterval(function () {
        top += 0.1;
        opacity += 1 / 35;
        if (top >= 3.5) {
            clearInterval(timer);
            return;
        }
        dialog.style.top = top + "rem";
        dialog.style.opacity = opacity;
    }, 10);
}

chiudiDialog.onclick = (e) => {
    dialog.style.display = "none";
    dialog.style.opacity = "0";
    wrap.style.display = "none";
    document.body.style.overflow = "auto";
};
