import * as React from 'react';
import ReactMarkdown from 'react-markdown';


const Noindentation = ({md}) => {

    return (
        <div >
        <ReactMarkdown children={md}></ReactMarkdown>
        </div>  
    );
}
export default Noindentation