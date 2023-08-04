import * as React from 'react';
import ReactMarkdown from 'react-markdown';

const Tripleind = ({md}) => {

    return (
        <div style={{ marginLeft: '126px',marginBottom: '7px',fontSize:'17px',marginTop:'-10px' }}>
        <ReactMarkdown children={md}></ReactMarkdown>
        </div>
       
    );
}
export default Tripleind