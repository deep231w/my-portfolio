import React from "react";

const Layout= ({children}:{children:React.ReactNode})=>{
    return(<>
        <div>Layout inside section</div>
        {children}
        </>
        
    )
}


export default Layout;
