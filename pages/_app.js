/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-pink-800 min-h-screen" >
      <nav className="border-b p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <p className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-800 text-black">NFT Marketplace</p>
        <div className="flex mt-4 justify-center items-center">
        <Link href="/create-nft">
            <a className="mr-6 text-500 bg-yellow-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-full">
              Mint NFT
            </a>
          </Link>
          <Link href="/">
            <a className="mr-4 text-500 bg-yellow-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-full">
              Buy 
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-500 bg-yellow-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-full">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-6 text-500 bg-yellow-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-none rounded-3xl">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp