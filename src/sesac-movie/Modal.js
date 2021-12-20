// import { IoClose } from "react-icons/io5";
import './Modal.scss';
import Icons from './Icons';

import { AiFillStar } from 'react-icons/ai';
export default function Modal({ movie, modalPosterImg, handleModal }) {
    return (
        //화면 blur 처리할 overlay
        <div className="modal_overlay" id="modal">
            {/* 실제 modal창 */}
            <div
                className="modal_window"
                id={movie.key}
                onClick={e => e.stopPropagation()}
            >
                {/* closeBtn*/}
                <button
                    className="close_btn"
                    id="closeBtn"
                    onClick={handleModal}
                >
                    X
                </button>
                {/* 영화 포스터 */}
                <img className="poster_img" src={modalPosterImg}></img>
                {/* 영화 title*/}
                <div className="title" id={movie.id}>
                    <h3>{movie.original_title}</h3>
                </div>
                <div className="movieInfo">
                    {/* 영화 summary*/}
                    <div className="content">
                        <span className="summary">{movie.overview}</span>
                    </div>
                </div>
                <dl className="summaryInfo">
                    {/* <dt>Genre</dt>
          <dd>{movie.genre}</dd> */}
                    <dt>ReleaseDate</dt>
                    <dd>{movie.release_date}</dd>
                    <dt>Rating</dt>
                    <dd>
                        <AiFillStar className="star" />
                        {movie.vote_average}
                    </dd>
                </dl>
                {/* icons*/}
                <Icons />
            </div>
        </div>
    );
}
