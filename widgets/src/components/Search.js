import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);  
    //.............1.........//

    useEffect(() =>{
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
               params: {
                   action:'query',
                   list: 'search',
                   origin: '*',
                   format: 'json',
                   srsearch: term,
               },
            });
            

            setResults(data.query.search);
        };

      
        //...........2.......//
        if (term && !results.length){
            search();
        }else{
            //...........3..........//
            const timeoutId = setTimeout(()=> {
                if(term){
                    search();
                 }
            },1000); 
            //.......4.......//
            return () => {
                clearTimeout(timeoutId);
             };
        }
        //speical comment   
     }, [term]);     
     //.......5..........// 
     const renderedResults = results.map((result) =>{
        return (            
            //................6.............//
            <div key={result.pageid} className="item">
                <div className='right floated content'>
                    <a 
                        className='ui button'                       
                        //...........7..........//
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className='header'>
                        {result.title}
                    </div>         
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
        //........8..........//
     });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;


//........comments.........//
//......1.....//
    //term change bhayesi network request garxa use Effect le
    //but eha aru bela jasto async awati use garna mildaina
    //teslai solve garni pani 3 ota method hunxa. 1.helper function 
    //lekhera testo bhitra teslai chai async wait garaune 2.method 2 ma chai
    //mathi kai method ho but variable declare nagarne. self executing function 
    //jasto garera lekhne last ma set of () diyera ani function lai
    //pani set of () esle wrap garera 3. using the normal promises

//.......2.....//
      //tesari timeout ma duration pathayesi,user le type garna xodeko 
        //1 sec paxi balla search garxa jasko karan network bata dherai search huna bata
        //tah joginxa but suru ma render huna time lagxa screen ma content.
        //tyo problem solve garna if(term && !result.length) i.e first time
        //search garna lageko bhanera search() matra garne natra first time haina bhane
        //balla setTimeout wala function ko kam garne

//.......3.......//
        //individual letter type garepichey search request nagarnalai
            //setTimeOut function call gareko ani hareko choti new letter
            //press huda tyo setTimeOut lai cancel garna milxa javascript ko
            //"clearTimeout" bhanne method le.Tesko lagi setTimoue function
            //run garda console ma paila euta number auxa jaslai identifier bhanxa
            //eha chai euta variable timoutId rakhyo ani setTimeout le tyo 
            //identfier return garxa ani teslai paxi clear garna milxa

//...........4..........//
        //useEffect call garda paila tyo bhitra bhako function i.e arrow function 
            //call hunxa ani tespaxi balla cleanup function return hunxa
            //ani tya paxi component re-render hune bela balla aghi return bhako 
            //cleanup function invoke hunxa ani function provided by the useEfect 
            //run hunxa ni feri cleanup function return garxa jun chai 
            //arko re-render hune bela invoke garxa


//.........5............//
    //aba new variable 'renderedResults' ma results.map garera jsx bhitra as a list display garne

//..........6...........//
    //main div item show garda api bata fetch garda
            //each chils list ko tesko unique key huna parxa
            //tesaile result ma pageid unique bhayeko bhayera
            //teslai nai key property banako

//..............7...............//
    //curid(query string property) ma result.pageid rakhera tyo link ma 
    //click garepaxi particular page ma purauna
    //wikipedia ko unique pageid rakheko

//........8...............//
     //wikipedia esto bata data fetch garda security hole 
        //huna sakxa jasle garda unnecessary html elements dekhinxa
        //sakxa tyo avoid garna dangerouslySetInnerHTML use gareko
        //tyo attack lai XSS attact bhaninxa
//.............special comment........../
        //special comment lekheko thau ma tya tala dependecny ma [term]
        //matra bhayeko le [results.length] error auxa.
        //teshlai sovle garna naya useState lekhera, debounceTerm ani setdebounceTerm
        //garera dui ota useEffect lekhera euta le debounceTerm bhitra [term] dependency lai
        //update garaune arko useEffect le search function call garne ani last ma
        //[debouncedTerm] update garne..tesari search garda srsearch chai debouncedTerm
        //hunxa feri.
    












