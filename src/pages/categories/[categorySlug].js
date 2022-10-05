import Head from "next/head";
import Link from "next/link";
import Layout from "@components/Layout";
import Header from "@components/Header";
import Container from "@components/Container";
import Button from "@components/Button";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import styles from "@styles/Page.module.scss";
import { buildImage } from "@lib/cloudinary";
import Breadcrumbs from "@components/Breadcrumbs";
import SubCategories from "@components/SubCategories";
import Spacer from "@components/Spacer";

const CategoryBreadcrumbs = ({ category, className }) => {
  return (
    <Breadcrumbs className={className}>
      <Breadcrumbs.Crumb href="/">{"Home"}</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/">{category.name}</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
};

export default function Category({ category, products }) {
  return (
    <Layout>
      <Head>
        <title>{category.name}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.categoryWrapper}>
        <div className={styles.subCategories}>
          <CategoryBreadcrumbs category={category} />
          <Spacer size={32} />
          <SubCategories />
        </div>

        <Container>
          <CategoryBreadcrumbs category={category} className="mobile" />
          <h2 className={styles.title}>{category.name}</h2>
          <Spacer size={12} />
          <ul className={styles.products}>
            {products.map((product) => {
              const imageUrl = buildImage(product.image.public_id)
                .resize("w_900,h_900")
                .toURL();

              return (
                <li key={product.id}>
                  <Link href={`/products/${product.slug}`}>
                    <a>
                      <div className={styles.productImage}>
                        <img width="900" height="900" src={imageUrl} alt="" />
                      </div>
                      <h3 className={styles.productTitle}>{product.name}</h3>
                      <p className={styles.productPrice}>
                        $ {product.price.toFixed(2)}
                      </p>
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
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: "https://api-ap-south-1.graphcms.com/v2/cl2k2ukjm00q601xkbtyy7oi0/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageCategory($slug: String = "") {
        category(where: { slug: $slug }) {
          id
          name
          slug
          products {
            id
            image
            name
            price
            slug
          }
        }
      }
    `,
    variables: {
      slug: params.categorySlug,
    },
  });

  const category = data.data.category;

  return { props: { category, products: category.products } };
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://api-ap-south-1.graphcms.com/v2/cl2k2ukjm00q601xkbtyy7oi0/master",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query PageCategories {
        categories {
          id
          slug
        }
      }
    `,
  });

  const paths = data.data.categories.map((category) => {
    return {
      params: {
        categorySlug: category.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
