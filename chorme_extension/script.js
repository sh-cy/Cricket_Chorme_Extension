async function getMatchData(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=9ab21d84-923d-4451-9671-043bfcabfb54&offset=0")
    .then(data=>data.json())
    .then(data=>{
        if(data.status !="success") return;
        const matchesList=data.data;
        if(!matchesList) return[];
        const releventData=matchesList.map(match=>`${match.name},${match.status}`);
        console.log(releventData)
        document.getElementById("matches").innerHTML=releventData.map(match=>`<li>${match}</li>`).join('');
        return releventData;
    })
    .catch(e => console.log(e));
}
getMatchData();