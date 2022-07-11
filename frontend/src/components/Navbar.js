import React, {useState, useEffect} from 'react';

const Navbar = () => {
    
    const [test, setTest] = useState([]);

    useEffect(() => {
        getTest()
    }, [])

    const getTest = () => {
        fetch("http://localhost:5000/tests")
        .then((res) => {return res.json()})
        .then((res) => {setTest(res)})
    }
    
    console.log(test)

    return (
        <div>
        {test.map((element, index) => {
            return (<p key={index}>{element.name}</p>)
        })}
        </div>
    )
}

export default Navbar;