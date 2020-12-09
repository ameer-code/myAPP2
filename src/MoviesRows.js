import React from 'react'
import Carousel from "react-elastic-carousel";



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


const MoviesRows = (props) => {
  
    function myClick(){
        props.cardClickedFunc(props.index)
    }
    return (

        <div className="mainContainer">
           

            <div className="genreTitle">
                <h4>{props.genre}</h4>
            </div>

            <div className="AllImgesContiner">
            <Carousel breakPoints={breakPoints}>

                <div className="imgPcontainer">                 
                    <img src={props.firstImg} onClick={myClick}></img>
                    <p>{props.firstTitle}</p>                
                </div>
               
                <div className="imgPcontainer">
                    <img src={props.secondImg} onClick={myClick}></img>
                    <p>{props.secondTitle}</p>
                </div>

                <div className="imgPcontainer">
                    <img src={props.thirdImg} onClick={myClick}></img>
                    <p>{props.thirdTitle}</p>
                </div>

                <div className="imgPcontainer">
                    <img src={props.fourthImg} onClick={myClick}></img>
                    <p>{props.fourthTitle}</p>
                </div>

                <div className="imgPcontainer">
                    <img src={props.fifthImg} onClick={myClick}></img>
                    <p>{props.fifthTitle}</p>
                </div>

                <div className="imgPcontainer">
                     <img src={props.sixthImg} onClick={myClick}></img>
                     <p>{props.sixthTitle}</p>
                </div>

                <div className="imgPcontainer">
                    <img src={props.seventhImg} onClick={myClick}></img>
                    <p>{props.seventhTitle}</p>
                </div>
                </Carousel>
          </div>
</div>
       
        

    )
}

export default MoviesRows;
