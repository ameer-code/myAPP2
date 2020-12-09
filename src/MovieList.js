import React,{useState} from 'react'
import MoviesRows from './MoviesRows';
import { Header } from './Header';


const MovieList = () => {
    // 
    const [theClickedCardIndex, setTheClickedCardIndex] = useState(-1);

    let actionAndAdventureImgFolder = "/assets/ActionAndAdventure/";
    let comediesImgFolder = "/assets/Comedies/";
    let dramasImgFolder = "/assets/Dramas/";
    let newReleasesImgFolder = "/assets/New Releases/";

    let arrImges = [
        {
            genre: "Action & Adventure",           
            img1: `${actionAndAdventureImgFolder}img1.jpg`,            
            title1: "Spider-Man: Far from Home",
            img2: `${actionAndAdventureImgFolder}img2.jpg`,
            title2: "Extraction",
            img3: `${actionAndAdventureImgFolder}img3.jpg`,
            title3: "Enola Holmes",
            img4: `${actionAndAdventureImgFolder}img4.jpg`,
            title4: "Charlie's Angels",
            img5: `${actionAndAdventureImgFolder}img5.jpg`,
            title5: "The Old Guard",
            img6: `${actionAndAdventureImgFolder}img6.jpg`,
            title6: "Cellular",
            img7: `${actionAndAdventureImgFolder}img7.jpg`,
            title7: "6 Underground"
        },
        {
            genre: "Comedies",
            img1: `${comediesImgFolder}img1.jpg`,
            title1: "Despicable me2",
            img2: `${comediesImgFolder}img2.jpg`,
            title2: "Tall Girl",
            img3: `${comediesImgFolder}img3.jpg`,
            title3: "Ride Alone",
            img4: `${comediesImgFolder}img4.jpg`,
            title4: "Mean Girls",
            img5: `${comediesImgFolder}img5.jpg`,
            title5: "KungFu Panda",
            img6: `${comediesImgFolder}img6.jpg`,
            title6: "Rush Hour",
            img7: `${comediesImgFolder}img7.jpg`,
            title7: "Johnny English"
        },
        {
            genre: "Dramas",
            img1: `${dramasImgFolder}img1.jpg`,
            title1: "Miracle In Cell No. 7",
            img2: `${dramasImgFolder}img2.jpg`,
            title2: "The Irishman",
            img3: `${dramasImgFolder}img3.jpg`,
            title3: "Miracles From Heaven",
            img4: `${dramasImgFolder}img4.jpg`,
            title4: "Primnal Fear",
            img5: `${dramasImgFolder}img5.jpg`,
            title5: "Unforgiven",
            img6: `${dramasImgFolder}img6.jpg`,
            title6: "The Godfather",
            img7: `${dramasImgFolder}img7.jpg`,
            title7: "Gladiaor"
        },
        {
            genre: "New Release",
            img1: `${newReleasesImgFolder}img1.jpg`,
            title1: "The Social Dilemma",
            img2: `${newReleasesImgFolder}img2.jpg`,
            title2: "A Dog's Way Home",
            img3: `${newReleasesImgFolder}img3.jpg`,
            title3: "The Boy Who Harnessed The Wind",
            img4: `${newReleasesImgFolder}img4.jpg`,
            title4: "The King",
            img5: `${newReleasesImgFolder}img5.jpg`,
            title5: "El Camino",
            img6: `${newReleasesImgFolder}img6.jpg`,
            title6: "Rim Of The World",
            img7: `${newReleasesImgFolder}img7.jpg`,
            title7: "Brave Blue Worlds"
        },


    ]
    function cardClicked(index) {
        console.log("selected" + index );
        setTheClickedCardIndex(index);
    }
    let currUser;
    if (theClickedCardIndex !== -1) {
        currUser = arrImges[theClickedCardIndex];
    }

    const myP = 'Movies move us like nothing else can, whether they’re scary, funny dramatic, romantic or anywhere in-between. So many titles, so much to experience. Watch now for free ';

    return (
        <div>
             <Header/>
             <h1>Movies</h1>
            <p id="phead">{myP}</p>
            {arrImges.map((curr , index) => {
                return (
                    <div>
                  
                        <div>
                            <MoviesRows
                                cardClickedFunc={cardClicked}
                                index={index}
                                genre={curr.genre}
                                firstImg={curr.img1}
                                firstTitle={curr.title1}
                                secondImg={curr.img2}
                                secondTitle={curr.title2}
                                thirdImg={curr.img3}
                                thirdTitle={curr.title3}
                                fourthImg={curr.img4}
                                fourthTitle={curr.title4}
                                fifthImg={curr.img5}
                                fifthTitle={curr.title5}
                                sixthImg={curr.img6}
                                sixthTitle={curr.title6}
                                seventhImg={curr.img7}
                                seventhTitle={curr.title7}
                            />
                        </div>

                    
                     </div>
                )
            })}

        </div>
    )
}

export default MovieList;
