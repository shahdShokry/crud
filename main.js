var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");

var searchInput = document.getElementById("searchInput");
var myBtn = document.getElementById("myBtn");
var currentIndex=0;
var productContainer;
if(localStorage.getItem("productList")==null){
    productContainer=[];
}
else {
    productContainer=JSON.parse(localStorage.getItem("productList"));
    displayProduct(productContainer);
}

function add(){
    if(myBtn.innerHTML=="Add Product"){
        addProduct();
    }
    else {
        editData();
    }

}

function addProduct() {
    if(validName() && validPrice()){
    var product = {
        name: productName.value,
        price: productPrice.value,
        
        category: productCategory.value,
        description: productDescription.value
    }
    
    productContainer.push(product);
    localStorage.setItem("productList",JSON.stringify(productContainer));
    displayProduct(productContainer);
    clearForm();}
    else {
        if(validName() ==false){
            validName()
        }
        if(validPrice()==false){
           validPrice()
        }
    }
    

}


function displayProduct(allProduct) {
    var temp = "";
    for (var i = 0; i < allProduct.length; i++) {
        temp += ` <tr>
        <td>${i}</td>
        <td>${allProduct[i].name}</td>
        <td>${allProduct[i].price}</td>
        <td>${allProduct[i].category}</td>
        <td>${allProduct[i].description}</td>
        <td>
            <button class="btn btn-warning" onclick="updateData(${i})">update</button>
        </td>
        <td>
            <button class="btn btn-danger" onclick="deleteProduct(${i})">delete</button>

        </td>

    </tr>`
    }
    document.getElementById("tableBody").innerHTML = temp;

}

function clearForm(){
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDescription.value="";
   

}

function deleteProduct(index){
    productContainer.splice(index,1);
    localStorage.setItem("productList",JSON.stringify(productContainer));
    displayProduct(productContainer);
}


function updateData(index){
    currentIndex=index;
    productName.value=productContainer[index].name;
    productPrice.value=productContainer[index].price;
    productCategory.value=productContainer[index].category;
    productDescription.value=productContainer[index].description;
    myBtn.innerHTML="update data"
}
function editData(){
   
    productContainer[currentIndex].name= productName.value
    productContainer[currentIndex].price= productPrice.value
    productContainer[currentIndex].category= productCategory.value
    productContainer[currentIndex].description= productDescription.value
    myBtn.innerHTML="Add Product";
    localStorage.setItem("productList",JSON.stringify(productContainer));
    displayProduct(productContainer);
    clearForm()
    
}

function search(term){
    var searchProduct=[]
    for (var i = 0; i < productContainer.length; i++) {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){

            search.push(productContainer[i])
        }
    }
    displayProduct(searchProduct)
    }
        

function validName(){
    var regexName=/^[A-z]{3,10}[0-9]?$/;
    if(regexName.test(productName.value)){
        document.getElementById("validNameAlert").style.display="none"
        return true
}
else {
    document.getElementById("validNameAlert").style.display="block"
    return false
}
}
function validPrice(){
    var regexPrice=/^[0-9]{1,5}?$/
    if(regexPrice.test(productPrice.value)){
        document.getElementById("validPriceAlert").style.display="none"
        return true
}
else {
    document.getElementById("validPriceAlert").style.display="block"
    return false
}
}




// localStorage.getItem("Route")
// localStorage.removeItem("")
//  localStorage.clear()

// [{}] = JSON


// var x ="file,js"
// // x.length(x[0])
// // console.log(x.length);
// // console.log(x.replace("js","c++"));
// // console.log(x.repeat(100));
// // console.log(x.toLowerCase());
// // console.log(x.toUpperCase());
// // console.log(x.substring(1,3));
// // console.log(x.substring(1,3));
// // console.log(x.substr(1,3));
// // console.log(x.trim());
// // console.log(x.split(","));
// console.log(x.includes("js"));  /* sensitive*/
// console.log(x.startsWith("js"));
// console.log(x.endsWith("js"));

// console.log(x.toLowerCase().startsWith("File".toLowerCase()));
// console.log(x.indexOf("le"));