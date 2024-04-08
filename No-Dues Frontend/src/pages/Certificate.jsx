import React, { useState } from 'react'
import Header from '../components/Nav'
import CodeBlock from '../utils/CodeBlock';

const Certificate = () => {
    const [view, setView] = useState('code');
    const toggleView = (view) => {
        setView(view);
    };
    return (
        <div>
            <Header label="CERTIFICATE PAGE" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '13px' }}>
                <div style={{ border: '1px solid', width: '26vw', borderRadius: '25px', display: 'flex', height: '6vh', alignItems: 'center' }}>
                    <div onClick={() => toggleView('code')} style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', borderRadius: '25px 0px 0px 25px', borderRight: '1px solid rgb(58, 100, 204, 1)', backgroundColor: view === 'code' ? 'rgb(58, 100, 204, 1)' : 'rgba(217, 217, 217, 1)' }}>
                        <div style={{ fontSize: 'larger' }}>
                            <button style={{color: view === 'code' ? 'white' : 'rgb(58, 100, 204, 1)'}}>
                                CODE
                            </button>
                        </div>
                    </div>
                    <div onClick={() => toggleView('preview')} style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', borderRadius: '0px 25px 25px 0px', backgroundColor: view === 'preview' ? 'rgb(58, 100, 204, 1)' : 'rgba(217, 217, 217, 1)' }}>
                        <div style={{ fontSize: 'larger' }}>
                            <button style={{color: view === 'preview' ? 'white' : 'rgb(58, 100, 204, 1)'}}>
                                PREVIEW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', margin: '16px', position: 'relative'}}>
                <div style={{ height: '73vh', width: '74vw', border: '3px solid #1616db', borderRadius: '25px'}}>
                    {view == 'code' && <CodeBlock/>}
                    {view == 'preview' && "Hello"}
                </div>
                <div style={{ height: '73vh', width: '19vw', position: 'absolute', right: '9px', backgroundColor: '#cbd1d7', borderRadius: '25px'}}>

                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Certificate
