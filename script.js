const totalPriceString = document.querySelector('#totalPrice');
let totalPriceNum = parseFloat(totalPriceString.innerText);
let productCounts = {};

function addProduct(target) {
    const priceString = target.parentNode.parentNode.childNodes[7].childNodes[1].innerText.split(' ')[0];
    const priceNum = parseFloat(priceString);

    totalPriceNum += priceNum;
    totalPriceString.innerText = totalPriceNum.toFixed(2);

     // Check if the item already exists in the list
    const productName = target.parentNode.parentNode.childNodes[1].innerText;
    let count = productCounts[productName] || 0;
    const existingItem = document.querySelector('#liInput li[data-name="' + productName + '"]');
    // If the item doesn't exist, add it to the list
    if(!existingItem){
        const li = document.createElement('li');
        count ++;
        li.innerText = productName + '('+ count +')';
        li.setAttribute('data-name', productName);
        document.getElementById('liInput').appendChild(li);
    }else{
        count++;
        existingItem.innerText = productName + '('+ count +')';
    }
    productCounts[productName] = count;

   
    // calculate TOtal
    const grandTotal = document.getElementById('grandTotal');
    grandTotal.innerText = totalPriceNum;

    // active in active button
    if(totalPriceNum > 0){
        const purchaseDisabled = document.getElementById('purchase');
        purchaseDisabled.disabled = false;
    }
    if(totalPriceNum > 199){
        document.getElementById('apply').disabled = false;
    }
}

 // Calculate Discunt
function applyDiscount(id){
    // active cupon code
    const cuponField = document.getElementById('cuponField');
    const setDiscount = document.getElementById('discount');
    const grandTotal = document.getElementById('grandTotal');
    if(cuponField.value === 'SELL200'){
        document.getElementById('apply').addEventListener('click', function(){
            let discount = ((totalPriceNum * 20)/100);
            setDiscount.innerText = discount;
            
            const total = totalPriceNum - discount;
            grandTotal.innerText = total;
            // console.log(grandTotal.innertext = totalPriceNum - discount);
            
        })
    }else{
        return;
    }
}

// modal
function showModal(modal){
    document.getElementById('modelConfirm').style.display = 'block';
}
function closeModal(home){
    document.getElementById(home).reset();
    document.getElementById('modelConfirm').style.display = 'none'; 
}
