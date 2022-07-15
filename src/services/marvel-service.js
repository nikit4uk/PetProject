export default class MarvelService {
    _apiBase = 'https://movie-database-alternative.p.rapidapi.com/?r=json&i=';
    
    async getResource(id){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '838174d82amsh8b2587e30c54035p196e06jsn335b2daf42df',
                'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
            }
        };
        const res = await fetch(`${this._apiBase}${id}`, options);

        if(!res.ok){
            throw new Error(`Could not fetch recived ${res.status}`)
        }

        return await res.json();
    }

    async getActors(id) {
        const res = await this.getResource(id);
        console.log(res.Actors)
        return res.Actors;
    }
}