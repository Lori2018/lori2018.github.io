import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import Footer from "../components/footer.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Walmart</title>
        <link rel="icon" href="/walmart.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="container-fluid nopadding" paddingRight={0}>
        <div className="row nopadding banner">
          <Image
            className="big-img"
            width="250px"
            height="600px"
            src={
              "https://images.unsplash.com/photo-1584680226833-0d680d0a0794?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            }
          />
          <div className="banner-title">
            <h1 className="banner-title-1">
              Search for your favorite products
            </h1>
            <h1 className="banner-title-2">
              Use the new Scan tool for a speedy checkout!
            </h1>
          </div>
          {/* <div className="col big-text nopadding">
            <br />
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Find your
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;favorite products
          </div>
          <div className="col nopadding hh">
            <Image className='big-img' width='1000%' height='800%' src={'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} />
          </div> */}
        </div>
        <div className="row">
          <Link href="https://www.walmart.com/grocery">
            <div className="col store-item link">
              <Image
                width="200%"
                height="200%"
                src="https://images.pexels.com/photos/3737612/pexels-photo-3737612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <br />
              Grocery
            </div>
          </Link>
          <Link href="https://www.walmart.com/cp/household-essentials/1115193">
            <div className="col store-item link">
              <Image
                width="200%"
                height="200%"
                src="https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <br />
              Home
            </div>
          </Link>
          <Link href="https://www.walmart.com/cp/office-supplies/1229749">
            <div className="col store-item link">
              <Image
                width="200%"
                height="200%"
                src="https://images.pexels.com/photos/265129/pexels-photo-265129.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <br />
              Office
            </div>
          </Link>
          <Link href="https://www.walmart.com/cp/household-essentials/1115193walmart%20clothes">
            <div className="col store-item link">
              <Image
                width="200%"
                height="200%"
                src="https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <br />
              Clothes
            </div>
          </Link>
        </div>
        <div className="row walmart-row up-pad">
          <div className="sale-text">SALE!</div>
          <Link href="https://www.walmart.com/ip/Apple-MacBook-Air-13-3-with-Retina-Display-1-1GHz-Quad-Core-Intel-Core-i5-8GB-Memory-256GB-SSD-Gold-Early-2020/696028161">
            <div className="col store-item link sale-product">
              <Image
                width="200%"
                height="200%"
                src="https://i5.walmartimages.com/asr/07310ddb-16e2-477e-8c38-37307844d3c1.d9d31a1332d898798a01e768c77ed901.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"
              />
              <br />
              Macbook Air ($799.99)
            </div>
          </Link>
          <Link href="https://www.walmart.com/ip/5-Pack-Goli-Nutrition-Apple-Cider-Vinegar-60-ct-per-bottle/951694708">
            <div className="col store-item link sale-product">
              <Image
                width="200%"
                height="200%"
                src="https://i5.walmartimages.com/asr/f490b371-3608-4bed-b9a2-4139c5e68942.44ce7477def07c798ef36b544de8b5be.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"
              />
              <br />
              Apple Cider Vinegar ($65.94)
            </div>
          </Link>
          <Link href="https://www.walmart.com/ip/Refurbished-Apple-iPhone-XR-64GB-Factory-Unlocked-Smartphone-4G-LTE-iOS-Smartphone/507583254">
            <div className="col store-item link sale-product">
              <Image
                width="200%"
                height="200%"
                src="https://i5.walmartimages.com/asr/e954daac-dfc1-4a40-b6a3-4a331bcf681e_1.42bcefaa22b1aa7ce0e2097ca0d8ff1d.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"
              />
              <br />
              Refurbished iPhone XR ($305)
            </div>
          </Link>
          <Link href="https://www.walmart.com/ip/Skechers-After-Burn-M-Fit-Slip-On-Walking-Shoe-Men-s/309228777">
            <div className="col store-item link sale-product">
              <Image
                width="200%"
                height="200%"
                src="https://i5.walmartimages.com/asr/70e015a8-f904-4c9b-990a-469019e432a5_1.df7858c36577a812453018655f3dac76.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"
              />
              <br />
              Men's Sketchers ($30)
            </div>
          </Link>
        </div>
        <div className="row walmart-row down-pad">
          <Link href="https://www.walmart.com/col/Sunscreen-Deals-Up-to-20-off/822317451">
            <div className="col store-item link sale-product">
              <Image
                width="200%"
                height="200%"
                src="https://i5.walmartimages.com/asr/31ee3a5c-acf7-42b4-9a52-cba13d1e56c1.209d0168504f48445103da0820931bb6.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"
              />
              <br />
              Sunscreen ($20.75)
            </div>
          </Link>
          <Link href="https://www.walmart.com/col/Check-out-some-of-our-best-selling-Mirrors/876768912">
            <div className="col store-item link sale-product">
              <Image
                width="200%"
                height="200%"
                src="https://i5.walmartimages.com/asr/54fa07d5-6895-4922-9b20-32d623ad436e.a26bf7d508f324a5830a211d53f2d7ca.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"
              />
              <br />
              Mirrors ($49.99)
            </div>
          </Link>
          <Link href="https://www.walmart.com/ip/Best-Choice-Products-Set-of-2-Adjustable-Zero-Gravity-Lounge-Chair-Recliners-for-Patio-Pool-with-Cup-Holders-Beige/44924709">
            <div className="col store-item link sale-product">
              <Image
                width="200%"
                height="200%"
                src="https://i5.walmartimages.com/asr/3dd44a1f-9e08-4315-bbcd-ea4bd1818336_1.8047fbdbc80f28db6894805846f17eb9.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"
              />
              <br />
              Lounge Chair ($125)
            </div>
          </Link>
          <Link href="https://www.walmart.com/col/Women-apos-s-Designer-Perfumes-30-50-Off/638809888">
            <div className="col store-item link sale-product">
              <Image
                width="200%"
                height="200%"
                src="https://i5.walmartimages.com/asr/3c2573a1-0274-4429-9537-c8ff29f6acec.855d2380e47ce5a2c75384878d46deb1.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"
              />
              <br />
              Designer Perfume ($25.81)
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
