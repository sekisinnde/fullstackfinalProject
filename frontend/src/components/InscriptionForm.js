import React from 'react';

const Inscription = () => {

    return (
        <div>
            <form className='inscription'>
            <label for='email'>Email:</label>
            <input name='email'></input>
            <label for='firstname'>Firstname</label>
            <input name='firstname'></input>
            <label for='lastname'>Lastname:</label>
            <input name='lastname'></input>
            <label for='password'>Password:</label>
            <input name='password'></input>
            <label for='passwordconfirmation'>Reconfirm password:</label>
            <input name='passwordconfirmation'></input>
            <label for='age'>Age:</label>
            <input name='age'></input>
            <label for='adressnumber'>Adress number:</label>
            <input name='adressnumber'></input>
            <label for='adress'>Adress:</label>
            <input name='adress'></input>
            <label for='number'>Phone number:</label>
            <input name='number'></input>
            <button type="submit" value="Submit">Submit inscription</button>
            </form>
        </div>
    )
}

export default Inscription;