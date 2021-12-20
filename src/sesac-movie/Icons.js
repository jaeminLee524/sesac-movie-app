import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { MdIosShare } from 'react-icons/md';
import { useState } from 'react/cjs/react.development';

// 그냥 시각적 효과만

export default function Icons() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="icons">
            <button className="likeBtn">
                {/* unfilled */}
                {isChecked || (
                    <FaRegHeart
                        className="FaRegHeart"
                        onClick={() => setIsChecked(true)}
                    />
                )}
                {/* filled */}
                {isChecked && (
                    <FaHeart
                        className="FaHeart"
                        onClick={() => setIsChecked(false)}
                    />
                )}
                Like
            </button>

            <button className="shareBtn">
                <MdIosShare className="MdIosShare" />
                Share
            </button>
        </div>
    );
}
