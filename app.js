const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/video', (req, res) => {
    const app = [
        {
            id: 1,
            img_url1: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png',
            img_url2: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png',
            txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita',
            txt2: 'Coke Studio Bangla',
            img_url3: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png',
            txt3: '24k Views.8 days ago'
        },
        {
            id: 2,
            img_url1: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png',
            img_url2: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png',
            txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita',
            txt2: 'Coke Studio Bangla',
            img_url3: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png',
            txt3: '24k Views.8 days ago'
        },
        {
            id: 3,
            img_url1: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png',
            img_url2: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png',
            txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita',
            img_url3: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png',
            txt3: '24k Views.8 days ago'
        },
        {
            id: 4,
            img_url1: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png',
            img_url2: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png',
            txt1: 'MY MIX',
            txt2: 'Coke Studio Bangla',
            txt3: '24k Views.8 days ago',
          
        },
        {
            id: 5,
            img_url1: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png',
            img_url2: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png',
            txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita',
            txt2: 'Coke Studio Bangla',
            txt3: '24k Views.8 days ago'
        },
        {
            id: 6,
            img_url1: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png',
            img_url2: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png',
            txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita',
            txt2: 'Coke Studio Bangla',
            img_url3: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png',
            txt3: '24k Views.8 days ago'
        },
        {
            id: 7,
            img_url1: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png',
            img_url2: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png',
            txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita',
            txt2: 'Coke Studio Bangla',
            img_url3: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png',
            txt3: '24k Views.8 days ago'
        },
        {
            id: 8,
            img_url1: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png',
            img_url2: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png',
            txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita',
            txt2: 'Coke Studio Bangla',
            txt3: '24k Views.8 days ago'
        },
        {
            id: 9,
            img_url1: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png',
            img_url2: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png',
            txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita',
            txt2: 'Coke Studio Bangla',
            img_url3: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png',
            txt3: '24k Views.8 days ago'
        },
        {
            id: 10,
            img_url1: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png',
            img_url2: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png',
            txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita',
            txt2: 'Coke Studio Bangla',
            txt3: '24k Views.8 days ago'
        },
        {
            id: 11,
            img_url1: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png',
            img_url2: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png',
            txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita',
            txt2: 'Coke Studio Bangla',
            txt3: '24k Views.8 days ago'
        },
        {
            id: 12,
            img_url1: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png',
            txt1: 'Bulbli|Coke Studio Bangla|Season One|Ritu Raj X Nandita',
            txt2: 'Coke Studio Bangla',
            img_url3: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png',
            txt3: '24k Views.8 days ago'
        }
    ];

    res.json(app);
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);});





