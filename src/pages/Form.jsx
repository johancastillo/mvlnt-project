import {useRef, useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import "./../styles/pages/Form.css";




const Form = () => {
    const captcha = useRef(null);
    const [captchaValidate, setCaptchaValidate] = useState(null);
    const [userValidate, setUserValidate] = useState(null);
    const [message, setMessage] = useState(false);

    const submit = (e) => {

        e.preventDefault();


        if(captchaValidate){
            console.log("El usuario no es un robot");
            setUserValidate(true);
        }else{
            console.log("Robot detected");
            setUserValidate(false);
            setMessage(true)
        }
    }

    var verifyCallback = function(response) {
        console.log(response)
    }
    
    const changeReCaptcha = () => {
        console.log(captcha.current.getValue());

        if(captcha.current.getValue()){
            console.log("El usuario no es un robot");
            setCaptchaValidate(true);
            setMessage(false);
        }else{
            console.log("Robot detected");
            setCaptchaValidate(false);
        }
    }

    return(
        <>
        {!userValidate &&
        <div className="form-container">
            <form onSubmit={ e => submit(e)}>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
               

                <br />

                <div className="recaptcha">
                    <ReCAPTCHA 
                        ref={captcha}
                        sitekey="6LcbA_McAAAAAHzMC2cIaXzBw9Onf13TL4KpLuXD"
                        onChange={changeReCaptcha}
                        render="explicit"
                        verifyCallback={verifyCallback}
                        hl="es"
                    />
                    
                    {message &&
                    <div id="emailHelp" className="form-text">
                        Por favor realice el ReCaptcha
                    </div>
                    }

                </div>

                

                <br />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
        }


        {userValidate &&
        <div>
            <h1>Bienvenido</h1>
        </div>
        }

        </>
    )
};


export default Form;
