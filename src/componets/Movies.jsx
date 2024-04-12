import {Movie} from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
        {movies.length ? (
            movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
            <div className="block-not-found">
            <p3>NOT FOUND</p3>
            <img className="not-found" src="https://steamuserimages-a.akamaihd.net/ugc/964228526751651151/EDFEF32655BB033B66942251379D20E95A399567/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=truehttps://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt=""/>
            </div>
            )}
            
      
    </div>
)}
export { Movies };