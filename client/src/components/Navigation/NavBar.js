import React from 'react'

import '../../styles/NavBar.scss'

export default function NavBar() {
    return (
        <div className = "Nav">
            <div className="Nav-flex">
                <div>
                    <label for="professions">Show me courses for</label>
                    <select id="professions">
                        <option >All professions</option>
                    </select>
                </div>
                <div>
                    <label for="states">in</label>
                    <select id="states">
                        <option >All states</option>
                    </select>
                </div>
                <div>
                    <label for="classification">classified as</label>
                    <select id="classification">
                        <option >+</option>
                    </select>
                </div>
                <div>
                    <label for="popularity">sorted by</label>
                    <select id="popularity">
                        <option >Popularity</option>
                    </select>
                </div>        
            </div>
        </div>
    )
}
