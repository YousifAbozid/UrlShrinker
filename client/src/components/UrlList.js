import React from 'react'

const UrlList = ({ links }) => {
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
                    {links.map((link) => (
                        <tr key={link._id}>
                            <td><a href={link.full}>{link.full}</a></td>
                            <td><a href={link.short}>{link.short}</a></td>
                            <td>{link.clicks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UrlList