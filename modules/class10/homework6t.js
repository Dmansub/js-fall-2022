


let favSports_1 = ['Football', 'Soccer', 'Fishing', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_2 = ['Football', 'Soccer', 'BaseBall', 'Ping pong', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let favSports_3 = ['Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

let findBaseball = favSports_1.includes('baseball')

    if(findBaseball) {
        console.log('Baseball is  present in the given array')
    } else {
        console.log('Baseball is not   present in the given array')
    }
       
let findBaseball2 = favSports_2.includes('BaseBall')
    if(findBaseball2) {
    console.log('Baseball is  present in the given array')
} else {  
    console.log('Baseball is not   present in the given array')
}

let findBaseball3 = favSports_3.lastIndexOf('Baseball');

if( findBaseball3 >= 2) {
    console.log( 'Baseball has second occurrence at index', (findBaseball3) )
} else {  
    console.log('Baseball is not   present in the given array')
}