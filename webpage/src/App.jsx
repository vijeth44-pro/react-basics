import React from 'react'
import Navbar from './components/navbar.jsx'
import Banner from './components/banner.jsx'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <div className="card-container">
        <Card title={"Watches"} description={"Stylish analog watch for men and boys in chain"} image={'https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/298600-3014_01.png'} />
        <Card title={"Shoes"} description={"Modern Trendy Men Casual Shoes"} image={'https://static.vecteezy.com/system/resources/thumbnails/057/459/922/small_2x/dramatic-rustic-running-shoes-bright-red-transparent-background-cutout-authentic-png.png'}/>
        <Card title={"Flower Pots"} description={"Beautiful Flower vase"} image={'https://static.vecteezy.com/system/resources/thumbnails/023/742/329/small_2x/banana-plant-in-flowerpot-illustration-ai-generative-free-png.png'}/>
        <Card title={"Phones"} description={"All brand phones available"} image={'https://static.vecteezy.com/system/resources/thumbnails/068/681/342/small_2x/3d-render-of-modern-smartphone-with-blue-screen-isolated-on-transparent-background-png.png'}/>
      </div>
    </div>
  )
}

export default App