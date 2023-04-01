import React, { Component } from 'react';
import Link from 'next/link';

class CustomError extends Component {
    render() {
        return (
            <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="error-content-wrap">
                            <h1>COMING <span>SOON</span></h1>
                            <p>This page is under construction.</p>

                            <Link href="/">
                                <a className="default-btn btn-two">
                                    Return To Home Page
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomError;