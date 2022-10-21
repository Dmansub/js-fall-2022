/**
 * Add 'Mars' at index-0 (unshift)
 * 
 * Add 'Venus' at index-4
 */
 let planets = ['plUtO', 'URANUS', 'A', 'B', 'Saturn', 'JupiTEr', 'LOL', 'Mercury', 'EaRtH']

 planets.unshift('mars')
 planets.splice(4,0, 'venus') 
 console.log(planets)