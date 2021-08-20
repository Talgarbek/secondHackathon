import React from 'react'
import './Content.css'

import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'

const App = () => {
  const items = [
    {
      id: 1,
      header: 'Факт о Пилотах',
      description:
        'А вы знали, что пилот и помощник пилота перед вылетом едят разную еду? Звучит, конечно, странно, но это предосторожность.Если главный пилот вдруг отравится, то другой пилот должен заменить его.',
      image: 'https://cs4.pikabu.ru/post_img/big/2016/01/09/10/1452359194170116252.jpg'
    },
    {
      id: 2,
      header: 'Германия',
      description:
        'В Германии нет ограничений на скорость. Поэтому эта страна понравится фанатам езды',
      image: 'https://wallpaperaccess.com/full/100898.jpg'
    },
    {
      id: 3,
      header: 'Самолёт',
      description:
        'Белая полоса, которую самолет оставляет за собой в небе, может послужить для предсказания погоды. По толщине этой линии можно определить большая или маленькая влажность воздуха. Очень толстая полоса может означать, что надвигается шторм.',
      image: 'https://c1.wallpaperflare.com/preview/250/281/293/sky-blue-plane-smoke.jpg'
    },
    {
      id: 4,
      header: 'Эверест',
      description:
        'Эверест (Джомолунгма) до сих пор растет. Да-да, гора продолжает расти. Сейчас ее высота около 8850 метров. Но с каждым годом она вырастает еще на 4 мм, приблизительно. Связано это с движением тектонических платформ.',
      image: 'https://vsobolev.com/Image/2015/09/mount-everest-wide-high-definition-wallpaper.jpg'
    },
    {
      id: 5,
      header: 'Лондон',
      description:
        'Если вы любите поезда, то лучший город для вашего путешествия будет Лондон! Там 270 станций, а местное метро самое старое в мире -будет на что посмотреть.',
      image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
    }
  ]
  return (
    <CardView
      items={items}
      activeColor='#dcf4fd'
      imageHeight='350px'
      imageWidth='500px'
    />
  )
}

export default App