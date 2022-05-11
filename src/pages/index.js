import Head from "next/head";
import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Layout from "@components/Layout";
import Container from "@components/Container";
import Button from "@components/Button";
import styles from "@styles/Page.module.scss";

export default function Home({ home, products }) {
  const { mainTitle, mainText, mainBackground, mainLink } = home;
  return (
    <Layout>
      <Head>
        <title>My Store</title>
        <meta name="description" content="Get your fav products!" />
      </Head>

      <Container>
        <h1 className="sr-only">My Store</h1>

        <div className={styles.hero}>
          <Link href={mainLink}>
            <a>
              <div className={styles.heroContent}>
                <h2>{mainTitle}</h2>
                <p>{mainText}</p>
              </div>
              <img
                className={styles.heroImage}
                width={mainBackground.width}
                height={mainBackground.height}
                src={mainBackground.url}
                alt=""
              />
            </a>
          </Link>
        </div>

        <h2 className={styles.heading}>Featured</h2>

        <ul className={styles.products}>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <Link href={`products/${product.slug}`}>
                  <a>
                    <div className={styles.productImage}>
                      <img
                        width="500"
                        height="500"
                        width={product.image.width}
                        height={product.image.height}
                        src={product.image.url}
                        alt=""
                      />
                    </div>
                    <h3 className={styles.productTitle}>{product.name}</h3>
                    <p className={styles.productPrice}>${product.price}</p>
                  </a>
                </Link>
                <p>
                  <Button>Add to Cart</Button>
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-ap-south-1.graphcms.com/v2/cl2k2ukjm00q601xkbtyy7oi0/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageHome {
        page(where: { slug: "home" }) {
          id
          mainLink
          mainText
          mainTitle
          name
          slug
          mainBackground
        }

        products(where: { categories_some: { slug: "featured" } }) {
          id
          slug
          name
          price
          image
        }
      }
    `,
  });
  const home = data.data.page;
  const products = data.data.products;

  return {
    props: {
      home,
      products,
    },
  };
}
