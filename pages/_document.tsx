import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <meta
            name="description"
            content="Afiada Mbosuo is about to go down live on Adom 106.3 FM from 7pm till 11pm with Papa Bills."
          />
          <meta property="og:site_name" content="dj-bills-nabekah.vercel.app" />
          <meta
            property="og:description"
            content="See pictures not posted on any social media."
          />
          <meta property="og:title" content="DJ Papa Bills" />
                          </Head>
        <body className="antialiased font-poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
