import React, { useEffect, useState } from 'react';
import { ReadInterface } from "../../public/data/bookData";
import Modal from '@material-ui/core/Modal';

export interface LearningBookModalProps extends ReadInterface{
    visibility: boolean;
    handleClose: () => void;
}

export const LearningBookModal:React.FC<LearningBookModalProps> = ({visibility, handleClose, title, author, imagePath, rating, review, publishDate, takeAways}) => {
    
    const [internalVisibility, setInternalVisibility] = useState(visibility);
    
    
    useEffect(() => {
        setInternalVisibility(visibility);
    },[visibility])    
    

    return(
        <Modal open={internalVisibility} onClose={() => handleClose()}>
            <div className={"learning-book-modal"}>
                {/* <img src={imagePath} alt={"book cover"}/> */}
                <h2>{title}</h2>
                <h4>{author}</h4>
                <button onClick={() => handleClose()}>close</button>
            </div>
        </Modal>
    );
}