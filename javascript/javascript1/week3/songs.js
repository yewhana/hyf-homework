const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
 ];
 
 function addSongToDatabase(song){
  song=[
      {
    songId: 5,
    title:'I Do not care',
    artist:'Justin Bieber',
 
 },
 {
    songId:6,
    title:'please Me',
    artist:'Cardi B',
 },
 
  ];
 return songDatabase.push(...song);
 }
 
 function getSongByTitle(title){
 for(let i=0;i<=songDatabase.length-1;i++){
  return songDatabase[0].title===title?songDatabase[0]:
        songDatabase[1].title===title?songDatabase[1]:
        songDatabase[2].title===title?songDatabase[2]:
        songDatabase[3].title===title?songDatabase[3]:
        songDatabase[4].title===title?songDatabase[4]:
        songDatabase[5].title===title?songDatabase[5]:
  'Not found';
 }
 
 }
 const myPlaylist = [];
 function addSongsToMyPlayList(title){
 myPlaylist.push(getSongByTitle(title));
 return myPlaylist;
 }
 console.log(addSongToDatabase(songDatabase));
 console.log(songDatabase);
 console.log(getSongByTitle('I Do not care'));
 addSongsToMyPlayList('I Do not care');
 addSongsToMyPlayList('please Me');
 addSongsToMyPlayList('Blacker than black');
 console.log(myPlaylist);