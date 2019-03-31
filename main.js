const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0"; 
    event.target.style.backgroundColor = "gray";
}

const createCalender = () => {
    for(let i=0; i < calendarDays; i++){
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);
      
        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        imageNumber = i + 1;
        let imagePath = `./images/image-${imageNumber}.jpg`;

        calendarDoorText.addEventListener("click", openDoor.bind(null, imagePath));
    }
}
calendarButton.addEventListener("click", createCalender);