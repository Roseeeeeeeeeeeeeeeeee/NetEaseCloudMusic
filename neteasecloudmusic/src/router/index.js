import Vue from "vue";
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import MyPage from '@/views/MyPage.vue';
import FriendPage from '@/views/FriendPage.vue';
import  StorePage  from '@/views/StorePage.vue';
import MusicianPage from '@/views/MusicianPage.vue';
import AdSongPage from '@/views/AdSongPage.vue';
import DownloadPage from '@/views/DownloadPage.vue';
import ToplistPage from "@/views/Toplist.vue";
import PlaylistPage from "@/views/Playlist.vue";
import DjradioPage from "@/views/DjradioPage.vue";
import ArtistPage from "@/views/Artist.vue";
import AlbumPage from "@/views/Album.vue";
Vue.use(Router)

export default new Router({
    routes:[
        {
            path : '/',
            name :  'Home',
            component : HomePage
        },
        {
            path : '/discover',
            name : 'discover',
            component : HomePage,
            children : [
                { path :'toplist',name :'toplist',component : ToplistPage },
                { path :'playlist',name :'playlist',component : PlaylistPage },
                { path :'djradio',name :'djradio',component : DjradioPage },
                { path :'artist',name :'artist',component : ArtistPage },
                { path :'album',name :'album',component : AlbumPage },
            ]
        },
        {
            path : '/my',
            name : 'my',
            component : MyPage
        },
        {
            path : '/friend',
            name : 'friend',
            component : FriendPage
        },
        {
            path : '/store',
            name : 'store',
            component : StorePage
        },
        {
            path : '/musician',
            name : 'musician',
            component : MusicianPage
        },
        {
            path : '/ad-song',
            name : 'ad-song',
            component : AdSongPage
        },
        {
            path : '/download',
            name : 'download',
            component : DownloadPage
        },

    ]
})