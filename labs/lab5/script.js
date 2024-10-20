document.getElementById('numberForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(num => parseInt(num.trim()));

    // Calculate using for loop
    const forResults = calculateWithForLoop(numbers);
    document.getElementById('forPrime').textContent = forResults.prime;
    document.getElementById('forComposite').textContent = forResults.composite;
    document.getElementById('forNeither').textContent = forResults.neither;

    // Calculate using forEach loop
    const forEachResults = calculateWithForEach(numbers);
    document.getElementById('forEachPrime').textContent = forEachResults.prime;
    document.getElementById('forEachComposite').textContent = forEachResults.composite;
    document.getElementById('forEachNeither').textContent = forEachResults.neither;

    // Calculate using map function
    const mapResults = calculateWithMap(numbers);
    document.getElementById('mapPrime').textContent = mapResults.prime;
    document.getElementById('mapComposite').textContent = mapResults.composite;
    document.getElementById('mapNeither').textContent = mapResults.neither;
});

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function calculateWithForLoop(numbers) {
    let prime = 0, composite = 0, neither = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1) neither++;
        else if (isPrime(numbers[i])) prime++;
        else composite++;
    }
    return { prime, composite, neither };
}

function calculateWithForEach(numbers) {
    let prime = 0, composite = 0, neither = 0;
    numbers.forEach(num => {
        if (num === 1) neither++;
        else if (isPrime(num)) prime++;
        else composite++;
    });
    return { prime, composite, neither };
}

function calculateWithMap(numbers) {
    const results = numbers.map(num => {
        if (num === 1) return 'neither';
        if (isPrime(num)) return 'prime';
        return 'composite';
    });
    return {
        prime: results.filter(r => r === 'prime').length,
        composite: results.filter(r => r === 'composite').length,
        neither: results.filter(r => r === 'neither').length
    };
}