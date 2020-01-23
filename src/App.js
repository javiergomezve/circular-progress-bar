import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="container">
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70" />
                            <circle cx="70" cy="70" r="70" />
                        </svg>
                        <div className="number">
                            <h2>90<span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">html</h2>
                </div>
            </div>

            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70" />
                            <circle cx="70" cy="70" r="70" />
                        </svg>
                        <div className="number">
                            <h2>85<span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">css</h2>
                </div>
            </div>

            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70" />
                            <circle cx="70" cy="70" r="70" />
                        </svg>
                        <div className="number">
                            <h2>60<span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text">JavaScript</h2>
                </div>
            </div>
        </div>
    );
}

export default App;
