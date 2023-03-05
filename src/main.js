import axios from 'axios';
import React, {useState, useEffect} from 'react';
import toast from 'react-hot-toast';
import Result from './result';
//67467f92-a588-4b1e-b4e6-011ca0835834

export default function Main(){
  const [initialRender, setInitialRender] = useState(true);
  const [url, setURL] = useState('');
  const [temp, setTemp] = useState('');
  const [data, setData] = useState({});

const [result, setResult] = useState([]);
const [showData, setShow] = useState(false);
const [color, setColor] = useState('red');

useEffect(() => {
  if(!initialRender){
  Object.entries(data).forEach((entry) => {
    const [key, value] = entry;
    console.log(`${key}: ${value}`);
    setResult((prevstate) => {
      return [...prevstate, `${key}: ${value}`]
    })

    if(data.result === "safe"){
      setColor('green');
    }
  });
  setShow(true);
  toast.success();
}
}, [data])

useEffect(() => {
  if(initialRender){
    setInitialRender(false);
    return;
  }
  try{
    console.log(url);
    axios.post('https://getpantry.cloud/apiv1/pantry/67467f92-a588-4b1e-b4e6-011ca0835834/basket/UR', {"a": url})
    .then(res => setData(res.data));
  }catch(err){
    toast.error(err);
  }
}, [url]);

  function handleChange(event){
    setTemp(event.target.value);
  }

  function handleClick(event){
    event.preventDefault();

    if(temp.length === 0){
      toast.error("Enter URL");
    }
    setURL(temp);
  }

  function handleClear(event){
    event.preventDefault();

    setURL('');
    setTemp('')
    setInitialRender(true);
    setShow(false);
  }
  return (
    <div className="main">
        <div className="nav">
            <img src="phishing.png" alt="logo" />
        </div>
        <div className="heading">
            <p>PHISHING</p>
        </div>
        <div className="content">
            <p>URL Detector</p>
        </div>
        <div className="input">
            <form action="">
                <input type="text" placeholder="Enter URL...." onChange={handleChange} value={temp}/>
                <button type="submit" onClick={handleClick}>Find Out!</button>
                <button type="submit" onClick={handleClear}>Clear Result</button>
            </form>

            {(showData) &&
            <div className="data">
            <div></div>
            <div className="kvpair">
            {result.map((data, index) => {
              return <Result key={index} data={data} />
            })}
            </div>
            <div className="result">
                <p style={{color: `${color}`}}>{data.result}</p>
            </div>
            <div></div>
            </div>
          }
        </div>
    </div>
  );
}
