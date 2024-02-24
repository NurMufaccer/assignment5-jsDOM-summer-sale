const totalPriceString = document.getElementById('totalPrice');
let totalPrice = parseFloat(totalPriceString.innerText);
let productCounts = {}; // Object to store counts for each product

function addProduct(target) {
    const priceString = target.parentNode.parentNode.childNodes[7].childNodes[1].innerText.split(' ')[0];
    const priceNum = parseFloat(priceString);
    
    totalPrice += priceNum;
    totalPriceString.innerText = totalPrice.toFixed(2);
    
    // Check if the item already exists in the list
    const productName = target.parentNode.parentNode.childNodes[1].innerText;
    let count = productCounts[productName] || 0; // Get count for this product or default to 0
    const existingItem = document.querySelector('#liInput li[data-name="' + productName + '"]');
    
    // If the item doesn't exist, add it to the list
    if (!existingItem) {
        const li = document.createElement('li');
        count++;
        li.innerText = productName + ' (' + count + ')';
        li.setAttribute('data-name', productName); // Add a data attribute for comparison
        document.getElementById('liInput').appendChild(li);
    } else {
        count++;
        existingItem.innerText = productName + ' (' + count + ')';
    }
    
    // Update count for this product
    productCounts[productName] = count;
    
    // Enable buttons based on total price
    if (totalPrice > 199) {
        document.getElementById('apply').disabled = false;
    }
    if (totalPrice > 0) {
        document.getElementById('purchase').disabled = false;
    }
}
