import data from "./users.json"
import usersTemplate from "./template/usersTemplate.hbs"

const boxRef = document.querySelector(".box")


boxRef.innerHTML = usersTemplate(data)




