// Task 1: 
function addition(a, b) {
    return a + b;
}

// Task 2: 
function bitwiseAND(a, b) {
    return a & b;
}

function bitwiseOR(a, b) {
    return a | b;
}

function bitwiseXOR(a, b) {
    return a ^ b;
}

// Task 3:
function addUp(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    return sum;
}

// Task 4: 
function progressBar(a) {
    
    let filledSlots = Math.floor(a / 10);

    
    if (filledSlots < 0) filledSlots = 0;
    if (filledSlots > 10) filledSlots = 10;

    let emptySlots = 10 - filledSlots;

    return "#".repeat(filledSlots) + "-".repeat(emptySlots);
}


// Task 5: 
function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min, max];
}

// Task 6:
function calculateRepoStats(repos) {

    const starsArray = repos.map(repo => repo.stars);

    const maxStars = Math.max(...starsArray);
    const minStars = Math.min(...starsArray);

    const totalStars = starsArray.reduce((sum, stars) => sum + stars, 0);
    const avgStars = Math.floor(totalStars / starsArray.length);

    const varianceScore = Math.abs(maxStars - minStars);

    return {
        maxStars: maxStars,
        minStars: minStars,
        avgStars: avgStars,
        varianceScore: varianceScore
    };
}


// Task 7:
function calculateFinalPrice(basePrice, taxRate, discountPercentage) {
    let discountedPrice = basePrice * (1 - discountPercentage / 100);


    let rawPrice = discountedPrice * (1 + taxRate / 100);

    let finalPrice = Number(rawPrice.toFixed(2));

    let loyaltyPointsEarned = Math.ceil(finalPrice);

    return {
        finalPrice: finalPrice,
        loyaltyPointsEarned: loyaltyPointsEarned
    };
}

// Task 8: 
function paginateData(items, pageNumber, pageSize = 5) {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    // Slicing current page items
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const data = items.slice(startIndex, endIndex);

    const hasNext = pageNumber < totalPages;
    const hasPrev = pageNumber > 1;

    return {

        data: data,
        currentPage: pageNumber,
        totalPages: totalPages,
        hasNext: hasNext,
        hasPrev: hasPrev
    };
}



console.log("--- Task 1: Addition ---");
console.log("addition(3, 5):", addition(3, 5));

console.log("\n--- Task 2: Bitwise Operations ---");
console.log("bitwiseAND(6, 3):", bitwiseAND(6, 3));
console.log("bitwiseOR(6, 3):", bitwiseOR(6, 3));
console.log("bitwiseXOR(6, 3):", bitwiseXOR(6, 3));

console.log("\n--- Task 3: Add Up ---");
console.log("addUp(4):", addUp(4));
console.log("addUp(13):", addUp(13));

console.log("\n--- Task 4: Progress Bar ---");
console.log("progressBar(10):", progressBar(10));
console.log("progressBar(40):", progressBar(40));
console.log("progressBar(49):", progressBar(49));

console.log("\n--- Task 5: Min Max ---");
console.log("minMax([1, 2, 3, 4, 5, 6]):", minMax([1, 2, 3, 4, 5, 6]));

console.log("\n--- Task 6: Repository Stats ---");
const sampleRepos = [
    { name: 'repo-a', stars: 12 },
    { name: 'repo-b', stars: 45 },
    { name: 'repo-c', stars: 3 }
];
console.log(calculateRepoStats(sampleRepos));

console.log("\n--- Task 7: E-commerce Price ---");
console.log(calculateFinalPrice(100, 10, 15)); // $100 base, 10% tax, 15% discount

console.log("\n--- Task 8: Paginate Data ---");
const allProducts = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Desk', 'Chair', 'Webcam', 'Headphones'];
console.log(paginateData(allProducts, 2, 3));