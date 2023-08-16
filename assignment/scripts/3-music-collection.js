console.log('***** Music Collection *****')

let collection = [];  // empty array for now

function addToCollection( title, artist, yearPublished ) {  // function to add album to collection
    const newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    collection.push(newAlbum);
    return newAlbum;
}

let album1 = addToCollection( 'Hybrid Theory', 'Linkin Park', 2000 );
console.log( 'Album 1: ', album1 );

let album2 = addToCollection( 'Enter the Wu-Tang', 'Wu-Tang Clan', 1993 );
console.log( 'Album 2: ', album2 );

let album3 = addToCollection( 'Dark Side of the Moon', 'Pink Floyd', 1973 );
console.log( 'Album 3: ', album3 );

let album4 = addToCollection( 'Thriller', 'Michael Jackson', 1983 );
console.log( 'Album 4: ', album4 );

let album5 = addToCollection( 'Legend: The Best of Bob Marley & The Wailers', 'Bob Marley', 1984 );
console.log( 'Album 5: ', album5 );

let album6 = addToCollection( 'Scary Monsters and Nice Sprites', 'Skrillex', 2010 );
console.log( 'Album 6: ', album6 );

let album7 = addToCollection( 'Meteora', 'Linkin Park', 2003 );
console.log( 'Album 7 (extra): ', album7 );  // added another album to have multiple albums by same artist

console.log( 'The collection array contains: ', collection );  // printing the contents of the current collection



function showCollection( collection ) {  // function to display current collection info
    console.log( 'The number of items in the collection is: ', collection.length );

    for( let album of collection ) {
        console.log( album.title + ', by ' + album.artist + '. Published in ' + album.yearPublished )
    }
}

showCollection( collection );  // testing the showCollection function



function findByArtist( artist ) {
    const results = [];

    for( album of collection ) {
        if( album.artist === artist) {
            results.push(album);
        }
    }
    if( results.length === 0 ) {  // if artist is not found, 
        console.log( 'No albums are found for this artist: ', artist ); // log this message and artist name
    } else {
        console.log( 'Albums by ' + results[0].artist + ': ' + results.length, results )  // otherwise: list the name of the artist, the number of albums, and print the array(s) to console
    }
    return results;
}


let artist1 = findByArtist( 'Skrillex' );  // testing artist known to be in array

let artist2 = findByArtist( 'Taylor Swift' );  //  shouldn't have this artist in collection, testing in console

let artist3 = findByArtist( 'Linkin Park' );  // testing multiple albums by same artist



function search( searchInput ) {  // function called search that takes an input
  
    const searchResults = [];

    if( !searchInput || Object.keys(searchInput).length === 0 ) {
        return collection;
    }

    for( let album of collection ) {
        let matchesCriteria = true;

        for( let property in searchInput ) {
            if( album[property] !== searchInput[property] ) {
                matchesCriteria = false;
                break;  // break only if the property doesn't match
            }
        }
        if( matchesCriteria ) {
            searchResults.push(album);
        }
    } 
    if( searchResults.length === 0 ) {
        console.log( 'No albums found matching the search criteria ', searchInput );  // log message if no album found by artist
        return [];
    } else {
        console.log( 'A match was found: ', searchInput );
    }
    
    return searchResults;
}

let searchInput = { artist: 'Ray Charles', yearPublished: 1957 };  // testing 'search' with info from README
let searchResults1 = search( searchInput );  // should display message about no albums found
console.log( 'The album info is: ', searchResults1 );  // should display an empty array

let searchInput2 = { artist: 'Pink Floyd', yearPublished: 1973 };  // testing with an artist known to be in collection
let searchResults2 = search( searchInput2 );
console.log( 'The album info is: ', searchResults2 );  // should have a Pink Floyd album in array 

let searchInput3 = {};  // testing with an empty search input
let searchResults3 = search( searchInput3 );
console.log( 'The album info is: ', searchResults3 );  // should print the collection in console

let searchResults4 = search();  // testing empty search object
console.log( 'The album info is: ', searchResults4)  // should print the collection in console
