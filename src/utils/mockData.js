export const TASKS_MOCK = [
    {id: '1', title: "1Task 1", status: 'todo', description: "description 1", count: 1},
    {id: '2', title: "11hTask 2", status: 'todo', description: "description 2", count: 2},
    {id: '3', title: "2fTask 3", status: 'todo', description: "description 3", count: 3},
    {id: '4', title: "Task 4", status: 'todo', description: "description 4", count: 4},
    {id: '25', title: "aTask 5", status: 'todo', description: "description 5", count: 5},
    {id: '6', title: "Task 6", status: 'inprogress', description: "description 6", count: 6},
    {id: '7', title: "sTask 7", status: 'todo', description: "description 7", count: 7},
    {id: '8', title: "xTask 8", status: 'todo', description: "description 8", count: 8},
    {id: '9', title: "hTask 9", status: 'todo', description: "description 9", count: 9},
    {id: '9', title: "qTask 9", status: 'inprogress', description: "description 9", count: 9},
    {id: '10', title: "Task 10", status: 'todo', description: "description 10", count: 10},
];


export const getCustomSortArray = (arr, key, type = 'ASC') => {
    return arr.sort((a, b) => {
        return type === 'ASC' ? a[key].toString().localeCompare(b[key].toString())
            : b[key].toString().localeCompare(a[key].toString())
    })
}

export const getRandomNumbers=(min, max, count) =>{
    var numbers = [];

    // Create an array of numbers in the given range
    for (var i = min; i <= max; i++) {
        numbers.push(i);
    }

    var randomNumbers = [];

    // Select random numbers from the array
    while (randomNumbers.length < count && numbers.length > 0) {
        var randomIndex = Math.floor(Math.random() * numbers.length);
        var randomNumber = numbers[randomIndex];

        // Remove the selected number from the array
        numbers.splice(randomIndex, 1);

        // Add the selected number to the result array
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}