import React from 'react'
import './News.css'

const News = () => {
    return (
      
        <div className='newsection'>
            <div className="newswall">
            <div className="newsall">
                <h3>Algorithmic predictions fuel crypto frenzy; investors face uncertain future.</h3>
                <button>Read More</button>
            </div>
            <div className="newsall">
                <h3>Cryptocurrency market manipulation suspicions rise amid automated trading surge.</h3>
                <button>Read More</button>
         </div>
         <div className="newsall">
                <h3>Trading bot scandal rocks crypto world; investors lose fortunes overnight.</h3>
                <button>Read More</button>
                </div>
                <div className="newsall">
                <h3>Unprecedented crypto volatility linked to automated trading systems.</h3>
                <button>Read More</button>
                </div>
                <div className="newsall">
                <h3>Crypto market turmoil blamed on sophisticated algorithmic strategies.</h3>
                <button>Read More</button>
         </div>
            </div>
            </div>
  )
}

export default News