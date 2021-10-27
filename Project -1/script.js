const btn = document.querySelector('.btn-select')
const input = document.querySelector('.input-students')
const result = document.querySelector(".result")
const ulPresent = document.querySelector(".ul-present")
const ulAbsent = document.querySelector(".ul-absent")
const ulLate = document.querySelector(".ul-late")



    
    btn.addEventListener('click' , function () {
    //create variable and connect it with input  
    const text = input.value
    input.value = ""
    //create Div and Span and make span into div
    const divStudents = document.createElement("div")
    const spanStudents = document.createElement("span")
    divStudents.append(spanStudents)
    //span Attribute
    spanStudents.innerHTML = text
    const spanAtrb = document.createAttribute("contenteditable")
    spanStudents.setAttributeNode(spanAtrb)
    const spanClass = document.createAttribute("class")
    spanClass.value = "spnClass"
    spanStudents.setAttributeNode(spanClass)
    //Div Attribute
    const divAtrb = document.createAttribute("class")
    divAtrb.value = "div-students"
    divStudents.setAttributeNode(divAtrb)
    //Create button remove and giv it attribuetes
    const btnRemove = document.createElement("button")
    btnRemove.innerHTML = "remove"
    const buttonatrib = document.createAttribute("class")
    buttonatrib.value = "button-remove"
    btnRemove.setAttributeNode(buttonatrib)
    // Crete absent Button and giv it attributes
    const absent = document.createElement("button")
    absent.innerHTML = "Absent"
    const absentClass = document.createAttribute("class")
    absentClass.value = "absClass"
    absent.setAttributeNode(absentClass)
    // Crete present Button and giv it attributes
    const present = document.createElement("button")
    present.innerHTML = "Present"
    const presentClass = document.createAttribute("class")
    presentClass.value = "preClass"
    present.setAttributeNode(presentClass)
    // Crete late Button and giv it attributes
    const late = document.createElement("button")
    late.innerHTML = "Late"
    const lateClass = document.createAttribute("class")
    lateClass.value = "lateClass"
    late.setAttributeNode(lateClass)
    // Create div contains all button and giv it attributes for css
    const allBtnDiv = document.createElement("div")
    const btnDivClass = document.createAttribute("class")
    btnDivClass.value = "all-buttons"
    allBtnDiv.setAttributeNode(btnDivClass)
    // append all button inside Div "allbtnDiv"
    allBtnDiv.append(btnRemove)
    allBtnDiv.append(absent)
    allBtnDiv.append(present)
    allBtnDiv.append(late)
    // append all buttons "allBtnDiv" inside "divStudents"
    divStudents.append(allBtnDiv)
    // Make "divStudents" Inside Div "result" 
    result.append(divStudents)
    // Event Remove
    btnRemove.addEventListener("click",function () {
        divStudents.remove()
    })
    // Event when click on present button
    present.addEventListener("click" , function () {
        ulPresent.append(spanStudents)
        divStudents.remove()
    })
    // Event when click on absent button
    absent.addEventListener("click" , function () {
        ulAbsent.append(spanStudents)
        divStudents.remove()
    })
    // Event when click on late button
    late.addEventListener("click" , function () {
        ulLate.append(spanStudents)
        divStudents.remove()
    })
    
})


