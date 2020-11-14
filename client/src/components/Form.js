import React from 'react'
import { createLink } from '../api'

const Form = ({ input, setInput }) => {

    const handleSubmit = async (event) => {
        event.preventDefault()

        await createLink({ full: input })
            .then(() => setInput(''))
            .catch((error) => console.log(error))
    }

    return (
        <div className="form">
            <h1>URL Shrinker</h1>
            <form className="my-4 row" onSubmit={handleSubmit}>
                <label htmlFor="fullUrl" className="sr-only">Url</label>
                <input
                    required
                    type="url"
                    name="fullUrl"
                    id="fullUrl"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Url"
                    className="form-control col mr-2"
                />
                <button className="btn btn-success" type="submit" >Shrink</button>
            </form>
        </div>
    )
}

export default Form