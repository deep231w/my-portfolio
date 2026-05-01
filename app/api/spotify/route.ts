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
                Authorisation:`Basic ${basic}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body:new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
            })
        })

        const accessToken= await tokenRes.json();

        const nowRes= await fetch(NOW_PLAYING_ENDPOINT, {
            headers:{
                Authorization: `Bearer ${accessToken}`,
            }
        })

        //fallback to recent played song
        if(nowRes.status === 204){
            const recentlyPlayed= await fetch(RECENT_ENDPOINT, {
                headers:{
                    Authorization:`Bearer ${accessToken}`,
                }
            })

            const recentData=  await  recentlyPlayed.json();
            const song= recentData.items[0];

            return Response.json({
                isPlaying: false,
                title: song.track.name,
                artist: song.track.artists.map((a: any) => a.name).join(", "),
                albumImage: song.track.album.images[0].url,
                songUrl: song.track.external_urls.spotify,
            });
        }

        const data= await nowRes.json();
        // const data= nowPlayingData.items[0]
        return Response.json({
            isPlaying: data.is_playing,
            title: data.item.name,
            artist: data.item.artists.map((a: any) => a.name).join(", "),
            albumImage: data.item.album.images[0].url,
            songUrl: data.item.external_urls.spotify,
        });

    }catch(e){
        console.log("error in get api= ", e);
    }
}