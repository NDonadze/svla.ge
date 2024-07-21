const mother = document.getElementsByClassName("card")
const child = document.getElementsByClassName("card_text_wrapper")

for (let index = 0; index < mother.length; index++) {
    const motherBox = mother[index];
        for (let index = 0; index < child.length; index++) {
            const childBox = child[index];
            motherBox.addEventListener("mouseover", () => {
                if (motherBox.id === childBox.id) {
                    childBox.style.opacity = "0"
                    childBox.style.opacity = "100"
                    childBox.style.transitionDuration = "0.2s"
                    childBox.style.transitionDelay = "0.15s"
                    childBox.style.transitionTimingFunction = "linear"
                }
            })
            motherBox.addEventListener("mouseout", () => {
                if (motherBox.id === childBox.id) {
                    childBox.style.opacity = "100"
                    childBox.style.opacity = "0"
                    childBox.style.transitionDuration = "0.2s"
                    childBox.style.transitionTimingFunction = "linear"
                }
            })
        }
}

const main = document.getElementById("main")

        setTimeout(() => {
            main.style.opacity = "100";
            main.style.transitionDuration = "0.5s"
            main.style.transitionTimingFunctionlinear
        }, 400);