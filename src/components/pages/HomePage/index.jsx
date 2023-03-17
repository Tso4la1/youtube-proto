import React from 'react';
import { ProPic } from '../../atoms/ProPic';
import { Thumbnails } from '../../atoms/thumbnails';
import { TemplatePage } from '../../template/TemplatePage';
import { Title } from '../../atoms/Title';
import { Text } from '../../atoms/Text';



const gallery = [
    {
        id: 1,
        thumbnail: <Thumbnails photo="thumb1" />,
        profile: <ProPic pro="first" />,
        title: <Title tite="first" />,
        info: <Text info="letter1" />
    },
    {
        id: 2,
        thumbnail: <Thumbnails photo="thumb2" />,
        profile: <ProPic pro="second" />,
        title: <Title tite="first" />,
        info: <Text info="letter1" />
    },
    {
        id: 3,
        thumbnail: <Thumbnails photo="thumb3" />,
        profile: <ProPic pro="second" />,
        title: <Title tite="first" />,
        info: <Text info="letter1" />
    },
    {
        id: 4,
        thumbnail: <Thumbnails photo="thumb4" />,
        profile: <ProPic pro="second" />,
        title: <Title tite="first" />,
        info: <Text info="letter1" />
    },
    {
        id: 5,
        thumbnail: <Thumbnails photo="thumb5" />,
        profile: <ProPic pro="second" />,
        title: <Title tite="first" />,
        info: <Text info="letter1" />
    },
    {
        id: 6,
        thumbnail: <Thumbnails photo="thumb6" />,
        profile: <ProPic pro="second" />,
        title: <Title tite="first" />,
        info: <Text info="letter1" />
    },
    {
        id: 7,
        thumbnail: <Thumbnails photo="thumb7" />,
        profile: <ProPic pro="second" />,
        title: <Title tite="first" />,
        info: <Text info="letter1" />
    },
    {
        id: 8,
        thumbnail: <Thumbnails photo="thumb8" />,
        profile: <ProPic pro="second" />,
        title: <Title tite="first" />,
        info: <Text info="letter1" />
    },
    {
        id: 9,
        thumbnail: <Thumbnails photo="thumb9" />,
        profile: <ProPic pro="second" />,
        title: <Title tite="first" />,
        info: <Text info="letter1" />
    },
    {
        id: 10,
        thumbnail: <Thumbnails photo="thumb10" />,
        profile: <ProPic pro="second" />,
        title: <Title tite="first" />,
        info: <Text info="letter1" />
    },
    {
        id: 11,
        thumbnail: <Thumbnails photo="thumb11" />,
        profile: <ProPic pro="second" />,
        title: <Title tite="first" />,
        info: <Text info="letter1" />
    },
    {
        id: 12,
        thumbnail: <Thumbnails photo="thumb12" />,
        profile: <ProPic pro="second" />,
        title: <Title tite="first" />,
        info: <Text info="letter1" />
    },

]

export const HomePage = () => {
    return (
        <div>
            <TemplatePage gallery={ gallery } />
        </div>
    )
}
