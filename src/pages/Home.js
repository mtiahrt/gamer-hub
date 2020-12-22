import { useEffect } from "react";
import GameDetail from "../components/GameDetail";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from '../components/Game';
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import {useLocation} from 'react-router-dom';


const Home = () => {
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    }, [dispatch]);
    //get it back
    const {popular, newGames, upComing, searched } = useSelector(state => state.games);
    return (
        <GameList>
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence>
                    {pathId && <GameDetail pathId ={pathId} />}
                </AnimatePresence>
                {searched.length ? (
                <div className="searched">
                    <h2>Searched Games</h2>
                        <GameStyle>
                            {searched.map(game => (
                                <Game name={game.name} released={game.released} id={game.id}
                                    image={game.background_image}
                                    key={game.id}
                                />
                            ))}
                        </GameStyle>
                </div>
                ) : ''}
                <h2>Upcoming Games</h2>
                    <GameStyle>
                        {upComing.map(game => (
                            <Game name={game.name} released={game.released} id={game.id}
                                image={game.background_image}
                                key={game.id}
                            />
                        ))}
                    </GameStyle>
                    <h2>Popular Games</h2>
                    <GameStyle>
                        {popular.map(game => (
                            <Game name={game.name} released={game.released} id={game.id}
                                image={game.background_image}
                                key={game.id}
                            />
                        ))}
                    </GameStyle>
                    <h2>New Games</h2>
                    <GameStyle>
                        {newGames.map(game => (
                            <Game name={game.name} released={game.released} id={game.id}
                                image={game.background_image}
                                key={game.id}
                            />
                        ))}
                    </GameStyle>
            </AnimateSharedLayout>
        </GameList>
    )
}

const GameList = styled(motion.div) `
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem
    }
`
const GameStyle = styled(motion.div) `
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`
export default Home;