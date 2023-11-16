import './Portfolio.css';
import sites from './sites';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
export default function Portfolio() {
    const [isDesktop, setIsDesktop] = useState(true);
    function toggleMode() {
        setIsDesktop(!isDesktop);
    }
    return(
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="mode-toggle" onClick={toggleMode}>
                <FontAwesomeIcon icon={icon({name: "mobile"})} style={{opacity: isDesktop? '0.5' : 1}}/>
                /
                <FontAwesomeIcon icon={icon({name: "display"})} style={{opacity: !isDesktop? '0.5' : 1}}/>
            </div>
            <div className="portfolio-list">
                {
                    sites.map(site => {
                        return (
                            <a href={site.link} className="portfolio-item-container" rel="noreferrer" target="_blank" key={site.title}>
                                <div  className="portfolio-item" style={{width: isDesktop?'40vw': '20vw', height: isDesktop? '22.5vw' : 'calc(20vw * 926 / 428)'}}>
                                    <h3>{site.title}</h3>
                                    <p className="portfolio-description">{site.description}</p>
                                    <img src={isDesktop ? site.desktopImage : !isDesktop ? site.mobileImage: null} alt={site.title} />
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}