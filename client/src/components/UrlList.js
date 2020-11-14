import React from 'react'

const UrlList = () => {
    return (
        <div>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th style={{ width: '50%' }}>Full URL</th>
                        <th style={{ width: '100%' }}>Short URL</th>
                        <th style={{ width: '100%' }}>Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="https://facebook.com/YousifAbozid">
                            https://facebook.com/YousifAbozid</a></td>
                        <td><a href="/12345">12345</a></td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UrlList