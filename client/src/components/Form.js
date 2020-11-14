import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <h1>URL Shrinker</h1>
            <form action="" method="POST" className="my-4 row">
                <label htmlFor="fullUrl" className="sr-only">Url</label>
                <input
                    required
                    type="url"
                    name="fullUrl"
                    id="fullUrl"
                    placeholder="Url"
                    className="form-control col mr-2"
                />
                <button className="btn btn-success" type="submit" >Shrink</button>
            </form>
        </div>
    )
}

export default Form