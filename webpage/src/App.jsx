import React from 'react'
import Navbar from './components/navbar.jsx'
import Banner from './components/banner.jsx'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <div style={{display:'flex', gap:'20px', padding:'20px'}}>
        <Card title={"Watch"} description={"Stylish analog watch for men and boys in chain"} image={'https://images.meesho.com/images/products/400056869/ne0yw_512.avif?width=360'} />
        <Card title={"Shoe"} description={"Modern Trendy Men Casual Shoes"} image={'https://images.meesho.com/images/products/434491245/jmvmi_512.avif?width=360'}/>
        <Card title={"Flower Pots [Plastic]"} description={"5 PIS COMBO OF THE Plastic Round Flower Pots for Home Planters, Terrace, Garden Etc | Pack of 05 | Multicolor | Suitable for Home Indoor & Outdoor Gardening Plants"} image={'https://images.meesho.com/images/products/422365361/lr4v0_512.avif?width=512'}/>
        <Card title={"Oppo"} description={"OPPO A77s 8GB 128GB Starry Black- 4G Smartphone"} image={'https://images.meesho.com/images/products/540547590/kbjmx_512.avif?width=512'}/>
        <Card title={"Ghar Soap"} description={"GHAR SOAPS MAGIC SOAP 100 GM"} image={'https://images.meesho.com/images/products/328554683/rrzge_512.avif?width=512'}/>
      </div>
    </div>
  )
}

export default App