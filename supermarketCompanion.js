// SELECTORS
const tableBody = document.querySelector("tbody")
const tabs = document.querySelectorAll(".tab")
const myTest = document.getElementById("startButton")
const resetBtn = document.getElementById("resetBtn")

// CONSTANTS
const justinTableOrder = []

// EXECUTION
createJustinTableOrder()
populateTable()
addSelectors()
resetBtn.addEventListener("click", resetTable)
resetBtn.addEventListener("click", resetPriceChanges)

// FUNCTIONS
function populateTable() {
  let listNum = null
  let product = null
  let manufacturer = null
  let numInBox = null
  let boxesOnShelf = null
  let tableRow = null
  let quantityDiv = null
  let quantity = null
  let quantityMinus = null
  let quantityPlus = null
  let quantityMax = null
  let total = null
  const selectedTab = document.querySelector(".selected")
  
  for (let i = 0; i < products.length; i++){
    // make table elements
    tableRow = document.createElement("tr")
    listNum = document.createElement("td")
    product = document.createElement("td")
    manufacturer = document.createElement("td")
    numInBox = document.createElement("td")
    boxesOnShelf = document.createElement("td")
    quantityDiv = document.createElement("div")
    quantity = document.createElement("td")
    quantityMinus = document.createElement("button")
    quantityPlus = document.createElement("button")
    quantityMax = document.createElement("button")
    quantityMinus.textContent = "-"
    quantityPlus.textContent = "+"
    quantityMax.textContent = "Max"
    total = document.createElement("td")
    
    // add data to table elements
    listNum.textContent = i + 1
    if (selectedTab.textContent == "Dave") {
      product.textContent = products[i]["Product"]
      manufacturer.textContent = products[i]["Manufacturer"]
      numInBox.textContent = products[i]["numInBox"]
      boxesOnShelf.textContent = products[i]["boxesOnShelf"]
    } else if (selectedTab.textContent == "Justin") {
      if (i >= justinTableOrder.length) {
        continue
      }
      product.textContent = justinTableOrder[i]["Product"]
      manufacturer.textContent = justinTableOrder[i]["Manufacturer"]
      numInBox.textContent = justinTableOrder[i]["numInBox"]
      boxesOnShelf.textContent = justinTableOrder[i]["boxesOnShelf"]
    }
    total.textContent = "0"

    // implement quantity function
    quantityMinus.addEventListener("click", changeQuantity)
    quantityPlus.addEventListener("click", changeQuantity)
    quantityMax.addEventListener("click", changeQuantity)
    
    // add elements to the DOM
    tableRow.appendChild(listNum)
    tableRow.appendChild(product)
    tableRow.appendChild(manufacturer)
    tableRow.appendChild(numInBox)
    tableRow.appendChild(boxesOnShelf)
    quantityDiv.classList.add("quantity")
    quantityDiv.appendChild(quantityMinus)
    quantityDiv.appendChild(quantityPlus)
    quantityDiv.appendChild(quantityMax)
    quantity.appendChild(quantityDiv)
    tableRow.appendChild(quantity)
    tableRow.appendChild(total)
    tableBody.appendChild(tableRow)
  }
}

// Tab switcher from Dave <--> Justin
function changeSelection() {
  for (tab of tabs) {
    tab.classList.remove("selected")
    tab.classList.add("nonselected")
  }
  this.classList.add("selected")
  this.classList.remove("nonselected")
  resetTable()
}

function addSelectors() {
  for (tab of tabs) {
    tab.addEventListener("click", changeSelection)
  }
}

// Quantity functionality
function changeQuantity() {
  let newTotal = Number.parseInt(this.parentElement.parentElement.parentElement.lastElementChild.textContent, 10)
  if (this.textContent == "+") {
    newTotal += 1
  } else if (this.textContent == "-") {
    newTotal > 0 ? newTotal -= 1 : newTotal = 0
  } else if (this.textContent == "Max") {
    // insert max button functionality here
    newTotal = this.parentElement.parentElement.previousElementSibling.textContent
  }
  this.parentElement.parentElement.parentElement.lastElementChild.textContent = newTotal
}

// Reset Button functionality
function resetTable() {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild)
  }
  populateTable()
}

// Create Justin's Table Order
function createJustinTableOrder() {
  let product = null
  let manufacturer = null
  let numInBox = null
  let boxesOnShelf = null
  for (let i = 0; i < products.length; i++) {
    if (products[products[i]["J"]] == null) {
      continue
    }
    product = products[i]["Product"]
    manufacturer = products[i]["Manufacturer"]
    numInBox = products[i]["numInBox"]
    boxesOnShelf = products[i]["boxesOnShelf"]
    justinTableOrder[products[i]["J"]] = {"Product": product, "Manufacturer": manufacturer, "numInBox": numInBox, "boxesOnShelf": boxesOnShelf}
  }
}

// Reset Price Changes text area to blank
function resetPriceChanges() {
  document.getElementById("priceChanges").value = ""
}