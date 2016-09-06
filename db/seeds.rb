User.destroy_all
Album.destroy_all
Song.destroy_all

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
    artURL: "assets/images/album_covers/01.png"
)

Album.create!(
    title:  "The Telephone",
    artist: "Guglielmo Marconi",
    label:  "EM",
    year:   "1909",
    artURL: "/assets/images/album_covers/20.png"
)

Album.create!(
    title:  "The Fake Album",
    artist: "Fake McFake",
    label:  "EMI",
    year:   "2016",
    artURL: "/assets/images/album_covers/03.png"
)

albums = Album.all

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

marconiSongs = [
    { title: "Hello, Operator?",     duration: 61000 },
    { title: "Ring, ring, ring",     duration: 301000 },
    { title: "Fits in your pocket",  duration: 201000 },
    { title: "Can you hear me now?", duration: 194000 },
    { title: "Wrong phone number",   duration: 135000 }
]

marconiSongs.each do |song|
    Album.second.songs.create!(
        title:    song[:title],
        duration: song[:duration],
        audioURL: song[:audioUrl]
    )
end

fakeSongs = [
        { title: "Fake song",           duration: 61000 },
        { title: "Fake, fake, fake",    duration: 361000 },
        { title: "Fake in your pocket", duration: 572000 },
        { title: "Another fake song",   duration: 311000 },
        { title: "Fake phone number",   duration: 317000 }
]

fakeSongs.each do |song|
    Album.third.songs.create!(
        title:    song[:title],
        duration: song[:duration],
        audioURL: song[:audioUrl]
    )
end

songs = Song.all

p "#{users.count} users created"
p "#{albums.count} albums created"
p "#{songs.count} songs created"
