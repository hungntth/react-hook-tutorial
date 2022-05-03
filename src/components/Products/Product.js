import { React, useState } from "react";
import Lightbox from "react-image-lightbox";
import iphone13_black from "../../assets/images/iphone13-black.jpg";
import iphone13_blue from "../../assets/images/iphone13-blue.jpg";
import iphone13_green from "../../assets/images/iphone13-green.jpg";
import iphone13_pink from "../../assets/images/iphone13-pink.jpg";
import iphone13_white from "../../assets/images/iphone13-white.jpg";
import "./Product.scss";
Product.propTypes = {};

const images = [
    iphone13_black,
    iphone13_white,
    iphone13_pink,
    iphone13_blue,
    iphone13_green,
];

function Product(props) {
    const [currentUpImage, setCurrentUpImage] = useState(iphone13_black);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleClickPreviewImg = () => {
        let index = images.findIndex((item) => item === currentUpImage);
        setPhotoIndex(index);
        setIsOpen(true);
    };
    return (
        <div className="product-container">
            <div className="content-left">
                <div className="img-up">
                    <img alt="" src={currentUpImage} onClick={() => handleClickPreviewImg()} />
                </div>
                <div className="img-down">
                    <div className="img-small">
                        <img
                            alt=""
                            src={iphone13_black}
                            onClick={() => setCurrentUpImage(iphone13_black)}
                            className={currentUpImage === iphone13_black ? "active" : ""}
                        />
                    </div>
                    <div className="img-small">

                        <img
                            alt=""
                            src={iphone13_white}
                            onClick={() => setCurrentUpImage(iphone13_white)}
                            className={currentUpImage === iphone13_white ? "active" : ""}
                        />
                    </div>
                    <div className="img-small">
                        <img
                            alt=""
                            src={iphone13_pink}
                            onClick={() => setCurrentUpImage(iphone13_pink)}
                            className={currentUpImage === iphone13_pink ? "active" : ""}
                        />
                    </div>
                    <div className="img-small">
                        <img
                            alt=""
                            src={iphone13_blue}
                            onClick={() => setCurrentUpImage(iphone13_blue)}
                            className={currentUpImage === iphone13_blue ? "active" : ""}
                        />
                    </div>
                    <div className="img-small">
                        <img
                            alt=""
                            src={iphone13_green}
                            onClick={() => setCurrentUpImage(iphone13_green)}
                            className={currentUpImage === iphone13_green ? "active" : ""}
                        />
                    </div>
                </div>
            </div>
            <div className="content-right">
                <div className="title">
                    Điện Thoại iPhone 13 128GB - Hàng Chính Hãng
                </div>
                <div className="price">20.450.000 ₫</div>
                <div className="color">Màu: Đen</div>
                <div className="action">
                    <input type="number" min={1} defaultValue={1} className="quantity" />
                    <button className="buy">Chọn mua</button>
                </div>
            </div>
            <div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                        animationDuration={500}
                    />
                )}
            </div>
        </div>
    );
}

export default Product;
