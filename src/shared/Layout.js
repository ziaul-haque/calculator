import React, { useState } from "react";
import './Layout.css'
import Output from "./output";
const Layout = () => {
    const [input, setInput] = useState(0);
    const [result, setResult] = useState('');
   
    const handleClick = (event) => {
        const value = event.target.value;
        if (value === '=') {
            if (input !== '') {
                let res = '';
                try {
                    res = eval(input);
                } catch (err) {
                    res = 'Math error';
                }
                if (res === undefined) {
                    setResult('UNDEFINED');
                } else {
                    setInput(input + '=');
                    setResult(res);
                }
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === 'DEL') {
            const updateInput = input.slice(0, -1);
            setInput(updateInput);
            if (!updateInput) {
                setResult('');
            }
        } 
        else {
            setInput(input + value);
        }
    };

    return (
        <div className='frame'>
            <div className='calculator'>
                <Output input={input} result={result}/>
                <h3>ZeeRaSha Calculator</h3>
                <div className="keys">
                    <input type='button' value='C' className='button clear' onClick={handleClick}/>
                    <input type='button' value='DEL' className='button clear' onClick={handleClick}/>
                    <input type='button' value='%' className='button operator' onClick={handleClick}/>
                    <input type='button' value='/' className='button operator' onClick={handleClick}/>

                    <input type='button' value='7' className='button ' onClick={handleClick}/>
                    <input type='button' value='8' className='button ' onClick={handleClick}/>
                    <input type='button' value='9' className='button ' onClick={handleClick}/>
                    <input type='button' value='*' className='button operator' onClick={handleClick}/>

                    <input type='button' value='4' className='button ' onClick={handleClick}/>
                    <input type='button' value='5' className='button ' onClick={handleClick}/>
                    <input type='button' value='6' className='button ' onClick={handleClick}/>
                    <input type='button' value='-' className='button operator' onClick={handleClick}/>

                    <input type='button' value='1' className='button ' onClick={handleClick}/>
                    <input type='button' value='2' className='button ' onClick={handleClick}/>
                    <input type='button' value='3' className='button ' onClick={handleClick}/>
                    <input type='button' value='+' className='button operator' onClick={handleClick}/>

                    <input type='button' value='0' className='button ' onClick={handleClick}/>
                    <input type='button' value='.' className='button ' onClick={handleClick}/>
                    <input type='button' value='=' className='button equal-sign' onClick={handleClick}/>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Layout; 