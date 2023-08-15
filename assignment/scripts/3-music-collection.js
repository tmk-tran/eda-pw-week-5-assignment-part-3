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
console.log( album1 );

let album2 = addToCollection( 'Enter the Wu-Tang', 'Wu-Tang Clan', 1993 );
console.log( album2 );

let album3 = addToCollection( 'Dark Side of the Moon', 'Pink Floyd', 1973 );
console.log( album3 );

let album4 = addToCollection( 'Thriller', 'Michael Jackson', 1983 );
console.log( album4 );

let album5 = addToCollection( 'Legend: The Best of Bob Marley & The Wailers', 'Bob Marley', 1984 );
console.log( album5 );

let album6 = addToCollection( 'Scary Monsters and Nice Sprites', 'Skrillex', 2010 );
console.log( album6 );

let album7 = addToCollection( 'Meteora', 'Linkin Park', 2003 );
console.log( album7 );  // added another album to have multiple albums by same artist

console.log( collection );  // printing the contents of the current collection



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
    if( results.length === 0 ) {
        console.log( 'No albums are found for this artist: ', artist );
    } else {
        console.log( 'Albums by ' + results[0].artist + ': ' + results.length, results )
    }
    return results;
}

let artist1 = findByArtist( 'Skrillex' );  // testing artist known to be in array

let artist2 = findByArtist( 'Taylor Swift' );  //  shouldn't have this artist in collection, testing in console

let artist3 = findByArtist( 'Linkin Park' );  // testing multiple albums by same artist


// START HERE TO FINISH ASSIGNMENT
// function search( )