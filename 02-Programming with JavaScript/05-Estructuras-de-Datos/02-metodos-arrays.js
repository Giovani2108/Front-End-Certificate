

// forEach()
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);



// Filter()
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
    console.log(result);
})


// map
[0,10,20,30,40,50].map( function(num) {
    return num / 10; // [0,1,2,3,4,5]
})