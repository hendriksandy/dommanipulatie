const buttons = document.querySelectorAll(".big-five-button")
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        const bigFiveList = document.createElement("li");
        const spottedAnimals = document.getElementById("spotted-animals-list");
        spottedAnimals.appendChild(bigFiveList);
        bigFiveList.innerHTML = event.target.innerHTML;
    });
});

const removeFirstAnimaleButton = document.getElementById("remove-first-item-button")

removeFirstAnimaleButton.addEventListener("click", function () {
    const Parent = document.getElementById("spotted-animals-list")
    const TopAnimalOnTheList = Parent.getElementsByTagName("li")[0]
    Parent.removeChild(TopAnimalOnTheList)
});

const removeAllAnimals = document.getElementById("remove-all-button")


removeAllAnimals.addEventListener("click", function () {

    const vader = document.getElementById("spotted-animals-list")
    while (vader.firstChild) {
        vader.firstChild.remove()
    }
});