// export default function Hello() {
//     let name="Doungkamol Kobkuekul" ;
//     return (<><h>Hello World {name+" 30/12/45"}</h></>);
    
// }

import './Hello.css'

export default function Hello({name,last,age=21}) {
    return (
        <>
            <h1>Hello World {name}{last} : {age}</h1>
        </>
    );
}