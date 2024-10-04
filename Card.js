import React from 'react';

const Card = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No news to display</div>;
  }
  const readMore = (url) =>{
    window.open(url)
  }

  return (
    <div className='card-container'>
      {data.map((curItem, index) => {
        if(!curItem.urlToImage){
          return null
        }else{
          return (
            <div className='card' key={index}> {/* Added key */}
              <img src={curItem.urlToImage} alt={curItem.title} /> 
              <div className='cardContent'>
                <a className='title' onClick={()=>window.open(curItem.url)}> 
                  {curItem.title}
                </a>
                <p>{curItem.description}</p>
                <button onClick={()=>window.open(curItem.url)}>Read More</button>
              </div>
            </div>
          )
        }
        
})}
    </div>
  );
};

export default Card;
