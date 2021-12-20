import { useState, useEffect } from 'react';
import './TopButton.css';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

const TopButton = ({ setBtnState, containerRef }) => {
    const [ScrollY, setScrollY] = useState(0);
    const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

    const hideShow = () => {
        setScrollY(window.pageYOffset);
        if (ScrollY > 50) {
            // 50px 보다 크면 버튼이 보이게
            //https://developer.mozilla.org/ko/docs/Web/API/Window/pageYOffset
            setBtnStatus(true);
        } else {
            // 50px 이하면 버튼이 사라지게
            setBtnStatus(false);
        }
    };

    // 클릭하면 스크롤이 위로 올라가는 함수
    const goTop = () => {
        containerRef.current.scrollTo(0, 0);

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setScrollY(0); // ScrollY=0 (제일 위로 감)
        setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 (안보이게됨)
    };

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', hideShow);
        };
        watch();
        return () => {
            window.removeEventListener('scroll', hideShow);
        };
    });

    return (
        <>
            <button
                className={BtnStatus ? 'topBtn active' : 'topBtn'} // 버튼 노출 여부
                onClick={goTop} // 버튼 클릭시 함수 호출
            >
                <FaRegArrowAltCircleUp />
            </button>
        </>
    );
};

export default TopButton;
