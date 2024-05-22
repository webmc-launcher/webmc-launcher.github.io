window.eaglercraftXOpts = {
    container: "game_frame",
    assetsURI: "assets.epk",
    localesURI: "lang/",
    servers: [
        {
            addr: "wss://eagler.eaglesmp.org",
            name: "EagleSMP #1"
        },
        {
            addr: "wss://eagler.colbster937.dev",
            name: "EagleSMP #2"
        },
        {
            addr: "wss://eagler-backrooms.colbster937.dev",
            name: "The Backrooms"
        }
    ],
    "relays": [
        {
            "addr": "wss://eagler-relay.colbster937.dev/",
            "comment": "Colbster937's Relay",
            "primary": true
        },
        {
            "addr": "wss://eagler-relay.eaglesmp.org/",
            "comment": "Colbster937's Relay",
            "primary": false
        },
        {
            "addr": "wss://relay.deev.is/",
            "comment": "LAX1DUDE's Shared World Relay #1",
            "primary": false
        },
        {
            "addr": "wss://relay.lax1dude.net/",
            "comment": "LAX1DUDE's Shared World Relay #2",
            "primary": false
        },
        {
            "addr": "wss://relay.shhnowisnottheti.me/",
            "comment": "ayunami's Public Relay",
            "primary": false
        }
    ]
};