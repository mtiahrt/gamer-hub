import React from 'react';
import styled from "styled-components";
import {motion} from 'framer-motion';
//redux
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import {Link} from 'react-router-dom';
import { smallImage } from '../utl';


const Game = ({name, released, image, id}) => {
    const dispatch = useDispatch();
    const loadDetaiHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id));
    }
    return (
        <StyleGame layoutId={id.toString()} onClick={loadDetaiHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title${id.toString()}`}>{name}</motion.h3>
                <p>{released}</p>            
                <motion.img layoutId={`image${id.toString()}`} src={smallImage(image, 640)}
                     alt={name} /> 
            </Link>
        </StyleGame>
    )
}

const StyleGame = styled(motion.div) `
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0.0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover
    }
`

export default Game
