User.destroy_all
Song.destroy_all
Album.destroy_all


# Create users
usernames = ["Bert", "Ernie", "Calvin", "Hobbes"]
emails    = ["bert@example.com", "ernie@example.com", "calvin@user.com", "hobbes@tiger.com"]

4.times do |i|
    User.create!(
    username: usernames[i],
    email:    emails[i],
    password: "password",
    confirmed_at: Time.now.utc
    )
end

users = User.all

Album.create!(
    title:  "The Colors",
    artist: "Pablo Picasso",
    label:  "Cubism",
    year:   "1881",
    artURL: "/assets/images/album_covers/1.png"
)

picassoSongs = [
    { title: "Blue",    duration: 161710, audioUrl: "/assets/music/blue"    },
    { title: "Green",   duration: 103960, audioUrl: "/assets/music/green"   },
    { title: "Red",     duration: 268450, audioUrl: "/assets/music/red"     },
    { title: "Pink",    duration: 153140, audioUrl: "/assets/music/pink"    },
    { title: "Magenta", duration: 374220, audioUrl: "/assets/music/magenta" }
]

picassoSongs.each do |song|
    Album.first.songs.create!(
        title:    song[:title],
        duration: song[:duration],
        audioURL: song[:audioUrl]
    )
end


19.times do |i|
    Album.create!(
        title:  "The Fake Album",
        artist: "Faker McFake",
        label:  "EMI",
        year:   "2020",
        artURL: "/assets/images/album_covers/#{i + 2}.png"
    )
end

albums = Album.all


fakeSongs = [
    { title: "Hello, Operator?",     duration: 161710, audioUrl: "/assets/music/blue"    },
    { title: "Ring, ring, ring",     duration: 103960, audioUrl: "/assets/music/green"   },
    { title: "Fits in your pocket",  duration: 268450, audioUrl: "/assets/music/red"     },
    { title: "Can you hear me now?", duration: 153140, audioUrl: "/assets/music/pink"    },
    { title: "Wrong phone number",   duration: 374220, audioUrl: "/assets/music/magenta" },
    { title: "Fake song",            duration: 161710, audioUrl: "/assets/music/blue"    },
    { title: "Fake, fake, fake",     duration: 103960, audioUrl: "/assets/music/green"   },
    { title: "Fake in your pocket",  duration: 268450, audioUrl: "/assets/music/red"     },
    { title: "Another fake song",    duration: 153140, audioUrl: "/assets/music/pink"    },
    { title: "Fake phone number",    duration: 374220, audioUrl: "/assets/music/magenta" }
]

albums[1..19].each do |album|
    5.times do |i|
        song = fakeSongs.sample
        album.songs.create!(
            title:    song[:title],
            duration: song[:duration],
            audioURL: song[:audioUrl]
        )
    end
end


songs = Song.all


users.each do |user|
    user.playlists.create!(
        name: "My Playlist",
        description: "An awesome playlist",
        artURL: "/assets/images/album_covers/#{Random.new.rand(1..20)}.png"
    )
end

playlists = Playlist.all


playlists.each do |playlist|
    10.times do |i|
        playlist.playlistings.create!(
            song: songs.sample
        )
    end
end

p "#{users.count} users created"
p "#{albums.count} albums created"
p "#{songs.count} songs created"
