import Head from 'next/head'

export default function PageHead() {
    return (
        <Head>
            <title>Shwetank Singh</title>
            <meta name="description" content="Shwetank Singh-Full Stack Engineer" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            {/* Start OG Tag */}
            <meta property="og:site_name" content="Shwetank Singh" />
            <meta property="og:description" content="Full Stack Engineer" />
            <meta property="og:title" content="Shwetank Singh" />
            <meta property="og:type" content="Personal Website" />
            <meta property="og:url" content="https://iamshwetank.com" />
            <meta property="og:image" content="shwetank.jpg" />
            <link rel="shortcut icon" type="image/x-icon" href="shwetank.jpg" />
        </Head>
    )
}