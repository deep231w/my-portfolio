const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENT_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played";


export async function GET() {
    try{
        const basic= Buffer.from(
            `${process.env.SPOTIFY_CID}:${process.env.SPOTIFY_SID}`
        ).toString('base64');

        const tokenRes= await fetch(TOKEN_ENDPOINT, {
            method:"POST",
            headers:{
                Authorization:`Basic ${basic}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body:new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: process.env.SPOTIFY_RTOKEN!,
            })
        })

        const tokenData= await tokenRes.json();
        
        console.log("token data - ", tokenData);

        if(!tokenData.access_token){
            return Response.json({
                message:"failed to fetch spotify song",
                status:500
            })
        }
        const access_token= tokenData.access_token;

        const nowRes= await fetch(NOW_PLAYING_ENDPOINT, {
            headers:{
                Authorization: `Bearer ${access_token}`,
            }
        })

        //fallback to recent played song
        if(nowRes.status === 403){
            const recentRes= await fetch(RECENT_ENDPOINT, {
                headers:{
                    Authorization:`Bearer ${access_token}`,
                }
            })

              if (!recentRes.ok) {
                    const text = await recentRes.text();
                    console.log("recent error:", text);

                    return Response.json({
                    isPlaying: false,
                    message: "No active playback device",
                    });
                }

                const recentData = await recentRes.json();
                const song = recentData.items?.[0];

                if (!song) {
                    return Response.json({ isPlaying: false });
                }

            return Response.json({
                isPlaying: false,
                title: song.track.name,
                artist: song.track.artists.map((a: any) => a.name).join(", "),
                albumImage: song.track.album.images[0].url,
                songUrl: song.track.external_urls.spotify,
            });
        }

        // const data= await nowRes.json();
        console.log("data in api -", nowRes)
        // const data= nowPlayingData.items[0]
        // return Response.json({
        //     isPlaying: data.is_playing,
        //     title: data.item.name,
        //     artist: data.item.artists.map((a: any) => a.name).join(", "),
        //     albumImage: data.item.album.images[0].url,
        //     songUrl: data.item.external_urls.spotify,
        // });

    }catch(e){
        console.log("error in get api= ", e);
    }
}