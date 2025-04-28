// SELECTORS
const resetBtn = document.getElementById("resetBtn")

// EXECUTION
populateTable()
resetBtn.addEventListener("click", resetTable)
resetBtn.addEventListener("click", resetPriceChanges)
addTableButtons()

// FUNCTIONS
// function populateAllTables() {
//   const orderProducts = []
//   // how many things belong to each market?
//   for (product of products) {
//     // for ()
//   }
// }

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
  
  const markets = {
    "meatAndDairy": document.getElementById("meatAndDairy"),
    "greenMarket": document.getElementById("greenMarket"),
    "janitorialSupply": document.getElementById("janitorialSupply"),
    "liquorStore": document.getElementById("liquorStore"),
    "deliAndGrocery": document.getElementById("deliAndGrocery")
  }
  const marketCounts = {
    "meatAndDairy": 1,
    "greenMarket": 1,
    "janitorialSupply": 1,
    "liquorStore": 1,
    "deliAndGrocery": 1
  }
  const marketTableOrder = {
    "meatAndDairy": {},
    "greenMarket": {},
    "janitorialSupply": {},
    "liquorStore": {},
    "deliAndGrocery": {}
  }
  const marketNames = Object.keys(marketTableOrder)

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
    quantityMax.textContent = "Zero"
    total = document.createElement("td")
    
    // add data to table elements
    listNum.textContent = products[i]["J"]
    
    product.textContent = products[i]["Product"]
    manufacturer.textContent = products[i]["Manufacturer"]
    numInBox.textContent = products[i]["numInBox"]
    boxesOnShelf.textContent = products[i]["boxesOnShelf"]
    
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
    tableRow.classList.add(products[i]["color"])
    // for (market in markets) {
    //   if (products[i]["market"] == markets[market]["id"]) {
    //     markets[market].appendChild(tableRow)
    //   }
    // }
    for (market in markets) {
      if (products[i]["market"] == markets[market]["id"]) {
        marketTableOrder[products[i]["market"]][products[i]["J"]] = tableRow
      }
    }
  }
  // console.log(typeof(marketTableOrder))
  // console.log(typeof(marketTableOrder["deliAndGrocery"]))
  // console.log(marketTableOrder["deliAndGrocery"]["67"])
  for (let j = 1; j <= 23; j++) {
    markets["meatAndDairy"].appendChild(marketTableOrder["meatAndDairy"][j])
  }
  for (let j = 1; j <= 23; j++) {
    markets["greenMarket"].appendChild(marketTableOrder["greenMarket"][j])
  }
  for (let j = 1; j <= 21; j++) {
    markets["janitorialSupply"].appendChild(marketTableOrder["janitorialSupply"][j])
  }
  for (let j = 1; j <= 17; j++) {
    markets["liquorStore"].appendChild(marketTableOrder["liquorStore"][j])
  }
  for (let j = 1; j <= 102; j++) {
    markets["deliAndGrocery"].appendChild(marketTableOrder["deliAndGrocery"][j])
  }
  
  return marketTableOrder
}

// Quantity functionality
function changeQuantity() {
  const selectedElement = this.parentElement.parentElement.parentElement.lastElementChild
  let newTotal = Number.parseInt(selectedElement.textContent, 10)
  if (this.textContent == "+") {
    newTotal += 1
  } else if (this.textContent == "-") {
    newTotal > 0 ? newTotal -= 1 : newTotal = 0
  } else if (this.textContent == "Zero") {
    newTotal = 0
  }
  selectedElement.textContent = newTotal
  newTotal == 0 ? selectedElement.classList.remove("nonzero") : selectedElement.classList.add("nonzero")
}

// Reset Button functionality
function resetTable() {
  marketTables = document.querySelectorAll("tbody")
  for (table of marketTables) {
    while (table.firstChild) {
      table.removeChild(table.firstChild)
    }
  }
  populateTable()
}

// Reset Price Changes text area to blank
function resetPriceChanges() {
  document.getElementById("priceChanges").value = ""
}

// Add buttons to each table
function addTableButtons() {
  const resetTableButtons = document.querySelectorAll(".resetTable") 
  const resetBlueAndGreen = document.querySelectorAll(".resetBlueAndGreen") 
  for (btn of resetTableButtons) {
    btn.addEventListener("click", resetOneTable)
  }
  for (btn of resetBlueAndGreen) {
    btn.addEventListener("click", resetBlueGreen)
  }
}

// reset each table
function resetOneTable() {
  const tableNode = this.parentElement.parentElement.childNodes[3].childNodes[3].childNodes
  for (let i = 1; i < tableNode.length; i++) {
    tableNode[i].childNodes[6].textContent = 0
    tableNode[i].childNodes[6].classList.remove("nonzero")
  }
}

// reset blues and greens in each table
function resetBlueGreen() {
  const tableNode = this.parentElement.parentElement.childNodes[3].childNodes[3].childNodes
  for (let i = 1; i < tableNode.length; i++) {
    if (tableNode[i].classList[0] == "blue" || tableNode[i].classList[0] == "green") {
      tableNode[i].childNodes[6].textContent = 0
      tableNode[i].childNodes[6].classList.remove("nonzero")
    }
  }
}