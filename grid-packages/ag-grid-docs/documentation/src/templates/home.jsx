import React from 'react';
import { Link } from 'gatsby';
import styles from './home.module.scss';
import fwLogos from '../images/fw-logos';
import supportedFrameworks from '../utils/supported-frameworks';
import MenuView from '../components/menu-view/MenuView';
import menuData from '../pages/licensing/menu.json';

const backgroundColor = {
    javascript: '#f8df1e',
    angular: '#1976d3',
    react: '#282c34',
    vue: '#50c297'
};

const logos = (() => {
    const obj = {};

    for (let framework of supportedFrameworks) {
        obj[framework] = fwLogos[framework === 'vue' ? 'vueInverted' : framework];
    }
    return obj;
})();

const flatRenderItems = (items, framework) => {
    return items.reduce((prev, curr) => {
        let ret = prev;

        if (curr.frameworks && curr.frameworks.indexOf(framework) === -1) { return ret; }
        if (curr.title.toLowerCase() !== 'overview') {
            ret = prev.concat({ title: curr.title, url: curr.url });
        }
        if (!curr.items) { return ret; }

        return ret.concat(flatRenderItems(curr.items, framework));
        
    }, []);
}


const GettingStarted = ({ framework, data }) => { 
    const linksToRender = flatRenderItems(data, framework);
    const numberOfColumns= Math.ceil(linksToRender.length / 5);

    return (
        <div className={styles['getting-started']}>
            <h2 className={styles['getting-started__title']}>Getting Started</h2>
            <div className={styles['getting-started__row']}>
                <div className={styles['getting-started__framework_overview']}>
                    <Link to='./getting-started/' className={styles['getting-started__framework_logo']}>
                        <img
                            style={{ backgroundColor: backgroundColor[framework]}}
                            alt={ framework }
                            src={ logos[framework] } />
                        </Link>
                    <Link className={styles['getting-started__framework_button']} to='./getting-started/'>Overview</Link>
                </div>
                <div 
                    className={styles['getting-started__items']}
                    style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}
                    > {
                    linksToRender.map(link => {
                        return <a href={ link.url }>{ link.title }</a>
                    })
                }</div>
        </div>
    </div>
)}

const HomePage = ({ pageContext }) => {
    const { framework: currentFramework } = pageContext;
    return (
        <div className='container' style={{ textAlign: 'center' }}>
            <h1>Welcome to the AG-Grid documentation</h1>
            <p>Which framework would you like to learn?</p>
            <GettingStarted framework={ currentFramework } data={ menuData[0].items[0].items }/>
            <MenuView framework={ currentFramework } data={ menuData } />
        </div>
    );
};

export default HomePage;