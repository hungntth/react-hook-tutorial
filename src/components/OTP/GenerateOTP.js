import { useState, React } from 'react';


function GenerateOTP(props) {
    const [originalOTP, setOriginalOTP] = useState("")
    const handleClickBtn = () => {
        const otp = Math.floor(100000 + Math.random() * 900000);
        setOriginalOTP(otp)
    }
    return (
        <div className='generate-otp'>
            <button onClick={() => handleClickBtn()}>Generate OTP</button>
            <div>Your OTP {originalOTP}</div>
        </div>
    );
}

export default GenerateOTP;