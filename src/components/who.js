import {forwardRef} from 'react';

const Who = forwardRef((props, ref) => {
    return (
        <div className="row my-5 who-container">
            <div className="col-xs-10 col-xs-start-2 col-sm-4 col-sm-start-2 display-flex justify-content-center">
                <div className="card darken-background">
                    <div className="card-title mb-2 light-text">
                        <h1>Who is this guy?</h1>
                    </div>
                    <div className="card-body">
                        <img src={"https://via.placeholder.com/512x512.png?text=My+very+impressive+self+portrait"} width="100%"/>
                    </div>
                </div>
            </div>
            <div className="col-xs-10 col-xs-start-2 col-sm-3 col-sm-start-7 justify-content-center display-flex">
                <div class="card darken-background">
                    <div class="card-body light-text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Eveniet qui adipisci 
                            quasi quod excepturi sed eum magni cum 
                            sint nemo, provident laborum aliquid 
                            consequatur perspiciatis nam accusantium. 
                            Obcaecati, quam! Impedit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Who;