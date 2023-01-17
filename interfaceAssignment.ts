// declaring an interface
interface Product {
    productName: string;
    productPrice: number;
    productAvailable: boolean;
};
// declaring an array of any datatype having interface properties
const productData: Product[] =
    [{
        productName: "Samsung Galaxy Note 7", productPrice: 699, productAvailable: true
    },
    {
        productName: "Samsung Galaxy S6 Edge", productPrice: 650, productAvailable: true
    },
    {
        productName: "Nokia Lumia 640XL", productPrice: 712, productAvailable: false
    }];
function getMobileDetails(item: string) {
    if (item === 'samsung') {
        document.getElementById("pPrice0").innerHTML = "$" + productData[0].productPrice + "";
        document.getElementById("pName0").innerHTML =  productData[0].productName;
        document.getElementById("pAvailable0").innerHTML = productData[0].productAvailable ? ("Available") : ("Out of Stock");
    } else if (item === 'samsungedge') {
        document.getElementById("pPrice1").innerHTML =  "$" + productData[1].productPrice + "";
        document.getElementById("pName1").innerHTML = productData[1].productName;
        document.getElementById("pAvailable1").innerHTML = productData[1].productAvailable ? ("Available") : ("Out of Stock");
    } else {
        document.getElementById("pPrice2").innerHTML = "$" + productData[2].productPrice + "";
        document.getElementById("pName2").innerHTML = productData[2].productName;
        document.getElementById("pAvailable2").innerHTML = productData[2].productAvailable ? ("Available") : ("Out of Stock");
    }
}


