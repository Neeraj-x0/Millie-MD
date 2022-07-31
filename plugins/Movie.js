const{fetchJson} = require('../lib')
module.exports = {
	name: "movie",
    alias :['imdb'],
	category: "Tools",
	desc: "Get Movie details",
	query :'Enter text ',
	async mbb({ msg,conn },{q}) {
        const response = await fetchJson(`http://www.omdbapi.com/?apikey=742b2d09&t=${q}&plot=full`);
        console.log(response)
        if(response.Response=== 'False') return msg.reply('Movie not found!')
        
        let str = '';
        str += 'Title      : ' + response.Title + '\n\n';
        str += 'Year       : ' + response.Year + '\n\n';
        str += 'Rated      : ' + response.Rated + '\n\n';
        str += 'Released   : ' + response.Released + '\n\n';
        str += 'Runtime    : ' + response.Runtime + '\n\n';
        str += 'Genre      : ' + response.Genre + '\n\n';
        str += 'Director   : ' + response.Director + '\n\n';
        str += 'Writer     : ' + response.Writer + '\n\n';
        str += 'Actors     : ' + response.Actors + '\n\n';
        str += 'Plot       : ' + response.Plot + '\n\n';
        str += 'Language   : ' + response.Language + '\n\n';
        str += 'Country    : ' + response.Country + '\n\n';
        str += 'Awards     : ' + response.Awards + '\n\n';
        str += 'BoxOffice  : ' + response.BoxOffice + '\n\n';
        str += 'Production : ' + response.Production + '\n\n';
        str += 'imdbRating : ' + response.imdbRating + '\n\n';
        str += 'imdbVotes  : ' + response.imdbVotes;
        await conn.sendMessage(msg.from, {image :{url:response.Poster},caption: str});
	}
};
