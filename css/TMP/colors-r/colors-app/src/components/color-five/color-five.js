import './color-five.css';

const ColorFive = () => {
    return (
        <div className="main__item five">
        <div className="color__descr">
            <div className="color__box">
                <div className="color">#75c9c8</div>
            </div>
            <div className="color__title">Electric blue</div>
        </div>
        <div className="color__btns">
            <div className="drag__img item">
                <i className="fa-solid fa-arrows-left-right color__btns-drag"></i>
                <i className="fa-solid fa-arrows-up-down color__btns-drag"></i>
            </div>

            <div className="copy__img item">
                <i className="fa-solid fa-copy color__btns-copy"></i>
            </div>
            <div className="secure__img item" data-id="0">
                <i className="fa-solid fa-lock-open color__btns-secure"></i>
            </div>
        </div>
    </div>
    )
}

export default ColorFive;