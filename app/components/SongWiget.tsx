"use client"

import { useEffect } from "react"

export default function SongWiget(){

    useEffect(()=>{
        fetch("/api/spotify")
        .then(res=> {
            res.json
            console.log("spotify res= ", res);
        })
        
    },[])
    return (
        <div>

        </div>
    )
}