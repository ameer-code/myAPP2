import React, { useEffect, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'






export function About() {
   
    const navStyle = {
        color:'red',
        textDecoration:'none'
      
    }
  

    let myRandStr = 'sddadafere565364gfsgsgsrhsgdfdeyetrsgbdjrtdfsrrsrwsysrgsgfsgdsrsre547597686@@#$$@*********&^JHFGHDGHDXDSEFSSFGSFSGFSGFSFGdffdfdfdf64676845ce5cfdfsgsgwt4dfafaterradfatewt4wtw65y5e5cy5e5ecyeeeye5e5y4658675642xfdhd54xtw44x2x62464757575473753cere63418nfjhfjgfnfnht7##########@@@@@@@RRRRRRRRRRRRRRRDDDDDDDDDDDDDS!@#$%%((*&^^^$&%%&^{}{?>:{:L<>>++++++++++___________+==========----------00000000000999999999"""""""""";;;;;;;;;;;;;;;;;;""""""""""""""""""""""""""""""""""""""""""""""""""""nbhvjvfgjdfsdgaaaaaaaaaaaaaaaaafd64657575555555555509907n7989696n758lubiuyrr64536890957qersfhfgr667v7757+++++++++++++__)+_(+(++++9=9+9=9=9=9=999999999999999999=9==9=9=9=9=9=9=9=9=9==9=9=9=08/=+_)("""::::::::::LL';
    let netflixInfo = "Netflix is the world's leading streaming entertainment service with 193 million paid memberships in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments";



    // const [netflixInfostr, setnetflixInfoStr] = useState({});


    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);
    const [index4, setIndex4] = useState(0);
    const [index5, setIndex5] = useState(0);
    const [index6, setIndex6] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex1(index1 => index1 + 1);
            setIndex2(index2 => index2 + 2);
            setIndex3(index3 => index3 + 0.5);
            setIndex4(index4 => index4 + 1);
            setIndex5(index5 => index5 + 0.7);
            setIndex6(index6 => index6 + 0.3);

        }, 100);
        return () => clearInterval(interval);
    }, []);



    return (
        <div id="App1">
            <header className="App-header2">
           

            <p id="p1"> {myRandStr.charAt(index1)}</p>
            <p> {myRandStr.charAt(index2)}</p>
            <p> {myRandStr.charAt(index3)}</p>
            <p> {myRandStr.charAt(index4)}</p>
            <p> {myRandStr.charAt(index5)}</p>
            <p> {myRandStr.charAt(index6)}</p>
            <p> {myRandStr.charAt(index3)}</p>
            <p> {myRandStr.charAt(index5)}</p>
            {/* <p>  you have spend {index1}  seconds here</p>  */}
            </header>

            <h1 id="aboutUs">About Us</h1>

            <div id="anchor">
            <AnchorLink href='#nav'>About Netflix</AnchorLink>
            <AnchorLink href='#leadership'>Leadership</AnchorLink>
            <AnchorLink href='#culture'>Cultur</AnchorLink>

           
                {/* <Anchor > */}
                    {/* <Link href="#nav" title="About Netflix" /> */}
                    {/* <Link href="#leadership" title="Leadership"/> */}
                    {/* <Link href="#culture" title="Culture" /> */}
                {/* </Anchor> */}
            </div>


            <p className="netflixInfo"> {netflixInfo}</p>

            <img src="/assets/About/netflixImg.jpg"></img>
            <div id="line"></div>

            <h1 id="leadership" className="title">Leadership</h1>

            <div className="aboutLeaderImg">

                <div>

                    <img src="/assets/About/belaheadshot.jpg"></img>
                    <Link style={navStyle} to='/bela'>
                    <h3>Bela Bajaria</h3>   
                    </Link>                              
                    <h6>Vice President, Global TV</h6>
                    <h6>(TV)</h6>
                </div>

                <div>
                    <img src="/assets/About/MariaFerreras.jpg"></img>
                    <h3>Maria Ferreras</h3>
                    <h6>Vice President, Business Development</h6>
                    <h6>(EMEA)</h6>
                </div>

                <div>
                    <img src="/assets/About/BryonyGagan.jpg"></img>
                    <h3>Bryony Gagan</h3>
                    <h6>Vice President, Business</h6>
                    <h6>& Legal Affairs</h6>
                </div>

                <div>
                    <img src="/assets/About/deanGarfield.jpg"></img>
                    <h3>Dean Garfield</h3>
                    <h6>Vice President, Public Policy</h6>
                </div>

                <div>
                    <img src="/assets/About/Reed_Hastings_Headshot2.jpg"></img>
                    <Link style={navStyle} to='/reed'>
                    <h3>Reed Hastings</h3>
                    </Link>    
                    <h6>Founder and co-CEO</h6>
                </div>

                <div>
                    <img src="/assets/About/BillHolmes.jpg"></img>
                    <h3>Bill Holmes</h3>
                    <h6>Global Head of Business Development</h6>
                </div>

                <div>
                    <img src="/assets/About/David_Hyman.jpg"></img>
                    <Link style={navStyle} to='/david'>
                    <h3>David Hyman</h3>
                    </Link>  
                    <h6>Chief Legal Officer</h6>
                </div>
                <div>
                    <img src="/assets/About/Verna_Myers.jpg"></img>
                    <h3>Vernā Myers</h3>
                    <h6>Vice President, Inclusion Strategy</h6>
                </div>
                <div>
                    <img src="/assets/About/Jessica_Neal.jpg"></img>
                    <h3>Jessica Neal</h3>
                    <h6>Chief Talent Officer</h6>
                </div>

            </div >
            <div id="line"></div>

            <h1 id="culture" className="title">Culture</h1>




        </div >
    );
};
