import React from 'react'

const Loader = () => {
    return (
        <>
            <div style={{ width: '100%', height: '100%', top: 0, left: 0, textAlign: 'center', position: 'absolute', zIndex: 10, backgroundColor: '#000000b8' }}>
                {/* Spinner loader */}
                <div style={{
                    width: '100px',
                    height: '100px',
                    border: '4px solid #f3f3f3',
                    borderTop: '4px solid #3498db',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    margin: 'auto',
                    marginTop: '200px'
                }}></div>
                <div style={{ color: "#ffffff" }}>Please Wait....</div>
            </div>

            <style>
                {`
                    @keyframes spin {
                      to { transform: rotate(360deg); }
                    }
                `}
            </style>
        </>
    )
}

export default Loader