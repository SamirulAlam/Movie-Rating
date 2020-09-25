var val;

window.onload=function(){
    let shortenMovies=sortByAttribute(movies,"title");
    displayMovie(shortenMovies);
}
let movies=[
    {
        title:"Fight Club",
        rank:10,
        id:"tt0137525"
        
    },
    {
        title:"12 Angry Men",
        rank:7,
        id:"tt0167525"
        
    },
    {
        title:"The Lord of the Ring",
        rank:9,
        id:"tt0117525"
        
    },
    {
        title:"The godfather",
        rank:2,
        id:"tt0127525"
        
    },
    {
        title:"The Dark Knight",
        rank:6,
        id:"tt0135525"
        
    },
    {
        title:"The Godfather Part II",
        rank:3,
        id:"tt0177525"
        
    },
    {
        title:"Amazing Spider Man",
        rank:4,
        id:"tt0137725"
        
    },
    {
        title:"Avengers End Game",
        rank:1,
        id:"tt0137523"
        
    },
    {
        title:"Pulp Fiction",
        rank:8,
        id:"tt0137545"
        
    },
    {
        title:"The Good, The Bad and The Ugly",
        rank:5,
        id:"tt0132525"
        
    },
];

function displayMovie(movies){
    let table="<table border='1' style='width:100%'>";
    table+="<tr><th>ID</th><th>Name</th><th>Rank</th>";
    for(let i=0;i<movies.length;i++){
        table+="<tr>";
        table+="<td>"+movies[i].id+"</td>";
        table+="<td>"+movies[i].title+"</td>";
        table+="<td>"+movies[i].rank+"</td>";
        table+="</tr>";
    }
    table+="</table>";
    document.getElementById("movie-list").innerHTML=table;
}



function findMax(movies,start,attr){
    max= movies[start];
    maxPosition=start;
    for(let j=start;j<movies.length;j++){
        if(movies[j][attr]>max[attr]){
            max=movies[j];
            maxPosition=j;
        }
    }
    return {maxMovie:max,maxPos:maxPosition};
}

function sortMovie(movies,attr){
    for(let i=0;i<movies.length-1;i++){
       
           let obj=findMax(movies,i,attr);
            max=obj.maxMovie;
           maxPosition=obj.maxPos;
        movies[maxPosition]=movies[i];
        movies[i]=max;

    }

    return movies;
}

function sortByAttribute(movies,attr){
    sortedMovies=sortMovie(movies,attr);
    return sortedMovies;
}

sort=(btn)=>{
    val=btn.id;
    let shortenMovies=sortByAttribute(movies,val);
    displayMovie(shortenMovies);
}

console.log(val);
