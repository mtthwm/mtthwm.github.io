import {forwardRef} from 'react';

const Who = forwardRef((props, ref) => {
    return (
        <div className="who-container" id={props.id} ref={ref}>
            <div className="who-header">
                Who is this guy?
            </div>
            <div className="who-content">
                Hello! I'm Matthew Morales, a full stack developer and computer science student. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu feugiat turpis, eget dignissim sapien. Integer sem enim, lacinia at mollis ultrices, tempus quis erat. 
            </div>
        </div>
    )
});

export default Who;