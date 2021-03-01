import React from 'react';

export default function CurrentPlayer({status}) {
    return (
        <div className="row justify-content-center ">
            <div className="col-md-4 alert alert-primary text-center text-dark">
                <strong>{status}</strong>
            </div>
        </div>
    );
}