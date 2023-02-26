import React, {useState, useEffect} from 'react';
import toast from 'react-hot-toast';
import Result from './result';

export default function Main(){
  const [url, setURL] = useState('');
  const [temp, setTemp] = useState('');
  const [data, setData] = useState({
    "domain_name": "AMAZON.COM",
    "registrar": "MarkMonitor Inc.",
    "whois_server": "whois.markmonitor.com",
    "referral_url": null,
    "updated_date": "2019-05-07T20:09:37",
    "creation_date": "1994-11-01T05:00:00",
    "expiration_date": "2024-10-31T04:00:00",
    "emails": "abusecomplaints@markmonitor.com",
    "dnssec": "unsigned",
    "name": null,
    "org": null,
    "address": null,
    "city": null,
    "state": null,
    "registrant_postal_code": null,
    "country": null,
    "URL": "https://aws.amazon.com/certification/",
    "url_len": 37,
    "domain": "aws.amazon.com",
    "subDomain": "aws",
    "subDomain_count": 1,
    "@": 0,
    "?": 0,
    "-": 0,
    "=": 0,
    ".": 2,
    "#": 0,
    "%": 0,
    "+": 0,
    "$": 0,
    "!": 0,
    "*": 0,
    ",": 0,
    "//": 1,
    "abnormal_url": 1,
    "https": 1,
    "digits": 0,
    "letters": 30,
    "Shortining_Service": 0,
    "having_ip_address": 0,
    "large_url": 0,
    "long_url": 0,
    "short_url": 1,
    "Domain_part_count": 3,
    "fld_lenght": 14,
    "topLevel_domain": "com",
    "tld_count": 3,
    "url_path_len": 27,
    "count_PathDir": 4,
    "first_dir_len": 0,
    "sus_url": 0,
    "hostname_length": 14,
    "url_alphas": 30,
    "url_digits": 0,
    "url_puncs": 7,
    "pc_alphas": 0.8108108108108109,
    "pc_digits": 0.0,
    "pc_puncs": 0.1891891891891892,
    "url_path": "/certification/",
    "get_url_path_len": 15,
    "subD_len": 3,
    "has_favicon": true,
    "result": "safe",
    "feature_count": 66
});

const [result, setResult] = useState([]);
const [showData, setShow] = useState(false);
const [color, setColor] = useState('red');

useEffect(() => {
  Object.entries(data).forEach((entry) => {
    const [key, value] = entry;
    setResult((prevstate) => {
      return [...prevstate, `${key}: ${value}`]
    })
  });

  if(data.result === "safe"){
    setColor('green');
  }
}, [])

  function handleChange(event){
    setTemp(event.target.value);
  }
  const handleClick = async (event) => {
    event.preventDefault();
    setShow(true);

    // try {
    //   const response = await fetch('https://reqres.in/api/users', {
    //     method: 'GET',
    //     headers: {
    //       Accept: 'application/json',
    //     },
    //   });
    //
    //   if (!response.ok) {
    //     throw new Error(`Error! status: ${response.status}`);
    //   }
    //
    //   const result = await response.json();
    //
    //
    //
    //   setURL(JSON.parse(JSON.stringify(result)));
    //   setShow(true);
    // } catch (err) {
    //   toast.error(err);
    // }


    toast.success(temp);
  }

  function handleClear(event){
    event.preventDefault();

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
